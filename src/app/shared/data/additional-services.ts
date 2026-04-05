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
    content: `<p><strong>Dekoratif lazer kesim</strong>, metal yüzeyler üzerinde estetik desenler, motifler ve geometrik şekiller oluşturarak mekanlara özgün bir karakter kazandıran ileri teknoloji bir üretim yöntemidir. Kuzey Şafak Lazer olarak İkitelli OSB'deki üretim tesisimizde, fiber lazer teknolojimiz ile milimetrik hassasiyette dekoratif kesimler gerçekleştiriyoruz. Mimariden iç tasarıma, peyzajdan ticari projelere kadar geniş bir yelpazede dekoratif metal çözümler sunuyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Dekoratif lazer kesim sürecimiz, müşterinin tasarım talebinin alınmasıyla başlar. Kendi özgün deseninizi DXF veya DWG formatında bize iletebilir ya da zengin desen katalogumuzdan seçim yapabilirsiniz. Tasarım dosyası CNC programlama birimimiz tarafından makineye uygun hale getirilir; köprü bağlantıları, giriş noktaları ve kesim sıralaması optimize edilir. Fiber lazer makinemiz, ince detayları ve karmaşık desenleri yüksek hızda keserken kenar kalitesini korur. Kesim sonrası çapak alma, zımparalama ve isteğe bağlı yüzey işlemleri (fırçalama, boyama, elektrostatik toz boya) uygulanarak ürün teslime hazır hale getirilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Maksimum çalışma alanı: 2000 x 6000 mm</li>
<li>Kesim kalınlığı: Çelikte 0.5 mm – 20 mm, alüminyumda 0.5 mm – 12 mm</li>
<li>Minimum desen detayı: 1 mm genişliğinde kesim hattı</li>
<li>Desteklenen malzemeler: Paslanmaz çelik, DKP sac, galvaniz sac, corten çelik, alüminyum, pirinç, bakır</li>
<li>Yüzey işlem seçenekleri: Ham bırakma, fırçalama, elektrostatik toz boya, sıcak daldırma galvaniz</li>
<li>Tolerans: ±0.1 mm hassasiyette desen kesimi</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Otel lobi, restoran ve kafe bölücü metal paravanlar ve seperatörler</li>
<li>Villa ve bahçe kapıları, çit panelleri ve bahçe dekorasyonu</li>
<li>Merdiven ve balkon korkuluklarında dekoratif paneller</li>
<li>Dış cephe kaplama panelleri ve güneş kırıcı sistemler</li>
<li>İç mekan dekoratif duvar panelleri ve tavan kaplamaları</li>
<li>Aydınlatma armatür gövdeleri ve abajur tasarımları</li>
<li>Cami, müze ve kültürel yapılarda geleneksel motifli paneller</li>
<li>AVM, mağaza ve showroom iç dekorasyon elemanları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Yüksek çözünürlüklü fiber lazer ile milimetrik detay hassasiyeti</li>
<li>Zengin desen arşivi ve özel tasarım desteği</li>
<li>Aynı çatı altında kesim, büküm ve kaynak ile komple üretim imkanı</li>
<li>Corten, pirinç, bakır gibi özel malzemelerde deneyim</li>
<li>Küçük adetlerden seri üretime kadar esnek üretim kapasitesi</li>
<li>İkitelli OSB konumu ile İstanbul geneline hızlı teslimat</li>
</ul>

<p>Mekanlarınıza değer katacak dekoratif metal paneller, paravanlar veya özel tasarım kesimler için bizimle iletişime geçin. Projenize özel fiyatlandırma ve ücretsiz keşif hizmeti için hemen teklif alın.</p>`
  },
  {
    name: 'Metal Harf Lazer Kesim',
    slug: 'metal-harf-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: 'Tabela, kutu harf, kabartma yazı ve logo gibi metal harf/şekillerin lazer ile hassas kesimi.',
    metaDesc: 'Metal harf lazer kesim hizmeti. Tabela, kutu harf, logo ve yazı kesimi. Paslanmaz, alüminyum, pirinç harf kesim. Kuzey Şafak Lazer.',
    keywords: ['metal harf lazer kesim', 'kutu harf kesim', 'tabela harf kesim', 'paslanmaz harf'],
    content: `<p><strong>Metal harf lazer kesim</strong>, reklam, tabela ve kurumsal kimlik sektörünün vazgeçilmez üretim yöntemidir. İşletmelerin bina cephelerinde, mağaza girişlerinde ve fuar standlarında kullandığı metal harfler ve logolar, lazer kesim teknolojisi ile kusursuz bir biçimde üretilir. Kuzey Şafak Lazer olarak fiber lazer makinemiz ile paslanmaz çelik, alüminyum, pirinç ve bakır gibi metallerde yüksek hassasiyetli harf ve logo kesimi yapıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Metal harf üretim sürecimiz, müşterinin logo veya yazı dosyasının alınmasıyla başlar. Adobe Illustrator (AI), CDR, DXF veya PDF formatındaki vektörel dosyalar CNC programlama birimimize iletilir. Fontların lazer kesimine uygunluğu kontrol edilir; çok ince seriflerde veya iç boşluklarda köprü bağlantıları eklenir. Fiber lazer makinemiz, seçilen malzemeyi yüksek hassasiyetle keser ve pürüzsüz kenar kalitesi sağlar. Kesim sonrası harfler çapak alınır, gerekli durumlarda büküm işlemi ile kutu harf formuna getirilir ve TIG kaynak ile birleştirilir. Son aşamada yüzey işlemi (saten fırçalama, ayna parlatma, elektrostatik toz boya veya kaplama) uygulanarak ürün teslime hazır hale gelir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Minimum harf yüksekliği: 20 mm (malzeme türüne göre)</li>
<li>Maksimum harf yüksekliği: Tek parça 2000 mm, modüler birleştirme ile sınırsız</li>
<li>Malzeme kalınlığı: 0.5 mm – 6 mm (kutu harf yan bantları için 0.5 – 1.5 mm)</li>
<li>Desteklenen malzemeler: 304/316 paslanmaz çelik, alüminyum, pirinç, bakır, DKP sac</li>
<li>Kesim toleransı: ±0.05 mm hassasiyet ile net harf kenarları</li>
<li>Yüzey seçenekleri: Saten fırça, ayna parlatma, gold/rose gold PVD kaplama, elektrostatik boya</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Bina cephe tabelaları ve kutu harf uygulamaları</li>
<li>Mağaza, restoran ve otel giriş yazıları</li>
<li>Fuar standı ve showroom marka yazıları</li>
<li>Kurumsal ofis lobi ve resepsiyon logo panoları</li>
<li>AVM ve plaza yönlendirme tabelaları</li>
<li>Anıt, park ve kamusal alan isim plaketleri</li>
<li>Araç ve gemi gövdesine montajlanan metal amblemler</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Fiber lazer ile kesilen harflerde çapaksız, pürüzsüz kenar kalitesi</li>
<li>Kutu harf için kesim + büküm + kaynak entegre üretim hattı</li>
<li>Pirinç ve bakır gibi zorlu malzemelerde uzman deneyim</li>
<li>Tek parçadan binlerce adetlik seri üretime kadar esneklik</li>
<li>Hızlı prototip üretimi ile tasarım onayı öncesi numune imkanı</li>
<li>İkitelli OSB'de merkezi konum ve hızlı teslimat</li>
</ul>

<p>İşletmenizin marka kimliğini metal harflerle güçlendirmek istiyorsanız, logo dosyanızı bize iletin. Projenize özel fiyatlandırma ve hızlı teslimat için hemen teklif alın.</p>`
  },
  {
    name: 'Hassas Lazer Kesim',
    slug: 'hassas-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: '±0.05mm toleransta ultra hassas lazer kesim. Elektronik, medikal ve havacılık parçaları için.',
    metaDesc: 'Hassas lazer kesim hizmeti. ±0.05mm tolerans, ultra ince detaylar. Elektronik, medikal, havacılık parçaları. Kuzey Şafak Lazer İstanbul.',
    keywords: ['hassas lazer kesim', 'precision laser cutting', 'ince detay lazer kesim', 'mikro lazer kesim'],
    content: `<p><strong>Hassas lazer kesim</strong>, standart kesim toleranslarının çok ötesinde, ±0.05 mm seviyesinde dar toleranslarda gerçekleştirilen özel bir kesim hizmetidir. Elektronik devre kutuları, medikal cihaz parçaları, havacılık bileşenleri ve savunma sanayi elemanları gibi kritik uygulamalarda boyutsal doğruluk hayati önem taşır. Kuzey Şafak Lazer olarak yüksek hassasiyetli fiber lazer teknolojimiz ve titiz kalite kontrol süreçlerimiz ile bu talebi karşılıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Hassas lazer kesim süreci, müşterinin teknik çiziminin detaylı incelenmesiyle başlar. Tolerans gereksinimleri, malzeme türü ve parça geometrisi değerlendirilerek kesim parametreleri optimize edilir. Fiber lazer makinemizde odak noktası hassasiyeti, gaz basıncı, kesim hızı ve lazer gücü, her iş için ayrı ayrı kalibre edilir. Kesim sırasında otomatik yükseklik takip sistemi, sac yüzeyindeki dalgalanmaları kompanze ederek sabit odak mesafesi sağlar. Üretim sonrası her parti, dijital kumpas ve gerektiğinde koordinat ölçüm cihazı ile kontrol edilir. Ölçü raporları müşteriye kesilen parçalarla birlikte teslim edilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Kesim toleransı: ±0.05 mm (malzeme ve kalınlığa bağlı)</li>
<li>Tekrarlanabilirlik: ±0.03 mm pozisyon doğruluğu</li>
<li>Minimum kesim genişliği: 0.15 mm kerf genişliği</li>
<li>Malzeme kalınlığı: 0.3 mm – 12 mm arası ince parçalarda yüksek hassasiyet</li>
<li>Desteklenen malzemeler: Paslanmaz çelik, karbon çelik, alüminyum, bakır, pirinç, titanyum</li>
<li>Yüzey kalitesi: Ra 3.2 µm ve altı kenar pürüzlülüğü</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Elektronik cihaz kutuları, PCB muhafaza kasaları ve EMI kalkanları</li>
<li>Medikal cihaz parçaları, cerrahi alet bileşenleri ve implant taşıyıcıları</li>
<li>Havacılık ve savunma sanayi metal bileşenleri</li>
<li>Otomasyon sistemleri için sensör braketleri ve montaj plakaları</li>
<li>Optik cihaz ve ölçü aletleri kasaları</li>
<li>Geçmeli (interlocking) montaj parçaları ve puzzle birleşim elemanları</li>
<li>Saat, mücevher ve aksesuar sektörü için ince metal detaylar</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Son teknoloji fiber lazer ile ±0.05 mm toleransta güvenilir üretim</li>
<li>Otomatik yükseklik takip sistemi ile homojen kesim kalitesi</li>
<li>Her partide dijital ölçüm ve kalite kontrol raporu</li>
<li>Prototipten seri üretime kadar tutarlı hassasiyet</li>
<li>Teknik çizim inceleme ve üretilebilirlik danışmanlığı (DFM)</li>
<li>Gizlilik sözleşmesi ile savunma ve medikal projelerde güvenli çalışma</li>
</ul>

<p>Mikron seviyesinde hassasiyet gerektiren metal parçalarınız için doğru adrestesiniz. Teknik çiziminizi bize gönderin, tolerans analizi ve projenize özel fiyatlandırma için hemen teklif alın.</p>`
  },
  {
    name: 'Büyük Ebat Lazer Kesim',
    slug: 'buyuk-ebat-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: '2000x6000mm tablada büyük ebatlı parçaların tek seferde lazer kesimi. İnşaat, gemi ve enerji sektörü için.',
    metaDesc: '6 metre büyük ebat lazer kesim hizmeti. 2000x6000mm masa kapasitesi ile büyük parçalar tek seferde. İkitelli OSB Kuzey Şafak Lazer.',
    keywords: ['büyük ebat lazer kesim', '6 metre lazer kesim', 'büyük parça lazer kesim', 'geniş tabla lazer'],
    content: `<p><strong>Büyük ebat lazer kesim</strong>, 2000 x 6000 mm kapasiteli fiber lazer makinemiz sayesinde endüstriyel ölçekli büyük metal plakaların tek seferde, parça bölme ihtiyacı olmadan kesilmesini sağlayan üstün bir üretim hizmetidir. İnşaat, gemi yapımı, enerji ve altyapı sektörleri gibi büyük boyutlu parçaların kritik olduğu alanlarda, parça bütünlüğü ve yapısal mukavemet açısından büyük ebat kesim büyük avantaj sağlar.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Büyük ebat lazer kesim sürecimiz, proje gereksinimlerinin değerlendirilmesiyle başlar. Müşterinin teknik çizimi üzerinden parça boyutları, malzeme kalınlığı ve adet bilgileri incelenir. Büyük plakalar vinç ve vakumlu kaldırma sistemleri ile lazer makine tablasına yerleştirilir. CNC programlama birimimiz, nesting optimizasyonu yaparak plaka üzerindeki fire oranını minimize eder. Fiber lazer makinemizin geniş çalışma alanı, 6 metreye kadar uzunluktaki parçaların tek seferde kesilmesine imkan tanır. Kesim sonrası büyük parçaların taşınması ve paketlenmesi özel ekipmanlarla gerçekleştirilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Maksimum çalışma alanı: 2000 x 6000 mm (tek seferde)</li>
<li>Karbon çelikte kesim kalınlığı: 0.5 mm – 25 mm</li>
<li>Paslanmaz çelikte kesim kalınlığı: 0.5 mm – 20 mm</li>
<li>Alüminyumda kesim kalınlığı: 0.5 mm – 16 mm</li>
<li>Otomatik plaka yükleme ve boşaltma sistemi ile yüksek verimlilik</li>
<li>Nesting yazılımı ile plaka kullanım oranı %90 üzeri optimizasyon</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Çelik konstrüksiyon ve yapısal çelik elemanlar (kolon plakaları, kiriş bağlantıları)</li>
<li>Gemi ve yat yapım sektörü gövde panelleri</li>
<li>Enerji santralleri (rüzgar türbini kuleleri, güneş paneli taşıyıcıları)</li>
<li>İnşaat sektörü cephe kaplama panelleri ve güneş kırıcılar</li>
<li>Ağır iş makineleri gövde ve şasi parçaları</li>
<li>Tank, silo ve depo gövde segmentleri</li>
<li>Köprü, viyadük ve altyapı projeleri çelik elemanları</li>
<li>Endüstriyel platform, mezzanine ve zemin kaplamaları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>6 metreye kadar parçalar tek seferde kesilir, ek kaynak dikişi gerekmez</li>
<li>Parça bütünlüğü korunarak daha yüksek yapısal mukavemet elde edilir</li>
<li>Nesting optimizasyonu ile malzeme firesi minimuma indirilir</li>
<li>Vinç ve vakumlu taşıma ekipmanları ile güvenli büyük plaka elleçleme</li>
<li>İkitelli OSB'de geniş ebatlı parçaların nakliyesine uygun lojistik altyapı</li>
<li>Aynı tesiste büküm ve kaynak ile komple imalat imkanı</li>
</ul>

<p>Büyük boyutlu projeniz için parçalarınızı tek seferde, eksiksiz ve yüksek kalitede kesmek istiyorsanız bize ulaşın. Projenize özel fiyatlandırma ve teslimat planlaması için hemen teklif alın.</p>`
  },
  {
    name: 'Seri Üretim Lazer Kesim',
    slug: 'seri-uretim-lazer-kesim',
    parentService: 'lazer-kesim',
    category: 'kesim',
    description: 'Yüksek adetli seri üretim projelerinde hızlı ve tutarlı lazer kesim. Nesting optimizasyonu ile fire minimizasyonu.',
    metaDesc: 'Seri üretim lazer kesim hizmeti. Yüksek adetli siparişlerde nesting optimizasyonu, fire minimizasyonu. Hızlı teslimat. Kuzey Şafak Lazer.',
    keywords: ['seri üretim lazer kesim', 'toplu lazer kesim', 'fason lazer kesim seri', 'lazer kesim seri üretim'],
    content: `<p><strong>Seri üretim lazer kesim</strong>, yüzlerce veya binlerce adet parçanın tutarlı kalitede, minimum fire ile ve tekrarlanabilir hassasiyette üretilmesini sağlayan endüstriyel bir hizmettir. Kuzey Şafak Lazer olarak CNC fiber lazer makinemizin otomatik nesting yazılımı ve yüksek hızlı kesim kapasitesi ile seri üretim projelerinizde güvenilir bir çözüm ortağı oluyoruz. İkitelli OSB'deki üretim tesisimizde kesintisiz vardiyalı çalışma imkanımız ile yüksek adetli siparişlerinizi zamanında teslim ediyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Seri üretim sürecimiz, sipariş miktarı ve teknik detayların belirlenmesiyle başlar. Parça geometrileri nesting yazılımına aktarılarak plaka üzerindeki yerleşim optimize edilir; bu sayede malzeme kullanım oranı maksimize, fire oranı minimize edilir. İlk partide üretilen numune parçalar ölçü kontrolünden geçirilir ve müşteri onayı alınır. Onay sonrası kesim parametreleri kilitlenerek seri üretime geçilir. Otomatik plaka yükleme sistemi sayesinde plaka değişim süreleri kısalır, üretim sürekliliği sağlanır. Her parti sonunda rastgele numune kontrolü yapılarak kalite tutarlılığı garanti altına alınır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Otomatik nesting yazılımı ile %90 üzeri plaka kullanım oranı</li>
<li>Yüksek hızlı kesim: İnce saclarda 40 m/dakikaya kadar kesim hızı</li>
<li>Otomatik plaka yükleme/boşaltma sistemi ile kesintisiz üretim</li>
<li>Parti bazlı kalite kontrol ve ölçü izlenebilirliği</li>
<li>Günlük kapasite: Malzeme kalınlığına göre yüzlerce ile binlerce parça arası</li>
<li>Tutarlılık: Seri boyunca ±0.1 mm tekrarlanabilirlik</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Otomotiv yan sanayi parçaları (braketler, takviye plakaları, montaj elemanları)</li>
<li>Beyaz eşya sektörü sac parçaları</li>
<li>Aydınlatma sektörü armatür gövdeleri</li>
<li>Elektrik pano ve kutu iç elemanları</li>
<li>Mobilya sektörü metal aksesuar ve bağlantı parçaları</li>
<li>Tarım makineleri yedek parçaları</li>
<li>Endüstriyel makine seri parça ihtiyaçları</li>
<li>İhracat projeleri için yüksek adetli fason kesim</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Nesting optimizasyonu ile malzeme maliyetlerinizde tasarruf</li>
<li>Yüksek hızlı fiber lazer ile kısa üretim süreleri</li>
<li>İlk parça onay sistemi ile hatalı üretim riski sıfıra yakın</li>
<li>Parti bazlı kalite kontrol ve izlenebilirlik</li>
<li>Vardiyalı çalışma kapasitesi ile acil siparişlere hızlı yanıt</li>
<li>Büyük adetlerde projenize özel fiyatlandırma avantajı</li>
</ul>

<p>Yüksek adetli metal parça ihtiyacınız için güvenilir bir seri üretim ortağı arıyorsanız, doğru yerdesiniz. Parça çiziminizi ve adet bilginizi bize gönderin, projenize özel fiyatlandırma ve teslimat süresi için hemen teklif alın.</p>`
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
    content: `<p><strong>Paslanmaz çelik imalat</strong>, korozyona dayanıklı, hijyenik ve estetik görünümlü ürünlerin üretilmesi için lazer kesim, CNC büküm ve kaynak süreçlerinin entegre bir şekilde yönetildiği kapsamlı bir üretim hizmetidir. Kuzey Şafak Lazer olarak 304, 316 ve 430 kalite paslanmaz çelik saclardan, aynı çatı altındaki üretim hatlarımızda kesim, büküm ve kaynak süreçlerini bir arada yürüterek komple ürün imalatı gerçekleştiriyoruz. Bu entegre yaklaşım, kalite kontrolünü, teslimat süresini ve maliyeti optimize eder.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Paslanmaz çelik imalat sürecimiz, müşterinin teknik çiziminin veya ürün tarifinin alınmasıyla başlar. Mühendislik ekibimiz çizimi inceleyerek üretilebilirlik analizi yapar, gerekli durumlarda büküm açıları ve kaynak detayları hakkında önerilerde bulunur. Parçalar fiber lazer makinemizde kesildikten sonra CNC abkant pres ile hassas açılarda bükülür. Birleştirme gereken parçalarda TIG kaynak yöntemi tercih edilir; bu yöntem paslanmaz çelikte minimum ısı etkisi ve temiz dikiş sağlar. Üretim sonrası kaynak dikişleri taşlanır, yüzey fırçalanır veya parlatılır. Gıda sanayi ürünlerinde gerekli ise elektropolisaj uygulanır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Desteklenen kaliteler: AISI 304, 304L, 316, 316L, 430 paslanmaz çelik</li>
<li>Sac kalınlığı: 0.5 mm – 20 mm arası lazer kesim</li>
<li>CNC büküm kapasitesi: 4 metreye kadar tek seferde büküm</li>
<li>Kaynak yöntemleri: TIG (GTAW), MIG (GMAW) ve lazer kaynak</li>
<li>Yüzey işlemleri: Saten fırçalama (No.4), ayna parlatma (No.8), boncuk kumlama, elektropolisaj</li>
<li>Kalite kontrol: Kaynak dikişi görsel muayene, sızdırmazlık testi (tanklar için), boyut kontrolü</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Endüstriyel mutfak tezgahları, evyeleri, davlumbazları ve çalışma masaları</li>
<li>Gıda işleme makinesi parçaları ve hijyenik üretim hatları</li>
<li>Hastane, laboratuvar ve ilaç sanayi ekipmanları</li>
<li>Mimari korkuluk, merdiven ve küpeşte sistemleri</li>
<li>Kimya sanayi tank, reaktör ve boru sistemleri</li>
<li>Havuz, spa ve su arıtma sistemleri elemanları</li>
<li>Otel, restoran ve AVM dekoratif metal işleri</li>
<li>Dış mekan şehir mobilyaları ve peyzaj elemanları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Kesim, büküm ve kaynak tek çatı altında; tedarik zinciri karmaşası yok</li>
<li>TIG kaynak uzmanlığı ile temiz, sızdırmaz ve estetik dikiş kalitesi</li>
<li>304, 316 ve 430 kalitelerde geniş stok ve hızlı tedarik ağı</li>
<li>Gıda ve medikal sektör standartlarına uygun yüzey işlemi kapasitesi</li>
<li>Prototipten seri üretime kadar esnek üretim hacmi</li>
<li>Deneyimli paslanmaz çelik kaynakçı kadrosu</li>
</ul>

<p>Paslanmaz çelikten özel ürün veya proje ihtiyacınız için teknik çiziminizi bize gönderin. Projenize özel fiyatlandırma, malzeme danışmanlığı ve teslimat planı için hemen teklif alın.</p>`
  },
  {
    name: 'Pano Gövde İmalatı',
    slug: 'pano-govde-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Elektrik, otomasyon ve dağıtım panoları için sac gövde imalatı. Kesim + büküm + kaynak + boyama.',
    metaDesc: 'Pano gövde imalatı. Elektrik panosu, otomasyon panosu, dağıtım panosu sac gövde üretimi. Kuzey Şafak Lazer İstanbul.',
    keywords: ['pano gövde imalatı', 'elektrik panosu gövde', 'sac pano imalat', 'pano kasası üretimi'],
    content: `<p><strong>Pano gövde imalatı</strong>, elektrik dağıtım, otomasyon, kontrol ve telekomünikasyon panoları için sac metal gövde, kapak ve iç aksesuar üretim hizmetidir. Pano gövdeleri elektriksel güvenlik, IP koruma sınıfı ve mekanik dayanıklılık açısından yüksek standartlarda üretilmelidir. Kuzey Şafak Lazer olarak DKP sac, galvaniz sac veya paslanmaz çelikten lazer kesim, CNC büküm, kaynak ve boyama süreçlerini entegre ederek tek elden pano gövde üretimi yapıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Pano gövde imalat sürecimiz, müşterinin pano ölçüleri ve teknik gereksinimlerinin belirlenmesiyle başlar. Standart pano boyutları veya müşteriye özel ölçüler CAD ortamında modellenir. Sac parçalar fiber lazer makinemizde hassas bir şekilde kesilir; kapı menteşe delikleri, kablo giriş noktaları, fan açıklıkları ve montaj delikleri bu aşamada açılır. Kesilen saclar CNC abkant preste bükülür ve gövde formuna getirilir. Birleştirme noktalarında TIG veya MIG kaynak uygulanır ve kaynak dikişleri taşlanarak düzgün bir yüzey elde edilir. Son aşamada fosfatlama, astar ve elektrostatik toz boya ile dayanıklı yüzey kaplaması yapılır. İsteğe bağlı olarak conta, kilit, menteşe ve topraklama setleri de montajlanarak komple pano gövdesi teslim edilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Malzeme: 1.0 mm – 3.0 mm DKP sac, galvaniz sac veya paslanmaz çelik</li>
<li>Pano tipi: Serbest dikili (floor-standing), duvar tipi (wall-mounted), konsol tipi</li>
<li>IP koruma sınıfı: IP54, IP55, IP65 seviyelerine uygun üretim kapasitesi</li>
<li>Boyut aralığı: 300x200x150 mm ile 2200x1200x600 mm arası özel ölçü üretimi</li>
<li>Yüzey kaplama: RAL renk kodlarında elektrostatik toz boya (60-80 mikron)</li>
<li>Aksesuar: Menteşe, kilit, gland plakası, montaj rayı (DIN ray), topraklama barası</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Elektrik dağıtım panoları (AG/OG)</li>
<li>Otomasyon ve PLC kontrol panoları</li>
<li>Motor kontrol merkezi (MCC) panoları</li>
<li>Kompanzasyon panoları</li>
<li>Telekomünikasyon ve data center kabinleri</li>
<li>Güneş enerjisi (solar) inverter panoları</li>
<li>Endüstriyel tesis aydınlatma panoları</li>
<li>Yangın algılama ve alarm sistem panoları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Lazer kesim ile deliklerin ve açıklıkların mikron hassasiyetinde işlenmesi</li>
<li>CNC büküm ile birebir tekrarlanabilir ve simetrik gövde üretimi</li>
<li>Kaynak sonrası taşlama ve düzgün yüzey ile profesyonel görünüm</li>
<li>Elektrostatik toz boya ile korozyona dayanıklı, uzun ömürlü kaplama</li>
<li>Standart ve özel ölçülerde tek adet ile seri üretim esnekliği</li>
<li>Aksesuar montajı ile komple teslim imkanı</li>
</ul>

<p>Elektrik panosu, otomasyon kabini veya özel amaçlı pano gövde ihtiyacınız için teknik çiziminizi ya da ölçülerinizi bize iletin. Projenize özel fiyatlandırma ve hızlı üretim takvimi için hemen teklif alın.</p>`
  },
  {
    name: 'Makine Gövdesi İmalatı',
    slug: 'makine-govdesi-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Endüstriyel makine ve cihazlar için sac/profil gövde ve şasi imalatı.',
    metaDesc: 'Makine gövdesi imalatı. Endüstriyel makine kasası, şasi ve kabin üretimi. Lazer kesim + büküm + kaynak. Kuzey Şafak Lazer.',
    keywords: ['makine gövdesi imalatı', 'makine kasası', 'sac kabin imalat', 'makine şasesi üretimi'],
    content: `<p><strong>Makine gövdesi imalatı</strong>, endüstriyel makineler, otomasyon cihazları, paketleme sistemleri ve özel ekipmanlar için sac metal ve profil malzemeden gövde, kasa, şasi ve kabin üretim hizmetidir. Makinenin fonksiyonelliği kadar dış görünümü ve koruyuculuğu da gövde kalitesine bağlıdır. Kuzey Şafak Lazer olarak teknik çiziminize göre prototipten seri üretime kadar her ölçekte makine gövdesi imalatı yapıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Makine gövdesi imalat sürecimiz, müşterinin 3D CAD modelinin veya 2D teknik çiziminin incelenmesiyle başlar. Mühendislik ekibimiz, parçaların üretilebilirliğini değerlendirir; büküm açıları, kaynak erişim noktaları ve montaj sıralaması planlanır. Sac parçalar fiber lazer makinemizde kesilir, CNC abkant preste bükülür. Profil ve kutu profil kesim işlemleri de lazer veya plazma ile gerçekleştirilir. Alt şasi ve taşıyıcı iskelet genellikle kalın profillerden MIG kaynak ile birleştirilirken, dış kabin panelleri TIG kaynak ile düzgün dikiş sağlanarak monte edilir. Gerekli durumlarda kaynak sonrası stres giderme uygulanır. Yüzey hazırlığının ardından kumlama, astar ve elektrostatik toz boya veya ıslak boya uygulanır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Sac malzeme: 1.0 mm – 20 mm DKP, paslanmaz çelik, alüminyum</li>
<li>Profil malzeme: Kutu profil, NPI, HEA, UPN ve özel kesit profiller</li>
<li>Kaynak yöntemleri: TIG, MIG/MAG ve lazer kaynak</li>
<li>Büküm kapasitesi: 4 metreye kadar tek seferde CNC büküm</li>
<li>Yüzey işlemleri: Kumlama, fosfatlama, elektrostatik toz boya, ıslak boya</li>
<li>Montaj: İstenen durumlarda kauçuk conta, cam, menteşe ve kilit montajı dahil</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>CNC tezgahları ve takım tezgahları gövdeleri</li>
<li>Gıda işleme ve paketleme makineleri kasaları</li>
<li>Tekstil makineleri kabin ve kapakları</li>
<li>Matbaa ve baskı makineleri gövdeleri</li>
<li>Medikal cihaz ve laboratuvar ekipmanları kasaları</li>
<li>Otomasyon hatları robot hücreleri ve koruma kabinleri</li>
<li>Jeneratör ve kompresör ses izolasyon kabinleri</li>
<li>Tartım, dozajlama ve dolum sistemleri gövdeleri</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Lazer kesim + büküm + kaynak + boyama entegre üretim hattı</li>
<li>Teknik çizim inceleme ve üretilebilirlik danışmanlığı</li>
<li>Prototip aşamasında hızlı numune üretimi ve revizyon esnekliği</li>
<li>MIG ve TIG kaynak ile taşıyıcı yapılardan ince kabinlere kadar geniş yelpaze</li>
<li>Elektrostatik toz boya ile dayanıklı ve profesyonel son kat</li>
<li>Seri üretim aşamasında tutarlı kalite ve zamanında teslimat</li>
</ul>

<p>Makinenizin gövde, kasa ve şasi ihtiyaçları için bize ulaşın. Teknik çiziminizi gönderin, projenize özel fiyatlandırma ve üretim planı için hemen teklif alın.</p>`
  },
  {
    name: 'Tank ve Depo İmalatı',
    slug: 'tank-depo-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Paslanmaz çelik ve karbon çelikten tank, depo ve silo imalatı. Gıda, kimya ve su depolama.',
    metaDesc: 'Tank ve depo imalatı. Paslanmaz çelik tank, su deposu, kimya tankı üretimi. Kaynaklı imalat. Kuzey Şafak Lazer İstanbul.',
    keywords: ['tank imalatı', 'çelik depo imalatı', 'paslanmaz tank', 'su deposu imalat', 'silo imalatı'],
    content: `<p><strong>Tank ve depo imalatı</strong>, sıvı, gaz, toz veya granül malzemelerin güvenli şekilde depolanması ve taşınması için paslanmaz çelik veya karbon çelikten kapalı ya da açık kap üretim hizmetidir. Gıda sanayi standartlarına uygun hijyenik tanktan endüstriyel kimya depolarına, su depolama sistemlerinden toz malzeme silolarına kadar geniş bir yelpazede üretim yapıyoruz. Kuzey Şafak Lazer olarak lazer kesim, CNC büküm ve uzman kaynak kadromuz ile sızdırmaz ve dayanıklı tank çözümleri sunuyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Tank ve depo imalat sürecimiz, depolanacak maddenin özellikleri, hacim ihtiyacı ve çalışma koşullarının belirlenmesiyle başlar. Malzeme seçimi (304, 316L paslanmaz veya S235/S355 karbon çelik) yapıldıktan sonra tank geometrisi tasarlanır. Sac parçalar fiber lazer makinemizde hassas bir şekilde kesilir, silindirik formlar rulo bükme ile elde edilir, düz saclar CNC abkant preste bükülür. Gövde parçaları TIG veya MIG kaynak ile birleştirilir. Kaynak dikişleri görsel muayene ve sızdırmazlık testinden (hidrostatik veya pnömatik) geçirilir. Paslanmaz çelik tanklarda iç yüzey pasivasyonu veya elektropolisaj uygulanır. Karbon çelik tanklarda kumlama sonrası epoksi veya poliüretan kaplama yapılır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Malzeme: AISI 304, 304L, 316, 316L paslanmaz çelik; S235, S355 karbon çelik</li>
<li>Hacim: 50 litreden 20.000 litreye kadar özel ölçü üretim</li>
<li>Sac kalınlığı: 1.5 mm – 10 mm</li>
<li>Kaynak yöntemleri: TIG (paslanmaz), MIG/MAG (karbon çelik)</li>
<li>Testler: Hidrostatik basınç testi, pnömatik sızdırmazlık testi, kaynak dikişi muayenesi</li>
<li>Aksesuarlar: Flanş bağlantıları, vana adaptörleri, seviye göstergesi bağlantıları, adam deliği kapağı</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Gıda sanayi: Süt, yağ, meyve suyu, şarap ve sirke depolama tankları</li>
<li>Kimya sanayi: Asit, baz, çözücü ve reaktif depolama kapları</li>
<li>Su arıtma: İçme suyu depoları, arıtma tankları, klorlama kapları</li>
<li>İlaç sanayi: Steril üretim tankları ve karıştırma kapları</li>
<li>Kozmetik sanayi: Hammadde depolama ve karıştırma tankları</li>
<li>Tarım: Gübre ve ilaç çözelti tankları</li>
<li>Enerji: Yakıt depolama tankları ve genleşme kapları</li>
<li>Endüstriyel: Toz ve granül malzeme siloları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>TIG kaynak uzmanlığı ile sızdırmaz ve hijyenik kaynak dikişleri</li>
<li>Lazer kesim ile flanş, bağlantı ve açıklıkların hassas işlenmesi</li>
<li>Gıda sanayi standartlarına uygun yüzey işlemi kapasitesi</li>
<li>Hidrostatik basınç testi ile sızdırmazlık garantisi</li>
<li>Özel ölçü ve geometride proje bazlı üretim esnekliği</li>
<li>Aksesuar montajı (flanş, vana, seviye göstergesi) dahil komple teslim</li>
</ul>

<p>Gıda, kimya, su veya endüstriyel depolama ihtiyaçlarınız için özel tank ve depo üretimi hakkında bilgi almak istiyorsanız bize ulaşın. Projenize özel fiyatlandırma ve teknik danışmanlık için hemen teklif alın.</p>`
  },
  {
    name: 'Havalandırma Kanalı İmalatı',
    slug: 'havalandirma-kanali-imalat',
    parentService: 'cnc-bukum',
    category: 'imalat',
    description: 'Galvaniz ve paslanmaz sacdan havalandırma kanalı, baca ve davlumbaz imalatı.',
    metaDesc: 'Havalandırma kanalı imalatı. Galvaniz ve paslanmaz sacdan kanal, baca, davlumbaz üretimi. Kuzey Şafak Lazer İstanbul.',
    keywords: ['havalandırma kanalı imalatı', 'galvaniz kanal imalat', 'baca imalatı', 'davlumbaz imalat'],
    content: `<p><strong>Havalandırma kanalı imalatı</strong>, HVAC (ısıtma, havalandırma ve iklimlendirme) sistemlerinin temel bileşeni olan hava kanallarının, bacaların, davlumbazların ve hava dağıtım elemanlarının galvaniz veya paslanmaz çelik sacdan üretilmesi hizmetidir. Doğru üretilmiş havalandırma kanalları, hava sızıntısını minimize ederek enerji verimliliğini artırır ve iç mekan hava kalitesini iyileştirir. Kuzey Şafak Lazer olarak CNC lazer kesim ve abkant büküm makinelerimiz ile hassas ölçülerde, seri üretim kapasitesiyle havalandırma kanalı imalatı gerçekleştiriyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Havalandırma kanalı imalat sürecimiz, projenin havalandırma planının veya kanal listesinin alınmasıyla başlar. Kanal boyutları, uzunlukları, dirsek açıları, redüksiyon ölçüleri ve bağlantı tipleri belirlenir. Sac parçalar fiber lazer makinemizde hassas bir şekilde kesilir; flanş delikleri, montaj noktaları ve bağlantı elemanları aynı aşamada işlenir. Kesilen saclar CNC abkant preste bükülür ve kanal formuna getirilir. Dikdörtgen kanallar için köşe birleştirmelerinde Pittsburgh kilit veya kaynaklı birleşim uygulanır. Dairesel kanallarda ise rulo bükme ile silindirik form oluşturulur. Flanşlar takılır ve gerekli sızdırmazlık testleri yapılır. Paslanmaz çelik kanallar genellikle ham bırakılırken, galvaniz kanallar ihtiyaç durumunda boyanır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Malzeme: 0.5 mm – 1.5 mm galvaniz sac, 0.5 mm – 2.0 mm paslanmaz çelik</li>
<li>Kanal tipi: Dikdörtgen, dairesel ve oval kesit kanaller</li>
<li>Maksimum kanal boyutu: 2000 x 1000 mm kesit, 6 metreye kadar uzunluk</li>
<li>Bağlantı tipi: Flanşlı, muflu, Pittsburgh kilit, TDC/TDF</li>
<li>Aksesuar: Dirsek, T-parça, redüksiyon, damper, menfez bağlantısı</li>
<li>Sızdırmazlık sınıfı: A, B ve C sınıfı kanallara uygun üretim</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>AVM, otel, hastane ve ofis binaları merkezi havalandırma sistemleri</li>
<li>Endüstriyel tesis egzoz ve taze hava kanalları</li>
<li>Restoran ve endüstriyel mutfak davlumbaz ve egzoz bacaları</li>
<li>Temiz oda ve laboratuvar havalandırma kanalları</li>
<li>Otopark karbonmonoksit egzoz sistemleri</li>
<li>Yangın duman tahliye kanalları</li>
<li>Üretim tesisi toz toplama sistemleri kanal hatları</li>
<li>Soğuk hava deposu ve frigorifik sistemler hava dağıtım kanalları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Lazer kesim ile flanş delik ve montaj noktalarının hassas işlenmesi</li>
<li>CNC büküm ile tekrarlanabilir kanal ölçüleri ve düzgün form</li>
<li>Dikdörtgen, dairesel ve özel kesit kanallarda üretim yetkinliği</li>
<li>Proje bazlı toplu üretimde hızlı teslimat kapasitesi</li>
<li>Galvaniz ve paslanmaz çelikte her iki malzeme grubunda deneyim</li>
<li>Aksesuar ve bağlantı elemanları dahil komple kanal seti teslimi</li>
</ul>

<p>Havalandırma projeniz için kanal, baca ve davlumbaz imalatı hakkında bilgi almak istiyorsanız kanal listenizi veya projenizi bize gönderin. Projenize özel fiyatlandırma ve üretim takvimi için hemen teklif alın.</p>`
  },
  {
    name: 'Raf Sistemi İmalatı',
    slug: 'raf-sistemi-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Depo, market ve arşiv raf sistemleri imalatı. Profil ve sac kombine üretim.',
    metaDesc: 'Raf sistemi imalatı. Depo rafı, market rafı, arşiv rafı üretimi. Çelik profil ve sac imalat. Kuzey Şafak Lazer İstanbul.',
    keywords: ['raf sistemi imalatı', 'çelik raf üretimi', 'depo rafı imalat', 'metal raf üretimi'],
    content: `<p><strong>Raf sistemi imalatı</strong>, depo, market, arşiv, atölye ve endüstriyel alanlar için çelik profil ve sac malzemeden raf elemanları ve komple raf yapılarının üretilmesi hizmetidir. Doğru tasarlanmış raf sistemleri, depolama kapasitesini artırır, erişimi kolaylaştırır ve iş güvenliğini sağlar. Kuzey Şafak Lazer olarak profil kesim, sac büküm ve kaynak süreçlerimizi entegre ederek projenize özel raf sistemi üretimi yapıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Raf sistemi imalat sürecimiz, depolama ihtiyaçlarının ve mekan ölçülerinin belirlenmesiyle başlar. Yük kapasitesi, raf aralıkları, kat yükseklikleri ve bağlantı tipleri projeye göre tasarlanır. Dikey taşıyıcı kolonlar ve yatay kirişler profil malzemeden lazer veya plazma ile kesilir. Raf tablaları sac malzemeden lazer kesim ve CNC büküm ile şekillendirilir. Birleştirme noktalarında kaynak veya cıvatalı bağlantı yöntemi uygulanır. Tüm parçalar kumlama sonrası elektrostatik toz boya ile kaplanır. İsteğe bağlı olarak sıcak daldırma galvaniz kaplama da yapılabilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Profil malzeme: Kutu profil, C profil, L profil, özel kesit profiller</li>
<li>Sac malzeme: 0.8 mm – 3.0 mm DKP sac, galvaniz sac</li>
<li>Raf yüksekliği: 1 metreden 12 metreye kadar özel tasarım</li>
<li>Kat yük kapasitesi: 100 kg ile 3.000 kg arası (tasarıma göre)</li>
<li>Yüzey kaplama: Elektrostatik toz boya (RAL renk seçenekleri) veya sıcak daldırma galvaniz</li>
<li>Bağlantı tipi: Kaynaklı, cıvatalı veya geçmeli (clip-in) sistemler</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Lojistik depo ve dağıtım merkezi palet rafları</li>
<li>Market ve mağaza teşhir rafları</li>
<li>Arşiv ve dosya depolama raf sistemleri</li>
<li>Oto yedek parça ve malzeme depolama rafları</li>
<li>Atölye ve imalathane alet ve malzeme rafları</li>
<li>Soğuk hava deposu ve frigorifik depo rafları</li>
<li>E-ticaret sipariş toplama (picking) raf sistemleri</li>
<li>Showroom ve fuar teşhir üniteleri</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Lazer kesim ile delik, yuva ve bağlantı noktalarının hassas işlenmesi</li>
<li>Projeye özel tasarım ve mühendislik desteği</li>
<li>Kesim, büküm, kaynak ve boyama tek elden üretim</li>
<li>Standart ölçülerden tamamen özel ölçülere kadar esneklik</li>
<li>Seri üretimde tutarlı kalite ve zamanında teslimat</li>
<li>Elektrostatik toz boya ile uzun ömürlü, dayanıklı kaplama</li>
</ul>

<p>Depo, market veya endüstriyel alanlarınız için özel raf sistemi ihtiyacınız varsa, depolama gereksinimlerinizi bize iletin. Projenize özel fiyatlandırma ve tasarım desteği için hemen teklif alın.</p>`
  },
  {
    name: 'Merdiven İmalatı',
    slug: 'merdiven-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Çelik ve paslanmaz çelik merdiven imalatı. Yangın merdiveni, spiral merdiven, endüstriyel platform.',
    metaDesc: 'Çelik merdiven imalatı. Yangın merdiveni, spiral merdiven, endüstriyel merdiven. Lazer kesim + kaynak. Kuzey Şafak Lazer İstanbul.',
    keywords: ['çelik merdiven imalatı', 'metal merdiven', 'yangın merdiveni', 'spiral merdiven imalat'],
    content: `<p><strong>Çelik merdiven imalatı</strong>, bina içi ve dışı merdiven sistemlerinin karbon çelik, paslanmaz çelik veya corten çelik malzemeden üretilmesi hizmetidir. Yangın merdivenleri, spiral (helisel) merdivenler, endüstriyel platform merdivenleri ve dekoratif iç mekan merdivenleri gibi farklı tiplerde üretim yapıyoruz. Kuzey Şafak Lazer olarak lazer kesim, CNC büküm ve kaynak süreçlerimizi bir arada kullanarak projenize özel, güvenli ve estetik merdivenler üretiyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Merdiven imalat sürecimiz, mekan ölçülerinin alınması ve merdiven tipinin belirlenmesiyle başlar. Kat yüksekliği, merdiven genişliği, basamak sayısı ve eğim açısı hesaplanarak teknik çizim hazırlanır. Taşıyıcı kollar (vanglar) profil veya sac malzemeden lazer kesim ile şekillendirilir. Basamak plakaları fiber lazer ile kesilerek kaydırmaz yüzey desenleri işlenir. Tüm parçalar atölye ortamında montaj sırasına göre MIG veya TIG kaynak ile birleştirilir. Kaynak dikişleri taşlanır, yüzey hazırlanır ve elektrostatik toz boya veya galvaniz kaplama uygulanır. Sahaya nakliye ve montaj, proje koşullarına göre modüler veya komple olarak gerçekleştirilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Malzeme: S235/S355 karbon çelik, 304/316 paslanmaz çelik, corten çelik</li>
<li>Profil: UPN, IPE, HEA, kutu profil, boru profil</li>
<li>Basamak genişliği: 600 mm – 1500 mm arası</li>
<li>Merdiven tipleri: Düz kollu, U dönüşlü, L dönüşlü, spiral (helisel)</li>
<li>Yük kapasitesi: Projeye göre statik hesap ile belirlenir</li>
<li>Yüzey: Elektrostatik toz boya, sıcak daldırma galvaniz, paslanmaz fırçalama</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Yangın merdivenleri (bina dışı ve iç kaçış merdivenleri)</li>
<li>Spiral ve helisel dekoratif merdivenler</li>
<li>Endüstriyel tesis platform ve geçit merdivenleri</li>
<li>Depo ve antrepo mezzanine merdivenleri</li>
<li>Villa ve rezidans iç mekan çelik merdivenleri</li>
<li>AVM, otel ve plaza ortak alan merdivenleri</li>
<li>Gemi ve deniz yapıları erişim merdivenleri</li>
<li>Tarımsal tesis ve silo erişim platformları</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Lazer kesim ile basamak, bağlantı plakası ve detay parçaların hassas üretimi</li>
<li>MIG ve TIG kaynak ile taşıyıcı mukavemet ve estetik dikiş kalitesi</li>
<li>Spiral merdiven dahil karmaşık geometrilerde üretim deneyimi</li>
<li>Statik hesaplama desteği ile güvenli tasarım</li>
<li>Modüler üretim ile kolay nakliye ve hızlı sahada montaj</li>
<li>Yangın merdiveni yönetmeliklere uygun üretim</li>
</ul>

<p>Binanız, tesisiniz veya projeniz için güvenli ve estetik çelik merdiven ihtiyacınız varsa bize ulaşın. Mekan ölçülerinizi paylaşın, projenize özel fiyatlandırma ve tasarım desteği için hemen teklif alın.</p>`
  },
  {
    name: 'Korkuluk İmalatı',
    slug: 'korkuluk-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Paslanmaz çelik ve çelik korkuluk imalatı. Merdiven, balkon, teras korkulukları.',
    metaDesc: 'Korkuluk imalatı. Paslanmaz çelik korkuluk, cam korkuluk, ferforje korkuluk. Lazer kesim + kaynak. Kuzey Şafak Lazer.',
    keywords: ['korkuluk imalatı', 'paslanmaz korkuluk', 'çelik korkuluk', 'balkon korkuluğu', 'merdiven korkuluğu'],
    content: `<p><strong>Korkuluk imalatı</strong>, merdiven, balkon, teras, çatı ve köprü gibi alanlarda düşme riskini önlemek amacıyla metal malzemeden güvenlik bariyeri üretim hizmetidir. Korkuluklar güvenlik işlevinin yanı sıra mekanın estetiğine de önemli katkı sağlar. Kuzey Şafak Lazer olarak paslanmaz çelik, karbon çelik ve corten çelik malzemelerden modern, klasik ve endüstriyel tasarımlarda korkuluk üretiyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Korkuluk imalat sürecimiz, mekan ölçülerinin ve tasarım tercihinin belirlenmesiyle başlar. Korkuluk yüksekliği, dikme aralıkları, küpeşte profili ve dolgu tipi (yatay boru, dikey dikme, cam panel, lazer kesim dekoratif panel veya paslanmaz halat) projeye göre tasarlanır. Boru ve profil malzeme lazer ile kesilir, dekoratif paneller fiber lazer makinemizde hassas bir şekilde işlenir. Parçalar TIG kaynak ile birleştirilir; paslanmaz çelikte TIG kaynak dikişi görünür yüzeylerde taşlanıp parlatılır. Montaj ayakları ve bağlantı plakaları lazer kesim ile üretilir. Karbon çelik korkuluklarda kumlama ve elektrostatik toz boya uygulanır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Malzeme: 304/316 paslanmaz çelik boru ve profil, karbon çelik, corten çelik</li>
<li>Boru çapları: 25 mm – 76 mm arası yuvarlak ve kare boru</li>
<li>Korkuluk yüksekliği: Standart 90 cm – 110 cm (yönetmeliklere uygun)</li>
<li>Dolgu tipleri: Yatay boru, dikey dikme, cam panel, paslanmaz halat, lazer kesim panel</li>
<li>Yüzey işlemi: Saten fırçalama, ayna parlatma, elektrostatik toz boya, PVD kaplama</li>
<li>Bağlantı: Tabana montaj, yandan montaj, gömme montaj seçenekleri</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Merdiven korkulukları (iç mekan ve dış mekan)</li>
<li>Balkon ve teras güvenlik korkulukları</li>
<li>Havuz çevresi korkuluk ve bariyerleri</li>
<li>AVM, otel ve plaza mezzanine korkulukları</li>
<li>Köprü ve yaya geçidi korkulukları</li>
<li>Endüstriyel tesis platform ve geçit korkulukları</li>
<li>Park, bahçe ve peyzaj alanı dekoratif korkuluklar</li>
<li>Engelli rampa korkulukları ve tutamaklar</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Fiber lazer ile dekoratif panel ve detay parçaların hassas kesimi</li>
<li>TIG kaynak uzmanlığı ile temiz, pürüzsüz ve estetik birleşim noktaları</li>
<li>Cam panel, halat ve lazer kesim panel dahil çeşitli dolgu seçenekleri</li>
<li>Yapı yönetmeliklerine uygun güvenlik standartlarında üretim</li>
<li>Projeye özel tasarım ve mekan ölçülerine göre üretim</li>
<li>Saten fırçalama ve ayna parlatma dahil yüzey işlemi kapasitesi</li>
</ul>

<p>Merdiven, balkon veya teras korkuluk ihtiyacınız için bize ulaşın. Mekan ölçülerinizi ve tasarım tercihinizi paylaşın, projenize özel fiyatlandırma için hemen teklif alın.</p>`
  },
  {
    name: 'Konveyör Sistemi İmalatı',
    slug: 'konveyor-sistemi-imalat',
    parentService: 'kaynakli-imalat',
    category: 'imalat',
    description: 'Endüstriyel konveyör bant sistemleri için metal gövde, şasi ve taşıyıcı parça imalatı.',
    metaDesc: 'Konveyör sistemi imalatı. Konveyör bant gövdesi, şasi, taşıyıcı parça üretimi. Çelik imalat. Kuzey Şafak Lazer.',
    keywords: ['konveyör sistemi imalatı', 'konveyör gövde', 'bant konveyör imalat'],
    content: `<p><strong>Konveyör sistemi imalatı</strong>, endüstriyel üretim hatları, lojistik tesisleri ve paketleme merkezleri için konveyör bant gövdeleri, taşıyıcı şasiler, tambur destekleri, makas ayakları ve bağlantı elemanlarının metal malzemeden üretilmesi hizmetidir. Konveyör sistemlerinin güvenilir çalışması, taşıyıcı yapının mukavemeti ve ölçüsel doğruluğuna bağlıdır. Kuzey Şafak Lazer olarak lazer kesim, CNC büküm ve kaynak süreçlerimiz ile projenize özel konveyör parça ve gövde imalatı yapıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Konveyör imalat sürecimiz, sistem tasarımının ve teknik çizimlerin incelenmesiyle başlar. Konveyör tipi (bantlı, rulolu, zincirli, vidalı), bant genişliği, hat uzunluğu ve taşıma kapasitesi dikkate alınarak malzeme seçimi yapılır. Şasi ve yan lama parçaları profil ve sac malzemeden fiber lazer makinemizde kesilir. Tambur yataklanma noktaları, motor montaj plakaları ve gergi mekanizması yuvaları hassas toleranslarda işlenir. CNC abkant preste büküm işlemi sonrası parçalar MIG kaynak ile birleştirilir. Kaynak sonrası gerekli yerlerde talaşlı işleme (freze/delme) ile yüzey düzleştirme yapılır. Kumlama ve elektrostatik toz boya ile korozyona karşı koruma sağlanır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Malzeme: S235/S355 karbon çelik, 304/316 paslanmaz çelik</li>
<li>Profil: UPN, kutu profil, L profil, özel kesit profiller</li>
<li>Sac kalınlığı: 2 mm – 12 mm</li>
<li>Konveyör genişliği: 200 mm – 2000 mm arası</li>
<li>Hat uzunluğu: Modüler üretim ile sınırsız</li>
<li>Yüzey kaplama: Kumlama + elektrostatik toz boya veya sıcak daldırma galvaniz</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Gıda sanayi üretim ve paketleme hatları konveyörleri</li>
<li>Lojistik ve dağıtım merkezi bantlı konveyör sistemleri</li>
<li>Madencilik ve agrega sektörü ağır hizmet konveyörleri</li>
<li>Otomotiv sanayi montaj hattı taşıyıcı sistemleri</li>
<li>Geri dönüşüm tesisleri ayırma ve taşıma bantları</li>
<li>Havaalanı bagaj taşıma sistemleri</li>
<li>İlaç ve kozmetik sektörü paketleme hattı konveyörleri</li>
<li>Tarım ve sera ürün taşıma sistemleri</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Lazer kesim ile motor montaj ve yataklama noktalarının hassas işlenmesi</li>
<li>CNC büküm ile tekrarlanabilir ve simetrik şasi üretimi</li>
<li>MIG kaynak ile yüksek mukavemetli taşıyıcı yapı birleştirme</li>
<li>Modüler üretim yaklaşımı ile kolay nakliye ve sahada montaj</li>
<li>Karbon çelik ve paslanmaz çelik seçenekleri ile her sektöre uygunluk</li>
<li>Prototipten seri üretime kadar esnek üretim kapasitesi</li>
</ul>

<p>Üretim hattınız veya lojistik tesisiniz için konveyör gövde ve şasi ihtiyacınız varsa bize ulaşın. Teknik çiziminizi gönderin, projenize özel fiyatlandırma ve üretim planlaması için hemen teklif alın.</p>`
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
    content: `<p><strong>Lazer markalama</strong>, metal yüzeylere kalıcı ve silinmez izler bırakarak logo, seri numarası, barkod, QR kod, üretim tarihi ve teknik bilgilerin kazınması işlemidir. Ürün takibi, kalite kontrol, marka görünürlüğü ve yasal gereklilikler açısından lazer markalama endüstriyel üretimin vazgeçilmez bir parçasıdır. Kuzey Şafak Lazer olarak fiber lazer makinemiz ile kesim öncesi veya sonrası yüksek kontrastlı ve dayanıklı markalama hizmeti sunuyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Lazer markalama sürecimiz, kazınacak içeriğin belirlenmesiyle başlar. Logo, yazı veya kod dosyası vektörel formatta (DXF, AI, SVG) alınır veya metin bilgisi doğrudan sisteme girilir. Markalama pozisyonu, boyutu ve derinliği müşteriyle birlikte belirlenir. Fiber lazer makinemiz, ayarlanan parametrelere göre metal yüzeyinde kontrollü bir şekilde iz oluşturur. İşlem yüzeyi çizmeden, malzeme bütünlüğünü bozmadan gerçekleştirilir. Yüzey renk değişimi (annealing), derin kazıma (engraving) veya kontrast markalama gibi farklı teknikler, malzeme türüne ve kullanım amacına göre seçilir. Seri üretimde otomatik dosya besleme ile her parçaya farklı seri numarası veya QR kod atanabilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Markalama alanı: Parça boyutuna göre esnek konumlama</li>
<li>Minimum karakter yüksekliği: 0.5 mm</li>
<li>Desteklenen içerik: Logo, metin, seri numarası, barkod (Code 128, Code 39), QR kod, Data Matrix</li>
<li>Markalama tipi: Yüzey renk değişimi, derin kazıma, kontrast markalama</li>
<li>Desteklenen malzemeler: Paslanmaz çelik, karbon çelik, alüminyum, pirinç, bakır, titanyum</li>
<li>Tekrarlanabilirlik: Her parçada aynı kalitede tutarlı markalama</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Endüstriyel parçalarda seri numarası ve lot takibi</li>
<li>Medikal cihaz ve cerrahi alet UDI (Unique Device Identification) markalama</li>
<li>Otomotiv parçalarında üretici kodu ve parça numarası</li>
<li>Elektronik kutu ve kabinlerde model ve versiyon bilgisi</li>
<li>Gıda sanayi ekipmanlarında CE ve kalite işaretleri</li>
<li>Promosyon ve kurumsal hediye ürünlerinde logo kazıma</li>
<li>Makine ve teçhizat üzerinde uyarı etiketleri ve teknik bilgiler</li>
<li>Metal aksesuar, takı ve dekoratif ürünlerde kişiselleştirme</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Fiber lazer ile yüksek kontrastlı, kalıcı ve dayanıklı markalama</li>
<li>Kesim ve markalama aynı makinede; parçayı iki kez taşıma gereği yok</li>
<li>Seri üretimde otomatik seri numarası ve QR kod atama</li>
<li>Farklı markalama teknikleri ile her malzeme türüne uygun çözüm</li>
<li>0.5 mm karakter yüksekliğine kadar ince detay kapasitesi</li>
<li>Hızlı işlem süresi ile üretim hattını yavaşlatmayan entegre markalama</li>
</ul>

<p>Ürünlerinize kalıcı marka kimliği, izlenebilirlik ve teknik bilgi kazımak istiyorsanız lazer markalama hizmetimizden faydalanın. Logo dosyanızı veya markalama detaylarınızı bize gönderin, projenize özel fiyatlandırma için hemen teklif alın.</p>`
  },
  {
    name: '4 Metre Abkant Büküm',
    slug: '4-metre-abkant-bukum',
    parentService: 'cnc-bukum',
    category: 'isleme',
    description: '4 metre uzunluğa kadar tek seferde CNC abkant büküm. Geniş parçalarda ek dikişsiz büküm.',
    metaDesc: '4 metre abkant büküm hizmeti. Tek seferde 4 metreye kadar CNC büküm. Geniş parçalar, ek dikişsiz. Kuzey Şafak Lazer İkitelli.',
    keywords: ['4 metre abkant büküm', '4 metre büküm', 'uzun parça büküm', 'geniş sac büküm'],
    content: `<p><strong>4 metre abkant büküm</strong> kapasitemiz, büyük ebatlı sac parçaların tek seferde, parça bölmeye gerek kalmadan bükülmesini sağlayan önemli bir teknik avantajdır. 4 metreye kadar uzunluktaki sacları parçalamadan bükebilmemiz, ek kaynak dikişi gerektirmeden tek parça üretim anlamına gelir. Kuzey Şafak Lazer olarak CNC kontrollü abkant pres makinemiz ile hassas açılarda, tekrarlanabilir kalitede ve geniş malzeme yelpazesinde büküm hizmeti sunuyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>CNC abkant büküm sürecimiz, teknik çizimin incelenmesiyle başlar. Büküm açıları, büküm sıralaması, iç büküm radyüsleri ve geri yaylanma (springback) hesaplamaları CNC programlama birimimiz tarafından yapılır. Her malzeme türü ve kalınlığı için geri yaylanma katsayısı farklı olduğundan, parametreler malzemeye özel optimize edilir. Doğru kalıp (V açıklığı) ve üst bıçak (punch) kombinasyonu seçilerek makineye takılır. İlk parça bükümü yapılarak açıölçer ile kontrol edilir, onay sonrası seri üretime geçilir. CNC kontrol sistemi, çok bükümlü karmaşık parçalarda bile her adımda aynı hassasiyeti garanti eder. 4 metre uzunluğundaki saclar, makinenin geniş tabla desteği sayesinde sarkma yapmadan düzgün bir şekilde bükülür.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Maksimum büküm uzunluğu: 4000 mm (tek seferde)</li>
<li>Baskı kapasitesi: Yüksek tonajlı hidrolik pres ile kalın saclarda güçlü büküm</li>
<li>Büküm açısı: 0° – 180° arası (V büküm, Z büküm, U büküm, kutu büküm)</li>
<li>Malzeme kalınlığı: 0.5 mm – 12 mm (malzeme türüne göre)</li>
<li>Açı hassasiyeti: ±0.5° tolerans ile hassas büküm</li>
<li>Desteklenen malzemeler: DKP sac, galvaniz sac, paslanmaz çelik, alüminyum, bakır, pirinç</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Havalandırma kanalları ve baca elemanları</li>
<li>Çatı ve cephe kaplama panelleri (trapez, sinus profil)</li>
<li>Elektrik pano ve kabin gövdeleri</li>
<li>Endüstriyel mutfak tezgah ve evye çevreleri</li>
<li>Makine kabin ve kapak parçaları</li>
<li>Depo rafı, dolap ve metal mobilya elemanları</li>
<li>İnşaat sektörü denizlik, kapak ve profil elemanları</li>
<li>Tank ve depo gövde segmentleri</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>4 metreye kadar tek seferde büküm ile ek kaynak gerektirmeyen üretim</li>
<li>CNC kontrol ile ±0.5° açı hassasiyeti ve tam tekrarlanabilirlik</li>
<li>Geri yaylanma kompanzasyonu ile ilk parçada doğru açı</li>
<li>Geniş kalıp envanteri ile farklı büküm profilleri ve radyüsler</li>
<li>Lazer kesim sonrası aynı tesiste büküm; parça taşıma maliyeti yok</li>
<li>Prototipten seri üretime kadar esnek kapasite</li>
</ul>

<p>4 metreye kadar uzunluktaki sac parçalarınızı tek seferde, hassas açılarda bükmek istiyorsanız bize ulaşın. Teknik çiziminizi gönderin, projenize özel fiyatlandırma ve hızlı üretim takvimi için hemen teklif alın.</p>`
  },
  {
    name: 'Prototip Üretim',
    slug: 'prototip-uretim',
    parentService: 'lazer-kesim',
    category: 'ozel',
    description: 'Tek parça veya küçük adetli prototip metal parça üretimi. Hızlı geri dönüş, esnek üretim.',
    metaDesc: 'Prototip metal parça üretimi. Tek parça veya küçük adet. DXF/DWG dosyasından hızlı üretim. Lazer kesim + büküm + kaynak. Kuzey Şafak Lazer.',
    keywords: ['prototip üretim', 'prototip lazer kesim', 'tek parça imalat', 'küçük adet üretim'],
    content: `<p><strong>Prototip üretim</strong>, yeni ürün geliştirme sürecinde tek parça veya küçük adetli numune üretim hizmetidir. Bir tasarımın fiziksel olarak test edilmesi, form ve fonksiyon kontrolü, müşteri sunumu veya fuar numunesi hazırlanması için prototip üretim kritik öneme sahiptir. Kuzey Şafak Lazer olarak DXF/DWG dosyanızdan direkt üretime geçerek en kısa sürede metal prototiplerinizi teslim ediyoruz. Lazer kesim, CNC büküm ve kaynak süreçlerimizi esnek bir şekilde kullanarak her türlü prototip ihtiyacınızı karşılıyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Prototip üretim sürecimiz, tasarım dosyasının alınmasıyla başlar. DXF, DWG, STEP, IGES veya SolidWorks formatındaki dosyalar mühendislik ekibimiz tarafından incelenir. Üretilebilirlik analizi yapılır; büküm açıları, kaynak erişim noktaları ve malzeme seçimi konusunda gerekirse öneriler sunulur. Dosya onayı alındıktan sonra fiber lazer makinemizde kesim yapılır, CNC abkant preste büküm gerçekleştirilir ve gerekli birleştirmeler TIG veya MIG kaynak ile tamamlanır. Prototip parça ölçü kontrolünden geçirilir ve müşteriye teslim edilir. Revizyon gerektiğinde hızlı düzeltme ve yeniden üretim imkanı sunuyoruz. Prototip onaylandıktan sonra aynı üretim parametreleriyle seri üretime sorunsuz geçiş sağlanır.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Desteklenen dosya formatları: DXF, DWG, STEP, IGES, SolidWorks, PDF (ölçülü teknik çizim)</li>
<li>Minimum adet: 1 adet (tek parça üretim)</li>
<li>Süreçler: Lazer kesim, CNC büküm, TIG/MIG kaynak, taşlama, boyama</li>
<li>Malzemeler: Karbon çelik, paslanmaz çelik, alüminyum, bakır, pirinç</li>
<li>Kalınlık aralığı: 0.5 mm – 25 mm</li>
<li>Ortalama teslim süresi: 1 – 5 iş günü (proje karmaşıklığına göre)</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Yeni ürün Ar-Ge sürecinde fiziksel numune üretimi</li>
<li>Makine ve cihaz tasarımında form ve montaj testi</li>
<li>Fuar, sunum ve müşteri demo numuneleri</li>
<li>Yedek parça tedarikinde tersine mühendislik ile numune çıkartma</li>
<li>Mevcut parçanın revize edilmiş versiyonunun denenmesi</li>
<li>Start-up ve girişim firmalarında MVP (Minimum Viable Product) üretimi</li>
<li>Tasarım yarışmaları ve akademik projeler için metal numune</li>
<li>Seri üretim öncesi pilot seri (5-50 adet) üretimi</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Tek parçadan itibaren üretim; minimum sipariş adedi yok</li>
<li>DXF dosyasından aynı gün üretime başlama kapasitesi</li>
<li>Kesim, büküm ve kaynak tek çatı altında; hızlı geri dönüş süresi</li>
<li>Üretilebilirlik analizi ve mühendislik desteği</li>
<li>Revizyon esnekliği ve hızlı düzeltme imkanı</li>
<li>Prototipten seri üretime sorunsuz geçiş garantisi</li>
</ul>

<p>Yeni tasarımınızı hayata geçirmek veya mevcut bir parçanın numune üretimini yaptırmak istiyorsanız, tasarım dosyanızı bize gönderin. Projenize özel fiyatlandırma ve hızlı teslimat için hemen teklif alın.</p>`
  },
  {
    name: 'Özel Parça İmalatı',
    slug: 'ozel-parca-imalat',
    parentService: 'kaynakli-imalat',
    category: 'ozel',
    description: 'Müşteri çizimine göre özel tasarım metal parça üretimi. Fason imalat.',
    metaDesc: 'Özel metal parça imalatı. Müşteri çizimine göre fason üretim. Lazer kesim + büküm + kaynak. Kuzey Şafak Lazer İkitelli OSB.',
    keywords: ['özel parça imalatı', 'fason imalat', 'özel metal parça', 'çizime göre üretim'],
    content: `<p><strong>Özel parça imalatı</strong>, müşterinin teknik çizimine veya numune parçasına göre birebir üretim yapılan fason imalat hizmetidir. Standart katalog ürünlerinde bulunamayan, projenize özel boyut, form ve malzeme gereksinimlerine sahip metal parçaları üretiyoruz. Kuzey Şafak Lazer olarak lazer kesim, CNC büküm, TIG/MIG kaynak ve yüzey işleme süreçlerimizi bir arada kullanarak her sektörden müşterimize özel çözümler sunuyoruz.</p>

<h3>Nasıl Yapıyoruz?</h3>
<p>Özel parça imalat sürecimiz, müşterinin ihtiyacını anlamakla başlar. Teknik çizim (DXF, DWG, STEP, SolidWorks), 3D model veya fiziksel numune parça üzerinden üretim planı hazırlanır. Teknik çizimi olmayan müşterilerimiz için tersine mühendislik hizmeti de sunuyoruz; mevcut parça ölçülenerek dijital ortamda çizimi oluşturulur. Mühendislik ekibimiz üretilebilirlik analizi yaparak büküm sıralaması, kaynak yöntemi ve yüzey işlemi önerir. Fiber lazer makinemizde hassas kesim yapılır, CNC abkant preste büküm gerçekleştirilir ve gerekli birleştirmeler TIG veya MIG kaynak ile tamamlanır. Yüzey hazırlığı sonrası boyama, kaplama veya parlatma gibi son işlemler uygulanır. Her parça ölçü kontrolünden geçirilerek teslim edilir.</p>

<h3>Teknik Kapasite</h3>
<ul>
<li>Lazer kesim: 2000 x 6000 mm tablada, 0.5 mm – 25 mm kalınlık</li>
<li>CNC büküm: 4 metreye kadar tek seferde, ±0.5° açı hassasiyeti</li>
<li>Kaynak: TIG, MIG/MAG ve lazer kaynak yöntemleri</li>
<li>Malzemeler: DKP sac, galvaniz sac, paslanmaz çelik (304, 316), alüminyum, bakır, pirinç, corten çelik</li>
<li>Yüzey işlemleri: Kumlama, fosfatlama, elektrostatik toz boya, ıslak boya, galvaniz kaplama, parlatma</li>
<li>Tersine mühendislik: Numune parçadan teknik çizim oluşturma</li>
</ul>

<h3>Kullanım Alanları</h3>
<ul>
<li>Makine ve ekipman yedek parçaları (orijinal tedarik edilemeyen parçalar)</li>
<li>Özel proje bazlı braket, plaka, kol ve bağlantı elemanları</li>
<li>Mimari ve dekoratif özel tasarım metal ürünler</li>
<li>Otomasyon hatları için özel fikstür ve aparatlar</li>
<li>Araç üstü ekipman ve özel donanım parçaları</li>
<li>Medikal ve laboratuvar ekipmanları özel aksesuar ve parçaları</li>
<li>Tarım makineleri için özel adaptör ve bağlantı parçaları</li>
<li>Proje bazlı küçük adetli veya tek seferlik üretimler</li>
</ul>

<h3>Neden Kuzey Şafak Lazer?</h3>
<ul>
<li>Tek parçadan seri üretime kadar her adette üretim esnekliği</li>
<li>Teknik çizimi olmayan parçalar için tersine mühendislik desteği</li>
<li>Kesim, büküm, kaynak ve boyama tek elden; tedarikçi koordinasyonu derdi yok</li>
<li>Üretilebilirlik analizi ve maliyet optimizasyonu danışmanlığı</li>
<li>Geniş malzeme yelpazesi ile her sektörün ihtiyacına uygun çözüm</li>
<li>Ölçü kontrolü ve kalite raporu ile güvenilir teslimat</li>
</ul>

<p>Standart parçaların yetmediği, projenize özel metal parça ihtiyacınız olan her durumda bize ulaşın. Teknik çiziminizi veya numune parçanızı gönderin, projenize özel fiyatlandırma ve teslimat süresi için hemen teklif alın.</p>`
  }
];

export const ADDITIONAL_SERVICE_MAP: Record<string, AdditionalService> = {};
ADDITIONAL_SERVICES.forEach(s => ADDITIONAL_SERVICE_MAP[s.slug] = s);
