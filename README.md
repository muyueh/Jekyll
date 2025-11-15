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
   commit id: "Vendor Mediator theme assets"
   commit id: "Patch Sass dependencies"
```

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review
    state SassPatch
    Review --> DependencyRefresh
    DependencyRefresh --> AssetVendoring
    AssetVendoring --> SassPatch
    SassPatch --> Build
    Build --> Deploy
    Deploy --> Monitor
    Monitor --> [*]
    DependencyRefresh --> Draft : needs tweaks
    AssetVendoring --> DependencyRefresh : missing upstream files
    SassPatch --> AssetVendoring : Sass import missing
    Monitor --> DependencyRefresh : schedule updates
```

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Shell
    participant GitHub as GitHub Repo
    participant Bundler
    participant Jekyll
    participant Actions as GitHub Actions

    Dev->>Shell: git clone dirkfabisch/mediator for assets
    Shell->>GitHub: Request theme sources
    GitHub-->>Shell: Provide css/main.sass & print.css
    Dev->>Shell: Copy css files into the local site
    Dev->>Shell: Override head include with web-app meta
    Dev->>Shell: Add local mixins & syntax highlighting partials
    Dev->>Shell: bundle install
    Shell->>Bundler: Resolve compatible gems
    Bundler-->>Shell: Install dependencies
    Dev->>Shell: bundle exec jekyll build
    Shell->>Jekyll: Generate static site with local CSS
    Jekyll-->>Shell: Build artifacts
    Shell->>Actions: Push branch
    Actions-->>Dev: Pages workflow passes with styling
```

```mermaid
graph TD
    subgraph Developer Environment
        D[Shell with Ruby 3.1 via mise]
        B[Bundler 2.5.22]
        C[Local css/main.sass & print.css]
        S[_sass/_syntax-highlighting.scss]
        H[_includes/head.html override]
        J[Jekyll CLI]
    end
    subgraph Upstream Theme
        MT[Mediator repository]
    end
    subgraph Automation
        GA[GitHub Actions Workflow]
        GP[GitHub Pages CDN]
    end
    subgraph Audience
        BR[Visitor Browser]
    end

    D --> MT
    MT --> C
    D --> B --> J
    C --> J
    S --> J
    H --> J
    J --> GA --> GP --> BR
```

```mermaid
graph TD
    Start([Start styling remediation]) --> CloneTheme[Clone Mediator repository]
    CloneTheme --> CopyCSS[Copy css/main.sass & print.css]
    CopyCSS --> UpdateHead[Add web-app meta override]
    UpdateHead --> AddMixins[Add local mixins & syntax partial]
    AddMixins --> InstallDeps[Run bundle install]
    InstallDeps --> Verify[Run bundle exec jekyll build]
    Verify --> Commit[Commit vendored assets]
    Commit --> Deploy[GitHub Pages workflow succeeds]
    Deploy --> End([Serve styled site])
```

```mermaid
flowchart LR
    subgraph Developer
        D1[Select Ruby 3.1 with mise]
        D2[Clone Mediator assets]
        D3[Copy css & override head meta]
        D4[Add local mixins & syntax styles]
        D5[Install deps & build site]
        D6[Push styled commit]
    end
    subgraph Frontend
        F1[Serve css/main.css locally]
        F2[Expose mobile-web-app-capable meta]
    end
    subgraph Backend
        B1[Execute Pages workflow]
        B2[Serve styled build]
    end
    subgraph Visitor
        V1[Load themed site]
    end

    D1 --> D2 --> D3 --> D4 --> D5 --> D6 --> F1 --> F2 --> B1 --> B2 --> V1
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
