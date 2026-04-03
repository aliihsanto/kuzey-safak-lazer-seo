export interface LongTailPage {
  slug: string;
  serviceSlug: string;
  title: string;
  h1: string;
  metaDesc: string;
  keywords: string[];
  content: string;
  faq: { q: string; a: string }[];
}

// Malzeme bazlı long-tail sayfalar
export const LONGTAIL_PAGES: LongTailPage[] = [
  // === LAZER KESİM - MALZEME ===
  {
    slug: 'paslanmaz-celik-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Paslanmaz Çelik Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Paslanmaz Çelik Lazer Kesim Hizmeti',
    metaDesc: 'Paslanmaz çelik lazer kesim hizmeti. 0.5mm\'den 20mm\'ye kadar paslanmaz sac lazer kesim. İkitelli OSB\'de hızlı teslimat ve uygun fiyat.',
    keywords: ['paslanmaz çelik lazer kesim', 'paslanmaz sac lazer kesim', 'inox lazer kesim', 'paslanmaz lazer kesim fiyat'],
    content: `<p><strong>Paslanmaz çelik lazer kesim</strong>, gıda sanayi, medikal ekipman, mimari dekorasyon ve endüstriyel mutfak imalatında en çok tercih edilen metal işleme yöntemlerinden biridir. Kuzey Şafak Lazer olarak 2000x6000mm fiber lazer kesim makinemizle 0.5mm\'den 20mm kalınlığa kadar paslanmaz çelik sacları yüksek hassasiyetle kesiyoruz.</p>

<h3>Paslanmaz Çelik Lazer Kesimde Neden Fiber Lazer?</h3>
<p>Fiber lazer teknolojisi, paslanmaz çelikte CO2 lazere kıyasla %40 daha hızlı kesim sağlar. Yüksek ışın kalitesi sayesinde kenar düzgünlüğü mükemmel olur, çapak oluşumu minimuma iner. Özellikle ince paslanmaz saclarda (0.5-3mm) lazer kesim, plazma veya makas kesime göre çok daha temiz sonuç verir.</p>

<h3>Kesim Kapasitemiz</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Paslanmaz çelik kalınlık aralığı:</strong> 0.5mm - 20mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.1mm</li>
<li><strong>Desteklenen kaliteler:</strong> 304, 316, 316L, 430, 201</li>
</ul>

<h3>Kullanım Alanları</h3>
<p>Paslanmaz çelik lazer kesim ile ürettiğimiz parçalar; endüstriyel mutfak tezgahları, hastane ekipmanları, asansör kabin kaplamları, dekoratif paneller, gıda makineleri parçaları ve mimari cephe kaplamalarında kullanılmaktadır.</p>`,
    faq: [
      { q: 'Paslanmaz çelik lazer kesim fiyatı nasıl belirlenir?', a: 'Fiyat; malzeme kalınlığı, kesim uzunluğu, parça adedi ve geometri karmaşıklığına göre belirlenir. Detaylı fiyat için teknik çiziminizi bize iletebilirsiniz.' },
      { q: 'En kalın kaç mm paslanmaz çelik kesersiniz?', a: 'Fiber lazer makinemiz ile 20mm kalınlığa kadar paslanmaz çelik kesimi yapabiliyoruz.' },
      { q: 'Paslanmaz lazer kesimde çapak olur mu?', a: 'Fiber lazer teknolojisi sayesinde çapak oluşumu minimumdur. Özellikle azot gazı ile yapılan kesimlerde neredeyse çapaksız, oksidasyonsuz sonuç elde edilir.' }
    ]
  },
  {
    slug: 'aluminyum-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Alüminyum Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Alüminyum Lazer Kesim Hizmeti',
    metaDesc: 'Alüminyum sac lazer kesim hizmeti. 0.5mm-12mm alüminyum plaka lazer kesim. Yüksek hassasiyet, hızlı teslimat. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['alüminyum lazer kesim', 'alüminyum sac lazer kesim', 'alüminyum plaka kesim', 'alüminyum lazer kesim fiyat'],
    content: `<p><strong>Alüminyum lazer kesim</strong>, hafif metal imalatında en hassas ve hızlı kesim yöntemidir. Kuzey Şafak Lazer olarak 2000x6000mm fiber lazer kesim makinemizle 0.5mm\'den 12mm\'ye kadar alüminyum sacları yüksek hassasiyetle kesiyoruz.</p>

<h3>Alüminyum Lazerde Neden Fiber Lazer Tercih Edilir?</h3>
<p>Alüminyum yüksek yansıtıcılığa sahip bir metaldir. CO2 lazerler alüminyum keserken lazer ışınının geri yansıması sorun oluşturabilir. Fiber lazer teknolojisi ise 1070nm dalga boyu sayesinde alüminyumda çok daha verimli çalışır ve geri yansıma riskini ortadan kaldırır.</p>

<h3>Kesim Kapasitemiz</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Alüminyum kalınlık aralığı:</strong> 0.5mm - 12mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.1mm</li>
<li><strong>Desteklenen alaşımlar:</strong> 1050, 2024, 3003, 5083, 6061, 7075</li>
</ul>

<h3>Kullanım Alanları</h3>
<p>Alüminyum lazer kesim parçalarımız; havacılık, otomotiv, elektronik kutu imalatı, tabela sektörü, aydınlatma armatürleri ve dekoratif panel üretiminde yaygın olarak kullanılmaktadır.</p>`,
    faq: [
      { q: 'Alüminyum lazer kesim fiyatı çeliğe göre neden farklı?', a: 'Alüminyum kesimde daha yüksek basınçlı azot gazı kullanılır ve kesim hızı çeliğe göre farklıdır. Bu nedenle fiyatlandırma malzemeye özel yapılır.' },
      { q: 'Kaç mm alüminyum kesersiniz?', a: 'Fiber lazer makinemiz ile 12mm kalınlığa kadar alüminyum kesimi yapabiliyoruz.' },
      { q: 'Alüminyum kesimde ısı deformasyonu olur mu?', a: 'Lazer kesim çok küçük bir ısı etki alanı oluşturur. Doğru parametre ayarlarıyla deformasyon minimuma indirilir.' }
    ]
  },
  {
    slug: 'siyah-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Siyah Sac (Çelik) Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Siyah Sac Lazer Kesim Hizmeti',
    metaDesc: 'Siyah sac (karbon çelik) lazer kesim hizmeti. St37, St52 kalitelerde 0.5mm-25mm kalınlık aralığında hassas kesim. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['siyah sac lazer kesim', 'çelik lazer kesim', 'karbon çelik lazer kesim', 'st37 lazer kesim', 'sac lazer kesim fiyat'],
    content: `<p><strong>Siyah sac lazer kesim</strong> (karbon çelik / yumuşak çelik), sanayi imalatında en yaygın kullanılan lazer kesim uygulamasıdır. Kuzey Şafak Lazer olarak St37 ve St52 kalitelerinde 0.5mm\'den 25mm\'ye kadar siyah sac lazer kesim hizmeti veriyoruz.</p>

<h3>Siyah Sacda Lazer Kesim Avantajları</h3>
<p>Oksijen destekli lazer kesim ile siyah sacda yüksek hız ve düşük maliyet elde edilir. Kalın plakalarda (10mm+) oksijen gazı kesim sürecini hızlandırırken, ince saclarda (0.5-3mm) azot gazı ile oksidasyonsuz temiz kesim yapılabilir.</p>

<h3>Kesim Kapasitemiz</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Siyah sac kalınlık aralığı:</strong> 0.5mm - 25mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.1mm</li>
<li><strong>Desteklenen kaliteler:</strong> St37, St52, S235, S355, Hardox</li>
</ul>

<h3>Kullanım Alanları</h3>
<p>Siyah sac lazer kesim ile makine parçaları, konstrüksiyon elemanları, çelik kapı kasaları, sanayi tipi dolap ve kabinler, tarım makineleri parçaları ve ağır sanayi imalat ürünleri üretilmektedir.</p>`,
    faq: [
      { q: 'Siyah sac lazer kesim ile plazma kesim arasındaki fark nedir?', a: 'Lazer kesim çok daha hassas (±0.1mm) ve temiz kenar sağlar. Plazma kesim 25mm üzeri kalınlıklarda maliyet avantajı sunar, ancak kenar kalitesi lazer kadar iyi değildir.' },
      { q: 'Hardox sac lazer ile kesilir mi?', a: 'Evet, Hardox gibi aşınma dirençli çelik saclar fiber lazer ile başarıyla kesilebilir.' },
      { q: 'En uygun lazer kesim fiyatı için ne yapmalıyım?', a: 'Toplu siparişlerde birim fiyat düşer. Ayrıca DXF/DWG formatında teknik çizim göndermeniz fiyatlandırmayı hızlandırır.' }
    ]
  },
  {
    slug: 'galvaniz-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Galvanizli Sac Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Galvanizli Sac Lazer Kesim Hizmeti',
    metaDesc: 'Galvanizli sac lazer kesim hizmeti. DX51D, DX52D kalitelerinde galvaniz kaplı sac hassas lazer kesim. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['galvaniz sac lazer kesim', 'galvanizli sac kesim', 'dkp sac lazer kesim'],
    content: `<p><strong>Galvanizli sac lazer kesim</strong>, korozyona dayanıklı parça üretiminde tercih edilen bir yöntemdir. Kuzey Şafak Lazer olarak galvaniz kaplı sacları çinko kaplamasına zarar vermeden hassas lazer kesim ile işliyoruz.</p>

<h3>Galvaniz Sacda Lazer Kesim Dikkat Noktaları</h3>
<p>Galvaniz kaplama, kesim sırasında buharlaşarak çinko oksit gazı oluşturabilir. Bu nedenle uygun havalandırma ve gaz parametreleri kritik önem taşır. Azot gazı ile yapılan kesimlerde kaplama bütünlüğü korunur ve kenar kalitesi yüksek olur.</p>

<h3>Kesim Kapasitemiz</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Galvaniz sac kalınlık aralığı:</strong> 0.5mm - 6mm</li>
<li><strong>Desteklenen kaliteler:</strong> DX51D, DX52D, DX53D, S250GD, S350GD</li>
</ul>

<h3>Kullanım Alanları</h3>
<p>Havalandırma kanalları, çatı kaplamları, elektrik panoları, klima dış ünite kasaları, aydınlatma gövdeleri ve dış mekan mobilya parçaları üretiminde galvanizli sac lazer kesim tercih edilir.</p>`,
    faq: [
      { q: 'Galvaniz kaplama lazer kesimde zarar görür mü?', a: 'Doğru parametre ayarlarıyla kesim bölgesi dışındaki kaplama korunur. Kesim kenarında minimal kaplama kaybı olabilir.' },
      { q: 'Galvaniz sac lazer kesim mi yoksa makas kesim mi daha uygun?', a: 'Karmaşık geometrilerde lazer kesim, düz kesimlerde ise makas kesim daha ekonomiktir.' }
    ]
  },

  // === LAZER KESİM - KALINLIK ===
  {
    slug: 'ince-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'İnce Sac Lazer Kesim (0.5-3mm) | Kuzey Şafak Lazer',
    h1: 'İnce Sac Lazer Kesim Hizmeti (0.5mm - 3mm)',
    metaDesc: 'İnce sac lazer kesim hizmeti. 0.5mm-3mm arası ince metal saclar için yüksek hızda hassas lazer kesim. Elektronik, beyaz eşya, aydınlatma sektörü.',
    keywords: ['ince sac lazer kesim', '1mm sac lazer kesim', '2mm sac kesim', 'ince metal kesim'],
    content: `<p><strong>İnce sac lazer kesim</strong> (0.5mm - 3mm), özellikle beyaz eşya, elektronik, aydınlatma ve dekoratif metal imalatında yoğun olarak kullanılır. Kuzey Şafak Lazer olarak ince saclarda çarpılma ve deformasyonsuz, yüksek hızda lazer kesim hizmeti sunuyoruz.</p>

<h3>İnce Sacda Lazer Kesim Avantajı</h3>
<p>İnce saclarda fiber lazer, çok yüksek kesim hızlarına ulaşır. 1mm siyah sacda 30m/dk üzeri hızlarla kesim yapılabilir. Bu hız avantajı, seri üretim projelerinde büyük maliyet tasarrufu sağlar. Azot gazı ile yapılan kesimlerde kenar tamamen temiz ve oksidasyonsuzdur.</p>

<h3>Desteklenen Malzemeler (0.5-3mm)</h3>
<ul>
<li>Siyah sac (St37, St52)</li>
<li>Paslanmaz çelik (304, 316)</li>
<li>Alüminyum (1050, 5083, 6061)</li>
<li>Galvanizli sac (DX51D)</li>
<li>Bakır ve pirinç</li>
</ul>`,
    faq: [
      { q: 'İnce sacda lazer kesim deformasyon yapar mı?', a: 'Doğru hız ve güç parametreleri ile ince sacda termal deformasyon minimuma indirilir. Azot gazı kullanımı ısı etkisini daha da azaltır.' },
      { q: 'İnce sac lazer kesim fiyatı nasıl hesaplanır?', a: 'İnce saclarda kesim hızı yüksek olduğu için birim kesim maliyeti düşüktür. Fiyat genellikle toplam kesim metre ve parça adedine göre belirlenir.' }
    ]
  },
  {
    slug: 'kalin-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Kalın Sac Lazer Kesim (10-25mm) | Kuzey Şafak Lazer',
    h1: 'Kalın Sac Lazer Kesim Hizmeti (10mm - 25mm)',
    metaDesc: 'Kalın sac lazer kesim hizmeti. 10mm-25mm arası çelik plaka lazer kesim. Konstrüksiyon, makine imalat ve ağır sanayi projeleri için.',
    keywords: ['kalın sac lazer kesim', '10mm sac lazer kesim', '20mm çelik kesim', 'kalın plaka lazer kesim'],
    content: `<p><strong>Kalın sac lazer kesim</strong> (10mm - 25mm), ağır sanayi, konstrüksiyon ve makine imalatı projelerinde kritik öneme sahiptir. Kuzey Şafak Lazer olarak yüksek güçlü fiber lazer makinemiz ile 25mm\'ye kadar çelik plakalarda hassas kesim gerçekleştiriyoruz.</p>

<h3>Kalın Sacda Lazer vs Plazma</h3>
<p>10mm üzeri kalınlıklarda lazer kesim, plazma kesime göre çok daha dar kerf genişliği (kesim boşluğu) ve daha düzgün kenar kalitesi sunar. Ancak 25mm üzerinde plazma kesim maliyet avantajı sağlayabilir. Her iki hizmeti de sunmamız sayesinde projenize en uygun yöntemi birlikte belirleyebiliriz.</p>

<h3>Kesim Parametreleri</h3>
<ul>
<li><strong>10mm çelik:</strong> Oksijen kesim - yüksek hız, düzgün kenar</li>
<li><strong>15mm çelik:</strong> Oksijen kesim - orta hız, temiz kenar</li>
<li><strong>20mm çelik:</strong> Oksijen kesim - kontrollü hız, tam penetrasyon</li>
<li><strong>25mm çelik:</strong> Oksijen kesim - düşük hız, maksimum güç</li>
</ul>`,
    faq: [
      { q: '25mm çelik plaka lazer ile kesilir mi?', a: 'Evet, yüksek güçlü fiber lazer makinemiz ile 25mm kalınlığa kadar çelik plaka kesebiliyoruz.' },
      { q: 'Kalın sacda lazer kesim toleransı nedir?', a: 'Kalın saclarda kesim toleransı ±0.2-0.3mm aralığındadır. Bu değer plazma kesimin ±1-2mm toleransından çok daha iyidir.' }
    ]
  },

  // === CNC BÜKÜM - LONG TAIL ===
  {
    slug: 'sac-bukum-fiyatlari',
    serviceSlug: 'cnc-bukum',
    title: 'Sac Büküm Fiyatları 2025 | CNC Abkant Büküm - Kuzey Şafak Lazer',
    h1: 'Sac Büküm Fiyatları',
    metaDesc: 'Güncel sac büküm fiyatları. CNC abkant pres ile 0.5mm-20mm arası sac büküm. Fason büküm, seri üretim büküm hizmeti. İkitelli OSB.',
    keywords: ['sac büküm fiyatları', 'cnc büküm fiyat', 'abkant büküm fiyat', 'fason büküm fiyat', 'sac kıvırma fiyat'],
    content: `<p><strong>Sac büküm fiyatları</strong>, malzeme cinsi, kalınlığı, büküm uzunluğu, büküm sayısı ve parça adedine göre belirlenir. Kuzey Şafak Lazer olarak 4 metre CNC abkant pres makinemiz ile rekabetçi fiyatlarla büküm hizmeti sunuyoruz.</p>

<h3>Sac Büküm Fiyatını Etkileyen Faktörler</h3>
<ul>
<li><strong>Malzeme kalınlığı:</strong> Kalın saclar daha fazla tonaj gerektirir, bu da fiyatı etkiler</li>
<li><strong>Büküm uzunluğu:</strong> 4 metreye kadar tek seferde büküm yapabiliyoruz</li>
<li><strong>Büküm sayısı:</strong> Parça başına büküm adedi arttıkça birim fiyat etkilenir</li>
<li><strong>Parça adedi:</strong> Seri üretimde birim maliyet önemli ölçüde düşer</li>
<li><strong>Tolerans:</strong> Dar tolerans gerektiren işlerde özel kalıp gerekebilir</li>
</ul>

<h3>Fason Büküm Hizmeti</h3>
<p>Kendi sacınızı getirip sadece büküm hizmeti alabilirsiniz. Ayrıca lazer kesim + büküm kombine hizmetimizde toplam maliyette avantaj sağlarsınız.</p>`,
    faq: [
      { q: 'Fason sac büküm yaptırabilir miyim?', a: 'Evet, kendi malzemenizi getirerek sadece büküm hizmeti alabilirsiniz. Lazer kesim + büküm birlikte yaptırırsanız toplam maliyette avantaj sağlarsınız.' },
      { q: 'Minimum sipariş miktarı var mı?', a: 'Minimum sipariş miktarımız yoktur. Tek parça büküm de yapıyoruz, seri üretim de.' },
      { q: 'Büküm toleransı nedir?', a: 'CNC abkant presimiz ile ±0.1mm açısal ve ±0.2mm boyutsal tolerans sağlıyoruz.' }
    ]
  },
  {
    slug: 'paslanmaz-celik-bukum',
    serviceSlug: 'cnc-bukum',
    title: 'Paslanmaz Çelik CNC Büküm | Kuzey Şafak Lazer İstanbul',
    h1: 'Paslanmaz Çelik CNC Büküm Hizmeti',
    metaDesc: 'Paslanmaz çelik CNC büküm hizmeti. 304 ve 316 paslanmaz sacda hassas abkant büküm. Gıda, medikal ve mimari sektör için.',
    keywords: ['paslanmaz çelik büküm', 'paslanmaz sac büküm', 'inox büküm', 'paslanmaz abkant büküm'],
    content: `<p><strong>Paslanmaz çelik büküm</strong>, gıda sanayi, medikal ekipman ve mimari projeler için kritik bir işlemdir. Paslanmaz çeliğin geri esneme (springback) özelliği normal çelikten fazladır, bu nedenle CNC kontrollü hassas büküm gerektirir.</p>

<h3>Paslanmaz Çelikte Büküm Dikkat Noktaları</h3>
<p>Paslanmaz çelik, karbon çeliğe göre %30-50 daha fazla geri esneme yapar. CNC abkant presimizin otomatik açı kompanzasyonu bu durumu telafi ederek istenen açıyı ilk seferde yakalar. Ayrıca paslanmaz yüzeyinin çizilmemesi için özel PE film korumalı büküm yapıyoruz.</p>

<h3>Büküm Kapasitemiz</h3>
<ul>
<li><strong>Maksimum büküm uzunluğu:</strong> 4 metre</li>
<li><strong>Paslanmaz kalınlık aralığı:</strong> 0.5mm - 8mm</li>
<li><strong>Desteklenen kaliteler:</strong> 304, 316, 316L, 430</li>
<li><strong>Yüzey koruma:</strong> PE film korumalı büküm</li>
</ul>`,
    faq: [
      { q: 'Paslanmaz sacda büküm çizik yapar mı?', a: 'PE film korumalı büküm yaptığımız için yüzey çizilmez. Film, büküm sonrası kolayca sökülür.' },
      { q: 'Paslanmaz büküm fiyatı normal çelikten pahalı mı?', a: 'Paslanmaz çelik daha sert olduğu için biraz daha fazla tonaj gerektirir, ancak fiyat farkı çok büyük değildir.' }
    ]
  },

  // === PLAZMA KESİM - LONG TAIL ===
  {
    slug: 'kalin-plaka-plazma-kesim',
    serviceSlug: 'cnc-plazma',
    title: 'Kalın Plaka Plazma Kesim (25-50mm) | Kuzey Şafak Lazer',
    h1: 'Kalın Plaka CNC Plazma Kesim Hizmeti',
    metaDesc: 'Kalın plaka CNC plazma kesim hizmeti. 25mm-50mm arası çelik plaka plazma kesim. Konstrüksiyon, gemi sanayi ve ağır makine imalatı için.',
    keywords: ['kalın plaka plazma kesim', 'kalın çelik plazma kesim', '50mm plazma kesim', 'plazma kesim fiyat'],
    content: `<p><strong>Kalın plaka plazma kesim</strong>, lazer kesimin sınırlarının ötesindeki kalınlıklarda (25mm+) en verimli metal kesim yöntemidir. Kuzey Şafak Lazer olarak 2600x6000mm CNC plazma kesim makinemizle 50mm\'ye kadar çelik plakaları hassas şekilde kesiyoruz.</p>

<h3>Plazma Kesim Ne Zaman Tercih Edilir?</h3>
<p>25mm üzeri kalınlıklarda plazma kesim, lazer kesime göre çok daha hızlı ve ekonomiktir. Konstrüksiyon, gemi sanayi ve ağır makine imalatında yaygın olarak kullanılır. CNC kontrolü sayesinde karmaşık geometriler de kesilebiir.</p>

<h3>Kesim Kapasitemiz</h3>
<ul>
<li><strong>Maksimum plaka boyutu:</strong> 2600 x 6000 mm</li>
<li><strong>Çelik kalınlık aralığı:</strong> 6mm - 50mm</li>
<li><strong>Kesim toleransı:</strong> ±0.5mm</li>
</ul>`,
    faq: [
      { q: 'Plazma kesim ile lazer kesim arasındaki fark nedir?', a: 'Plazma kesim kalın plakalarda (25mm+) daha hızlı ve ekonomiktir. Lazer kesim ise ince/orta kalınlıklarda çok daha hassas sonuç verir. 10-25mm aralığında her iki yöntem de kullanılabilir.' },
      { q: '50mm çelik plaka kesiyor musunuz?', a: 'Evet, CNC plazma makinemiz ile 50mm kalınlığa kadar çelik plaka kesimi yapabiliyoruz.' }
    ]
  },

  // === KAYNAKLI İMALAT - LONG TAIL ===
  {
    slug: 'paslanmaz-celik-kaynak',
    serviceSlug: 'kaynakli-imalat',
    title: 'Paslanmaz Çelik Kaynak İmalatı | Kuzey Şafak Lazer İstanbul',
    h1: 'Paslanmaz Çelik Kaynak İmalatı',
    metaDesc: 'Profesyonel paslanmaz çelik kaynak imalatı. TIG, MIG ve lazer kaynak ile endüstriyel mutfak, gıda makineleri ve mimari proje üretimi.',
    keywords: ['paslanmaz çelik kaynak', 'paslanmaz kaynak imalat', 'inox kaynak', 'tig kaynak paslanmaz'],
    content: `<p><strong>Paslanmaz çelik kaynak imalatı</strong>, gıda güvenliği, korozyon direnci ve estetik görünüm gerektiren projelerde vazgeçilmez bir süreçtir. Kuzey Şafak Lazer olarak TIG, MIG ve lazer kaynak yöntemleriyle profesyonel paslanmaz çelik kaynak imalatı hizmeti veriyoruz.</p>

<h3>Kaynak Yöntemlerimiz</h3>
<ul>
<li><strong>TIG Kaynak (GTAW):</strong> İnce paslanmaz parçalarda temiz ve kontrollü kaynak dikişi</li>
<li><strong>MIG Kaynak (GMAW):</strong> Kalın parçalarda hızlı ve güçlü birleştirme</li>
<li><strong>Lazer Kaynak:</strong> Minimum ısı deformasyonu ile hassas kaynak</li>
</ul>

<h3>Uygulama Alanları</h3>
<p>Endüstriyel mutfak tezgahları, gıda işleme makineleri, hastane ekipmanları, kimya sanayi tankları, mimari korkuluk ve merdiven sistemleri, dekoratif metal işleri.</p>`,
    faq: [
      { q: 'Paslanmaz kaynak dikişi parlatılır mı?', a: 'Evet, talep üzerine kaynak dikişleri taşlama ve parlatma işlemi ile görünmez hale getirilebilir.' },
      { q: 'Gıdaya uygun kaynak yapıyor musunuz?', a: 'Evet, gıda sanayi standartlarına uygun, tam penetrasyonlu TIG kaynak ile hijyenik kaynak dikişleri üretiyoruz.' }
    ]
  },
  {
    slug: 'celik-konstruksiyon-imalat',
    serviceSlug: 'kaynakli-imalat',
    title: 'Çelik Konstrüksiyon İmalat | Kuzey Şafak Lazer İstanbul',
    h1: 'Çelik Konstrüksiyon İmalatı',
    metaDesc: 'Profesyonel çelik konstrüksiyon imalatı. Fabrika, depo, hangar ve çelik yapı projelerinde kesim, büküm ve kaynak hizmetleri. İkitelli OSB.',
    keywords: ['çelik konstrüksiyon imalat', 'çelik yapı imalat', 'çelik konstrüksiyon kaynak', 'metal konstrüksiyon'],
    content: `<p><strong>Çelik konstrüksiyon imalatı</strong>, modern yapı sektörünün temel taşlarından biridir. Kuzey Şafak Lazer olarak lazer kesim, CNC büküm ve kaynak hizmetlerimizi entegre ederek çelik konstrüksiyon projelerinizi baştan sona gerçekleştiriyoruz.</p>

<h3>Entegre Üretim Avantajı</h3>
<p>Aynı çatı altında lazer kesim + büküm + kaynak hizmeti sunmamız, çelik konstrüksiyon projelerinde hem zaman hem maliyet avantajı sağlar. Tek tedarikçi ile çalışmanız koordinasyon süreçlerini kolaylaştırır.</p>

<h3>Hizmet Verdiğimiz Konstrüksiyon Türleri</h3>
<ul>
<li>Fabrika ve atölye çelik taşıyıcı sistemler</li>
<li>Depo ve hangar projeleri</li>
<li>Mezzanine (asma kat) sistemleri</li>
<li>Çelik merdiven ve platform imalatı</li>
<li>Makine şasesi ve konstrüksiyon</li>
</ul>`,
    faq: [
      { q: 'Proje çizimi olmadan çelik konstrüksiyon yaptırabilir miyim?', a: 'Teknik çiziminiz yoksa, ihtiyacınıza göre birlikte proje geliştirebiliriz. Ancak mühendislik hesabı gerektiren projelerde statik proje şarttır.' },
      { q: 'Çelik konstrüksiyonda hangi profiller kullanılır?', a: 'HEA, HEB, IPE, UPN, kutu profil ve borular başta olmak üzere her türlü çelik profil ile imalat yapıyoruz.' }
    ]
  }
];

export const LONGTAIL_MAP: Record<string, LongTailPage> = {};
LONGTAIL_PAGES.forEach(p => LONGTAIL_MAP[p.slug] = p);
