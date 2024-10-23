---
title: "Improving Deep Learning for HAR with shallow LSTMs [best paper award]"
collection: publications
permalink: /publications/2021-09-21-improving-deep-learning-with-shallow-lstms
date: 2021-09-21
venue: 'ACM International Symposium on Wearable Computers (ISWC)'
paperurl: 'https://doi.org/10.1145/3460421.3480419'
authors: '<b>Marius Bock</b>, Alexander Hoelzemann, Michael Moeller, Kristof Van Laerhoven'
bibtex: true
teaser: /previews/improving_teaser.png
arxiv: 'https://arxiv.org/abs/2108.00702'
categories: [wearable activity recognition]
code: https://github.com/mariusbock/dl-for-har
video: https://www.youtube.com/watch?v=Xx8a723FPZ0
---

{{ page.authors }}

<img class="pub_teaser" src="../images/previews/dl-arc.png" alt="Teaser Image" title="teaser" />

## Abstract

> Recent studies in Human Activity Recognition (HAR) have shown that Deep Learning methods are able to outperform classical Machine Learning algorithms. One popular Deep Learning architecture in HAR is the DeepConvLSTM. In this paper we propose to alter the DeepConvLSTM architecture to employ a 1-layered instead of a 2-layered LSTM. We validate our architecture change on 5 publicly available HAR datasets by comparing the predictive performance with and without the change employing varying hidden units within the LSTM layer(s). Results show that across all datasets, our architecture consistently improves on the original one: Recognition performance increases up to 11.7% for the F1-score, and our architecture significantly decreases the amount of learnable parameters. This improvement over DeepConvLSTM decreases training time by as much as 48%. Our results stand in contrast to the belief that one needs at least a 2-layered LSTM when dealing with sequential data. Based on our results we argue that said claim might not be applicable to sensor-based HAR.

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex

    @inproceedings{bock2021improving,
	title = {Improving Deep Learning for HAR with Shallow LSTMs},
	url = {https://doi.org/10.1145/3460421.3480419},
	booktitle = {ACM International Symposium on Wearable Computers},
	author = {Bock, Marius and Hoelzemann, Alexander and Moeller, Michael and Van Laerhoven, Kristof},
	year = {2021},
}
