const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_ROOT = path.join(__dirname, '..', 'src', 'assets', 'images');

const DIRS = [
  'generated', 'services', 'about', 'backgrounds', 'feature',
  'footer', 'showcase', 'slider', 'shapes', 'pattern'
];

let totalBefore = 0;
let totalAfter = 0;
let converted = 0;

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const origSize = fs.statSync(filePath).size;

  try {
    const quality = ext === '.png' ? 82 : 80;
    await sharp(filePath).webp({ quality }).toFile(webpPath);

    const newSize = fs.statSync(webpPath).size;
    const saving = ((1 - newSize / origSize) * 100).toFixed(0);

    totalBefore += origSize;
    totalAfter += newSize;
    converted++;

    const name = path.basename(filePath);
    console.log(`  ${name.padEnd(40)} ${fmt(origSize)} → ${fmt(newSize)} (${saving}% küçüldü)`);

    // Orijinali sil, yerine webp kalsın
    fs.unlinkSync(filePath);
  } catch (e) {
    console.log(`  HATA: ${path.basename(filePath)} - ${e.message}`);
  }
}

function fmt(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + 'KB';
  return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
}

async function processDir(dirName) {
  const dirPath = path.join(IMAGES_ROOT, dirName);
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath)
    .filter(f => /\.(png|jpg|jpeg)$/i.test(f))
    .map(f => path.join(dirPath, f));

  if (!files.length) return;

  console.log(`\n${dirName}/`);
  for (const file of files) {
    await convertFile(file);
  }
}

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  PNG/JPG → WebP Dönüştürme');
  console.log('═══════════════════════════════════════════');

  for (const dir of DIRS) {
    await processDir(dir);
  }

  // Kök dizindeki görseller
  const rootFiles = fs.readdirSync(IMAGES_ROOT)
    .filter(f => /\.(png|jpg|jpeg)$/i.test(f) && fs.statSync(path.join(IMAGES_ROOT, f)).isFile());

  if (rootFiles.length) {
    console.log('\n(kök)');
    for (const f of rootFiles) {
      await convertFile(path.join(IMAGES_ROOT, f));
    }
  }

  console.log('\n═══════════════════════════════════════════');
  console.log(`  Dönüştürülen: ${converted} dosya`);
  console.log(`  Önce: ${fmt(totalBefore)}`);
  console.log(`  Sonra: ${fmt(totalAfter)}`);
  console.log(`  Tasarruf: ${fmt(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);
  console.log('═══════════════════════════════════════════\n');
}

main().catch(console.error);
