export interface Product {
  name: string;
  slug: string;
  category: 'sac' | 'profil' | 'boru';
  description: string;
  specs: { label: string; value: string }[];
  applicableServices: string[];
  usageAreas: string[];
  keywords: string[];
}

export const PRODUCTS: Product[] = [
  // === SAC ===
  {
    name: 'DKP Sac',
    slug: 'dkp-sac',
    category: 'sac',
    description: 'DKP (Dekapaj) sac, soğuk haddelenmiş düşük karbonlu çelik sactır. Yüzeyi düzgün ve parlaktır. Boyama ve kaplama işlemlerine çok uygundur. Beyaz eşya, otomotiv, mobilya ve elektrik pano imalatında yaygın kullanılır.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.3mm - 3mm' },
      { label: 'Standart Boyutlar', value: '1000x2000, 1250x2500 mm' },
      { label: 'Yüzey', value: 'Parlak, düzgün' },
      { label: 'Standart', value: 'EN 10130, DC01-DC06' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    usageAreas: ['Beyaz eşya gövdeleri', 'Elektrik panoları', 'Otomotiv parçaları', 'Mobilya aksesuarları', 'Aydınlatma armatürleri'],
    keywords: ['dkp sac', 'dkp sac nedir', 'dkp sac fiyat', 'dkp sac lazer kesim', 'soğuk haddelenmiş sac']
  },
  {
    name: 'HRP Sac',
    slug: 'hrp-sac',
    category: 'sac',
    description: 'HRP (Sıcak Haddelenmiş - Hot Rolled Pickled) sac, sıcak haddeleme sonrası asitle yıkanarak tufal tabakasından arındırılmış çelik sactır. DKP\'ye göre daha kalın kesitlerde üretilir ve yapısal uygulamalarda tercih edilir.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '1.5mm - 8mm' },
      { label: 'Standart Boyutlar', value: '1250x2500, 1500x3000 mm' },
      { label: 'Yüzey', value: 'Temiz, tufalsız' },
      { label: 'Standart', value: 'EN 10111, DD11-DD14' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum', 'cnc-plazma', 'kaynakli-imalat'],
    usageAreas: ['Makine parçaları', 'Konstrüksiyon elemanları', 'Otomotiv şasi', 'Tank ve depo imalatı'],
    keywords: ['hrp sac', 'hrp sac nedir', 'sıcak haddelenmiş sac', 'hrp sac fiyat']
  },
  {
    name: 'Paslanmaz Çelik Sac',
    slug: 'paslanmaz-celik-sac',
    category: 'sac',
    description: 'Paslanmaz çelik sac, krom ve nikel alaşımlı korozyona dayanıklı çelik sactır. 304, 316 ve 430 gibi farklı kalitelerde üretilir. Gıda, medikal, mimari ve kimya sanayinde vazgeçilmezdir.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.5mm - 20mm' },
      { label: 'Standart Boyutlar', value: '1000x2000, 1250x2500, 1500x3000 mm' },
      { label: 'Kaliteler', value: '304, 316, 316L, 430, 201' },
      { label: 'Yüzey', value: '2B, BA, No.4, Ayna' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    usageAreas: ['Endüstriyel mutfak', 'Gıda makineleri', 'Hastane ekipmanları', 'Mimari dekorasyon', 'Kimya tankları'],
    keywords: ['paslanmaz çelik sac', 'paslanmaz sac fiyat', 'inox sac', '304 paslanmaz', '316 paslanmaz']
  },
  {
    name: 'Galvaniz Sac',
    slug: 'galvaniz-sac',
    category: 'sac',
    description: 'Galvaniz sac, çinko kaplama ile korozyona karşı korunan çelik sactır. Dış mekan uygulamalarında ve nemli ortamlarda uzun ömürlü çözüm sunar. Havalandırma, çatı kaplama ve elektrik pano imalatında tercih edilir.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.3mm - 4mm' },
      { label: 'Standart Boyutlar', value: '1000x2000, 1250x2500 mm' },
      { label: 'Kaplama', value: 'Sıcak daldırma çinko (Z100-Z275)' },
      { label: 'Standart', value: 'EN 10346, DX51D-DX56D' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    usageAreas: ['Havalandırma kanalları', 'Çatı kaplamları', 'Elektrik panoları', 'Klima üniteleri', 'Aydınlatma gövdeleri'],
    keywords: ['galvaniz sac', 'galvaniz sac fiyat', 'galvanizli sac', 'çinko kaplı sac', 'dx51d sac']
  },
  {
    name: 'Alüminyum Sac',
    slug: 'aluminyum-sac',
    category: 'sac',
    description: 'Alüminyum sac, hafifliği ve korozyon direnci ile öne çıkan metal levhadır. Havacılık, otomotiv, denizcilik ve dekoratif uygulamalarda kullanılır. Çeliğe göre %65 daha hafiftir.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.5mm - 12mm' },
      { label: 'Standart Boyutlar', value: '1000x2000, 1250x2500 mm' },
      { label: 'Alaşımlar', value: '1050, 2024, 3003, 5083, 6061, 7075' },
      { label: 'Yüzey', value: 'Mill finish, anodize, kaplamalı' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    usageAreas: ['Tabela/reklam', 'Cephe kaplama', 'Elektronik kutu', 'Otomotiv', 'Denizcilik'],
    keywords: ['alüminyum sac', 'alüminyum levha', 'alüminyum sac fiyat', 'aluminyum plaka']
  },
  {
    name: 'Siyah Sac (St37)',
    slug: 'st37-sac',
    category: 'sac',
    description: 'St37 siyah sac, genel amaçlı yapısal çelik sactır. En yaygın kullanılan sac türüdür. Makine imalatı, konstrüksiyon ve genel sanayi uygulamalarında her yerde karşımıza çıkar.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '1.5mm - 100mm' },
      { label: 'Standart Boyutlar', value: '1500x3000, 1500x6000, 2000x6000 mm' },
      { label: 'Akma Dayanımı', value: 'Min. 235 MPa' },
      { label: 'Standart', value: 'EN 10025, S235JR' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum', 'cnc-plazma', 'kaynakli-imalat'],
    usageAreas: ['Makine parçaları', 'Çelik konstrüksiyon', 'Kapı kasaları', 'Tank/depo', 'Genel imalat'],
    keywords: ['st37 sac', 'siyah sac', 'st37 sac fiyat', 'siyah sac fiyat', 's235 sac']
  },
  {
    name: 'St52 Sac',
    slug: 'st52-sac',
    category: 'sac',
    description: 'St52 sac, yüksek mukavemetli yapısal çelik sactır. St37\'ye göre daha dayanıklıdır. Ağır yük taşıyan konstrüksiyonlar, iş makineleri ve basınçlı kaplar imalatında kullanılır.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '3mm - 100mm' },
      { label: 'Standart Boyutlar', value: '1500x3000, 1500x6000, 2000x6000 mm' },
      { label: 'Akma Dayanımı', value: 'Min. 355 MPa' },
      { label: 'Standart', value: 'EN 10025, S355JR/J2' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-plazma', 'kaynakli-imalat'],
    usageAreas: ['İş makineleri', 'Vinç konstrüksiyon', 'Basınçlı kaplar', 'Köprü yapıları', 'Ağır sanayi'],
    keywords: ['st52 sac', 'st52 sac fiyat', 's355 sac', 'yüksek mukavemetli sac']
  },
  {
    name: 'Hardox Sac',
    slug: 'hardox-sac',
    category: 'sac',
    description: 'Hardox, İsveç menşeli aşınmaya dayanıklı çelik sactır. Normal çeliğe göre 3-4 kat daha uzun ömürlüdür. Madencilik, geri dönüşüm ve iş makineleri sektöründe kullanılır.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '3mm - 80mm' },
      { label: 'Sertlik', value: '400-600 HBW' },
      { label: 'Çeşitler', value: 'Hardox 400, 450, 500, 550, 600' },
      { label: 'Standart', value: 'SSAB proprietary' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-plazma', 'kaynakli-imalat'],
    usageAreas: ['Kova/kepçe astarı', 'Kırıcı astarları', 'Konveyör sistemleri', 'Mikser paletleri', 'Damper kasaları'],
    keywords: ['hardox sac', 'hardox fiyat', 'hardox 400', 'aşınma sacı', 'hardox lazer kesim']
  },
  {
    name: 'Baklavalı Sac',
    slug: 'baklavali-sac',
    category: 'sac',
    description: 'Baklavalı sac, yüzeyinde kaymayı önleyen kabartma desenleri bulunan çelik sactır. Merdiven basamakları, platform zeminleri ve araç kasaları gibi kaymaz yüzey gereken uygulamalarda kullanılır.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '2mm - 10mm (ana et)' },
      { label: 'Desen Yüksekliği', value: '1mm - 2mm' },
      { label: 'Standart Boyutlar', value: '1000x2000, 1250x2500, 1500x3000 mm' },
      { label: 'Malzeme', value: 'Çelik, alüminyum, paslanmaz' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-plazma', 'cnc-bukum'],
    usageAreas: ['Merdiven basamakları', 'Platform zeminleri', 'Araç kasaları', 'Rampa yüzeyleri', 'Endüstriyel döşeme'],
    keywords: ['baklavalı sac', 'baklavalı sac fiyat', 'kaymaz sac', 'kabartmalı sac']
  },
  {
    name: 'Gözyaşı (Damla) Sac',
    slug: 'gozyasi-sac',
    category: 'sac',
    description: 'Gözyaşı sac, yüzeyinde damla formunda kabartmalar bulunan dekoratif ve fonksiyonel çelik sactır. Baklavalı saca benzer ancak daha küçük desenlere sahiptir.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '1.5mm - 8mm' },
      { label: 'Desen', value: 'Gözyaşı/damla formu' },
      { label: 'Standart Boyutlar', value: '1000x2000, 1250x2500 mm' },
      { label: 'Malzeme', value: 'Çelik, alüminyum' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-plazma'],
    usageAreas: ['Dekoratif yüzeyler', 'Platform döşemeleri', 'Araç kasaları', 'Merdiven sahanlıkları'],
    keywords: ['gözyaşı sac', 'damla sac', 'gözyaşı sac fiyat']
  },
  {
    name: 'Corten Çelik Sac',
    slug: 'corten-sac',
    category: 'sac',
    description: 'Corten çelik, atmosferik korozyona dayanıklı, zamanla yüzeyinde koruyucu pas tabakası oluşturan özel çelik türüdür. Mimari, peyzaj ve sanat projelerinde doğal pas görünümüyle tercih edilir.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '1.5mm - 50mm' },
      { label: 'Çeşitler', value: 'Corten A, Corten B' },
      { label: 'Standart', value: 'EN 10025-5, S355J0WP/J2WP' },
      { label: 'Özellik', value: 'Boyasız dış mekan kullanımı' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-plazma', 'kaynakli-imalat'],
    usageAreas: ['Mimari cephe', 'Peyzaj elemanları', 'Heykel/sanat', 'Köprü yapıları', 'Konteyner imalatı'],
    keywords: ['corten çelik', 'corten sac', 'corten fiyat', 'weathering steel', 'paslı görünümlü sac']
  },
  {
    name: 'Bakır Sac',
    slug: 'bakir-sac',
    category: 'sac',
    description: 'Bakır sac, yüksek elektrik ve ısı iletkenliği ile bilinen değerli metal levhadır. Elektrik, elektronik, dekorasyon ve çatı kaplama uygulamalarında kullanılır.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.3mm - 5mm' },
      { label: 'Saflık', value: 'Cu-DHP (99.9%)' },
      { label: 'Standart Boyutlar', value: '600x1500, 1000x2000 mm' },
      { label: 'Standart', value: 'EN 1172' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    usageAreas: ['Elektrik baralar', 'Dekoratif paneller', 'Çatı kaplama', 'Isı eşanjörleri'],
    keywords: ['bakır sac', 'bakır levha', 'bakır sac fiyat', 'bakır lazer kesim']
  },
  {
    name: 'Pirinç Sac',
    slug: 'pirinc-sac',
    category: 'sac',
    description: 'Pirinç sac, bakır-çinko alaşımlı sarı renkli metal levhadır. Dekoratif görünümü, kolay işlenebilirliği ve korozyon direnci ile öne çıkar.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.3mm - 5mm' },
      { label: 'Alaşım', value: 'CuZn37 (Ms63)' },
      { label: 'Standart Boyutlar', value: '600x1500, 1000x2000 mm' },
      { label: 'Standart', value: 'EN 1652' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    usageAreas: ['Dekoratif uygulamalar', 'Müzik aletleri', 'Mimari detaylar', 'Hırdavat', 'Tabela/harfler'],
    keywords: ['pirinç sac', 'pirinç levha', 'pirinç sac fiyat', 'pirinç lazer kesim']
  },
  {
    name: 'Delikli Sac',
    slug: 'delikli-sac',
    category: 'sac',
    description: 'Delikli (perforasyonlu) sac, yüzeyinde belirli desenlerde delikler bulunan metal levhadır. Havalandırma, filtreleme, akustik ve dekoratif amaçlarla kullanılır.',
    specs: [
      { label: 'Kalınlık Aralığı', value: '0.5mm - 6mm' },
      { label: 'Delik Çapı', value: '1mm - 50mm' },
      { label: 'Delik Deseni', value: 'Yuvarlak, kare, oblong, dekoratif' },
      { label: 'Malzeme', value: 'Çelik, paslanmaz, alüminyum' }
    ],
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    usageAreas: ['Havalandırma ızgaraları', 'Akustik paneller', 'Cephe kaplama', 'Filtre elemanları', 'Güvenlik bariyerleri'],
    keywords: ['delikli sac', 'perforasyonlu sac', 'delikli sac fiyat']
  },

  // === PROFİL ===
  {
    name: 'Kare Profil',
    slug: 'kare-profil',
    category: 'profil',
    description: 'Kare profil (kutu profil), kare kesitli içi boş çelik profildir. Konstrüksiyon, çerçeve ve taşıyıcı sistemlerde yaygın kullanılır. Hafifliği ve dayanıklılığı ile öne çıkar.',
    specs: [
      { label: 'Boyut Aralığı', value: '15x15mm - 300x300mm' },
      { label: 'Et Kalınlığı', value: '1mm - 12mm' },
      { label: 'Uzunluk', value: '6m, 12m' },
      { label: 'Standart', value: 'EN 10219, EN 10210' }
    ],
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    usageAreas: ['Çelik konstrüksiyon', 'Çit/korkuluk', 'Mobilya iskeleti', 'Makine şasesi'],
    keywords: ['kare profil', 'kutu profil', 'kare profil fiyat', 'çelik kutu profil']
  },
  {
    name: 'Dikdörtgen Profil',
    slug: 'dikdortgen-profil',
    category: 'profil',
    description: 'Dikdörtgen profil, dikdörtgen kesitli içi boş çelik profildir. Kare profile göre daha geniş yüzey alanı sağlar ve taşıyıcı kirişlerde tercih edilir.',
    specs: [
      { label: 'Boyut Aralığı', value: '20x30mm - 200x400mm' },
      { label: 'Et Kalınlığı', value: '1mm - 12mm' },
      { label: 'Uzunluk', value: '6m, 12m' },
      { label: 'Standart', value: 'EN 10219, EN 10210' }
    ],
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    usageAreas: ['Taşıyıcı kirişler', 'Kapı/pencere kasası', 'Mezzanine sistemleri', 'Araç kasası'],
    keywords: ['dikdörtgen profil', 'dikdörtgen kutu profil', 'dikdörtgen profil fiyat']
  },

  // === BORU ===
  {
    name: 'Çelik Boru',
    slug: 'celik-boru',
    category: 'boru',
    description: 'Çelik boru, dairesel kesitli çelik profil olup sıvı/gaz taşıma, konstrüksiyon ve makine imalatında kullanılır. Dikişli ve dikişsiz çeşitleri mevcuttur.',
    specs: [
      { label: 'Çap Aralığı', value: '10mm - 500mm' },
      { label: 'Et Kalınlığı', value: '1mm - 20mm' },
      { label: 'Uzunluk', value: '6m, 12m' },
      { label: 'Standart', value: 'EN 10255, EN 10216, EN 10217' }
    ],
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    usageAreas: ['Boru tesisatı', 'Çelik konstrüksiyon', 'Makine imalatı', 'Korkuluk sistemleri'],
    keywords: ['çelik boru', 'çelik boru fiyat', 'dikişli boru', 'dikişsiz boru']
  },
  {
    name: 'Paslanmaz Çelik Boru',
    slug: 'paslanmaz-celik-boru',
    category: 'boru',
    description: 'Paslanmaz çelik boru, korozyona dayanıklı çelik borudur. Gıda, kimya, ilaç ve mimari sektörlerde hijyen ve dayanıklılık gerektiren uygulamalarda kullanılır.',
    specs: [
      { label: 'Çap Aralığı', value: '8mm - 300mm' },
      { label: 'Et Kalınlığı', value: '0.5mm - 10mm' },
      { label: 'Kaliteler', value: '304, 316, 316L' },
      { label: 'Yüzey', value: 'Parlak, saten, ayna' }
    ],
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    usageAreas: ['Gıda tesisatı', 'Kimya boruları', 'Mimari korkuluk', 'Dekoratif uygulamalar'],
    keywords: ['paslanmaz boru', 'paslanmaz çelik boru fiyat', 'inox boru', '304 boru']
  }
];

export const PRODUCT_MAP: Record<string, Product> = {};
PRODUCTS.forEach(p => PRODUCT_MAP[p.slug] = p);

export const PRODUCTS_BY_CATEGORY = {
  sac: PRODUCTS.filter(p => p.category === 'sac'),
  profil: PRODUCTS.filter(p => p.category === 'profil'),
  boru: PRODUCTS.filter(p => p.category === 'boru')
};
