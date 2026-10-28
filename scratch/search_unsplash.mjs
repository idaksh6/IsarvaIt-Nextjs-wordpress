import https from 'https';

async function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results?.map(r => ({
            id: r.id,
            description: r.alt_description || r.description,
            small: r.urls?.small,
            regular: r.urls?.regular
          })) || []);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  console.log('--- Custom Software / Corporate Conference ---');
  const softwareResults = await searchUnsplash('corporate meeting conference room glass modern');
  softwareResults.slice(0, 5).forEach((r, i) => {
    console.log(`[${i}] ${r.id}: ${r.description} -> ${r.small}`);
  });

  console.log('\n--- AI Robot / Futuristic Glowing Robot ---');
  const aiResults = await searchUnsplash('ai robot glowing blue futuristic');
  aiResults.slice(0, 5).forEach((r, i) => {
    console.log(`[${i}] ${r.id}: ${r.description} -> ${r.small}`);
  });
})();
