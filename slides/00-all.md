<h1 style="font-size: 1.8em; margin-block: 10% 10%; text-shadow: 0 0 20px var(--fs-background-color), 0 0 30px var(--fs-background-color)">SeamLess:<br> DISTRIBUTED SPATIAL AUDIO RENDERING
ON THE LINUX AUDIO STACK</h1>
<div style="display: flex; text-align: center; justify-content: space-between; align-items: flex-start; text-shadow: 0 0 20px var(--fs-background-color), 0 0 30px var(--fs-background-color)">
    <div style="font-size: 0.8em; text-align: center; color: var(--fs-text-muted-color);">
        <strong>Fares Schulz</strong><br>
        <div style="font-size: 0.8em; margin-bottom: 10px;">
            Researcher at the Audio Communication Group<br>
            Lead of Computer Music and Neural Audio Systems Research Team<br>
            Technische Universität Berlin
        </div>
    </div>
    <div style="font-size: 0.8em; text-align: center; color: var(--fs-text-muted-color);">
        <strong>Maximilian Weidauer</strong><br>
        <div style="font-size: 0.8em; margin-bottom: 10px;">
            Researcher at the Audio Communication Group<br>
            Technische Universität Berlin
        </div>
    </div>
</div>
Notes:

- Hello everyone

<!-- .slide: data-state="no-header no-footer", data-background-image="assets/images/SHF_eb00125547_Ethnologisches_Museum.jpg" -->

---
# Introduction

<!-- .slide: data-state="no-header" --->

---
## Spatial Sound Reproduction

- Beyond two-channel and multichannel stereo
- **Immersive, three-dimensional sound** over loudspeaker arrays
- Two widely used, **non-proprietary** methods:
    - **Ambisonics**
    - **Wave Field Synthesis (WFS)**
- Deployed in concert halls, museums, theatres and research studios

<div class="reference" style="margin-top: 30px;">
Schultz, Hahn &amp; Spors (2025), <em>Wellenfeldsynthese</em>, in: Handbuch der Audiotechnik, Springer.
</div>

---
## Two Complementary Methods

<div style="display: flex; gap: 40px; margin-top: 30px;">
    <div class="tile color-0" style="flex: 1;">
        <h3>Ambisonics</h3>
        <div class="tile-description" style="height: auto; font-size: 0.6em;">
            <ul>
                <li>Domain-independent spatial audio format</li>
                <li>Sound field encoded using <strong>spherical harmonics</strong> / <strong>sphere around the listener</strong></li>
                <li>Decoded to <strong>arbitrary</strong> loudspeaker layouts</li>
                <li>Strong for <strong>diffuse and elevated</strong> 3D fields</li>
            </ul>
            <img src="assets/images/spherical_harmonics.png" alt="Spherical harmonics" style="width: 100%; object-fit: contain; border-radius: 8px; margin-top: 12px;">
        </div>
    </div>
    <div class="tile color-1" style="flex: 1;">
        <h3>Wave Field Synthesis</h3>
        <div class="tile-description" style="height: auto; font-size: 0.6em;">
            <ul>
                <li>Object-based: synthesizes <strong>wave fronts</strong> from many speakers</li>
                <li>Perceptually accurate <strong>localization</strong></li>
                <li>Enables <strong>focused sources</strong> inside the array</li>
                <li>Predominantly <strong>2D / horizontal</strong></li>
            </ul>
            <img src="assets/images/huygens_fresnel_principle.webp" alt="Huygens-Fresnel principle" style="width: 100%; object-fit: contain; border-radius: 8px; margin-top: 12px; background: #fff; padding: 8px;">
        </div>
    </div>
</div>

<div class="highlight image-overlay" style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 70%;">Combining both leverages their complementary strengths in a single system</div>

---
## The Challenge of Scale

- Both methods benefit from large channel counts (especially WFS)
- Computational + organizational demands **exceed a single machine**
- Our venues at TU Berlin and the Humboldt Forum:

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

