# Cats vs Dogs Studio

```mermaid
gitGraph
   commit id: "Initial commit"
   branch work
   checkout work
   branch site-setup
   checkout site-setup
   commit id: "Set up Cats vs Dogs Studio"
   checkout work
   merge site-setup id: "Merge PR #1"
   commit id: "Create jekyll.yml"
   commit id: "Refresh Ruby 3.1 dependencies"
```

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review
    Review --> DependencyRefresh
    DependencyRefresh --> Build
    Build --> Deploy
    Deploy --> Monitor
    Monitor --> [*]
    DependencyRefresh --> Draft : needs tweaks
    Monitor --> DependencyRefresh : schedule updates
```

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Shell
    participant Bundler
    participant Jekyll
    participant Actions as GitHub Actions

    Dev->>Shell: Run bundle update activesupport (Ruby 3.1)
    Shell->>Bundler: Resolve compatible gems
    Bundler-->>Shell: Write refreshed Gemfile.lock
    Dev->>Shell: Normalize lockfile platforms
    Shell->>Bundler: Keep only runtime platforms
    Dev->>Shell: bundle exec jekyll build
    Shell->>Jekyll: Generate static site
    Jekyll-->>Shell: Build artifacts
    Shell->>Actions: Push branch
    Actions-->>Dev: Pages workflow passes
```

```mermaid
graph TD
    subgraph Developer Environment
        D[Shell with Ruby 3.1 via mise]
        B[Bundler 2.5.22]
        J[Jekyll CLI]
    end
    subgraph Automation
        GA[GitHub Actions Workflow]
        GP[GitHub Pages]
    end
    subgraph Audience
        BR[Visitor Browser]
    end

    D --> B --> J
    J --> GA --> GP --> BR
```

```mermaid
graph TD
    Start([Start dependency refresh]) --> CheckRuby[Confirm Ruby 3.1 runtime]
    CheckRuby --> Update[Update activesupport]
    Update --> Normalize[Normalize lockfile platforms]
    Normalize --> Verify[Run bundle exec jekyll build]
    Verify --> Commit[Commit refreshed files]
    Commit --> Deploy[GitHub Pages workflow succeeds]
    Deploy --> End([Serve updated site])
```

```mermaid
flowchart LR
    subgraph Developer
        D1[Select Ruby 3.1 with mise]
        D2[Run bundler updates]
        D3[Push refreshed commit]
    end
    subgraph Frontend
        F1[Regenerate static pages]
        F2[Confirm theme assets]
    end
    subgraph Backend
        B1[Execute Pages workflow]
        B2[Serve updated build]
    end
    subgraph Visitor
        V1[Load refreshed site]
    end

    D1 --> D2 --> D3 --> F1 --> F2 --> B1 --> B2 --> V1
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
