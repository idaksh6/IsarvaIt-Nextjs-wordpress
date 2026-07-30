const fs = require('fs');

function getJpegSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  let i = 4;
  while (i < buffer.length) {
    const marker = buffer.readUInt16BE(i);
    i += 2;
    if (marker === 0xFFC0 || marker === 0xFFC2) {
      // SOF0 or SOF2
      i += 3; // skip length and precision
      const height = buffer.readUInt16BE(i);
      i += 2;
      const width = buffer.readUInt16BE(i);
      return { width, height };
    } else {
      const length = buffer.readUInt16BE(i);
      i += length;
    }
  }
  throw new Error("Not a valid JPEG or SOF marker not found");
}

try {
  const size = getJpegSize('public/products/whatsapp-crm/analytics.jpg');
  console.log('Size:', size);
} catch (e) {
  console.error(e);
}
