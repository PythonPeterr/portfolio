#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(__dirname, '../public/images');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 85;

async function getImageFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await getImageFiles(fullPath, files);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(inputPath) {
  try {
    const stats = await stat(inputPath);
    const sizeBefore = (stats.size / 1024).toFixed(2);

    // Skip if already optimized (< 150KB)
    if (stats.size < 150 * 1024 && !inputPath.includes('giroscope')) {
      console.log(`✓ Skipping ${inputPath.split('/public/')[1]} (already optimized: ${sizeBefore}KB)`);
      return;
    }

    console.log(`Optimizing ${inputPath.split('/public/')[1]} (${sizeBefore}KB)...`);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if too large
    let pipeline = image;
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convert to WebP for better compression
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await pipeline
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const statsAfter = await stat(outputPath);
    const sizeAfter = (statsAfter.size / 1024).toFixed(2);
    const savings = ((stats.size - statsAfter.size) / stats.size * 100).toFixed(1);

    console.log(`  ✓ Saved ${savings}% (${sizeBefore}KB → ${sizeAfter}KB)`);
    console.log(`  Output: ${outputPath.split('/public/')[1]}\n`);

  } catch (error) {
    console.error(`  ✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log(`Target directory: ${IMAGES_DIR}\n`);

  const imageFiles = await getImageFiles(IMAGES_DIR);
  console.log(`Found ${imageFiles.length} images to process\n`);

  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }

  console.log('✨ Image optimization complete!');
}

main().catch(console.error);
