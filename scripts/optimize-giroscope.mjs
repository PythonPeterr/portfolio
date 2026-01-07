#!/usr/bin/env node
import sharp from 'sharp';
import { stat } from 'fs/promises';

const inputPath = 'public/images/projects/giroscope/giroscope.png';
const outputPath = 'public/images/projects/giroscope/cover.webp';

async function optimize() {
  try {
    const stats = await stat(inputPath);
    const sizeBefore = (stats.size / 1024).toFixed(2);
    console.log(`Optimizing ${inputPath} (${sizeBefore}KB)...`);

    await sharp(inputPath)
      .resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const statsAfter = await stat(outputPath);
    const sizeAfter = (statsAfter.size / 1024).toFixed(2);
    const savings = ((stats.size - statsAfter.size) / stats.size * 100).toFixed(1);

    console.log(`✓ Saved ${savings}% (${sizeBefore}KB → ${sizeAfter}KB)`);
    console.log(`✓ Output: ${outputPath}`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

optimize();

