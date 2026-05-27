const fs = require('fs');
const path = require('path');

const dir = 'src/app/service/[slug]';
const newDir = path.join(dir, 'website-maintenance-amc');

// rename file back if it exists as a file
const badFile = path.join(dir, 'website-maintenance-amc');
if (fs.existsSync(badFile) && fs.statSync(badFile).isFile()) {
  fs.renameSync(badFile, path.join(dir, 'WebsiteMaintenanceFAQ.jsx'));
}

// create folder
if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir);
}

// move files
const filesToMove = [
  'WebsiteMaintenanceFAQ.jsx',
  'WebsiteMaintenanceHeadaches.jsx',
  'WebsiteMaintenanceProcess.jsx',
  'WebsiteMaintenanceServices.jsx',
  'WebsiteMaintenanceCaseStudies.jsx'
];

filesToMove.forEach(file => {
  const oldPath = path.join(dir, file);
  const newPath = path.join(newDir, file);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
});
console.log('done');
