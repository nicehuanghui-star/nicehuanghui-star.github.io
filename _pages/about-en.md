---
layout: single
title: "Biography"
permalink: /en/
author_profile: true
---

<p class="language-links"><a href="{{ '/cv/' | relative_url }}">View full CV</a></p>

{% for paragraph in site.data.huihuang.biography_en %}
{{ paragraph | markdownify }}
{% endfor %}

## Research Interests

{% include huihuang/research.html %}

## Contact

Email: [huihuang@hainanu.edu.cn](mailto:huihuang@hainanu.edu.cn)  
School of Computer Science and Technology, Hainan University

<p class="profile-updated">Updated: {{ site.data.huihuang.updated }}</p>
