<h1 style="font-size: 1.8em; margin-block: 10% 10%; text-shadow: 0 0 20px var(--fs-background-color), 0 0 30px var(--fs-background-color)">SeamLess:<br> DISTRIBUTED SPATIAL AUDIO RENDERING
ON THE LINUX AUDIO STACK</h1>
<div style="text-align: center; color: var(--fs-text-muted-color); text-shadow: 0 0 20px var(--fs-background-color), 0 0 30px var(--fs-background-color)">
    <div style="display: flex; justify-content: center; gap: 48px; font-size: 0.8em;">
        <strong>Fares Schulz</strong>
        <strong>Maximilian Weidauer</strong>
        <strong>Stefan Weinzierl</strong>
        <strong>Henrik von Coler</strong>
    </div>
    <div style="font-size: 0.7em; margin-top: 16px;">
        Audio Communication Group<br>
        Technische Universität Berlin
    </div>
</div>

Notes:

- Hello everyone
- We present the SeamLess system, a distributed spatial audio rendering platform built on the Linux audio stack
- My name is Fares Schulz, this is my colleague Maximilian Weidauer

<!-- .slide: data-state="no-header no-footer", data-background-image="assets/images/SHF_eb00125547_Ethnologisches_Museum.jpg" -->

---
# Introduction

<!-- .slide: data-state="no-header" --->

---
## Spatial Sound Reproduction

- Reproduction of sound over loudspeaker arrays such that listeners perceive a **two- or three-dimensional sound field**
- Beyond two-channel and multichannel stereo
- Two widely used, **non-proprietary** methods:
    - **Ambisonics**
    - **Wave Field Synthesis (WFS)**
- Deployed in concert halls, museums, theatres and research studios

<div class="reference" style="margin-top: 30px;">
Schultz, Hahn &amp; Spors (2025), <em>Wellenfeldsynthese</em>, in: Handbuch der Audiotechnik, Springer.
</div>

Notes:

- Spatial audio is the reproduction of sound over loudspeaker arrays (or headphones) such that listeners perceive a two- or three-dimensional sound field
- So it goes beyond two-channel and multichannel stereo formats, which are still the most common playback formats for audio
- Widely used non-proprietary methods include:
    - Ambisonics
    - Wave Field Synthesis (WFS)
- Both methods are already used in different venues throughout the world

---
## Ambisonics & WFS

<div style="display: flex; gap: 40px; margin-top: 30px;">
    <div class="tile color-0" style="flex: 1; align-items: center; text-align: center;">
        <h3>Ambisonics</h3>
        <div class="tile-description" style="height: auto; font-size: 0.6em;">
            <img src="assets/images/spherical_harmonics.png" alt="Spherical harmonics" style="width: 100%; object-fit: contain; border-radius: 8px; margin-top: 12px;">
        </div>
    </div>
    <div class="tile color-1 fragment" style="flex: 1; align-items: center; text-align: center;">
        <h3>Wave Field Synthesis</h3>
        <div class="tile-description" style="height: auto; font-size: 0.6em;">
            <img src="assets/images/huygens_fresnel_principle.webp" alt="Huygens-Fresnel principle" style="width: 100%; object-fit: contain; border-radius: 8px; margin-top: 12px; background: #fff; padding: 8px;">
        </div>
    </div>
</div>

<div class="highlight image-overlay fragment" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 70%;">Combining both leverages their complementary strengths in a single system</div>

Notes:

Ambisonics:
- Encodes the spatial soundfield into multiple channels using spherical harmonics
- These channels have certain parallels to the directionality of microphones:
    - Channel 0 -> omnidirectional
    - Channel 1-3 -> figure of eight in different directions
    - Then cardioid, etc...
- These encoded channels can then be decoded to arbitrary loudspeaker setups
- It is very good at diffuse soundfields on a sphere around the listener, but does not allow placing sources on exact positions in the room

Wave Field Synthesis:
- Synthesizes wave fields from speaker arrays
- Comes from the Huygens-Fresnel principle: Any wavefront can be created by summing an infinite number of elementary waves
- Imagine these elementary waves as what happens when you throw a stone into water, the circular wave that appears
- With this i.e. the wave field of a focused source inside the loudspeaker array can be synthesized
- Predominantly used for 2D-horizontal sound-fields and allows for a very precise placement of sound sources within a room

---
## The Challenge of Scale

