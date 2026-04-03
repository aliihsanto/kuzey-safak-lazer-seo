/**
 * Firmanın mevcut 4 ana hizmete ek olarak sunabileceği potansiyel hizmetler
 * Bu hizmetler long-tail SEO sayfaları ve özel hizmet sayfaları için kullanılır
 */

export interface AdditionalService {
  name: string;
  slug: string;
  parentService: string; // Ana hizmet slug'ı
  category: 'kesim' | 'imalat' | 'isleme' | 'ozel';
  description: string;
  metaDesc: string;
  keywords: string[];
  content: string; // HTML content
}

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  // === KESİM HİZMETLERİ ===
  {
    name: 'Dekoratif Lazer Kesim',
    slug: 'dekoratif-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: 'Metal paravan, seperatör, bahçe kapısı, korkuluk ve cephe paneli gibi dekoratif metal ürünlerin CNC lazer ile hassas kesimi.',
    metaDesc: 'Dekoratif lazer kesim hizmeti. Metal paravan, seperatör, bahçe kapısı, korkuluk desenleri, cephe paneli lazer kesim. Kuzey Şafak Lazer İstanbul.',
    keywords: ['dekoratif lazer kesim', 'metal paravan lazer kesim', 'lazer kesim desen', 'dekoratif metal panel'],
    content: `<p><strong>Dekoratif lazer kesim</strong>, metal yüzeyler üzerinde estetik desenler, motifler ve şekiller oluşturma işlemidir. Kuzey Şafak Lazer olarak fiber lazer teknolojimiz ile milimetrik hassasiyette dekoratif kesimler gerçekleştiriyoruz.</p>
<h3>Uygulama Alanları</h3>
<ul>
<li>Metal paravanlar ve seperatörler</li>
<li>Bahçe kapıları ve çit panelleri</li>
<li>Merdiven ve balkon korkulukları</li>
<li>Dış cephe kaplama panelleri</li>
<li>İç mekan dekoratif duvar panelleri</li>
<li>Aydınlatma armatür gövdeleri</li>
</ul>
<h3>Desteklenen Malzemeler</h3>
<p>Paslanmaz çelik, siyah sac, corten çelik, alüminyum ve pirinç üzerinde dekoratif lazer kesim yapabiliyoruz. Müşterinin kendi tasarımı veya hazır desen katalogumuzdan seçim yapılabilir.</p>`
  },
  {
    name: 'Metal Harf Lazer Kesim',
    slug: 'metal-harf-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: 'Tabela, kutu harf, kabartma yazı ve logo gibi metal harf/şekillerin lazer ile hassas kesimi.',
    metaDesc: 'Metal harf lazer kesim hizmeti. Tabela, kutu harf, logo ve yazı kesimi. Paslanmaz, alüminyum, pirinç harf kesim. Kuzey Şafak Lazer.',
    keywords: ['metal harf lazer kesim', 'kutu harf kesim', 'tabela harf kesim', 'paslanmaz harf'],
    content: `<p><strong>Metal harf lazer kesim</strong>, reklam ve tabela sektörünün vazgeçilmez üretim yöntemidir. Fiber lazer makinemiz ile paslanmaz çelik, alüminyum, pirinç ve bakır gibi metallerde yüksek hassasiyetli harf ve logo kesimi yapıyoruz.</p>
<h3>Harf Tipleri</h3>
<ul>
<li>Kutu harf (3 boyutlu, iç aydınlatmalı)</li>
<li>Kabartma harf (düz, tek katman)</li>
<li>Pleksi altlıklı metal harf</li>
<li>Logo ve amblem kesimi</li>
</ul>`
  },
  {
    name: 'Hassas Lazer Kesim',
    slug: 'hassas-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: '±0.05mm toleransta ultra hassas lazer kesim. Elektronik, medikal ve havacılık parçaları için.',
    metaDesc: 'Hassas lazer kesim hizmeti. ±0.05mm tolerans, ultra ince detaylar. Elektronik, medikal, havacılık parçaları. Kuzey Şafak Lazer İstanbul.',
    keywords: ['hassas lazer kesim', 'precision laser cutting', 'ince detay lazer kesim', 'mikro lazer kesim'],
    content: `<p><strong>Hassas lazer kesim</strong>, standart kesim toleranslarının ötesinde, ±0.05mm'ye kadar dar toleranslarda gerçekleştirilen özel kesim hizmetidir. Elektronik devre kutuları, medikal implant parçaları ve havacılık bileşenleri gibi kritik uygulamalarda kullanılır.</p>
<h3>Ne Zaman Hassas Kesim Gerekir?</h3>
<ul>
<li>Parçalar birbirine geçmeli montajlanacaksa</li>
<li>Elektronik PCB kutusu gibi dar boşluklar varsa</li>
<li>Medikal cihaz parçaları üretilecekse</li>
<li>Prototip üretimde birebir ölçü kritikse</li>
</ul>`
  },
  {
    name: 'Büyük Ebat Lazer Kesim',
    slug: 'buyuk-ebat-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: '2000x6000mm tablada büyük ebatlı parçaların tek seferde lazer kesimi. İnşaat, gemi ve enerji sektörü için.',
    metaDesc: '6 metre büyük ebat lazer kesim hizmeti. 2000x6000mm masa kapasitesi ile büyük parçalar tek seferde. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['büyük ebat lazer kesim', '6 metre lazer kesim', 'büyük parça lazer kesim', 'geniş tabla lazer'],
    content: `<p><strong>Büyük ebat lazer kesim</strong>, 2000x6000mm kapasiteli fiber lazer makinemiz ile tek seferde büyük plaka kesimi yapabilmenizi sağlar. İkitelli OSB'de bu kapasitede lazer kesim sunan ilk firma olarak, büyük projelerde parça bölme ihtiyacını ortadan kaldırıyoruz.</p>
<h3>Avantajları</h3>
<ul>
<li>6 metreye kadar parçalar tek seferde kesilir</li>
<li>Ek kaynak dikişi gerekmez</li>
<li>Daha az montaj süresi</li>
<li>Daha yüksek yapısal mukavemet</li>
</ul>`
  },
  {
    name: 'Seri Üretim Lazer Kesim',
    slug: 'seri-uretim-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: 'Yüksek adetli seri üretim projelerinde hızlı ve tutarlı lazer kesim. Nesting optimizasyonu ile fire minimizasyonu.',
    metaDesc: 'Seri üretim lazer kesim hizmeti. Yüksek adetli siparişlerde nesting optimizasyonu, fire minimizasyonu. Hızlı teslimat. Kuzey Şafak Lazer.',
    keywords: ['seri üretim lazer kesim', 'toplu lazer kesim', 'fason lazer kesim seri', 'lazer kesim seri üretim'],
    content: `<p><strong>Seri üretim lazer kesim</strong>, yüzlerce veya binlerce adet parçanın tutarlı kalitede ve minimum fire ile üretilmesidir. CNC lazer makinemizin otomatik nesting yazılımı, plaka üzerinde parçaları en verimli şekilde yerleştirerek malzeme kaybını minimuma indirir.</p>`
  },

  // === İMALAT HİZMETLERİ ===
  {
    name: 'Paslanmaz Çelik İmalat',
    slug: 'paslanmaz-celik-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Paslanmaz çelik malzemeden komple ürün imalatı. Kesim + büküm + kaynak entegre üretim.',
    metaDesc: 'Paslanmaz çelik imalat hizmeti. Kesim, büküm ve kaynak ile komple ürün üretimi. Endüstriyel mutfak, medikal, mimari. Kuzey Şafak Lazer.',
    keywords: ['paslanmaz çelik imalat', 'paslanmaz imalat', 'inox imalat', 'paslanmaz çelik üretim'],
    content: `<p><strong>Paslanmaz çelik imalat</strong>, lazer kesim + CNC büküm + kaynak süreçlerini entegre ederek paslanmaz çelikten komple ürün üretimi hizmetidir. Aynı çatı altında tüm süreçleri yönetmemiz, kalite kontrolünü ve teslimat süresini optimize eder.</p>
<h3>Ürettiğimiz Ürün Grupları</h3>
<ul>
<li>Endüstriyel mutfak tezgahları ve ekipmanları</li>
<li>Gıda işleme makinesi parçaları</li>
<li>Hastane ve laboratuvar ekipmanları</li>
<li>Mimari korkuluk ve merdiven sistemleri</li>
<li>Kimya sanayi tank ve kapları</li>
<li>Dekoratif metal işleri</li>
</ul>`
  },
  {
    name: 'Pano Gövde İmalatı',
    slug: 'pano-govde-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Elektrik, otomasyon ve dağıtım panoları için sac gövde imalatı. Kesim + büküm + kaynak + boyama.',
    metaDesc: 'Pano gövde imalatı. Elektrik panosu, otomasyon panosu, dağıtım panosu sac gövde üretimi. Kuzey Şafak Lazer İstanbul.',
    keywords: ['pano gövde imalatı', 'elektrik panosu gövde', 'sac pano imalat', 'pano kasası üretimi'],
    content: `<p><strong>Pano gövde imalatı</strong>, elektrik dağıtım, otomasyon ve kontrol panoları için sac metal gövde üretim hizmetidir. DKP sac veya paslanmaz çelikten lazer kesim + büküm + kaynak süreçleriyle tek elden üretim yapıyoruz.</p>`
  },
  {
    name: 'Makine Gövdesi İmalatı',
    slug: 'makine-govdesi-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Endüstriyel makine ve cihazlar için sac/profil gövde ve şasi imalatı.',
    metaDesc: 'Makine gövdesi imalatı. Endüstriyel makine kasası, şasi ve kabin üretimi. Lazer kesim + büküm + kaynak. Kuzey Şafak Lazer.',
    keywords: ['makine gövdesi imalatı', 'makine kasası', 'sac kabin imalat', 'makine şasesi üretimi'],
    content: `<p><strong>Makine gövdesi imalatı</strong>, sanayi makineleri, otomasyon cihazları ve özel ekipmanlar için sac metal gövde, kasa ve şasi üretim hizmetidir. Teknik çiziminize göre prototipten seri üretime kadar her ölçekte üretim yapıyoruz.</p>`
  },
  {
    name: 'Tank ve Depo İmalatı',
    slug: 'tank-depo-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Paslanmaz çelik ve karbon çelikten tank, depo ve silo imalatı. Gıda, kimya ve su depolama.',
    metaDesc: 'Tank ve depo imalatı. Paslanmaz çelik tank, su deposu, kimya tankı üretimi. Kaynaklı imalat. Kuzey Şafak Lazer İstanbul.',
    keywords: ['tank imalatı', 'çelik depo imalatı', 'paslanmaz tank', 'su deposu imalat', 'silo imalatı'],
    content: `<p><strong>Tank ve depo imalatı</strong>, sıvı, toz veya granül malzemelerin depolanması için paslanmaz çelik veya karbon çelikten kap üretim hizmetidir. Gıda sanayi standartlarına uygun hijyenik tanktan endüstriyel kimya depolarına kadar geniş bir yelpazede üretim yapıyoruz.</p>`
  },
  {
    name: 'Havalandırma Kanalı İmalatı',
    slug: 'havalandirma-kanali-imalat',
    parentService: 'cnc-bukum',
    category: 'imalat',
    description: 'Galvaniz ve paslanmaz sacdan havalandırma kanalı, baca ve davlumbaz imalatı.',
    metaDesc: 'Havalandırma kanalı imalatı. Galvaniz ve paslanmaz sacdan kanal, baca, davlumbaz üretimi. Kuzey Şafak Lazer İstanbul.',
    keywords: ['havalandırma kanalı imalatı', 'galvaniz kanal imalat', 'baca imalatı', 'davlumbaz imalat'],
    content: `<p><strong>Havalandırma kanalı imalatı</strong>, HVAC sistemleri için galvaniz veya paslanmaz çelik sacdan kanal, baca, davlumbaz ve hava dağıtım elemanları üretim hizmetidir. CNC lazer kesim ve abkant büküm makinelerimiz ile hassas ölçülerde ve seri üretim kapasitesiyle imalat yapıyoruz.</p>`
  },
  {
    name: 'Raf Sistemi İmalatı',
    slug: 'raf-sistemi-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Depo, market ve arşiv raf sistemleri imalatı. Profil ve sac kombine üretim.',
    metaDesc: 'Raf sistemi imalatı. Depo rafı, market rafı, arşiv rafı üretimi. Çelik profil ve sac imalat. Kuzey Şafak Lazer İstanbul.',
    keywords: ['raf sistemi imalatı', 'çelik raf üretimi', 'depo rafı imalat', 'metal raf üretimi'],
    content: `<p><strong>Raf sistemi imalatı</strong>, depo, market, arşiv ve endüstriyel alanlar için çelik raf elemanları üretim hizmetidir. Profil kesim, sac büküm ve kaynak süreçlerimizi entegre ederek komple raf sistemi üretimi yapıyoruz.</p>`
  },
  {
    name: 'Merdiven İmalatı',
    slug: 'merdiven-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Çelik ve paslanmaz çelik merdiven imalatı. Yangın merdiveni, spiral merdiven, endüstriyel platform.',
    metaDesc: 'Çelik merdiven imalatı. Yangın merdiveni, spiral merdiven, endüstriyel merdiven. Lazer kesim + kaynak. Kuzey Şafak Lazer İstanbul.',
    keywords: ['çelik merdiven imalatı', 'metal merdiven', 'yangın merdiveni', 'spiral merdiven imalat'],
    content: `<p><strong>Çelik merdiven imalatı</strong>, bina içi ve dışı merdiven sistemlerinin metal malzemeden üretilmesi hizmetidir. Yangın merdiveni, spiral (helisel) merdiven, endüstriyel platform merdiveni ve dekoratif merdiven imalatı yapıyoruz.</p>`
  },
  {
    name: 'Korkuluk İmalatı',
    slug: 'korkuluk-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Paslanmaz çelik ve çelik korkuluk imalatı. Merdiven, balkon, teras korkulukları.',
    metaDesc: 'Korkuluk imalatı. Paslanmaz çelik korkuluk, cam korkuluk, ferforje korkuluk. Lazer kesim + kaynak. Kuzey Şafak Lazer.',
    keywords: ['korkuluk imalatı', 'paslanmaz korkuluk', 'çelik korkuluk', 'balkon korkuluğu', 'merdiven korkuluğu'],
    content: `<p><strong>Korkuluk imalatı</strong>, merdiven, balkon, teras ve çatı alanları için güvenlik ve estetik amaçlı metal korkuluk üretim hizmetidir. Paslanmaz çelik, karbon çelik ve corten çelik malzemelerden modern ve klasik tasarımlarda korkuluk üretiyoruz.</p>`
  },
  {
    name: 'Konveyör Sistemi İmalatı',
    slug: 'konveyor-sistemi-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Endüstriyel konveyör bant sistemleri için metal gövde, şasi ve taşıyıcı parça imalatı.',
    metaDesc: 'Konveyör sistemi imalatı. Konveyör bant gövdesi, şasi, taşıyıcı parça üretimi. Çelik imalat. Kuzey Şafak Lazer.',
    keywords: ['konveyör sistemi imalatı', 'konveyör gövde', 'bant konveyör imalat'],
    content: `<p><strong>Konveyör sistemi imalatı</strong>, endüstriyel üretim hatları ve lojistik tesisleri için konveyör bant gövdeleri, taşıyıcı şasiler ve bağlantı elemanları üretim hizmetidir.</p>`
  },

  // === İŞLEME HİZMETLERİ ===
  {
    name: 'Sac Markalama (Lazer)',
    slug: 'sac-markalama-lazer',
    parentService: 'lazer-kesim',
    category: 'isleme',
    description: 'Lazer markalama ile metal yüzeylere logo, seri numarası, QR kod ve teknik bilgi kazıma.',
    metaDesc: 'Lazer markalama hizmeti. Metal yüzeylere logo, seri no, QR kod kazıma. Paslanmaz çelik, alüminyum, çelik. Kuzey Şafak Lazer.',
    keywords: ['lazer markalama', 'metal lazer kazıma', 'lazer gravür', 'seri numarası markalama'],
    content: `<p><strong>Lazer markalama</strong>, metal yüzeylere kalıcı iz bırakma işlemidir. Logo, seri numarası, barkod, QR kod ve teknik bilgilerin metal parçalar üzerine kazınması için kullanılır. Fiber lazer makinemiz ile kesim öncesi veya sonrası markalama yapabiliyoruz.</p>`
  },
  {
    name: '4 Metre Abkant Büküm',
    slug: '4-metre-abkant-bukum',
    parentService: 'cnc-bukum',
    category: 'isleme',
    description: '4 metre uzunluğa kadar tek seferde CNC abkant büküm. Geniş parçalarda ek dikişsiz büküm.',
    metaDesc: '4 metre abkant büküm hizmeti. Tek seferde 4 metreye kadar CNC büküm. Geniş parçalar, ek dikişsiz. Kuzey Şafak Lazer İkitelli.',
    keywords: ['4 metre abkant büküm', '4 metre büküm', 'uzun parça büküm', 'geniş sac büküm'],
    content: `<p><strong>4 metre abkant büküm</strong> kapasitemiz, büyük ebatlı sac parçaların tek seferde bükülmesini sağlar. 4 metreye kadar uzunluktaki sacları parçalamadan bükebilmemiz, ek kaynak dikişi gerektirmeden tek parça üretim anlamına gelir.</p>`
  },
  {
    name: 'Prototip Üretim',
    slug: 'prototip-uretim',
    parentService: 'lazer-kesim',
    category: 'ozel',
    description: 'Tek parça veya küçük adetli prototip metal parça üretimi. Hızlı geri dönüş, esnek üretim.',
    metaDesc: 'Prototip metal parça üretimi. Tek parça veya küçük adet. DXF/DWG dosyasından hızlı üretim. Lazer kesim + büküm + kaynak. Kuzey Şafak Lazer.',
    keywords: ['prototip üretim', 'prototip lazer kesim', 'tek parça imalat', 'küçük adet üretim'],
    content: `<p><strong>Prototip üretim</strong>, yeni ürün geliştirme sürecinde tek parça veya küçük adetli numune üretim hizmetidir. DXF/DWG dosyanızdan direkt üretime geçerek en kısa sürede prototiplerinizi teslim ediyoruz. Lazer kesim, büküm ve kaynak süreçlerimizi esnek şekilde kullanarak her türlü prototip ihtiyacınızı karşılıyoruz.</p>`
  },
  {
    name: 'Özel Parça İmalatı',
    slug: 'ozel-parca-imalat',
    parentService: 'kaynakli-imalat',
    category: 'ozel',
    description: 'Müşteri çizimine göre özel tasarım metal parça üretimi. Fason imalat.',
    metaDesc: 'Özel metal parça imalatı. Müşteri çizimine göre fason üretim. Lazer kesim + büküm + kaynak. Kuzey Şafak Lazer İkitelli OSB.',
    keywords: ['özel parça imalatı', 'fason imalat', 'özel metal parça', 'çizime göre üretim'],
    content: `<p><strong>Özel parça imalatı</strong>, müşterinin teknik çizimine göre birebir üretim yapılan fason imalat hizmetidir. Standart katalog dışı, projenize özel metal parçaları lazer kesim, CNC büküm ve kaynak süreçlerimizle üretiyoruz.</p>`
  }
];

export const ADDITIONAL_SERVICE_MAP: Record<string, AdditionalService> = {};
ADDITIONAL_SERVICES.forEach(s => ADDITIONAL_SERVICE_MAP[s.slug] = s);
