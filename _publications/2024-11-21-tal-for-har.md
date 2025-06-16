---
title: "Temporal Action Localization for Inertial-based Human Activity Recognition"
collection: publications
permalink: /publications/2024-12-01-tal-for-har
date: 2024-11-21
authors: '<b>Marius Bock</b>, Michael Moeller, Kristof Van Laerhoven'
bibtex: true
venue: 'ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies'
teaser: previews/tal_for_har_teaser.png
arxiv: 'https://arxiv.org/abs/2311.15831'
paperurl: 'https://doi.org/10.1145/3699770'
code: https://github.com/mariusbock/tal_for_har
categories: [temporal action localization, inertial-based human activity recognition]
---

{{ page.authors }}

<img class="pub_teaser" src="../images/previews/tal_for_har.png" alt="Teaser Image" title="teaser" />
## Abstract

> As of today, state-of-the-art activity recognition from wearable sensors relies on algorithms being trained to classify fixed windows of data. In contrast, video-based Human Activity Recognition, known as Temporal Action Localization (TAL), has followed a segment-based prediction approach, localizing activity segments in a timeline of arbitrary length. This paper is the first to systematically demonstrate the applicability of state-of-the-art TAL models for both offline and near-online Human Activity Recognition (HAR) using raw inertial data as well as pre-extracted latent features as input. Offline prediction results show that TAL models are able to outperform popular inertial models on a multitude of HAR benchmark datasets, with improvements reaching as much as 26% in F1-score. We show that by analyzing timelines as a whole, TAL models can produce more coherent segments and achieve higher NULL-class accuracy across all datasets. We demonstrate that TAL is less suited for the immediate classification of small-sized windows of data, yet offers an interesting perspective on inertial-based HAR -- alleviating the need for fixed-size windows and enabling algorithms to recognize activities of arbitrary length. With design choices and training concepts yet to be explored, we argue that TAL architectures could be of significant value to the inertial-based HAR community.The code and data download to reproduce experiments is publicly available via https://github.com/mariusbock/tal_for_har.

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex

    @article{bock2024talforhar,
    author={Bock, Marius and Moeller, Michael and Van Laerhoven, Kristof},
    title={Temporal Action Localization for Inertial-based Human Activity Recognition},
    year = {2024},
    volume = {8},
    number = {4},
    journal = {Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (IMWUT)},
    numpages = {19},
    articleno = {174},
    doi = {10.1145/3699770},
    url={https://dl.acm.org/doi/10.1145/3699770}
}
