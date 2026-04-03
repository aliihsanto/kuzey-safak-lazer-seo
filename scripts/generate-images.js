/**
 * fal.ai Görsel Üretim Script'i
 * Kullanım: node scripts/generate-images.js
 *
 * Kuzey Şafak Lazer sitesi için AI görseller üretir
 * Model: fal-ai/nano-banana-2
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.FAL_API_KEY || '';
const MODEL = 'fal-ai/nano-banana-2';
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'images', 'generated');

// Üretilecek görseller
const IMAGES = [
  // Hizmet hero görselleri
  { name: 'lazer-kesim-hero', prompt: 'Industrial CNC fiber laser cutting machine cutting thick steel plate, bright orange sparks flying, dark factory floor, dramatic lighting, professional industrial photography, wide angle, 16:9' },
  { name: 'kaynakli-imalat-hero', prompt: 'Professional welder performing TIG welding on stainless steel structure, bright blue welding arc, sparks, protective equipment, industrial factory setting, dramatic lighting, 16:9' },
  { name: 'cnc-bukum-hero', prompt: 'Large CNC press brake bending thick metal sheet, hydraulic press machine, industrial factory setting, clean modern machinery, professional photography, 16:9' },
  { name: 'cnc-plazma-hero', prompt: 'CNC plasma cutting machine cutting thick steel plate, bright plasma arc, orange sparks, industrial factory floor, dramatic lighting, wide shot, 16:9' },

  // Malzeme görselleri
  { name: 'paslanmaz-celik', prompt: 'Polished stainless steel sheet metal surface, mirror finish, industrial warehouse, stacked metal sheets, professional product photography, clean lighting' },
  { name: 'aluminyum-sac', prompt: 'Aluminum sheet metal stack in industrial warehouse, bright silver metallic surface, clean factory setting, professional product photography' },
  { name: 'siyah-sac', prompt: 'Stack of black steel sheet metal plates in industrial storage, dark iron surface texture, factory warehouse, professional industrial photography' },
  { name: 'galvaniz-sac', prompt: 'Galvanized steel sheet metal with characteristic crystalline pattern (spangle), stack in warehouse, silver-grey metallic surface, professional photography' },

  // Sektör görselleri
  { name: 'sektor-insaat', prompt: 'Steel construction framework of modern building under construction, red steel beams and columns, construction site, professional architectural photography, wide angle' },
  { name: 'sektor-asansor', prompt: 'Modern elevator cabin interior with brushed stainless steel walls and panels, LED lighting, premium design, professional photography' },
  { name: 'sektor-gida', prompt: 'Stainless steel industrial kitchen equipment, food processing machinery, hygienic metalwork, factory setting, professional photography' },
  { name: 'sektor-enerji', prompt: 'Industrial energy facility with metal pipelines and steel structures, power plant equipment, professional industrial photography, wide angle' },

  // Genel firma görselleri
  { name: 'fabrika-panorama', prompt: 'Modern metal fabrication factory interior panorama, CNC machines, laser cutter, press brake, workers in safety gear, clean organized facility, wide angle, professional' },
  { name: 'kalite-kontrol', prompt: 'Engineer measuring metal part with precision caliper in industrial factory, quality control inspection, close-up, professional photography' },
  { name: 'metal-parcalar', prompt: 'Various precision laser cut metal parts and components laid out on industrial table, different shapes and sizes, clean cuts, professional product photography' },
];

// API çağrısı
function submitRequest(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      prompt: prompt,
      num_images: 1
    });

    const options = {
      hostname: 'queue.fal.run',
      path: `/${MODEL}`,
      method: 'POST',
      headers: {
        'Authorization': `Key ${API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); }
        catch(e) { reject(new Error(`Parse error: ${body}`)); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Sonuç kontrolü
function checkResult(requestId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'queue.fal.run',
      path: `/${MODEL}/requests/${requestId}`,
      method: 'GET',
      headers: {
        'Authorization': `Key ${API_KEY}`
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); }
        catch(e) { reject(new Error(`Parse error: ${body}`)); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

// Görsel indirme
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(filepath, () => {}); reject(err); });
  });
}

// Bekleme
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Tek görsel üretimi
async function generateOne(image, index) {
  console.log(`[${index + 1}/${IMAGES.length}] ${image.name} - İstek gönderiliyor...`);

  const submission = await submitRequest(image.prompt);
  if (!submission.request_id) {
    console.log(`  HATA: ${JSON.stringify(submission)}`);
    return;
  }

  console.log(`  Request ID: ${submission.request_id} - Bekleniyor...`);

  // Poll for result
  let result;
  for (let i = 0; i < 60; i++) {
    await sleep(5000);
    result = await checkResult(submission.request_id);
    if (result.images) break;
    process.stdout.write('.');
  }
  console.log('');

  if (!result.images || !result.images[0]) {
    console.log(`  HATA: Görsel oluşturulamadı`);
    return;
  }

  const imageUrl = result.images[0].url;
  const ext = result.images[0].content_type === 'image/jpeg' ? '.jpg' : '.png';
  const filepath = path.join(OUTPUT_DIR, `${image.name}${ext}`);

  await downloadImage(imageUrl, filepath);
  console.log(`  TAMAM: ${filepath}`);
}

// Ana fonksiyon
async function main() {
  // Klasör oluştur
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`\n=== Kuzey Şafak Lazer - AI Görsel Üretimi ===`);
  console.log(`Model: ${MODEL}`);
  console.log(`Toplam: ${IMAGES.length} görsel`);
  console.log(`Çıktı: ${OUTPUT_DIR}\n`);

  for (let i = 0; i < IMAGES.length; i++) {
    try {
      await generateOne(IMAGES[i], i);
    } catch (err) {
      console.log(`  HATA: ${err.message}`);
    }
    // Rate limit - her istek arası 3sn bekle
    if (i < IMAGES.length - 1) await sleep(3000);
  }

  console.log('\n=== Tamamlandı ===\n');
}

// Tek görsel üretmek için: node scripts/generate-images.js --single lazer-kesim-hero
if (process.argv[2] === '--single') {
  const name = process.argv[3];
  const image = IMAGES.find(i => i.name === name);
  if (image) {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    generateOne(image, 0).catch(console.error);
  } else {
    console.log(`Görsel bulunamadı: ${name}`);
    console.log(`Mevcut görseller: ${IMAGES.map(i => i.name).join(', ')}`);
  }
} else {
  main().catch(console.error);
}
