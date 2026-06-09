import { NextResponse } from "next/server";

// Disable static generation for this API route so it always serves fresh assets
export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.isarvait.com";

/**
 * Prepend absolute site URL to relative assets (images, links, srcsets)
 */
function makeUrlsAbsolute(html) {
  if (!html) return "";
  
  // Replace relative href="/path" or src="/path" with absolute URL
  // Exclude external URLs, mailto, tel, hashes, etc.
  let processed = html.replace(/(href|src)="\/([^"\/][^"]*)"/g, `$1="${SITE_URL}/$2"`);
  
  // Replace relative srcset="/path"
  processed = processed.replace(/srcset="\/([^"]+)"/g, `srcset="${SITE_URL}/$1"`);
  
  return processed;
}

/**
 * Extract outer tag from HTML string (e.g. <header>...</header>)
 */
function extractOuterTag(html, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?<\\/${tagName}>`, "i");
  const match = html.match(regex);
  return match ? match[0] : "";
}

export async function GET() {
  try {
    // Fetch the live homepage HTML
    const response = await fetch(SITE_URL, { 
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch main site: ${response.status} ${response.statusText}`);
    }
    
    const html = await response.text();

    // Extract the header and footer tags from the DOM
    const rawHeader = extractOuterTag(html, "header");
    const rawFooter = extractOuterTag(html, "footer");

    if (!rawHeader || !rawFooter) {
      throw new Error("Could not find header or footer tags in main site HTML");
    }

    // Make all relative paths absolute
    const headerHtml = makeUrlsAbsolute(rawHeader);
    const footerHtml = makeUrlsAbsolute(rawFooter);

    // Extract stylesheet links
    const matches = html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g);
    const stylesheets = [];
    
    for (const match of matches) {
      const href = match[1];
      // Convert relative stylesheet URLs to absolute
      if (href.startsWith("/")) {
        stylesheets.push(`${SITE_URL}${href}`);
      } else {
        stylesheets.push(href);
      }
    }

    // Set CORS headers so WordPress can access the endpoint if requested client-side
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    };

    return NextResponse.json(
      {
        header: headerHtml,
        footer: footerHtml,
        stylesheets: stylesheets,
      },
      { headers }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to extract layout assets", details: error.message },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
