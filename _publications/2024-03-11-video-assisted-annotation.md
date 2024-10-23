---
title: "Evaluation of Video-Assisted Annotation of Human IMU Data Across Expertise, Datasets, and Tools"
collection: publications
permalink: /publications/2024-03-11-video-assisted-annotation
date: 2024-03-11
venue: 'IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events'
paperurl: 'https://doi.org/10.1109/PerComWorkshops59983.2024.10503292'
authors: 'Alexander Hoelzemann, <b>Marius Bock</b>, Kristof Van Laerhoven'
bibtex: true
teaser: /previews/video_annotation_teaser.png
categories: [wearable activity recognition]
code: https://github.com/mariusbock/video_assisted_annotation
---

{{ page.authors }}

<img class="pub_teaser" src="../images/previews/dl-arc.png" alt="Teaser Image" title="teaser" />

## Abstract

> As wearable-based data annotation remains, to date, a tedious, time-consuming task requiring researchers to dedicate substantial time, benchmark datasets within the field of Human Activity Recognition in lack richness and size compared to datasets available within related fields. Recently, vision foundation models such as CLIP have gained significant attention, helping the vision community advance in finding robust, generalizable feature representations. With the majority of researchers within the wearable community relying on vision modalities to overcome the limited expressiveness of wearable data and accurately label their to-be-released benchmark datasets offline, we propose a novel, clustering-based annotation pipeline to significantly reduce the amount of data that needs to be annotated by a human annotator. We show that using our approach, the annotation of centroid clips suffices to achieve average labelling accuracies close to 90% across three publicly available HAR benchmark datasets. Using the weakly annotated datasets, we further demonstrate that we can match the accuracy scores of fully-supervised deep learning classifiers across all three benchmark datasets.

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex

    @inproceedings{hoelzemannbock2024videoannotation,
  	title = {Evaluation of Video-Assisted Annotation of Human IMU Data Across Expertise, Datasets, and Tools},
  	author = {Alexander Hoelzemann and Marius Bock and Kristof Van Laerhoven},
  	booktitle = {2024 IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops)},
  	year = {2024},
  	url = {https://doi.org/10.1109/PerComWorkshops59983.2024.10503292},
  	publisher = {IEEE Computer Society},
}
