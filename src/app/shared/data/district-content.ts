import { District } from './districts';

export interface ServiceTemplate {
  serviceSlug: string;
  serviceName: string;
  serviceNameShort: string;
  metaTemplate: string;
  h1Template: string;
  intro: string;
  whyUs: string[];
  capacity: string;
  cta: string;
}

export const SERVICE_TEMPLATES: ServiceTemplate[] = [
  {
    serviceSlug: 'lazer-kesim',
    serviceName: 'Lazer Kesim',
    serviceNameShort: 'lazer kesim',
    metaTemplate: '{{district}} lazer kesim hizmeti. 2000x6000mm CNC fiber lazer kesim. {{district}} ve çevresine hızlı teslimat. Kuzey Şafak Lazer İkitelli OSB.',
    h1Template: '{{district}} Lazer Kesim Hizmeti',
    intro: `<p><strong>{{district}} lazer kesim</strong> hizmeti arıyorsanız doğru adrestesiniz. Kuzey Şafak Lazer olarak İkitelli OSB'deki tesislerimizde 2000x6000mm CNC fiber lazer kesim makinemiz ile {{district}} bölgesindeki sanayi kuruluşlarına, atölyelere ve imalatçılara profesyonel lazer kesim hizmeti sunuyoruz.</p>
<p>{{district}}'{{districtSuffix}} {{distance}} konumdaki tesislerimize kolayca ulaşabilir, acil siparişlerinizi aynı gün teslim alabilirsiniz. Paslanmaz çelik, siyah sac, alüminyum ve galvanizli sac dahil tüm metal türlerinde 0.5mm'den 25mm'ye kadar hassas lazer kesim yapıyoruz.</p>`,
    whyUs: [
      '2000x6000mm geniş tabla kapasitesi ile büyük parça kesimi',
      'Fiber lazer teknolojisi ile ±0.1mm hassasiyet',
      '{{district}} bölgesine hızlı teslimat imkanı',
      'Fason ve seri üretim lazer kesim hizmeti',
      'DXF/DWG dosyalarınızdan direkt üretime geçiş'
    ],
    capacity: `<ul>
<li><strong>Masa boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Çelik kesim:</strong> 0.5mm - 25mm</li>
<li><strong>Paslanmaz kesim:</strong> 0.5mm - 20mm</li>
<li><strong>Alüminyum kesim:</strong> 0.5mm - 12mm</li>
</ul>`,
    cta: 'Lazer kesim teklifinizi hemen alın. Teknik çiziminizi (DXF, DWG, PDF) bize gönderin, aynı gün fiyat teklifi oluşturalım.'
  },
  {
    serviceSlug: 'kaynakli-imalat',
    serviceName: 'Kaynaklı İmalat',
    serviceNameShort: 'kaynaklı imalat',
    metaTemplate: '{{district}} kaynaklı imalat hizmeti. TIG, MIG ve lazer kaynak ile profesyonel metal imalat. Kuzey Şafak Lazer İkitelli OSB.',
    h1Template: '{{district}} Kaynaklı İmalat Hizmeti',
    intro: `<p><strong>{{district}} kaynaklı imalat</strong> hizmeti için Kuzey Şafak Lazer'i tercih edin. İkitelli OSB'deki tesislerimizde TIG, MIG ve lazer kaynak yöntemleriyle {{district}} bölgesindeki müşterilerimize profesyonel kaynaklı imalat hizmeti veriyoruz.</p>
<p>Küçük ölçekli parça montajından büyük konstrüksiyon projelerine kadar her türlü kaynak ihtiyacınızda yanınızdayız. Lazer kesim ve CNC büküm hizmetlerimizle entegre çalışarak projenizi tek elden, hızlı ve kaliteli şekilde tamamlıyoruz.</p>`,
    whyUs: [
      'TIG, MIG ve lazer kaynak yöntemleri',
      'Lazer kesim + büküm + kaynak entegre üretim',
      '{{district}} ve çevresine hızlı proje teslimatı',
      'Deneyimli kaynak ustalarıyla kaliteli işçilik',
      'Seri üretim ve tek parça imalat'
    ],
    capacity: `<ul>
<li><strong>Kaynak yöntemleri:</strong> TIG, MIG/MAG, Lazer Kaynak</li>
<li><strong>Malzeme:</strong> Çelik, paslanmaz çelik, alüminyum</li>
<li><strong>Proje tipi:</strong> Fason imalat, seri üretim, prototip</li>
</ul>`,
    cta: 'Kaynak imalat projeniz için hemen teklif alın. Teknik çizim veya numunenizi gönderin, projenizi değerlendirelim.'
  },
  {
    serviceSlug: 'cnc-bukum',
    serviceName: 'CNC Büküm',
    serviceNameShort: 'CNC büküm',
    metaTemplate: '{{district}} CNC büküm hizmeti. 4 metre abkant pres ile hassas sac büküm. {{district}} çevresine hızlı teslimat. Kuzey Şafak Lazer.',
    h1Template: '{{district}} CNC Büküm Hizmeti',
    intro: `<p><strong>{{district}} CNC büküm</strong> hizmeti arayan sanayi kuruluşları ve imalatçılar için Kuzey Şafak Lazer en doğru tercih. İkitelli OSB'deki tesislerimizde 4 metre CNC abkant pres makinemiz ile {{district}} bölgesine hızlı ve hassas büküm hizmeti sunuyoruz.</p>
<p>Bakır sacdan 20mm çeliğe kadar hemen hemen her metalin büküm işlemini gerçekleştiriyoruz. CNC kontrol sistemi sayesinde ilk parçadan son parçaya kadar aynı hassasiyeti garanti ediyoruz.</p>`,
    whyUs: [
      '4 metre büküm kapasitesi ile geniş parça desteği',
      'CNC kontrol ile ±0.1mm açısal hassasiyet',
      '{{district}} bölgesine hızlı teslimat',
      'Lazer kesim + büküm kombine hizmette maliyet avantajı',
      '0.5mm - 20mm kalınlık aralığında büküm'
    ],
    capacity: `<ul>
<li><strong>Büküm uzunluğu:</strong> Maksimum 4 metre</li>
<li><strong>Kalınlık aralığı:</strong> 0.5mm - 20mm</li>
<li><strong>Malzeme:</strong> Çelik, paslanmaz, alüminyum, bakır, pirinç</li>
<li><strong>Hassasiyet:</strong> ±0.1mm açısal tolerans</li>
</ul>`,
    cta: 'CNC büküm teklifinizi hemen alın. Teknik çiziminizi bize iletin, aynı gün fiyatlandıralım.'
  },
  {
    serviceSlug: 'cnc-plazma',
    serviceName: 'CNC Plazma Kesim',
    serviceNameShort: 'CNC plazma kesim',
    metaTemplate: '{{district}} CNC plazma kesim hizmeti. 2600x6000mm plazma kesim ile kalın plaka işleme. Kuzey Şafak Lazer İkitelli OSB.',
    h1Template: '{{district}} CNC Plazma Kesim Hizmeti',
    intro: `<p><strong>{{district}} CNC plazma kesim</strong> hizmeti için Kuzey Şafak Lazer'e başvurun. İkitelli OSB'deki tesislerimizde 2600x6000mm CNC plazma kesim makinemiz ile {{district}} ve çevresindeki imalatçılara profesyonel plazma kesim hizmeti veriyoruz.</p>
<p>Özellikle kalın metal plakaların kesilmesinde plazma kesim, hız ve maliyet açısından en verimli yöntemdir. 6mm'den 50mm'ye kadar çelik plakaları CNC kontrollü hassas plazma kesim ile işliyoruz.</p>`,
    whyUs: [
      '2600x6000mm geniş masa kapasitesi',
      '6mm - 50mm arası çelik plaka kesimi',
      '{{district}} bölgesine hızlı teslimat',
      'Lazer kesim ile kombine proje çözümleri',
      'Konstrüksiyon ve ağır sanayi projeleri deneyimi'
    ],
    capacity: `<ul>
<li><strong>Masa boyutu:</strong> 2600 x 6000 mm</li>
<li><strong>Çelik kesim:</strong> 6mm - 50mm</li>
<li><strong>Kesim toleransı:</strong> ±0.5mm</li>
</ul>`,
    cta: 'Plazma kesim projeniz için teklif alın. Plaka kalınlığı ve kesim detaylarını iletin, hızlıca fiyatlandıralım.'
  }
];

