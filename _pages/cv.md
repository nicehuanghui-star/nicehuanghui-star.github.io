---
layout: single
title: "个人简历 · Curriculum Vitae"
permalink: /cv/
author_profile: true
---

<p class="cv-actions"><button type="button" class="btn btn--primary" id="print-cv">打印 / 保存为 PDF</button> · <a href="{{ '/en/' | relative_url }}">English biography</a></p>

## 个人简介

{% for paragraph in site.data.huihuang.biography_zh %}
{{ paragraph | markdownify }}
{% endfor %}

## 研究方向

{% include huihuang/research.html %}

## 科研项目

{% include huihuang/projects.html %}

## 代表论文

{% include huihuang/publications.html %}

## 本科生指导

{% include huihuang/students.html %}

## 学术服务

{% include huihuang/service.html %}

## 荣誉奖励

{% include huihuang/awards.html %}

## 联系方式

[huihuang@hainanu.edu.cn](mailto:huihuang@hainanu.edu.cn)

<p class="profile-updated">更新日期：{{ site.data.huihuang.updated }}</p>
