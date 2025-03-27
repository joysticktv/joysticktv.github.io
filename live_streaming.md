---
layout: default
keywords:

title: Live Streaming
type: "guide"
subsections:
  - getting-started
  - streaming-software
  - connecting-to-joysticktv
  - streaming-setup-guides
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

1. Sign up for an account on [joystick.tv](joystick.tv){:target="_blank"}.
1. Check for the confirmation email we sent you. (You may need to search your email for "joystick". Some emails end up in boxes other than inbox/spam/junk, etc...)
1. Log in and you’re ready to explore.

### Becoming a Streamer

1. After you confirm your email, you may apply to be a streamer. From the website on a desktop, click "More" from the main menu on the left. From mobile, click the profile icon on the bottom right.
1. Find and click the large red box to begin your streamer verification. If you can not find the box, you can go directly to [https://joystick.tv/stream-approvals/new](https://joystick.tv/stream-approvals/new){:target="_blank"}.

### ID Verification

*Requirements:*
To verify that you are 18 years of age or older, and that you are who you say you are, 
you'll need a valid government-issued ID card or passport.

You must upload three photos:
* The **front** of your government issued ID (or inside of passport).
* The **back** of your government issued ID (or outside of passport).
* A picture of you holding your ID, and a piece of paper with joystick.tv/u/YOURUSERNAME on it in your handwriting. Make sure that your face is clearly visible.

The government issued ID _must_ include a birthdate, photo of your face, and expiration date.

> We understand that some IDs do not expire, and we take this into consideration

*Approval Tips:*

* All images must be clear, and high resolution.
* Your ID must be fully in frame.
* Must be in color.
* Text must be clearly visible, and easily readable.
* Background must be minimal.
* Image _should not_ be edited, resized, or rotated.
* File must be **.png** or **.jpg**
* Must be _under_ **15MB** in size.
* ID _must be valid_ and **not** expired.
* Passports should have the inside taken for the "Front", and outside for "Back".

## Streaming Software

For the best streaming experience, we recommend using dedicated streaming software.  
However, you can stream directly from your [desktop browser](#tab-desktop-browser-streaming), or [mobile browser](#tab-mobile-browser-streaming) with fewer steps.

Streaming software gives you full control over your broadcast - letting you customize what's
shown on screen, such as multiple video sources, overlays, managing audio sources, and more.

We recommend using [OBS](https://obsproject.com/){:rel="nofollow noreferrer" target="_blank"}; however, you may use any streaming software that allows you to stream RTMP.

Here are a few examples of other streaming software.

* StreamLabs - [https://streamlabs.com/](https://streamlabs.com/){:rel="nofollow noreferrer" target="_blank"}
* XSplit - [https://www.xsplit.com/](https://www.xsplit.com/){:rel="nofollow noreferrer" target="_blank"}
* SplitCam - [https://splitcam.com/](https://splitcam.com/){:rel="nofollow noreferrer" target="_blank"}
* Larix - [https://softvelum.com/larix/](https://softvelum.com/larix/){:rel="nofollow noreferrer" target="_blank"}
* OBS - [https://obsproject.com/](https://obsproject.com/){:rel="nofollow noreferrer" target="_blank"}

## Connecting to joystick.tv
Connecting to Joystick is pretty simple, your streaming software will ask for two pieces of information:
* `Server URL`
* `Stream Key`

You can find these in your [Stream Settings](https://joystick.tv/stream-settings){:target="_blank"} page - keep it open while you set up your stream.

⚠️ The `Stream Key` is your password to connect to joystick, so be sure to keep this private. ⚠️

1. While on your Stream Settings page, select the server closest to you from the **"Server Selection"** dropdown menu, and copy the `Server URL`.
1. Open the settings for your streaming software. For OBS, go to the **"Stream"** tab under **"Settings"**.
1. In your streaming software, search for **"Joystick.TV"** in the service list.
1. _(Optional)_ If you're in Europe/Asia, or Joystick.TV is not listed, select **"Custom"** and enter the `Server URL` you copied earlier.
1. Next copy your `Stream Key` from your **Stream Settings** page.
1. Paste this value into the **Stream Key** field in your software.
> **Note:** Joystick has not yet been integrated into all streaming software. If you do not see us listed, use the **"Custom"** option.

That's it! You're now ready to go live and test your stream.
You may need to change your default settings as some software assumes you want to stream
the absolute maximum video quality, and that can lead to issues.

Below we will go over some guides on configuring OBS. For the most part, these settings
will work similar on other streaming software, but you may need to find additional guides
online for configuring your software.

## Streaming Setup Guides

If you're looking to get set up quick with minimal effort, we recommend starting with **Basic Setup** 
settings guide for OBS (or your streaming software). Fine-tuning your settings can take quite a
bit, and may be daunting at times. Once your stream looks crisp, you can come back and
try some more advanced settings for even better performance.

{% capture OBS_Basic_Setup_body %}
**Avoid using the "OBS Configuration Wizard".** Using it can lead to poor stream quality, negatively impacting your audience and monetization. Follow these steps instead:

### **1. Stream Settings**
1. Open OBS settings and go to the **"Stream"** tab.
1. Select **`Joystick.TV`** as the service.
1. Choose the **server region nearest to your location**.
1. Your **stream key** is located in your [Joystick Stream Settings](https://joystick.tv/stream-settings){:target="_blank"}.

{% include lazy_image.html src="/assets/png/obs-setup-stream-service.png" srcset="/assets/webp/obs-setup-stream-service.webp" caption="OBS Server Selection" loading="lazy" %}

---

### **2. Video Settings**
1. Select the **"Video"** tab.
1. Set **Base (Canvas) Resolution** to your monitor's screen size.
1. Set **Output (Scaled) Resolution** to **1280x720**.
1. Set **Downscale Filter** to **Lanczos**.
1. Set **Common FPS Values** to **30**.

{% include lazy_image.html src="/assets/png/obs-setup-video-settings.png" srcset="/assets/webp/obs-setup-video-settings.webp" caption="OBS Video Setup" loading="lazy" %}

### **3. Audio Settings**
1. Select the **"Audio"** tab.
1. Set **Sample Rate** to **48 kHz**.
1. Set **Channels** to **Stereo**.

{% include lazy_image.html src="/assets/png/obs-setup-audio-settings.png" srcset="/assets/webp/obs-setup-audio-settings.webp" caption="OBS Audio Setup" loading="lazy" %}

### **4. Output Settings**
1. Select the **"Output"** tab.
1. Set **Output Mode** to **Simple**.
1. Set **Video Bitrate** to **3500 kbps**.
1. Set **Audio Bitrate** to **128 kbps**.
1. Set **Video Encoder** to **Software (x264)**.
1. Set **Encoder Preset** to **veryfast**.

{% include lazy_image.html src="/assets/png/obs-setup-output-settings.png" srcset="/assets/webp/obs-setup-output-settings.webp" caption="OBS Output Setup" loading="lazy" %}

No further adjustments are needed to go live with your first stream. If you’re comfortable tweaking settings, continue to the **Custom Setup** section.

> If you have any issues, refer to our [Troubleshooting Guide](#troubleshooting-streaming) or join our [Discord](https://discord.gg/zKvCf8hrGP){:rel="nofollow noreferrer" target="_blank"} for support.
{% endcapture %}

{% capture OBS_Custom_Setup_body %}
OBS is an advanced software, and **incorrect settings can drastically impact stream quality**. If you're unfamiliar with these options, start with the **Basic Setup** before making adjustments.

### **Step 1: Gather Information**
1. Find the **maximum resolution** of your camera.
1. Visit **[Cloudflare Speedtest](https://speed.cloudflare.com/){:rel="nofollow noreferrer" target="_blank"}** and **record your upload speed**.
1. Identify the **streaming software** you're using (e.g., OBS, Lovense StreamMaster).
1. Confirm your **operating system** (e.g., Windows 11, macOS).

> Use your camera's **max resolution** and **internet upload speed** to determine the best settings. Avoid selecting **higher** settings than your system can handle.

### **Step 2: Output Settings**
1. Select the **"Output"** tab.
1. Set **Output Mode** to **Advanced**.
1. Set **Audio Codec** to **AAC**.
1. Choose the appropriate **video encoding** method:
   * If you have a powerful **GPU**, use **Hardware Encoding**.
   * If unsure, start with **Software Encoding**.

### **Software Encoding (x264)**
**Best for: Older PCs, CPU-heavy tasks (e.g., gaming while streaming).**
Software encoding relies on your **CPU** for video processing.

| Resolution  | 853x480  | 1280x720 | 1920x1080 | 2560x1440 | 3840x2160 |
|------------|----------|----------|----------|----------|----------|
| **Upload Speed (Mbps)** | 5 | 10 | 15 | 20 | 25 |
| **Video Bitrate (Kbps)** | 2500 | 4000-5000 | 6000-8500 | 8500 | 8500 |
| **Audio Bitrate (Kbps)** | 128 | 128 | 192 | 192 | 256 |
| **Rate Control** | CBR | CBR | CBR | CBR | CBR |
| **Framerate (FPS)** | 30-60 | 30-60 | 30-60 | 30-60 | 30-60 |
| **Keyframe Interval** | 2s | 2s | 2s | 2s | 2s |
| **Preset** | veryfast-medium | veryfast-medium | fast-medium | fast-medium | fast-medium |
| **Profile** | Main/High | Main/High | High | High | High |
| **Tune** | None | None | None | None | None |

### **Hardware Encoding (NVIDIA NVENC, AMD AVC)**
**Best for: High-end GPUs, maximizing CPU performance.**
Hardware encoding shifts the workload to your **GPU**, improving overall system efficiency.

| Resolution  | 853x480  | 1280x720 | 1920x1080 | 2560x1440 | 3840x2160 |
|------------|----------|----------|----------|----------|----------|
| **Upload Speed (Mbps)** | 5 | 10 | 15 | 20 | 25 |
| **Video Bitrate (Kbps)** | 2500 | 4000-5000 | 6000-8500 | 8500 | 8500 |
| **Audio Bitrate (Kbps)** | 128 | 128 | 192 | 192 | 256 |
| **Rate Control** | CBR | CBR | CBR | CBR | CBR |
| **Framerate (FPS)** | 30-60 | 30-60 | 30-60 | 30-60 | 30-60 |
| **Keyframe Interval** | 2s | 2s | 2s | 2s | 2s |
| **Preset** | Quality | Quality | Quality | Quality | Quality |
| **B-frames** | 2 | 2 | 2 | 2 | 2 |

> If you need help, check our [Troubleshooting Guide](#troubleshooting-streaming) or join our [Discord](https://discord.gg/zKvCf8hrGP){:rel="nofollow noreferrer" target="_blank"}.
{% endcapture %}

{% capture Streaming_Optimization_body %}
**Streaming Optimization & Key Considerations**

Streaming from your PC can be intensive, and many factors affect the quality of your stream, including:

- **CPU, GPU, and RAM performance**
- **Internet upload speeds**
- **Encoder efficiency**
- **OBS settings**
- **WiFi vs. Ethernet**
- **Network stability and router performance**

This guide will help you **optimize your stream** and avoid common issues.

---
&nbsp;  
**Scene Complexity & Bitrate Correlation**

Not all content compresses the same way. **More movement = more bitrate required.**

- **Simple scenes** (e.g., talking head, static background) require a lower bitrate.
- **Fast-motion scenes** (e.g., FPS games, action-heavy streams) require a higher bitrate.

> If your **scene complexity is high** but your bitrate is too low, compression artifacts will appear.

---
&nbsp;  
**CPU, GPU, and RAM Considerations**

Streaming requires **real-time video encoding**, which is **CPU or GPU intensive**.  

- **CPU-based encoding (x264):** Uses more CPU, better quality at low bitrates.
- **GPU-based encoding (NVENC, QuickSync, AMD HW):** Uses GPU, better for high-action streams.
- **More applications = more resources used.**  
  - If running OBS + game + Discord + camera → **Expect performance strain**.
- **If also recording while streaming**, expect additional CPU/GPU load.

💡 **Tip:** If live streaming is your goal, consider **hardware upgrades** for a smoother experience.

---
&nbsp;  
**Internet Upload Speeds & Overhead**

Streaming isn’t just about download speeds—**upload speed is key.**  

- A **1080p 60fps** stream **requires significantly more upload bandwidth** than a **720p 30fps** stream.
- The higher the **bitrate**, the more bandwidth is used.
- **Recommended upload speed buffer:** Always leave **20-30% headroom** for stability.

| Stream Resolution | Upload Speed Needed |
|-------------------|--------------------|
| **720p @ 30fps** | **5 Mbps** |
| **1080p @ 30fps** | **10 Mbps** |
| **1080p @ 60fps** | **15+ Mbps** |

> **Overhead matters!** Bitrate isn’t the only thing using your bandwidth.  
> RTMP streaming adds **5-10% additional network overhead** beyond your set bitrate.

💡 **Tip:** If your **upload speed is 10 Mbps**, do not exceed **8 Mbps total bitrate**.

---
&nbsp;  
**Exceeding Maximum Allowed Bitrate (8500 Kbps)**

Most streaming platforms **cap bitrate**.  
For **Joystick**, the limit is **8500 Kbps**.

> Exceeding this will **cause dropped frames, stuttering, or forced bitrate reductions**.

To prevent issues:
- **Keep total video + audio bitrate under 8500 Kbps.**

Some platforms enforce **hard bitrate caps**, while others **throttle quality dynamically**—check platform guidelines.

---
&nbsp;  
**Encoder Performance (Software vs. Hardware)**

Encoding is **one of the most demanding tasks** during streaming.

- **x264 (CPU encoding)** → Higher quality at lower bitrates but **very CPU-intensive**.
- **NVENC, QuickSync, AMD HW (AVC)** → Offloads encoding to GPU, better for **fast-motion** streams.
- If using x264, **start with the "veryfast" preset** and adjust for balance between quality and performance.

💡 **Tip:** **CPU-bound streamers should use a strong CPU with sufficient cooling.**  
💡 **Tip:** **GPU-bound streamers should have a high-end GPU with sufficient VRAM.**

---
&nbsp;  
**WiFi vs. Ethernet & Network Optimization**

Your home network plays a large role in streaming stability.

- **Use Ethernet instead of WiFi** whenever possible.
- If on WiFi, use **5GHz** over **2.4GHz** for less interference.
- **Prioritize streaming traffic** if your router supports QoS.
- Restart your modem occasionally if you **notice dropped frames**.

💡 **Tip:** **If using WiFi, keep background devices off the network** to prevent bandwidth congestion.

---
&nbsp;  
**FPS, Keyframe Interval & Motion Impact**

Your **FPS (frames per second)** affects how smooth your stream appears.  

- **30fps is easier to encode and uses less bandwidth.**
- **60fps requires more bitrate** but offers smoother playback.

| **Scenario** | **Recommended FPS** |
|-------------|------------------|
| **Low-motion streams (static cam, just chatting, city-builders, turn-based games)** | **30 FPS** |
| **Medium-motion (RPGs, casual shooters, moderate action)** | **30-60 FPS** |
| **Fast-motion (FPS, racing games, high-action content)** | **60 FPS** |

&nbsp;  
**Keyframe Interval**
- **Set to 2s** for smoother playback.
- Higher = Buffering issues.
- Lower = Unnecessary data usage.

---
&nbsp;  
**Network Jitter & Packet Loss**

Network **jitter** is the **variation in latency**, causing **choppy streams, stutters, and lag spikes**.

To check for jitter:
- Look at the **jitter value** in your [Speedtest](/#troubleshooting-stream) or [Bufferbloat test](/#troubleshooting-stream).
- Alternatively, use **[PingPlotter](https://www.pingplotter.com/){:rel="nofollow noreferrer" target="_blank"}** (Free trial).

✅ **Good Jitter:** Under **10-15 ms**  
❌ **Bad Jitter:** Higher than **20 ms**

**Reducing Jitter & Packet Loss**  
- **Use wired Ethernet instead of WiFi**.
- **Restart your router/modem** to refresh your connection.
- **Check for background uploads (e.g., cloud sync, Windows updates).**
- **Contact your ISP** if packet loss exceeds **10%**.

---
&nbsp;  
**Final Tips for Beginners & Intermediate Streamers**

**Start with conservative settings** and adjust as needed.  
**Monitor stream health (OBS stats, dropped frames, bitrate stability).**  
**Use test streams to tweak settings before going live.**  
**Check your ISP's policies on bandwidth throttling.**  
**Join our [Discord](https://discord.gg/zKvCf8hrGP){:rel="nofollow noreferrer" target="_blank"} there are plenty of knowledgeable people that can give recommendations.**
{% endcapture %}


{% capture Desktop_Streaming_body %}
If you don’t want to setup software right away, you can go live directly from your browser — no downloads needed.

**On Desktop:** 

1. Go to your [Publisher View](https://joystick.tv/publisher){:target="_blank"}.
1. Click the button **Use Your Webcam**.
1. if your browser asks for permission to use your Webcam and Microphone, select **allow**.
1. You'll see a **live preview** — you are **not live just yet**.
1. Once everything looks good, click the **Play button (▶)** to start your stream.

> Note: You can also screenshare by clicking the **Monitor** icon.

This is the simplest way to start streaming from your PC.
{% endcapture %}


{% capture OBS_Setup_Accordions %}
  {% include accordion.html id="obs-basic-setup" label="OBS Basic Setup (Recommended)" content=OBS_Basic_Setup_body %}
  {% include accordion.html id="obs-custom-setup" label="OBS Custom Setup (Advanced)" content=OBS_Custom_Setup_body %}
  {% include accordion.html id="optimize" label="Streaming Guide & Tips" content=Streaming_Optimization_body %}
  {% include accordion.html id="desktop-browser-streaming" lblid="desktop-browser-streaming" label="Stream From Browser" content=Desktop_Streaming_body %}
{% endcapture %}

{% include accordion_group.html content=OBS_Setup_Accordions %}


**Multistreaming Considerations**  
These settings assume **you are only streaming to Joystick**, for **multistreaming**, **increase your upload speed accordingly**.

Example:
- Streaming at **1080p@60** to **Joystick + 2 other platforms** requires **a minimum of 30 Mbps upload** (~8 Mbps per site).

## Mobile Streaming

If you want to stream on the go — whether from your backyard, kitchen, or anywhere else — you’ll need a mobile streaming app. While OBS is available for desktops and laptops, there’s currently no official OBS app for iOS or Android.
There are a few apps, but the main thing to look for is "Custom RTMP Stream". As long as the app can publish an RTMP stream, you can use it to stream to Joystick from your mobile device.


{% capture Mobile_Browser_Streaming_body %}
If you don’t want to use a mobile app, you can go live directly from your browser — no downloads needed.

**On mobile:**

1. Go to [Joystick.tv](https://joystick.tv){:target="_blank"}, make sure you're signed in.
1. At the buttom of the screen tap the **Plus Sign** (`(+)`) button.
1. Select **“Start Streaming.”**
1. If your phone asks for permission to use your **camera** and **microphone**, tap **“Allow.”**
1. You'll see a **live preview** — you are **not live just yet**.
1. Once everything looks good, tap the **Play button (▶)** to start your stream.

This is the **simplest way to start streaming from your phone**, especially if you're on the go or just want a quick setup.
{% endcapture %}

{% capture Streamlabs_Mobile_body %}
Streamslabs has a desktop app that you may already be familiar with. You can download this app from your app store, then once installed, follow these steps.

{% include lazy_image.html src="/assets/jpg/streamlabs-mobile.jpg" srcset="/assets/webp/streamlabs-mobile.webp" loading="lazy" %}

Find the menu button. This is located in the upper left corner, and may be a little tricky to see at first if your camera is active. Once in the settings menu, tap on the **"Account Settings"**.

{% include lazy_image.html src="/assets/jpg/streamlabs-setup.jpg" srcset="/assets/webp/streamlabs-setup.webp" caption="Streamlabs Settings" loading="lazy" %}

On the next screen, you're presented with several streaming services that have been pre-built into Streamlabs. Unfortunately, Joystick is not one of those.

Find the **"Custom RTMP Server"** setup at the bottom of this list.

On the RTMP setup screen, you will enter in a bit of information: the **RTMP server** and your **stream key**. Both of these can be found in your [Joystick Stream Settings](https://joystick.tv/stream-settings){:target="_blank"}.

{% include lazy_image.html src="/assets/jpg/streamlabs-account.jpg" srcset="/assets/webp/streamlabs-account.webp" caption="Streamlabs RTMP Setup" loading="lazy" %}
{% endcapture %}


{% capture Larix_Broadcaster_body %}
This is another great mobile app that comes with built-in overlays, and lots of fancy things. Setup is fairly easy too!

{% include lazy_image.html src="/assets/jpg/larix-mobile.jpg" srcset="/assets/webp/larix-mobile.webp" loading="lazy" %}

Once you've downloaded the app and opened it, find the settings gear icon in the bottom right. From the settings page, tap on **"Connections"**.

{% include lazy_image.html src="/assets/jpg/larix-setup.jpg" srcset="/assets/webp/larix-setup.webp" caption="Larix Broadcaster Settings" loading="lazy" %}

Unlike Streamlabs mobile, Larix doesn't require a separate input field for your stream key. Instead, you will just **join your server URL and stream key together as one long string**.

{% include lazy_image.html src="/assets/jpg/larix-account.jpg" srcset="/assets/webp/larix-account.webp" caption="Larix RTMP Setup" loading="lazy" %}
{% endcapture %}


{% capture mobile_streaming %}
  {% include accordion.html id="mslabs" label="Streamlabs Mobile" content=Streamlabs_Mobile_body %}
  {% include accordion.html id="mlarix" label="Larix Broadcaster" content=Larix_Broadcaster_body %}
  {% include accordion.html id="mobile-browser-streaming" lblid="mobile-browser-streaming" label="Stream From Your Browser" content=Mobile_Browser_Streaming_body %}
{% endcapture %}

{% include accordion_group.html content=mobile_streaming %}

## Multistreaming

Multistreaming is when you stream to multiple sites at the same time. This is actually something that we encourage on Joystick as it is the best way to reach a wider audience. There are several programs that have the ability to do this, though each program also does have it's pros and cons.

**Solutions:**
{% capture OBS_MultiRTMP_body %}
OBS supports **multi-RTMP streaming**, allowing you to broadcast to multiple platforms simultaneously without relying on third-party services.

### **How to Set Up Multi-RTMP in OBS**
1. Download and install the **[OBS Multiple RTMP Output Plugin](https://github.com/sorayuki/obs-multi-rtmp){:rel="nofollow noreferrer" target="_blank"}**.
1. Open OBS and go to **Docks > Multiple RTMP Output**.
1. Click **Add New Target**, then enter the `stream key` and `RTMP URL` for each platform.
1. Adjust bitrate and encoder settings to match the platform requirements.
1. Start streaming! OBS will broadcast to all configured destinations at once.

**Pros:**
* No extra costs for cloud-based services.
* Complete control over your stream quality and bandwidth usage.
* Allows you to send select scenes to different platforms.

**Cons:**
* Requires a **powerful CPU/GPU** if encoding multiple streams at different resolutions/bitrates.
* Uses **1x more upload bandwidth per platform**, which can cause quality issues if your internet speed is limited.
{% endcapture %}


{% capture Aitum_Multistream_body %}
[Aitum Multistream](https://github.com/Aitum/obs-aitum-multistream){:rel="nofollow noreferrer" target="_blank"} is a **simpler alternative** to multi-RTMP in OBS, offering an **easier UI** for managing multiple stream outputs.

### **How to Set Up Aitum Multistream**
1. Download the latest release and install [Aitum Multistream](https://github.com/Aitum/obs-aitum-multistream){:rel="nofollow noreferrer" target="_blank"}.
1. Open OBS and go to **Tools > Aitum Multistream**.
1. Click **Add Destination**, then enter the `stream key` and `RTMP URL` for each platform.
1. Configure bitrate and resolution for each stream.
1. Click the normal **Start streaming** button in OBS. 
1. Now click the "Stream" icons for each platform in the Aitum panel, which will turn green when active.

**Pros:**
* **User-friendly interface**, reducing setup complexity.
* Lower performance impact compared to **OBS Multi-RTMP Plugin**.
* Supports Vertical streaming.

**Cons:**
* Still relies on **your local hardware** for encoding.
* Uses **1x more upload bandwidth per platform**, which can affect stream quality.
* Only the main scene is sent to all platforms.
{% endcapture %}


{% capture Cloud_Multistream_body %}
Cloud multistreaming services handle **encoding and distribution** on external servers, allowing you to stream to multiple platforms **without extra bandwidth usage** on your end.

### **Reputable Cloud Multistream Services**
🚧 **Note:** Most mainstream multistreaming services prohibit adult content, as payment processors and financial institutions classify it as "high risk." If you know of any services that allow it, feel free to suggest them in our [discord](https://discord.gg/zKvCf8hrGP){:target="_blank" rel="nofollow noreferrer"} under **suggestions**.

* **[Streamster](https://streamster.io/products/cloud-based-multistreaming/){:rel="nofollow noreferrer" target="_blank"}** – A straightforward cloud-based solution with a free plan, but some features require a paid subscription.

### **Pros & Cons of Local vs. Cloud Multistreaming**

| Feature | Local Multi-RTMP (OBS/Aitum) | Cloud Multistreaming |
|---|---|---|
| **CPU Usage** | High (multiple encodings) | Low (single encoding) |
| **Bandwidth Use** | High (multiple uploads)  | Low (one upload, multiple outputs) |
| **Latency** | Lower (direct encoding) | Higher (server relay) |
| **Costs** | Free (but hardware-dependent) | Paid subscription required |
| **Platform Limit** | Depends on PC strength | Supports more platforms |

&nbsp;  
If you have **strong upload speeds and a powerful PC**, **local** multistreaming gives you **better control**.  
If you have **limited bandwidth or a weaker PC**, **cloud-based** multistreaming is a better choice.
{% endcapture %}


{% capture Lovense_Stream_Master_body %}
**[Download Stream Master](https://www.lovense.com/stream-master){:rel="nofollow noreferrer" target="_blank"}** from Lovense, it is a bundled software package that simplifies setting up your stream. It includes **OBS** and the **OBS Multi-RTMP plugin** for seamless multi-streaming.

### **Getting Started**
1. Open OBS from **Stream Master**.

{% include lazy_image.html src="/assets/png/stream-master-open-obs.png" srcset="/assets/webp/stream-master-open-obs.webp" caption="Stream Master Open OBS" loading="lazy" %}

1. By default, the **"Multi-Streaming"** window will already be docked inside OBS.

{% include lazy_image.html src="/assets/png/stream-master-multistreaming-dock.png" srcset="/assets/webp/stream-master-multistreaming-dock.webp" caption="Stream Master Multi-Streaming Dock" loading="lazy" %}

1. Click **"Add new cam site"** and enter your streaming platform details.
1. If you want to customize settings or stream different scenes, refer to the **OBS Multi-RTMP plugin** documentation above.
{% endcapture %}


{% capture SplitCam_body %}
[SplitCam](https://splitcam.com/){:rel="nofollow noreferrer" target="_blank"} provides an easy way to **stream to multiple sites** without complex setup.

### **How to Set Up SplitCam for Multi-Streaming**
1. Click on the **"Stream Settings"** menu in the top right.
1. Click the **"Add Channel"** button at the bottom.
1. Select an existing site or enter a custom RTMP URL.

{% include lazy_image.html src="/assets/png/splitcam-stream-settings.png" srcset="/assets/webp/splitcam-stream-settings.webp" caption="SplitCam Stream Settings" loading="lazy" %}

**Note:** SplitCam is the **least customizable option** among multi-streaming tools. While it's easy to use, you will stream the exact **same video feed** to all platforms without per-platform scene switching.
{% endcapture %}



{% capture multistreaming %}
  {% include accordion.html id="obs-multirtmp" label="OBS Multi-RTMP" content=OBS_MultiRTMP_body %}
  {% include accordion.html id="aitum-multistream" label="Aitum Multistream" content=Aitum_Multistream_body %}
  {% include accordion.html id="cloud-multistream" label="Cloud Multistreaming Services" content=Cloud_Multistream_body %}
  {% include accordion.html id="lovense-stream-master" lblid="lovense-stream-master" label="Lovense Stream Master" content=Lovense_Stream_Master_body %}
  {% include accordion.html id="splitcam" label="SplitCam" content=SplitCam_body %}
{% endcapture %}

{% include accordion_group.html content=multistreaming %}


## Troubleshooting Streaming

{% capture Speedtest_body %}
First, visit [Cloudflare's Speedtest](https://speed.cloudflare.com/){:rel="nofollow noreferrer" target="_blank"} to check your internet speed.

For smooth streaming, aim for:

- **Ping:** Under **60 ms**
- **Jitter:** Under **10-15 ms**
- **Upload Speed:** At least **10 Mbps** (See [Streaming Guide](#streaming-setup-guides) for a better overview of values)

### **What is Network Jitter?**
Network **jitter** refers to the fluctuation in your connection’s response time, causing choppy streams and lag spikes.  
To check for jitter:
- Look at the **jitter value** in your **Speedtest** or **Bufferbloat** test.
- Alternatively, use **[PingPlotter](https://www.pingplotter.com/){:rel="nofollow noreferrer" target="_blank"}** (Free trial) to measure network stability.

If your **jitter is too high** or you're experiencing packet loss:
- Switch from **Wi-Fi** to a **wired Ethernet connection**.
- Restart your **router** and **modem**.
- Packet loss of 2-3% will start to moderately impact your streaming quality.
- Contact your **ISP** if packet loss exceeds **5%**.

### **Improving Your Stream Stability**
If your connection is unstable or you're dropping frames, try these adjustments:

- Set your `Bitrate` between **2500 - 8500 Kbps** (under **“Output” settings**).
- If you currently stream at **60fps**, consider lowering it to **30fps** for better stability.
- Switch your encoder to **x264 (Software Encoding)**, as hardware encoding can sometimes cause issues.
- Use **Advanced settings** and set the **Keyframe Interval** to **2 seconds**.

If problems persist, the issue may be outside your or Joystick’s control, such as **network congestion or ISP limitations**.
{% endcapture %}


{% capture Bufferbloat_body %}
Visit [Waveform's bufferbloat test](https://www.waveform.com/tools/bufferbloat){:rel="nofollow noreferrer" target="_blank"}.

[Bufferbloat](https://en.wikipedia.org/wiki/Bufferbloat){:rel="nofollow noreferrer" target="_blank"} occurs when your internet connection slows down or becomes unstable due to excessive buffering in network devices. Think of it like a traffic jam, where data packets are delayed or dropped before reaching their destination.

Bufferbloat significantly impacts internet performance, causing lag and slower speeds. One effective way to reduce bufferbloat is by enabling the **Quality of Service (QoS)** setting on your router. After enabling QoS, run the bufferbloat test again — your results should show improvement.

**Note:** Enabling QoS may show a lower upload speed than expected. This is normal — the adjusted speed represents a more **stable and realistic bandwidth** for everyday use.

Bufferbloat often occurs because internet service providers (ISPs) "oversubscribe" their networks, meaning they sell more bandwidth than they can reliably provide. This is why ISPs advertise speeds as "up to X Mbps"—your actual speed fluctuates based on network congestion.

When interpreting Waveform's bufferbloat results, check the **latency grades** (ranging from **A** to **F**). For optimal performance, aim for an **A** or **B** grade. Lower grades indicate network congestion issues, suggesting you should fine-tune your QoS settings or contact your ISP for further support.

{% include lazy_image.html src="/assets/jpg/bufferbloat.jpg" srcset="/assets/webp/bufferbloat.webp" caption="an example of a poor bufferbloat test, showing high latency on upload." loading="lazy" %}
{% endcapture %}

{% capture Droppedframes_body %}
Dropped frames can happen for a few reasons, including low upload speeds or bufferbloat issues. To start troubleshooting, make sure you've completed both the Speedtest and Bufferbloat tests provided in the previous sections.

Windows users can also check for network routing issues using the tracert command:

```Java
US Servers:
    tracert live.joystick.tv

EU Servers:
    tracert eu.live.joystick.tv
```

&nbsp;

This command checks each server ("node") your data passes through on the way to Joystick's servers. If you see results like **40ms * *** or * 49ms 44ms, this suggests a possible issue with that specific node or network provider.

Unfortunately, if a node has an issue, **only the provider responsible for that node can fix it**. The best option is to wait for them to resolve the issue.

**Important**: Some nodes **intentionally** refuse to respond to ping requests, displaying timeouts (`* * *`). This is normal and doesn't indicate a problem unless you also see high latency spikes.

⚠️ **Do not share your tracert results publicly**. The first few nodes often reveal your router, ISP, and IP address, which are private details.
{% endcapture %}

{% capture Missedframes_body %}
Skipped or missed frames occur when your streaming software (e.g., OBS) struggles to **encode or render video smoothly**. This is usually caused by **hardware limitations, high CPU usage, or demanding settings**.

To reduce missed frames:

* **Lower your resolution:** Reduce stream output (e.g., from **1080p to 720p**) to ease the workload on your CPU/GPU.
* **Adjust your framerate:** Lower from **60fps to 30fps** for smoother encoding.
* **Switch encoders:** Try switching between **software encoding (x264)** and **hardware encoding (NVENC, AMD HW, QuickSync)** to see which performs better on your system.
* **Monitor CPU usage:** If CPU usage is consistently above **80%**, lower encoding settings or close unnecessary programs.
* **Update drivers:** Ensure your graphics drivers and streaming software are up to date.

After making these adjustments, restart your stream and **monitor performance** to see if the issue improves. 
{% endcapture %}

{% capture NetworkJitter_body %}
Network jitter and packet loss can cause choppy streams, lag spikes, and inconsistent performance.

To check for jitter:
* Check jitter under your `Speedtest` result, or `Bufferbloat` result.
* Alternatively Try [Pingplotter](https://www.pingplotter.com/){:rel="nofollow noreferrer" target="_blank"} (Free trial) to measure network stability.
* Aim for jitter under **10ms - 15ms** for smooth streaming.

If packet loss is an issue:
* Switch from Wi-Fi to a wired Ethernet connection.
* Restart your router and modem.
* Contact your ISP if packet loss exceeds **10%**.

Jitter and packet loss are often caused by **unstable network conditions or ISP issues**.
{% endcapture %}

{% capture Firewall_body %}
Firewalls and network restrictions can block streaming services.

To troubleshoot:
- **Check Windows Defender & third-party firewalls** for blocked ports.
- **Ensure router firewall settings aren’t overly restrictive.**
- **Whitelist streaming services in your firewall settings.**

If you're behind a strict ISP firewall, a **VPN** or **contacting your ISP** may be necessary.
{% endcapture %}


{% capture troubleshooting_stream %}
  {% include accordion.html id="speedtest" label="Speedtest" content=Speedtest_body %}
  {% include accordion.html id="bufferbloat" label="Bufferbloat" content=Bufferbloat_body %}
  {% include accordion.html id="jitter" label="Ping Jitter" content=NetworkJitter_body %}
  {% include accordion.html id="firewall" label="Firewall Configuration" content=Firewall_body %}
  {% include accordion.html id="dropframes" label="Dropped Frames" content=Droppedframes_body %}
  {% include accordion.html id="missedframes" label="Skipped/Missed Frames Explained" content=Missedframes_body %}
{% endcapture %}

{% include accordion_group.html content=troubleshooting_stream %}

Still having issues? Try Support Channel on [Discord](https://discord.gg/zKvCf8hrGP){:target="_blank" rel="noreferrer nofollow"}, there are many people willing to help.


## Lovense Integration

Joystick has native support for your [Lovense](https://www.lovense.com/){:target="_blank" rel="noreferrer nofollow"} devices. These are interactive sex toys that will vibrate when someone sends you a tip during your live streams. The strength and length of vibration is controlled by you through the Lovense toy settings, and these values correlate to a tip amount.

Add an extra level of interaction with your community during live streams by connecting your toy and encouraging users to tip!

> You can also visit the [Lovense website guides](https://www.lovense.com/cam-model/guides/Video-Guides){:target="_blank" rel="noreferrer nofollow"} for the most up-to-date information.

{% capture Lovense_Overview_body %}
There are several ways to integrate a Lovense device with Joystick. With multiple components involved, it can seem confusing at first. Here's a step-by-step overview of how it works:

1. **Connecting Your Device:** Your Lovense toy connects via Bluetooth, either to your mobile phone using the LovenseConnect app, or directly to your PC using a [Bluetooth dongle adapter](https://www.amazon.com/LOVENSE-Lovense-USB-Bluetooth-Adapter/dp/B0711DTRR6){:target="_blank" rel="noreferrer nofollow"} with the Lovense Connect desktop app.

1. **PC Lovense App:** Your PC needs to run a separate Lovense application (either Stream Master or the browser extension “Share Link”) to communicate with the Lovense servers.

1. **Browser Detection:** Your browser must be on the Joystick [Publisher Page](https://joystick.tv/publisher){:target="_blank"}, where it will detect the Lovense browser extension (from Stream Master or Share Link). When successfully connected, you will see an indicator like this:

{% include lazy_image.html src="/assets/png/lovense-device-active-icon.png" srcset="/assets/webp/lovense-device-active-icon.webp" caption="Lovense Device Connected" loading="lazy" %}

1. **Sidebar Indicator:** Alternatively, you might see a sidebar pane confirming your device is connected:

{% include lazy_image.html src="/assets/png/lovense-device-active-pane.png" srcset="/assets/webp/lovense-device-active-pane.webp" caption="Lovense Device Connected Sidebar" loading="lazy" %}

1. **Live Interaction:** When live streaming, if a viewer sends you a tip, Joystick will transmit the tip amount to the Lovense browser extension. This information is sent to the Lovense servers, which then relays it to your Lovense Connect app (on mobile or desktop), triggering the toy.
{% endcapture %}


{% capture Lovense_StreamMaster_body %}
[Lovense Stream Master](https://www.lovense.com/stream-master){:target="_blank" rel="noreferrer nofollow"} is an AIO (all-in-one) software program that combines [OBS](https://obsproject.com/){:target="_blank" rel="noreferrer nofollow"} and Google Chrome into a single application with full Lovense integration. Using this app means you don’t need a separate browser or streaming software, and all Lovense OBS overlays are preconfigured.

- Start by reading through these guides to install: [read more](https://www.lovense.com/cam-model/guides/Stream-Master/Basic-Tutorials/Step-By-Step-Tutorial){:target="_blank" rel="noreferrer nofollow"}
- Next, add Joystick as a cam site. Click the **“Add a cam site”** button on Stream Master, then search for **Joystick**.

{% include lazy_image.html src="/assets/png/lovense-add-cam-site.png" srcset="/assets/webp/lovense-add-cam-site.webp" caption="Lovense Add a cam site" loading="lazy" %}

- Lastly, set up your OBS connection by following our previous guides above: [read more](#tab-lovense-stream-master)

At this point, you should have everything connected.
{% endcapture %}

{% capture Lovense_ShareLink_body %}
Visit the [Lovense Extension Settings](https://extension.lovense.com/share-link/pages/dashboard.html){:target="_blank" rel="noreferrer nofollow"} site from a Chromium-based browser (Chrome, Brave, OperaGX, Edge).

> **NOTE:** If you visit this link from Firefox or Safari, you’ll see a blank page. Be sure to use Chrome or a Chromium-based browser.

Once you have logged into your Lovense account, you'll be prompted to install the **“Share Link”** extension. You can also find instructions on the [Lovense Cam Extension](https://www.lovense.com/cam-model/guides/Written-Guides/Installation-Guides/Lovense-Cam-Extension){:target="_blank" rel="noreferrer nofollow"} guides.
{% endcapture %}


{% capture Lovense_Setup_accordion %}
  {% include accordion.html id="lovense-overview" label="Overview" content=Lovense_Overview_body %}
  {% include accordion.html id="lovense-setup-stream-master" label="Setup using Stream Master" content=Lovense_StreamMaster_body %}
  {% include accordion.html id="lovense-share-link" label="Setup using a Chrome extension" content=Lovense_ShareLink_body %}
{% endcapture %}

{% include accordion_group.html content=Lovense_Setup_accordion %}

## Troubleshooting Lovense

If you're still seeing issues with the device connecting, here's a few tips you can try.

* Try turning the toy completely off and back on again.
* Give the Joystick Publisher page a "hard refresh" (`ctrl-shift-R` on Windows, or `cmd-shift-R` for Mac).
* Ensure your toy battery is charged over 50%
* If you're using the dongle, try using your phone
* If you're using your phone, change the sleep settings to keep it on
* Ensure your Stream Master or Share Link and the Lovense Connect apps are all fully up-to-date

After trying these, if you’re still having issues streaming, join our [Discord](https://discord.gg/zKvCf8hrGP){:rel="nofollow noreferrer" target="_blank"}, and let us know in the Support channel.