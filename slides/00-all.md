<h1 style="font-size: 1.5em; margin-block: 16% 10%;">ADVANCES IN NEURAL MUSIC PRODUCTION</h1>
<div style="font-size: 0.8em; text-align: center;">Fares Schulz<br>
Researcher at the Audio Communication Group<br>
Lead of Computer Music and Neural Audio Systems Research Team<br>
</div>

<!-- .slide: data-state="no-header" -->
---

# Introduction

---

## AI Overview

<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px; font-size: 0.85em;">
    <div style="flex: 1; padding-right: 30px;">
        <div style="text-align: center;">
            <img src="assets/images/ai_vs_ml_vs_nn_vs_dl.svg" alt="AI vs ML vs NN vs DL" style="max-width: 80%; height: auto;">
        </div>
        <div style="margin-top: 15px; font-size: 0.8em; color: var(--fs-text-muted-color); font-style: italic; text-align: center;">
            <strong>Nested Relationship:</strong> AI ⊃ ML ⊃ NN ⊃ DL
        </div>
    </div>
    <div style="flex: 1; padding-left: 30px; border-left: 2px solid #ddd;">
        <h4>Hierarchical Relationship</h4>
        <ul>
            <li><strong>Artificial Intelligence (AI):</strong> Machines performing tasks requiring human-like intelligence</li>
            <li><strong>Machine Learning (ML):</strong> Algorithms that learn patterns from data without explicit programming</li>
            <li><strong>Neural Networks (NN):</strong> Interconnected nodes inspired by biological neurons</li>
            <li><strong>Deep Learning (DL):</strong> Uses multi-layered neural networks to model complex patterns</li>
        </ul>
    </div>
</div>

<div class="image-overlay fragment" style="position: absolute; width: 60%; padding: 60px; text-align: center;">
  <p><strong>Neural Music Production</strong> = Creative applications of<br>neural networks in the music production domain</p>
</div>

---

## Early History of Neural Networks

<div class="timeline-container" style="flex-direction: row;">
    <div style="width: 20%;">
        <div class="timeline-title">Architectures & Layers</div>
        <div class="timeline-text">Evolution of network architectures and layer innovations</div>
    </div>
    <div class="timeline" style="width: 80%; --start-year: 1957; --end-year: 2012;">
        <div class="timeline-dot" style="--year: 1957;"></div>
        <div class="timeline-item" style="--year: 1957;">
            <div class="timeline-content">
                <div class="timeline-year">1957</div>
                <div class="timeline-name">Perceptron</div>
                <div class="timeline-author">Rosenblatt, F.</div>
            </div>
        </div>
        <div class="timeline-connector" style="--year: 1957;"></div>
        <div class="timeline-dot" style="--year: 1979;"></div>
        <div class="timeline-item" style="--year: 1979;">
            <div class="timeline-content">
                <div class="timeline-year">1979</div>
                <div class="timeline-name">Convolutional Networks</div>
                <div class="timeline-author">Fukushima, K.</div>
            </div>
        </div> 
        <div class="timeline-connector" style="--year: 1979;"></div>
        <div class="timeline-dot" style="--year: 1982;"></div>
        <div class="timeline-item" style="--year: 1982;">
            <div class="timeline-content">
                <div class="timeline-year">1982</div>
                <div class="timeline-name">Recurrent Networks</div>
                <div class="timeline-author">Hopfield</div>
            </div>
        </div>
        <div class="timeline-connector" style="--year: 1982;"></div>
        <div class="timeline-dot" style="--year: 1986;"></div>
        <div class="timeline-item" style="--year: 1986;">
            <div class="timeline-content">
                <div class="timeline-year">1986</div>
                <div class="timeline-name">Backpropagation</div>
                <div class="timeline-author">Hinton et al.</div>
            </div>
        </div>
        <div class="timeline-connector" style="--year: 1986;"></div>
        <div class="timeline-dot" style="--year: 1989;"></div>
        <div class="timeline-item" style="--year: 1989;">
            <div class="timeline-content">
                <div class="timeline-year">1989</div>
                <div class="timeline-name">LSTM</div>
                <div class="timeline-author">Hochreiter & Schmidhuber</div>
            </div>
        </div>
        <div class="timeline-connector" style="--year: 1989;"></div>
        <div class="timeline-dot" style="--year: 2006;"></div>
        <div class="timeline-item" style="--year: 2006;">
            <div class="timeline-content">
                <div class="timeline-year">2006</div>
                <div class="timeline-name">Deep Belief Networks</div>
                <div class="timeline-author">Hinton, G. et al.</div>
            </div>
        </div>
        <div class="timeline-connector" style="--year: 2006;"></div>
        <div class="timeline-dot positioned" style="--year: 2012;"></div>
        <div class="timeline-item" style="--year: 2012;">
            <div class="timeline-content">
                <div class="timeline-year">2012</div>
                <div class="timeline-name">AlexNet</div>
                <div class="timeline-author">Krizhevsky et al.</div>
            </div>
        </div>
        <div class="timeline-connector" style="--year: 2012;"></div>
    </div>
