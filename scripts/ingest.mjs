import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";
import * as cheerio from 'cheerio';

/**
 * Isarva AI - Full Website Crawler & Ingestion Script
 * Crawls entire website, scrapes all pages, and stores vectors in Supabase.
 */

// Discover all URLs on the website
async function discoverUrls(baseUrl) {
  const visited = new Set();
  const toVisit = [baseUrl];
  const allUrls = new Set();
  
  while (toVisit.length > 0 && visited.size < 100) { // Limit to 100 pages
    const currentUrl = toVisit.shift();
    
    if (visited.has(currentUrl)) continue;
    visited.add(currentUrl);
    allUrls.add(currentUrl);
    
    console.log(`  Crawling [${visited.size}/100]: ${currentUrl}`);
    
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(currentUrl, { 
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      clearTimeout(timeout);
      
      const html = await response.text();
      const $ = cheerio.load(html);
      
      let linksFound = 0;
      
      // Find all internal links
      $('a[href]').each((_, element) => {
        let href = $(element).attr('href');
        
        if (!href) return;
        
        // Convert relative URLs to absolute
        if (href.startsWith('/')) {
          href = new URL(href, baseUrl).toString();
        }
        
        // Only include URLs from the same domain
        if (href.startsWith(baseUrl) && !visited.has(href) && !href.includes('#')) {
          // Filter out common non-content URLs
          if (!href.match(/\.(jpg|jpeg|png|gif|pdf|svg|css|js)$/i)) {
            toVisit.push(href);
            linksFound++;
          }
        }
      });
      
      console.log(`    → Found ${linksFound} new links`);
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.log(`  ⚠ Failed to crawl ${currentUrl}:`, error.message);
    }
  }
  
  console.log(`  Found ${allUrls.size} unique URLs after crawling ${visited.size} pages`);
  return Array.from(allUrls);
}

async function ingest() {
  const baseUrl = process.env.WEBSITE_URL || "http://localhost:3000";
  console.log(`🚀 Starting ingestion for: ${baseUrl}`);

  try {
    // 1. Discover all URLs on the website
    console.log("📡 Discovering URLs...");
    const urls = await discoverUrls(baseUrl);
    console.log(`✅ Found ${urls.length} URLs`);

    // 2. Load data from all discovered URLs
    console.log("📄 Scraping pages...");
    const allDocs = [];
    
    for (const url of urls) {
      try {
        const loader = new CheerioWebBaseLoader(url, {
          selector: "body",
        });

        // Add timeout for loading
        const loadPromise = loader.load();
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 30000) // 30 second timeout
        );
        
        const docs = await Promise.race([loadPromise, timeoutPromise]);
        
        // Clean the content
        const cleanedDocs = docs.map((doc) => {
          let content = doc.pageContent
            .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "")
            .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gim, "")
            .replace(/<nav\b[^>]*>([\s\S]*?)<\/nav>/gim, "")
            .replace(/<footer\b[^>]*>([\s\S]*?)<\/footer>/gim, "")
            .replace(/<header\b[^>]*>([\s\S]*?)<\/header>/gim, "")
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim();

          return {
            ...doc,
            pageContent: content,
            metadata: {
              ...doc.metadata,
              source: url,
              page_url: url,
              scraped_at: new Date().toISOString(),
            },
          };
        });
        
        allDocs.push(...cleanedDocs);
        console.log(`  ✓ Scraped: ${url}`);
      } catch (error) {
        console.log(`  ✗ Failed to scrape ${url}:`, error.message);
      }
    }

    if (allDocs.length === 0) {
      console.log("❌ No documents scraped. Exiting.");
      return;
    }

    const totalChars = allDocs.reduce((sum, doc) => sum + doc.pageContent.length, 0);
    console.log(`📊 Scraped ${allDocs.length} documents (${totalChars.toLocaleString()} characters)`);

    // 2. Split into chunks for vector search
    console.log("✂️  Splitting into chunks...");
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 150,
    });
    const chunks = await splitter.splitDocuments(allDocs);
    console.log(`✅ Created ${chunks.length} chunks`);

    // 3. Supabase Setup
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase credentials missing in .env.local");
    }

    const client = createClient(supabaseUrl, supabaseKey);
    
    // Clear existing documents before inserting new ones
    console.log("🗑️  Clearing existing documents...");
    await client.from('documents').delete().neq('id', 0); // Delete all
    console.log("✅ Database cleared");

    // 4. OpenAI Embeddings
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // 5. Store Vectors in batches to avoid timeouts
    console.log("💾 Storing vectors in Supabase...");
    const batchSize = 500; // Process 500 chunks at a time
    const totalBatches = Math.ceil(chunks.length / batchSize);
    
    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      const currentBatch = Math.floor(i / batchSize) + 1;
      
      console.log(`  Processing batch ${currentBatch}/${totalBatches}...`);
      await SupabaseVectorStore.fromDocuments(batch, embeddings, {
        client,
        tableName: "documents",
        queryName: "match_documents",
      });
    }
    console.log("✅ All vectors stored successfully!");
  } catch (error) {
    console.error("❌ Error during ingestion:", error);
    throw error;
  }
}

ingest().then(() => {
  console.log("🎉 Ingestion complete!");
}).catch((error) => {
  console.error("💥 Ingestion failed:", error);
  process.exit(1);
});