- Both methods benefit from large channel counts (especially WFS)
- Computational + organizational demands **exceed a single machine**
- Our venues at the Humboldt Forum and TU Berlin have...

<div style="display: flex; gap: 24px; margin-top: 24px; font-size: 0.62em;">
    <div class="tile" style="flex: 1; padding: 16px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <img src="assets/images/hufo_image.jpg" alt="Humboldt Forum listening room" style="width: 100%; height: 170px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">
        <strong>Humboldt Forum</strong><br>
        256-channel WFS · 45-channel Ambisonics dome
    </div>
    <div class="tile" style="flex: 1; padding: 16px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <img src="assets/images/small-studio.png" alt="TU Studio" style="width: 100%; height: 170px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">
        <strong>TU Studio</strong><br>
        192-channel WFS · 21-channel Ambisonics dome · 8-speaker ring
    </div>
    <div class="tile" style="flex: 1; padding: 16px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <img src="assets/images/H0104.jpg" alt="Lecture Hall H 0104" style="width: 100%; height: 170px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">
        <strong>Lecture Hall H 0104</strong><br>
        832-channel WFS · 600+ seats
    </div>
</div>

<div class="highlight" style="margin-top: 36px;">Rendering for these high-channel count systems requires <strong>distributed processing across multiple hosts</strong></div>

Notes:

- But I want to note that both systems benefit from high audio channel counts, especially WFS
- And these channel counts can easily exceed the computational resources of a single machine
- For example our venues at the Humboldt-Forum has...
- And rendering for these high-channel count systems requires distributed processing across multiple hosts

---
## Existing Solutions

Mature systems exist — but each leaves a gap for large-scale, open, distributed Linux setups.

| System | Open source | Linux | WFS | Distributed |
|---|:---:|:---:|:---:|:---:|
| IRCAM **Spat** | ✗ (free, proprietary) | ✗ | ✓ | ~ |
| **Holoplot** | ✗ | embedded | ✓ | custom HW |
| **SSR** | ✓ | ✓ | ✓ | ✗ |
| **TASCAR** | ✓ | ✓ | ✗ | ✗ |
| **IEM** / **SPARTA** plug-ins | ✓ | ✓ | ✗ | ✗ |
| **SeamLess** | ✓ | ✓ | ✓ | ✓ |

<div class="reference" style="margin-top: 20px;">
Carpentier et al. (Spat, ICMC 2015) · Geier et al. (SSR, AES 2008) · Grimm et al. (TASCAR, LAC 2015) · Rudrich et al. (IEM, 2016) · McCormack &amp; Politis (SPARTA, AES 2019)
</div>

<div class="image-overlay fragment" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 70%; text-align: left;background: var(--fs-highlight-background); color: var(--fs-highlight-color); padding: 20px">
Other limitations:
<ul>
    <li> No <strong>deployment automation</strong> or <strong>show scheduling</strong> for permanent installations</li>
    <li> Limited portability of pieces between venues for WFS Systems</li>
</ul>
</div>

Notes:

- There exist already quite a couple of mature spatial audio rendering frameworks
- Two groups: integrated renderers (Spat, Holoplot, SSR, TASCAR) and DAW plug-ins (IEM, SPARTA).
- Existing tools each miss at least one key requirement: openness, Linux support, WFS, or distributed rendering.
- I.e. The Spat and Holoplot codebase is proprietary and Spat is conceived as MAX externals and hence not Linux compatible
- The SSR has almost all features but does not allow for distributed rendering, similar to the DAW plug-ins IEM and Sparta
- Which also do not have a WFS renderer, like TASCAR
- SeamLess targets exactly that missing combination: open-source + first class Linux support + WFS + distributed rendering.
- And apart from that we also tackle two more limitations:

---
# SeamLess
<!-- .slide: data-state="no-header" data-background-image="assets/images/hufo_image.jpg" data-background-opacity="0.55" -->
---

## SeamLess - Overview
- **Modular** software stack
- Highly **Configurable** components
- **Distributed** rendering
- **Complexity** is **hidden** from users 
    (only mono audio streams and control data using OSC)
- Management through common Linux tools (systemd, JACK/PipeWire, Ansible, meson)
- Pieces are (reasonably) **portable**
  - Shared, normalized coordinate system between all venues

