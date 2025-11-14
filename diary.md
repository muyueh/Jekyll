---
layout: page
title: Diary
permalink: /diary/
---

<section class="post-list">
  {% assign diary_posts = site.categories.diary | default: site.posts %}
  {% for post in diary_posts %}
  <article class="post-item">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }} · {{ post.excerpt | strip_html | truncate: 120 }}</p>
  </article>
  {% endfor %}
</section>
