---
layout: page
title: Home
---

<section class="intro">
  <p>Welcome to <strong>Cats vs Dogs Studio</strong>—a friendly battleground where whiskers and wagging tails coexist.</p>
  <p>Explore our latest diary musings and portfolio pieces to discover how feline finesse compares with canine charm.</p>
</section>

<section class="collections">
  <h2>Browse by collection</h2>
  <div class="collection-grid">
    <article class="collection-card">
      <h3><a href="{{ '/diary/' | relative_url }}">Diary musings</a></h3>
      <p>Follow weekly dispatches from training labs, community salons, and studio experiments.</p>
    </article>
    <article class="collection-card">
      <h3><a href="{{ '/portfolio/' | relative_url }}">Portfolio showcases</a></h3>
      <p>Review our cross-species campaigns, apps, and broadcasts that keep paws and claws collaborating.</p>
    </article>
    <article class="collection-card">
      <h3><a href="{{ '/services/' | relative_url }}">Studio services</a></h3>
      <p>See how we coach guardians, host agility intensives, and tailor enrichment packages.</p>
    </article>
    <article class="collection-card">
      <h3><a href="{{ '/events/' | relative_url }}">Upcoming events</a></h3>
      <p>Reserve a seat at salons, panels, and play labs designed for both cat and dog households.</p>
    </article>
    <article class="collection-card">
      <h3><a href="{{ '/resources/' | relative_url }}">Downloadable resources</a></h3>
      <p>Grab handbooks, warm-up guides, and printables to keep the rivalry friendly at home.</p>
    </article>
    <article class="collection-card">
      <h3><a href="{{ '/team/' | relative_url }}">Meet the team</a></h3>
      <p>Get to know the trainers, strategists, and behaviorists who mediate our furry debates.</p>
    </article>
  </div>
</section>

<section class="latest-diaries">
  <h2>Latest diary posts</h2>
  {% assign diary_posts = site.categories.diary | default: site.posts %}
  {% for post in diary_posts limit:3 %}
  <article class="post-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }} · {{ post.excerpt | strip_html | truncate: 140 }}</p>
  </article>
  {% endfor %}
  <p class="more-link"><a href="{{ '/diary/' | relative_url }}">View the full diary archive →</a></p>
</section>

<section class="portfolio-highlights">
  <h2>Featured portfolio work</h2>
  {% assign portfolio_items = site.portfolio | sort: 'date' | reverse %}
  {% for item in portfolio_items limit:3 %}
  <article class="portfolio-item">
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <p class="post-meta">{{ item.summary | default: item.excerpt | strip_html | truncate: 140 }}</p>
  </article>
  {% endfor %}
  <p class="more-link"><a href="{{ '/portfolio/' | relative_url }}">See every case study →</a></p>
</section>
