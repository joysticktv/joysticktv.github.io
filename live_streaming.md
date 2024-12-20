---
layout: default
keywords:

title: Live Streaming
type: "guide"
subsections:
  - getting-started
  - required-software
  - connecting-to-joysticktv
  - recommended-settings
  - streaming-guides
  - mobile-streaming
  - multistreaming
  - troubleshooting-streaming
  - lovense-integration
  - troubleshooting-lovense
redirect_from:
  - /support/creator-support/setting-up-your-stream/
---

# Live Streaming

## Getting Started

### Creating an Account

1. Sign up for an account on joystick.tv.
1. Confirm your email from the email that we send to your email address. (You may need to search your email for "joystick". Some emails end up in boxes other than inbox/spam/junk, etc...)
1. Log in and you’re ready to explore.

### Becoming a Streamer

1. After you confirm your email, you may apply to be a streamer. From the website on a desktop, click "More" from the main menu on the left. From mobile, click the profile icon on the bottom right.
1. Find and click the large red box to begin your streamer verification. If you can not find the box, you can go directly to [https://joystick.tv/stream-approvals/new](https://joystick.tv/stream-approvals/new).

### ID Verification

*Requirements:*

A valid government-issued identification card or passport is required. You will need to upload 3 photos. This is to ensure that you’re over the age of 18, and you are who you say you are.

* The front of your government issued ID (or inside of passport).
* The back of your government issued ID (or outside of password).
* A picture of you holding your ID, and a piece of paper with joystick.tv/u/YOURUSERNAME on it in your handwriting. Make sure that your face is clearly visible.

The government issued ID _must_ include a birthdate, photo of your face, and expiration date.

> We understand that some IDs do not expire, and we take this in to consideration

*Approval Tips:*

* All images must be clear, and high resolution.
* Your ID must be fully in frame.
* Must be in color.
* Text must be clearly visible, and easily readable.
* Background must be minimal.
* Image should not be edited, resized, or rotated.
* File must me .png or .jpg
* Must be under 15MB in size.
* ID must be valid and not expired.
* Passports should have the inside taken for the "Front", and outside for "Back".

## Required Software

In order to start streaming, you'll need to install streaming
software on your device. The streaming software will allow you
to customize what you stream, and how your stream looks when people
watch your live streams.

We recommend using [OBS](https://obsproject.com/); however, you
may use any streaming software that allows you to stream RTMP.

Here's a few examples of other streaming software.

* StreamLabs - [https://streamlabs.com/](https://streamlabs.com/)
* XSplit - [https://www.xsplit.com/](https://www.xsplit.com/)
* SplitCam - [https://splitcam.com/](https://splitcam.com/)
* Larix - [https://softvelum.com/larix/](https://softvelum.com/larix/)
* OBS - [https://obsproject.com/](https://obsproject.com/)

## Connecting to joystick.tv

Connecting to JoystickTV is pretty simple. Your streaming software
will ask for two bits of information that you can get from your [Stream Settings](https://joystick.tv/stream-settings) page on Joystick; the `Server URL`, and `Stream Key`.

The `Stream Key` is your password to connect to joystick, so be sure to keep
this private.

1. Visit your [Stream Settings](https://joystick.tv/stream-settings), and copy your `Server URL`.
1. Open the settings page for your stream software. For OBS, you'll go to the "Stream" tab under "Settings".
1. From the stream software, search for "JoystickTV" in the provided list. (If you would like to use a server outside of the U.S. select "Custom")

> NOTE: JoystickTV has not been integrated in all streaming software. If you do not see us listed, try searching for "Custom"

1. If your server asks for a URL, this is where you'll paste your `Server URL` value.
1. Next, go back to your [Stream Settings](https://joystick.tv/stream-settings) on joystick, and copy your `Stream Key`.
1. Paste this value in your stream software.

That's it! From here, you should be able to connect and go live to test your stream.
You may need to change your default settings as some software assumes you want to stream
the absolute maximum video quality, and that can lead to issues.

Below we will go over some guides on configuring OBS. For the most part, these settings
will work similar on other streaming software, but you may need to find additional guides
online for configuring your software.

## Recommended Settings

If you're looking to get setup quick with minimal effort, we recommend starting with these
settings on OBS (or your streaming software). Fine-tuning your settings can take quite a
bit, and may be daunting at times. Once your stream looks crisp, you can come back and
try some more advanced settings for even better performance.

### OBS Basic Setup - Recommended for Non-Advanced Users

**Avoid using the "OBS Configuration Wizard".** We believe that if you use the OBS Configuration Wizard, it can lead to poor stream quality and impact your audience and monetization on the site. We will walk you through the settings.

1. Open your OBS settings, and select the "Stream" tab
1. Select `Joystick.TV` as the service.
1. Select the server region nearest to your location (we are adding more servers later)
1. Your stream key is located in your Joystick [stream settings](https://joystick.tv/stream-settings)
![OBS Service Setup](/assets/obs-setup-stream-service.png)

> If your version of OBS shows "RTMP" for Server, this is the old North American server. To use another server, select "Custom" from the Service list, and enter in the Server URL from your Joystick "Stream Settings" page.

1. Select the "Video" tab.
1. Set your "Base (Canvas) Resolution" to your monitor's screen size.
1. Set your "Output (Scaled) Resolution" to `1280x720`.
1. Set "Downscale Filter" to `Lanczos`
1. Set "Common FPS Values" to `30`.
![OBS Video Setup](/assets/obs-setup-video-settings.png)

1. Select the "Audio" tab.
1. Set your "Sample Rate" to `48 kHz`.
1. Set your "Channels" to `Stereo`.
![OBS Aduio Setup](/assets/obs-setup-audio-settings.png)

1. Select the "Output" tab.
1. Set "Output Mode" to `Simple`
1. Set "Video Bitrate" to `3500 kbps`
1. Set "Audio Bitrate" to `128`.
1. Set "Video Encoder" to `Software (x264)`.
1. Set "Encoder Preset" to `veryfast`.
![OBS Output Setup](/assets/obs-setup-output-settings.png)

No other setting updates should be needed in order to go-live for your first stream.
If you're more familiar with OBS and customizing stream settings, skip to the next
section to help customizing more of the advanced configuration.

> If you have any issues, you can refer to our [Troubleshooting Steps](#troubleshooting-streaming)
> or join us in our [Discord](https://discord.gg/zKvCf8hrGP) for more help

### OBS Custom Setup - Recommended for Advanced Users

OBS is a very advanced software, and can feel pretty overwhelming
at times. A single setting being off can mean the difference between a
smooth and clear stream, and a fuzzy stream. If you're not familiar with these
options, we recommend starting with the non-advanced settings above first.

### First, gather information

1. Find the max resolution of your camera, and write that down somewhere.
1. Visit <a href="https://www.speedtest.net/" rel="nofollow" target="_blank">SpeedTest.net</a> and get your **upload** speed, and write that down.
1. Make sure you know what stream software you're using (e.g. OBS, Lovense StreamMaster)
1. Know your operating system (e.g. Windows 11, MacOS)

Use your camera's max resolution, and internet upload speed to help you
decide which settings will work best. Be sure to not select any resolution
or setting that's higher than your computer can handle.

1. Select the "Output" tab.
1. Set "Output Mode" to `Advanced`
1. Set your audio codec to use `AAC`.
1. Your video encoding will depend on your computer's graphics card. A powerful GPU can use "Hardware Encoding". If you're unsure, then start with "Software Encoding".
1. Use the following tables to adjust other settings based on your camera's max resolution, and internet upload speed as taken from SpeedTest.net.

**Software Encoding**

Software encoding will use more of your CPU. This is a great option
if your computer does not have a high-end GPU, or if you're playing
a very intensive GPU based game, and have limited graphics memory.

For this option, you'll see `x264`. Here's some general settings to
help you get started:

| | 853x480 | 1280x720 | 1920x1080 | 2560x1440 | 3840x2160 |
|---|---|---|---|---|---|
| **Your Upload Speed** | **5 ~ 10mbps** | **10 ~ 15mbps** | **15 ~ 25mbps** | **25 ~ 50mbps** | **50mbps+** |
| Video Bitrate | 1500 kbps | 2500 kbps | 3500 kbps | 4500 kbps | 6000 kbps |
| Audio Bitrate | 96 kbps | 128 kbps | 160 kbps | 160 kbps | 192 kbps |
| Rate Control  | CBR  | CBR | CBR | CBR | CBR |
| Framerate  | 25 ~ 30 fps | 25 ~ 30 fps | 25 ~ 30 fps | 30 ~ 60 fps | 30 ~ 60 fps |
| Keyframe Interval  | 2s  | 2s | 2s | 2s | 2s |
| Preset  | veryfast ~ medium  | veryfast ~ medium | veryfast ~ medium | veryfast ~ medium | veryfast ~ medium |
| Profile  | Main/High  | Main/High | Main/High | Main/High | Main/High |
| Tune | (None) | (None) | (None) | (None) | (None) |

------------------------------------
**Hardware Encoding**

Hardware encoding will use more of your GPU. This is a great option
if your computer has a high-end graphics card. It allows your computer
to do many more things by freeing up your CPU. This is the preferred
option if your computer has the ability.

There's different types of hardware encoding, but here's some general
settings related to the `NVIDIA NVENC` encoding.

| | 853x480 | 1280x720 | 1920x1080 | 2560x1440 | 3840x2160 |
|---|---|---|---|---|---|
| **Your Upload Speed** | **5 ~ 10mbps** | **10 ~ 15mbps** | **15 ~ 25mbps** | **25 ~ 50mbps** | **50mbps+** |
| Video Bitrate | 1500 kbps | 2500 kbps | 3500 kbps | 4500 kbps | 6000 kbps |
| Audio Bitrate | 96 kbps | 128 kbps | 160 kbps | 160 kbps | 192 kbps |
| Rate Control  | CBR  | CBR | CBR | CBR | CBR |
| Framerate  | 25 ~ 30 fps | 25 ~ 30 fps | 25 ~ 30 fps | 30 ~ 60 fps | 30 ~ 60 fps |
| Keyframe Interval  | 2s  | 2s | 2s | 2s | 2s |
| Preset  | Quality  | Quality | Quality | Quality | Quality |
| B-frames  | 2 | 2  | 2 | 2 | 2 |


> If you have any issues, you can refer to our [Troubleshooting Steps](#troubleshooting-streaming)
> or join us in our [Discord](https://discord.gg/zKvCf8hrGP) for more help


**Multistreaming Considerations**

These settings assume you're only streaming to Joystick.TV. If you do plan on doing multistreaming,
your internet upload speed should increase by the recommended amount for each site you stream to.

For example, if you're streaming to Joystick, and 2 other sites each at 1080p you should have a minimum
internet upload speed of 45mbps (15mbps for each site).

## Streaming Guides

Streaming from your PC can be quite intensive. There are many different
factors that can affect the quality of your stream.

* CPU / GPU / RAM / Resources
* Internet upload speeds
* Encoder Performance
* OBS configurations
* WiFi / Ethernet
* Network Router

Here is some general knowledge information to help you become an advanced streamer,
so you can pass along the knowledge and help others!

### CPU / GPU / RAM / Resources

In order to stream, your computer needs to generate pictures
of your stream and upload those pictures as fast as possible.
Depending on your computer, this may be handled by your computer's
CPU or GPU (if you have a really nice graphics card).

If you're also recording your stream through OBS, this will
consume additional resources on your computer. Now add in your
camera, and the game you're playing through Steam all while
you have Discord open for your chat and you may be reaching
the limits of your machine.

Keep in mind that every computer will handle these tasks
differently based on your operating system (Windows 10/11, MacOS, Linux, etc...), the type of CPU or GPU you have, as well as
how much and how fast your RAM is. Should you decide to make
live streaming a full time job, you will want to invest in
these areas to ensure a smooth stream.

### Internet upload speeds

Ususally when we talk about internet speeds, we're talking
about "download" speeds. This is because we generally want
to know how fast can we pull down content like watching a video.
However, when it comes to streaming, you need faster upload speeds.
This is because as you stream, your computer is generating video
on the fly and uploading to JoystickTV. Since this is done in
small chunks, it can happen at a really fast rate, but not all
streams are the same size. A 720p stream at 30FPS will be smaller
than a 1080p stream at 60FPS.

The higher the bitrate, the more bandwidth you consume. The video quality can be improved by increasing the bitrate, but only up to a certain point; the bitrate settings we recommend have been tested to maximize video quality without wasting bandwidth.

If you know your internet upload speeds aren't that fast, you
can use this information to configure OBS at a lower scale.

### Encoder Performance
Encoding can be difficult on your computer. x264 will use a lot of your CPU, which can cause a lower frame rate. On the other hand, GPU encoding, such as NVIDIA NVENC, makes use of a separate encoder in the GPU. As a result, you can play and stream without sacrificing performance. Start with the veryfast preset if you want to use x264, and then adjust to find the best setting.

### WiFi / Ethernet / Network

Your home network plays a huge roll in all of this.
Some network routers will allow you to prioritze streaming on the
network when there's a lot of other devices connected and in use.

If you have the ability to use a "hard-wired" connection (i.e. Ethernet), this
is highly recommended. WiFi can become "spotty" at times especially with more
devices connected to your WiFi.

Try restarting your network router from time to time when you notice connection
issues, or dropped frames. Sometimes a restart can solve many issues.

Our [Discord](https://discord.gg/zKvCf8hrGP) is full of knowledgable people that can give recommendations.


### FPS and Keyframe Interval

As mentioned above, when you stream, your computer generates static images of your stream
at a really fast rate. These images are uploaded and converted in to motion pictures or video.
Your FPS (frames per second) tells your computer to generate these many pictures in 1 second.
The difference between 30 FPS and 60 FPS can be very slight or sometimes not noticable at all
depending on what you're streaming.

For example, say your OBS scene layout has your camera at full screen with no other motion around
you. The video game you're playing is in a much smaller size window, and you're playing a slower
pace game like a city builder / simulation game. Because there's not a ton of movement on your scene,
using 60FPS will use unecessary resources from your computer with almost no extra gain to stream quality.

Now say that you are using a green screen, and your camera is the smaller window. You're playing a
first-person shooter in full screen with high action. In this case you have a lot of movement on screen.
At 30FPS your stream may look a bit "choppy" and not as smooth as you would like.

This is also where your "Keyframe Interval" comes in to play. Each image generated in your stream is a frame.
At 30 FPS, you are generating 30 frames per second. A "keyframe" tells the video where to start and end
these blocks of frames to be rendered. A Keyframe Interval of "2 seconds" tells OBS every 60 frames is
a video chunk. A Keyframe Interval of "1 second" would say 30 frames is a video chunk. For OBS, setting
to "0" means "auto" and this requires a lot more processing on both your end and ours.

First-person shooter type games with high action generally want higher FPS and lower keyframe intervals
to maximize the lowest latency and smoothest video. Streams with less motion and action should have a lower
FPS and higher keyframe interval to reduce strain on the computer and have a clearer picture.

## Mobile Streaming

If you're looking to take your stream on the-go (or maybe just your backyard / kitchen, etc...), you may need to use a mobile device. With desktops/laptops you can just setup OBS, however, there's no official OBS app for iOS and Android.

There are a few apps, but the main thing to look for is "Custom RTMP Stream". As long as the app can publish an RTMP stream, you can use it to stream to JoystickTV from your mobile device.

### Streamlabs Mobile

Streamslabs has a desktop app that you may already be familiar with. You can download this app from your app store, then once installed, follow these steps.

![Streamlabs Logo](/assets/streamlabs-mobile.jpg)

Find the menu button. This is located in the upper left corner, and may be a little tricky to see at first if you're camera is active. Once in the settings menu, tap on the "Account Settings"

![Streamlabs Settings](/assets/streamlabs-setup.jpg)

On the next screen, you're presented with several streaming services that have been pre-built in to Streamlabs. Unfortunately, JoystickTV is not one of those.

Find the "Custom RTMP Server" setup at the bottom of this list.

On the RTMP setup screen, you will enter in a bit of information. The RTMP server, and your stream key. Both of these can be found from your [Joystick Stream Settings](https://joystick.tv/stream-settings).

![Streamlabs Account Info](/assets/streamlabs-account.jpg)

### Larix Broadcaster

This is another great mobile app that comes with built-in overlays, and lots of fancy things. Setup is fairly easy too!

![Larix Broadcaster Logo](/assets/larix-mobile.jpg)

Once you've downloaded the app and opened it, find the settings gear icon in the bottom right. From the settings page, you'll tap on "Connections"

![Larix Broadcaster Settings](/assets/larix-setup.jpg)

Unlike Streamlabs mobile, Larix doesn't require a separate input field for your stream key. Instead, you will just join your server URL and stream key together as one long string.

![Larix Broadcaster Info](/assets/larix-account.jpg)

## Multistreaming

Multistreaming is when you stream to multiple sites at the same time. This is actually something that we encourage on joystick.tv as it is the best way to reach a wider audience. There are several programs that have the ability to do this, though each program also does have it's pros and cons.

### OBS with a Plugin

OBS does not have the ability out of the box to be able to multistream. After installing the [OBS Multi RTMP Plugin](https://github.com/sorayuki/obs-multi-rtmp/releases/) you can easily stream to multiple sites. This plugin offers the best and most customizable feature set of all available options.

If you are not familiar with GitHub, look for the **"Assets"** section of the latest release by scrolling down the page a little bit. Click on the package that matches your operating system to download it. Once it's downloaded, open it and follow the instructions.

![OBS Multi RTMP GitHub Releases Download](/assets/obs-multi-rtmp-github-download.png)

After installing, you can open the settings in the the Docks menu of OBS under the **"Multiple Output"** option.

![OBS Multi RTMP Dock Menu](/assets/obs-multi-rtmp-docks-menu.png)

You will then see a dockable window for the multistream settings.

![OBS Multi RTMP](/assets/obs-multi-rtmp-first-screen.png)

Click **"Add New Target"** to add a new site that you would like to stream to.

![OBS Multi RTMP Add New Target Window](/assets/obs-multi-rtmp-add-new-target-window.png)

At a minimum you will have to fill in the RTMP Server & Key information. The rest of the settings will pull from your default OBS settings. The assumption here is that you have already setup your OBS configruation to stream to one site already. If you haven't done that, please refer to the rest of this guide to set that up first, then you can add a second site to stream to.

#### Different Scenes per Stream

This plugin offers the feature of being able to stream different scenes to different sites. 

![OBS Multi RTMP Scene Settings](/assets/obs-multi-rtmp-scene-settings.png)

Please note that when you do this, you will have to select an encoder for each stream you do this for. Like it says in the warning, your computer will be doing extra work for each scene. Something to keep in mind if you are also playing very CPU/GPU intensive game.

### Lovense Stream Master

Stream Master from Lovense is a nicely bundled package of software that gets your stream up and running pretty quickly. You can download the software [here](https://www.lovense.com/stream-master). The even better part is that it bundle OBS right into the software along with the OBS Multi RTMP plugin described above.

First you need to open OBS from Stream Master.

![Stream Master Open OBS](/assets/stream-master-open-obs.png)

By deafult, you will see the **"Multi-Streaming"** window already docked for you inside OBS.

![Stream Master Multi Streaming Dock](/assets/stream-master-multistreaming-dock.png)

Click on **"Add new cam site"** and add the other site that you want to stream too. If you want to customize the settings or stream different scenes, see the documentation above for OBS for more details.

### SplitCam

SplitCam makes it very easy to stream to multiple sites as well. Just click on the **"Stream Settings"** menu on the top right, then the **"Add Channel"** button on the bottom. From there you can select an existing site or add a custom one.

![SplitCam Stream Settings](/assets/splitcam-stream-settings.png)

SplitCam is the least customizeable option out of all of them. It's very easy to setup but you will stream the exact same video to all sites.

## Troubleshooting Streaming

If you are currently having trouble connecting, or experiencing a high delay in your stream, here are a few things you can check:

* Run a [Speed Test](https://www.speedtest.net/). Is your ping under 15ms and your upload over 15Mbps?
* Check your Bitrate under “Output”. Set it between 2500Kbps – 8500Kbps
* If you’re set to 60fps, give 30fps a try. We do support 60, but if your connection is low, dropping to 30 may help.
* Try setting your Encoder to x264. Hardware encoding can be tricky if you’re not familiar with it.
* Try using “Advanced” configuration and set your “Keyframe Interval” to 2
* Make sure your software is updated. There may have been a bug fix recently to fix your issue
* Close additional programs that are not needed for your stream.
* Try rebooting your computer and/or your internet router.

After trying these, if you’re still having issues streaming, join our [Discord](https://discord.gg/zKvCf8hrGP), and let us know in the Support channel.

## Lovense Integration

JoystickTV has native support for your [Lovense](https://www.lovense.com/) devices. These are interactive sex toys that will vibrate when someone send you a tip during your live streams. The strength and length of vibration is controlled by you through the Lovense toy settings, and these values correlate to a tip amount.

Add an extra level of interaction with your community during live streams by connecting your toy and encouraging users to tip!

> You can also visit the [Lovense website guides](https://www.lovense.com/cam-model/guides/Video-Guides) for the most up-to-date information.

### Overview

There's a few ways you can integrate a Lovense device with Joystick, and with a lot of components, it can be a bit confusing. Here's a quick overview of how it works.

1. Your toy uses bluetooth to connect to your mobile phone using the Mobile LovenseConnect app, or to your PC directly using a [bluetooth dongle adapter](https://www.amazon.com/LOVENSE-Lovense-USB-Bluetooth-Adapter/dp/B0711DTRR6) and the desktop Lovense Connect app.
1. Your PC has a separate Lovense app (either Stream Master, or a browser extension "Share Link") that communicates with the Lovense Servers.
1. Your browser must be on the Joystick [Publisher Page](https://joystick.tv/publisher) which will detect the Lovense browser extension (from Stream Master or Share Link). When this is connected, there will be a box shown on the page like this
![Lovense Device Connected](/assets/lovense-device-active-icon.png)
1. Or you may see a sidebar pane window that looks like this
![Lovense Device Connected](/assets/lovense-device-active-pane.png)
1. When you are live and receive a tip, Joystick sends the token amount to the Lovense browser extension. This will send the info to the Lovense servers which then goes to your Lovense Connect app (on mobile or desktop).

### Setup using Stream Master

[Lovense Stream Master](https://www.lovense.com/stream-master) is an AIO (all-in-one) software program that combines [OBS](https://obsproject.com/) and Google Chrome in to a single application complete with full lovense integration. Using this app means you have no need for a separate browser or streaming software, and all of the Lovense OBS overlays are already configured for you.

* Start by reading through these guides to install: [read more](https://www.lovense.com/cam-model/guides/Stream-Master/Basic-Tutorials/Step-By-Step-Tutorial)
* Next you will need to add JoystickTV as a cam site. Click the "Add a cam site" button on Stream Master, and search for "Joystick".
![Lovense Add a cam site](/assets/lovense-add-cam-site.png)
* Lastly, you will need to setup your OBS connection which you can follow our previous guides above [read more](#lovense-stream-master)

At this point you should have everything connected

### Setup using a Chrome extension

Visit the [Lovense Extension Settings](https://extension.lovense.com/share-link/pages/dashboard.html) site from a Chromium based browser. (Chrome, Brave, OperaGX, Edge).

> NOTE: If you visit this link from Firefox, or Safari, you'll see a blank page. Be sure to have Chrome or a Chromium based browser.

Once you have loggeed in to your Lovense account, you'll be prompted to install the "Share Link" extension. You can also find instructions on the [Lovense Cam Extension](https://www.lovense.com/cam-model/guides/Written-Guides/Installation-Guides/Lovense-Cam-Extension) Guides.

## Troubleshooting Lovense

If you're still seeing issues with the device connecting, here's a few tips you can try.

* Try turning the toy completely off and back on again.
* Give the Joystick Publisher page a "hard refresh" (`ctrl-shift-R` on Windows, or `cmd-shift-R` for Mac).
* Ensure your toy battery is charged over 50%
* If you're using the dongle, try using your phone
* If you're using your phone, change the sleep settings to keep it on
* Ensure your Stream Master or Share Link and the Lovense Connect apps are all full up-to-date

After trying these, if you’re still having issues streaming, join our [Discord](https://discord.gg/zKvCf8hrGP), and let us know in the Support channel.
