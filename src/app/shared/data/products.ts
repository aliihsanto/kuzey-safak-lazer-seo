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
    description: 'DKP (Dekapaj) sac, düşük karbonlu çeliğin soğuk haddeleme yöntemiyle inceltilmesi ve ardından asitle yıkanarak (dekapaj) yüzey oksitlerinden arındırılmasıyla elde edilen ince çelik levhadır. Üretim sürecinde çelik rulo, oda sıcaklığında hadde silindirlerinden geçirilerek istenilen kalınlığa ulaştırılır; bu sayede malzeme yüzeyi son derece düzgün, parlak ve homojen bir yapı kazanır. DKP sacın en belirgin özelliklerinden biri mükemmel yüzey kalitesidir; bu özellik sayesinde boyama, toz boya kaplama, galvaniz kaplama ve laminasyon gibi yüzey işlemlerine son derece uygundur. Düşük karbon içeriği (%0.02-0.12) sayesinde kolay şekillendirilebilir, derin çekme ve bükme operasyonlarına yatkındır. EN 10130 standardına uygun olarak DC01, DC03, DC04, DC05 ve DC06 kalitelerinde üretilmektedir. Kalınlık aralığı 0.3 mm ile 3 mm arasında değişir ve genellikle 1000x2000 mm veya 1250x2500 mm ebatlarında levha ya da rulo halinde temin edilir. Kuzey Şafak Lazer olarak DKP sacları fiber lazer kesim makinelerimizle mikron düzeyinde hassasiyetle kesiyoruz; CNC abkant preslerimizle istenilen açılarda bükme işlemi gerçekleştiriyoruz ve kaynaklı imalat hattımızda komple montaja hazır ürünler üretiyoruz. Beyaz eşya gövdeleri, elektrik panoları, otomotiv parçaları, mobilya aksesuarları, aydınlatma armatürleri ve elektronik kutu imalatında tercih edilen DKP sac, Türk sanayisinin en yaygın kullanılan sac türlerinden biridir.',
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
    description: 'HRP (Hot Rolled Pickled - Sıcak Haddelenmiş Asitlenmiş) sac, çelik slabların yaklaşık 1200°C sıcaklıkta hadde silindirlerinden geçirilerek istenilen kalınlığa indirilmesi ve ardından hidroklorik asit veya sülfürik asit banyosunda yıkanarak yüzeyindeki tufal (oksit) tabakasının temizlenmesiyle üretilen çelik levhadır. Bu işlem sayesinde HRP sac, sıcak haddelenmiş sacın yapısal mukavemetini korurken temiz ve tufalsız bir yüzey sunar. DKP saca kıyasla daha kalın kesitlerde (1.5 mm ile 8 mm arası) üretilir ve mekanik dayanımı daha yüksektir. EN 10111 standardına uygun olarak DD11, DD12, DD13 ve DD14 kalitelerinde imal edilir. Akma dayanımı kaliteye bağlı olarak 170-310 MPa aralığındadır. Yüzeyi temiz olduğundan boyama ve kaplama işlemleri doğrudan uygulanabilir; bu özelliğiyle siyah saca göre ek yüzey hazırlık maliyetlerini ortadan kaldırır. Genellikle 1250x2500 mm ve 1500x3000 mm standart boyutlarda rulo veya levha olarak temin edilir. Kuzey Şafak Lazer tesislerinde HRP saclar fiber lazer kesim ile hassas kontur kesimden geçirilmekte, CNC abkant preslerde istenen profillere bükülmekte, plazma kesim ile kalın levhalarda hızlı kesim yapılmakta ve kaynaklı imalat hattında komple konstrüksiyon elemanlarına dönüştürülmektedir. Makine parçaları, otomotiv şasi elemanları, tank ve depo imalatı ile genel konstrüksiyon işlerinde yaygın olarak tercih edilen HRP sac, fiyat-performans dengesiyle sanayide vazgeçilmez bir malzemedir.',
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
    description: 'Paslanmaz çelik sac, bileşiminde en az %10.5 krom bulunduran ve bu sayede yüzeyinde görünmez bir krom oksit koruyucu film tabakası oluşturarak korozyona karşı üstün direnç gösteren özel alaşımlı çelik levhadır. Üretiminde elektrik ark ocağı veya AOD (Argon Oksijen Dekarbürizasyon) konvertöründe ergitilen çelik, sıcak ve soğuk haddeleme ile istenilen kalınlığa getirilir; tavlama ve asitleme işlemleriyle mekanik özellikleri ve yüzey kalitesi optimize edilir. En yaygın kullanılan kaliteler arasında 304 (18/8 krom-nikel, genel amaçlı), 316/316L (molibden katkılı, kimyasal dirence üstün), 430 (ferritik, manyetik, ekonomik) ve 201 (düşük nikel, maliyet avantajı) sayılabilir. Yüzey seçenekleri 2B (mat), BA (parlak tavlanmış), No.4 (saten fırça) ve ayna olmak üzere farklı estetik ihtiyaçlara yanıt verir. EN 10088 standardına uygun olarak 0.5 mm ile 20 mm kalınlık aralığında, 1000x2000 mm, 1250x2500 mm ve 1500x3000 mm ebatlarında üretilir. Kuzey Şafak Lazer olarak paslanmaz çelik sacları yüksek güçlü fiber lazer kesim makinelerimizle oksitsiz ve çapaksız kesiyoruz; CNC abkant preslerimizle hassas bükme işlemi uyguluyoruz ve TIG/MIG kaynak hattımızda hijyenik dikişlerle birleştirme yapıyoruz. Endüstriyel mutfak ekipmanları, gıda işleme makineleri, hastane ve laboratuvar donanımları, mimari dekorasyon panelleri ve kimya sanayi tankları başta olmak üzere hijyen, dayanıklılık ve estetik gerektiren tüm uygulamalarda paslanmaz çelik sac en doğru tercihtir.',
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
    description: 'Galvaniz sac, çelik levhanın sıcak daldırma galvaniz yöntemiyle erimiş çinko banyosundan (yaklaşık 450°C) geçirilerek yüzeyine çinko tabakası kaplanmasıyla üretilen korozyona dayanıklı çelik malzemedir. Kaplama işlemi sırasında çinko, çelik yüzeyle metalürjik bağ kurarak demir-çinko alaşım katmanları oluşturur; bu sayede mekanik darbelere ve çizilmelere karşı kendini onarma özelliğine sahip katodik koruma sağlar. Çinko kaplama kalınlığı Z100 (her yüzde 100 g/m²) ile Z275 (her yüzde 275 g/m²) arasında değişir; kaplama kalınlığı arttıkça korozyon direnci de orantılı olarak yükselir. EN 10346 standardına uygun olarak DX51D, DX52D, DX53D ve DX56D kalitelerinde üretilir. Kalınlık aralığı 0.3 mm ile 4 mm arasındadır ve 1000x2000 mm ile 1250x2500 mm standart ebatlarında levha veya rulo formunda temin edilir. Galvaniz sac özellikle dış mekan uygulamalarında, nemli ortamlarda ve kimyasal maruziyetin bulunduğu alanlarda uzun ömürlü çözüm sunar. Kuzey Şafak Lazer olarak galvaniz sacları fiber lazer kesim makinelerimizle çinko kaplamasına zarar vermeden hassas kesim gerçekleştiriyoruz ve CNC abkant preslerimizle kaplama bütünlüğünü koruyarak bükme işlemi uyguluyoruz. Havalandırma kanalları, çatı ve cephe kaplamaları, elektrik panoları, klima üniteleri, aydınlatma gövdeleri ve tarımsal ekipman imalatında yaygın olarak kullanılan galvaniz sac, bakım gerektirmeden onlarca yıl hizmet verebilen ekonomik bir malzemedir.',
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
    description: 'Alüminyum sac, boksit cevherinden Bayer prosesiyle elde edilen alümina tozu üzerinden Hall-Heroult elektroliz yöntemiyle üretilen saf alüminyumun veya alaşımlarının haddelenmesiyle elde edilen hafif metal levhadır. Yoğunluğu 2.7 g/cm³ ile çeliğin yaklaşık üçte biri kadardır; bu da aynı boyuttaki çelik parçaya kıyasla %65 oranında ağırlık tasarrufu sağlar. Alüminyum yüzeyinde doğal olarak oluşan ince alüminyum oksit tabakası, malzemeye üstün korozyon direnci kazandırır ve ek koruyucu kaplamaya gerek kalmadan dış mekan koşullarına dayanır. 1050 (saf alüminyum, yüksek iletkenlik), 3003 (genel amaçlı), 5083 (denizcilik, yüksek korozyon direnci), 6061 (yapısal, ısıl işlem görebilir) ve 7075 (havacılık, ultra yüksek mukavemet) gibi çeşitli alaşımlarda üretilir. Kalınlık aralığı 0.5 mm ile 12 mm arasında değişir; 1000x2000 mm ve 1250x2500 mm standart ebatlarında mill finish, anodize veya boyalı yüzey seçenekleriyle temin edilir. EN 485 ve EN 573 standartlarına uygundur. Kuzey Şafak Lazer tesislerinde alüminyum saclar azot gazı destekli fiber lazer kesim ile oksitsiz ve parlak yüzeyli olarak kesilmekte, CNC abkant preslerde geri yaylanma kompanzasyonuyla hassas bükme yapılmakta ve TIG/MIG kaynak ile birleştirme işlemleri gerçekleştirilmektedir. Tabela ve reklam sektörü, cephe giydirme sistemleri, elektronik kutu imalatı, otomotiv gövde parçaları ve denizcilik ekipmanları başta olmak üzere hafiflik ve dayanıklılık gerektiren tüm sektörlerde alüminyum sac ideal tercihtir.',
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