</div>


<div class="fragment appear-vanish" data-fragment-index="0" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/perceptron.svg" alt="Deep Learning Era Timeline" style="max-width: 50%; height: auto; margin-top: 20px;">
</div>

<div class="fragment appear-vanish" data-fragment-index="1" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/feedforward_network.png" alt="Deep Learning Era Timeline" style="width: 400px; height: auto; margin-top: 20px;">
</div>

<div class="reference fragment appear-vanish" data-fragment-index="1" style="margin-top: 10px; text-align: center;">
    https://www.cudocompute.com/topics/neural-networks/introduction-to-recurrent-neural-networks-rnns
</div>


<div class="fragment appear-vanish" data-fragment-index="2" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/recurrent_network.png" alt="Deep Learning Era Timeline" style="width: 400px; height: auto; margin-top: 20px;">
</div>

<div class="reference fragment appear-vanish" data-fragment-index="2" style="margin-top: 10px; text-align: center;">
    https://www.cudocompute.com/topics/neural-networks/introduction-to-recurrent-neural-networks-rnns
</div>


<div class="fragment appear-vanish" data-fragment-index="3" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/deep_neural_networks.png" alt="Deep Learning Era Timeline" style="width: 700px; height: auto; margin-top: 20px;">
</div>

<div class="reference fragment appear-vanish" data-fragment-index="3" style="margin-top: 10px; text-align: center;">
    https://www.geeksforgeeks.org/artificial-intelligence/artificial-neural-networks-and-its-applications/
</div>

---

## Early History of Neural Music Production

