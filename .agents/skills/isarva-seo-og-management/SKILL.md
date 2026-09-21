---
name: isarva-seo-og-management
description: >-
  Standard operating procedure and cheatsheet for managing, auditing, and adding SEO metadata,
  Open Graph (OG) tags, Twitter cards, JSON-LD structured schemas, and social media image banners
  across Products, Services, Industries, and static routes on the Isarva platform.
---

# Isarva SEO & Open Graph (OG) Management Skill

This skill documents the standard patterns, rules, and procedures for maintaining SEO metadata and Open Graph social preview cards across the Isarva Next.js codebase.

---

## 1. Central Architecture (`src/app/lib/utils/seo.js`)

All pages must leverage the centralized SEO generator helpers rather than defining ad-hoc metadata objects:

- `generateMetadata({...})`: Base generator returning title, description, keywords, canonical URLs, OpenGraph objects (title, description, image, dimensions 1200x630, siteName, locale, type), Twitter summary_large_image cards, and robots config.
- `generateProductMetadata(product)`: Formats product title, description, features, keywords, and checks `ogImage` $\rightarrow$ `heroImage` $\rightarrow$ `image` $\rightarrow$ `/isarva-og.jpg`.
- `generateServiceMetadata(service)`: Formats service metadata and maps `ogImage` $\rightarrow$ `heroImage` $\rightarrow$ `/isarva-og.jpg`.
- `generateIndustryMetadata(industry)`: Formats industry metadata and maps `ogImage` $\rightarrow$ `heroImage`.

### Safe Image URL Encoding Rule
Always ensure URLs with spaces or special characters (e.g. `Banking & Financial`) are safely encoded using `encodeURI(decodeURI(rawImageUrl))` to prevent sharing card failures on WhatsApp, Twitter, LinkedIn, and Facebook scrapers.

---

## 2. Page Types & Patterns

### A. Dynamic Catalog Pages (`/product/[slug]`, `/service/[slug]`, `/industry/[slug]`)
1. Add data attributes (`ogImage`, `metaDescription`, `seoTitle`, `keywords`) directly in data files:
   - `src/app/lib/data/products-data.js`
   - `src/app/lib/data/services-data.js`
   - `src/app/lib/data/industries-data.js`
2. Export `generateMetadata({ params })` from `page.js` calling the corresponding helper.

### B. Static Server Pages (`src/app/products/*`, `src/app/services/*`, etc.)
Use `generateMetadata as generateSEOMetadata` at the top of `page.js`:

```javascript
import { generateMetadata as generateSEOMetadata } from "../../lib/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Product Title | Category",
  description: "Meta description between 150-160 characters.",
  image: "/products/folder/product-image.jpg",
  url: "/products/product-slug",
  keywords: ["keyword 1", "keyword 2"],
});
```

### C. Client Components (`"use client"`)
In Next.js App Router, pages with `"use client"` cannot export `metadata`. Convert to:
- A server component `page.js` that exports `metadata` and renders a `<ClientComponent />`, OR
- A sibling `layout.js` that exports the `metadata`.

---

## 3. Audit & Verification Workflow

### Run Quick Node Audit
To check whether any product, service, or static route lacks OG tags:
```bash
node -e "
const fs = require('fs');
const { productsData } = require('./src/app/lib/data/products-data.js');
const { generateProductMetadata } = require('./src/app/lib/utils/seo.js');
productsData.forEach(p => {
  const meta = generateProductMetadata(p);
  console.log(p.slug, '->', meta.openGraph?.images?.[0]?.url);
});
"
```

### Build Validation
Always validate before pushing:
```bash
cmd /c "npm run build"
```
Ensure all 120+ static routes and SSG pages compile with 0 errors.
