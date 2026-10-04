---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
---

<p class="cv-actions"><button type="button" class="btn btn--primary" id="print-cv">Print / Save as PDF</button></p>

## Biography

{% for paragraph in site.data.huihuang.biography_en %}
{{ paragraph | markdownify }}
{% endfor %}

## Research Interests

{% include huihuang/research.html %}

## Research Projects

{% include huihuang/projects.html %}

## Selected Publications

{% include huihuang/publications.html %}

## Undergraduate Supervision

{% include huihuang/students.html %}

## Professional Activities

{% include huihuang/service.html %}

## Honors and Awards

{% include huihuang/awards.html %}

## Contact

[huihuang@hainanu.edu.cn](mailto:huihuang@hainanu.edu.cn)

<p class="profile-updated">Updated: {{ site.data.huihuang.updated }}</p>
