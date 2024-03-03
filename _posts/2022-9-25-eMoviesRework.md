---
title: Arxiv - Reference-free Monolitic Odds Ratio Preference Optimization (ORPO)
author: jiwoo
date: 2024-03-03
categories: [NLP, Language Model Alignment]
tags: [🔥Publications, NLP, LLM, Alignment]
pin: true
math: true
mermaid: true
# image:
#   path: /
#   width: 800
#   height: 500
#   alt: 
---

Our paper, **<a class="link" style="color: var(--hyperlink-color)" href="https://openreview.net/forum?id=XNzfEFbEJB3">ORPO: Monolithic Odds Ratio Preference Optimization without Reference Model</a>** is uploaded to *Arxiv.org*! Our best model, **ORPO-Mistral (7B)** and **ORPO-Llama-2 (7B)** surpasses the state-of-the-art instruction-following large language models, including Zephyr ($\alpha$), Zephyr ($\beta$), and Llama-2-Chat (13B) in <a class="link" style="color: var(--hyperlink-color)" href="https://github.com/tatsu-lab/alpaca_eval">AlpacaEval</a> and <a class="link" style="color: var(--hyperlink-color)" href="https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge">MT-Bench</a>.


<img src="/assets/img/posts/orpo_blog.png">

&nbsp;

**`Abstract`**

While recently proposed preference alignment algorithms for language models have demonstrated promising results, supervised fine-tuning (SFT) remains imperative for achieving successful convergence in preference alignment. In this paper, we elaborate on the crucial role of SFT within the context of preference alignment, emphasizing that a minor penalty for the disfavored generation style is sufficient for preference-aligned SFT. Building on this foundation, we introduce a straightforward and innovative reference-free monolithic odds ratio preference optimization algorithm, ORPO, eliminating the necessity for an additional preference alignment phase. Empirically and theoretically, we demonstrate that the odds ratio serves as a sensible choice for contrasting favored and unfavored styles during SFT. Specifically, fine-tuning Phi-2 (2.7B), Llama-2 (7B), and Mistral (7B) with ORPO on UltraFeedback alone surpasses the performance of state-of-the-art language models with more than 7B and 13B parameters, achieving 66.2%, 81.3%, and 87.94% in AlpacaEval.


&nbsp;

**`Keywords`**

- [X] Multi-Agent Reinforcement Learning 
- [X] Sparse Reward
- [X] Reward Shaping
