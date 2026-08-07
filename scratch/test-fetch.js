const cheerio = require('cheerio');

async function scrape() {
  const res = await fetch('https://rdltech.in/data-logger-iiot-4-0-1');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const content = [];
  $('h1, h2, h3, h4, p, li').each((i, el) => {
    content.push($(el).text().trim());
  });

  const images = [];
  $('img').each((i, el) => {
    images.push($(el).attr('src'));
  });

  console.log("=== CONTENT ===");
  console.log(content.filter(t => t.length > 0).join('\n'));
  console.log("=== IMAGES ===");
  console.log(images.filter(src => src).join('\n'));
}
scrape().catch(console.error);
