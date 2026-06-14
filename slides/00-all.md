<h1 style="font-size: 1.8em; margin-block: 10% 10%; text-shadow: 0 0 20px var(--fs-background-color), 0 0 30px var(--fs-background-color)">SeamLess:<br> DISTRIBUTED SPATIAL AUDIO RENDERING
ON THE LINUX AUDIO STACK</h1>
<div style="display: flex; text-align: center; justify-content: space-between; align-items: flex-start; text-shadow: 0 0 20px var(--fs-background-color), 0 0 30px var(--fs-background-color)"">
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
#  Introduction

<!-- <div style="text-align: center">
<img  src=assets/images/SHF_eb00125547_Ethnologisches_Museum.jpg>
</div> -->
---
## Overview - Rendering Methods
- Ambisonics
- Wavefield Synthesis (WFS)
---
## Overview - Rendering Solutions

TODO plugins und softwares auflisten?
---
## Limitations of existing Spatial Audio Systems

- limited portability of pieces <!-- .element: class="fragment" data-fragment-index="1" -->
- Amount of speakers limited by soundcard outputs and processing power <!-- .element: class="fragment" data-fragment-index="2" -->
- Proprietary hard- and software <!-- .element: class="fragment" data-fragment-index="3" -->
- Steep costs <!-- .element: class="fragment" data-fragment-index="4" -->

---
## Rendering Methods

---
# SeamLess

---

## SeamLess - Overview

<div class="image-overlay fragment appear-vanish" data-fragment-index="0">
    <img src="assets/images/hufo_signal_flow.png" alt="pGESAM Framework" width="100%" >
</div>

- Modular Software Stack
- Rendering can be distributed
- Complexity is hidden from users 
    -> only mono audio streams and positional data using OSC
- All components configurable
- Management through basic Linux tools (systemd, JACK/PipeWire)
- Shared coordinate system for all venues

Notes:
- Rendering on backend
- Synchronization handled by audio hardware, either dante or wordclock or in the future aes67 using PTP
- route audio to rendering machines, further processed, all linux runing JACK or PipeWire, 
    - pipewire only recently possible due to removing 64 channel hardware limit



- coordinate system is normalized so that the wall farthest from the center is at a distance of 0.5 on either the x- or y-axis. This enables transfer between different locations using the SeamLess system without having to rescale all positions.





---
## OSC-Kreuz

- Central OSC Routing Hub
- Automatic conversion between different Coordinate formats
- per-source rate limiting
---
## Audio-Matrix

- Flexible Multichannel DSP 
- OSC controllable
<div class="image-overlay fragment appear-vanish" data-fragment-index="0">
    <img src="assets/images/audio_matrix.png" alt="audio matrix signal flow" height="0%" >
</div>

---
## SeamLess Plugin Suite
<img src="assets/images/SeamLessClient.png" alt="audio matrix signal flow" width="100%" >

---
## Wonder
- WFS Rendering Engine
- Can be run distributed by having knowledge about connected speakers and layout of the full system


---
## Ambisonics Decoding

---
## Playback Engine

---
## ShowControl

---
## Jack-Connection-Manager

---
# Orchestration

---
## Configs

---
## Versioned Install

---
## Deployment

---
# Conclusion
---
## Outlook
- AES67
- Standalone Playback System


