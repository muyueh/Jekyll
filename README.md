# Cats vs Dogs Studio

```mermaid
gitGraph
   commit id: "Initial commit"
   commit id: "Set up Cats vs Dogs Studio"
```

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review
    Review --> Build
    Build --> Deploy
    Deploy --> [*]
    Review --> Draft : needs tweaks
```

```mermaid
sequenceDiagram
    participant Visitor
    participant Browser
    participant GitHubPages as GitHub Pages
    participant Theme as Mediator Theme

    Visitor->>Browser: Request site
    Browser->>GitHubPages: Fetch static assets
    GitHubPages->>Theme: Serve layouts & styles
    Theme-->>GitHubPages: Rendered HTML
    GitHubPages-->>Browser: Deliver page
    Browser-->>Visitor: Display Cats vs Dogs content
```

```mermaid
graph TD
    subgraph Client
        A[Visitor Browser]
    end
    subgraph Delivery
        B[GitHub Pages]
    end
    subgraph Source
        C[Jekyll Config]
        D[_posts]
        E[_portfolio]
        F[Assets]
    end

    C --> B
    D --> B
    E --> B
    F --> B
    B --> A
```

```mermaid
graph TD
    Start([Need content idea]) --> Q{Cats or Dogs?}
    Q -->|Cats| C1[Highlight agility]
    Q -->|Dogs| D1[Celebrate loyalty]
    C1 --> C2[Create diary post]
    D1 --> D2[Curate portfolio piece]
    C2 --> End([Publish to site])
    D2 --> End
```

```mermaid
flowchart LR
    subgraph Visitor
        V1[Browse sections]
        V2[Search "Cat vs Dog"]
    end
    subgraph Frontend
        F1[Render Mediator layout]
        F2[Load SimpleJekyllSearch]
    end
    subgraph Backend
        B1[Serve from GitHub Pages]
        B2[Build via Jekyll]
    end

    V1 --> F1 --> B1
    V2 --> F2 --> B1
    B1 --> B2
```

Cats vs Dogs Studio is a demonstration Jekyll project that showcases the [Mediator theme](https://github.com/dirkfabisch/mediator) with sample content focused on the playful rivalry between feline and canine companions.

## Getting started

1. Install Ruby and Bundler.
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000` to browse the site.

## Content structure

- **Diary posts** live in [`_posts/`](./_posts) and use the `diary` category for filtering.
- **Portfolio pieces** live in [`_portfolio/`](./_portfolio) and surface on the [Portfolio page](./portfolio.md).
- **Search** is powered by [`search.json`](./search.json) and [`assets/js/search.js`](./assets/js/search.js) using SimpleJekyllSearch.

Update or extend the content by adding new Markdown files with front matter metadata that mirrors the existing examples.

## Deployment

This project is optimized for GitHub Pages:

- The [`github-pages`](./Gemfile) gem keeps dependencies aligned with the hosted service.
- [`_config.yml`](./_config.yml) enables the remote Mediator theme and standard plugins such as SEO, sitemap, and archives.

Push the repository to GitHub and enable GitHub Pages on the `work` branch (or whichever branch you choose) to publish the site.
