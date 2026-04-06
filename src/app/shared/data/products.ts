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
    description: 'St37 siyah sac, Avrupa normlarında S235JR olarak da bilinen genel amaçlı yapısal çelik levhadır. Üretiminde çelik slablar sıcak haddeleme prosesiyle yaklaşık 1100-1250°C sıcaklıkta hadde silindirlerinden geçirilerek istenilen kalınlığa indirilir ve havada soğutularak teslim edilir. Yüzeyinde mavi-siyah renkli ince bir oksit (tufal) tabakası bulunur; bu nedenle halk arasında siyah sac olarak adlandırılır. Minimum akma dayanımı 235 MPa, çekme dayanımı 360-510 MPa aralığındadır ve %26 oranında uzama kapasitesiyle iyi şekillendirilebilirlik sunar. EN 10025-2 standardına uygun olarak üretilir. Kalınlık aralığı 1.5 mm ile 100 mm arasında çok geniş bir yelpazeyi kapsar; 1500x3000 mm, 1500x6000 mm ve 2000x6000 mm standart ebatlarında levha olarak temin edilir. Kaynağa uygunluğu yüksektir ve tüm kaynak yöntemleriyle (MIG, MAG, TIG, elektrot) rahatlıkla birleştirilebilir. Kuzey Şafak Lazer olarak St37 sacları yüksek güçlü fiber lazer kesim makinelerimizle 20 mm kalınlığa kadar hassas kesim yapıyoruz; CNC abkant preslerimizle büyük ebatlı parçaları istenilen profillere büküyoruz; plazma kesim hattımızla 100 mm kalınlığa kadar hızlı kesim gerçekleştiriyoruz ve kaynaklı imalat atölyemizde komple makine gövdeleri, şasi elemanları ve konstrüksiyon parçaları üretiyoruz. Makine imalatı, çelik konstrüksiyon, kapı kasası üretimi, tank ve depo imalatı ile genel sanayi uygulamalarında en çok tercih edilen St37 sac, uygun fiyatı ve kolay bulunabilirliğiyle Türk sanayisinin temel yapı taşıdır.',
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
    description: 'St52 sac, Avrupa normlarında S355JR/J2 olarak sınıflandırılan yüksek mukavemetli yapısal çelik levhadır. St37 sacdan farklı olarak manganez ve silisyum oranları artırılarak daha yüksek mekanik özellikler elde edilir. Minimum akma dayanımı 355 MPa, çekme dayanımı 470-630 MPa aralığındadır; bu değerler St37 sacın yaklaşık %50 üzerindedir. Sıcak haddeleme prosesiyle üretilir ve normalleştirme veya termomekanik haddeleme ile tane yapısı ince tutularak darbe tokluğu optimize edilir. EN 10025-2 standardına uygun olarak J0 (-20°C darbe tokluğu) ve J2 (-20°C garantili darbe tokluğu) kalitelerinde imal edilir. Kalınlık aralığı 3 mm ile 100 mm arasındadır ve 1500x3000 mm, 1500x6000 mm, 2000x6000 mm standart ebatlarında temin edilir. Yüksek akma dayanımı sayesinde aynı taşıma kapasitesi daha ince kesitlerle sağlanabilir; bu da toplam yapı ağırlığının ve malzeme maliyetinin düşmesine katkıda bulunur. Kaynak kabiliyeti iyidir ancak kalın kesitlerde ön ısıtma uygulanması önerilir. Kuzey Şafak Lazer olarak St52 sacları fiber lazer kesim ile 25 mm kalınlığa kadar yüksek hassasiyetle kesiyoruz; CNC plazma kesim hattımızla kalın plakaları hızlı ve ekonomik şekilde işliyoruz ve kaynaklı imalat atölyemizde ağır konstrüksiyon elemanları, basınçlı kap gövdeleri ve makine şasileri üretiyoruz. İş makineleri, vinç konstrüksiyonu, basınçlı kaplar, köprü yapıları ve ağır sanayi tesisleri başta olmak üzere yüksek mekanik performans gerektiren tüm projelerde St52 sac güvenilir bir çözümdür.',
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
    description: 'Hardox, İsveç merkezli SSAB tarafından geliştirilen ve patentli üretim prosesiyle imal edilen aşınmaya dayanıklı özel çelik sac markasıdır. Üretiminde yüksek saflıkta çelik, kontrollü haddeleme ve su verme (quenching) ile sertleştirilir; bu sayede yüzey sertliği 400 ile 600 HBW (Brinell) arasında değişen olağanüstü aşınma direnci elde edilir. Hardox 400 (genel amaçlı), Hardox 450 (orta ağır koşullar), Hardox 500 (yoğun aşınma), Hardox 550 ve Hardox 600 (ekstra ağır koşullar) gibi farklı sertlik seviyelerinde üretilmektedir. Normal yapısal çeliğe kıyasla 3-4 kat daha uzun ömür sunar; bu da ekipman revizyonları arasındaki süreyi uzatarak işletme maliyetlerini önemli ölçüde düşürür. Kalınlık aralığı 3 mm ile 80 mm arasındadır. Yüksek sertliğine rağmen iyi kaynak kabiliyeti ve bükülebilirlik sunar; ancak kalın kesitlerde ön ısıtma ve düşük hidrojenli kaynak elektrotları kullanılması tavsiye edilir. Kuzey Şafak Lazer tesislerinde Hardox saclar fiber lazer kesim ile ısıdan etkilenen bölgeyi minimumda tutarak hassas kontur kesilmekte, CNC plazma kesim ile kalın plakalar hızlı şekilde işlenmekte ve kaynaklı imalat hattımızda kova astarları, kırıcı plakaları ve damper kasaları gibi komple aşınma elemanları üretilmektedir. Madencilik kepçe astarları, geri dönüşüm tesisi kırıcıları, konveyör sistemleri, mikser paletleri, beton santrali parçaları ve damper kasaları başta olmak üzere yoğun aşınma ve darbe etkisine maruz kalan tüm uygulamalarda Hardox sac endüstri standardıdır.',
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
    description: 'Baklavalı sac, düz çelik levhanın sıcak haddeleme prosesi sırasında özel desenli hadde silindirlerinden geçirilerek yüzeyine baklava (elmas) formunda kabartma desenlerin kazandırıldığı fonksiyonel çelik sactır. Kabartma desenleri genellikle 1-2 mm yüksekliğinde olup birbirine 90 derece açıyla yerleştirilmiş eşkenar dörtgen şeklindedir. Bu kabartmalar yüzeyde sürtünme katsayısını önemli ölçüde artırarak ıslak, yağlı veya tozlu ortamlarda bile etkili kaymaz performans sağlar. Ana et kalınlığı 2 mm ile 10 mm arasında değişir ve çelik, alüminyum veya paslanmaz çelik malzemeden üretilebilir. Standart ebatları 1000x2000 mm, 1250x2500 mm ve 1500x3000 mm olup EN 10025 standardına uygun S235JR veya S275JR kalitelerinde imal edilir. Baklavalı sacın en önemli avantajı güvenlik gerektiren zeminlerde ve yürüme yüzeylerinde kayma riskini minimize etmesidir; ayrıca kabartma desenleri yapısal rijitliği de artırarak levhanın bükülme direncini yükseltir. Kuzey Şafak Lazer olarak baklavalı sacları fiber lazer kesim makinelerimizle desen yüzeyinden bağımsız olarak hassas kontur kesim yapıyoruz, CNC plazma kesim ile kalın baklavalı plakaları ekonomik şekilde işliyoruz ve CNC abkant preslerimizle merdiven basamağı, platform kenarı gibi özel profillere büküyoruz. Endüstriyel merdiven basamakları, fabrika platform zeminleri, araç kasaları ve damper tabanları, rampa yüzeyleri ve yaya geçiş alanları başta olmak üzere kaymaz yüzey gerektiren tüm uygulamalarda baklavalı sac güvenilir bir çözümdür.',
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
    description: 'Gözyaşı (damla) sac, düz çelik levhanın sıcak haddeleme prosesi sırasında yüzeyine gözyaşı veya damla formunda küçük kabartma desenlerin basıldığı fonksiyonel ve dekoratif çelik levhadır. Baklavalı saca benzer şekilde kaymaz yüzey özelliği sunar ancak daha küçük, daha sık ve daha estetik desen yapısına sahiptir. Kabartma desenleri genellikle yuvarlak veya oval damla formunda olup yüzeyde homojen bir dağılım gösterir; bu sayede hem endüstriyel hem de dekoratif uygulamalarda tercih edilir. Ana et kalınlığı 1.5 mm ile 8 mm arasında değişir ve çelik ya da alüminyum malzemeden üretilebilir. Standart ebatları 1000x2000 mm ve 1250x2500 mm olup EN 10025 standardına uygun olarak üretilir. Gözyaşı sacın baklavalı saca göre avantajı daha zarif görünümü ve daha ince desenleriyle estetik gerektiren alanlarda da kullanılabilmesidir. Aynı zamanda damla formundaki kabartmalar her yönde eşit sürtünme sağlayarak yönden bağımsız kaymaz performans sunar. Kuzey Şafak Lazer olarak gözyaşı sacları fiber lazer kesim makinelerimizle desen bütünlüğünü bozmadan hassas kesim gerçekleştiriyoruz ve CNC plazma kesim hattımızla kalın gözyaşı plakaları ekonomik şekilde işliyoruz. Dekoratif iç mekan zeminleri, platform döşemeleri, araç kasaları, merdiven sahanlıkları, sergi standları ve mimari yüzey kaplamaları başta olmak üzere hem güvenlik hem estetik gerektiren uygulamalarda gözyaşı sac ideal bir malzemedir.',
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
    description: 'Corten çelik (weathering steel), bileşiminde bakır, krom, nikel ve fosfor gibi alaşım elementleri bulunduran ve atmosferik koşullara maruz kaldığında yüzeyinde koruyucu, sıkı yapışkan bir pas patinası oluşturarak iç kısmını korozyondan koruyan özel çelik türüdür. Bu patina tabakası 1-3 yıl içinde doğal olarak gelişir ve malzemeyi boyasız olarak onlarca yıl dış mekan koşullarına dayanıklı kılar. Corten A (fosfor ve bakır ağırlıklı, ince kesitler) ve Corten B (daha kalın kesitler, yapısal uygulamalar) olmak üzere iki ana türde üretilir. EN 10025-5 standardına uygun olarak S355J0WP ve S355J2WP kalitelerinde imal edilir. Kalınlık aralığı 1.5 mm ile 50 mm arasında değişir ve standart sac ebatlarında temin edilir. Corten çeliğin en büyük avantajı boyama, galvaniz veya herhangi bir koruyucu kaplama gerektirmeden dış mekanda kullanılabilmesidir; bu da yaşam boyu bakım maliyetlerini sıfıra yakın düşürür. Ayrıca zamanla oluşan sıcak kahverengi-turuncu pas görünümü estetik açıdan benzersiz bir doğal doku yaratır. Kuzey Şafak Lazer tesislerinde corten çelik saclar fiber lazer kesim ile hassas kontur ve dekoratif desen kesimden geçirilmekte, CNC plazma kesim ile kalın plakalar hızla işlenmekte ve kaynaklı imalat hattımızda mimari cephe panelleri, peyzaj elemanları ve sanatsal heykeller üretilmektedir. Mimari cephe giydirme, peyzaj duvarları ve saksılar, heykel ve sanat eserleri, köprü yapıları, konteyner imalatı ve tabela gibi uygulamalarda corten çelik doğal güzelliği ve bakım gerektirmeyen yapısıyla tercih edilen premium bir malzemedir.',
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
    description: 'Bakır sac, doğada saf halde veya sülfürlü cevherlerden elektrolitik rafinasyon yöntemiyle elde edilen %99.9 saflıktaki bakırın (Cu-DHP, Cu-ETP) haddelenmesiyle üretilen değerli metal levhadır. Bakır, periyodik tabloda 29. element olup 401 W/mK ısı iletkenliği ve %97 IACS elektrik iletkenliği ile gümüşten sonra en iyi iletken metaldir. Bu üstün iletkenlik özellikleri sayesinde elektrik ve elektronik sanayisinin vazgeçilmez hammaddesidir. Bakır sacın bir diğer önemli avantajı doğal antimikrobiyal özelliğidir; yüzeyindeki bakır iyonları bakteri ve virüsleri etkisiz hale getirir. Atmosferik koşullara maruz kaldığında yüzeyinde yeşil renkli patina tabakası oluşturarak kendini korozyondan korur; bu patina tarih boyunca mimari eserlerde estetik bir unsur olarak değerlendirilmiştir. EN 1172 standardına uygun olarak 0.3 mm ile 5 mm kalınlık aralığında, 600x1500 mm ve 1000x2000 mm standart ebatlarında üretilir. Bakır sac mükemmel şekillendirilebilirlik sunar; derin çekme, bükme ve kaynağa son derece uygundur. Kuzey Şafak Lazer olarak bakır sacları fiber lazer kesim makinelerimizle yansıma sorununu özel dalga boyu ayarıyla aşarak hassas kesim gerçekleştiriyoruz ve CNC abkant preslerimizle istenilen profillere büküyoruz. Elektrik bara ve busbar imalatı, dekoratif iç mekan ve dış mekan panelleri, tarihi yapı çatı kaplamaları, ısı eşanjörleri ve yüksek iletkenlik gerektiren endüstriyel uygulamalarda bakır sac en doğru malzeme tercihidir.',
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
    description: 'Pirinç sac, bakır ve çinkonun belirli oranlarda alaşımlanmasıyla üretilen sarı renkli metal levhadır. En yaygın kullanılan pirinç alaşımı CuZn37 (Ms63) olup %63 bakır ve %37 çinko içerir. Üretiminde bakır ve çinko birlikte eritilerek döküm yapılır, ardından sıcak ve soğuk haddeleme prosesleriyle istenilen kalınlığa getirilir; tavlama işlemiyle iç gerilmeler giderilerek homojen bir tane yapısı elde edilir. Pirinç sacın en dikkat çekici özelliği altın sarısı görünümüyle sunduğu estetik zenginliktir; bu sayede dekoratif uygulamalarda ve mimari detaylarda sıklıkla tercih edilir. Korozyon direnci bakıra yakın seviyededir ve tatlı su, deniz suyu ile birçok kimyasal ortamda dayanıklılık gösterir. Mükemmel işlenebilirlik sunar; tornalama, frezeleme, delme, bükme ve derin çekme operasyonlarına kolaylıkla tabi tutulabilir. Ayrıca kıvılcım çakmaz özelliği sayesinde patlayıcı ortamlarda kullanılan el aletlerinin imalatında da değerlendirilir. EN 1652 standardına uygun olarak 0.3 mm ile 5 mm kalınlık aralığında, 600x1500 mm ve 1000x2000 mm standart ebatlarında üretilir. Kuzey Şafak Lazer olarak pirinç sacları fiber lazer kesim makinelerimizle yüksek yansıtıcılık sorununu optimize edilmiş kesim parametreleriyle aşarak temiz ve çapaksız kesim sağlıyoruz ve CNC abkant preslerimizle pirinç harfler, dekoratif profiller ve mimari detay elemanlarına büküyoruz. Dekoratif iç mekan uygulamaları, mimari cephe detayları, müzik aleti parçaları, hırdavat ürünleri, tabela ve kabartma harfler ile otel ve restoran dekorasyon elemanları başta olmak üzere estetik ve kalite gerektiren tüm projelerde pirinç sac ideal bir malzemedir.',
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
    description: 'Delikli sac (perforasyonlu sac), düz metal levhanın CNC kontrollü zımbalama presleri veya lazer kesim makineleri kullanılarak yüzeyinde belirli desen ve geometrilerde deliklerin açılmasıyla üretilen fonksiyonel metal levhadır. Delik geometrileri yuvarlak, kare, dikdörtgen, oblong (uzun yuvarlak), altıgen ve özel dekoratif desenler olmak üzere çok çeşitli formlarda uygulanabilir. Delik çapları 1 mm ile 50 mm arasında değişir ve açık alan oranı (%15 ile %70 arası) uygulamanın ihtiyacına göre belirlenir. Çelik, paslanmaz çelik, alüminyum, bakır ve pirinç gibi farklı metallerden üretilebilir. Kalınlık aralığı 0.5 mm ile 6 mm arasındadır. Delikli sacın temel işlevleri arasında hava ve sıvı geçirgenliği, ses yutma (akustik performans), ışık difüzyonu ve estetik görünüm yer alır. Özellikle akustik uygulamalarda delikli sac arkasına yerleştirilen yalıtım malzemesiyle birlikte mükemmel ses emilim değerleri elde edilir. Kuzey Şafak Lazer olarak standart perforasyon kalıplarının yanı sıra fiber lazer kesim makinelerimizle özel desen ve logolu perforasyon işlemleri gerçekleştiriyoruz; CNC abkant preslerimizle delikli sacları U, L ve Z profillere bükerek montaja hazır hale getiriyoruz. Havalandırma kanalı ızgaraları, konser salonu ve sinema akustik panelleri, mimari cephe giydirme, endüstriyel filtre elemanları, güvenlik bariyerleri, balkon korkulukları ve dekoratif bölme duvarları başta olmak üzere hem fonksiyonel hem estetik gerektiren sayısız uygulamada delikli sac tercih edilen bir malzemedir.',
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
    description: 'Kare profil (kutu profil), kare kesitli içi boş kapalı çelik profil olup çelik şeridin sürekli şekillendirme (roll forming) yöntemiyle boru formuna getirilmesi ve ardından yüksek frekanslı indüksiyon kaynağıyla dikişinin birleştirilmesiyle üretilir. Soğuk şekillendirme (EN 10219) ve sıcak şekillendirme (EN 10210) olmak üzere iki farklı üretim standardında imal edilir. Boyut aralığı 15x15 mm ile 300x300 mm arasında değişir ve et kalınlıkları 1 mm ile 12 mm arasındadır. Standart boy uzunlukları 6 metre ve 12 metredir. Malzeme kalitesi genellikle S235JRH veya S355J2H olup yapısal uygulamalarda güvenle kullanılabilir. Kare profilin en önemli avantajı dört eşit kenarı sayesinde her yönde aynı atalet momentini sunması ve montaj kolaylığı sağlamasıdır; birleşim noktalarında düzgün yüzeyleri sayesinde kaynak dikişleri homojen ve estetik olur. İçi boş yapısı sayesinde dolu çelik kesitlere göre çok daha hafiftir ancak bükülme ve burulma mukavemeti yüksektir. Kuzey Şafak Lazer tesislerinde kare profiller fiber lazer boru kesim makinemizle açılı kesim, delik delme ve kontur kesim işlemlerinden geçirilmekte; kaynaklı imalat hattımızda ise çerçeve, şasi ve konstrüksiyon elemanlarına dönüştürülmektedir. Çelik konstrüksiyon taşıyıcı kolonlar, çit ve korkuluk sistemleri, mobilya iskelet yapıları, makine şaseleri, mezzanine platform ayakları ve sera konstrüksiyonu başta olmak üzere dayanıklılık ve montaj kolaylığı gerektiren tüm yapısal projelerde kare profil vazgeçilmez bir malzemedir.',
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
    description: 'Dikdörtgen profil, dikdörtgen kesitli içi boş kapalı çelik profil olup çelik şeridin sürekli haddeleme (roll forming) yöntemiyle şekillendirilmesi ve yüksek frekanslı indüksiyon kaynağıyla dikişinin birleştirilmesiyle üretilir. Kare profilden farklı olarak iki farklı kenar uzunluğuna sahip olması sayesinde yük taşıma yönüne göre optimize edilmiş kesit geometrisi sunar; uzun kenarı yük yönüne paralel yerleştirildiğinde aynı malzeme ağırlığıyla daha yüksek atalet momenti elde edilir. EN 10219 (soğuk şekillendirme) ve EN 10210 (sıcak şekillendirme) standartlarına uygun olarak üretilir. Boyut aralığı 20x30 mm ile 200x400 mm arasında değişir, et kalınlıkları 1 mm ile 12 mm arasındadır ve standart boy uzunlukları 6 metre ile 12 metredir. Malzeme kalitesi S235JRH veya S355J2H olup yüksek mekanik performans sunar. Dikdörtgen profilin geniş düz yüzeyleri bağlantı plakalarının ve panel elemanlarının montajını kolaylaştırır. Kuzey Şafak Lazer tesislerinde dikdörtgen profiller fiber lazer boru kesim makinemizle 45 derece köşe kesim, slot açma, birleşim boşluğu kesimi ve delik delme gibi işlemlerden geçirilmekte; kaynaklı imalat hattımızda ise kapı-pencere kasaları, mezzanine platform kirişleri, araç kasa iskeletleri ve endüstriyel raf sistemleri üretilmektedir. Taşıyıcı kiriş sistemleri, kapı ve pencere kasaları, mezzanine kat yapıları, araç kasası iskeletleri, reklam panosu taşıyıcıları ve endüstriyel raf konstrüksiyonları başta olmak üzere yönlü yük taşıma ve geniş yüzey montajı gerektiren projelerde dikdörtgen profil en uygun çözümdür.',
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
    description: 'Çelik boru, dairesel kesitli içi boş çelik profil olup iki temel üretim yöntemiyle imal edilir: dikişli çelik boru, çelik şeridin spiral veya boyuna kaynak dikişiyle birleştirilmesiyle üretilirken; dikişsiz (seamless) çelik boru, dolu çelik kütüğün yüksek sıcaklıkta delme ve haddeleme işlemiyle boruya dönüştürülmesiyle elde edilir. Dikişli borular EN 10217, dikişsiz borular ise EN 10216 standardına uygun olarak üretilir; ayrıca yapısal amaçlı borular EN 10255 standardını karşılar. Çap aralığı 10 mm ile 500 mm, et kalınlığı 1 mm ile 20 mm arasında değişir ve standart boyları 6 metre ile 12 metredir. Malzeme kalitesi uygulamaya göre S235, S355, P235GH (basınçlı kaplar) veya L245-L485 (boru hatları) gibi farklı gruplarda seçilebilir. Çelik borunun dairesel kesiti tüm yönlerde eşit mukavemet sağlar ve iç basınç uygulamalarında en verimli geometridir. Kuzey Şafak Lazer tesislerinde çelik borular fiber lazer boru kesim makinemizle düz kesim, açılı kesim, saddle kesim, delik delme ve kontur kesim gibi ileri işlemlerden geçirilmekte; kaynaklı imalat hattımızda ise boru bağlantıları, konstrüksiyon düğüm noktaları ve makine gövdeleri üretilmektedir. Su ve doğalgaz tesisatı, petrol ve gaz boru hatları, çelik konstrüksiyon kolon ve kirişler, makine imalatı mil ve gövdeleri, korkuluk ve çit sistemleri ile hidrolik-pnömatik silindir gövdeleri başta olmak üzere sıvı-gaz taşıma ve yapısal dayanım gerektiren tüm uygulamalarda çelik boru temel yapı elemanıdır.',
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
    description: 'Paslanmaz çelik boru, krom-nikel alaşımlı korozyona dayanıklı çelikten üretilen dairesel kesitli içi boş profildir. Üretiminde paslanmaz çelik şerit TIG veya lazer kaynağıyla boyuna dikişle birleştirilerek boru formuna getirilir; ardından soğuk çekme ve tavlama işlemleriyle boyutsal hassasiyet ve yüzey kalitesi optimize edilir. 304 kalite (%18 krom, %8 nikel - genel amaçlı), 316/316L kalite (%16 krom, %10 nikel, %2 molibden - kimyasal dirence üstün) ve 321 kalite (titanyum stabilize - yüksek sıcaklık) gibi farklı alaşımlarda üretilir. Çap aralığı 8 mm ile 300 mm, et kalınlığı 0.5 mm ile 10 mm arasında değişir. Yüzey işlemleri parlak (bright annealed), saten (No.4 fırça), ayna (mirror polish) ve bead removed (kaynak dikişi düzeltilmiş) seçeneklerini kapsar. ASTM A312, ASTM A269, EN 10216-5 ve EN 10217-7 standartlarına uygun olarak imal edilir. Paslanmaz çelik borunun en kritik avantajı korozyon direncinin yanı sıra hijyenik yüzeyi ve kolay temizlenebilirliğidir; bu özellikler gıda, ilaç ve biyoteknoloji sektörlerinde zorunlu bir gerekliliktir. Kuzey Şafak Lazer tesislerinde paslanmaz çelik borular fiber lazer boru kesim makinemizle oksitsiz ve çapaksız kesilmekte; kaynaklı imalat hattımızda TIG kaynak ile koruyucu argon gazı altında hijyenik birleştirmeler yapılmaktadır. Gıda üretim tesisi boru hatları, kimya ve ilaç sanayi proses boruları, mimari merdiven ve balkon korkulukları, dekoratif tabela ve mobilya elemanları ile hastane ve laboratuvar ekipmanları başta olmak üzere hijyen, estetik ve korozyon direnci gerektiren tüm uygulamalarda paslanmaz çelik boru vazgeçilmez bir malzemedir.',
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