<div class="timeline-container" style="flex-direction: column; gap: 10px;">
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px;">
        <div style="width: 20%;">
            <div class="timeline-title">Key Milestones</div>
            <div class="timeline-text">Significant developments in neural music production</div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; width: 80%; gap: 20px;">
            <div class="timeline timeline-secondary" style="width: 98%; --start-year: 1953; --end-year: 2012;">
                <div class="timeline-dot" style="--year: 1957;"></div>
                <div class="timeline-item" style="--year: 1957;">
                    <div class="timeline-content">
                        <div class="timeline-year">1957</div>
                        <div class="timeline-name">Perceptron</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1957;"></div>
                <div class="timeline-dot" style="--year: 1979;"></div>
                <div class="timeline-item" style="--year: 1979;">
                    <div class="timeline-content">
                        <div class="timeline-year">1979</div>
                        <div class="timeline-name">CNN</div>
                    </div>
                </div> 
                <div class="timeline-connector" style="--year: 1979;"></div>
                <div class="timeline-dot" style="--year: 1982;"></div>
                <div class="timeline-item" style="--year: 1982;">
                    <div class="timeline-content">
                        <div class="timeline-year">1982</div>
                        <div class="timeline-name">RNN</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1982;"></div>
                <div class="timeline-dot" style="--year: 1986;"></div>
                <div class="timeline-item" style="--year: 1986;">
                    <div class="timeline-content">
                        <div class="timeline-year">1986</div>
                        <div class="timeline-name">Backpropagation</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1986;"></div>
                <div class="timeline-dot" style="--year: 1989;"></div>
                <div class="timeline-item" style="--year: 1989;">
                    <div class="timeline-content">
                        <div class="timeline-year">1989</div>
                        <div class="timeline-name">LSTM</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1989;"></div>
                <div class="timeline-dot" style="--year: 2006;"></div>
                <div class="timeline-item" style="--year: 2006;">
                    <div class="timeline-content">
                        <div class="timeline-year">2006</div>
                        <div class="timeline-name">Deep Belief Networks</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 2006;"></div>
                <div class="timeline-dot positioned" style="--year: 2012;"></div>
                <div class="timeline-item" style="--year: 2012;">
                    <div class="timeline-content">
                        <div class="timeline-year">2012</div>
                        <div class="timeline-name">AlexNet</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 2012;"></div>
            </div>
            <div class="timeline timeline-purple" style="width: 98%; --start-year: 1953; --end-year: 2012;">
                <div class="timeline-dot" style="--year: 1953;"></div>
                <div class="timeline-item" style="--year: 1953;">
                    <div class="timeline-content">
                        <div class="timeline-year">1953</div>
                        <div class="timeline-name">Stochastic Scores</div>
                        <div class="timeline-author">Xennakis, I.</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1953;"></div>
                <div class="timeline-dot" style="--year: 1960;"></div>
                <div class="timeline-item" style="--year: 1960;">
                    <div class="timeline-content">
                        <div class="timeline-year">1960</div>
                        <div class="timeline-name">LMS Filtering</div>
                        <div class="timeline-author">Widrow & Hoff</div>
                    </div>
                </div> 
                <div class="timeline-connector" style="--year: 1960;"></div>
                <div class="timeline-dot" style="--year: 1982;"></div>
                <div class="timeline-item" style="--year: 1982;">
                    <div class="timeline-content">
                        <div class="timeline-year">1982</div>
                        <div class="timeline-name">Recurrent Networks</div>
                        <div class="timeline-author">Hopfield</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1982;"></div>
                <div class="timeline-dot" style="--year: 1986;"></div>
                <div class="timeline-item" style="--year: 1986;">
                    <div class="timeline-content">
                        <div class="timeline-year">1986</div>
                        <div class="timeline-name">Backpropagation</div>
                        <div class="timeline-author">Hinton et al.</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1986;"></div>
                <div class="timeline-dot" style="--year: 1989;"></div>
                <div class="timeline-item" style="--year: 1989;">
                    <div class="timeline-content">
                        <div class="timeline-year">1989</div>
                        <div class="timeline-name">LSTM</div>
                        <div class="timeline-author">Hochreiter & Schmidhuber</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 1989;"></div>
                <div class="timeline-dot" style="--year: 2006;"></div>
                <div class="timeline-item" style="--year: 2006;">
                    <div class="timeline-content">
                        <div class="timeline-year">2006</div>
                        <div class="timeline-name">Deep Belief Networks</div>
                        <div class="timeline-author">Hinton, G. et al.</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 2006;"></div>
                <div class="timeline-dot positioned" style="--year: 2012;"></div>
                <div class="timeline-item" style="--year: 2012;">
                    <div class="timeline-content">
                        <div class="timeline-year">2012</div>
                        <div class="timeline-name">AlexNet</div>
                        <div class="timeline-author">Krizhevsky et al.</div>
                    </div>
                </div>
                <div class="timeline-connector" style="--year: 2012;"></div>
            </div>
        </div>
    </div>
</div>


<div class="fragment appear-vanish" data-fragment-index="0" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/perceptron.svg" alt="Deep Learning Era Timeline" style="max-width: 50%; height: auto; margin-top: 20px;">
</div>

<div class="fragment appear-vanish" data-fragment-index="1" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/feedforward_network.png" alt="Deep Learning Era Timeline" style="width: 400px; height: auto; margin-top: 20px;">
</div>

<div class="reference fragment appear-vanish" data-fragment-index="1" style="margin-top: 10px; text-align: center;">
    https://www.cudocompute.com/topics/neural-networks/introduction-to-recurrent-neural-networks-rnns
</div>


<div class="fragment appear-vanish" data-fragment-index="2" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/recurrent_network.png" alt="Deep Learning Era Timeline" style="width: 400px; height: auto; margin-top: 20px;">
</div>

<div class="reference fragment appear-vanish" data-fragment-index="2" style="margin-top: 10px; text-align: center;">
    https://www.cudocompute.com/topics/neural-networks/introduction-to-recurrent-neural-networks-rnns
</div>


<div class="fragment appear-vanish" data-fragment-index="3" style="text-align: center; margin-top: 60px;">
    <img src="assets/images/deep_neural_networks.png" alt="Deep Learning Era Timeline" style="width: 700px; height: auto; margin-top: 20px;">
</div>

<div class="reference fragment appear-vanish" data-fragment-index="3" style="margin-top: 10px; text-align: center;">
    https://www.geeksforgeeks.org/artificial-intelligence/artificial-neural-networks-and-its-applications/
</div>

---

