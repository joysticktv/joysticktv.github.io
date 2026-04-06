---
layout: default
keywords:

title: CHANGELOG
---

# 2026-04-06

This file is a description of all the differences to expect from Joystick v1 to v2.
This will include mentions of new features, and describe the changes to existing features that have been changed.

## Global Updates

* UPDATE: Full re-design and consistent layout with standardized design guidelines
* UPDATE: Huge performance improvements in data fetching
* UPDATE: Deployment infrastructure refactor allowing for front-end changes deployed in under 5 minutes as opposed to 30+ currently
* UPDATE: Email designs default to dark theme and match theme of new site
* UPDATE: Joystick Blog now matches design of new site

## Discover Page (Home page)

* NEW: Sorting and filters options for streams
* NEW: Watch specific tags to filter out streams

## Account Page (formerly "Settings")

* NEW: Account status information
* UPDATE: 2FA code confirmation is required to enable 2FA
* NEW: Pause account feature (coming soon)

## Alerts Page (formerly "Notifications")

* NEW: Filter alerts

## Billing Page

* NEW: Download CSV billing transactions
* NEW: Filter billing transactions

## Purchases Page

* NEW: Filter purchases
* NEW: Search purchases by streamer username

## Direct Messages (DMs) Page

* NEW: Use emotes in DM messages
* NEW: Filter conversations

## Reports & Analytics Page

* NEW: Time Period Engagement for Stream report
* UPDATE: All reports will show data in your local time zone
* NEW: Time Period Engagement for PVP report
* NEW: Time Period Engagement for Profile report
* NEW: Total Amount Earned summary for Interactions report
* UPDATE: Interactions report defaults to scoped time range
* NEW: Search users by username in Interactions report
* NEW: Download CSV for Interactions report
* UPDATE: Interactions report no longer shows followers that never interact with you
* NEW: Follower Analytics report
* UPDATE: Payout maturity report defaults to 7 day date range
* NEW: Total Amount Earned summary for Affiliate report
* NEW: Time Period Total for Transactions report
* NEW: Time Period Total for Tip History report

## Payouts Page

* UPDATE: Show all payout history in one location
* NEW: Countdown clock for pay cycle
* UPDATE: Updating payout information moved to separate page `/payout-method`
* NEW: Auto-generated W9 PDF forms with digital signing for U.S. users
* NEW: Masspay is now available for U.S. users
* NEW: ACH option is available for Canadian users that use a U.S. bank (must have valid U.S. ABA routing number)

## DM Campaigns Page

* NEW: Filter DM campaigns

## Subscriptions Page

* NEW: Gift subs right from subscription management
* NEW: Filter and sort subscriptions

## Following Page

* NEW: Filter and sort streamers you follow
* NEW: Manage notification preferences for each streamer

## Followers & Subscribers Page

* NEW: Create DM campaigns right from this page
* NEW: Sorting options
* UPDATE: More data displayed

## Chat Bots Page

* NEW: Sort and filter chat bots
* NEW: Add beta testers to private chat bots

## Media Page

* NEW: Manage tags system for better media organization
* UPDATE: Sorting and filter for media
* NEW: Tag media during upload
* UPDATE: All media is staged before beginning upload
* UPDATE: Upload size limits and validation happens before upload begins

## Affiliate links Page

* NEW: Quick links for marketing lander pages (streamers, affiliates, developer arcade)

## Developers Page (Removed)

* UPDATE: This page merged with the Arcade page

## Arcade Page

* UPDATE: Filtering added to show your games

## VODs Management Page

* NEW: Sorting options for your VODs
* UPDATE: Create new VOD from VODs management

## Stream Overlays Page (Formerly "Scenes")

* UPDATE: URL is now `/stream-overlays`
* NEW: Animation options for overlays that support it
* NEW: Image overlay to cycle through images from your media library

## Tip Goals Management Page

* NEW: Save multiple tip goals
* UPDATE: Manage tip goals from both Publisher and within stream settings

## Casino Management Page (Formerly "Tip Wheel")

* NEW: Brand new slot-design
* NEW: Subscriber-only spin option that can be set to 0 tokens (free spin)
* UPDATE: Require at least 2 reward options
* UPDATE: Raise max options from 15 to 25
* UPDATE: Enforce option text length limit of 80 characters max

## Publisher Page

* UPDATE: Web browser publisher works from the main publisher page (Coming soon)
* UPDATE: Lovense toys are no longer "automatic". They must be enabled by the "Toy Status". Toggle status instead of a "hard refresh" for fixes.
* NEW: Filter options for Stream events
* NEW: Publisher now includes both a "Start" and "Stop" stream button for use when the site is out of sync with OBS
* UPDATE: Manage stream moved to moderator panel in chat
* NEW: HoneyPlayBox toy integration (coming soon)

## Feed Page

* NEW: Filtering and sorting options for posts
* NEW: Searching posts

## Token Purchases

* NEW: Allow purchasing Super Supporter packages with Paypal
* UPDATE: Merchant processing fees when using credit cards in place for all accounts

## Profile Page

* UPDATE: Access VODs and posts from mobile while stream is live
* NEW: Subscribe preview window now displays a few emotes

### Chat Component

* NEW: Move chat to left side option
* NEW: Resize chat width (on desktop/large screens)
* UPDATE: Chat mention sound is controlled separate from the "New chat sound"
* UPDATE: Pop-out chat will "pop" back in once closed
* NEW: Clear chat option to clear out all chat messages
* UPDATE: Tip goal and High Score widgets are now in a carousel to allow room for future feature widgets
* UPDATE: High score now shows runners-up. Click widget to see more
* UPDATE: Tip goal only displays current goal/milestone. Click widget to see more
* NEW: Search through tip menu items to find specific ones
* NEW: Search through emotes from emote picker
* UPDATE: Moderators now have access to see users in chat
* NEW: Search users in chat
* NEW: Moderators now have access to toggle PVP on/off
* NEW: Moderators now have access to toggle the toy on/off
* NEW: Moderators now have access to control Video/Chat stream mode
* UPDATE: All streamers will have a streamer badge
* UPDATE: Icon badges use new icon sets and look a little different
* NEW: Streamers can set a nickname for their own channel

### Video Component

* UPDATE: HLS renamed to "Standard", LL-HLS renamed to "Low Latency", and WebRTC renamed to "Realtime"
* UPDATE: Source selection now persists across all streams

### VODs Tab

* NEW: Search and sort options for VODs
* UPDATE: Accessible from mobile while stream is live

### Posts Tab

* NEW: Search and sort options for Posts
* UPDATE: Accessible from mobile while stream is live

### PVP (Coming Soon)

* UPDATE: No longer auto-end when time expires. The participants must manually end the PVP when ready to do so.
* UPDATE: Time may be extended at any time during the PVP and not just when it's about to end.
* NEW: Optionally allow spectators to watch PvP

## Lander Pages

### Branding Page

* UPDATE: added more references to guidelines of using the Joystick Logo

### Developers/Arcade Page

* NEW: Brand new arcade landing page for marketing

### Expo Page

* NEW: Brand new Expo landing page
