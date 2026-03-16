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
    
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(currentUrl, { signal: controller.signal });
      clearTimeout(timeout);
      
      const html = await response.text();
      const $ = cheerio.load(html);
      
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
          }
        }
      });
    } catch (error) {
      // Failed to crawl
    }
  }
  
  return Array.from(allUrls);
}

async function ingest() {
  const baseUrl = process.env.WEBSITE_URL || "http://localhost:3000";

  try {
    // 1. Discover all URLs on the website
    const urls = await discoverUrls(baseUrl);

    // 2. Load data from all discovered URLs
    const allDocs = [];
    
    for (const url of urls) {
      try {
        const loader = new CheerioWebBaseLoader(url, {
          selector: "body",
        });

        // Add timeout for loading
        const loadPromise = loader.load();
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 15000)
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
      } catch (error) {
        // Failed to scrape
      }
    }

    if (allDocs.length === 0) {
      return;
    }

    const totalChars = allDocs.reduce((sum, doc) => sum + doc.pageContent.length, 0);

    // 2. Split into chunks for vector search
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 150,
    });
    const chunks = await splitter.splitDocuments(allDocs);

    // 3. Supabase Setup
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase credentials missing in .env.local");
    }

    const client = createClient(supabaseUrl, supabaseKey);
    
    // Clear existing documents before inserting new ones
    await client.from('documents').delete().neq('id', 0); // Delete all

    // 4. OpenAI Embeddings
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // 5. Store Vectors in batches to avoid timeouts
    const batchSize = 500; // Process 500 chunks at a time
    const totalBatches = Math.ceil(chunks.length / batchSize);
    
    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);
      const currentBatch = Math.floor(i / batchSize) + 1;
      
      await SupabaseVectorStore.fromDocuments(batch, embeddings, {
        client,
        tableName: "documents",
        queryName: "match_documents",
      });
    }
  } catch (error) {
    throw error;
  }
}

ingest();