## Foundations of Deep Learning

---

## Introduction

<ul>
<li>Deep learning enables new possibilities for musical sample generation, with models like GANs and VAEs showing promise in generating raw audio waveforms [1]</li>
<li>However, most approaches often require specific input representations (e.g. high dimensionality) [2, 3], limiting their flexibility</li>
</ul>
<div class="highlight" style="text-align: center; padding: 20px;">
How can musicians find the perfect samples in an effective and creative way?
</div>

<ul>
<li>Considering the intricate relationship between pitch and timbre</li>
</ul>

<div class="highlight" style="text-align: center; padding: 20px;">
How can we generate samples that can be played expressively throughout different pitches?
</div>

<div class="reference">
[1] S. Ji, J. Luo, and X. Yang, "A comprehensive survey on deep music generation: Multi-level representations, algorithms, evaluations, and future directions," <em>arXiv preprint arXiv:2011.06801</em>, 2020.<br>
[2] J. Engel et al., "Neural audio synthesis of musical notes with wavenet autoencoders," in <em>Proc. Int. Conf. Mach. Learn.</em>, 2017.<br>
[3] J. Engel et al., "Gansynth: Adversarial neural audio synthesis," <em>arXiv preprint arXiv:1902.08710</em>, 2019.<br>
</div>

---
<!-- 
## Relevance


- While latent space interpolation is possible [8], high dimensionality limits practical interactivity
- A low-dimensional, pitch-invariant timbre space is needed for intuitive sound exploration and synthesis

<div class="reference">

[8] G. Narita, J. Shimizu, and T. Akama, "GANStrument: Adversarial instrument sound synthesis with pitch-invariant instance conditioning," in <em>Proc. IEEE Int. Conf. Acoust. Speech Signal Process. (ICASSP)</em>, 2023, pp. 1-5.<br>
</div> -->

## pGESAM Framework

**Building on Generative Sample Map (GESAM) [4], we propose the pitch-conditioned Generative Sample Map (pGESAM)**

<div style="text-align: center;">
    <img src="assets/images/user-interface.png" alt="Latent Space Visualization" style="max-width: 500px; height: auto;">
    <div style="margin-top: 20px; font-size: 0.82em; color: var(--fs-text-muted-color); font-style: italic;">
        <strong>pGESAM User Interface</strong><br>
    </div>
</div>

</div>

<div class="reference" style="margin-top: 10px">
[4] C. Limberg and Z. Zhang, "Mapping the audio landscape for innovative music sample generation," in <em>Proceedings of the 2024 International Conference on Multimedia Retrieval</em>, 2024.
</div>

---

## Roadmap

<div style="font-size: 0.85em;">
<ol>
<li><strong>Approach</strong>
<ul>
<li>Embedding Extraction</li>
<li>Stage 1: VAE Training</li>
<li>Stage 2: Pitch/Timbre-Conditioned Transformer Training</li>
</ul>
</li>
<li><strong>Evaluation</strong>
<ul>
<li>Dataset</li>
<li>Reconstruction Quality</li>
<li>Pitch Accuracy</li>
<li>Pitch-Timbre Disentanglement</li>
<li>Ablation Study</li>
</ul>
</li>
<li><strong>Conclusion</strong></li>
<li><strong>Interactive Demo</strong></li>
</ol>
</div>

Note: In the following sections, we will delve deeper into the pGESAM framework and its components, including the VAE training process and the pitch/timbre-conditioned Transformer training.
Then we will present our experimental results and discuss the implications of our findings.

---

# Approach

---

## Main training paradigm

<div style="text-align: center;">
    <img src="assets/images/main_diagram.svg" alt="Main training paradigm of our approach." style="max-width: 100%; height: auto; margin-top: 4%">
</div>

Note: Warum brauchen wir die Embeddings, warum VAE, warum den Transformer? Am Anfang einmal erläutern?

---

## Embedding Extraction

<div style="text-align: center;">
    <img src="assets/images/main_diagram_encodec_highlight.svg" alt="Main training paradigm of our approach." style="max-width: 100%; height: auto; margin-top: 4%">
</div>

---

## Embedding Extraction

