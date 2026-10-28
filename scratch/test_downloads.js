const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

(async () => {
  try {
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Emma_M%C3%A6rsk_%28ship%2C_2006%29_02.jpg/800px-Emma_M%C3%A6rsk_%28ship%2C_2006%29_02.jpg', 'public/images/test_ship.jpg');
    console.log('Ship downloaded');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Semi-trailer_trucks%2C_Rostock_Port%2C_2019_%2801%29.jpg/800px-Semi-trailer_trucks%2C_Rostock_Port%2C_2019_%2801%29.jpg', 'public/images/test_trucks.jpg');
    console.log('Trucks downloaded');
  } catch (e) {
    console.error(e.message);
  }
})();
