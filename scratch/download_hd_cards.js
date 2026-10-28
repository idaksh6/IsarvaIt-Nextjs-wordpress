const fs = require('fs');
const https = require('https');
const path = require('path');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  const targets = [
    {
      // 1. Two laptops on modern desk displaying responsive website UI / web applications
      url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=85',
      name: 'hero-card-website-hd.jpg'
    },
    {
      // Alternate laptop web design:
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85',
      name: 'hero-card-website-alt.jpg'
    },
    {
      // 2. Business colleagues / custom software discussion at modern conference table
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85',
      name: 'hero-card-software-hd.jpg'
    },
    {
      // Alternate custom software meeting:
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85',
      name: 'hero-card-software-alt.jpg'
    },
    {
      // 3. Cute 3D AI Robot / futuristic AI mascot in modern tech laboratory with glowing lights
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85',
      name: 'hero-card-ai-abstract.jpg'
    },
    {
      // AI digital intelligence / neural network 3D:
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85',
      name: 'hero-card-ai-hd.jpg'
    }
  ];

  for (const t of targets) {
    const dest = path.join('f:/IsarvaIt-Nextjs-wordpress/public/images', t.name);
    try {
      await download(t.url, dest);
      console.log('Downloaded:', t.name, fs.statSync(dest).size, 'bytes');
    } catch (e) {
      console.error('Error downloading:', t.name, e.message);
    }
  }
}

run();