<div style="position: relative; text-align: center;">
    <img src="assets/images/main_diagram_encodec_highlight.svg" alt="Main training paradigm of our approach." style="max-width: 100%; height: auto;  margin-top: 4%">
    <div class="image-overlay" style="width: 600px;">
        <ul style="text-align: left; font-size: 0.8em;">
            <li>Use of EnCodec [5] as a feature extractor</li>
            <li>Normally operates as VQ-VAE, but we omit the quantization step to obtain continuous embeddings</li>
            <li>Compression ratio ~ 2.5:1</li>
        </ul>
    </div>
</div>

<div class="reference">
[5] A. Défossez et al., "High fidelity neural audio compression," <em>arXiv preprint arXiv:2210.13438</em>, 2022.
</div>

---

## Stage 1: VAE Training

<div style="text-align: center;">
    <img src="assets/images/main_diagram_vae_highlight.svg" alt="Main training paradigm of our approach." style="max-width: 100%; height: auto;  margin-top: 4%">
</div>

---

## VAE Architecture

<div style="text-align: center;">
    <img src="assets/images/vae_only_diagram.svg" alt="VAE Training Architecture" style="max-width: 45%; height: auto;">
</div>

<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 10px; font-size: 0.75em;">
    <div style="flex: 1; padding-right: 20px;">
        <h4 style="margin: 0.8em;">Encoding</h4>
        <ul>
            <li><strong>Dimension reduction:</strong> Conv layers + linear projection</li>
            <li><strong>Dual Heads:</strong> Pitch classification + timbre regression</li>
        </ul>
    </div>
    <div style="flex: 1; padding-left: 20px; padding-right: 20px; border-left: 2px solid #ddd;">
        <h4 style="margin: 0.8em;">Latent structuring</h4>
        <ul>
            <li><strong>Instrument Classifier:</strong> Identify instrument id from latent samples $\tilde{z}$</li>
            <li><strong>Family Classifier:</strong> Identify instrument family from latent samples $\tilde{z}$</li>
        </ul>
    </div>
    <div style="flex: 1; padding-left: 20px; border-left: 2px solid #ddd;">
        <h4 style="margin: 0.8em;">Decoding</h4>
        <ul>
            <li><strong>Input:</strong> Concatenate detached pitch $\hat{u}$ + timbre latent samples $\tilde{z}$</li>
            <li><strong>Dimension expansion:</strong> Linear + transposed conv layers</li>
        </ul>
    </div>
</div>

---

## Loss Function

<div style="font-size: 0.8em;">

**Seven-component loss function for effective pitch-timbre disentanglement:**

<div>
\[
\begin{align}
 \mathcal{L}_{\text{VAE}} &= \beta_{\text{rec}} \mathcal{L}_{\text{rec}} + \beta_{\text{KL}} \mathcal{L}_{\text{KL}} + \beta_{\text{reg}} \mathcal{L}_{\text{reg}} + \beta_{\text{nei}} \gamma^{\alpha_{\text{nei}}} \mathcal{L}_{\text{nei}} + \beta_{\text{pitch}} \mathcal{L}_{\text{pitch}} \nonumber\\
&+ \beta_{\text{inst}} \gamma^{\alpha_{\text{inst}}} \mathcal{L}_{\text{inst}} + \beta_{\text{fam}} \left(1 - \gamma\right)^{\alpha_{\text{fam}}}\mathcal{L}_{\text{fam}}\nonumber
\end{align}
\]
</div>

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
<div style="flex: 1; padding-right: 20px;">

**Core VAE Components:**

- $\mathcal{L}_{\text{rec}}$: MSE reconstruction loss
- $\mathcal{L}_{\text{KL}}$: KL divergence regularization
- $\mathcal{L}_{\text{reg}}$: Unit circle constraint

</div>
<div style="flex: 1; padding-left: 20px;">

**Disentanglement & Structure:**

- $\mathcal{L}_{\text{nei}}$: Neighbor loss (attractive/repulsive)
- $\mathcal{L}_{\text{pitch}}$: Pitch classification<br>
(independent of timbre)
- $\mathcal{L}_{\text{inst}}$: Instrument classification
- $\mathcal{L}_{\text{fam}}$: Family classification

</div>
</div>

**Curriculum Learning Strategy:** $\gamma = \frac{i_{\text{epoch}}}{N_{\text{epoch}}}$ for dynamic loss component weighting

</div>

---

<!-- ## Neighbor Loss Details

<div style="font-size: 0.85em;">

**Promotes structured clustering through attractive and repulsive forces:**

<div>
$$\mathcal{L}_{\text{nei}} = \mathcal{L}_{\text{attractive}} + \mathcal{L}_{\text{repulsive}}$$
</div>

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
<div style="flex: 1; padding-right: 20px;">

