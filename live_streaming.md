---
layout: default
keywords:

title: Live Streaming
type: "guide"
subsections:
  - getting-started
  - required-software
  - connecting-to-joysticktv
  - obs-guides
  - multistreaming
  - troubleshooting
redirect_from:
  - /support/creator-support/setting-up-your-stream/
---

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

A valid government-issued identification card is required. You will need to upload 3 photos. This is to ensure that you’re over the age of 18, and you are who you say you are.

* The front of your government issued ID.
* The back of your government issued ID.
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
1. Open the settings page for your stream software. For OBS, you'll go to the "Stream" tab.
1. From the stream software, search for "JoystickTV" in the provided list.

> NOTE: JoystickTV has not been integrated in all streaming software. If you do not see us listed, try searching for "Custom"

1. If your server asks for a URL, this is where you'll paste your `Server URL` value.
1. Next, go back to your [Stream Settings](https://joystick.tv/stream-settings) on joystick, and copy your `Stream Key`.
1. Paste this value in your stream software.

That's it! From here, you should be able to connect and go live to test your stream.
You may need to change your default settings as some softare assumes you want to stream
the absolute maximum video quality, and that can lead to issues.

Below we will go over some guides on configuring OBS. For the most part, these settings
will work similar on other streaming software, but you may need to find additional guides
online for configuring your software.

## OBS Guides

Streaming from your PC can be quite intensive. There's many different
factors that can affect the quality of your stream.

* CPU / GPU / RAM / Resources
* Internet upload speeds
* Encoder Performance
* OBS configurations

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

To top it all off, your home network also plays in to all of this!
Some network routers will allow you to prioritze streaming on the
network when there's a lot of other devices connected and in use.

Our [Discord](https://discord.gg/zKvCf8hrGP) is full of knowledgable people that can give recommendations.


### Encoder Performance
Encoding can be difficult on your computer. x264 will use a lot of your CPU, which can cause a lower frame rate. On the other hand, GPU encoding, such as NVIDIA NVENC, makes use of a separate encoder in the GPU. As a result, you can play and stream without sacrificing performance. Start with the veryfast preset if you want to use x264, and then adjust to find the best setting.

### OBS configurations

OBS is a very advanced software, and can feel pretty overwhelming
for a newcomer to streaming. A single setting being off can mean
the difference between a smooth and clear stream, and a fuzzy
stream. We will provide some common settings that work for others.

<iframe src="https://www.youtube.com/embed/PimigxU4H1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Software Encoding**

Software encoding will use more of your CPU. This is a great option
if your computer does not have a high-end GPU, or if you're playing
a very intensive GPU based game, and have limited graphics memory.

For this option, you'll see `x264`. Here's some general settings to
help you get started:

|   | 1080p 60fps  | 1080p 30fps | 720p 60fps | 720p 30fps |
|---|---|---|---|---|
| Resolution  | 1920×1080  | 1920×1080 | 1280×720 | 1280×720 |
| Bitrate  | 6000 kbps  | 4500 kbps | 4500 kbps | 3000 kbps |
| Rate Control  | CBR  | CBR | CBR | CBR |
| Framerate  | 60 or 50 fps  | 25 or 30 fps | 60 or 50 fps | 25 or 30 fps |
| Keyframe Interval  | 2 seconds  | 2 seconds | 2 seconds | 2 seconds |
| Preset  | veryfast ~ medium  | veryfast ~ medium | veryfast ~ medium | veryfast ~ medium |
| Profile  | Main/High  | Main/High | Main/High | Main/High |


**Hardware Encoding**

Hardware encoding will use more of your GPU. This is a great option
if your computer has a high-end graphics card. It allows your computer
to do many more things by freeing up your CPU. This is the preferred
option if your computer has the ability.

There's different types of hardware encoding, but here's some general
settings related to the `NVIDIA NVENC` encoding.

|   | 1080p 60fps  | 1080p 30fps | 720p 60fps | 720p 30fps |
|---|---|---|---|---|
| Resolution  | 1920×1080  | 1920×1080 | 1280×720 | 1280×720 |
| Bitrate  | 6000 kbps  | 4500 kbps | 4500 kbps | 3000 kbps |
| Rate Control  | CBR  | CBR | CBR | CBR |
| Framerate  | 60 or 50 fps  | 25 or 30 fps | 60 or 50 fps | 25 or 30 fps |
| Keyframe Interval  | 2 seconds  | 2 seconds | 2 seconds | 2 seconds |
| Preset  | Quality  | Quality | Quality | Quality |
| B-frames  | 2  | 2 | 2 | 2 |

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

## Troubleshooting

If you are currently having trouble connecting, here are a few things you can check:

* Check your Bitrate under “Output”. Set it between 2500Kbps – 8500Kbps
* If you’re set to 60fps, give 30fps a try. We do support 60, but if your connection is low, dropping to 30 may help.
* Try setting your Encoder to x264. Hardware encoding can be tricky if you’re not familiar with it.
* Try using “Advanced” configuration and set your “Keyframe Interval” to 2
* Make sure your software is updated. There may have been a bug fix recently to fix your issue
* Close additional programs that are not needed for your stream.
* Try rebooting your computer and/or your internet router.

After trying these, if you’re still having issues streaming, join our [Discord](https://discord.gg/zKvCf8hrGP), and let us know in the Support channel.