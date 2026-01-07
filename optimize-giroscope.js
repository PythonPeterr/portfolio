const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/projects/giroscope/giroscope.png');
const outputPath = path.join(__dirname, 'public/images/projects/giroscope/cover.webp');

sharp(inputPath)
  .resize(1920, null, {
    fit: 'inside',
    withoutEnlargement: true
  })
  .webp({ quality: 85 })
  .toFile(outputPath)
  .then(() => {
    console.log('✅ Successfully optimized giroscope.png → cover.webp');
  })
  .catch((error) => {
    console.error('❌ Error:', error.message);
  });

