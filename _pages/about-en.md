---
layout: single
title: "Hui Huang · Biography"
permalink: /en/
author_profile: true
---

<p class="language-links"><a href="{{ '/' | relative_url }}" lang="zh-CN">中文简介</a> · <a href="{{ '/cv/' | relative_url }}">CV / 简历</a></p>

{% for paragraph in site.data.huihuang.biography_en %}
{{ paragraph | markdownify }}
{% endfor %}

## Research Interests

{% for item in site.data.huihuang.research %}
- **{{ item.title.en }}** — {{ item.detail.en }}
{% endfor %}

## Contact

Email: [huihuang@hainanu.edu.cn](mailto:huihuang@hainanu.edu.cn)  
School of Computer Science and Technology, Hainan University

<p class="profile-updated">Updated: {{ site.data.huihuang.updated }}</p>
