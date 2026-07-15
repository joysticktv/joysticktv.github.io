---
layout: default
keywords:

title: Developer Support
type: "guide"
subsections:
  - overview
  - clients-public-vs-confidential
  - scopes
  - authorizing-your-bot
  - refreshing-the-access-token
  - inspecting-a-token
  - revoking-access
  - connecting-the-bot
  - receiving-events
  - sending-actions
  - rest-api
  - testing-your-bot
  - example-bots
---

# Developer Support

## Overview

The Joystick bot API lets a third‑party application act on a streamer's behalf — reading and sending chat, reacting to stream events, and moderating — once that streamer has authorized it. Authorization uses **OAuth 2.0**; realtime traffic flows over a **WebSocket gateway** (the Rails [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) protocol), and a **REST API** covers everything that isn't realtime.

Every integration is the same shape: a **bot** (your registered OAuth application) plus a **bot installation** (one streamer's grant to your bot). One streamer installing your bot creates one installation; your app holds a token per installation and acts within the scopes that streamer granted.

**Host:** all API calls go to **`api.joystick.tv`** — the OAuth token endpoints, the REST API, and the WebSocket gateway. The one exception is the **consent screen**, which lives on the main site at **`https://joystick.tv/api/oauth/authorize`** (that's the page the streamer sees and approves).

Here's the flow end to end:

**As a bot developer:**

1. Create a bot application at [joystick.tv](https://joystick.tv) and choose whether it's a **confidential** or **public** client (see below).
2. You receive OAuth credentials — a **Client ID** (and, for confidential clients, a **Client Secret**).

**As a streamer installing a bot:**

1. The bot sends you to the Joystick consent screen listing the permissions it's requesting.
2. You approve, and Joystick redirects back to the bot with a short‑lived **authorization code**.
3. The bot exchanges that code for an **access token** (and a **refresh token**).
4. The bot uses the access token to connect to the gateway and call the REST API on your behalf.

## Clients: public vs confidential

When you create a bot you choose a **client type**. This is separate from whether your bot is listed in the marketplace (see [Public vs private bots](#public-vs-private-bots) at the end) — it determines **how your bot authenticates**.

| | Confidential client | Public client |
|---|---|---|
| Who | Server‑side bots that can keep a secret | Desktop / installed apps (e.g. Streamer.bot) that can't hide a secret |
| Auth | **Client Secret** (HTTP Basic) | **PKCE** (RFC&nbsp;7636) — no secret |
| Redirect URI | Exact match | Exact match, **or** a loopback (`http://127.0.0.1/…` / `http://localhost/…`) with **any port** (RFC&nbsp;8252) |
| Access token lifetime | 10 days | 4 hours |

Refresh tokens last **30 days** for both and rotate on each use (see [Refreshing](#refreshing-the-access-token)).

If you're building a desktop app, you want a **public client**: you can't ship a secret in a binary, so you use PKCE and register a loopback redirect like `http://127.0.0.1/callback`. Joystick will accept that callback on whatever local port your app happens to bind.

## Scopes

A bot requests **scopes** — the specific things it wants to do. The streamer sees these on the consent screen and can decline any bot whose scopes they're not comfortable with. Some scopes are **sensitive** and are highlighted for the streamer.

| Scope | Grants | Sensitive |
|---|---|:---:|
| `identity:read` | Read the streamer's profile (username, display name, avatar, ID) | |
| `stream:read` | Read public stream state and receive stream events | |
| `chat:read` | Receive chat messages | |
| `chat:write` | Send chat messages | |
| `followers:read` | List the streamer's followers (usernames only) | |
| `moderators:read` | List the streamer's moderators (usernames only) | |
| `subscribers:read` | List the streamer's subscribers (usernames only) | ⚠️ |
| `chat:whisper:write` | Send whispers as the streamer | ⚠️ |
| `chat:moderate` | Delete messages, ban, and time out users | ⚠️ |
| `moderators:manage` | Add and remove the streamer's moderators | ⚠️ |
| `stream:manage` | Update the streamer's stream settings | ⚠️ |

You request scopes as a space‑separated string in the `scope` parameter (e.g. `chat:read chat:write stream:read`). A token can only ever be **narrower** than what the streamer granted at install — requesting a scope the streamer didn't grant is rejected. If you omit `scope`, the token carries everything the streamer granted.

> The legacy value `scope=bot` still works and means "everything this installation granted." New integrations should request explicit scopes.

## Authorizing your bot

### Step 1 — Send the streamer to the consent screen

Redirect the streamer's browser to:

```txt
https://joystick.tv/api/oauth/authorize
```

Query parameters:

* `response_type` — Required. Must be `code`.
* `client_id` — Required. Your bot's Client ID.
* `scope` — The space‑separated scopes you're requesting (see [Scopes](#scopes)).
* `redirect_uri` — Where to send the streamer back. **Required for public clients.**
* `state` — Optional. An opaque value echoed back to you; use it to protect against [CSRF/MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

**Public clients must also send a PKCE challenge:**

* `code_challenge` — Base64URL of `SHA256(code_verifier)`, 43 characters, no padding.
* `code_challenge_method` — Must be `S256`. (`plain` is not accepted.)

Where `code_verifier` is a high‑entropy random string you generate and keep; you'll send it later at the token step.

Example (public client):

```txt
https://joystick.tv/api/oauth/authorize?response_type=code&client_id=00000000-0000-0000-0000-000000000000&scope=chat%3Aread%20chat%3Awrite%20stream%3Aread&redirect_uri=http%3A%2F%2F127.0.0.1%3A7395%2Fcallback&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256&state=myspecialtoken
```

After the streamer approves, Joystick redirects to your `redirect_uri` with `code` and `state` query params.

> If the `state` you receive doesn't match the one you sent, **stop** — treat it as a tampered request and discard the exchange.

Authorization codes are short‑lived — they expire in **10 minutes** and are single‑use.

### Step 2 — Exchange the code for tokens

`POST` to the token endpoint (note: **`api.joystick.tv`**):

```txt
https://api.joystick.tv/api/oauth/token
```

Send these as form parameters:

* `grant_type` — `authorization_code`
* `code` — The authorization code from Step 1.
* `redirect_uri` — The same `redirect_uri` you used in Step 1.
* `code_verifier` — **Public clients only.** The verifier whose SHA‑256 you sent as `code_challenge`.
* `client_id` — **Public clients only.** Your Client ID (public clients identify themselves here since they have no secret).

Headers:

* `Content-Type` — `application/x-www-form-urlencoded`
* `Accept` — `application/json`
* `Authorization` — **Confidential clients only.** `Basic <base64(client_id:client_secret)>`.
* `X-JOYSTICK-STATE` — Optional. Any value here is echoed back on the response.

**Confidential client example:**

```bash
curl -XPOST \
  -H "Authorization: Basic YOUR_BASIC_KEY" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/json" \
  "https://api.joystick.tv/api/oauth/token" \
  -d "grant_type=authorization_code&code=YOUR_CODE&redirect_uri=YOUR_REDIRECT_URI"
```

**Public client example (PKCE):**

```bash
curl -XPOST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/json" \
  "https://api.joystick.tv/api/oauth/token" \
  -d "grant_type=authorization_code&code=YOUR_CODE&redirect_uri=http://127.0.0.1:7395/callback&client_id=YOUR_CLIENT_ID&code_verifier=YOUR_CODE_VERIFIER"
```

Returns:

```json
{
  "access_token": "A_JSON_WEB_TOKEN",
  "token_type": "Bearer",
  "expires_in": 14400,
  "refresh_token": "A_REFRESH_TOKEN"
}
```

* `access_token` — A JWT. Present it as `Authorization: Bearer <access_token>` on REST calls, and as the `?token=` on the gateway connection.
* `expires_in` — Lifetime **in seconds** (e.g. `14400` = 4 hours for a public client, `864000` = 10 days for a confidential client).
* `refresh_token` — Use this to get a new access token when the current one expires.

> `client_credentials` is **not** supported — every bot acts through a streamer's installation, so there is always an authorization‑code + refresh‑token flow.

## Refreshing the access token

Access tokens expire. When yours does, exchange your refresh token for a fresh pair. `POST` to the same token endpoint:

```txt
https://api.joystick.tv/api/oauth/token
```

Form parameters:

* `grant_type` — `refresh_token`
* `refresh_token` — Your most recent refresh token.
* `client_id` — Public clients include their Client ID.

Headers are the same as Step 2 (Basic auth for confidential clients; none required for public clients).

```bash
curl -XPOST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Accept: application/json" \
  "https://api.joystick.tv/api/oauth/token" \
  -d "grant_type=refresh_token&refresh_token=YOUR_REFRESH_TOKEN&client_id=YOUR_CLIENT_ID"
```

The response is the same shape as before, with a **new** `access_token` **and a new `refresh_token`**.

> **Refresh tokens rotate.** Each refresh invalidates the token you just used and returns a new one — always store the newest. If a previously‑used (or revoked) refresh token is presented again, **every** outstanding token for that installation is revoked as a safety measure. Never reuse an old refresh token.

## Inspecting a token

Use introspection (RFC&nbsp;7662) to check whether a token is still valid — handy at startup:

```bash
curl -XPOST \
  -H "Authorization: Basic YOUR_BASIC_KEY" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  "https://api.joystick.tv/api/oauth/introspect" \
  -d "token=THE_TOKEN"
```

(Public clients send `client_id=YOUR_CLIENT_ID` as a form param instead of the Basic header.)

Returns, for a live token:

```json
{
  "active": true,
  "client_id": "YOUR_CLIENT_ID",
  "username": "streamer_username",
  "exp": 1782000000,
  "iat": 1781985600,
  "sub": "the_installation_id",
  "token_type": "Bearer"
}
```

An expired, revoked, unknown, or another bot's token returns simply `{ "active": false }`.

## Revoking access

To immediately invalidate a token (RFC&nbsp;7009) — for example when a streamer uninstalls in your app:

```bash
curl -XPOST \
  -H "Authorization: Basic YOUR_BASIC_KEY" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  "https://api.joystick.tv/api/oauth/revoke" \
  -d "token=THE_REFRESH_TOKEN"
```

(Public clients authenticate with `client_id` alone.) The endpoint always returns `200` — pass the **refresh token** to kill the installation's tokens.

## Connecting the bot

Realtime chat and events flow over a single WebSocket. Open a connection to:

```txt
wss://api.joystick.tv/cable?token=YOUR_ACCESS_TOKEN
```

using the `?token=` you received from the token endpoint (the JWT access token), and the WebSocket subprotocol **`actioncable-v1-json`**.

> If your WebSocket library doesn't send a subprotocol automatically, set the request header `Sec-WebSocket-Protocol: actioncable-v1-json`. Sending it matters — it's how the edge recognizes the connection.

One connection serves your whole application. Every streamer who installed your bot is reachable over this same socket, keyed by a `channelId` (see below).

### Subscribing

Once the socket is open, send a `subscribe` message (JSON). Opt into the **v2 event envelope** — the current, uniform event format — by passing `event_version`:

```json
{
  "command": "subscribe",
  "identifier": "{\"channel\":\"GatewayChannel\",\"event_version\":\"v2\"}"
}
```

On success you receive:

```json
{ "type": "confirm_subscription", "identifier": "{\"channel\":\"GatewayChannel\",\"event_version\":\"v2\"}" }
```

and on failure `type: "reject_subscription"`. If the connection is unauthorized, the socket closes with code **`4401`**.

> Omitting `event_version` gives you the older v1 envelope (documented under [the legacy format](#legacy-v1-envelope)). New integrations should use **v2**.

## Receiving events

**PING** — a keep‑alive. `type` is `ping`, `message` is a unix timestamp. (ActionCable sends this as a message, not a protocol ping, for universal client support.)

```json
{ "type": "ping", "message": 1782000000 }
```

**Events (v2 envelope)** — every event your bot receives shares one uniform shape; only `data` differs by event type:

```json
{
  "message": {
    "v": 2,
    "type": "chat_message",
    "id": "a-uuid",
    "channel_id": "the-channel-hash",
    "occurred_at": "2026-07-15T18:29:49Z",
    "text": "a human-readable summary",
    "data": { }
  }
}
```

* `type` — the event, snake_cased (`chat_message`, `tipped`, `followed`, `subscribed`, `enter_stream`, `leave_stream`, `wheel_spin_claimed`, `stream_started`, `stream_ending`, …).
* `channel_id` — a stable hash identifying the streamer. It never changes, even if the streamer renames. **You use this value to send actions back to that channel.**
* `occurred_at` — RFC 3339 timestamp.
* `text` — a ready‑made display string (some count events, like follower/subscriber/viewer counts, leave this blank).
* `data` — the event‑specific payload (a real JSON object — no double‑parsing).

A chat message (`type: "chat_message"`) carries the full message in `data` — author, streamer, text, emotes, moderator/subscriber flags, etc. Presence events (`enter_stream` / `leave_stream`) carry `data: { "username": "..." }`. Stream events carry their metadata in `data`.

> The list of stream event types grows over time. Treat unknown `type`s gracefully.

## Sending actions

To act on a channel, send a `message` command whose `data` names an `action` and includes the target channel's `channelId`. Everything in `data` is a JSON‑encoded string.

**Send a chat message** — needs `chat:write`:

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{\"action\":\"send_message\",\"text\":\"Hello World\",\"channelId\":\"THE_CHANNEL_ID\"}"
}
```

**Send a whisper** — needs `chat:whisper:write`:

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{\"action\":\"send_whisper\",\"username\":\"someviewer\",\"text\":\"a secret\",\"channelId\":\"THE_CHANNEL_ID\"}"
}
```

**Delete a message** — needs `chat:moderate`. Pass the `messageId`:

```json
{ "command": "message", "identifier": "{\"channel\":\"GatewayChannel\"}", "data": "{\"action\":\"delete_message\",\"messageId\":\"UUID\",\"channelId\":\"THE_CHANNEL_ID\"}" }
```

**Mute (time out) a user** — needs `chat:moderate`. Pass the `messageId`; the message's author is muted:

```json
{ "command": "message", "identifier": "{\"channel\":\"GatewayChannel\"}", "data": "{\"action\":\"mute_user\",\"messageId\":\"UUID\",\"channelId\":\"THE_CHANNEL_ID\"}" }
```

**Unmute a user** — needs `chat:moderate`. Pass the `username`:

```json
{ "command": "message", "identifier": "{\"channel\":\"GatewayChannel\"}", "data": "{\"action\":\"unmute_user\",\"username\":\"someviewer\",\"channelId\":\"THE_CHANNEL_ID\"}" }
```

**Ban (block) a user** — needs `chat:moderate`. Pass the `messageId`; the message's author is banned:

```json
{ "command": "message", "identifier": "{\"channel\":\"GatewayChannel\"}", "data": "{\"action\":\"block_user\",\"messageId\":\"UUID\",\"channelId\":\"THE_CHANNEL_ID\"}" }
```

> Bans are serious — each one alerts Joystick staff to investigate potential harassment. To **un**‑ban a user, use the [REST endpoint](#moderation) (`DELETE /api/v1/chat/users/:username/ban`).

Actions succeed silently — the resulting message or moderation shows up on the gateway stream. If something goes wrong (missing permission, bad target), you receive an error frame: `{ "error": "..." }`.

## REST API

Everything that isn't realtime is REST, under **`https://api.joystick.tv/api/v1`**. Send:

* `Authorization: Bearer <access_token>` — the JWT from the token endpoint.
* `Content-Type: application/json`

Each endpoint requires a scope (shown below). All paths are relative to `https://api.joystick.tv/api/v1`.

### Identity & installation

| Method & path | Scope | Returns |
|---|---|---|
| `GET /me` | — | Installation summary: `{ channel, bot, permissions: [scopes] }` |
| `GET /me/identity` | `identity:read` | `{ channel_id, username, nickname, photo_url, live }` |

### Stream

| Method & path | Scope | Returns |
|---|---|---|
| `GET /me/stream` | `stream:read` | `{ channel_id, live, live_at, stream_title, view_count, tags, online_photo_url, offline_photo_url }` |
| `PUT /me/stream` | `stream:manage` | Update `stream_title`, `chat_welcome_message`, and/or `tags`. Returns the updated stream. |

```bash
curl -XPUT -H "Authorization: Bearer JWT" -H "Content-Type: application/json" \
  "https://api.joystick.tv/api/v1/me/stream" \
  -d '{"stream_title":"New title","tags":["irl","chatty"]}'
```

### Chat

| Method & path | Scope | Notes |
|---|---|---|
| `POST /chat/messages` | `chat:write` | Body `{ "text": "..." }`. Returns `{ sent, send_mode, text }`. |
| `POST /chat/whispers` | `chat:whisper:write` | Body `{ "text": "...", "username": "..." }`. Returns `{ sent, username }`. |
| `DELETE /chat/messages/:id` | `chat:moderate` | Soft‑deletes a message in this channel. |

### Moderation

| Method & path | Scope | Notes |
|---|---|---|
| `POST /chat/messages/:id/ban` | `chat:moderate` | Bans the message's author. |
| `POST /chat/messages/:id/mute` | `chat:moderate` | Times out the message's author. |
| `DELETE /chat/users/:username/ban` | `chat:moderate` | Un‑bans a user. |
| `POST /moderators` | `moderators:manage` | Body `{ "username": "..." }`. Adds a moderator. |
| `DELETE /moderators/:username` | `moderators:manage` | Removes a moderator. |

### Lists (usernames only, paginated)

Use `page` (default 1) and `per_page` (default 20, max 100).

| Method & path | Scope |
|---|---|
| `GET /followers` | `followers:read` |
| `GET /moderators` | `moderators:read` |
| `GET /subscribers` | `subscribers:read` |

```json
{
  "items": [ { "username": "someone" }, ... ],
  "pagination": { "next_page": "...", "previous_page": "...", "total_items": 30, "total_pages": 3 }
}
```

### Banned words

| Method & path | Scope | Notes |
|---|---|---|
| `GET /banned-words` | `stream:manage` | `{ banned_words: [...] }` |
| `POST /banned-words` | `stream:manage` | Body `{ "word": "..." }`. Adds a banned word. |
| `DELETE /banned-words` | `stream:manage` | Body `{ "word": "..." }`. Removes a banned word. |

## Testing your bot

Testing is tricky if you're not a streamer, since you need a live chat. Confidential clients can use the echo endpoint to fire sample data at their own gateway connection:

```bash
curl -XPOST \
  -H "Authorization: Basic YOUR_BASIC_KEY" \
  -H "Content-Type: application/json" \
  "https://api.joystick.tv/echo" \
  -d '{"sample": {"event": "SendMessage", "data": "!test 123"}}'
```

The sample is delivered to your bot's gateway stream as if it happened in chat. Options:

* `{"sample": {"event": "SendMessage", "data": "!join"}}` — a chat message (great for command testing, e.g. `!tip 123`).
* `{"sample": {"event": "EnterStream"}}` / `{"event": "LeaveStream"}` — presence.
* `{"sample": {"event": "StreamEvent", "data": "Tipped"}}` or `"TipMenu"` — a stream event.

## Example bots

Reference implementations live on our GitHub: [@joysticktv](https://github.com/joysticktv). These demonstrate the full lifecycle — PKCE login, connecting the gateway, and calling the REST API.

---

## Public vs private bots

Independently of client type, a bot is **private by default** — only you (the creator) can install it, and it's not visible to anyone else. Making a bot **public** lists it in the Joystick bot marketplace so any streamer can install it; that requires providing:

* **Website** — a page describing what the bot does and how to configure it.
* **Terms of Service** — what you expect of streamers who install it.
* **Privacy Policy** — how you use their data.

Popular bots may require additional verification by Joystick staff.

## Legacy (v1) envelope

Bots that subscribe **without** `event_version: "v2"` receive the older per‑event envelope, where fields are camelCased (`channelId`, `createdAt`) and `metadata` is a JSON‑encoded string that must be parsed separately. For example a chat message arrives as `{ event: "ChatMessage", type: "new_message", text, author: {...}, streamer: {...}, channelId, createdAt, ... }` and a stream event as `{ event: "StreamEvent", type: "Tipped", text, metadata: "{...}", channelId, createdAt }`. New integrations should prefer the [v2 envelope](#receiving-events); v1 remains for backward compatibility.
