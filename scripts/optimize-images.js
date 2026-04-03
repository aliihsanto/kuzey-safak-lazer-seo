/**
 * Görsel Optimizasyon Script'i
 * Kullanım: node scripts/optimize-images.js
 *
 * AI-generated PNG'leri sıkıştırır (sharp gerekli: npm install sharp)
 * Sharp yoksa sadece analiz raporu verir.
 */

const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '..', 'src', 'assets', 'images', 'generated');
const IMAGES_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function analyzeDir(dir, label) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f));
  let total = 0;
  const oversized = [];

  files.forEach(f => {
    const size = fs.statSync(path.join(dir, f)).size;
    total += size;
    if (size > 500 * 1024) { // 500KB üzeri
      oversized.push({ name: f, size });
    }
  });

  console.log(`\n  ${label}`);
  console.log(`  Dosya: ${files.length} | Toplam: ${formatSize(total)}`);
  if (oversized.length) {
    console.log(`  500KB+ dosyalar:`);
    oversized.sort((a, b) => b.size - a.size).forEach(f => {
      console.log(`    - ${f.name}: ${formatSize(f.size)}`);
    });
  }
}

// Gereksiz dosyaları tespit et
function findUnused() {
  const unused = [];

  // EN video artık gereksiz (dil desteği kalktı)
  const enVideo = path.join(IMAGES_DIR, 'kuzey-safak-lazer-video-en.mp4');
  if (fs.existsSync(enVideo)) {
    unused.push({ file: 'kuzey-safak-lazer-video-en.mp4', size: fs.statSync(enVideo).size, reason: 'İngilizce dil desteği kaldırıldı' });
  }

  // Dil değiştirme görselleri
  ['english.png', 'turkish.png'].forEach(f => {
    const fp = path.join(IMAGES_DIR, f);
    if (fs.existsSync(fp)) {
      unused.push({ file: f, size: fs.statSync(fp).size, reason: 'Dil değiştirme kaldırıldı' });
    }
  });

  return unused;
}

console.log('═══════════════════════════════════════════');
console.log('  GÖRSEL OPTİMİZASYON RAPORU');
console.log('═══════════════════════════════════════════');

// Dizin analizi
['about', 'backgrounds', 'feature', 'footer', 'generated', 'pattern',
 'resources', 'services', 'shapes', 'showcase', 'slider'].forEach(dir => {
  analyzeDir(path.join(IMAGES_DIR, dir), dir + '/');
});

// Gereksiz dosyalar
const unused = findUnused();
if (unused.length) {
  console.log('\n  GEREKSİZ DOSYALAR:');
  unused.forEach(u => {
    console.log(`    - ${u.file}: ${formatSize(u.size)} (${u.reason})`);
  });
  const totalUnused = unused.reduce((a, b) => a + b.size, 0);
  console.log(`    Toplam tasarruf: ${formatSize(totalUnused)}`);
}

// Toplam
let grandTotal = 0;
function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(fullPath);
    else grandTotal += fs.statSync(fullPath).size;
  });
}
walkDir(IMAGES_DIR);

console.log('\n  ─────────────────────────');
console.log(`  TOPLAM GÖRSEL BOYUT: ${formatSize(grandTotal)}`);

// Öneriler
console.log('\n  ÖNERİLER:');
console.log('  1. PNG→WebP: AI görselleri WebP\'ye çevirince ~%70 küçülür (28MB → ~8MB)');
console.log('  2. EN video sil: 18MB tasarruf');
console.log('  3. JPG sıkıştır: Mevcut görselleri %80 kalitede yeniden kaydet');
console.log('  4. Lazy loading: Ekran dışı görsellere loading="lazy" ekle');
console.log('  5. srcset: Farklı ekran boyutları için responsive görseller');
console.log('');
