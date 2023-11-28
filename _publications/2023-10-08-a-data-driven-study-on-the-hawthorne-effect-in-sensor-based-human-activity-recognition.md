---
title: "A Data-Driven Study on the Hawthorne Effect in Sensor-Based Human Activity Recognition"
collection: publications
permalink: /publications/2023-10-08-a-data-driven-study-on-the-hawthorne-effect-in-sensor-based-human-activity-recognition
date: 2023-10-08
venue: 'UbiComp/ISWC 2023'
authors: 'Alexander Hoelzemann, <b>Marius Bock</b>, Ericka Andrea Valladares Bastiias, Salma El Ouazzani Touhami, Kenza Nassiri, Kristof Van Laerhoven'
bibtex: true
teaser: previews/hawthorne_teaser.png
categories: [temporal action localization, inertial-based human activity recognition]
paperurl: 'https://doi.org/10.1145/3594739.3610743'
categories: [human activity recognition, hawthorne effect, data collection]
code: https://github.com/mariusbock/hawthorne_har
---

{{ page.authors }}

<img class="pub_teaser" src="../images/previews/hawthorne.png" alt="Teaser Image" title="teaser" />
## Abstract

> Known as the Hawthorne Effect, studies have shown that participants alter their behavior and execution of activities in response to being observed. With researchers from a multitude of human- centered studies knowing of the existence of the said effect, quantitative studies investigating the neutrality and quality of data gathered in monitored versus unmonitored setups, particularly in the context of Human Activity Recognition (HAR), remain largely underexplored. With the development of tracking devices providing the possibility of carrying out less invasive observation of participants’ conduct, this study provides a data-driven approach to measure the effects of observation on participants’ execution of five workout-based activities. Using both classical feature analysis and deep learning-based methods we analyze the accelerometer data of 10 participants, showing that a different degree of observation only marginally influences captured patterns and predictive performance of classification algorithms. Although our findings do not dismiss the existence of the Hawthorne Effect, it does challenge the prevailing notion of the applicability of laboratory compared to in-the-wild recorded data. The dataset and code to reproduce our experiments are available via https://github.com/mariusbock/hawthorne_har.

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex

    @inproceedings{hoelzemann2023hawthorne,
    author = {Hoelzemann, Alexander and Bock, Marius and Valladares Bastias, Ericka Andrea and El Ouazzani Touhami, Salma and Nassiri, Kenza and Van Laerhoven, Kristof},
    title = {A Data-Driven Study on the Hawthorne Effect in Sensor-Based Human Activity Recognition},
    year = {2023},
    url = {https://doi.org/10.1145/3594739.3610743},
    booktitle = {Adjunct Proceedings of the ACM International Joint Conference on Pervasive and Ubiquitous Computing & the ACM International Symposium on Wearable Computing},
}
