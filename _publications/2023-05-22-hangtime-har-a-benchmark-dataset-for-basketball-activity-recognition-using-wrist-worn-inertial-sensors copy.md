---
title: "Hang-Time HAR: A Benchmark Dataset for Basketball Activity Recognition using Wrist-worn Inertial Sensors"
collection: publications
permalink: /publications/2023-05-22-hangtime-har-a-benchmark-dataset-for-basketball-activity-recognition-using-wrist-worn-inertial-sensors
date: 2023-05-22
authors: 'Alexander Hoelzemann, Julia Lee Romero, <b>Marius Bock</b>, Kristof Van Laerhoven, Qin Lv'
bibtex: true
venue: 'MDPI Sensors'
paperurl: 'https://doi.org/10.3390/s23135879'
teaser: previews/hangtime_teaser.png
arxiv: 'https://arxiv.org/abs/2305.13124'
categories: [wearable activity recognition, datasets]
code: https://github.com/ahoelzemann/hangtime_har
---

{{ page.authors }}

<img class="pub_teaser" src="../images/previews/hangtime.png" alt="Teaser Image" title="teaser" />
## Abstract

> We present a benchmark dataset for evaluating physical human activity recognition methods from wrist-worn sensors, for the specific setting of basketball training, drills, and games. Basketball activities lend themselves well for measurement by wrist-worn inertial sensors, and systems that are able to detect such sport-relevant activities could be used in applications toward game analysis, guided training, and personal physical activity tracking. The dataset was recorded for two teams from separate countries (USA and Germany) with a total of 24 players who wore an inertial sensor on their wrist, during both repetitive basketball training sessions and full games. Particular features of this dataset include an inherent variance through cultural differences in game rules and styles as the data was recorded in two countries, as well as different sport skill levels, since the participants were heterogeneous in terms of prior basketball experience. We illustrate the dataset's features in several time-series analyses and report on a baseline classification performance study with two state-of-the-art deep learning architectures.

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex

    
@article{hoelzemann2023hangtime,
	title = {Hang-time HAR: A benchmark dataset for basketball activity recognition using wrist-worn inertial sensors},
	volume = {23},
	url = {https://doi.org/10.3390/s23135879},
	number = {13},
	journal = {Sensors},
	author = {Hoelzemann, Alexander and Romero, Julia L. and Bock, Marius and Van Laerhoven, Kristof and Lv, Qin},
	year = {2023},
}

