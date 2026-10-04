---
layout: single
title: "个人简介 · Biography"
permalink: /
author_profile: true
---

<p class="language-links"><a href="{{ '/en/' | relative_url }}" lang="en">English biography</a> · <a href="{{ '/cv/' | relative_url }}">完整简历</a></p>

{% for paragraph in site.data.huihuang.biography_zh %}
{{ paragraph | markdownify }}
{% endfor %}

## 研究方向

{% include huihuang/research.html %}

## 联系方式

邮箱：[huihuang@hainanu.edu.cn](mailto:huihuang@hainanu.edu.cn)  
单位：海南大学计算机科学与技术学院

<p class="profile-updated">更新日期：{{ site.data.huihuang.updated }}</p>
