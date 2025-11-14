# Cats vs Dogs Studio

```mermaid
gitGraph
   commit id: "Initial commit"
   branch work
   checkout work
   commit id: "Set up Mediator-themed Jekyll site with sample content"
   commit id: "Add GitHub Pages workflow and refresh docs"
```

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review
    Review --> ActionsBuild : merge to work
    ActionsBuild --> Deploy
    Deploy --> [*]
    ActionsBuild --> Draft : adjust content/tests
    Deploy --> Review : post-deploy feedback
```

```mermaid
sequenceDiagram
    participant Developer
    participant Actions as GitHub Actions
    participant Pages as GitHub Pages
    participant Theme as Mediator Theme
    participant Visitor

    Developer->>Actions: Push work branch updates
    Actions->>Actions: Run bundle exec jekyll build
    Actions->>Pages: Upload _site artifact
    Visitor->>Pages: Request site
    Pages->>Theme: Pull remote layouts & assets
    Theme-->>Pages: Rendered HTML
    Pages-->>Visitor: Serve Cats vs Dogs experience
```

```mermaid
graph TD
    subgraph Source
        C[_config.yml]
        D[_posts]
        E[_portfolio]
        F[Assets]
        W[.github/workflows/jekyll.yml]
    end
    subgraph CI/CD
        G[GitHub Actions]
    end
    subgraph Delivery
        B[GitHub Pages]
    end
    subgraph Client
        A[Visitor Browser]
    end

    C --> G
    D --> G
    E --> G
    F --> G
    W --> G
    G --> B
    B --> A
```

```mermaid
graph TD
    Start([Need content idea]) --> Q{Cats or Dogs?}
    Q -->|Cats| C1[Highlight agility]
    Q -->|Dogs| D1[Celebrate loyalty]
    C1 --> C2[Draft diary article]
    D1 --> D2[Curate portfolio piece]
    C2 --> Review
    D2 --> Review
    Review --> Publish([Publish to site])
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
        B1[Serve static site from GitHub Pages]
        B2[Build via GitHub Actions + Jekyll]
    end

    V1 --> F1 --> B1
    V2 --> F2 --> B1
    B2 --> B1
    F1 -.-> F2
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
- [`.github/workflows/jekyll.yml`](./.github/workflows/jekyll.yml) builds and deploys the site through GitHub Actions. Enable Pages via **Settings → Pages**, choose **GitHub Actions**, and the workflow will publish `_site` whenever the `work` branch is updated.

Before the first deploy, set the correct `url` (and optional `baseurl`) in `_config.yml`, then push the repository to GitHub. Each successful workflow run updates the public site automatically.