**Attractive Component:**
<div>
$$\mathcal{L}_{\text{attractive}} = \frac{\sum_{i,j} S_{ij} \cdot d_{ij}^2}{\sum_{i,j} S_{ij} + \epsilon}$$
</div>

- Minimizes distances between same instrument samples
- $S_{ij} = \mathbf{1}_{y_i = y_j}$ (same instrument indicator)

</div>
<div style="flex: 1; padding-left: 20px;">

**Repulsive Component:**
<div>
$$\mathcal{L}_{\text{repulsive}} = \frac{\sum_{i,j} (1-S_{ij}) \cdot \max(0, M - d_{ij})^2}{\sum_{i,j} (1-S_{ij}) + \epsilon}$$
</div>

- Enforces margin $M = 0.25$ between different classes
- $d_{ij} = \|\tilde{\mu}_i - \tilde{\mu}_j\|_2$ (Euclidean distance)

</div>
</div>

**Result:** Compact, well-separated instrument clusters in 2D latent space

</div>!-->

## Stage 2: Transformer Training

<div style="text-align: center;">
    <img src="assets/images/main_diagram_transformer_highlight.svg" alt="Main training paradigm of our approach." style="max-width: 100%; height: auto;  margin-top: 4%">
</div>

---

## Transformer Architecture

<div style="text-align: center;">
    <img src="assets/images/transformer_only_diagram.svg" alt="Transformer Training Architecture" style="max-width: 45%; height: auto;">
</div>

<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 20px; font-size: 0.75em;">
    <div style="flex: 1; padding-right: 20px;">
        <h4 style="margin: 0.8em;">Encoder</h4>
        <ul>
            <li><strong>Input:</strong> Timbre latent samples $\tilde{z}$ + ground truth pitch $u$</li>
            <li><strong>Processing:</strong> Multi-head self-attention + feed-forward networks</li>
            <li><strong>Output:</strong> Keys and values for decoder cross-attention</li>
        </ul>
    </div>
    <div style="flex: 1; padding-left: 20px; padding-right: 20px; border-left: 2px solid #ddd;">
        <h4 style="margin: 0.8em;">Decoder</h4>
        <ul>
            <li><strong>Input:</strong> BOS token + Masked audio embeddings</li>
            <li><strong>Processing:</strong> Masked multi-head self-attention + cross-attention to encoder</li>
            <li><strong>Training:</strong> Autoregressive prediction</li>
        </ul>
    </div>
    <div style="flex: 1; padding-left: 20px; border-left: 2px solid #ddd;">
        <h4 style="margin: 0.8em;">Generation</h4>
        <ul>
            <li><strong>Input Encoder:</strong> 2D latent space point + pitch class</li>
            <li><strong>Input Decoder:</strong> BOS token + generated tokens</li>
            <li><strong>Process:</strong> Iterative token-by-token generation</li>
        </ul>
    </div>
</div>

---

# Evaluation

---

## Dataset

<div style="font-size: 0.85em;">

**NSynth Dataset¹:** Audio dataset containing 305,979 musical notes.

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
<div style="flex: 1; padding-right: 20px;">

**Dataset Composition:**

- All 11 different instrument families
- **Restricted Pitch Range:** MIDI notes 48-72 (C2 to C4)
- **Restricted Velocity:** Fixed at 100
- **Restricted Number of Instruments:** 10 per family (110 total)
- Original splits: *Training:* 94.52% / *Validation:* 4.14% / *Test:* 1.34%

</div>
<div style="flex: 1; padding-left: 20px; border-left: 2px solid #ddd;">

**Audio Specifications:**

- **Format:** Mono audio files
- **Sample Rate:** 16 kHz → upsampled to 24 kHz
- **Duration:** 4 seconds each
- **Encoding:** EnCodec² 24kHz without quantization

</div>
</div>

<div class="reference">
¹NSynth Dataset: <a href="https://magenta.tensorflow.org/datasets/nsynth">https://magenta.tensorflow.org/datasets/nsynth</a><br>
²EnCodec Model: <a href="https://huggingface.co/facebook/encodec_24khz">https://huggingface.co/facebook/encodec_24khz</a>
</div>

---

## Reconstruction Quality

<div style="font-size: 0.85em;">

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
<div style="flex: 1; padding-right: 30px;">

**Mean Square Error Results:**

