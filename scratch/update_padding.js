const fs = require('fs');

// 1. TestimonialsSection.jsx
let testFile = fs.readFileSync('src/app/components/TestimonialsSection.jsx', 'utf8');
if (testFile.includes('className="relative lg:py-20 py-12 overflow-hidden"')) {
  testFile = testFile.replace(
    'className="relative lg:py-20 py-12 overflow-hidden"',
    'className="relative py-8 sm:py-16 lg:py-20 overflow-hidden"'
  );
  fs.writeFileSync('src/app/components/TestimonialsSection.jsx', testFile, 'utf8');
  console.log('Updated TestimonialsSection.jsx');
} else {
  console.log('TestimonialsSection target not found');
}

// 2. BlogSection.jsx
let blogFile = fs.readFileSync('src/app/components/BlogSection.jsx', 'utf8');
if (blogFile.includes('className="py-16 sm:py-20 lg:py-24')) {
  blogFile = blogFile.replace(
    'className="py-16 sm:py-20 lg:py-24',
    'className="py-10 sm:py-20 lg:py-24'
  );
  fs.writeFileSync('src/app/components/BlogSection.jsx', blogFile, 'utf8');
  console.log('Updated BlogSection.jsx');
} else {
  console.log('BlogSection target not found');
}

