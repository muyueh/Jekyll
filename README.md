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
   commit id: "Expand sample content and navigation"
   commit id: "Link homepage to key content collections"
```

```mermaid
stateDiagram-v2
    [*] --> ContentPlanning
    state ContentPlanning {
        IdeaBacklog --> DraftOutline
    }
    DraftOutline --> AssetAuthoring
    AssetAuthoring --> Review
    Review --> Publishing
    Publishing --> NavigationUpdate
    NavigationUpdate --> HomepageCuration
    HomepageCuration --> Build
    Build --> Deploy
    Deploy --> Monitor
    Monitor --> ContentPlanning
    Review --> ContentPlanning : new angles needed
    Publishing --> AssetAuthoring : revise copy & imagery
    Monitor --> Review : analytics feedback
```

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Content as Content Lead
    participant Repo as Git Repo
    participant Editor
    participant Jekyll
    participant Actions as GitHub Actions

    Content->>Dev: Share briefs for diary posts & new pages
    Dev->>Editor: Draft Markdown with sample data tables & lists
    Editor-->>Dev: Provide copy edits and fact checks
    Dev->>Repo: Stage posts, portfolio items, and resources
    Dev->>Repo: Update navigation, homepage links & README diagrams
    Repo-->>Dev: Confirm clean diff
    Dev->>Jekyll: bundle exec jekyll build
    Jekyll-->>Dev: Verify site builds with new content
    Dev->>Actions: Push branch with expanded sample set
    Actions-->>Dev: Static checks succeed
```

```mermaid
graph TD
    subgraph Content Pipeline
        CAL[Content Calendar]
        MD[Markdown posts & pages]
        RES[Static resources (PDFs, images)]
    end
    subgraph Site Build
        DEV[Developer Workstation]
        HP[Homepage collections]
        BND[Bundler]
        JEK[Jekyll CLI]
    end
    subgraph Hosting
        GA[GitHub Actions Workflow]
        GP[GitHub Pages CDN]
    end
    subgraph Audience
        VIS[Visitors]
    end

    CAL --> MD
    CAL --> RES
    MD --> DEV --> HP --> BND --> JEK
    RES --> JEK
    JEK --> GA --> GP --> VIS
```

```mermaid
graph TD
    Start([Kick off content expansion]) --> GatherBriefs[Collect story briefs & event info]
    GatherBriefs --> DraftContent[Draft posts, portfolio entries, and pages]
    DraftContent --> PeerReview[Peer review copy & data]
    PeerReview --> UpdateNavigation[Refresh navigation links]
    UpdateNavigation --> CurateHomepage[Wire homepage links]
    CurateHomepage --> AddResources[Upload supporting PDFs]
    AddResources --> BuildSite[Run bundle exec jekyll build]
    BuildSite --> CommitChanges[Commit expanded sample set]
    CommitChanges --> Deploy[Push branch & run Pages workflow]
    Deploy --> End([Visitors explore richer sample site])
```

```mermaid
flowchart LR
    subgraph Content Team
        C1[Plan diary calendar]
        C2[Collect testimonials]
        C3[Outline resources & events]
    end
    subgraph Developer
        D1[Draft Markdown posts]
        D2[Create portfolio case studies]
        D3[Author services/events/team pages]
        D4[Curate homepage entry points]
        D5[Generate placeholder PDFs]
        D6[Run bundle exec jekyll build]
        D7[Commit & push updates]
    end
    subgraph Frontend
        F1[Mediator theme renders new navigation]
        F2[Search index ingests fresh content]
    end
    subgraph Backend
        B1[GitHub Actions verifies build]
        B2[GitHub Pages publishes site]
    end
    subgraph Visitors
        V1[Browse diary archive]
        V2[Download resource PDFs]
        V3[Explore services & events]
    end

    C1 --> D1
    C2 --> D2
    C3 --> D3
    D3 --> D4 --> D5 --> D6 --> D7 --> F1 --> F2 --> B1 --> B2 --> V1
    B2 --> V2
    B2 --> V3
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
- **Studio pages** such as [Services](./services.md), [Events](./events.md), [Resources](./resources.md), and [Team](./team.md) illustrate how to present evergreen content alongside diary posts.

Update or extend the content by adding new Markdown files with front matter metadata that mirrors the existing examples.

## Deployment

This project is optimized for GitHub Pages:

- The [`github-pages`](./Gemfile) gem keeps dependencies aligned with the hosted service.
- [`_config.yml`](./_config.yml) enables the remote Mediator theme and standard plugins such as SEO, sitemap, and archives.

Push the repository to GitHub and enable GitHub Pages on the `work` branch (or whichever branch you choose) to publish the site.
