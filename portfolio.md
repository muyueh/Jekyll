---
layout: page
title: Portfolio
permalink: /portfolio/
---

<section class="portfolio-list">
  {% for item in site.portfolio %}
  <article class="portfolio-item">
    <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
    <p class="post-meta">{{ item.summary | default: item.excerpt | strip_html | truncate: 120 }}</p>
  </article>
  {% endfor %}
</section>
