const sharp = require('sharp');
const fs = require('fs');

async function process8() {
  // 1. HRMS Software:
  // Let's check if public/images/HRMS_DEMO.png or cand_hrms.jpg is better.
  // We can create a sharp 800x450 16:9 crop:
  await sharp('public/images/HRMS_DEMO.png')
    .resize(800, 450, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 90 })
    .toFile('public/images/product-hrms-software.jpg');
  console.log('Processed HRMS');

  // 2. CRM Software:
  // public/products/crm/CRM-dashboard-v2.png or cand_crm.jpg
  if (fs.existsSync('public/products/crm/CRM-dashboard-v2.png')) {
    await sharp('public/products/crm/CRM-dashboard-v2.png')
      .resize(800, 450, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-crm-software.jpg');
  } else {
    await sharp('scratch/cand_crm.jpg')
      .resize(800, 450, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-crm-software.jpg');
  }
  console.log('Processed CRM');

  // 3. Support Software:
  // public/products/support/Support-dashboard-img-1.jpg or cand_support.jpg
  if (fs.existsSync('public/products/support/Support-dashboard-img-1.jpg')) {
    await sharp('public/products/support/Support-dashboard-img-1.jpg')
      .resize(800, 450, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-support-software.jpg');
  } else {
    await sharp('scratch/cand_support.jpg')
      .resize(800, 450, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-support-software.jpg');
  }
  console.log('Processed Support');

  // 4. BillSoft Software:
  // public/products/billsoft/Billsoft-mockup.png or cand_billsoft.jpg
  if (fs.existsSync('public/products/billsoft/Billsoft-mockup.png')) {
    await sharp('public/products/billsoft/Billsoft-mockup.png')
      .resize(800, 450, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-bill-soft.jpg');
  } else {
    await sharp('scratch/cand_billsoft.jpg')
      .resize(800, 450, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-bill-soft.jpg');
  }
  console.log('Processed BillSoft');

  // 5. Marine Service Software:
  // cand_marine.jpg (stunning cargo container ship at port)
  if (fs.existsSync('scratch/cand_marine.jpg')) {
    await sharp('scratch/cand_marine.jpg')
      .resize(800, 450, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-marine-service-software.jpg');
  }
  console.log('Processed Marine');

  // 6. Dispatcher Panel:
  // cand_dispatcher.jpg (commercial white freight transport truck on highway)
  if (fs.existsSync('scratch/cand_dispatcher.jpg')) {
    await sharp('scratch/cand_dispatcher.jpg')
      .resize(800, 450, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-dispatcher-panel.jpg');
  }
  console.log('Processed Dispatcher');

  // 7. WooCommerce Development:
  // public/products/woocommerce/Woo-commerce-dashboard.jpg
  if (fs.existsSync('public/products/woocommerce/Woo-commerce-dashboard.jpg')) {
    await sharp('public/products/woocommerce/Woo-commerce-dashboard.jpg')
      .resize(800, 450, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-woocommerce-development.jpg');
  } else if (fs.existsSync('public/products/woocommerce/woocommerce-hero-staging.png')) {
    await sharp('public/products/woocommerce/woocommerce-hero-staging.png')
      .resize(800, 450, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-woocommerce-development.jpg');
  }
  console.log('Processed WooCommerce');

  // 8. Mobile App Development:
  // cand_mobile-app.jpg (modern smartphones displaying mobile application)
  if (fs.existsSync('scratch/cand_mobile-app.jpg')) {
    await sharp('scratch/cand_mobile-app.jpg')
      .resize(800, 450, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 90 })
      .toFile('public/images/product-mobile-app-development.jpg');
  }
  console.log('Processed Mobile App');
}

process8().catch(console.error);
