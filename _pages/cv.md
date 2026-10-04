---
layout: academic
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false
---

<p class="cv-actions"><button type="button" class="btn btn--primary" id="print-cv">Print / Save as PDF</button></p>

<section class="academic-section academic-biography">
<h2>Biography</h2>
{% for paragraph in site.data.huihuang.biography_en %}{{ paragraph | escape | markdownify }}{% endfor %}
</section>

## Research Interests

{% include huihuang/research.html %}

## Research Projects

{% include huihuang/projects.html %}

## Publications

{% include huihuang/publications.html %}

## Teaching

{% include huihuang/teaching.html %}

## Students

{% include huihuang/students.html %}

## Professional Activities

{% include huihuang/service.html %}

## Honors and Awards

{% include huihuang/awards.html %}

## Contact

**Office:** {{ site.data.huihuang.office.en | escape }}

[huihuang@hainanu.edu.cn](mailto:huihuang@hainanu.edu.cn)

<p class="profile-updated">Updated: {{ site.data.huihuang.updated }}</p>
