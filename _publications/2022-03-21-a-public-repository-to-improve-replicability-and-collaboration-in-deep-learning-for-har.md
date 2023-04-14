---
title: "A Public Repository to Improve Replicability and Collaboration in Deep Learning for HAR"
collection: publications
permalink: /publications/2022-03-21-a-public-repository-to-improve-replicability-and-collaboration-in-deep-learning-for-har
date: 2022-03-21
venue: 'IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops)'
paperurl: 'https://doi.org/10.1109/PerComWorkshops53856.2022.9767436'
teaser: /previews/grokking_teaser.png
authors: 'Lloyd Pellatt, <b>Marius Bock</b>, Daniel Roggen, Kristof Van Laerhoven'
categories: [wearable activity recognition]
bibtex: true
code: https://github.com/STRCSussex-UbiCompSiegen/dl_har_public
video: https://www.youtube.com/watch?v=VWktAi8a4yE
---

{{ page.authors }}

<img class="pub_teaser" src="../images/previews/grokking.png" alt="Teaser Image" title="teaser" />

## Abstract

> Deep learning methods have become an almost default choice of machine learning approach for human activity recognition (HAR) systems that operate on time series data, such as those of wearable sensors. However, the implementations of such methods suffer from complex package dependencies, obsolescence, and subtleties in the implementation which are sometimes not well documented. In order to accelerate research and minimise any discrepancies between (re-)implementations, we introduce a curated, open-source repository which (1) contains complete data loading and preprocessing pipelines for 6 well-established HAR datasets, (2) supports several popular HAR deep learning architectures, and (3) provides necessary functionalities to train and evaluate said models. We welcome contributions from the fellow researcher to this repository, made available through: https://github.com/STRCSussex-UbiCompSiegen/dl_har_public

## Resources

{% if page.paperurl %}<a href=" {{ page.paperurl }} ">[pdf]</a>{% endif %} {% if page.arxiv %}<a href=" {{ page.arxiv }} ">[arxiv]</a>{% endif %} {% if page.code %}<a href=" {{ page.code }} ">[github]</a>{% endif %} {% if page.video %}<a href=" {{ page.video }} ">[video]</a>{% endif %} {% if poster %}<a href=" {{ page.poster }} ">[video]</a>{% endif %}

## Bibtex

    @InProceedings{bock2022public,
    title 		= {A Public Repository to Improve Replicability and Collaboration in Deep Learning for HAR  },
    author 		= {Lloyd Pellatt, Marius Bock, Daniel Roggen, Kristof Van Laerhoven},
    booktitle 	= {IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops)},
    year 		= {2022}
    }
