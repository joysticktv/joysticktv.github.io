---
layout: default
keywords:

title: Developer Support
type: "guide"
subsections:
  - overview
  - public-vs-private-bots
  - permissions
  - installing-bot-api
  - fetching-access_token-api
  - fetching-refresh_token-api
  - connecting-the-bot
  - rest-api-endpoints
  - testing-your-bot
  - example-bots
---

# Developer Support

## Overview
The chat API uses the Rails [Actioncable](https://guides.rubyonrails.org/action_cable_overview.html) protocol, and all data is transmitted over Websockets or uses the REST API for certain endpoints. We use OAuth2 for estabishing authorization.

Here's a general flow of how the install and setup process works:

### Creating a bot application

As a bot developer...

1. You will go to joystick.tv and visit the bots application section
1. Select to create a new bot application and fill in the details
1. You will be given OAuth2 credentials for your bot to use in your code
1. You can decide if your bot is private (can only be installed by you), or public (can be installed by any streamer)

### Installing the bot application

As a streamer...

1. User goes to your bot application and requests to install
1. Your bot application redirects the user to joystick.tv to grant permission
1. The user authorizes the install given the permissions you've set and is redirected back to your bot application.
1. Your bot application is given an "authorization_code" which your bot application will use to obtain an `access_token`.
1. Your bot application is now installed on the user's account.
1. Future API endpoints will use the `access_token` for requesting information from the user's account.

## Public vs Private bots

Bots can be either public or private. The difference is that all bots are "private" by default.
This means that only the creator can install this bot, and it is not viewable or searachable by
anyone else.

A Public bot will appear in our bot marketplace allowing all streamers to install your bot. In order to have a public bot, you'll need to provide additional information about your application.

* Website - A link to your public website that details what this bot does and how to configure it
* Terms of Service - A link to your bot's TOS allowing users that install it to know what you expect of them as they use it
* Privacy Policy - A link to your bot's policy on how you use their data.

Bots that become more popular may require additional verification by JoystickTV staff to ensure proper use.

## Permissions

Bot applications can request several different permissions from the streamers. A streamer may choose to not install a bot based on the permissions you've requested. Once your bot is created, you cannot change your permissions. If you do need to change your permissions, you'll need to delete your current bot, and/or create a new one.

* SendMessage - Allows the bot to send a public chat message to the chat.
* SendWhisper - Allows the bot to send a private chat message to a specific user.
* ReadMessages - Allows the bot to receive all chat messages.
* DeleteMessage - Allows the bot to delete a specific chat message.
* BlockUser - Allows the bot to block another user from that streamer's chat. The bot CANNOT block the streamer
* MuteUser - Allows the bot to mute another user on that streamer's chat. The bot CANNOT mute the streamer
* ReceiveStreamEvents - Sends all stream events to the bot. (e.g. `Tipped`, `TipGoalMet`, `SubscriberOnlyStarted`, `StreamDroppedIn`, `GiftedSubscriptions`, `DeviceConnected`, `WheelSpinClaimed`, etc...)
* ViewUserPresence  - Tells the bot when a user has entered or left the chat
* ManageStreamerSettings - Read and Update certain streamer settings. (See the REST API below for more info.)

> More permissions may be added later as the API is expanded

## Installing bot API

Your application should redirect the user to the joystick authorize endpoint.

```txt
https://joystick.tv/api/oauth/authorize
```

You will need to pass the following query params

`response_type` - Required &mdash; the value must be set to `code`
`client_id` - Required &mdash; Your bot's Client ID
`scope` - "bot" &mdash; Not used currently.
`state` - This is an optional string value you can use for validation to ensure data has not been tampered with between OAuth2 transactions.

Example:

```txt
https://joystick.tv/api/oauth/authorize?client_id=2134-sdf-isdf2&scope=bot&state=myspecialtoken
```

## Fetching access_token API

After a streamer has authorized your bot, you will be given an "authorization_code" that will be used to request the `access_token`. This endpoint is the redirect URL you configured when setting up your bot.

After the user has authorized the bot, and is redirected back to your application, you will receive the `code` and `state` query params. The `code` is what you will use to request your `access_token`, and `state` will be the value you originally sent.

> NOTE: If you receive the `state` back, and the value is different than you originally sent, you should immediately cancel all connections as this could be a sign of a [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attack on your bot.

Your application will send an HTTP POST request to the joystick token endpoint.

```txt
https://joystick.tv/api/oauth/token
```

You will need to pass the following query params

* `redirect_uri` - This is not currently used, but may be used in the future.
* `code` - The short-lived authorization code we sent back through the query string.
* `grant_type` - "authorization_code"

As well as the following headers

* `Authorization` - "Basic YOUR_BASIC_KEY". This is HTTP Basic auth using your bot's Client ID as the user, and Client Secret as the password separated by a `:` and converted to Base64. (e.g. `Base64.encode("id:secret")`)
* `Content-Type` - "application/json"
* `X-JOYSTICK-STATE` - An optional value you can use to pass through arbitrary data that will be sent back with the response.


Example:

```bash
curl -XPOST \
  -H "Authorization: Basic YOUR_BASIC_KEY" \
  -H "Content-Type: application/json" \
  "https://joystick.tv/api/oauth/token?redirect_uri=unused&code=YOUR_OAUTH_CODE&grant_type=authorization_code"
```

Returns:

```json
{
  "access_token": "JSON_WEB_TOKEN",
  "token_type": "Bearer",
  "expires_in": 1682098467,
  "refresh_token": "REFRESH_TOKEN"
}
```

## Fetching refresh_token API

The `access_token` has a limit access time, and is sure to expire. Once expired, you can request a new one by sending back the `refresh_token` you received from the previous `/token` call.

Your application will send an HTTP POST request to the joystick token endpoint.

```txt
https://joystick.tv/api/oauth/token
```

You will need to pass the following query params

* `grant_type` - "refresh_token"
* `refresh_token` - The last refresh token you received from us

As well as the following headers

* `Authorization` - "Basic YOUR_BASIC_KEY". This is HTTP Basic auth using your bot's Client ID as the user, and Client Secret as the password separated by a `:` and converted to Base64. (e.g. `Base64.encode("id:secret")`)
* `Content-Type` - "application/json"
* `X-JOYSTICK-STATE` - An optional value you can use to pass through arbitrary data that will be sent back with the response.


Example:

```bash
curl -XPOST \
  -H "Authorization: Basic YOUR_BASIC_KEY" \
  -H "Content-Type: application/json" \
  "https://joystick.tv/api/oauth/token?refresh_token=YOUR_REFRESH_TOKEN&grant_type=refresh_token"
```

Returns:

```json
{
  "access_token": "JSON_WEB_TOKEN",
  "token_type": "Bearer",
  "expires_in": 1682098467,
  "refresh_token": "NEW_REFRESH_TOKEN"
}
```

## Connecting the bot

Your bot's access token will be different from the user's access token. The bot will use the same basic auth key
to connect as you send in the `Authorization` header from previous calls. (e.g. `Base64.encode("id:secret")`)

Create a new WebSocket object using the URL `wss://joystick.tv/cable?token=YOUR_BASIC_KEY`, and protocol `actioncable-v1-json`.

This connection should only be made once for your application. All streamers that install your bot will send messages
over the same websocket connection with different identifiers.

> If your library doesn't request `protocols`, you may need to just add the header `Sec-Websocket-Protocol` with the value `actioncable-v1-json`.

### Subscribing

Once the connection has been opened, you will send a `subscribe` message. This is a JSON formatted object.

```json
{
  "command": "subscribe",
  "identifier": "{\"channel\":\"GatewayChannel\"}"
}
```

If the subscription is successful, you will receive

```json
{
  "type": "confirm_subscription",
  "identifier": "{\"channel\":\"GatewayChannel\"}"
}
```

If the subscription is rejected, you will receive

```json
{
  "type": "reject_subscription",
  "identifier": "{\"channel\":\"GatewayChannel\"}"
}
```

### Receiving messages

Being a websocket API, everything you get from the API will be a message. Each message will have a different structure depending on what the message is.

**PING** - A "ping" is a message that lets you know the connection is still alive. It will come through with `type` of "ping" and `message` as a unix timestamp.

```json
{
  "type":"ping",
  "message":1682098467
}
```

> This sends as message and not a standard ping for universal device compatibility [See Actioncable](https://github.com/rails/rails/blob/bd8aeead92c11dbd82ddb9f114ea63b0daf160b4/actioncable/lib/action_cable/connection/base.rb#L135)


**SUBSCRIPTION** - A subscription is when you connect to a specific streamer's channel. See "Subscribing" above for details

**CHAT MESSAGE** - These are each chat message that someone sends in the streamer's chat. Your most basic message will be sent with `identifier` and `message`.

```json
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "event": "ChatMessage",
    "createdAt": "2023-04-21T18:29:49Z",
    "messageId": "UUID",
    "type": "new_message",
    "visibility": "public",
    "text": "!timer 5m code",
    "botCommand": "timer",
    "botCommandArg": "5m",
    "emotesUsed": [],
    "author": {
      "slug": "joystickuser",
      "username": "joystickuser",
      "usernameColor": null,
      "displayNameWithFlair": {% raw %}"{{{moderatorBadge}}} joystickuser",{% endraw %}
      "signedPhotoUrl": "...",
      "signedPhotoThumbUrl": "...",
      "isStreamer": true,
      "isModerator": true,
      "isSubscriber": false
    },
    "streamer": {
      "slug": "joystickuser",
      "username": "joystickuser",
      "usernameColor": null,
      "signedPhotoUrl": "Uri",
      "signedPhotoThumbUrl": "Uri"
    },
    "channelId": "Hash",
    "mention": false,
    "mentionedUsername": null,
    "highlight": false
  }
}
```

> NOTE: The `channelId` is a unique hash for each streamer, and will not change even if the streamer changes their username. This value will be used to send messages to that channel.

**USER PRESENCE** - These are messages your bot receives when a user enters or leaves the chat.

```json
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "id": "UUID",
    "event": "UserPresence",
    "type": "enter_stream",
    "text": "joystickuser",
    "channelId": "Hash",
    "createdAt": "2023-04-21T18:29:49Z",
  }
}
```

The `type` will be either `enter_stream` or `leave_stream`

**STREAM EVENTS** - These are messages your bot receives when any special event happens on the stream.

> This list is constantly growing, and changing, and may be difficult to list all of the possible events.

```json
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "id": "UUID",
    "event": "StreamEvent",
    "type": "Started",
    "text": "joystickuser started streaming",
    "createdAt": "2023-04-21T18:29:49Z",
    "channelId": "Hash"
  }
}
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "id": "UUID",
    "event": "StreamEvent",
    "type": "Tipped",
    "text": "joystickuser tipped 2 tokens for <strong class='text-verdigris'>Hydrate</strong>",
    "metadata": "{
      \"who\": \"joystickuser\",
      \"what\": \"Tipped\",
      \"how_much\": 2,
      \"tip_menu_item\": \"Hydrate\"
    }",
    "createdAt": "2023-04-21T18:29:49Z",
    "channelId": "Hash"
  }
}
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "id": "UUID",
    "event": "StreamEvent",
    "type": "WheelSpinClaimed",
    "text": "joystickuser won Jiggles",
    "metadata": "{
      \"who\": \"joystickuser\",
      \"what\": \"WheelSpinClaimed\",
      \"how_much\": 32,
      \"prize\": \"Jiggles\"
    }",
    "createdAt": "2023-04-21T18:29:49Z",
    "channelId": "Hash"
  }
}
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "id": "UUID",
    "event": "StreamEvent",
    "type": "Followed",
    "text": "joystickuser followed you",
    "metadata": "{
      \"who\": \"joystickuser\",
      \"what\": \"Followed\"
    }",
    "createdAt": "2023-04-21T18:29:49Z",
    "channelId": "Hash"
  }
}
{
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "message": {
    "id": "UUID",
    "event": "StreamEvent",
    "type": "DeviceConnected",
    "text": "Device turned on",
    "metadata": "{}",
    "createdAt": "2023-04-21T18:29:49Z",
    "channelId": "Hash"
  }
}
```

### Sending messages

To send a message, you will send a JSON formatted object

**CHAT MESSAGES**

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{
    \"action\": \"send_message\",
    \"text\": \"Hello World\",
    \"channelId\": \"Hash\"
  }"
}
```

**WHISPERS**

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{
    \"action\": \"send_whisper\",
    \"username\": \"joystickdev\",
    \"text\": \"this is a secret\",
    \"channelId\": \"Hash\"
  }"
}
```

**DELETE MESSAGE**

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{
    \"action\": \"delete_message\",
    \"messageId\": \"UUID\",
    \"channelId\": \"Hash\"
  }"
}
```

**MUTE USER**

Send the `messageId` of the message sent in, and the author of that message will be muted.

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{
    \"action\": \"mute_user\",
    \"messageId\": \"UUID\",
    \"channelId\": \"Hash\"
  }"
}
```

**UNMUTE USER**

Send the `username` of the user to unmute.

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\",\"streamer\":\"joystickuser\"}",
  "data": "{
    \"action\": \"unmute_user\",
    \"username\": \"joystickuser\",
    \"channelId\": \"Hash\"
  }"
}
```

**BLOCK USER**

Send the `messageId` of the message sent in, and the author of that message will be blocked.

```json
{
  "command": "message",
  "identifier": "{\"channel\":\"GatewayChannel\"}",
  "data": "{
    \"action\": \"block_user\",
    \"messageId\": \"UUID\",
    \"channelId\": \"Hash\"
  }"
}
```

> Blocks are a very serious matter, and each block will alert joystick staff in order to investigate any potential harrasment or threats. For this reason, bots cannot unblock users. This must be done manually by the streamer.

## REST API endpoints

Most of the data you'll send/receive is done over the websocket during chats. There are a few endpoints available
(more to be added later) that will give you access to additional information.

These endpoints require a valid `access_token` (The JSON Web Token) which you get once a streamer installs your bot application.

Pass these headers in with your call

* `Authorization` - "Bearer THE_ACCESS_TOKEN". This is JWT you receive from the `authorization_code` or `refresh_token` oauth2 calls when the user installs the bot.
* `Content-Type` - "application/json"
* `X-JOYSTICK-STATE` - An optional value you can use to pass through arbitrary data that will be sent back with the response.

### ManageStreamerSettings

The `ManageStreamerSettings` permission allows the bot to fetch public streamer information, as well as update a few

**`GET` Fetch Stream Settings**

Returns public settings available for the specific streamer.

Example (Where `JWT` is the token you got from authorization):

```bash
curl -XGET \
  -H "Authorization: Bearer JWT" \
  -H "Content-Type: application/json" \
  "https://joystick.tv/api/users/stream-settings"