Notes:
- Modular software stack -> components can be chosen based on setup, and also replaced -> also flexible in choice of rendering software
- all components also very configurable, mostly using yaml files
- Distributed rendering -> not limited by outs and performance
- Rendering on backend -> complexity and implementation details hidden
- linux tools
- coordinate system is normalized: wall farthest from the center at distance 0.5 on either the x- or y-axis. transfer between different locations without rescale
- of course room differences, so never true portability, but at least its possible, especially between similar systems like hufo and TU


---
## 

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="hufo signal flow" width="100%" >
</div>

Notes:
- overview of signal flow in one of our installations, at hufo
- route audio to rendering machines, further processed, all Linux running JACK or PipeWire, 
    - pipewire (for us) only recently possible due to removing 64 channel hardware limit, since we use soundcards with 128 or 192 outputs

- Synchronization handled by audio hardware, either dante or wordclock or in the future aes67 using PTP

- lets take smol look at the different components

---

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
    <div class="detail-rect" style="top: 17%;left:43%;width:13%;height:6%" />
</div>

Notes:
exists one time in the system

---
## OSC-Kreuz

<div class="highlight" style="margin-top: 40px;"> OSC routing hub and central source of truth </div>

- Support for positional data, gains and WFS parameters
- Automatic conversion between different coordinate formats
- Per-source rate limiting
- Receivers can subscribe using OSC based protocol

Notes:
- Python, central osc routing hub and source of truth by keeping track of state
- currently supports positional data, gains for all rendering engines and special WFS parameters (point source or plane wave?)
- translates between cartesian and spherical coordinates, depending on what is received
- configurable
- rate limiting (smoother movement wfs (doppler))
- receivers either specified in config file or subscribe during runtime
- if special format is needed new receiver subclass can be easily created
  - cwonder as example
---

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
    <div class="detail-rect" style="top: 17%;left:18%;width:25%;height:25.5%"></div>
    <div class="detail-rect" style="top: 17%;left:60.5%;width:13%;height:13%"></div>
    <div class="detail-rect" style="top: 17%;left:78.2%;width:13%;height:13%"></div>

</div>

Notes:
- gains
- summing for sub
- encoding
---


## Audio-Matrix
<div class="highlight" style="margin-top: 40px;"> Flexible multichannel DSP  </div>

<div class="image-overlay fragment appear-vanish" data-fragment-index="0" style="width: 82%">
    <img src="assets/images/audio_matrix.png" alt="audio matrix signal flow" >
</div>

- Preprocessing and gains
- OSC controllable
- Channel count calculated during initialization stage
- Modules: **Gain**, **Ambisonics Encoder**, **Sum**, **Filter**, **Distance Gain**, **Delay**

<div class="fragment"></div>
Notes:
- C++
- heavily configurable using yaml
- preprocessing for actual renderers (wfs/hoa)
- most important task: Gains for rendering systems
- OSC controllable

OPEN OVERLAY
- signal split to multiple tracks, each track configurable modules

CLOSE OVERLAY
- output channel count calculated during initialization
- new modules relatively easy to add, access to osc server (liblo)


---

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
    <div class="detail-rect" style="top: 30%;left:60.5%;width:13%;height:6%"></div>
    <div class="detail-rect" style="top: 30%;left:78.2%;width:13%;height:6%"></div>
</div>

---
## Wonder
<div class="highlight" style="margin-top: 40px;"> Wave field synthesis Of New Dimensions of Electronic music in Realtime </div>

- WFS Rendering Suite, renderer **tWonder**
- tWonders can be distributed across different machines
- Support for focused and unfocused sources
- Multicast to increase synchronicity of OSC messages
- Started using systemd template service and custom target

<div class="speaker-polygon fragment" style="top: 33%;left:70%;width:15%;height:70%;">
    <div class="speaker-source fragment fade-in-then-out" style="top: 1%;left:99%;"></div>
    <div class="speaker-source fragment" style="top: 17%;left:60.5%;"></div>
</div>



Notes:
- our WFS rendering suite, developed at TU for 20 years now
- Stripped down, only actual renderer tWonder is used, since followed similar design principle as seamless on the whole, that's why message router cWonder could be drop-in replaced by OSC-Kreuz
- each twonder handles subset of speaker-panels (cheap way of getting multithreading, since independent of each other), thus can be distributed by having knowledge about connected speakers and layout of the full system
- cwonder supplies room polygon
- focused vs unfocused sources, 
polygon information is used to determine if panel is needed for source
- rendering: gains and delays based on distance from virtual sound source
- Multicast to increase synchronicity of OSC messages
- Started using systemd template service and custom target to monitor state of up to 16 tWonders per machine