| Dataset | VAE | Transformer |
|---------|-----|-------------|
| **Training** | 1.14e-3 | 4.90e-5 |
| **Test** | 1.02e-3 | 1.49e-3 |

</div>

<div style="flex: 1; padding-left: 30px; border-left: 2px solid #ddd;">

**Key Observations:**

- Transformer achieves higher training accuracy

- **Overfitting detected:** Higher test loss vs. VAE

</div>
</div>

**Qualitative Analysis:**

<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; max-width: 95%; margin: 0 auto;">
    <div style="flex: 1; text-align: center;">
        <img src="assets/images/evaluation_reconstruction/img_gt.png" alt="Original Embedding" style="width: 100%; height: auto;">
        <div style="margin-top: 10px; font-size: 0.75em; color: var(--fs-text-muted-color); font-style: italic;">
            <strong>Original Embedding</strong><br>
            Ground truth shows rich structural detail and complexity
        </div>
    </div>
    <div style="flex: 1; text-align: center;">
        <img src="assets/images/evaluation_reconstruction/img_vae.png" alt="VAE Generated" style="width: 100%; height: auto;">
        <div style="margin-top: 10px; font-size: 0.75em; color: var(--fs-text-muted-color); font-style: italic;">
            <strong>VAE Generated</strong><br>
            Flatter representation with loss of fine-grained structure
        </div>
    </div>
    <div style="flex: 1; text-align: center;">
        <img src="assets/images/evaluation_reconstruction/img_transformer.png" alt="Transformer Generated" style="width: 100%; height: auto;">
        <div style="margin-top: 10px; font-size: 0.75em; color: var(--fs-text-muted-color); font-style: italic;">
            <strong>Transformer Generated</strong><br>
            Better preservation of structural complexity
        </div>
    </div>
</div>

</div>
</div>

---

## Pitch Accuracy

<div style="font-size: 0.85em;">

**Evaluation Method:** Assess pitch accuracy using the VAE's trained pitch classifier on reconstructed audio embeddings

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
<div style="flex: 1; padding-right: 30px;">

**Pitch Classification Accuracy (0/1):**

| Dataset | Ground Truth | VAE | Transformer |
|---------|--------------|-----|-------------|
| **Training** | 1.00 | 0.112 | 1.00 |
| **Test** | 0.755 | 0.0691 | 0.996 |

</div>
<div style="flex: 1; padding-left: 30px; border-left: 2px solid #ddd;">

**Key Observations:**

- Ground truth validation confirms classifier reliability
- Transformer achieves near-perfect pitch accuracy
- **VAE struggles:** Only ~11% correct pitch generation in train set

</div>
</div>

---

## Pitch-Timbre Disentanglement

<div style="display: flex; justify-content: space-between; margin-top: 10px;">
<div style="flex: 1; padding-right: 40px;">

<div style="text-align: center;">
    <img src="assets/images/timid-orfe/all_pitches_with_colorbar.svg" alt="Latent Space Visualization" style="max-width: 95%; height: auto;">
    <div style="margin-top: 15px; font-size: 0.85em; color: var(--fs-text-muted-color); font-style: italic; margin-bottom: 18px;">
    <strong>2D Latent Space Visualization</strong><br>
    Predicted timbre latent mean vectors $\tilde{\mu}$
</div>
</div>

</div>
<div style="flex: 1; padding-left: 40px; font-size: 0.85em;">

**Key Observations:**

- **Macro Structure:** Clear instrument family clusters
- **Micro Structure:** Individual instruments form distinct clusters
- **Pitch Invariance:** Same instrument, different pitches cluster together
- **Even Distribution:** Clusters spread uniformly in unit circle

<div class="highlight" style="text-align: center; padding: 30px; margin-top: 60px;">
<strong style="font-weight: 800">Interpretation:</strong> Successful pitch-timbre disentanglement in intuitive latent space
</div>

</div>

</div>

</div>

---

<!-- ## Pitch-Timbre Disentanglement

<div style="font-size: 0.85em;">

**Variance Analysis:** Quantitative evaluation of pitch-timbre separation using component-wise variance

<div style="display: flex; justify-content: space-between; margin-top: 20px;">
<div style="flex: 1; padding-right: 30px;">

**Results Table:**

