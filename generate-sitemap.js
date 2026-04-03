/**
 * MEGA Sitemap Index + Sub-Sitemaps
 * Kullanım: node generate-sitemap.js
 */

const fs = require('fs');
const baseUrl = 'https://safaklazer.com.tr';
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
  'insaat','asansor','mobilya','beyaz-esya','otomotiv','gida-makinalari',
  'tarim-makinalari','savunma-sanayi','enerji','hvac-iklimlendirme',
  'aydinlatma','reklam-tabela','dekorasyon','denizcilik','medikal',
  'elektronik','makine-imalat','dis-cephe-kaplama','celik-konstruksiyon','pano-imalat'
];

// Sektör x hizmet uyumu
const sectorServices = {
  'insaat': services,
  'asansor': services,
  'mobilya': ['lazer-kesim','kaynakli-imalat','cnc-bukum'],
  'beyaz-esya': ['lazer-kesim','cnc-bukum'],
  'otomotiv': ['lazer-kesim','kaynakli-imalat','cnc-bukum'],
  'gida-makinalari': ['lazer-kesim','kaynakli-imalat'],
  'tarim-makinalari': ['lazer-kesim','kaynakli-imalat','cnc-plazma'],
  'savunma-sanayi': ['lazer-kesim','kaynakli-imalat'],
  'enerji': ['lazer-kesim','kaynakli-imalat'],
  'hvac-iklimlendirme': ['lazer-kesim','cnc-bukum'],
  'aydinlatma': ['lazer-kesim','cnc-bukum'],
  'reklam-tabela': ['lazer-kesim','cnc-bukum'],
  'dekorasyon': ['lazer-kesim','cnc-bukum'],
  'denizcilik': ['lazer-kesim','kaynakli-imalat'],
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
// HELPER: XML generation
// ═══════════════════════════════════════

function urlEntry(route) {
  return `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>\n`;
}

function wrapUrlset(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('')}</urlset>\n`;
}

// ═══════════════════════════════════════
// ROUTE GENERATION PER SUB-SITEMAP
// ═══════════════════════════════════════

const allRoutes = new Set();
const counts = {};
function count(label, n) { counts[label] = (counts[label] || 0) + n; }

// --- sitemap-main.xml: static pages + 4 hizmet pages ---
const mainRoutes = [];
['/', '/about', '/contact'].forEach(p => mainRoutes.push(p));
count('Statik', 3);
services.forEach(s => mainRoutes.push(`/hizmetler/${s}`));
count('Hizmet sayfaları', services.length);
mainRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-hizmet.xml: long-tail + additional services + bilgi pages ---
const hizmetRoutes = [];
longtails.forEach(lt => hizmetRoutes.push(`/hizmet/${lt}`));
count('Long-tail + Malzeme', longtails.length);
additionalServices.forEach(s => hizmetRoutes.push(`/hizmet/${s}`));
count('Ek hizmetler', additionalServices.length);
infoPages.forEach(ip => hizmetRoutes.push(`/bilgi/${ip}`));
count('Bilgi/Teklif/Fason', infoPages.length);
hizmetRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-urun.xml: product pages ---
const urunRoutes = [];
products.forEach(p => urunRoutes.push(`/urun/${p}`));
count('Ürün', products.length);
urunRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-sektor.xml: sector x service pages ---
const sektorRoutes = [];
let sxh = 0;
sectors.forEach(sector => {
  (sectorServices[sector] || services).forEach(srv => {
    sektorRoutes.push(`/sektor/${sector}-${srv}`);
    sxh++;
  });
});
count('Sektör x Hizmet', sxh);
sektorRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-istanbul.xml: Istanbul district x service pages ---
const istanbulRoutes = [];
services.forEach(s => istDistricts.forEach(d => istanbulRoutes.push(`/${s}/${d}`)));
count('Hizmet x İstanbul İlçe', services.length * istDistricts.length);
istanbulRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-marmara-sehir.xml: Marmara city x service pages ---
const marmaraSehirRoutes = [];
services.forEach(s => cities.forEach(c => marmaraSehirRoutes.push(`/${s}-${c}`)));
count('Hizmet x Marmara Şehir', services.length * cities.length);
marmaraSehirRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-marmara-ilce.xml: Marmara district x service pages ---
const marmaraIlceRoutes = [];
services.forEach(s => {
  Object.entries(mDistricts).forEach(([city, districts]) => {
    districts.forEach(d => marmaraIlceRoutes.push(`/${s}/${city}/${d}`));
  });
});
count('Hizmet x Marmara İlçe', services.length * allMD.length);
marmaraIlceRoutes.forEach(r => allRoutes.add(r));

// --- sitemap-sektor-bolge.xml: sector x location pages ---
const sektorBolgeRoutes = [];
// Sektör x İstanbul İlçe
let sxi = 0;
sectors.forEach(sector => {
  istDistricts.forEach(d => {
    sektorBolgeRoutes.push(`/sektor/${sector}/${d}`);
    sxi++;
  });
});
count('Sektör x İstanbul İlçe', sxi);

// Sektör x Marmara Şehir
let sxc = 0;
sectors.forEach(sector => {
  cities.forEach(c => {
    sektorBolgeRoutes.push(`/sektor/${sector}-${c}`);
    sxc++;
  });
});
count('Sektör x Marmara Şehir', sxc);

// Sektör x Marmara İlçe
let sxmd = 0;
sectors.forEach(sector => {
  allMD.forEach(d => {
    sektorBolgeRoutes.push(`/sektor/${sector}/${d}`);
    sxmd++;
  });
});
count('Sektör x Marmara İlçe', sxmd);
sektorBolgeRoutes.forEach(r => allRoutes.add(r));

// ═══════════════════════════════════════
// WRITE SUB-SITEMAPS
// ═══════════════════════════════════════

const subSitemaps = [
  { name: 'sitemap-main.xml', routes: mainRoutes },
  { name: 'sitemap-hizmet.xml', routes: hizmetRoutes },
  { name: 'sitemap-urun.xml', routes: urunRoutes },
  { name: 'sitemap-sektor.xml', routes: sektorRoutes },
  { name: 'sitemap-istanbul.xml', routes: istanbulRoutes },
  { name: 'sitemap-marmara-sehir.xml', routes: marmaraSehirRoutes },
  { name: 'sitemap-marmara-ilce.xml', routes: marmaraIlceRoutes },
  { name: 'sitemap-sektor-bolge.xml', routes: sektorBolgeRoutes },
];

subSitemaps.forEach(sm => {
  const entries = sm.routes.map(r => urlEntry(r));
  fs.writeFileSync(`src/${sm.name}`, wrapUrlset(entries));
  console.log(`  ${sm.name.padEnd(30)} ${String(sm.routes.length).padStart(6)} URLs`);
});

// ═══════════════════════════════════════
// WRITE SITEMAP INDEX
// ═══════════════════════════════════════

let indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
subSitemaps.forEach(sm => {
  indexXml += `  <sitemap>\n    <loc>${baseUrl}/${sm.name}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>\n`;
});
indexXml += '</sitemapindex>\n';
fs.writeFileSync('src/sitemap.xml', indexXml);

// ═══════════════════════════════════════
// WRITE PRERENDER FILES
// ═══════════════════════════════════════

const allRoutesArr = [...allRoutes];
fs.writeFileSync('prerender-routes.txt', allRoutesArr.join('\n'));
fs.writeFileSync('prerender-routes.json', JSON.stringify(allRoutesArr, null, 2));

// ═══════════════════════════════════════
// RAPOR
// ═══════════════════════════════════════

console.log(`\n${'='.repeat(55)}`);
console.log(`  KUZEY SAFAK LAZER - MEGA PROGRAMMATIC SEO`);
console.log(`${'='.repeat(55)}\n`);

let total = 0;
Object.entries(counts).forEach(([key, val]) => {
  console.log(`  ${key.padEnd(35)} ${String(val).padStart(6)}`);
  total += val;
});
console.log(`  ${'-'.repeat(41)}`);
console.log(`  ${'TOPLAM (hesaplanan)'.padEnd(35)} ${String(total).padStart(6)}`);
console.log(`  ${'TOPLAM (dedupe sonrasi)'.padEnd(35)} ${String(allRoutesArr.length).padStart(6)}`);
console.log(`\n  Sitemap index: ${subSitemaps.length} sub-sitemaps`);
console.log(`  Prerender route: ${allRoutesArr.length}\n`);