```

Returns:

```json
{
  "username": "joysticktest",
  "stream_title": "This is a stream title, also it can be nullable!",
  "chat_welcome_message": "This is the greeting message when people enter your chat, also it can be nullable!",
  "banned_chat_words": ["bleep", "bloop", "nullable"],
  "device_active": false,
  "photo_url": "https://joystick.tv/face.png",
  "live": true,
  "number_of_followers": 1234,
}
```

> More data may be added later


**`PATCH` Update Stream Settings**

This endpoint allows you to update a few of the streamer's settings.

> Currently only `stream_title`, `chat_welcome_message`, and `banned_chat_words` are allowed to be updated

Example:

```bash
curl -XPATCH \
  -H "Authorization: Bearer JWT" \
  -H "Content-Type: application/json" \
  "https://joystick.tv/api/users/stream-settings" \
  -d '{"streamer": {"stream_title": "New Title", "chat_welcome_message": "Hey everyone", "banned_chat_words": ["new phrase or word"]}}'
```

Returns:

```json
{
  "username": "joysticktest",
  "stream_title": "New Title",
  "chat_welcome_message": "Hey everyone",
  "banned_chat_words": ["new phrase or word"],
  "device_active": false,
  "photo_url": "https://joystick.tv/face.png",
  "live": true,
  "number_of_followers": 1234,
}
```

## Testing Your Bot

Testing can be a bit difficult. Only streamers have access to a chat, so if you're not a streamer, your testing options are currently limited.

We have a special API endpoint you can use for testing.

Your application will send an HTTP POST request to the joystick token endpoint.

```txt
https://joystick.tv/echo
```

You will need to pass the following headers

* `Authorization` (required) - "Basic YOUR_BASIC_KEY". This is HTTP Basic auth using your bot's Client ID as the user, and Client Secret as the password separated by a `:` and converted to Base64. (e.g. `Base64.encode("client_id:client_secret")`)
* `Content-Type` (required) - "application/json"

Example:

```bash
curl -XPOST \
  -H "Authorization: Basic NTliC001BRMUozcGhuMWJNZVE=" \
  -H "Content-Type: application/json" \
  "https://joystick.tv/echo" \
  -d '{"sample": {"event": "SendMessage", "data": "!join"}}'