| Dataset | $V_{\text{inst}}$ [x, y] | $V_{\text{pitch}}$ [x, y] |
|---------|---------------------------|---------------------------|
| **Training** | [1.13e-7, 1.00e-7] | [0.179, 0.179] |
| **Test** | [2.40e-2, 2.83e-2] | [0.136, 0.123] |

</div>
<div style="flex: 1; padding-left: 30px; border-left: 2px solid #ddd;">

**Key Observations:**

- **Training:** Instrument clusters extremely tight (≈10⁻⁷ variance)
- **Theoretical Alignment:** $V_{\text{pitch}}$ ≈ 0.25 matches unit circle expectations
- **Generalization:** Model maintains separation on unseen test data

</div>
</div>

<div class="highlight" style="text-align: center; font-size: 0.85em; padding: 30px; margin-top: 100px;">
<strong>Mathematical Expectation:</strong> $V_{\text{inst}} \ll V_{\text{pitch}}$ for effective disentanglement ✓
</div>

</div> -->

## Ablation Study

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-top: 25px;">

<div style="text-align: center;">
    <img src="assets/images/timid-orfe/all_pitches_small.png" alt="All losses" style="width: 90%; height: auto;">
    <div style="margin-top: 8px; font-size: 0.75em; font-weight: bold;">All losses</div>
    <div style="font-size: 0.7em; color: var(--fs-text-muted-color); margin-top: 4px;">
        Clear instrument family clusters<br>
        Even distribution in latent space
    </div>
</div>

<div style="text-align: center;">
    <img src="assets/images/mucky-hard/all_pitches_small.png" alt="No Neighbor Loss" style="width: 90%; height: auto;">
    <div style="margin-top: 8px; font-size: 0.75em; font-weight: bold;">No Neighbor Loss</div>
    <div style="font-size: 0.7em; color: var(--fs-text-muted-color); margin-top: 4px;">
        Dense clustering around origin<br>
        Poor utilization of latent space
    </div>
</div>

<div style="text-align: center;">
    <img src="assets/images/fetid-yews/all_pitches_small.png" alt="No Family Classifier" style="width: 90%; height: auto;">
    <div style="margin-top: 8px; font-size: 0.75em; font-weight: bold;">No Family Classifier</div>
    <div style="font-size: 0.7em; color: var(--fs-text-muted-color); margin-top: 4px;">
        No macro-clusters of instrument families<br>
        Scattered family organization
    </div>
</div>

</div>

<div style="text-align: center; margin-top: 40px;">
    <img src="assets/images/timid-orfe/legend_padded.png" alt="Legend" style="max-width: 60%; height: auto;">
</div>

</div>

---

# Conclusion

---

## Conclusion

<div style="font-size: 0.9em;">

**pGESAM:** Interactive framework for pitch-controlled instrument synthesis from 2D timbre latent space

</div>

**Key Contributions:**

- Framework for successful generation of 4 second one-shot samples from 3 data-points (2D timbre, 1D pitch)
- Effective pitch-timbre disentanglement via semi-supervised learning
- Extensive evaluation on NSynth dataset
- Validated 7-component loss function design with use-case specific neighbor loss

---

# Interactive Demo

---

<h1 style="margin: 24px 0 120px 0;">Thank You for Listening!</h1>

<div style="text-align: center; margin-top: 50px; font-size: 1.2em; color: var(--fs-text-color);">
<strong>Any Questions?</strong>
</div>

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 60px; gap: 80px;">

<div style="flex: 1; text-align: center;">
    <div style="margin-bottom: 30px;">
        <img src="assets/images/qr-code_demo.svg" alt="Demo QR Code" style="width: 280px; height: 280px;">
    </div>
    <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">
        Interactive Demo
    </div>
    <div style="font-size: 0.9em; color: var(--fs-text-muted-color);">
        <a>pgesam.faresschulz.com</a>
    </div>
</div>

<div style="flex: 1; text-align: center;">
    <div style="margin-bottom: 30px;">
        <img src="assets/images/qr-code_repo.svg" alt="Repository QR Code" style="width: 280px; height: 280px;">
    </div>
    <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">
        Repository
    </div>
    <div style="font-size: 0.9em; color: var(--fs-text-muted-color);">
        <a>github.com/faressc/pgesam</a>
    </div>
</div>

</div>

<div style="text-align: center; margin-top: 40px; font-size: 0.85em; color: var(--fs-text-muted-color);">
Christian Limberg*, Fares Schulz*, Zhe Zhang, Stefan Weinziel<br>
<em>(*equal contribution)</em>
</div>
