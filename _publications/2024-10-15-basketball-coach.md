---
title: "Basketball Shooting Performance Analysis Using Multi-Modal Wearable and Mobile Sensing in Semi-Naturalistic Settings"
collection: publications
permalink: /publications/2024-10-15-basketball-coach
date: 2024-10-15
authors: 'Sixuan Wu, Alexander Hoelzemann, <b>Marius Bock</b>, Kristof Van Laerhoven, Thomas Ploetz, Alexander T Adams
bibtex: true
venue: 'IEEE 20th International Conference on Body Sensor Networks (BSN)'
paperurl: 'https://doi.org/10.1109/BSN63547.2024.10780653'
categories: [wearable activity recognition, mulitmodal activity recognition]
---

{{ page.authors }}

## Abstract

> Wearable devices have become efficient tools for sports performance analysis. Professional systems heavily rely on the high-tech setup, which are expensive and privacy-invasive for amateur players. This paper addresses the gap between advanced professional systems and limited consumer options by proposing a low-cost, privacy-preserving approach for basketball shot detection and outcome prediction. We leverage accelerometer data from wrist-worn smartwatches, combined with audio recordings, to develop a system capable of identifying shot movements and predicting shot outcomes. The shot detection was achieved by a 1D CNN model through accelerometer data and outcome classification was achieved by an audio classification model. We evaluated the system on 6 participants, and the macro F1 score for shot outcome classification in data streams are 81.53% and 78.07% on dominant hand and non-dominant hand, respectively. Our system opens up explorations in other domains, including medical or industrial activity recognition, where similar approaches can be applied.

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex
    @article{wu2024basketball,
    author={Wu, Sixuan and Hoelzemann, Alexander and Bock, Marius and Van Laerhoven, Kristof and Plötz, Thomas and Adams, Alexander T.},
    title={Basketball Shooting Performance Analysis Using Multi-Modal Wearable and Mobile Sensing in Semi-Naturalistic Settings}, 
    year = {2024},
    booktitle={IEEE 20th International Conference on Body Sensor Networks (BSN)},
    doi = {10.1109/BSN63547.2024.10780653},
    url={https://doi.org/10.1109/BSN63547.2024.10780653}
}