<div class="highlight" style="margin-top: 36px;">Driving hundreds of speakers calls for <strong>distributed processing across multiple hosts</strong></div>

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

Notes:

- Two groups: integrated renderers (Spat, Holoplot, SSR, TASCAR) and DAW plug-ins (IEM, SPARTA).
- Existing tools each miss at least one key requirement: openness, Linux-first workflow, WFS, or distribution.
- SeamLess targets exactly that missing combination: open-source + Linux + WFS + distributed rendering.

---
## Limitations of Existing Systems

- Limited portability of pieces between venues
- **Channel count limited** by soundcard outputs and processing power of one machine 
- **Proprietary** hardware and software 
- **Costly** — not for smaller, budget-conscious setups 
- No **deployment automation** or **show scheduling** for permanent installations

---
# SeamLess
<!-- .slide: data-state="no-header" data-background-image="assets/images/hufo_image.jpg" data-background-opacity="0.55" -->
---

## SeamLess - Overview
- **Modular** software stack
- Highly **Configurable** compononents
- **Distributed** rendering
- **Complexity** is **hidden** from users 
    (only mono audio streams and control data using OSC)
- Management through common Linux tools (systemd, JACK/PipeWire, Ansible, meson)
- Pieces are (reasonably) **portable**
  - Shared, normalized coordinate system between all venues

Notes:
- Modular software stack -> components can be chosen based on setup, and also replaced -> also flexible in choice of rendering software
- ll components also very configurable, mostly using yaml files
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
- route audio to rendering machines, further processed, all linux runing JACK or PipeWire, 
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
- tWonders can be distributed accross different machines
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
- ython with frontend with flask, typescript/react
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

- Let me tie this back together.

---
## What We Presented

- **SeamLess** — a modular, open-source, real-time spatial audio rendering platform
- Built entirely on the Linux audio stack
- **Distributes** rendering across multiple commodity Linux servers
- **systemd** services + **Ansible** deployment + strict **version control** for reliability
- **Separates** the rendering backend from user interaction
    - artists work through familiar **DAW plug-ins** and plain **OSC**
- Scales to large arrays — **up to 832 channels** in our largest install
- Running **continuously since May 2025** at the Berlin Humboldt Forum

---
## PipeWire — Spatial Audio Backend for the Future?

- **JACK** has reliably carried our demanding, high-channel-count spatial audio in production for many years
- **PipeWire** recently lifted the **64-channel hardware limit** -> makes it a viable solution going forward
- Especially **WirePlumber** scripting + native **AES67** interesting

<div class="highlight" style="margin-top: 36px;">Open, Linux-based rendering has long been viable for real-world, large-scale installations</div>

---
## Outlook

- Replace the proprietary **REAPER** playback engine with a **custom open-source** solution
- Further investigate **PipeWire stability** under sustained, high-channel-count load
- Explore rendering methods beyond WFS and Ambisonics
- Adopt **AES67** for networked audio — motivated by poor Linux support for MADI/Dante drivers

---
## Making Spatial Audio Accessible

- Fully **open-source**, **Linux-first**, built on **standard hardware**
- Viable for **large-scale venues** *and* **smaller, budget-conscious setups**
- The open nature invites **adoption and contribution** from other institutions

---
## Thank You for Listening!

<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin-top: 10px;">
    <div class="highlight" style="margin: 20px; padding: 20px;">Do you have questions?</div>
    <img src="assets/images/seamless-docs-qr-code.svg" alt="SeamLess documentation QR code" style="width: 320px; height: 320px; background: #fff; padding: 12px; border-radius: 12px;">
    <div style="font-size: 0.7em;"><strong>tu-studio.github.io/seamless-docs</strong></div>
    <div style="display: flex; align-items: center; justify-content: center; gap: 48px; margin-top: 16px;">
        <img src="assets/images/TULogo.png" alt="Technische Universität Berlin" style="height: 70px;">
        <img src="assets/images/AKTLogo.png" alt="Audio Communication Group" style="height: 70px;">
    </div>
</div>

<!-- .slide: data-state="no-header" -->
