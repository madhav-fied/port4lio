---
id: 001
title: MDX Articles Support
status: pending
---

# MDX Articles Support

## Context
The portfolio is a Vite + React + TypeScript SPA. The `/articles` route exists but `Articles.tsx` is empty. The goal is the least-code path to writing and rendering `.mdx` files as articles.

## Approach
`@mdx-js/rollup` + `import.meta.glob`. Vite processes MDX at build time. Article metadata is a plain JS `export const meta` inside each MDX file — no remark plugins, no YAML frontmatter, no extra packages.

One dependency. No CMS, no server, no database. Pure static.

---

## Steps

### 1. Install — one package only
```
pnpm add @mdx-js/rollup
```

### 2. `vite.config.ts` — add MDX plugin before React
```ts
import mdx from '@mdx-js/rollup'

plugins: [
  { enforce: 'pre', ...mdx() },
  react(),
  tailwindcss(),
]
```

### 3. `src/mdx.d.ts` — TypeScript types for `.mdx` imports
```ts
declare module '*.mdx' {
  import type { ComponentType } from 'react'
  export const meta: { title: string; date: string; description?: string }
  const MDXComponent: ComponentType
  export default MDXComponent
}
```

### 4. `src/content/articles/hello-world.mdx` — first article
```mdx
export const meta = { title: "Hello World", date: "2026-05-01" }

# Hello World

This is written in **MDX**.
```

### 5. `src/pages/Articles.tsx` — article list
```tsx
const modules = import.meta.glob('../content/articles/*.mdx', { eager: true })
// derive slug from path key → render list of <Link> elements with meta.title + meta.date
```

### 6. `src/pages/ArticleDetail.tsx` — single article renderer (new file)
```tsx
const modules = import.meta.glob('../content/articles/*.mdx')
// match slug from useParams → lazy-load module → render default export as <Component />
```

### 7. `src/main.tsx` — add dynamic route
```tsx
<Route path="/articles/:slug" element={<ArticleDetail />} />
```

---

## Files Changed

| File | Action |
|------|--------|
| `vite.config.ts` | Add `@mdx-js/rollup` plugin |
| `src/main.tsx` | Add `/articles/:slug` route |
| `src/pages/Articles.tsx` | Article list via `import.meta.glob` |
| `src/mdx.d.ts` | New — TS types for `.mdx` |
| `src/pages/ArticleDetail.tsx` | New — single article page |
| `src/content/articles/hello-world.mdx` | New — sample article |

## Verification
1. `pnpm dev` — no errors
2. `/articles` — shows article list with title + date
3. `/articles/hello-world` — renders MDX content
4. `pnpm build` — clean TypeScript + Vite build
