---
title: Guide — first example
section: /docs
description: A placeholder guide showing the page layout, headings, callouts, and tables.
priority: 3
navGroup: admin
---

## Overview

This is a placeholder guide. Use it to check spacing, prose styles, and navigation behaviour while you build your own content.

> **Tip:** Blockquotes are rendered with accent styling. Use them for callouts.

## A table

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier. |
| `name` | `string` | Display name. |
| `active` | `boolean` | Whether the record is live. |

## A code sample

```ts
interface User {
  id: string;
  name: string;
  active: boolean;
}

function greet(user: User): string {
  return `Hello, ${user.name}`;
}
```

## A list

1. First step.
2. Second step.
3. Third step.