export const SERVICE_TEMPLATE_MAP: Record<string, ServiceTemplate> = {};
SERVICE_TEMPLATES.forEach(s => SERVICE_TEMPLATE_MAP[s.serviceSlug] = s);

// İlçeye göre ek ve konum bilgileri
export function getDistrictSuffix(name: string): string {
  const vowels = 'aeıioöuüAEIİOÖUÜ';
  const lastVowel = [...name].reverse().find(c => vowels.includes(c));
  if (!lastVowel) return 'den';
  if ('aıoAIO'.includes(lastVowel)) return 'dan';
  if ('eüöEÜÖ'.includes(lastVowel)) return 'den';
  if ('uU'.includes(lastVowel)) return 'dan';
  if ('iİ'.includes(lastVowel)) return 'den';
  return 'den';
}

export function getDistrictDistance(slug: string): string {
  const close = ['basaksehir', 'bagcilar', 'kucukcekmece', 'bahcelievler', 'gungoren', 'esenler', 'sultangazi', 'gaziosmanpasa', 'bayrampasa', 'arnavutkoy', 'esenyurt', 'avcilar'];
  const medium = ['beylikduzu', 'bakirkoy', 'zeytinburnu', 'fatih', 'eyupsultan', 'kagithane', 'buyukcekmece', 'sisli', 'beyoglu'];
  if (close.includes(slug)) return 'çok yakın';
  if (medium.includes(slug)) return 'yakın';
  return 'kolay ulaşılabilir';
}

export function generateDistrictContent(district: District, template: ServiceTemplate): string {
  const suffix = getDistrictSuffix(district.name);
  const distance = getDistrictDistance(district.slug);

  let content = template.intro
    .replace(/\{\{district\}\}/g, district.name)
    .replace(/\{\{districtSuffix\}\}/g, suffix)
    .replace(/\{\{distance\}\}/g, distance);

  return content;
}

export function generateDistrictMeta(district: District, template: ServiceTemplate): { title: string; description: string } {
  return {
    title: `${district.name} ${template.serviceName} | Kuzey Şafak Lazer`,
    description: template.metaTemplate.replace(/\{\{district\}\}/g, district.name)
  };
}
