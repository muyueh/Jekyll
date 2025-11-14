---
layout: page
title: Search
permalink: /search/
---

<div id="search-container">
  <input type="search" id="search-input" placeholder="Search cats, dogs, and beyond…" aria-label="Search posts and projects">
  <ul id="results-container" aria-live="polite"></ul>
</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-jekyll-search@1.11.0/dest/simple-jekyll-search.min.css">
<script src="https://cdn.jsdelivr.net/npm/simple-jekyll-search@1.11.0/dest/simple-jekyll-search.min.js"></script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