```

The post body is a JSON structure that will determine what type of test data you want your bot to receive.
By sending this POST, a sample message will be sent to your bot which you can use as if you were typing in a chat.

Here's a few options that you can currently test:

**SendMessage**

Send the `event` with `"SendMessage"`, and `data` as the text for a standard message.


```json
{
  "sample": {
    "event": "SendMessage",
    "data": "!test 123"
  }
}
```

This can be used for any random message including specific tips like `!tip 123`

**EnterStream**

Send the `event` with `"EnterStream"`. This will simulate someone entering the chat.

```json
{
  "sample": {
    "event": "EnterStream",
  }
}
```

**LeaveStream**

Send the `event` with `"LeaveStream"`. This will simulate someone leaving the chat.

```json
{
  "sample": {
    "event": "LeaveStream",
  }
}
```

**StreamEvent**

Send the `event` with `"StreamEvent"`. The `data` will determine the type of event.

Set `data` to `Tipped` to simulate a normal tip
```json
{
  "sample": {
    "event": "StreamEvent",
    "data": "Tipped"
  }
}
```

Set `data` to `TipMenu` to simulate a tip from a tip menu item
```json
{
  "sample": {
    "event": "StreamEvent",
    "data": "TipMenu"
  }
}
```

> Currently only `Tipped`, and `TipMenu` are supported for `StreamEvent`. More will be added in the future


## Example Bots

A few example bots can be found on our Github: [@joysticktv](https://github.com/joysticktv).