---

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
    <div class="detail-rect" style="top: 43%;left:18%;width:13.5%;height:16.5%"></div>

</div>

---

## Ambisonics Decoding

- Decoding and Distance Compensation with modified IEM plugins
- Built without GUI
- Encoding within Audio-Matrix

Notes:
- not configured using yaml :(
- configuration bit more complicated, 
  - first need to calculate the decoder/config on machine running gui version, 
  - then copy the state over
---

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
    <div class="detail-rect" style="top: 17%;left:2%;width:13%;height:6%" />
</div>
---

## Playback Engine
<div class="highlight" style="margin-top: 40px;"> Feed audio and control data into the system</div>
Any program with multichannel audio playback and OSC output or VST plugin-support

**REAPER** with **SWS Extensions**

| Channels | Mapping |
| --- | --- |
| 1-32 | Virtual Sources|
|33-48 | Encoded ambisonics up to 3rd order |
| 50 | LFE direct |

Notes:
- playback engine could be any program with multichannel audio playback and OSC output or VST plugin-support
- on the playback machine in the hufo REAPER with SWS extensions
- currently the only non-free component
- chosen for 
  - **stability**, (unreasonably stable) 
  - **familiarity** of artists, 
  - osc **remote** control, 
  - lua **scripting**, 
  - **adoption** within spatial audio scene
- one big session with all pieces, that can get started with OSC and stopped using sws

---

## SeamLess Plugin Suite
<img src="assets/images/SeamLessClient.png" alt="audio matrix signal flow" style="width:70%" >
<img src="assets/images/SeamLessMain.png" alt="audio matrix signal flow" style="width:22%" >

Notes:
- Client side plugins for controlling positions and gains
- JUCE plugins for most DAWs
- no processing, just OSC
- Main handles state and communication
- Clients connect using ipc
- split allows keeping positional data and automation grouped with audio data
---

<div class="image-overlay">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
    <div class="detail-rect" style="top: 52.5%;left:43%;width:13%;height:6%" />
</div>
---

## ShowControl
<div class="highlight" style="margin-top: 40px;"> Scheduling and Playback Control </div>
<img src="assets/images/seamless_status.png" alt="audio matrix signal flow" style="width:66%" >

Notes:
- Scheduler, in museum context
- Python with frontend with flask, typescript/react
- controls reaper and sends broadcasts for video screens MPV
- schedule is generated from blocks of pieces
- pieces, blocks and schedules are of course yml files
- additional features like this webGL based source viewer
- also APIs for controlling and getting status, info screens and emergency playback stopping
---

## Jack-Connection-Manager
<div class="highlight" style="margin-top: 40px;"> Manage JACK/PipeWire connections between clients with high number of ports </div>


```yaml [|1-3,9-10|4-8,11-12]
- client: audio-matrix:wfs_
  n_channels: 32
  start_index: 0
  connections:
    - client: twonder1:input
    - client: twonder2:input
    - client: twonder3:input
    - client: twonder4:input
- client: twonder1:speaker
  n_channels: 16
  connections:
    - client: system:playback_
```

Notes:
- simple python program that runs as daemon
- focus on readable and concise configs, instead of just creating snapshots or saving every connection individually, because we don't have that many clients, but each has a lot of connections
- NEXT: instead of specifying connections specify client and the amount of channels, optionally start index, 
- NEXT: then we define the clients with port names to connect it to
- script for creating the config lol
- might be made obsolete by wireplumber/lua, but due to simple syntax might stay around, since it also works for pipewire, burn that bridge when get to it
---
# Orchestration
<!-- .slide: data-state="no-header" data-background-image="assets/images/hufo_image.jpg" data-background-opacity="0.55" -->

Notes:
in a cluster with that much software we can't edit config files by hand all the time using ssh, so we use some tools to help us with that

---
## Configs

- All of our configs in one repo
- Installed using Meson build system
- Correct configs chosen for **location** and **node**

| location | node |
| --- | --- |
| `EN325` | `riviera` |
| | `wintermute` |
| `HUFO` | `playstation` |
| | `renderer01` - `03` |
| `H0104` | `tengo` |
| | `kaoru01` - `05` |

Notes:
- All of our configs in one repo, probably what is changed the most often
- Installed using Meson build system
- meson is used (abused?) for most installations, including python, where it just calls the correct tools, and then moves the files to their locations
- correct configs chosen for **location** and **node**
- sometimes we have uniquely named machines, sometimes numbered, the logic is contained within meson scripts
---
## Versioned Install
<div class="highlight" style="margin-top: 40px;"> Strict versioning for installed software </div>
String based on current git tag version is appended to filenames/directories

<pre><code data-noescape class="language-txt hljs" data-highlighted="yes" data-line-numbers="3,7|2,5-6">/usr/local/bin/
├── audio-matrix -> /usr/local/bin/audio-matrix-<span class="hljs-keyword textit">version</span>
└── audio-matrix-<span class="hljs-keyword textit">version</span> 
/usr/local/etc/
├── audio-matrix 
│    -> /usr/local/etc/audio-matrix-<span class="hljs-keyword textit">location</span>-<span class="hljs-keyword textit">node</span>-<span class="hljs-keyword textit">version</span>/
└── audio-matrix-<span class="hljs-keyword textit">location</span>-<span class="hljs-keyword textit">node</span>-<span class="hljs-keyword textit">version</span>/
</code></pre>


Notes:
- high reliability requirements, limited time to work, because usually there are visitors at the museum, thus quick rollback required
- first we create the actual binary, or config directory, with a string based on the current git tag version appended as postfix
- with configs node and location as well
- NEXT: then we create symlinks with the actual names pointing to the versioned files 
- similar to how library versions are managed

<!-- 

## Versioned Install
<div class="highlight" style="margin-top: 40px;"> Strict versioning for installed software </div>
String based on current git tag version is appended to filenames/directories

<pre><code data-noescape class="language-txt hljs" data-highlighted="yes" data-line-numbers="2-3|6-7|5">/usr/local/share/
└── osc-kreuz-<span class="hljs-keyword textit">version</span>/
    └── venv/*
/usr/local/bin/
├── osc-kreuz -> /usr/local/bin/osc-kreuz-<span class="hljs-keyword textit">version</span>
└── osc-kreuz-<span class="hljs-keyword textit">version</span> -> 
        /usr/local/share/osc-kreuz-<span class="hljs-keyword textit">version</span>/venv/bin/osc-kreuz
</code></pre>

Notes:
for python applications like osc-kreuz or jacoma:
1. venv in /usr/local/share/, in which the module is installed
2. NEXT: in the binary dir first symlink to installed python script in venv
3. NEXT: symlink with clean name -->

---
## Deployment
<div class="highlight" style="margin-top: 40px;"> Infrastructure as Code </div>
Ansible Playbooks to go from fresh Debian installation to complete SeamLess system

<div class="image-overlay fragment appear" data-fragment-index="1" data-fragment-span="4">
    <pre>
<code data-trim data-line-numbers="1,11|2-5,9-10,12-15|6-8,16-18" data-fragment-index="2" style="font-size: 0.8em">renderer:
  hosts:
    renderer01:
      ansible_host: renderer01.local
      ansible_user: username
      services: [osc-kreuz, jack-connection-manager, audio-matrix, ambisonics]
      location: HUFO
      audio_driver: dante
    renderer02:
      ...
player:
  hosts:
    playstation:
      ansible_host: playstation.local
      ansible_user: username
      services: [jack-connection-manager, gui, showcontrol]
      location: HUFO
      audio_driver: [dante]
</code></pre>
</div>

### Setting up new SeamLess system
0. Build a system
1. Set up Ansible inventory <!-- .element: class="fragment" data-fragment-index="0" -->
2. Create config files <!-- .element: class="fragment" data-fragment-index="6" -->
3. Run main playbook <!-- .element: class="fragment" data-fragment-index="7" -->



Notes:
- use ansible for management and deployment. does everything from installing software, setup system
- you of course need to build a system first, and handle audio routing in some way, but that's nothing we can automate
- to go about setting up new seamless system first create inventory
  - groups of hosts: renderer, player
  - actual hosts with host and usernames
  - custom variables: 
    - services define which software gets installed
    - location is passed to the meson config install script
    - audio driver defines which drivers get installed
- caveats to this: location specific scripts for proxies etc

---
# Conclusion

<!-- .slide: data-state="no-header" data-background-image="assets/images/SHF_eb00125547_Ethnologisches_Museum.jpg" data-background-opacity="0.5" -->

Notes:

- Thanks Max, I will now conclude the presentation

---
## What We Presented

- **SeamLess** — a modular, open-source, real-time spatial audio rendering platform
- Built entirely on the Linux audio stack
- **Distributes** rendering across multiple commodity Linux servers
- **systemd** services + **Ansible** deployment + strict **version control** for reliability
- Running **continuously since May 2025** at the Berlin Humboldt Forum
- Scales to large arrays — **up to 832 channels** in our largest install
- **Separates** the rendering backend from user interaction
    - artists work through familiar **DAW plug-ins** and plain **OSC**

Notes:

- We have presented to you today the SeamLess system, which is a modular, open-source, real-time spatial audio rendering platform
- It is based entirely on the Linux audio stack
- And allows you to create a spatial audio rendering system which distributes the compute across multiple commodity Linux servers
- Through the infrastructure as code principle and strict version control we have achieved a high reliability
- I.e. the system has been running continuously since May 2025 at the Berlin Humboldt-Forum
- And it also scales – we tested up to 832 channels in our largest installation
- In all installations we have the rendering backend strictly separated from the user interaction, which lets artists work in their familiar DAW or with plain OSC messages while hiding the complexity

---
## PipeWire — Spatial Audio Backend for the Future?

- **JACK** has reliably carried our demanding, high-channel-count spatial audio in production for many years
- **PipeWire** recently lifted the **64-channel hardware limit** -> makes it a viable solution going forward
- Especially **WirePlumber** scripting + native **AES67** interesting for future development

Notes:

- One thing we want to highlight especially to the Linux audio community:
- While JACK has been reliably driving our demanding high-channel-count audio rendering in the recent years
- Now Pipewire has also lifted the 64 channel hardware limit, which also makes it a viable solution
- Our initial tests show that seamless also works reliably with Pipewire and
- The Wireplumber scripting and native AES67 support are interesting features for our future

---
## Outlook

- Further investigate **PipeWire stability** under sustained, high-channel-count load
- Adopt **AES67** for networked audio — motivated by poor Linux support for MADI/Dante drivers
- Replace the proprietary **REAPER** playback engine with a **custom open-source** solution
- Explore rendering methods beyond WFS and Ambisonics

Notes:

- Which brings us to the outlook
- We want to further investigate the PipeWire stability under sustained, high-channel-count load
- And also adopt AES67 for networked audio, this is also motivated partly by the poor Linux support for MADI/Dante drivers
- We also plan to replace the proprietary **REAPER** playback engine with a **custom open-source** solution
- Ideally a solution which can be attached to the output of any DAW or other audio application and records the outgoing audio and OSC data -> strict separation of artist frontend and recorder
- Important: As artists in the spatial audio production domain, work with a wide range of tools and when we want to record the output we do not want to dive into the artist sessions every time for recording/saving for integration in our scheduling system, which relies on reaper for...
- Integrate other rendering methods in our modular system

---

<h1 style="margin: 24px 0 120px 0;">Thank You for Listening!</h1>

<div style="text-align: center; margin-top: 50px; font-size: 1.2em; color: var(--fs-text-color);">
<strong>Any Questions?</strong>
</div>

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; gap: 80px;">

<div style="flex: 1; text-align: center;">
    <div style="margin-bottom: 30px;">
        <img src="assets/images/seamless-docs-qr-code.svg" alt="Demo QR Code" style="width: 280px; height: 280px;">
    </div>
    <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">
        SeamLess Documentation
    </div>
    <div style="font-size: 0.9em; color: var(--fs-text-muted-color);">
        <a>tu-studio.github.io/seamless-docs</a>
    </div>
</div>

<div style="flex: 1; text-align: center;">
    <div style="margin-bottom: 30px;">
        <img src="assets/images/seamless-docs-qr-code.svg" alt="Repository QR Code" style="width: 280px; height: 280px;">
    </div>
    <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">
        Repositories
    </div>
    <div style="font-size: 0.9em; color: var(--fs-text-muted-color);">
        <a>github.com/tu-studio</a>
    </div>
</div>

</div>

<div style="text-align: center; margin-top: 40px; font-size: 0.85em; color: var(--fs-text-muted-color);">
Fares Schulz, Maximilian Weidauer, Stefan Weinzierl, Henrik von Coler<br>
<em style="font-size: 0.75em;">Acknowledgements to Paul Schuladen and Nils Tonnät for their work on the first version!</em>
</div>

Notes:

- With this I want to thank you for listening
- And of course the open nature invites for **adoption and contribution** from you maybe?! So scan the QR codes
- And we also want to also thank Paul Schuladen and Nils Tonnät for their work on the first version!

<!-- .slide: data-state="no-header" -->
