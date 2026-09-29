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

---

## 2. Strict Image Standards for Social Previews (WhatsApp, LinkedIn, Twitter, Facebook)

### A. Size & Dimension Requirements
- **Max File Size:** **< 300 KB** (WhatsApp crawler hard limit: drops images > 300 KB).
- **Target File Size:** **100 KB – 200 KB** (Ensures instant scraper downloads within 3-second timeout window).
- **Dimensions:** **1200 × 630 px** (1.91:1 aspect ratio standard for Open Graph and Twitter `summary_large_image`).
- **Format:** High-efficiency `.jpg` (MozJPEG ~80–85% quality) or `.webp`.

### B. Safe Image URL Encoding Rule
Always ensure URLs with spaces or special characters (e.g. `Banking & Financial`) are safely encoded using `encodeURI(decodeURI(rawImageUrl))` to prevent sharing card failures on WhatsApp, Twitter, LinkedIn, and Facebook scrapers.

### C. Direct Canonical URLs vs Redirects
Social crawlers (especially WhatsApp) frequently fail to resolve images across 307/308 HTTP redirects. Always share and link to direct canonical routes (e.g., `/product/isarva-nethra` rather than `/isarva-nethra`).

---

## 3. Image Optimization with Sharp

Whenever adding or updating an OG banner image, compress and crop it to 1200×630 using `sharp`:

```bash
node -e "
const sharp = require('sharp');
const fs = require('fs');

async function optimize(file) {
  const temp = file.replace(/(\.[a-z]+)$/i, '-opt$1');
  await sharp(file)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(temp);
  fs.renameSync(temp, file);
  console.log('Optimized:', file, (fs.statSync(file).size / 1024).toFixed(1) + ' KB');
}

optimize('./public/products/your-product/og-image.jpg');
"
```

---

## 4. Page Types & Patterns

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

## 5. Audit & Verification Workflow

### Run OG Tag & Size Audit
To check whether any product, service, or static route has missing OG tags or images exceeding 300 KB:

```bash
node -e "
const fs = require('fs');
const path = require('path');
const { productsData } = require('./src/app/lib/data/products-data.js');
const { servicesData } = require('./src/app/lib/data/services-data.js');
const { industriesData } = require('./src/app/lib/data/industries-data.js');

function audit(items, label) {
  console.log('=== ' + label + ' ===');
  items.forEach(item => {
    const img = item.ogImage || item.heroImage || item.image;
    if (!img) {
      console.log('[NO IMAGE]', item.slug);
      return;
    }
    const local = path.join('./public', img.replace(/^\//, ''));
    if (!fs.existsSync(local)) {
      console.log('[MISSING FILE]', item.slug, '->', img);
    } else {
      const kb = (fs.statSync(local).size / 1024).toFixed(1);
      if (kb > 300) {
        console.log('[OVER 300KB]', item.slug, '->', img, '(' + kb + ' KB)');
      }
    }
  });
}

audit(productsData, 'PRODUCTS');
audit(servicesData, 'SERVICES');
audit(industriesData, 'INDUSTRIES');
"
```

### Build Validation
Always validate before pushing:
```bash
cmd /c "npm run build"
```
Ensure all 120+ static routes and SSG pages compile with 0 errors.
