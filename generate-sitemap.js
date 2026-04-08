/**
 * Single Sitemap Generator
 * Kullanım: node generate-sitemap.js
 */

const fs = require('fs');
const baseUrl = 'https://hemenlazerkesim.com';
const lastmod = new Date().toISOString().split('T')[0] + 'T00:00:00Z';

const services = ['lazer-kesim', 'kaynakli-imalat', 'cnc-bukum', 'cnc-plazma'];

// İstanbul 39 ilçe
const istDistricts = [
  'arnavutkoy','avcilar','bagcilar','bahcelievler','bakirkoy','basaksehir','bayrampasa',
  'besiktas','beylikduzu','beyoglu','buyukcekmece','catalca','esenler','esenyurt',
  'eyupsultan','fatih','gaziosmanpasa','gungoren','kagithane','kucukcekmece','sariyer',
  'silivri','sultanbeyli','sultangazi','sisli','zeytinburnu','adalar','atasehir','beykoz',
  'cekmekoy','kadikoy','kartal','maltepe','pendik','sancaktepe','sile','tuzla','umraniye','uskudar'
];

// Marmara 10 şehir
const cities = ['kocaeli','bursa','tekirdag','edirne','kirklareli','sakarya','yalova','balikesir','canakkale','bilecik'];

// Marmara ilçeleri
const mDistricts = {
  kocaeli: ['gebze','darica','cayirova','dilovasi','korfez','derince','izmit','kartepe','basiskele','golcuk','kandira','karamursel'],
  bursa: ['osmangazi','yildirim','nilufer','gemlik','inegol','mustafakemalpasa','mudanya','gursu','kestel','orhangazi','karacabey','iznik','yenisehir'],
  tekirdag: ['suleymanpasa','corlu','cerkezkoy','ergene','kapakli','saray-tekirdag','malkara','hayrabolu','sarkoy','muratli','marmaraereglisi'],
  edirne: ['edirne-merkez','kesan','uzunkopru','ipsala','havsa','enez','lalapasa','meric','suloglu'],
  kirklareli: ['kirklareli-merkez','luleburgaz','babaeski','vize','pinarhisar','demirkoy','pehlivankoy','kofcaz'],
  sakarya: ['adapazari','serdivan','erenler','arifiye','hendek','akyazi','geyve','pamukova','sapanca','kaynarca','ferizli','sogutlu','tarakli','karapurcek','kocaali','karasu'],
  yalova: ['yalova-merkez','ciftlikkoy','altinova','cinarcik','armutlu','termal'],
  balikesir: ['altieylul','karesi','bandirma','edremit-balikesir','gonen','erdek','ayvalik','burhaniye','susurluk','bigadic','sindirgi','dursunbey','ivrindi','manyas','havran','gomec'],
  canakkale: ['canakkale-merkez','biga','can','gelibolu','ezine','ayvacik','bayramic','lapseki','yenice','eceabat','gokceada','bozcaada'],
  bilecik: ['bilecik-merkez','bozuyuk','sogut','osmaneli','pazaryeri','golpazari','inhisar','yenipazar-bilecik']
};

// Tüm Marmara ilçeleri düz liste
const allMD = [];
Object.entries(mDistricts).forEach(([city, ds]) => ds.forEach(d => allMD.push(d)));

// 20 sektör
const sectors = [
  'insaat','asansor','mobilya','beyaz-esya','otomotiv','gida-makineleri',
  'savunma-sanayi','enerji','dekorasyon','tarim-makineleri',
  'hvac-iklimlendirme','aydinlatma','reklam-tabela','medikal','denizcilik',
  'elektronik','makine-imalat','dis-cephe-kaplama','celik-konstruksiyon','pano-imalat'
];

// Sektör x hizmet uyumu
const sectorServices = {
  'insaat': services,
  'asansor': services,
  'mobilya': ['lazer-kesim','kaynakli-imalat','cnc-bukum'],
  'beyaz-esya': ['lazer-kesim','cnc-bukum'],
  'otomotiv': ['lazer-kesim','kaynakli-imalat','cnc-bukum'],
  'gida-makineleri': ['lazer-kesim','kaynakli-imalat'],
  'savunma-sanayi': ['lazer-kesim','kaynakli-imalat'],
  'enerji': ['lazer-kesim','kaynakli-imalat'],
  'dekorasyon': ['lazer-kesim','cnc-bukum'],
  'tarim-makineleri': ['lazer-kesim','kaynakli-imalat','cnc-plazma'],
  'hvac-iklimlendirme': ['lazer-kesim','cnc-bukum'],
  'denizcilik': ['lazer-kesim','kaynakli-imalat'],
  'aydinlatma': ['lazer-kesim','cnc-bukum'],
  'reklam-tabela': ['lazer-kesim','cnc-bukum'],
  'medikal': ['lazer-kesim'],
  'elektronik': ['lazer-kesim','cnc-bukum'],
  'makine-imalat': ['lazer-kesim','kaynakli-imalat','cnc-plazma'],
  'dis-cephe-kaplama': ['lazer-kesim','cnc-bukum'],
  'celik-konstruksiyon': ['lazer-kesim','kaynakli-imalat','cnc-plazma'],
  'pano-imalat': ['lazer-kesim','cnc-bukum','kaynakli-imalat']
};

