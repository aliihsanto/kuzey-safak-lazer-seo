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
    intro: `<p><strong>{{district}} lazer kesim</strong> hizmeti arıyorsanız doğru adrestesiniz. Kuzey Şafak Lazer olarak 2010 yılından bu yana İkitelli OSB'deki modern tesislerimizde {{district}} bölgesindeki sanayi kuruluşlarına, atölyelere, imalatçılara ve mühendislik firmalarına yüksek hassasiyetli CNC fiber lazer kesim hizmeti sunuyoruz. 2000x6000mm tabla kapasiteli lazer kesim makinemiz ile küçük prototip parçalardan büyük seri üretim projelerine kadar her ölçekte üretim gerçekleştiriyoruz.</p>

<p>{{district}}'{{districtSuffix}} {{distance}} konumdaki tesislerimiz sayesinde siparişlerinizi hızla teslim ediyoruz. Metal işleme sektöründe lojistik ve teslimat süresi kritik öneme sahiptir; yakın konumdaki bir lazer kesim tedarikçisi ile çalışmak hem nakliye maliyetlerinizi düşürür hem de üretim planlamanızda esneklik sağlar. Acil siparişlerinizi aynı gün teslim ediyor, büyük projeleriniz için 7/24 destek hattımızla sürekli iletişim halinde kalıyoruz. {{district}} ve çevre bölgelerden nakliye ve kurye hizmetimiz ile parçalarınızı kapınıza kadar ulaştırıyoruz.</p>

<p>Teknik altyapımız, piyasadaki en gelişmiş fiber lazer teknolojisine dayanmaktadır. ±0.1mm hassasiyet ile çalışan CNC fiber lazer kesim makinemiz, ince saclardan kalın plakalara kadar geniş bir kalınlık aralığında temiz ve çapaksız kesim sağlar. Paslanmaz çelik, siyah sac (ST37, ST52), alüminyum, galvanizli sac, bakır ve pirinç dahil tüm endüstriyel metallerde 0.5mm'den 25mm'ye kadar kesim yapabiliyoruz. DXF, DWG ve STEP formatındaki teknik çizimlerinizi doğrudan CAM yazılımımıza aktararak en kısa sürede üretime geçiyoruz.</p>

<p>Lazer kesim hizmetimiz pek çok sektöre hitap etmektedir: makine imalat sanayi, otomotiv yan sanayi, inşaat ve çelik konstrüksiyon, asansör sektörü, beyaz eşya, savunma sanayi, gıda makineleri, medikal cihaz üretimi, mobilya ve dekorasyon sektörü ile enerji sistemleri gibi alanlar başlıca hizmet verdiğimiz sektörler arasındadır. {{district}} bölgesindeki imalatçıların farklı sektörel ihtiyaçlarına uygun çözümler üretiyoruz.</p>

<p>Kuzey Şafak Lazer olarak {{district}} bölgesindeki müşterilerimize sadece kesim hizmeti değil, aynı zamanda ücretsiz teknik danışmanlık da sunuyoruz. Projeniz için en uygun malzeme seçimi, kalınlık optimizasyonu ve maliyet tasarrufu konularında deneyimli mühendis kadromuz sizlere yol gösterir. Teklifinizi aynı gün alın, üretim sürecinizi hızlandırın.</p>`,
    whyUs: [
      '2000x6000mm geniş tabla kapasitesi ile büyük parça kesimi',
      'Fiber lazer teknolojisi ile ±0.1mm hassasiyet',
      '{{district}} bölgesine hızlı teslimat imkanı',
      'Fason ve seri üretim lazer kesim hizmeti',
      'DXF/DWG/STEP dosyalarınızdan direkt üretime geçiş',
      '2010\'dan bu yana 15 yılı aşkın sektör deneyimi',
      '7/24 destek hattı ve acil sipariş imkanı',
      'Ücretsiz teknik danışmanlık ve malzeme optimizasyonu',
      'Lazer kesim + büküm + kaynak entegre üretim avantajı',
      'Rekabetçi fiyatlandırma ve esnek ödeme koşulları'
    ],
    capacity: `<ul>
<li><strong>Masa boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Çelik (ST37/ST52) kesim:</strong> 0.5mm - 25mm</li>
<li><strong>Paslanmaz çelik kesim:</strong> 0.5mm - 20mm</li>
<li><strong>Alüminyum kesim:</strong> 0.5mm - 12mm</li>
<li><strong>Galvanizli sac kesim:</strong> 0.5mm - 6mm</li>
<li><strong>Bakır kesim:</strong> 0.5mm - 6mm</li>
<li><strong>Pirinç kesim:</strong> 0.5mm - 8mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.1mm</li>
<li><strong>Tekrarlama hassasiyeti:</strong> ±0.03mm</li>
<li><strong>Desteklenen formatlar:</strong> DXF, DWG, STEP, PDF</li>
</ul>
<h4>İşlenen Malzemeler</h4>
<ul>
<li>Siyah sac (ST37, ST52, S235, S355)</li>
<li>Paslanmaz çelik (304, 316, 430)</li>
<li>Alüminyum (1050, 5754, 6061)</li>
<li>Galvanizli sac (DX51D)</li>
<li>Bakır ve pirinç levha</li>
<li>Hardox ve aşınmaya dayanıklı çelikler</li>
</ul>`,
    cta: 'Lazer kesim teklifinizi hemen alın! Teknik çiziminizi (DXF, DWG, STEP veya PDF) WhatsApp veya e-posta ile gönderin, deneyimli ekibimiz aynı gün fiyat teklifi hazırlasın. İlk siparişinizde ücretsiz teknik danışmanlık hizmetimizden yararlanın.'
  },
  {
    serviceSlug: 'kaynakli-imalat',
    serviceName: 'Kaynaklı İmalat',
    serviceNameShort: 'kaynaklı imalat',
    metaTemplate: '{{district}} kaynaklı imalat hizmeti. TIG, MIG ve lazer kaynak ile profesyonel metal imalat. Kuzey Şafak Lazer İkitelli OSB.',
    h1Template: '{{district}} Kaynaklı İmalat Hizmeti',
    intro: `<p><strong>{{district}} kaynaklı imalat</strong> hizmeti için Kuzey Şafak Lazer'i tercih edin. 2010 yılından bu yana İkitelli OSB'deki tesislerimizde TIG, MIG/MAG ve lazer kaynak yöntemleriyle {{district}} bölgesindeki sanayi kuruluşlarına, makine imalatçılarına ve müteahhitlik firmalarına profesyonel kaynaklı imalat çözümleri sunuyoruz. Küçük ölçekli parça birleştirmeden büyük konstrüksiyon projelerine kadar her boyutta kaynak imalat işlerinizi titizlikle gerçekleştiriyoruz.</p>

<p>{{district}}'{{districtSuffix}} {{distance}} konumdaki Kuzey Şafak Lazer tesislerine kolayca ulaşabilirsiniz. Kaynaklı imalat projelerinde tedarikçi yakınlığı büyük avantaj sağlar: numune onayı için hızlı gidiş-geliş, montaj sırasında anlık revizyon imkanı ve kısa teslimat süreleri projenizin zamanında tamamlanmasını garanti eder. 7/24 destek hattımız sayesinde acil projelerinizde bile gecikmesiz iletişim kurabilirsiniz. Hızlı teslimat politikamız ile {{district}} ve çevre bölgelere aynı gün veya ertesi gün teslimat sağlıyoruz.</p>

<p>Teknik kapasitemiz, farklı kaynak yöntemlerini bir arada sunarak projenize en uygun çözümü belirlememize olanak tanır. İnce saclar ve paslanmaz çelik için TIG (Argon) kaynak, yapısal çelik ve kalın profiller için MIG/MAG kaynak, yüksek hassasiyet gerektiren ince malzemeler için lazer kaynak yöntemimizi kullanıyoruz. Tüm kaynak operasyonlarımız sertifikalı ve deneyimli kaynak ustaları tarafından gerçekleştirilmektedir. Kaynak dikişlerimiz hem görsel hem de yapısal mukavemet açısından endüstri standartlarını karşılamaktadır.</p>

<p>Kaynaklı imalat hizmetimiz; çelik konstrüksiyon, makine şasesi ve gövdesi, endüstriyel tank ve depo imalatı, merdiven ve korkuluk sistemleri, boru hattı montajı, özel metal mobilya, raf sistemleri, otomotiv yan sanayi parçaları, gıda makineleri ve medikal ekipman gibi geniş bir yelpazede {{district}} bölgesindeki müşterilerimize hizmet vermektedir.</p>

<p>Kuzey Şafak Lazer'in en büyük avantajlarından biri, lazer kesim ve CNC büküm hizmetlerini kaynak imalatla entegre sunabilmesidir. Bu sayede projeniz tek elden, koordinasyon sorunu yaşamadan, hızlı ve kaliteli şekilde tamamlanır. {{district}} bölgesinden teknik danışmanlık ve ücretsiz keşif hizmetimizden faydalanarak projenizi hemen başlatabilirsiniz.</p>`,
    whyUs: [
      'TIG, MIG/MAG ve lazer kaynak yöntemleri tek çatı altında',
      'Lazer kesim + CNC büküm + kaynak entegre üretim hattı',
      '{{district}} ve çevresine hızlı proje teslimatı',
      'Sertifikalı ve deneyimli kaynak ustaları kadrosu',
      'Seri üretim, tek parça imalat ve prototip desteği',
      '2010\'dan bu yana 15 yılı aşkın kaynak imalat deneyimi',
      '7/24 destek ve acil proje kabul imkanı',
      'Ücretsiz teknik danışmanlık ve proje değerlendirme',
      'Görsel ve yapısal kalite kontrol süreci',
      'Rekabetçi fiyatlandırma ile maliyet avantajı'
    ],
    capacity: `<ul>
<li><strong>Kaynak yöntemleri:</strong> TIG (Argon), MIG/MAG, Lazer Kaynak</li>
<li><strong>Malzeme kalınlığı:</strong> 0.5mm - 50mm (yönteme göre değişir)</li>
<li><strong>Maksimum parça boyutu:</strong> 6000mm uzunluk kapasitesi</li>
<li><strong>Proje tipi:</strong> Fason imalat, seri üretim, prototip, konstrüksiyon</li>
<li><strong>Yüzey işlem:</strong> Kaynak sonrası taşlama ve düzeltme</li>
<li><strong>Kalite kontrol:</strong> Görsel muayene, boyut kontrolü</li>
</ul>
<h4>İşlenen Malzemeler</h4>
<ul>
<li>Karbon çelik (ST37, ST52, S235, S355)</li>
<li>Paslanmaz çelik (304, 316L, 430)</li>
<li>Alüminyum alaşımları (5754, 6061)</li>
<li>Galvanizli çelik profil ve saclar</li>
<li>Kutu profil, köşebent, lama, boru</li>
<li>Özel alaşımlı çelikler (Hardox, Corten)</li>
</ul>`,
    cta: 'Kaynaklı imalat projeniz için hemen teklif alın! Teknik çizim, 3D model veya numunenizi bize gönderin, deneyimli ekibimiz projenizi aynı gün değerlendirsin. Ücretsiz teknik danışmanlık ve keşif hizmetimizden yararlanın.'
  },
  {
    serviceSlug: 'cnc-bukum',
    serviceName: 'CNC Büküm',
    serviceNameShort: 'CNC büküm',
    metaTemplate: '{{district}} CNC büküm hizmeti. 4 metre abkant pres ile hassas sac büküm. {{district}} çevresine hızlı teslimat. Kuzey Şafak Lazer.',
    h1Template: '{{district}} CNC Büküm Hizmeti',
    intro: `<p><strong>{{district}} CNC büküm</strong> hizmeti arayan sanayi kuruluşları, atölyeler ve imalatçılar için Kuzey Şafak Lazer en doğru tercih. 2010 yılından bu yana İkitelli OSB'deki tesislerimizde 4 metre CNC abkant pres makinemiz ile {{district}} bölgesindeki müşterilerimize yüksek hassasiyetli, hızlı ve kaliteli sac büküm hizmeti sunuyoruz. Tek parça prototipten binlerce adetlik seri üretime kadar her siparişe aynı titizlikte yaklaşıyoruz.</p>

<p>{{district}}'{{districtSuffix}} {{distance}} konumdaki tesislerimize kolayca ulaşabilirsiniz. CNC büküm işlemlerinde tedarikçi yakınlığı özellikle kritiktir: ilk numune onayı, açı ve boyut revizyonları gibi süreçlerde hızlı geri dönüş sağlar ve üretim planlamanızı aksatmaz. {{district}} bölgesine hızlı teslimat imkanımız sayesinde aynı gün sipariş, aynı gün teslim avantajından yararlanabilirsiniz. 7/24 destek hattımız ile acil büküm ihtiyaçlarınızda bile anında çözüm üretiyoruz.</p>

<p>CNC abkant pres makinemiz, bilgisayar kontrollü servo motorlar ve dijital açı ölçüm sistemi sayesinde ±0.1mm açısal hassasiyet ile çalışır. Bu teknoloji, ilk parçadan son parçaya kadar birebir aynı ölçü ve açıyı garanti eder. 0.5mm ince saclardan 20mm kalın çelik plakalara kadar geniş bir malzeme yelpazesinde büküm gerçekleştiriyoruz. Çelik, paslanmaz çelik, alüminyum, bakır ve pirinç gibi farklı metal türlerinde V büküm, U büküm, Z büküm, kutu büküm ve özel profil büküm işlemlerini yapabiliyoruz.</p>

<p>CNC büküm hizmetimiz; havalandırma kanalları, elektrik pano kutuları, makine muhafazaları, asansör kabinleri, beyaz eşya parçaları, aydınlatma armatürleri, raf ve depolama sistemleri, otomotiv yan sanayi parçaları, gıda makineleri kapakları ve dekoratif metal paneller gibi pek çok sektörde {{district}} bölgesindeki imalatçılara çözüm sunmaktadır.</p>

<p>Kuzey Şafak Lazer'in en önemli avantajı lazer kesim ve CNC büküm hizmetlerini aynı çatı altında sunmasıdır. Sacınızı önce lazer ile kesip ardından büküm ile şekillendirerek tek elden, hızlı ve uygun maliyetli üretim yapıyoruz. {{district}} bölgesinden ücretsiz teknik danışmanlık hizmetimizle projenize en uygun büküm çözümünü birlikte belirleyelim.</p>`,
    whyUs: [
      '4 metre büküm kapasitesi ile geniş parça desteği',
      'CNC kontrol ile ±0.1mm açısal hassasiyet garantisi',
      '{{district}} bölgesine aynı gün hızlı teslimat',
      'Lazer kesim + büküm kombine hizmette maliyet avantajı',
      '0.5mm - 20mm kalınlık aralığında geniş malzeme desteği',
      'V, U, Z, kutu ve özel profil büküm kabiliyeti',
      '2010\'dan bu yana 15 yılı aşkın sektör deneyimi',
      '7/24 destek hattı ve acil sipariş kabul',
      'Ücretsiz teknik danışmanlık ve açı optimizasyonu',
      'İlk parçadan son parçaya birebir aynı hassasiyet'
    ],
    capacity: `<ul>
<li><strong>Büküm uzunluğu:</strong> Maksimum 4 metre (4000mm)</li>
<li><strong>Kalınlık aralığı:</strong> 0.5mm - 20mm</li>
<li><strong>Açısal hassasiyet:</strong> ±0.1mm tolerans</li>
<li><strong>Büküm açısı:</strong> 0° - 180° arası</li>
<li><strong>Büküm tipleri:</strong> V büküm, U büküm, Z büküm, kutu büküm, özel profil</li>
<li><strong>Kontrol sistemi:</strong> CNC dijital kontrol + açı ölçüm sensörü</li>
<li><strong>Desteklenen formatlar:</strong> DXF, DWG, STEP, PDF</li>
</ul>
<h4>İşlenen Malzemeler</h4>
<ul>
<li>Siyah sac (ST37, ST52, S235, S355)</li>
<li>Paslanmaz çelik (304, 316, 430)</li>
<li>Alüminyum (1050, 5754, 6061)</li>
<li>Galvanizli sac (DX51D)</li>
<li>Bakır levha</li>
<li>Pirinç levha</li>
<li>Boyalı ve kaplamalı saclar</li>
</ul>`,
    cta: 'CNC büküm teklifinizi hemen alın! Teknik çiziminizi WhatsApp veya e-posta ile iletin, deneyimli ekibimiz aynı gün fiyatlandırsın. Lazer kesim + büküm kombine siparişlerinizde özel fiyat avantajından yararlanın.'
  },
  {
    serviceSlug: 'cnc-plazma',
    serviceName: 'CNC Plazma Kesim',
    serviceNameShort: 'CNC plazma kesim',
    metaTemplate: '{{district}} CNC plazma kesim hizmeti. 2600x6000mm plazma kesim ile kalın plaka işleme. Kuzey Şafak Lazer İkitelli OSB.',
    h1Template: '{{district}} CNC Plazma Kesim Hizmeti',
    intro: `<p><strong>{{district}} CNC plazma kesim</strong> hizmeti için Kuzey Şafak Lazer'e başvurun. 2010 yılından bu yana İkitelli OSB'deki tesislerimizde 2600x6000mm CNC plazma kesim makinemiz ile {{district}} ve çevresindeki ağır sanayi kuruluşlarına, konstrüksiyon firmalarına ve imalatçılara profesyonel plazma kesim hizmeti veriyoruz. Özellikle kalın çelik plakaların hızlı ve ekonomik kesilmesinde plazma kesim teknolojisi en verimli yöntemdir.</p>

<p>{{district}}'{{districtSuffix}} {{distance}} konumdaki tesislerimize kolayca ulaşabilirsiniz. Kalın plaka kesiminde lojistik maliyetler önemli bir kalem oluşturur; yakın mesafedeki bir plazma kesim tedarikçisi ile çalışmak hem nakliye giderlerinizi minimize eder hem de ağır tonajlı parçaların güvenli taşınmasını kolaylaştırır. {{district}} bölgesine hızlı teslimat sağlıyoruz ve 7/24 destek hattımız ile acil konstrüksiyon projelerinizde gecikmesiz çözüm üretiyoruz. Büyük projelerinizde tesislerimize gelip üretim sürecini yerinde takip edebilirsiniz.</p>

<p>CNC plazma kesim makinemiz, 2600x6000mm geniş masa kapasitesi ile büyük boyutlu çelik plakaları tek seferde işleyebilir. 6mm'den 50mm'ye kadar kalınlıktaki karbon çelik, yapısal çelik ve aşınmaya dayanıklı çelik plakaları ±0.5mm tolerans ile kesiyoruz. CNC kontrol sistemi sayesinde karmaşık geometriler, dairesel kesimler ve profil detayları yüksek doğrulukla işlenmektedir. Lazer kesime kıyasla kalın plakalarda önemli maliyet avantajı sunan plazma kesim, özellikle 10mm üzeri kalınlıklarda tercih edilen yöntemdir.</p>

<p>CNC plazma kesim hizmetimiz; çelik konstrüksiyon ve yapısal çelik imalatı, gemi inşa sanayi, köprü ve platform üretimi, endüstriyel tank ve siloların imalatı, iş makineleri yedek parçaları, madencilik ekipmanları, enerji santralleri komponentleri, tarım makineleri ve ağır sanayi ekipmanları gibi sektörlerde {{district}} bölgesindeki müşterilerimize hizmet vermektedir.</p>

<p>Kuzey Şafak Lazer olarak plazma kesim hizmetimizi lazer kesim, CNC büküm ve kaynaklı imalat ile entegre sunuyoruz. Bu sayede kalın plakalardan komple yapısal parçalar, şase sistemleri ve konstrüksiyon elemanları tek elden üretilebilir. {{district}} bölgesinden ücretsiz teknik danışmanlık hizmetimizle projeniz için en uygun kesim yöntemini ve malzeme seçimini birlikte belirleyelim.</p>`,
    whyUs: [
      '2600x6000mm geniş masa kapasitesi ile büyük plaka kesimi',
      '6mm - 50mm arası çelik plaka kesim kabiliyeti',
      '{{district}} bölgesine hızlı teslimat ve lojistik destek',
      'Lazer kesim ile kombine proje çözümleri',
      'Konstrüksiyon ve ağır sanayi projeleri deneyimi',
      'Kalın plakalarda lazer kesime göre maliyet avantajı',
      '2010\'dan bu yana 15 yılı aşkın sektör deneyimi',
      '7/24 destek ve acil proje kabul imkanı',
      'Ücretsiz teknik danışmanlık ve malzeme optimizasyonu',
      'CNC kontrol ile karmaşık geometrilerde yüksek doğruluk'
    ],
    capacity: `<ul>
<li><strong>Masa boyutu:</strong> 2600 x 6000 mm</li>
<li><strong>Çelik (ST37/ST52) kesim:</strong> 6mm - 50mm</li>
<li><strong>Yapısal çelik (S235/S355) kesim:</strong> 6mm - 50mm</li>
<li><strong>Kesim toleransı:</strong> ±0.5mm</li>
<li><strong>Maksimum plaka ağırlığı:</strong> Vinç destekli yükleme</li>
<li><strong>Kesim hızı:</strong> Kalınlığa göre optimize edilmiş CNC programlama</li>
<li><strong>Desteklenen formatlar:</strong> DXF, DWG, STEP, PDF</li>
</ul>
<h4>İşlenen Malzemeler</h4>
<ul>
<li>Karbon çelik plaka (ST37, ST52)</li>
<li>Yapısal çelik (S235JR, S355JR, S355J2)</li>
<li>Hardox aşınma plakaları (400, 450, 500)</li>
<li>Corten (atmosferik korozyona dayanıklı çelik)</li>
<li>Kazan çeliği (P265GH, P355GH)</li>
<li>Gemi sacı (Grade A, B, D)</li>
</ul>`,
    cta: 'Plazma kesim projeniz için hemen teklif alın! Plaka kalınlığı, malzeme cinsi ve kesim detaylarınızı bize iletin, deneyimli ekibimiz aynı gün fiyat teklifi hazırlasın. Büyük konstrüksiyon projelerinizde ücretsiz teknik danışmanlık hizmetimizden yararlanın.'
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

export function getServiceFaq(serviceSlug: string): { q: string; a: string }[] {
  const faqMap: Record<string, { q: string; a: string }[]> = {
    'lazer-kesim': [
      {
        q: 'Lazer kesim ile hangi malzemeleri kesebiliyorsunuz?',
        a: 'Fiber lazer kesim makinemiz ile siyah sac (ST37, ST52), paslanmaz çelik (304, 316, 430), alüminyum, galvanizli sac, bakır ve pirinç dahil tüm endüstriyel metallerde 0.5mm\'den 25mm\'ye kadar hassas kesim yapabiliyoruz.'
      },
      {
        q: 'Lazer kesim için hangi formatlarda dosya gönderebilirim?',
        a: 'DXF, DWG, STEP ve PDF formatlarındaki teknik çizimlerinizi kabul ediyoruz. Dosyalarınızı WhatsApp veya e-posta ile gönderebilirsiniz. CAM yazılımımıza doğrudan aktararak en kısa sürede üretime geçiyoruz.'
      },
      {
        q: 'Lazer kesim hassasiyetiniz ne kadardır?',
        a: 'CNC fiber lazer kesim makinemiz ±0.1mm kesim hassasiyeti ve ±0.03mm tekrarlama hassasiyeti sunmaktadır. Bu sayede seri üretimde ilk parçadan son parçaya birebir aynı ölçü garantisi sağlıyoruz.'
      },
      {
        q: 'Acil lazer kesim siparişi verebilir miyim?',
        a: 'Evet, acil siparişlerinizi aynı gün üretime alıp aynı gün teslim edebiliyoruz. 7/24 destek hattımızdan bize ulaşarak acil siparişlerinizi iletebilirsiniz.'
      },
      {
        q: 'Lazer kesim fiyatı nasıl belirlenir?',
        a: 'Lazer kesim fiyatı malzeme cinsi, kalınlığı, kesim uzunluğu ve adet miktarına göre belirlenir. Teknik çiziminizi bize gönderdiğinizde aynı gün ücretsiz fiyat teklifi hazırlıyoruz. Seri üretimlerde özel fiyat avantajı sunuyoruz.'
      }
    ],
    'kaynakli-imalat': [
      {
        q: 'Hangi kaynak yöntemlerini kullanıyorsunuz?',
        a: 'Tesislerimizde TIG (Argon) kaynak, MIG/MAG kaynak ve lazer kaynak yöntemlerini kullanıyoruz. Projenizin malzeme cinsi, kalınlığı ve kullanım amacına göre en uygun kaynak yöntemini belirliyoruz.'
      },
      {
        q: 'Kaynaklı imalat ile birlikte kesim ve büküm de yapabiliyor musunuz?',
        a: 'Evet, Kuzey Şafak Lazer olarak lazer kesim, CNC büküm ve kaynaklı imalat hizmetlerini aynı çatı altında sunuyoruz. Bu entegre üretim hattı sayesinde projeniz tek elden, hızlı ve uygun maliyetli şekilde tamamlanır.'
      },
      {
        q: 'Paslanmaz çelik kaynak yapabiliyor musunuz?',
        a: 'Evet, TIG (Argon) kaynak yöntemiyle 304, 316L ve 430 kalite paslanmaz çeliklerde yüksek kaliteli kaynak imalat gerçekleştiriyoruz. Gıda sanayi, medikal ve dekoratif uygulamalar için uygun temiz kaynak dikişleri sağlıyoruz.'
      },
      {
        q: 'Tek parça imalat yapıyor musunuz yoksa sadece seri üretim mi?',
        a: 'Her iki hizmeti de sunuyoruz. Tek parça prototip imalattan binlerce adetlik seri üretime kadar her sipariş boyutunu kabul ediyoruz. Numune onayı sonrası seri üretime geçiş imkanı da mevcuttur.'
      },
      {
        q: 'Kaynak imalat projesi için nasıl teklif alabilirim?',
        a: 'Teknik çiziminizi, 3D modelinizi veya numune fotoğrafınızı WhatsApp ya da e-posta ile bize gönderin. Deneyimli ekibimiz projenizi değerlendirip aynı gün fiyat teklifi hazırlasın. Ücretsiz teknik danışmanlık hizmetimiz de mevcuttur.'
      }
    ],
    'cnc-bukum': [
      {
        q: 'CNC büküm ile hangi malzemeleri bükebiliyorsunuz?',
        a: 'Çelik (ST37, ST52), paslanmaz çelik (304, 316, 430), alüminyum, galvanizli sac, bakır ve pirinç malzemelerde 0.5mm\'den 20mm kalınlığa kadar CNC büküm yapabiliyoruz.'
      },
      {
        q: 'Maksimum büküm uzunluğunuz ne kadardır?',
        a: '4 metre (4000mm) uzunluğa kadar tek seferde büküm kapasitemiz mevcuttur. CNC abkant pres makinemiz ile ±0.1mm açısal hassasiyette çalışıyoruz.'
      },
      {
        q: 'Hangi büküm tiplerini yapabiliyorsunuz?',
        a: 'V büküm, U büküm, Z büküm, kutu büküm ve özel profil büküm dahil olmak üzere 0° ile 180° arasında tüm büküm tiplerini gerçekleştirebiliyoruz. Özel kalıp gerektiren profiller için de çözüm üretiyoruz.'
      },
      {
        q: 'Lazer kesim ve CNC büküm birlikte sipariş verebilir miyim?',
        a: 'Evet, lazer kesim ve CNC büküm hizmetlerimizi aynı tesiste entegre olarak sunuyoruz. Kombine siparişlerde hem maliyet avantajı hem de daha kısa teslimat süresi sağlıyoruz.'
      },
      {
        q: 'CNC büküm siparişi için ne göndermem gerekiyor?',
        a: 'Teknik çiziminizi (DXF, DWG, STEP veya PDF formatında) WhatsApp ya da e-posta ile gönderin. Büküm açısı, yönü ve tolerans bilgilerini belirtin. Deneyimli ekibimiz aynı gün fiyat teklifi hazırlar.'
      }
    ],
    'cnc-plazma': [
      {
        q: 'Plazma kesim ile lazer kesim arasındaki fark nedir?',
        a: 'Plazma kesim özellikle 10mm üzeri kalın çelik plakalarda maliyet avantajı sağlar ve 50mm\'ye kadar kesim yapabilir. Lazer kesim ise ince malzemelerde daha yüksek hassasiyet (±0.1mm) sunar. Projenize en uygun yöntemi ücretsiz teknik danışmanlık hizmetimizle birlikte belirleyebilirsiniz.'
      },
      {
        q: 'CNC plazma kesim ile hangi malzemeleri kesebiliyorsunuz?',
        a: 'Karbon çelik (ST37, ST52), yapısal çelik (S235, S355), Hardox aşınma plakaları, Corten çeliği, kazan çeliği ve gemi sacı dahil 6mm\'den 50mm\'ye kadar kalınlıktaki çelik plakaları kesebiliyoruz.'
      },
      {
        q: 'Plazma kesim hassasiyetiniz ne kadardır?',
        a: 'CNC plazma kesim makinemiz ±0.5mm tolerans ile çalışmaktadır. CNC kontrol sistemi sayesinde karmaşık geometriler, dairesel kesimler ve profil detayları yüksek doğrulukla işlenmektedir.'
      },
      {
        q: 'Büyük konstrüksiyon projeleri için plazma kesim yapabiliyor musunuz?',
        a: 'Evet, 2600x6000mm geniş masa kapasitemiz ile büyük boyutlu çelik plakaları tek seferde işleyebiliyoruz. Çelik konstrüksiyon, köprü imalatı, tank üretimi ve ağır sanayi projeleri konusunda geniş deneyimimiz mevcuttur.'
      },
      {
        q: 'Plazma kesim sonrası ek işlemler yapabiliyor musunuz?',
        a: 'Evet, plazma kesim sonrası CNC büküm ve kaynaklı imalat hizmetlerimizle parçalarınızı şekillendirip montaja hazır hale getirebiliyoruz. Tek elden entegre üretim avantajıyla projeniz daha hızlı ve uygun maliyetle tamamlanır.'
      }
    ]
  };

  return faqMap[serviceSlug] || [];
}
