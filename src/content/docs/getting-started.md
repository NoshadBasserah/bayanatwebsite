---
title: Getting started
section: /docs
description: Install the template, run the dev server, and edit your first docs page.
priority: 2
navGroup: admin
---

## Install

Clone the repo and install dependencies.

```bash
git clone <your-fork-url> my-site
cd my-site
npm install
```

## Run the dev server

```bash
npm run dev
```

The site runs on `http://localhost:4321`.

## Edit this page

Every file in `src/content/docs` becomes a page under `/docs/`. The frontmatter controls the sidebar:

```yaml
---
title: Getting started
section: /docs
description: A short summary for search and social cards.
priority: 2
---
```

Change `priority` to reorder the sidebar. Lower numbers sort first.

## Add a new page

Create a new Markdown file in `src/content/docs` with frontmatter as above. It appears in the sidebar automatically on reload.