// Long-tail
const longtails = [
  'paslanmaz-celik-lazer-kesim','aluminyum-lazer-kesim','siyah-sac-lazer-kesim',
  'galvaniz-sac-lazer-kesim','ince-sac-lazer-kesim','kalin-sac-lazer-kesim',
  'sac-bukum-fiyatlari','paslanmaz-celik-bukum','kalin-plaka-plazma-kesim',
  'paslanmaz-celik-kaynak','celik-konstruksiyon-imalat',
  'bakir-lazer-kesim','pirinc-lazer-kesim','hardox-lazer-kesim',
  'dkp-sac-lazer-kesim','hrp-sac-lazer-kesim','baklavali-sac-lazer-kesim',
  'gozyasi-sac-lazer-kesim','st37-sac-lazer-kesim','st52-sac-lazer-kesim',
  '304-paslanmaz-lazer-kesim','316-paslanmaz-lazer-kesim','430-paslanmaz-lazer-kesim',
  'titanyum-lazer-kesim','corten-celik-lazer-kesim',
  'aluminyum-bukum','siyah-sac-bukum','galvaniz-sac-bukum','bakir-bukum','hardox-bukum',
  'paslanmaz-celik-plazma-kesim','kalin-sac-plazma-kesim','hardox-plazma-kesim','st52-plazma-kesim',
  'aluminyum-kaynak','celik-konstruksiyon-kaynak','lazer-kaynak','corten-celik-kaynak'
];

const additionalServices = [
  'dekoratif-lazer-kesim','metal-harf-lazer-kesim','hassas-lazer-kesim',
  'buyuk-ebat-lazer-kesim','seri-uretim-lazer-kesim',
  'paslanmaz-celik-imalat','pano-govde-imalat','makine-govdesi-imalat',
  'tank-depo-imalat','havalandirma-kanali-imalat','raf-sistemi-imalat',
  'merdiven-imalat','korkuluk-imalat','konveyor-sistemi-imalat',
  'sac-markalama-lazer','4-metre-abkant-bukum','prototip-uretim','ozel-parca-imalat'
];

const products = [
  'dkp-sac','hrp-sac','paslanmaz-celik-sac','galvaniz-sac','aluminyum-sac',
  'st37-sac','st52-sac','hardox-sac','baklavali-sac','gozyasi-sac',
  'corten-sac','bakir-sac','pirinc-sac','delikli-sac',
  'kare-profil','dikdortgen-profil','celik-boru','paslanmaz-celik-boru'
];

const infoPages = [
  'cnc-lazer-kesim-nedir','fiber-lazer-kesim-nedir','plazma-kesim-nedir',
  'plazma-kesim-nasil-yapilir','lazer-kesim-nasil-yapilir','sac-bukum-nasil-yapilir',
  'tig-kaynak-nedir','mig-kaynak-nedir','lazer-kaynak-nedir',
  'lazer-kesim-plazma-kesim-farki','fiber-lazer-co2-lazer-farki','tig-mig-kaynak-farki',
  'abkant-pres-nedir','hardox-nedir','dkp-sac-nedir','hrp-sac-nedir',
  'st37-st52-farki','galvaniz-sac-nedir','corten-celik-nedir',
  'lazer-kesim-toleranslari','lazer-kesim-dosya-formatlari',
  'sac-bukum-hesaplama','metal-kesim-yontemleri','kaynak-cesitleri-yontemleri',
  'fason-lazer-kesim-istanbul','fason-sac-bukum-istanbul',
  'fason-plazma-kesim-istanbul','fason-kaynak-imalat-istanbul',
  'lazer-kesim-teklif-al','sac-bukum-teklif-al','plazma-kesim-teklif-al','kaynak-imalat-teklif-al'
];

