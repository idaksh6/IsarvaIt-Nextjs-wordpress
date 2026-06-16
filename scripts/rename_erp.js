const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    const fullPath = path.join(__dirname, '..', filePath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content;
        for (const [search, replace] of replacements) {
            newContent = newContent.replace(search, replace);
        }
        if (content !== newContent) {
            fs.writeFileSync(fullPath, newContent, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
}

try {
  const oldFolder = path.join(__dirname, '../src/app/product/isarva-erp');
  const newFolder = path.join(__dirname, '../src/app/product/erp-software');
  if (fs.existsSync(oldFolder)) {
      fs.renameSync(oldFolder, newFolder);
      console.log('Renamed folder src/app/product/isarva-erp to erp-software');
  }
} catch(e) { console.log(e.message); }

try {
  const oldFile = path.join(__dirname, '../src/app/product/erp-software/IsarvaErpClient.jsx');
  const newFile = path.join(__dirname, '../src/app/product/erp-software/ErpSoftwareClient.jsx');
  if (fs.existsSync(oldFile)) {
      fs.renameSync(oldFile, newFile);
      console.log('Renamed IsarvaErpClient.jsx to ErpSoftwareClient.jsx');
  }
} catch(e) { console.log(e.message); }

try {
  const oldPublic = path.join(__dirname, '../public/products/isarva-erp');
  const newPublic = path.join(__dirname, '../public/products/erp-software');
  if (fs.existsSync(oldPublic)) {
      fs.renameSync(oldPublic, newPublic);
      console.log('Renamed public folder public/products/isarva-erp');
  }
} catch(e) { console.log(e.message); }

replaceInFile('src/app/product/erp-software/page.js', [
  [/IsarvaErp/g, 'ErpSoftware'],
  [/isarva-erp/g, 'erp-software'],
  [/ISARVA ERP/g, 'ERP Software']
]);

replaceInFile('src/app/product/erp-software/ErpSoftwareClient.jsx', [
  [/IsarvaErp/g, 'ErpSoftware'],
  [/isarva-erp/g, 'erp-software'],
  [/Isarva ERP/g, 'ERP Software'],
  [/ISARVA ERP/g, 'ERP Software'],
  [/iSARVA ERP/g, 'ERP Software']
]);
