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
    content: `<p><strong>Paslanmaz çelik lazer kesim</strong>, gıda sanayi, medikal ekipman üretimi, mimari dekorasyon, endüstriyel mutfak imalatı ve kimya sanayi gibi birçok sektörde en çok tercih edilen metal işleme yöntemlerinden biridir. Paslanmaz çelik (inox), korozyon direnci, hijyenik yapısı ve estetik görünümü sayesinde kritik uygulamalarda vazgeçilmez bir malzemedir. Ancak bu malzemenin sert ve tok yapısı, geleneksel kesim yöntemleriyle işlenmesini zorlaştırır. Fiber lazer teknolojisi, paslanmaz çelikte temiz, hassas ve hızlı kesim yapabilmenin en etkili yoludur. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde 2000x6000mm çalışma alanına sahip fiber lazer kesim makinemizle 0.5mm\'den 20mm kalınlığa kadar her türlü paslanmaz çelik sacı yüksek hassasiyetle işliyoruz.</p>

<h3>Teknik Detaylar ve Malzeme Özellikleri</h3>
<p>Paslanmaz çelik, minimum %10.5 krom içeriği sayesinde yüzeyinde koruyucu bir oksit tabakası oluşturur. Bu özellik malzemeyi korozyona karşı dirençli kılarken, lazer kesim sürecinde de belirli parametrelerin dikkatle ayarlanmasını gerektirir. Ostenitik paslanmaz çelikler (304, 316, 316L) yüksek tokluk ve düşük ısı iletkenliği nedeniyle ısı birikimi riski taşır; bu nedenle kesim hızı ve gaz basıncı optimizasyonu kritik öneme sahiptir. Ferritik kaliteler (430) ise daha kolay kesilir ancak daha kırılgan yapıdadır. Fiber lazer makinemiz 1070nm dalga boyunda çalışarak paslanmaz çeliğin yüzey yansıtıcılığını etkin biçimde aşar ve malzemeye maksimum enerji transferi sağlar. İnce paslanmaz saclarda (0.5-3mm) kesim toleransı ±0.05mm\'ye kadar düşerken, kalın kesitlerde (15-20mm) ±0.15mm tolerans değerleri elde edilir.</p>

<h3>Süreç Açıklaması</h3>
<p>Paslanmaz çelik lazer kesim sürecinde iki temel gaz kullanılır: azot (N2) ve oksijen (O2). Azot gazı ile yapılan kesimde, yüksek basınçlı azot (8-16 bar) ergiyen metali kesim bölgesinden uzaklaştırır ve oksidasyon oluşumunu engeller. Bu yöntem özellikle gıda sanayi, medikal ve dekoratif uygulamalarda tercih edilir; çünkü kesim kenarı parlak, temiz ve oksidasyonsuzdur. Oksijen destekli kesimde ise ekzotermik reaksiyon sayesinde daha kalın kesitlerde hızlı kesim mümkün olur, ancak kenar yüzeyinde hafif bir oksit tabakası oluşur. Müşterilerimizin uygulama alanına göre en uygun gaz ve parametre kombinasyonunu belirliyor, her projede optimum sonucu garanti ediyoruz. Kesim öncesinde DXF veya DWG formatındaki teknik çizimler nesting yazılımımızda optimize edilerek fire oranı minimuma indirilir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Paslanmaz çelik kalınlık aralığı:</strong> 0.5mm - 20mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.05mm (ince sac), ±0.15mm (kalın sac)</li>
<li><strong>Desteklenen kaliteler:</strong> AISI 304, 304L, 316, 316L, 316Ti, 430, 441, 201, 202</li>
<li><strong>Yüzey tipleri:</strong> 2B, BA, No.4 (saten), ayna (mirror), desen kaplamalı</li>
<li><strong>Maksimum kesim hızı (1mm):</strong> 35 m/dk üzeri</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Çapaksız, oksidasyonsuz kesim kenarı (azot gazı ile)</li>
<li>±0.05mm hassasiyetle mikron düzeyinde doğruluk</li>
<li>Termal deformasyon minimumda - ısı etki alanı (HAZ) son derece dar</li>
<li>Karmaşık geometriler, ince detaylar ve küçük delikler sorunsuz kesilir</li>
<li>Yüksek kesim hızı sayesinde seri üretimde düşük birim maliyet</li>
<li>Nesting optimizasyonu ile malzeme firesi %5\'in altına düşürülür</li>
<li>Kesim sonrası ek işlem (çapak alma, taşlama) gerektirmez</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Endüstriyel mutfak tezgahları, evye ve davlumbaz imalatı</li>
<li>Gıda işleme makineleri ve konveyör parçaları</li>
<li>Hastane, laboratuvar ve medikal ekipman parçaları</li>
<li>Asansör kabin kaplamları ve dekoratif paneller</li>
<li>Mimari cephe kaplama ve korkuluk sistemleri</li>
<li>Kimya sanayi tank ve reaktör parçaları</li>
<li>Su arıtma ve filtrasyon sistemi komponentleri</li>
<li>Otomotiv egzoz ve manifold parçaları</li>
<li>Enerji sektörü boru bağlantı elemanları (flanş, kaplin)</li>
<li>Tabela, totem ve yönlendirme tabelası üretimi</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>İkitelli OSB\'deki modern üretim tesisimizde yüksek güçlü fiber lazer makinemiz, deneyimli operatör kadromuz ve gelişmiş nesting yazılımımız ile paslanmaz çelik lazer kesimde sektörün en iyi sonuçlarını sunuyoruz. Lazer kesim, CNC büküm ve kaynak hizmetlerini aynı çatı altında vererek projelerinizi tek elden tamamlıyoruz. Prototipten seri üretime, tek parçadan binlerce adetle kadar her ölçekte hizmet veriyoruz. Malzeme tedariki konusunda da destek sağlıyoruz; stoklarımızda yaygın kullanılan 304 ve 316L kalitelerinde hazır saclar bulunmaktadır.</p>

<p>Paslanmaz çelik lazer kesim ihtiyaçlarınız için hemen teknik çiziminizi gönderin, aynı gün içinde detaylı teklif alın. Acil projelerinizde 24 saat içinde teslimat imkanı sunuyoruz.</p>`,
    faq: [
      { q: 'Paslanmaz çelik lazer kesim fiyatı nasıl belirlenir?', a: 'Fiyat; malzeme kalınlığı, kesim uzunluğu (metre), parça adedi, geometri karmaşıklığı ve kullanılan gaz türüne (azot veya oksijen) göre belirlenir. Hassas fiyatlandırma için DXF veya DWG formatında teknik çiziminizi bize iletmeniz yeterlidir.' },
      { q: 'En kalın kaç mm paslanmaz çelik kesersiniz?', a: 'Fiber lazer makinemiz ile 20mm kalınlığa kadar paslanmaz çelik kesimi yapabiliyoruz. 20mm üzeri kalınlıklar için CNC plazma kesim alternatifimiz mevcuttur.' },
      { q: 'Paslanmaz lazer kesimde hangi gaz kullanılır?', a: 'Paslanmaz çelik kesiminde genellikle yüksek basınçlı azot gazı (N2) kullanılır. Azot, oksidasyonu önleyerek parlak ve temiz bir kesim kenarı sağlar. Kalın kesitlerde oksijen destekli kesim de tercih edilebilir.' },
      { q: 'DXF dosyası olmadan paslanmaz lazer kesim teklifi alabilir miyim?', a: 'Basit geometriler için ölçülü el çizimi veya PDF göndererek ön teklif alabilirsiniz. Ancak hassas fiyatlandırma ve üretim için DXF veya DWG formatında çizim gereklidir. Çiziminiz yoksa teknik ekibimiz size bu konuda yardımcı olabilir.' },
      { q: 'Paslanmaz çelik lazer kesim teslimat süresi ne kadar?', a: 'Standart siparişlerde 2-3 iş günü teslimat sağlıyoruz. Acil projelerde aynı gün veya ertesi gün teslimat seçeneğimiz mevcuttur. Büyük seri üretim projelerinde termin planı birlikte belirlenir.' }
    ]
  },
  {
    slug: 'aluminyum-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Alüminyum Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Alüminyum Lazer Kesim Hizmeti',
    metaDesc: 'Alüminyum sac lazer kesim hizmeti. 0.5mm-12mm alüminyum plaka lazer kesim. Yüksek hassasiyet, hızlı teslimat. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['alüminyum lazer kesim', 'alüminyum sac lazer kesim', 'alüminyum plaka kesim', 'alüminyum lazer kesim fiyat'],
    content: `<p><strong>Alüminyum lazer kesim</strong>, hafif metal imalatında en hassas ve en hızlı kesim yöntemlerinden biridir. Alüminyum; düşük yoğunluğu, mükemmel korozyon direnci, yüksek ısı ve elektrik iletkenliği sayesinde havacılık, otomotiv, elektronik, mimari ve gıda ambalaj sektörlerinde yaygın olarak kullanılan stratejik bir metaldir. Ancak alüminyumun yüksek yansıtıcılığı ve ısı iletkenliği, geleneksel CO2 lazer sistemlerinde ciddi sorunlara yol açabilir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde 2000x6000mm çalışma alanına sahip fiber lazer kesim makinemizle 0.5mm\'den 12mm\'ye kadar alüminyum sacları yüksek hassasiyetle, deformasyonsuz olarak kesiyoruz.</p>

<h3>Teknik Detaylar ve Malzeme Özellikleri</h3>
<p>Alüminyum, çeliğe kıyasla yaklaşık 3 kat daha yüksek ısı iletkenliğine sahiptir; bu durum kesim bölgesinden ısının hızla dağılmasına ve lazer enerjisinin verimli kullanılamamasına neden olabilir. Ayrıca alüminyumun %90\'ın üzerinde IR dalga boyu yansıtıcılığı, CO2 lazerlerde (10.6 mikron dalga boyu) lazer ışınının geri yansımasına ve optik hasarlarına yol açabilir. Fiber lazer teknolojisi ise 1070nm dalga boyunda çalışarak alüminyumun yansıtıcılık eşiğini aşar ve malzemeye etkili enerji transferi sağlar. Böylece alüminyumda temiz, hassas ve tekrarlanabilir kesim sonuçları elde edilir. Alaşım türüne bağlı olarak kesim parametreleri farklılık gösterir: 5000 serisi (5083, 5754) denizcilik uygulamalarında, 6000 serisi (6061, 6082) yapısal uygulamalarda, 7000 serisi (7075) ise havacılık sektöründe tercih edilir.</p>

<h3>Süreç Açıklaması</h3>
<p>Alüminyum lazer kesimde birincil yardımcı gaz olarak yüksek saflıkta azot (N2) kullanılır. Azot gazı 12-20 bar basınç aralığında uygulanarak ergiyen alüminyumu kesim bölgesinden hızla uzaklaştırır ve oksidasyonu önler. Bu yöntemle kesim kenarı parlak, pürüzsüz ve çapaksız olur. İnce alüminyum saclarda (0.5-3mm) çok yüksek kesim hızları elde edilir; 1mm alüminyumda 25 m/dk üzeri hız mümkündür. Kalın kesitlerde (8-12mm) ise lazer gücü ve gaz basıncı artırılarak tam penetrasyon sağlanır. Kesim öncesinde nesting yazılımımız ile parçalar sac üzerine optimum şekilde yerleştirilerek fire oranı minimuma indirilir. Alüminyumun düşük erime noktası (660°C) nedeniyle ısı kontrolü hassas biçimde yönetilir ve termal deformasyon önlenir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Alüminyum kalınlık aralığı:</strong> 0.5mm - 12mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.1mm</li>
<li><strong>Desteklenen alaşımlar:</strong> 1050, 1060, 1100, 2024, 3003, 3105, 5005, 5052, 5083, 5754, 6061, 6082, 7075</li>
<li><strong>Yüzey durumları:</strong> Mill finish, eloksal kaplı, PE filmli, fırçalanmış (saten)</li>
<li><strong>Minimum delik çapı:</strong> Malzeme kalınlığının 1.2 katı</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Fiber lazer ile geri yansıma riski ortadan kalkar - güvenli ve verimli kesim</li>
<li>Azot gazı ile oksidasyonsuz, parlak kesim kenarı</li>
<li>Termal deformasyon minimumda - ince saclarda bile çarpılma olmaz</li>
<li>Yüksek kesim hızı ile seri üretimde maliyet avantajı</li>
<li>0.5mm\'den 12mm\'ye kadar geniş kalınlık aralığı</li>
<li>Karmaşık geometriler, küçük delikler ve ince detaylar sorunsuzca kesilir</li>
<li>Eloksal kaplı alüminyumda kaplama bütünlüğü korunur</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Havacılık ve uzay sanayi yapısal parçaları</li>
<li>Otomotiv gövde ve şasi komponentleri</li>
<li>Elektronik kutu, kasa ve muhafaza imalatı</li>
<li>LED aydınlatma armatür gövdeleri ve soğutucu plakalar</li>
<li>Tabela, reklam panosu ve totem üretimi</li>
<li>Mimari cephe kaplama panelleri (kompozit panel altlığı)</li>
<li>Denizcilik sektörü tekne ve yat parçaları</li>
<li>Gıda ambalaj makineleri komponentleri</li>
<li>Savunma sanayi hafif zırh ve platform elemanları</li>
<li>Dekoratif metal işleri ve mobilya aksesuarları</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Alüminyum lazer kesimde en kritik faktörler doğru parametre ayarları ve yüksek saflıkta gaz kullanımıdır. İkitelli OSB\'deki tesisimizde her alüminyum alaşımı için optimize edilmiş kesim parametrelerimiz, yüksek saflıkta azot gaz hattımız ve deneyimli operatör ekibimiz ile sektörün en kaliteli kesim sonuçlarını sunuyoruz. Lazer kesim sonrası ihtiyaç duyulan CNC büküm ve kaynak işlemlerini de aynı tesiste gerçekleştirerek projelerinizi tek noktadan tamamlıyoruz. Malzeme tedariki konusunda geniş stok ağımızla da destek sağlıyoruz.</p>

<p>Alüminyum lazer kesim projeleriniz için hemen teknik çiziminizi gönderin, aynı gün içinde detaylı teklif alın. Prototipten seri üretime her ölçekte yanınızdayız.</p>`,
    faq: [
      { q: 'Alüminyum lazer kesim fiyatı çeliğe göre neden farklıdır?', a: 'Alüminyum kesimde çeliğe kıyasla daha yüksek basınçlı azot gazı kullanılır ve lazer gücü parametreleri farklıdır. Ayrıca alüminyumun yüksek ısı iletkenliği nedeniyle kesim hızları değişir. Tüm bu faktörler fiyatlandırmayı etkiler.' },
      { q: 'Kaç mm kalınlıkta alüminyum kesersiniz?', a: 'Fiber lazer makinemiz ile 0.5mm\'den 12mm kalınlığa kadar alüminyum sac ve plaka kesimi yapabiliyoruz.' },
      { q: 'Alüminyum kesimde ısı deformasyonu olur mu?', a: 'Fiber lazer çok küçük bir ısı etki alanı (HAZ) oluşturur. Doğru hız, güç ve gaz basıncı parametreleri ile deformasyon minimuma indirilir. İnce saclarda bile çarpılma problemi yaşanmaz.' },
      { q: 'Eloksal kaplı alüminyum lazer ile kesilir mi?', a: 'Evet, eloksal kaplı alüminyum sacları fiber lazer ile kesebiliyoruz. Kesim bölgesi dışındaki eloksal kaplama zarar görmez, ancak kesim kenarında doğal olarak kaplama kesilmiş olur.' },
      { q: 'Alüminyum lazer kesim için minimum sipariş miktarı var mı?', a: 'Minimum sipariş miktarımız yoktur. Tek parça prototipten binlerce adetlik seri üretime kadar her ölçekte hizmet veriyoruz.' }
    ]
  },
  {
    slug: 'siyah-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Siyah Sac (Çelik) Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Siyah Sac Lazer Kesim Hizmeti',
    metaDesc: 'Siyah sac (karbon çelik) lazer kesim hizmeti. St37, St52 kalitelerde 0.5mm-25mm kalınlık aralığında hassas kesim. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['siyah sac lazer kesim', 'çelik lazer kesim', 'karbon çelik lazer kesim', 'st37 lazer kesim', 'sac lazer kesim fiyat'],
    content: `<p><strong>Siyah sac lazer kesim</strong> (karbon çelik / yumuşak çelik), endüstriyel imalatın en temel ve en yaygın kullanılan lazer kesim uygulamasıdır. Siyah sac; makine imalatı, konstrüksiyon, otomotiv yan sanayi, tarım makineleri, çelik mobilya ve ağır sanayi gibi sayısız sektörde ana malzeme olarak kullanılır. Düşük maliyeti, kolay şekillendirilebilirliği ve yüksek mekanik dayanımı ile sanayinin bel kemiğidir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde St37 ve St52 başta olmak üzere çeşitli kalitelerde 0.5mm\'den 25mm\'ye kadar siyah sac lazer kesim hizmeti veriyoruz.</p>

<h3>Teknik Detaylar ve Malzeme Özellikleri</h3>
<p>Siyah sac (karbon çelik), demir ve karbon alaşımından oluşur ve yüzeyinde haddeleme sonrası oluşan koyu renkli oksit tabakası (mill scale) bulunur. St37 (S235JR) genel amaçlı yapısal uygulamalarda kullanılırken, St52 (S355JR) daha yüksek mukavemet gerektiren konstrüksiyon projelerinde tercih edilir. Hardox serisi aşınma dirençli çelikler ise madencilik, geri dönüşüm ve ağır iş makineleri sektöründe kullanılır. Fiber lazer teknolojisi, siyah sacda mükemmel kesim kalitesi sunar: ince saclarda (0.5-3mm) ±0.05mm, orta kalınlıklarda (3-10mm) ±0.1mm ve kalın plakalarda (10-25mm) ±0.2mm tolerans değerleri elde edilir. Lazer ışınının odak çapı 0.1mm\'nin altında olduğundan kerf genişliği (kesim boşluğu) minimumdur.</p>

<h3>Süreç Açıklaması</h3>
<p>Siyah sac lazer kesimde iki farklı gaz ve yöntem kullanılır. Oksijen (O2) destekli kesimde, oksijen gazı çelikle ekzotermik reaksiyona girerek ek enerji üretir; bu sayede özellikle 6mm üzeri kalınlıklarda daha hızlı kesim sağlanır ve lazer gücünden tasarruf edilir. Oksijen kesimde kenar yüzeyinde ince bir oksit tabakası oluşur; boyama veya kaplama öncesi bu durum genellikle sorun teşkil etmez. Azot (N2) destekli kesim ise ince siyah saclarda (0.5-4mm) tercih edilir: oksidasyonsuz, parlak ve çapaksız kesim kenarı elde edilir. Azot kesim; lazer kaynak, hassas montaj veya görsel önem taşıyan parçalarda ideal sonuç verir. Kesim öncesinde müşteriden gelen DXF/DWG dosyaları nesting yazılımımızda optimize edilerek sac üzerinde maksimum verimlilik sağlanır ve fire oranı %5\'in altına düşürülür.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Siyah sac kalınlık aralığı:</strong> 0.5mm - 25mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.05mm (ince), ±0.1mm (orta), ±0.2mm (kalın)</li>
<li><strong>Desteklenen kaliteler:</strong> St37 (S235JR), St52 (S355JR), S275JR, S420, S460, Hardox 400/450/500, Strenx serisi</li>
<li><strong>Kesim gazları:</strong> Oksijen (kalın kesit), Azot (ince kesit, oksidasyonsuz)</li>
<li><strong>Minimum delik çapı:</strong> Malzeme kalınlığının 1x katı (ince sac), 1.5x katı (kalın sac)</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>25mm\'ye kadar tek operasyonda hassas kesim</li>
<li>Oksijen kesimde yüksek hız ve düşük maliyet</li>
<li>Azot kesimde oksidasyonsuz, çapaksız temiz kenar</li>
<li>Plazma kesime kıyasla çok daha dar kerf genişliği ve düzgün kenar yüzeyi</li>
<li>Nesting optimizasyonu ile malzeme firesinde büyük tasarruf</li>
<li>Hardox ve yüksek mukavemetli çelikler dahil geniş malzeme yelpazesi</li>
<li>Karmaşık iç ve dış geometrilerin tek operasyonda kesilmesi</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Makine gövde, şasi ve tabla imalatı</li>
<li>Çelik konstrüksiyon bağlantı plakaları ve knotenblech</li>
<li>Çelik kapı kasası, menteşe ve kilit mekanizması parçaları</li>
<li>Sanayi tipi dolap, kabin ve pano kasaları</li>
<li>Tarım makineleri bıçak, disk ve şasi parçaları</li>
<li>İş makineleri kova, bom ve arm parçaları</li>
<li>Otomotiv yan sanayi sac parçaları ve braketler</li>
<li>Asansör ray bağlantı elemanları ve karşı ağırlık plakaları</li>
<li>Çelik merdiven basamak ve platform ızgaraları</li>
<li>Enerji sektörü tank, silo ve bunker parçaları</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Siyah sac lazer kesim, tesisimizde en yoğun gerçekleştirdiğimiz işlemdir. Yıllarca biriken tecrübemiz sayesinde her kalınlık ve kalitede optimum kesim parametrelerini uyguluyoruz. St37\'den Hardox\'a kadar geniş malzeme stoğumuz sayesinde acil siparişlerde bile hızlı teslimat sağlıyoruz. Lazer kesim sonrası CNC büküm, kaynak ve yüzey işleme hizmetlerimizle projelerinizi tek elden tamamlıyoruz.</p>

<p>Siyah sac lazer kesim ihtiyaçlarınız için teknik çiziminizi gönderin, rekabetçi fiyat teklifi alın. Toplu siparişlerde özel fiyat avantajlarımızdan yararlanın.</p>`,
    faq: [
      { q: 'Siyah sac lazer kesim ile plazma kesim arasındaki fark nedir?', a: 'Lazer kesim çok daha hassas (±0.1mm) ve temiz kenar sağlar, kerf genişliği minimumdur. Plazma kesim ise 25mm üzeri kalınlıklarda maliyet avantajı sunar ancak toleransı ±0.5-1mm civarındadır. 10-25mm aralığında projenizin tolerans gereksinimine göre en uygun yöntemi birlikte belirliyoruz.' },
      { q: 'Hardox sac lazer ile kesilir mi?', a: 'Evet, Hardox 400, 450 ve 500 gibi aşınma dirençli çelik saclar fiber lazer ile başarıyla kesilir. Hardox\'un sert yapısına rağmen lazer kesim kalitesi standart çelikle aynı düzeydedir.' },
      { q: '25mm siyah sac lazer kesim toleransı nedir?', a: '25mm kalınlıktaki siyah sacda kesim toleransı ±0.2-0.3mm aralığındadır. Bu değer plazma kesimin ±1-2mm toleransından çok daha üstündür.' },
      { q: 'Siyah sac lazer kesimde hangi gaz kullanılır?', a: '6mm ve üzeri kalınlıklarda oksijen gazı ile ekzotermik kesim yapılır; bu yöntem hızlı ve ekonomiktir. 0.5-4mm ince saclarda ise azot gazı ile oksidasyonsuz, temiz kesim tercih edilir.' },
      { q: 'Toplu sipariş siyah sac lazer kesimde indirim var mı?', a: 'Evet, seri üretim ve toplu siparişlerde birim kesim maliyeti önemli ölçüde düşer. Adet arttıkça nesting verimliliği artar ve kurulum süreleri parça başına azalır. Detaylı teklif için bize ulaşın.' }
    ]
  },
  {
    slug: 'galvaniz-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Galvanizli Sac Lazer Kesim | Kuzey Şafak Lazer İstanbul',
    h1: 'Galvanizli Sac Lazer Kesim Hizmeti',
    metaDesc: 'Galvanizli sac lazer kesim hizmeti. DX51D, DX52D kalitelerinde galvaniz kaplı sac hassas lazer kesim. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['galvaniz sac lazer kesim', 'galvanizli sac kesim', 'dkp sac lazer kesim'],
    content: `<p><strong>Galvanizli sac lazer kesim</strong>, korozyona dayanıklı parça üretiminde en çok tercih edilen yöntemlerden biridir. Galvanizli sac, çelik sacın yüzeyine sıcak daldırma veya elektrolitik yöntemle çinko kaplama uygulanarak üretilir. Bu çinko tabakası, sacı atmosferik korozyona karşı uzun yıllar korur ve boyama gerektirmeden dış mekan uygulamalarında kullanılmasına olanak tanır. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde galvaniz kaplı sacları çinko kaplamasına minimum düzeyde zarar vererek, yüksek hassasiyetle fiber lazer kesim ile işliyoruz.</p>

<h3>Teknik Detaylar ve Malzeme Özellikleri</h3>
<p>Galvanizli saclar genellikle DX51D, DX52D, DX53D (yapısal olmayan) ve S250GD, S280GD, S350GD (yapısal) kalitelerinde üretilir. Çinko kaplama kalınlığı Z100 (her yüzde 100 g/m2), Z200, Z275 gibi standartlarda değişir. Kaplama kalınlığı arttıkça korozyon direnci artar ancak lazer kesim sürecinde daha fazla çinko buharı oluşur. Fiber lazer kesim sırasında 907°C\'de eriyen çinko tabakası buharlaşarak çinko oksit (ZnO) gazı oluşturur. Bu gaz hem sağlık açısından hem de kesim kalitesi açısından kontrol altında tutulmalıdır. Modern fiber lazer makinemiz, özel gaz parametreleri ve güçlü havalandırma sistemiyle bu durumu etkin biçimde yönetir. İnce galvanizli saclarda (0.5-3mm) kesim hızı yüksektir ve çinko buharlaşması minimum düzeyde kalır.</p>

<h3>Süreç Açıklaması</h3>
<p>Galvanizli sac lazer kesimde genellikle azot (N2) gazı tercih edilir. Azot gazı 8-14 bar basınçta uygulanarak ergiyen çinko ve çeliği kesim bölgesinden temiz biçimde uzaklaştırır. Azot kullanımı oksidasyonu önlediği gibi, çinko oksit oluşumunu da minimize eder ve kesim kenarını temiz tutar. Oksijen destekli kesim ise 3mm üzeri kalınlıklarda hız avantajı sağlayabilir ancak kenar yüzeyinde oksit tabakası oluşur. Galvanizli saclarda kesim parametrelerinin (güç, hız, odak noktası) dikkatle ayarlanması gerekir; çünkü çinko buharı lazer ışınını absorbe ederek kesim kalitesini düşürebilir. Deneyimli operatörlerimiz her kaplama kalınlığı için optimize edilmiş parametreler kullanarak en iyi sonucu elde eder. Kesim öncesinde nesting optimizasyonu ile fire oranı minimuma indirilir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Galvaniz sac kalınlık aralığı:</strong> 0.5mm - 6mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.1mm</li>
<li><strong>Desteklenen kaliteler:</strong> DX51D, DX52D, DX53D, S250GD, S280GD, S320GD, S350GD</li>
<li><strong>Kaplama standartları:</strong> Z100, Z140, Z200, Z275</li>
<li><strong>Yardımcı gaz:</strong> Azot (birincil), Oksijen (alternatif)</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Çinko kaplama bütünlüğü kesim bölgesi dışında korunur</li>
<li>Azot gazı ile oksidasyonsuz temiz kesim kenarı</li>
<li>İnce galvaniz saclarda yüksek kesim hızı ve düşük maliyet</li>
<li>Makas kesime kıyasla karmaşık geometrilerde büyük avantaj</li>
<li>Termal deformasyon minimumda - kaplama zarar görmez</li>
<li>Çapaksız kenar ile kesim sonrası ek işlem gerekmez</li>
<li>Nesting optimizasyonu ile malzeme firesinde tasarruf</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Havalandırma kanalları ve klima kanal sistemleri</li>
<li>Çatı kaplama panelleri ve trapez sac profilleri</li>
<li>Elektrik panoları ve dağıtım kutuları</li>
<li>Klima dış ünite kasaları ve fan gövdeleri</li>
<li>Aydınlatma armatür gövdeleri ve yansıtıcılar</li>
<li>Dış mekan mobilya parçaları ve çelik gardırop kasaları</li>
<li>Otomotiv alt gövde koruma plakaları</li>
<li>Tarım ve sera ekipmanları</li>
<li>Güneş enerjisi panel montaj yapıları</li>
<li>Telekom baz istasyonu kabinleri</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Galvanizli sac lazer kesimde en önemli faktörler doğru gaz parametreleri ve operatör tecrübesidir. Tesisimizde her kaplama kalınlığı için ayrı ayrı optimize edilmiş kesim reçetelerimiz bulunmaktadır. Güçlü toz ve duman emme sistemimiz sayesinde çinko oksit gazları etkin biçimde filtrelenir, iş güvenliği standartları eksiksiz karşılanır. Galvaniz sac lazer kesim sonrası CNC büküm hizmetimiz ile parçalarınızı bükme işlemine de tabi tutabilir, komple ürün haline getirebilirsiniz.</p>

<p>Galvanizli sac lazer kesim ihtiyaçlarınız için hemen teknik çiziminizi gönderin ve aynı gün teklif alın. Havalandırma, elektrik pano ve dış mekan projeleri için özel çözümler sunuyoruz.</p>`,
    faq: [
      { q: 'Galvaniz kaplama lazer kesimde zarar görür mü?', a: 'Doğru parametre ayarlarıyla kesim bölgesi dışındaki çinko kaplama tamamen korunur. Kesim kenarında doğal olarak kaplama kesilmiş olur; gerekirse kenar boyama veya çinko sprey ile koruma sağlanabilir.' },
      { q: 'Galvaniz sac lazer kesim mi yoksa makas kesim mi daha uygun?', a: 'Düz ve basit kesimlerde giyotin makas ekonomiktir. Ancak karmaşık geometriler, iç boşluklar veya hassas ölçüler gerektiğinde lazer kesim çok daha avantajlıdır. Lazer kesim ayrıca kalıp maliyeti gerektirmez.' },
      { q: 'Galvaniz sac lazer kesimde çinko dumanı tehlikeli mi?', a: 'Çinko buharı yüksek konsantrasyonda sağlık riski oluşturabilir. Tesisimizde güçlü duman emme ve filtrasyon sistemi kullanılarak çinko oksit gazları güvenli biçimde uzaklaştırılır. İş güvenliği standartlarımız tamdır.' },
      { q: 'DX51D galvaniz sacda en kalın kaç mm kesersiniz?', a: 'Galvanizli saclarda 6mm kalınlığa kadar fiber lazer kesim yapabiliyoruz. 6mm üzeri galvaniz sac taleplerinizde CNC plazma kesim alternatifimiz mevcuttur.' },
      { q: 'Galvaniz sac lazer kesim teslimat süresi ne kadar?', a: 'Standart siparişlerde 2-3 iş günü içinde teslimat yapılır. Stokumuzda yaygın kullanılan DX51D kalitesinde hazır saclar bulunmaktadır. Acil siparişlerde aynı gün kesim ve teslimat mümkündür.' }
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
    content: `<p><strong>İnce sac lazer kesim</strong> (0.5mm - 3mm kalınlık aralığı), özellikle beyaz eşya, elektronik, aydınlatma, dekoratif metal ve tabela sektörlerinde yoğun olarak kullanılan bir imalat sürecidir. İnce sac işleme, metal imalatının en hassas alanlarından biridir; çünkü malzemenin ince yapısı termal deformasyona son derece duyarlıdır. Yanlış parametre ayarları çarpılma, yanık kenar ve bozuk geometriye yol açabilir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde, yüksek güçlü fiber lazer makinemiz ve uzman operatör kadromuzla ince saclarda deformasyonsuz, çapaksız ve yüksek hızda lazer kesim hizmeti sunuyoruz.</p>

<h3>Teknik Detaylar ve Parametreler</h3>
<p>İnce sac lazer kesimde fiber lazer teknolojisinin avantajı maksimum düzeyde hissedilir. 0.5-3mm kalınlık aralığında fiber lazer, CO2 lazere kıyasla %50-70 daha yüksek kesim hızlarına ulaşır. 1mm siyah sacda 35 m/dk, 1mm paslanmaz çelikte 30 m/dk, 1mm alüminyumda 25 m/dk üzeri kesim hızları standart üretim koşullarında elde edilir. Bu hız avantajı, özellikle binlerce adetlik seri üretim projelerinde büyük maliyet tasarrufu sağlar. İnce saclarda lazer ışınının odak çapı 0.02-0.03mm aralığında optimize edilerek kerf genişliği (kesim boşluğu) 0.1mm\'nin altına düşürülür. Kesim toleransı ±0.05mm seviyesinde tutularak mikron düzeyinde hassasiyet garanti edilir.</p>

<h3>Süreç Açıklaması</h3>
<p>İnce sac lazer kesimde yardımcı gaz olarak ağırlıklı olarak azot (N2) kullanılır. Yüksek basınçlı azot gazı (10-16 bar), ergiyen metali kesim bölgesinden hızla uzaklaştırırken oksidasyonu tamamen engeller. Sonuç olarak kesim kenarı parlak, pürüzsüz ve çapaksızdır; ek çapak alma veya taşlama işlemi gerekmez. Siyah sacda oksijen gazı ile de kesim yapılabilir; bu durumda ekzotermik reaksiyon sayesinde daha da yüksek hızlar elde edilir ancak kenar yüzeyinde ince bir oksit tabakası oluşur. Operatörlerimiz malzeme cinsine, kalınlığına ve müşterinin kalite gereksinimlerine göre en uygun gaz türünü ve kesim parametrelerini seçer. İnce saclarda ısı birikimini önlemek için kesim stratejisi de önemlidir; küçük parçaların ardışık kesilmesi yerine sac üzerinde dağıtılarak kesilmesi termal deformasyonu önler.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum sac boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>İnce sac kalınlık aralığı:</strong> 0.5mm - 3mm</li>
<li><strong>Kesim hassasiyeti:</strong> ±0.05mm</li>
<li><strong>Desteklenen malzemeler:</strong> Siyah sac (St37, St52), Paslanmaz çelik (304, 316, 430), Alüminyum (1050, 5083, 6061), Galvanizli sac (DX51D), Bakır, Pirinç</li>
<li><strong>Maksimum kesim hızı (1mm çelik):</strong> 35 m/dk üzeri</li>
<li><strong>Minimum delik çapı:</strong> 0.5mm (malzeme kalınlığına bağlı)</li>
<li><strong>Minimum detay genişliği:</strong> 0.3mm</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Çok yüksek kesim hızları - seri üretimde birim maliyet son derece düşük</li>
<li>±0.05mm hassasiyet - mikron düzeyinde doğruluk</li>
<li>Termal deformasyon yok - doğru parametre ve strateji ile çarpılma önlenir</li>
<li>Çapaksız, oksidasyonsuz kenar - azot kesimde ek işlem gerekmez</li>
<li>Çok ince detaylar ve küçük delikler sorunsuzca kesilir</li>
<li>Kalıp maliyeti yok - her geometri CNC programla kesilir</li>
<li>Prototipten seri üretime hızlı geçiş imkanı</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Beyaz eşya gövde ve iç parçaları</li>
<li>Elektronik kutu, kasa, şasi ve muhafaza imalatı</li>
<li>LED aydınlatma armatür gövdeleri ve reflektörler</li>
<li>Tabela, harf kesim ve dekoratif metal paneller</li>
<li>Otomotiv iç aksam ve braket parçaları</li>
<li>Asansör düğme panelleri ve iç kaplama elemanları</li>
<li>Medikal cihaz kutuları ve laboratuvar ekipmanı</li>
<li>Telekomünikasyon ekipman kasaları</li>
<li>Savunma sanayi elektronik muhafaza kutuları</li>
<li>Mobilya metal aksesuar ve bağlantı elemanları</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>İnce sac lazer kesim, en yüksek hız ve hassasiyet gerektiren uygulama alanıdır. Tesisimizde ince sac kesim için özel olarak kalibre edilmiş lazer başlık ve lens konfigürasyonlarımız mevcuttur. Nesting yazılımımız, ince saclarda ısı dağılımını hesaplayarak optimum kesim sırasını belirler ve termal deformasyonu önler. İnce sac lazer kesim sonrası CNC büküm hizmetimiz ile parçalarınızı komple ürüne dönüştürüyoruz.</p>

<p>İnce sac lazer kesim ihtiyaçlarınız için DXF dosyanızı gönderin, hızlı teklif ve kısa sürede teslimat avantajımızdan yararlanın.</p>`,
    faq: [
      { q: 'İnce sacda lazer kesim deformasyon yapar mı?', a: 'Doğru hız, güç ve gaz basıncı parametreleri ile ince sacda termal deformasyon minimuma indirilir. Ayrıca nesting yazılımımız kesim sırasını optimize ederek ısı birikimini önler.' },
      { q: '0.5mm bakır sac lazer ile kesilir mi?', a: 'Evet, fiber lazer teknolojimiz ile 0.5mm-3mm arası bakır ve pirinç sacları kesebiliyoruz. Bakır yüksek yansıtıcılığa sahip olsa da fiber lazerin dalga boyu bu sorunu aşar.' },
      { q: 'İnce sac lazer kesim fiyatı nasıl hesaplanır?', a: 'İnce saclarda kesim hızı çok yüksek olduğu için birim kesim maliyeti düşüktür. Fiyat genellikle toplam kesim metresi, parça adedi ve malzeme cinsine göre belirlenir. Seri üretimde birim fiyat daha da avantajlıdır.' },
      { q: 'İnce sacda minimum delik çapı ne kadar olabilir?', a: 'İnce saclarda minimum delik çapı malzeme kalınlığının yaklaşık 1 katı kadardır. Örneğin 1mm sacda 1mm çapında delik kesilebilir. Bazı uygulamalarda 0.5mm\'ye kadar delik açmak mümkündür.' },
      { q: 'DXF dosyası olmadan ince sac lazer kesim teklifi alabilir miyim?', a: 'Basit parçalar için ölçülü çizim veya eskiz göndererek ön teklif alabilirsiniz. Ancak hassas üretim için DXF veya DWG dosyası gereklidir. Teknik ekibimiz çizim konusunda size yardımcı olabilir.' }
    ]
  },
  {
    slug: 'kalin-sac-lazer-kesim',
    serviceSlug: 'lazer-kesim',
    title: 'Kalın Sac Lazer Kesim (10-25mm) | Kuzey Şafak Lazer',
    h1: 'Kalın Sac Lazer Kesim Hizmeti (10mm - 25mm)',
    metaDesc: 'Kalın sac lazer kesim hizmeti. 10mm-25mm arası çelik plaka lazer kesim. Konstrüksiyon, makine imalat ve ağır sanayi projeleri için.',
    keywords: ['kalın sac lazer kesim', '10mm sac lazer kesim', '20mm çelik kesim', 'kalın plaka lazer kesim'],
    content: `<p><strong>Kalın sac lazer kesim</strong> (10mm - 25mm kalınlık aralığı), ağır sanayi, konstrüksiyon, makine imalatı, enerji sektörü ve savunma sanayi projelerinde kritik öneme sahip bir metal işleme sürecidir. Kalın çelik plakaların hassas ve temiz şekilde kesilmesi, güçlü bir lazer kaynağı, optimize edilmiş kesim parametreleri ve deneyimli operatör kadrosu gerektirir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde yüksek güçlü fiber lazer makinemiz ile 25mm\'ye kadar çelik plakalarda yüksek hassasiyetle kesim gerçekleştiriyoruz.</p>

<h3>Teknik Detaylar ve Kesim Parametreleri</h3>
<p>Kalın sac lazer kesimde lazer gücü, kesim hızı, odak noktası konumu ve yardımcı gaz basıncı arasındaki denge kritik önem taşır. 10mm çelikte kesim hızı yaklaşık 1.5-2 m/dk iken, 25mm çelikte bu değer 0.3-0.5 m/dk\'ya düşer. Kalın kesitlerde tam penetrasyon (lazer ışınının malzemenin alt yüzeyine kadar ulaşması) sağlanmalıdır; aksi halde eksik kesim ve yeniden işleme gerekir. Odak noktası malzeme kalınlığına göre yüzey altına ayarlanır: 10mm çelikte -3 ile -5mm, 20mm çelikte -7 ile -10mm odak derinliği kullanılır. Kerf genişliği (kesim boşluğu) kalınlıkla birlikte artar; 10mm çelikte yaklaşık 0.3mm, 25mm çelikte 0.5-0.8mm kerf genişliği oluşur. Kesim toleransı 10mm çelikte ±0.15mm, 20mm çelikte ±0.2mm, 25mm çelikte ise ±0.3mm düzeyindedir.</p>

<h3>Süreç Açıklaması</h3>
<p>Kalın sac lazer kesimde birincil yardımcı gaz olarak oksijen (O2) kullanılır. Oksijen gazı çelikle ekzotermik reaksiyona girerek ek enerji üretir; bu sayede lazer gücü tek başına yetmeyeceği kalınlıklarda bile temiz kesim mümkün olur. Oksijen basıncı genellikle 0.5-3 bar aralığında ayarlanır. Ekzotermik reaksiyon sayesinde kesim hızı %30-50 artar ve enerji verimliliği yükselir. Kenar yüzeyinde ince bir oksit tabakası (FeO) oluşur; bu tabaka boyama öncesinde astar uyumu için genellikle avantaj sağlar. Oksidasyonsuz kenar gerektiğinde kalın saclarda da azot gazı kullanılabilir, ancak bu durumda çok yüksek gaz basıncı (16-20 bar) ve daha yüksek lazer gücü gerekir. Kesim öncesinde piercing (delme) işlemi kritiktir; kalın plakalarda piercing süresi artırılarak malzeme hasarı önlenir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum plaka boyutu:</strong> 2000 x 6000 mm</li>
<li><strong>Kalın sac aralığı:</strong> 10mm - 25mm</li>
<li><strong>10mm çelik toleransı:</strong> ±0.15mm</li>
<li><strong>15mm çelik toleransı:</strong> ±0.2mm</li>
<li><strong>20mm çelik toleransı:</strong> ±0.2mm</li>
<li><strong>25mm çelik toleransı:</strong> ±0.3mm</li>
<li><strong>Desteklenen malzemeler:</strong> St37, St52, S355, S420, S460, Hardox 400/450/500, Strenx serisi, paslanmaz çelik (15mm\'e kadar), alüminyum (12mm\'e kadar)</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Plazma kesime kıyasla çok daha hassas tolerans (±0.2mm vs ±1-2mm)</li>
<li>Dar kerf genişliği - malzeme firesinde önemli tasarruf</li>
<li>Düzgün ve pürüzsüz kenar yüzeyi - ek taşlama gerekmez</li>
<li>CNC programlı kesim ile karmaşık geometrilerde yüksek doğruluk</li>
<li>Isı etki alanı (HAZ) plazma kesimden çok daha dar</li>
<li>25mm\'ye kadar tek operasyonda kesim - ek işlem gerekmez</li>
<li>Aynı tesiste plazma kesim alternatifi - projeye en uygun yöntem seçimi</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Makine gövde, tabla ve şasi imalatı</li>
<li>Çelik konstrüksiyon birleşim plakaları (knotenblech, gusset plate)</li>
<li>Basınçlı kap ve tank parçaları</li>
<li>Köprü ve viyadük çelik elemanları</li>
<li>İş makineleri bom, arm ve kova parçaları</li>
<li>Enerji sektörü rüzgar türbini parçaları</li>
<li>Gemi inşa sektörü gövde plakaları</li>
<li>Madencilik ekipmanları aşınma plakaları</li>
<li>Ağır taşıma araçları şasi ve dorse parçaları</li>
<li>Savunma sanayi zırh ve platform elemanları</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Kalın sac lazer kesim, tesisimizin en güçlü hizmet alanlarından biridir. Yüksek güçlü fiber lazer makinemiz 25mm çelikte bile tam penetrasyonlu, temiz kesim sağlar. 25mm üzeri kalınlıklarda ise aynı tesisimizdeki CNC plazma kesim makinemiz (50mm\'ye kadar) devreye girerek hizmet sürekliliği sağlar. Bu sayede projenizin kalınlık gereksiniminden bağımsız olarak tek tedarikçi ile çalışma avantajı elde edersiniz.</p>

<p>Kalın sac lazer kesim projeleriniz için teknik çiziminizi gönderin, en kısa sürede detaylı teklif alın. Konstrüksiyon ve ağır sanayi projelerinde güvenilir çözüm ortağınız olmaya hazırız.</p>`,
    faq: [
      { q: '25mm çelik plaka lazer ile kesilir mi?', a: 'Evet, yüksek güçlü fiber lazer makinemiz ile 25mm kalınlığa kadar çelik plaka kesebiliyoruz. Oksijen destekli kesim ile tam penetrasyon ve temiz kenar elde edilir.' },
      { q: 'Kalın sacda lazer kesim toleransı nedir?', a: 'Kalın saclarda kesim toleransı kalınlığa göre değişir: 10mm\'de ±0.15mm, 15-20mm\'de ±0.2mm, 25mm\'de ±0.3mm. Bu değerler plazma kesimin ±1-2mm toleransından çok daha iyidir.' },
      { q: '25mm üzeri kalınlıklarda ne önerirsiniz?', a: '25mm üzeri kalınlıklarda CNC plazma kesim hizmetimizi öneriyoruz. Plazma makinemiz 50mm kalınlığa kadar çelik plaka kesebilir. Lazer ve plazma kesimi aynı tesiste sunmamız size en uygun çözümü seçme imkanı tanır.' },
      { q: 'Kalın sacda lazer kesimde hangi gaz kullanılır?', a: 'Kalın sac lazer kesimde genellikle oksijen gazı kullanılır. Oksijen, çelikle ekzotermik reaksiyona girerek kesim hızını artırır ve enerji verimliliği sağlar. Özel uygulamalarda yüksek basınçlı azot ile oksidasyonsuz kesim de mümkündür.' },
      { q: 'Hardox plaka lazer ile kaç mm\'ye kadar kesilir?', a: 'Hardox 400, 450 ve 500 plakalarını 25mm kalınlığa kadar fiber lazer ile kesebiliyoruz. Hardox\'un sert yapısına rağmen lazer kesim parametreleri optimize edilerek temiz kenar elde edilir.' }
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
    content: `<p><strong>Sac büküm fiyatları</strong>, metal imalat sektöründe en çok araştırılan konulardan biridir. Sac büküm (abkant büküm), düz metal sacın CNC kontrollü pres makinesiyle belirli açı ve ölçülerde şekillendirilmesi işlemidir. Bu işlem, kutu profil, U kanal, L profil, Z profil gibi üç boyutlu parçaların üretilmesinde temel adımdır. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde 4 metre büküm kapasiteli CNC abkant pres makinemiz ile 0.5mm\'den 20mm\'ye kadar her türlü sacda hassas büküm hizmeti sunuyoruz.</p>

<h3>Teknik Detaylar ve Büküm Parametreleri</h3>
<p>CNC abkant pres büküm işleminde üst kalıp (punch) ve alt kalıp (die/V açıklığı) kombinasyonu büküm profilini belirler. Sac kalınlığına göre V açıklığı seçimi kritik önem taşır: genel kural olarak V açıklığı malzeme kalınlığının 8 katı olmalıdır (örneğin 2mm sac için 16mm V açıklığı). İç büküm yarıçapı da V açıklığına bağlıdır ve genellikle malzeme kalınlığının 1-1.5 katı kadardır. CNC abkant presimiz otomatik açı ölçüm ve kompanzasyon sistemine sahiptir; her bükümde açı sensörü gerçek açıyı ölçer ve geri esneme (springback) miktarını otomatik telafi eder. Bu sayede ilk parçadan son parçaya kadar tutarlı ±0.1 derece açısal hassasiyet sağlanır. Büküm kuvveti malzeme kalınlığı, genişliği ve cinsine bağlıdır; örneğin 3mm St37 sacda 4 metre büküm için yaklaşık 200 ton kuvvet gerekir.</p>

<h3>Süreç Açıklaması</h3>
<p>Sac büküm süreci, teknik çizimin analizi ile başlar. CNC programlama aşamasında büküm sırası (bending sequence), geri esneme kompanzasyonu ve çarpışma kontrolü yazılım üzerinde simüle edilir. Doğru büküm sırası, parçanın makinada çarpışmadan bükülmesini sağlar ve kalite açısından kritiktir. Program hazırlandıktan sonra uygun üst ve alt kalıplar makineye bağlanır. CNC sistemi büküm derinliğini, açısını ve backstop (arka dayama) konumunu otomatik ayarlar. Operatör sacı makineye yerleştirir, pedalı aktive eder ve büküm gerçekleşir. İlk parçada ölçü kontrolü yapılır; gerekirse program üzerinden ince ayar yapılır. Seri üretimde CNC tekrarlanabilirlik sayesinde her parça aynı hassasiyette üretilir. Lazer kesim + büküm kombine projelerinde, lazer kesim programındaki büküm payları ve toleranslar büküm parametreleriyle koordineli ayarlanır.</p>

<h3>Sac Büküm Fiyatını Etkileyen Faktörler</h3>
<ul>
<li><strong>Malzeme kalınlığı:</strong> Kalın saclar daha fazla tonaj ve enerji gerektirir</li>
<li><strong>Malzeme cinsi:</strong> Paslanmaz ve alüminyum, çeliğe göre farklı parametreler gerektirir</li>
<li><strong>Büküm uzunluğu:</strong> 4 metreye kadar tek seferde büküm yapabiliyoruz</li>
<li><strong>Büküm sayısı:</strong> Parça başına büküm adedi arttıkça operasyon süresi ve fiyat etkilenir</li>
<li><strong>Parça adedi:</strong> Seri üretimde kurulum maliyeti dağılır, birim fiyat önemli ölçüde düşer</li>
<li><strong>Tolerans gereksinimleri:</strong> Dar tolerans gerektiren işlerde özel kalıp ve ek kontrol gerekebilir</li>
<li><strong>Geometri karmaşıklığı:</strong> Çok bükümlu ve dar flanşlı parçalarda özel kalıp gereksinimi artabilir</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>CNC kontrollü hassasiyet: ±0.1 derece açısal, ±0.2mm boyutsal tolerans</li>
<li>4 metre tek seferde büküm kapasitesi</li>
<li>Otomatik geri esneme kompanzasyonu - ilk parçadan doğru büküm</li>
<li>Tek parçadan seri üretime - minimum sipariş miktarı yok</li>
<li>Lazer kesim + büküm entegre hizmet ile toplam maliyet avantajı</li>
<li>Geniş kalıp kütüphanesi - farklı profil ve açılar için hazır kalıplar</li>
<li>Hızlı kurulum - proje değişikliklerinde minimum bekleme süresi</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Elektrik panosu ve dağıtım kutusu kasaları</li>
<li>Havalandırma kanal ve boru bağlantıları</li>
<li>Endüstriyel mutfak tezgah ve evye formları</li>
<li>Asansör kabin iç kaplama panelleri</li>
<li>Makine koruma kapakları ve muhafazaları</li>
<li>Çelik kapı kasası ve pervaz profilleri</li>
<li>Raf ve depolama sistemi elemanları</li>
<li>Otomotiv braket ve montaj parçaları</li>
<li>Aydınlatma armatür gövdeleri</li>
<li>Cephe kaplama ve giydirme elemanları</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>4 metre CNC abkant presimiz, geniş kalıp kütüphanemiz ve uzman operatörlerimiz ile her türlü büküm projesinde güvenilir çözüm ortağınızız. Lazer kesim ve büküm hizmetlerini aynı çatı altında sunmamız, proje koordinasyonunu kolaylaştırır ve toplam maliyeti düşürür. Fason büküm hizmetimizle kendi sacınızı getirip sadece büküm yaptırabilir, ya da kesim + büküm kombine hizmetimizle parçalarınızı komple teslim alabilirsiniz.</p>

<p>Sac büküm ihtiyaçlarınız için teknik çiziminizi gönderin, aynı gün içinde detaylı teklif alın. Toplu siparişlerde özel fiyat avantajlarımızdan yararlanın.</p>`,
    faq: [
      { q: 'Fason sac büküm yaptırabilir miyim?', a: 'Evet, kendi malzemenizi getirerek sadece büküm hizmeti alabilirsiniz. Lazer kesim + büküm birlikte yaptırırsanız hem maliyet hem de kalite açısından avantaj sağlarsınız.' },
      { q: 'Minimum sipariş miktarı var mı?', a: 'Minimum sipariş miktarımız yoktur. Tek parça prototip büküm de yapıyoruz, binlerce adetlik seri üretim de. Her ölçekte hizmet veriyoruz.' },
      { q: 'CNC abkant büküm toleransı nedir?', a: 'CNC abkant presimiz ile ±0.1 derece açısal ve ±0.2mm boyutsal tolerans sağlıyoruz. Otomatik açı ölçüm ve kompanzasyon sistemi sayesinde her parçada tutarlı sonuç elde edilir.' },
      { q: '20mm sac bükebilir misiniz?', a: 'Evet, 4 metre CNC abkant presimiz ile 20mm kalınlığa kadar sac büküm yapabiliyoruz. Kalın saclarda büküm yarıçapı ve V açıklığı buna göre ayarlanır.' },
      { q: 'Sac büküm teslimat süresi ne kadar?', a: 'Standart büküm işlerinde 1-2 iş günü teslimat sağlıyoruz. Lazer kesim + büküm kombine projelerde 3-5 iş günü olağandır. Acil işlerde aynı gün büküm imkanımız mevcuttur.' }
    ]
  },
  {
    slug: 'paslanmaz-celik-bukum',
    serviceSlug: 'cnc-bukum',
    title: 'Paslanmaz Çelik CNC Büküm | Kuzey Şafak Lazer İstanbul',
    h1: 'Paslanmaz Çelik CNC Büküm Hizmeti',
    metaDesc: 'Paslanmaz çelik CNC büküm hizmeti. 304 ve 316 paslanmaz sacda hassas abkant büküm. Gıda, medikal ve mimari sektör için.',
    keywords: ['paslanmaz çelik büküm', 'paslanmaz sac büküm', 'inox büküm', 'paslanmaz abkant büküm'],
    content: `<p><strong>Paslanmaz çelik büküm</strong>, gıda sanayi, medikal ekipman, mimari dekorasyon, kimya sanayi ve endüstriyel mutfak projelerinde vazgeçilmez bir metal şekillendirme işlemidir. Paslanmaz çelik (inox), korozyon direnci, hijyenik yapısı ve estetik görünümü nedeniyle kritik uygulamalarda tercih edilir; ancak bu malzemenin yüksek mukavemeti ve geri esneme (springback) özelliği, büküm işlemini karbon çeliğe göre çok daha zorlu hale getirir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde, otomatik açı kompanzasyonlu 4 metre CNC abkant pres makinemiz ile paslanmaz çelik saclarda hassas ve çizilmesiz büküm hizmeti sunuyoruz.</p>

<h3>Teknik Detaylar ve Malzeme Özellikleri</h3>
<p>Paslanmaz çelik, karbon çeliğe göre %30-50 daha fazla geri esneme (springback) yapar. Bu durum, istenen büküm açısına ulaşmak için fazladan büküm miktarı (over-bending) gerektirdiği anlamına gelir. Ostenitik paslanmaz çelikler (304, 316, 316L) en yüksek geri esneme oranına sahiptir; ferritik kaliteler (430) ise nispeten daha düşük geri esneme gösterir. Paslanmaz çeliğin yüksek çekme mukavemeti (500-700 MPa) nedeniyle aynı kalınlıktaki karbon çeliğe göre %50-60 daha fazla büküm kuvveti (tonaj) gerekir. Örneğin 2mm 304 paslanmaz çelik bükmek için, 2mm St37\'ye kıyasla yaklaşık %50 daha fazla tonaj uygulanmalıdır. CNC abkant presimizin otomatik açı ölçüm ve kompanzasyon sistemi, geri esneme miktarını gerçek zamanlı hesaplayarak her bükümde istenen açıyı ilk seferde yakalar.</p>

<h3>Süreç Açıklaması</h3>
<p>Paslanmaz çelik büküm sürecinde yüzey koruması en kritik faktörlerden biridir. Paslanmaz sacın estetik yüzeyi (2B, BA, saten, ayna) büküm sırasında kalıp teması nedeniyle çizilebilir. Bu sorunu önlemek için PE (polietilen) film korumalı büküm yöntemi uyguluyoruz: sacın üzerine yapıştırılmış koruyucu film, büküm işlemi boyunca yüzeyi kalıp temasından korur ve büküm sonrasında kolayca sökülür. Ayrıca alt kalıp (V açıklığı) olarak poliüretan kaplı veya nylon çanaklı özel kalıplar kullanarak çizik riskini daha da azaltıyoruz. Büküm sırası (bending sequence) CNC programında dikkatlice planlanır; paslanmaz çeliğin geri esneme eğilimi her büküm adımında kompanze edilir. İç büküm yarıçapı, paslanmaz çelikte minimum malzeme kalınlığının 1.5 katı olarak önerilir; daha dar yarıçaplarda çatlama riski oluşabilir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum büküm uzunluğu:</strong> 4 metre</li>
<li><strong>Paslanmaz çelik kalınlık aralığı:</strong> 0.5mm - 8mm</li>
<li><strong>Büküm hassasiyeti:</strong> ±0.1 derece açısal, ±0.2mm boyutsal</li>
<li><strong>Desteklenen kaliteler:</strong> AISI 304, 304L, 316, 316L, 316Ti, 430, 441, 201</li>
<li><strong>Yüzey koruma:</strong> PE film korumalı büküm (standart)</li>
<li><strong>Özel kalıplar:</strong> Poliüretan kaplı, nylon çanaklı anti-çizik kalıplar mevcut</li>
<li><strong>Minimum iç büküm yarıçapı:</strong> Malzeme kalınlığının 1.5 katı</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Otomatik geri esneme kompanzasyonu - paslanmaz çeliğin yüksek springback değeri hassas biçimde telafi edilir</li>
<li>PE film korumalı büküm - yüzey çizilmez, estetik görünüm korunur</li>
<li>Anti-çizik özel kalıplar ile ayna ve saten yüzeylerde bile güvenli büküm</li>
<li>4 metre büküm kapasitesi - büyük panellerde tek seferde büküm</li>
<li>Lazer kesim + büküm entegre hizmet - tek elden komple parça teslimi</li>
<li>CNC kontrollü tekrarlanabilirlik - seri üretimde her parça aynı kalitede</li>
<li>Gıda ve medikal standartlara uygun üretim</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Endüstriyel mutfak tezgah, evye ve davlumbaz formları</li>
<li>Gıda işleme makineleri gövde ve kapak parçaları</li>
<li>Hastane ve laboratuvar ekipmanı kasaları</li>
<li>Mimari korkuluk, küpeşte ve merdiven kaplama profilleri</li>
<li>Asansör kabin iç kaplama ve tavan panelleri</li>
<li>Eczane, banka ve mağaza dekorasyon elemanları</li>
<li>Kimya sanayi tank ve hazne kapak parçaları</li>
<li>Su arıtma sistemi gövde ve kaplama elemanları</li>
<li>Restoran ve otel dekoratif metal aksesuar ve panelleri</li>
<li>Temiz oda (clean room) duvar ve tavan panelleri</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Paslanmaz çelik büküm, standart çelik bükümden farklı uzmanlık gerektiren bir alandır. Yıllarca biriken tecrübemiz sayesinde her paslanmaz kalite ve kalınlıkta optimum büküm parametrelerini biliyoruz. PE film korumalı büküm hizmetimiz, poliüretan kaplı özel kalıp seçeneklerimiz ve otomatik açı kompanzasyon sistemimiz ile sektörün en kaliteli paslanmaz büküm sonuçlarını sunuyoruz. Paslanmaz lazer kesim + büküm kombine projelerinde tek elden hizmet avantajımızdan yararlanın.</p>

<p>Paslanmaz çelik büküm ihtiyaçlarınız için teknik çiziminizi gönderin, aynı gün detaylı teklif alın. Gıda, medikal ve mimari projelerinizde güvenilir çözüm ortağınız olmaya hazırız.</p>`,
    faq: [
      { q: 'Paslanmaz sacda büküm çizik yapar mı?', a: 'PE film korumalı büküm ve poliüretan kaplı özel kalıplar sayesinde paslanmaz yüzey çizilmez. Film, büküm sonrası kolayca sökülür ve yüzey fabrika kalitesinde kalır.' },
      { q: 'Paslanmaz büküm fiyatı normal çelikten pahalı mıdır?', a: 'Paslanmaz çelik daha sert olduğu için daha fazla tonaj gerektirir ve PE film koruma gibi ek işlemler uygulanır. Bu nedenle birim büküm fiyatı karbon çeliğe göre biraz daha yüksektir, ancak fark makul düzeydedir.' },
      { q: 'Paslanmaz çelikte minimum büküm yarıçapı nedir?', a: 'Paslanmaz çelikte minimum iç büküm yarıçapı malzeme kalınlığının 1.5 katı olarak önerilir. Daha dar yarıçaplarda dış yüzeyde çatlama riski oluşabilir. Özel kalıplarla daha dar yarıçaplar mümkün olabilir.' },
      { q: 'Ayna yüzeyli (mirror) paslanmaz bükülebilir mi?', a: 'Evet, ayna yüzeyli paslanmaz sacları PE film koruma ve anti-çizik özel kalıplarla bükebiliyoruz. Yüzey kalitesi büküm sonrasında korunur.' },
      { q: '316L paslanmaz çelik büküm yapıyor musunuz?', a: 'Evet, 316L dahil tüm ostenitik ve ferritik paslanmaz çelik kalitelerinde büküm hizmeti veriyoruz. 316L\'nin yüksek geri esneme değeri CNC otomatik kompanzasyon sistemimizle hassas biçimde telafi edilir.' }
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
    content: `<p><strong>Kalın plaka plazma kesim</strong>, lazer kesimin kapasitesinin ötesindeki kalınlıklarda (25mm üzeri) en verimli ve ekonomik metal kesim yöntemidir. CNC plazma kesim, yüksek sıcaklıktaki plazma arkı ile metali eritip uzaklaştırarak kesim yapar ve özellikle ağır sanayi, konstrüksiyon, gemi inşa ve madencilik sektörlerinde vazgeçilmezdir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde 2600x6000mm çalışma alanına sahip CNC plazma kesim makinemizle 50mm\'ye kadar çelik plakaları hassas biçimde kesiyoruz.</p>

<h3>Teknik Detaylar ve Kesim Parametreleri</h3>
<p>CNC plazma kesim, iyonize edilmiş gaz (plazma) kullanarak metalin erime sıcaklığının çok üzerinde (20.000°C\'ye kadar) bir enerji yoğunluğu oluşturur. Bu yüksek sıcaklıktaki plazma jeti metali eritir ve yüksek hızlı gaz akışı erimiş metali kesim bölgesinden uzaklaştırır. Plazma kesimde kesim toleransı kalınlığa ve malzeme tipine bağlıdır: 25mm çelikte ±0.5mm, 40mm çelikte ±0.8mm, 50mm çelikte ise ±1mm civarında tolerans değerleri elde edilir. Kerf genişliği (kesim boşluğu) lazer kesime göre daha geniştir; 25mm çelikte yaklaşık 2-3mm, 50mm çelikte 3-4mm kerf oluşur. Plazma torç yüksekliği CNC kontrolü ile otomatik ayarlanır (THC - Torch Height Control); bu sistem ark voltajını sürekli izleyerek optimum kesim mesafesini korur ve tutarlı kesim kalitesi sağlar.</p>

<h3>Süreç Açıklaması</h3>
<p>CNC plazma kesim sürecinde plazma gazı olarak genellikle hava, oksijen veya azot kullanılır. Oksijen plazma, karbon çelikte en yaygın tercih edilen yöntemdir; oksijen çelikle ekzotermik reaksiyona girerek kesim hızını artırır ve kenar kalitesini iyileştirir. Azot plazma ise paslanmaz çelik ve alüminyum kesiminde tercih edilir. İkincil gaz (shield gas) olarak hava veya CO2 kullanılarak plazma jetinin odaklanması sağlanır ve kenar kalitesi artırılır. Kesim öncesinde müşteriden gelen DXF/DWG dosyaları CNC programlama yazılımına aktarılır; nesting optimizasyonu ile parçalar plaka üzerine yerleştirilir ve fire oranı minimuma indirilir. Piercing (delme) işlemi kalın plakalarda dikkatle yönetilir; 40mm üzeri kalınlıklarda rampa piercing veya ön delme yöntemleri kullanılarak torcun korunması sağlanır. Kesim sonrasında kenar temizleme (cüruf alma) gerekebilir; özellikle 30mm üzeri kalınlıklarda alt yüzeyde oluşan cüruf mekanik olarak temizlenir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Maksimum plaka boyutu:</strong> 2600 x 6000 mm</li>
<li><strong>Çelik kalınlık aralığı:</strong> 6mm - 50mm</li>
<li><strong>25mm çelik toleransı:</strong> ±0.5mm</li>
<li><strong>40mm çelik toleransı:</strong> ±0.8mm</li>
<li><strong>50mm çelik toleransı:</strong> ±1mm</li>
<li><strong>Desteklenen malzemeler:</strong> Karbon çelik (St37, St52, S355, Hardox), Paslanmaz çelik, Alüminyum</li>
<li><strong>Plazma gazları:</strong> Oksijen, Azot, Hava</li>
<li><strong>CNC kontrol:</strong> Otomatik torç yükseklik kontrolü (THC)</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>50mm\'ye kadar tek operasyonda çelik plaka kesimi</li>
<li>Kalın plakalarda lazer kesime göre çok daha düşük maliyet</li>
<li>Yüksek kesim hızı - 25mm çelikte lazer kesimden daha hızlı</li>
<li>CNC kontrol ile karmaşık geometrilerde hassas kesim</li>
<li>Otomatik torç yükseklik kontrolü ile tutarlı kesim kalitesi</li>
<li>Lazer kesim ile kombine hizmet - 0.5mm\'den 50mm\'ye kadar kesintisiz çözüm</li>
<li>Büyük plaka boyutu (2600x6000mm) ile geniş parçalar tek seferde kesilir</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Çelik konstrüksiyon ana taşıyıcı elemanlar ve birleşim plakaları</li>
<li>Gemi inşa sektörü gövde ve güverte plakaları</li>
<li>İş makineleri bom, arm, kova ve şasi parçaları</li>
<li>Madencilik sektörü kırıcı ve eleme makineleri parçaları</li>
<li>Enerji sektörü kazan, tank ve silo gövde plakaları</li>
<li>Köprü ve viyadük çelik yapı elemanları</li>
<li>Ağır taşıma araçları dorse ve treyler şasi parçaları</li>
<li>Beton santralleri mikser ve silo parçaları</li>
<li>Vinç ve kaldırma ekipmanları yapısal elemanları</li>
<li>Çimento fabrikası aşınma plakaları ve kanalları</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>CNC plazma kesim makinemiz, 2600x6000mm geniş çalışma alanı ve 50mm kapasitesiyle ağır sanayi projelerinin gerektirdiği kalın plaka kesim ihtiyacını eksiksiz karşılar. Aynı tesiste fiber lazer kesim makinemiz de bulunduğundan, ince kesitlerde lazer, kalın kesitlerde plazma kullanarak projenize en uygun ve en ekonomik çözümü sunuyoruz. Her iki makinenin CNC programlaması aynı ekip tarafından yapıldığından kesim planlaması ve nesting optimizasyonu entegre biçimde yönetilir.</p>

<p>Kalın plaka plazma kesim projeleriniz için teknik çiziminizi gönderin, hızlı ve rekabetçi teklif alın. Konstrüksiyon, gemi sanayi ve ağır makine imalat projelerinde güvenilir tedarikçiniz olmaya hazırız.</p>`,
    faq: [
      { q: 'Plazma kesim ile lazer kesim arasındaki fark nedir?', a: 'Plazma kesim kalın plakalarda (25mm+) daha hızlı ve ekonomiktir; toleransı ±0.5-1mm civarındadır. Lazer kesim ise 25mm\'ye kadar çok daha hassas (±0.1-0.3mm) sonuç verir. 10-25mm aralığında projenizin tolerans ve bütçe gereksinimlerine göre en uygun yöntemi birlikte belirliyoruz.' },
      { q: '50mm çelik plaka kesiyor musunuz?', a: 'Evet, CNC plazma makinemiz ile 50mm kalınlığa kadar çelik plaka kesimi yapabiliyoruz. 50mm\'de ±1mm tolerans ile hassas kesim sağlıyoruz.' },
      { q: 'Plazma kesim sonrası kenar kalitesi nasıldır?', a: 'CNC plazma kesimde kenar yüzeyi lazer kadar pürüzsüz olmasa da, modern HiDefinition plazma teknolojisi sayesinde oldukça düzgün kenarlar elde edilir. İnce kalınlıklarda (6-15mm) kenar kalitesi lazere yakındır. Kalın kesitlerde minimal cüruf temizleme gerekebilir.' },
      { q: 'Plazma kesim için minimum sipariş miktarı var mı?', a: 'Minimum sipariş miktarımız yoktur. Tek parça kesimden büyük seri üretim projelerine kadar her ölçekte hizmet veriyoruz.' },
      { q: 'CNC plazma ile Hardox plaka kesilir mi?', a: 'Evet, Hardox 400, 450 ve 500 gibi aşınma dirençli çelik plakaları CNC plazma ile 50mm kalınlığa kadar kesebiliyoruz. Madencilik ve iş makineleri sektöründe Hardox plazma kesim en yaygın hizmetlerimizden biridir.' }
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
    content: `<p><strong>Paslanmaz çelik kaynak imalatı</strong>, gıda güvenliği, korozyon direnci, hijyen gereksinimleri ve estetik görünüm gerektiren projelerde vazgeçilmez bir üretim sürecidir. Paslanmaz çeliğin kaynağı, karbon çeliğe göre çok daha fazla teknik bilgi ve deneyim gerektirir; çünkü yanlış kaynak parametreleri korozyon direnci kaybına, çarpılmaya ve mekanik dayanım düşüşüne yol açabilir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde TIG (GTAW), MIG/MAG (GMAW) ve lazer kaynak yöntemleriyle profesyonel paslanmaz çelik kaynak imalatı hizmeti veriyoruz.</p>

<h3>Teknik Detaylar ve Kaynak Metalürjisi</h3>
<p>Paslanmaz çelik kaynağında en kritik metalürjik konu sensibilizasyondur (krom karbür çökelmesi). 450-850°C arasında uzun süre kalan ostenitik paslanmaz çeliklerde (304, 316) tane sınırlarında krom karbür oluşarak intergranüler korozyona yol açabilir. Bu riski minimize etmek için düşük karbonlu kaliteler (304L, 316L) tercih edilir ve ısı girdisi kontrol altında tutulur. TIG kaynakta ısı girdisi en düşük düzeydedir; bu nedenle ince paslanmaz parçalarda ve korozyon direncinin kritik olduğu gıda sanayi uygulamalarında TIG kaynak ilk tercihtir. Kaynak sırasında argon gazı koruma atmosferi sağlar ve oksidasyonu önler; arkayüz koruması (purging) için de argon kullanılarak kök dikişinin oksitlenmesi engellenir. Kaynak teli olarak ER308L (304 için) veya ER316L (316 için) gibi düşük karbonlu ilave metaller kullanılır.</p>

<h3>Süreç Açıklaması ve Kaynak Yöntemlerimiz</h3>
<p><strong>TIG Kaynak (GTAW):</strong> Tungsten elektrot ile oluşturulan ark ve argon koruma gazı ile yapılan TIG kaynak, paslanmaz çelikte en temiz ve en kontrollü kaynak dikişi üretir. İnce saclarda (0.5-3mm) dolgu teli olmadan otogen kaynak yapılabilir. Kaynak dikişi görsel olarak mükemmeldir; gıda sanayi ve dekoratif uygulamalarda standart yöntemdir. TIG kaynak ayrıca tam penetrasyon gerektiren basınçlı kap uygulamalarında da tercih edilir.</p>

<p><strong>MIG/MAG Kaynak (GMAW):</strong> Sürekli beslenen kaynak teli ve koruma gazı (argon + CO2 veya argon + O2 karışımı) ile yapılan MIG kaynak, kalın paslanmaz parçalarda daha yüksek depolama hızı sağlar. Konstrüksiyon kaynaklarında, büyük tank ve hazne imalatında TIG\'e göre daha ekonomik ve hızlıdır. Puls (darbeli) MIG teknolojisi ile ısı girdisi kontrol altında tutularak kaliteli dikiş elde edilir.</p>

<p><strong>Lazer Kaynak:</strong> Minimum ısı deformasyonu ile son derece hassas birleştirme sağlar. Özellikle ince paslanmaz parçalarda, görünür yüzeylerde ve dar alanlarda eşsiz sonuç verir. Isı etki alanı (HAZ) çok dar olduğundan malzemenin mekanik özellikleri ve korozyon direnci korunur. Lazer kaynak sonrası taşlama veya parlatma gerektirmeyen, estetik açıdan mükemmel dikişler elde edilir.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>TIG kaynak:</strong> 0.5mm - 10mm paslanmaz çelik</li>
<li><strong>MIG kaynak:</strong> 2mm - 30mm paslanmaz çelik</li>
<li><strong>Lazer kaynak:</strong> 0.3mm - 5mm paslanmaz çelik</li>
<li><strong>Desteklenen kaliteler:</strong> 304, 304L, 316, 316L, 316Ti, 321, 430, 441, Duplex 2205</li>
<li><strong>Koruma gazı:</strong> Yüksek saflıkta Argon (TIG), Argon karışımları (MIG)</li>
<li><strong>Maksimum parça boyutu:</strong> Tesisimizin fiziki imkanları dahilinde büyük parçalar kabul edilir</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Üç farklı kaynak yöntemi (TIG, MIG, Lazer) ile her uygulamaya uygun çözüm</li>
<li>Gıda sanayi standartlarına uygun hijyenik kaynak dikişleri</li>
<li>Lazer kaynak ile minimum deformasyon ve mükemmel estetik</li>
<li>Arkayüz argon koruması (purging) ile oksidasyonsuz kök dikişi</li>
<li>Taşlama ve parlatma hizmeti ile görünmez kaynak dikişi</li>
<li>Lazer kesim + büküm + kaynak entegre hizmet - tek elden komple ürün</li>
<li>Deneyimli sertifikalı kaynakçı kadrosu</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Endüstriyel mutfak tezgahları, evye ve davlumbaz imalatı</li>
<li>Gıda işleme makineleri, konveyörler ve dolum hatları</li>
<li>Hastane ekipmanları, ameliyathane masaları ve sterilizasyon kabinleri</li>
<li>Kimya sanayi tankları, reaktörler ve karıştırıcı hazne</li>
<li>Mimari korkuluk, küpeşte ve merdiven sistemleri</li>
<li>Dekoratif metal işleri, heykel ve sanat eserleri</li>
<li>İlaç sanayi proses ekipmanları</li>
<li>Su arıtma ve atık su işleme sistemi komponentleri</li>
<li>Süt ve süt ürünleri işleme tankları</li>
<li>Bira ve şarap üretim tankları (fermantasyon, depolama)</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Paslanmaz çelik kaynak imalatında TIG, MIG ve lazer kaynak olmak üzere üç farklı yöntemi aynı tesiste sunmamız, projenizin gereksinimlerine göre en uygun tekniği seçmemizi mümkün kılar. Lazer kesim ile hassas biçimde kesilen parçalar, CNC büküm ile şekillendirildikten sonra uzman kaynakçılarımız tarafından birleştirilir. Talep üzerine kaynak sonrası taşlama, parlatma ve pasivizasyon (passivation) işlemleri de uygulanarak korozyon direnci maksimuma çıkarılır.</p>

<p>Paslanmaz çelik kaynak imalat projeleriniz için teknik çiziminizi veya proje detaylarınızı gönderin, detaylı teklif alın. Gıda, medikal, kimya ve mimari sektörlerdeki projelerinizde güvenilir imalat ortağınız olmaya hazırız.</p>`,
    faq: [
      { q: 'Paslanmaz kaynak dikişi parlatılabilir mi?', a: 'Evet, talep üzerine kaynak dikişleri taşlama ve parlatma işlemi ile görünmez hale getirilebilir. Ayna (mirror) yüzey kalitesine kadar parlatma yapılabilir. Lazer kaynak ile yapılan dikişlerde çoğu zaman parlatma gerekmez.' },
      { q: 'Gıdaya uygun paslanmaz kaynak yapıyor musunuz?', a: 'Evet, gıda sanayi standartlarına uygun, tam penetrasyonlu TIG kaynak ile hijyenik kaynak dikişleri üretiyoruz. Argon arkayüz koruması (purging) ile kök dikişinde oksidasyon önlenir ve gıda teması için güvenli yüzey elde edilir.' },
      { q: 'Paslanmaz çelik kaynak imalatında hangi yöntemi önerirsiniz?', a: 'İnce parçalarda ve gıda/medikal uygulamalarda TIG kaynak, kalın ve büyük konstrüksiyon parçalarında MIG kaynak, minimum deformasyon ve estetik gerektiren işlerde ise lazer kaynak öneriyoruz. Projenize göre en uygun yöntemi birlikte belirleriz.' },
      { q: 'Paslanmaz çelik kaynak imalat teslimat süresi ne kadardır?', a: 'Küçük ve orta ölçekli projelerde 3-7 iş günü teslimat sağlıyoruz. Büyük ve karmaşık projelerde termin planı birlikte belirlenir. Acil işlerde hızlandırılmış üretim imkanımız mevcuttur.' },
      { q: 'Lazer kesim + büküm + kaynak kombine hizmet alabir miyim?', a: 'Evet, paslanmaz çelik projelerinizde lazer kesim, CNC büküm ve kaynak hizmetlerini tek elden sunuyoruz. Kombine hizmetlerde hem maliyet avantajı hem de kalite tutarlılığı sağlanır.' }
    ]
  },
  {
    slug: 'celik-konstruksiyon-imalat',
    serviceSlug: 'kaynakli-imalat',
    title: 'Çelik Konstrüksiyon İmalat | Kuzey Şafak Lazer İstanbul',
    h1: 'Çelik Konstrüksiyon İmalatı',
    metaDesc: 'Profesyonel çelik konstrüksiyon imalatı. Fabrika, depo, hangar ve çelik yapı projelerinde kesim, büküm ve kaynak hizmetleri. İkitelli OSB.',
    keywords: ['çelik konstrüksiyon imalat', 'çelik yapı imalat', 'çelik konstrüksiyon kaynak', 'metal konstrüksiyon'],
    content: `<p><strong>Çelik konstrüksiyon imalatı</strong>, modern yapı ve sanayi sektörünün temel taşlarından biridir. Çelik konstrüksiyonlar; yüksek mukavemet/ağırlık oranı, hızlı montaj, depreme dayanıklılık, uzun açıklık geçme kapasitesi ve geri dönüştürülebilirlik avantajlarıyla betonarme yapılara güçlü bir alternatif sunar. Fabrika, depo, hangar, atölye, mezzanine ve çelik platform projeleri başta olmak üzere birçok yapısal uygulamada çelik konstrüksiyon tercih edilmektedir. Kuzey Şafak Lazer olarak İkitelli OSB\'deki tesisimizde lazer kesim, CNC plazma kesim, CNC büküm ve kaynak hizmetlerimizi entegre ederek çelik konstrüksiyon projelerinizi baştan sona tek çatı altında gerçekleştiriyoruz.</p>

<h3>Teknik Detaylar ve Malzeme Bilgileri</h3>
<p>Çelik konstrüksiyon imalatında kullanılan başlıca malzemeler; HEA, HEB, IPE profiller (I-profil), UPN ve UPE profiller (U-profil), kutu profiller (dikdörtgen ve kare), borular (dairesel kesit), köşebentler (L-profil) ve levha/plaka malzemelerdir. Yapısal çelik kalitesi olarak S235JR (St37), S275JR ve S355JR en yaygın kullanılan sınıflardır. Projenin statik hesaplarına göre malzeme kalitesi ve profil boyutları belirlenir. Çelik konstrüksiyonda birleşim detayları kritik önem taşır: cıvatalı birleşimler (HR, HV, GV sınıfları), kaynaklı birleşimler ve karma birleşimler projenin gereksinimlerine göre tasarlanır. Kaynaklı birleşimlerde tam penetrasyon (CJP) veya kısmi penetrasyon (PJP) kaynak dikişleri, köşe dikişleri (fillet weld) ve tapa kaynakları (plug weld) gibi farklı dikiş tipleri uygulanır.</p>

<h3>Süreç Açıklaması</h3>
<p>Çelik konstrüksiyon imalat süreci, proje çizimlerinin teknik analizi ile başlar. İmalat resimleri (shop drawing) incelenerek malzeme listesi çıkarılır ve tedarik planlanır. Profil kesim işlemlerinde şerit testere, CNC plazma ve fiber lazer kullanılır: ince saclar ve bağlantı plakaları lazer ile, kalın plakalar (25mm+) CNC plazma ile, profiller ise şerit testere veya plazma ile kesilir. Bağlantı plakaları (gusset plate, base plate, end plate) lazer kesim ile ±0.1mm hassasiyetle üretilir; bu hassasiyet montaj sırasında büyük kolaylık sağlar. Büküm gerektiren elemanlar CNC abkant preste şekillendirilir. Kaynak aşamasında MIG/MAG yöntemi ana konstrüksiyon birleşimlerinde, TIG yöntemi ise ince detay ve paslanmaz çelik birleşimlerinde kullanılır. Kaynak dikişlerinin kalitesi görsel muayene ve gerektiğinde tahribatsız muayene (NDT) ile kontrol edilir. İmalat tamamlandıktan sonra kumlama (shot blasting) ile yüzey temizliği yapılır ve astar + boya uygulaması ile korozyon koruması sağlanır.</p>

<h3>Kapasite Bilgileri</h3>
<ul>
<li><strong>Lazer kesim:</strong> 2000x6000mm, 0.5-25mm sac/plaka</li>
<li><strong>CNC plazma kesim:</strong> 2600x6000mm, 6-50mm plaka</li>
<li><strong>CNC büküm:</strong> 4 metre, 0.5-20mm sac</li>
<li><strong>Kaynak yöntemleri:</strong> MIG/MAG, TIG, Lazer kaynak</li>
<li><strong>Desteklenen profiller:</strong> HEA, HEB, IPE, UPN, UPE, kutu profil, boru, köşebent</li>
<li><strong>Çelik kaliteleri:</strong> S235JR, S275JR, S355JR, S420, S460</li>
<li><strong>Yüzey işleme:</strong> Kumlama + astar + boya, galvaniz kaplama (dış tedarik)</li>
</ul>

<h3>Avantajlar</h3>
<ul>
<li>Lazer kesim + plazma kesim + büküm + kaynak tek çatı altında - entegre üretim</li>
<li>Tek tedarikçi ile çalışma - koordinasyon kolaylığı ve maliyet tasarrufu</li>
<li>Lazer kesim hassasiyetiyle bağlantı plakaları - montajda sıfır sorun</li>
<li>CNC plazma ile kalın plaka kesim - 50mm\'ye kadar konstrüksiyon elemanları</li>
<li>MIG/MAG ve TIG kaynak kombinasyonu - her birleşim tipine uygun çözüm</li>
<li>Prototipten seri üretime - esnek üretim kapasitesi</li>
<li>Kumlama ve boyama hizmeti ile komple teslim</li>
</ul>

<h3>Hizmet Verdiğimiz Konstrüksiyon Türleri</h3>
<ul>
<li>Fabrika ve üretim atölyesi çelik taşıyıcı sistemler</li>
<li>Depo, hangar ve lojistik merkezi çelik yapıları</li>
<li>Mezzanine (asma kat) ve çelik platform sistemleri</li>
<li>Çelik merdiven, yangın merdiveni ve rampa imalatı</li>
<li>Makine şasesi, tabla ve konstrüksiyon grupları</li>
<li>Konveyör ve taşıma sistemi yapısal elemanları</li>
<li>Otoparkl çelik yapı sistemleri</li>
<li>Tarımsal yapılar (sera, ahır, silo taşıyıcı)</li>
<li>Enerji santrali çelik yapıları ve boru destekleri</li>
<li>AVM, spor salonu ve fuar çelik çatı sistemleri</li>
</ul>

<h3>Kuzey Şafak Lazer Farkı</h3>
<p>Çelik konstrüksiyon imalatında aynı çatı altında lazer kesim, CNC plazma, CNC büküm ve kaynak hizmetlerini bir arada sunmamız, sektörde nadir bulunan entegre bir üretim avantajıdır. Bağlantı plakalarının lazer ile ±0.1mm hassasiyette kesilmesi, montaj sahasında zaman ve maliyet tasarrufu sağlar. Kalın konstrüksiyon plakaları CNC plazma ile ekonomik biçimde kesilir. Tüm kaynak işlemleri deneyimli ekibimiz tarafından gerçekleştirilir ve kalite kontrol süreçleriyle denetlenir.</p>

<p>Çelik konstrüksiyon projeleriniz için imalat resimlerinizi gönderin, detaylı teklif ve termin planı alın. Fabrika, depo, hangar ve çelik yapı projelerinizde güvenilir imalat ortağınız olmaya hazırız.</p>`,
    faq: [
      { q: 'Proje çizimi olmadan çelik konstrüksiyon yaptırabilir miyim?', a: 'Basit projeler için ihtiyacınıza göre birlikte tasarım geliştirebiliriz. Ancak taşıyıcı çelik yapılarda statik hesap ve mühendislik projesi zorunludur. Proje ofisleriyle işbirliği yaparak bu süreci yönetebiliriz.' },
      { q: 'Çelik konstrüksiyonda hangi profiller kullanılır?', a: 'HEA, HEB, IPE, UPN, UPE profiller, kare ve dikdörtgen kutu profiller, dairesel borular ve köşebentler başta olmak üzere her türlü çelik profil ile imalat yapıyoruz. Projenin statik hesaplarına göre uygun profil seçimi yapılır.' },
      { q: 'Çelik konstrüksiyon imalat teslimat süresi ne kadardır?', a: 'Küçük ve orta ölçekli projelerde 1-3 hafta, büyük projelerde 3-8 hafta teslimat süresi olağandır. Malzeme tedarik süresi de termine dahildir. Acil projelerde hızlandırılmış üretim imkanı sunuyoruz.' },
      { q: 'Çelik konstrüksiyonda boyama ve korozyon koruması yapıyor musunuz?', a: 'Evet, kumlama (shot blasting) ile yüzey hazırlığı ardından astar ve üst kat boya uygulaması yapıyoruz. Sıcak daldırma galvaniz kaplama için ise anlaşmalı tedarikçilerimizle çalışıyoruz.' },
      { q: 'Mezzanine (asma kat) imalatı yapıyor musunuz?', a: 'Evet, depo, fabrika ve mağaza mekanlarında mezzanine (asma kat) çelik konstrüksiyon imalatı ve montajı yapıyoruz. Projelendirmeden montaja kadar tüm süreci yönetiyoruz.' }
    ]
  }
];

export const LONGTAIL_MAP: Record<string, LongTailPage> = {};
LONGTAIL_PAGES.forEach(p => LONGTAIL_MAP[p.slug] = p);