// ═══════════════════════════════════════
// COLLECT ALL ROUTES
// ═══════════════════════════════════════

const allRoutes = new Set();
const counts = {};
function count(label, n) { counts[label] = (counts[label] || 0) + n; }

// Static pages + 4 hizmet pages
['/', '/about', '/contact'].forEach(p => allRoutes.add(p));
count('Statik', 3);
services.forEach(s => allRoutes.add(`/hizmetler/${s}`));
count('Hizmet sayfaları', services.length);

// Long-tail + additional services + bilgi pages
longtails.forEach(lt => allRoutes.add(`/hizmet/${lt}`));
count('Long-tail + Malzeme', longtails.length);
additionalServices.forEach(s => allRoutes.add(`/hizmet/${s}`));
count('Ek hizmetler', additionalServices.length);
infoPages.forEach(ip => allRoutes.add(`/bilgi/${ip}`));
count('Bilgi/Teklif/Fason', infoPages.length);

// Product pages
products.forEach(p => allRoutes.add(`/urun/${p}`));
count('Ürün', products.length);

// Sector x service pages
let sxh = 0;
sectors.forEach(sector => {
  (sectorServices[sector] || services).forEach(srv => {
    allRoutes.add(`/sektor/${sector}-${srv}`);
    sxh++;
  });
});
count('Sektör x Hizmet', sxh);

// Istanbul district x service pages
services.forEach(s => istDistricts.forEach(d => allRoutes.add(`/${s}/${d}`)));
count('Hizmet x İstanbul İlçe', services.length * istDistricts.length);

// Marmara city x service pages
services.forEach(s => cities.forEach(c => allRoutes.add(`/${s}-${c}`)));
count('Hizmet x Marmara Şehir', services.length * cities.length);

// Marmara district x service pages
services.forEach(s => {
  Object.entries(mDistricts).forEach(([city, districts]) => {
    districts.forEach(d => allRoutes.add(`/${s}/${city}/${d}`));
  });
});
count('Hizmet x Marmara İlçe', services.length * allMD.length);

// Sector x location pages
// Sektör x İstanbul İlçe
let sxi = 0;
sectors.forEach(sector => {
  istDistricts.forEach(d => {
    allRoutes.add(`/sektor/${sector}/${d}`);
    sxi++;
  });
});
count('Sektör x İstanbul İlçe', sxi);

// Sektör x Marmara Şehir
let sxc = 0;
sectors.forEach(sector => {
  cities.forEach(c => {
    allRoutes.add(`/sektor/${sector}-${c}`);
    sxc++;
  });
});
count('Sektör x Marmara Şehir', sxc);

// Sektör x Marmara İlçe
let sxmd = 0;
sectors.forEach(sector => {
  allMD.forEach(d => {
    allRoutes.add(`/sektor/${sector}/${d}`);
    sxmd++;
  });
});
count('Sektör x Marmara İlçe', sxmd);

// ═══════════════════════════════════════
// WRITE SINGLE SITEMAP.XML
// ═══════════════════════════════════════

const allRoutesArr = [...allRoutes];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
allRoutesArr.forEach(route => {
  xml += `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>\n`;
});
xml += '</urlset>\n';
fs.writeFileSync('src/sitemap.xml', xml);

// ═══════════════════════════════════════
// WRITE PRERENDER FILES
// ═══════════════════════════════════════

fs.writeFileSync('prerender-routes.txt', allRoutesArr.join('\n'));
fs.writeFileSync('prerender-routes.json', JSON.stringify(allRoutesArr, null, 2));

// ═══════════════════════════════════════
// RAPOR
// ═══════════════════════════════════════

console.log(`\n${'='.repeat(55)}`);
console.log(`  KUZEY SAFAK LAZER - SINGLE SITEMAP`);
console.log(`${'='.repeat(55)}\n`);

let total = 0;
Object.entries(counts).forEach(([key, val]) => {
  console.log(`  ${key.padEnd(35)} ${String(val).padStart(6)}`);
  total += val;
});
console.log(`  ${'-'.repeat(41)}`);
console.log(`  ${'TOPLAM (hesaplanan)'.padEnd(35)} ${String(total).padStart(6)}`);
console.log(`  ${'TOPLAM (dedupe sonrasi)'.padEnd(35)} ${String(allRoutesArr.length).padStart(6)}`);
console.log(`\n  Single sitemap.xml: ${allRoutesArr.length} URLs`);
console.log(`  Prerender route: ${allRoutesArr.length}\n`);
