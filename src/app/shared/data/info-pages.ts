export interface InfoPage {
  slug: string;
  title: string;
  h1: string;
  metaDesc: string;
  category: 'bilgi' | 'teklif' | 'fason';
  content: string;
  relatedServices: string[];
  faq: { q: string; a: string }[];
}

export const INFO_PAGES: InfoPage[] = [

  // =============================================
  // KATEGORI: BİLGİ — "X nedir?" sayfaları
  // =============================================
  {
    slug: 'lazer-kesim-nedir',
    title: 'Lazer Kesim Nedir? Nasıl Çalışır? | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim Nedir?',
    metaDesc: 'Lazer kesim nedir, nasıl çalışır, hangi malzemelerde kullanılır? Fiber lazer kesim teknolojisi hakkında kapsamlı rehber. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Lazer kesim</strong>, yüksek enerjili ve odaklanmış bir lazer ışını kullanılarak metal, plastik ve çeşitli endüstriyel malzemelerin mikron düzeyinde hassasiyetle kesilmesi işlemidir. 1960'larda Theodore Maiman'ın ilk lazer cihazını geliştirmesinin ardından, 1970'lerde endüstriyel kesim uygulamalarına adapte edilen bu teknoloji, günümüzde CNC kontrollü termal kesim yöntemlerinin en gelişmişi olarak kabul edilmektedir. Özellikle sac metal imalat sektöründe lazer kesim, geleneksel mekanik kesim yöntemlerinin yerini büyük ölçüde almış ve üretim süreçlerinde devrim yaratmıştır.</p>

<h3>Lazer Kesimin Tarihçesi</h3>
<p>Lazer teknolojisinin endüstriyel kesim alanında kullanımı, 1970'lerin başında Boeing ve British Oxygen gibi firmaların öncü çalışmalarıyla başlamıştır. İlk nesil CO2 lazer makineleri yavaş ve sınırlı kapasiteye sahipti. 1990'larda CNC kontrol sistemlerinin entegrasyonu ile hassasiyet ve hız önemli ölçüde arttı. 2010 sonrasında fiber lazer teknolojisinin yaygınlaşması, metal kesim sektöründe yeni bir dönem başlattı. Bugün fiber lazerler, CO2 lazerlere göre 3-5 kat daha hızlı kesim yapabiliyor ve enerji verimliliği %30-40 seviyesine ulaşıyor.</p>

<h3>Lazer Kesim Nasıl Çalışır? (Teknik Prensip)</h3>
<p>Lazer kesim makinesi, bir lazer rezonatöründe (fiber veya CO2) üretilen koherant ışık demetini, odaklama lensi aracılığıyla 0.1mm'den küçük bir noktaya yoğunlaştırır. Bu odak noktasında enerji yoğunluğu 10^6 W/cm²'yi aşarak sıcaklık 20.000°C'ye ulaşır. Yoğunlaşan termal enerji, malzemeyi lokalize bir bölgede eritir, buharlaştırır veya oksitleyerek uzaklaştırır. Eş zamanlı olarak CNC kontrollü kesim kafası, programlanan kontura göre hareket eder. Yardımcı gaz sistemi (oksijen, azot veya basınçlı hava) kesim bölgesindeki erimiş malzemeyi üfleyerek temizler ve pürüzsüz bir kesim yüzeyi oluşturur. Oksijen gazı çelikte ekzotermik reaksiyon yaratarak kesim hızını artırırken, azot gazı oksidasyonsuz parlak kesim sağlar.</p>

<h3>Lazer Kesim Türleri</h3>
<ul>
<li><strong>Fiber Lazer Kesim:</strong> Ytterbium katkılı optik fiber içinde 1.07μm dalga boyunda lazer ışını üretir. Metallerde en yüksek emilim oranı, en düşük bakım maliyeti ve en yüksek enerji verimliliğini (%30-40) sunar. Kuzey Şafak Lazer olarak 2000x6000mm kesim tablalı yüksek güçlü fiber lazer makinemizle hizmet veriyoruz.</li>
<li><strong>CO2 Lazer Kesim:</strong> Karbon dioksit gaz karışımında 10.6μm dalga boyunda lazer üretir. Ahşap, akrilik, tekstil ve kağıt gibi organik malzemelerde hala vazgeçilmezdir. Metal kesimde fiber lazere göre verimliliği düşük olduğundan yerini büyük ölçüde fiber lazere bırakmıştır.</li>
<li><strong>Nd:YAG Lazer:</strong> Neodimyum katkılı kristal çubukta lazer üretir. Hassas ve küçük ölçekli işlerde, özellikle medikal implant, mücevher ve elektronik sektöründe kullanılır. Düşük güç seviyelerinde nokta kaynak ve markalama işlemlerinde de tercih edilir.</li>
</ul>

<h3>Lazer Kesimin Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> Lazer kesim ±0.1mm hassasiyet, minimum çapak oluşumu, 0.1-0.3mm dar kesim ağzı (kerf), düşük ısı etki alanı (HAZ) ve CNC ile tam otomasyon imkanı sunar. Kalıp gerektirmediğinden prototipten seri üretime her aşamada ekonomiktir. Karmaşık geometriler, ince detaylar ve küçük delikler sorunsuzca işlenebilir. Temassız kesim olduğundan malzeme üzerinde mekanik stres oluşturmaz.</p>
<p><strong>Dezavantajları:</strong> Çok kalın malzemelerde (25mm üzeri çelik) plazma veya oksi-yakıt kesime göre daha yavaş ve maliyetli olabilir. Yansıtıcı malzemelerde (bakır, pirinç) özel dikkat gerektirir. İlk yatırım maliyeti yüksektir, ancak düşük işletme maliyeti ile uzun vadede kendini amorti eder.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>Lazer kesim teknolojisi son derece geniş bir sektörel yelpazede kullanılmaktadır. Otomotiv yan sanayinde şasi parçaları, egzoz bileşenleri ve karoseri elemanları; beyaz eşya sektöründe gövde ve panel parçaları; savunma sanayinde zırh plakaları ve hassas mekanik parçalar; inşaat sektöründe dekoratif paneller, korkuluk ve cephe kaplamaları; gıda sanayinde paslanmaz çelik ekipman parçaları; enerji sektöründe rüzgar türbini bileşenleri ve güneş paneli taşıyıcıları lazer kesim ile üretilmektedir. Asansör, havalandırma (HVAC), reklam-tabela, mobilya ve elektronik sektörleri de yoğun lazer kesim kullanan alanlardır.</p>

<h3>Malzeme Uyumluluğu</h3>
<p>Fiber lazer ile kesilebilen başlıca metaller: siyah sac (St37, St52, S235JR, S355JR), paslanmaz çelik (304, 316L, 430), alüminyum (1050, 5754, 6082), galvaniz sac (DX51D), bakır (Cu-ETP), pirinç (CuZn37) ve aşınma çelikleri (Hardox 400, Hardox 450). Kalınlık limitleri lazer gücüne bağlı olarak değişir: çelikte 25mm, paslanmazda 20mm, alüminyumda 12mm, bakır ve pirinçte 6mm'ye kadar kesim mümkündür.</p>

<h3>Kuzey Şafak Lazer'de Lazer Kesim Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde son teknoloji fiber lazer kesim makinemizle hizmet veriyoruz. 2000x6000mm kesim alanı, yüksek lazer gücü ve profesyonel nesting yazılımı ile her projede maksimum verimlilik ve minimum fire sağlıyoruz. Tek parça prototipten binlerce adetlik seri üretime kadar her ölçekte, aynı gün veya ertesi gün teslimat imkanı sunuyoruz. Kesim sonrası CNC büküm, kaynaklı imalat ve yüzey işlemi süreçleriyle projenizi baştan sona tek çatı altında tamamlıyoruz.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Lazer kesim hangi metalleri kesebilir?', a: 'Fiber lazer ile çelik, paslanmaz çelik, alüminyum, galvaniz, bakır, pirinç ve Hardox gibi aşınma çelikleri kesilebilir. Malzeme kalınlık limitleri lazer gücüne göre değişir; çelikte 25mm, paslanmazda 20mm, alüminyumda 12mm kapasiteye sahibiz.' },
      { q: 'Lazer kesim ile plazma kesim arasındaki fark nedir?', a: 'Lazer kesim ±0.1mm hassasiyet ve temiz kenar kalitesi sunarken, plazma kesim 15mm üzeri kalın malzemelerde daha ekonomiktir. İnce ve orta kalınlıklarda lazer kesim hem kalite hem hız açısından tercih edilir.' },
      { q: 'Lazer kesim tehlikeli midir?', a: 'Modern CNC fiber lazer kesim makineleri tamamen kapalı kabinlerde çalışır. Operatör güvenliği için lazer sınıfına uygun koruma sistemleri, duman emme üniteleri ve acil durdurma mekanizmaları bulunur. CE sertifikalı makinelerimizde güvenlik standartları eksiksiz uygulanır.' },
      { q: 'Lazer kesim ile en ince kaç mm malzeme kesilebilir?', a: 'Fiber lazer ile 0.5mm kalınlıktan başlayarak kesim yapabiliyoruz. İnce saclarda ±0.05mm gibi çok yüksek hassasiyet değerleri elde edilir ve çapak oluşumu neredeyse sıfırdır.' },
      { q: 'Lazer kesim dosyası hangi formatta olmalıdır?', a: 'En ideal format 1:1 ölçekli DXF dosyasıdır. Bunun yanı sıra DWG, STEP, IGES, AI ve PDF formatlarını da kabul ediyoruz. Dosyanız yoksa eskiz veya numune parçadan teknik ekibimiz çizim oluşturabilir.' }
    ]
  },

  {
    slug: 'plazma-kesim-nedir',
    title: 'Plazma Kesim Nedir? CNC Plazma Rehberi | Kuzey Şafak Lazer',
    h1: 'Plazma Kesim Nedir?',
    metaDesc: 'Plazma kesim nedir, nasıl çalışır, hangi kalınlıklarda kullanılır? CNC plazma kesim avantajları ve kullanım alanları. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Plazma kesim</strong>, elektrik arkı ile iyonize edilmiş gaz (plazma) kullanılarak iletken metallerin yüksek hızda kesilmesi işlemidir. Maddenin dördüncü hali olan plazma, gaz moleküllerinin elektrik enerjisiyle iyonize edilerek 20.000-30.000°C sıcaklığa ulaşmasıyla oluşur. Bu süper ısıtılmış iyonize gaz akışı, metali lokalize bir bölgede eritir ve yüksek basınçlı gaz jeti erimiş malzemeyi kesim bölgesinden uzaklaştırarak temiz bir kesim oluşturur. Plazma kesim teknolojisi 1960'larda geliştirilmiş olup, özellikle kalın metal sacların ekonomik ve hızlı kesilmesinde endüstri standardı haline gelmiştir.</p>

<h3>Plazma Kesimin Tarihçesi ve Gelişimi</h3>
<p>Plazma kesim, 1950'lerin sonunda TIG kaynak sürecinden türetilmiş bir teknolojidir. İlk plazma kesim torçları, tungsten elektrot ve su soğutmalı nozul kullanıyordu. 1960'larda çift gazlı plazma sistemleri geliştirildi ve kesim kalitesi önemli ölçüde arttı. 1980'lerde CNC kontrol sistemlerinin entegrasyonu ile plazma kesim otomatik hale geldi. 2000'li yıllarda Hi-Definition (yüksek çözünürlüklü) plazma teknolojisi, kesim kalitesini lazer kesime yaklaştırdı. Günümüzde CNC plazma sistemleri, kalın metal kesiminde vazgeçilmez bir yere sahiptir.</p>

<h3>CNC Plazma Kesim Nasıl Çalışır? (Teknik Prensip)</h3>
<p>CNC plazma kesim sisteminde bilgisayar kontrollü bir portal (gantry) yapısı üzerindeki torç taşıyıcı, programlanan geometrilere göre X-Y eksenlerinde otomatik hareket eder. Plazma torcu ile iş parçası arasında yüksek frekanslı kıvılcım (pilot ark) ile elektrik arkı başlatılır. Torca beslenen basınçlı gaz (hava, oksijen, azot veya argon-hidrojen karışımı), bu elektrik arkı tarafından iyonize edilerek plazma haline dönüşür. Dar nozuldan geçirilen plazma jeti, yüksek sıcaklık ve kinetik enerji ile metali eritir ve kesim bölgesinden uzaklaştırır. CNC kontrol ünitesi, kesim hızı, ark akımı, gaz basıncı ve torç yüksekliğini otomatik olarak optimize eder.</p>

<h3>Plazma Kesimin Avantajları</h3>
<ul>
<li><strong>Kalın malzeme kapasitesi:</strong> 50mm ve üzeri kalınlıklarda verimli ve ekonomik kesim yapabilme kabiliyeti, plazma kesimin en belirgin avantajıdır.</li>
<li><strong>Yüksek kesim hızı:</strong> Özellikle 10-30mm kalınlık aralığında lazer kesime yakın veya daha yüksek hızlarda kesim gerçekleştirir.</li>
<li><strong>Düşük yatırım ve işletme maliyeti:</strong> Lazer kesim makinelerine kıyasla daha uygun ilk yatırım bedeli ve sarf malzeme maliyeti sunar.</li>
<li><strong>Geniş malzeme yelpazesi:</strong> Tüm iletken metaller (çelik, paslanmaz, alüminyum, bakır, pirinç) plazma ile kesilebilir.</li>
<li><strong>Pah (bevel) kesim kabiliyeti:</strong> Açılı torç hareketi ile kaynak ağzı açma (bevel kesim) yapılabilir; bu özellik konstrüksiyon işlerinde büyük avantaj sağlar.</li>
</ul>

<h3>Plazma Kesimin Dezavantajları</h3>
<p>Lazer kesime kıyasla daha geniş kerf genişliği (1.5-3mm) ve daha düşük hassasiyet (±0.5-1mm) plazma kesimin temel dezavantajlarıdır. İnce saclarda (3mm altı) ısı etki alanı geniş olduğundan malzeme deformasyonu oluşabilir. Kesim kenarında çapak (dross) meydana gelebilir ve bazı uygulamalarda taşlama gibi ek işlem gerektirebilir. Ayrıca sadece iletken malzemelerde kullanılabilir; plastik, ahşap gibi malzemeler plazma ile kesilemez.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>CNC plazma kesim, kalın metal sacların işlendiği hemen her sektörde yoğun olarak kullanılmaktadır. Çelik konstrüksiyon ve yapısal çelik imalatında taşıyıcı profil, bağlantı plakası ve gusset kesimi; gemi inşa sektöründe tekne gövde sacları; ağır sanayi makine imalatında şasi, gövde ve flanş parçaları; köprü, platform ve merdiven üretiminde taban ve korkuluk plakaları; tank, silo ve basınçlı kap imalatında gövde ve kapak sacları; madencilik ekipmanlarında Hardox kepçe ve kova parçaları plazma kesimin yoğun kullanıldığı alanlardır. İnşaat, enerji, petrokimya ve tarım makineleri sektörleri de plazma kesime büyük talep oluşturmaktadır.</p>

<h3>Malzeme Uyumluluğu ve Kalınlık Kapasitesi</h3>
<p>CNC plazma ile kesilebilen başlıca malzemeler: yapısal karbon çelik (St37, St52, S235JR, S355JR), paslanmaz çelik (304, 316L), alüminyum alaşımları, aşınma çelikleri (Hardox 400, Hardox 450), bakır ve pirinçtir. Kalınlık kapasitesi plazma güç kaynağının amperajına bağlıdır. Standart sistemlerde 6-50mm, yüksek güçlü sistemlerde 80mm ve üzeri kalınlıklarda kesim mümkündür.</p>

<h3>Plazma Kesim Toleransları</h3>
<p>Standart CNC plazma kesimde genel tolerans ±0.5-1mm aralığındadır. Hi-Definition plazma sistemlerinde bu değer ±0.25mm'ye kadar düşebilir. Kerf genişliği kalınlığa ve amperaja bağlı olarak 1.5-3mm arasında değişir. Lazer kesime kıyasla daha geniş toleranslara sahip olsa da, kalın malzemelerde sunduğu maliyet avantajı genellikle belirleyici faktördür.</p>

<h3>Kuzey Şafak Lazer'de CNC Plazma Kesim Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde CNC plazma kesim hizmeti sunuyoruz. 2000x6000mm kesim tablalı makinemiz ile 6mm'den 50mm'ye kadar çelik ve paslanmaz saclarda yüksek kalitede kesim gerçekleştiriyoruz. Aynı tesis bünyesinde fiber lazer kesim makinemiz de bulunduğundan, projenizin her parçası için en uygun kesim yöntemini seçerek toplam maliyeti optimize edebiliyoruz. Kesim sonrası CNC büküm ve kaynaklı imalat hizmetlerimizle projenizi eksiksiz tamamlıyoruz.</p>`,
    relatedServices: ['cnc-plazma'],
    faq: [
      { q: 'Plazma kesim en kalın kaç mm kesebilir?', a: 'CNC plazma kesim ile 50mm ve üzeri kalınlıklarda çelik kesilebilir. Kuzey Şafak Lazer olarak 6mm ile 50mm arasında plazma kesim hizmeti sunuyoruz. Daha kalın malzemeler için özel değerlendirme yapıyoruz.' },
      { q: 'Plazma kesim hangi metallerde kullanılır?', a: 'Plazma ile tüm iletken metaller kesilebilir: yapısal çelik, paslanmaz çelik, alüminyum, bakır, pirinç ve Hardox gibi aşınma çelikleri. Sadece iletken olmayan malzemelerde (plastik, ahşap) kullanılamaz.' },
      { q: 'Plazma kesim mi lazer kesim mi tercih etmeliyim?', a: '10mm altı kalınlıklarda lazer kesim daha hassas ve ekonomiktir. 15mm üzeri kalınlıklarda plazma kesim hız ve maliyet avantajı sağlar. 10-15mm aralığında proje tolerans ve kalite gereksinimlerine göre en uygun yöntem belirlenir.' },
      { q: 'Plazma kesim kenar kalitesi nasıldır?', a: 'CNC plazma kesimde kenar kalitesi malzeme kalınlığına ve kesim parametrelerine bağlıdır. Hi-Definition plazma ile düzgün ve dik kenarlar elde edilir. Gerektiğinde kesim sonrası taşlama hizmeti de sunuyoruz.' },
      { q: 'Plazma ile Hardox kesilebilir mi?', a: 'Evet, Hardox 400 ve Hardox 450 gibi aşınma çelikleri CNC plazma ile başarıyla kesilmektedir. Yüksek sertliğe rağmen plazma kesim, Hardox işlemede yaygın ve verimli bir yöntemdir.' }
    ]
  },

  {
    slug: 'abkant-pres-nedir',
    title: 'Abkant Pres Nedir? CNC Büküm Rehberi | Kuzey Şafak Lazer',
    h1: 'Abkant Pres Nedir?',
    metaDesc: 'Abkant pres nedir, nasıl çalışır, CNC büküm ile farkı nedir? Sac metal büküm işlemi hakkında detaylı rehber. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Abkant pres</strong> (bükme presi), sac metal parçalara istenilen açı, profil ve üç boyutlu şekli vermek için kullanılan CNC kontrollü bir metal şekillendirme makinesidir. Sac metal imalat sürecinin en kritik aşamalarından biri olan büküm işlemi, abkant pres üzerinde gerçekleştirilir. Düz sacın kesilmesinden sonra, üst kalıp (zımba/punch) ve alt kalıp (V kalıp/die) arasına yerleştirilen parça, kontrollü hidrolik veya servo-elektrik basınç uygulanarak istenilen geometriye bükülür. Abkant pres, sac metal imalatın vazgeçilmez makinesidir ve hemen her endüstriyel üründe en az bir büküm operasyonu bulunmaktadır.</p>

<h3>Abkant Presin Tarihçesi</h3>
<p>Sac metal büküm işlemi, sanayileşmenin başlangıcından beri uygulanan temel bir şekillendirme yöntemidir. İlk abkant presler, mekanik tahrikli ve manuel kumanda ile çalışan basit makinelerdi. 1950'lerde hidrolik sistemlerin entegrasyonu ile büküm kapasitesi ve kontrol hassasiyeti arttı. 1970'lerde NC (sayısal kontrol) teknolojisinin uygulanmasıyla otomatik arka dayama sistemleri geliştirildi. 1990'lardan itibaren CNC kontrollü abkant presler endüstrinin standardı haline geldi. Günümüzde servo-elektrik tahrikli abkant presler, enerji verimliliği ve hız açısından yeni bir standart oluştururken, 6 eksenli CNC arka dayama sistemleri karmaşık parçalarda bile ilk seferde doğru büküm yapılmasını mümkün kılmaktadır.</p>

<h3>CNC Abkant Büküm Nasıl Çalışır? (Teknik Prensip)</h3>
<p>CNC abkant preste büküm süreci şu adımlardan oluşur: Öncelikle operatör veya programcı, parçanın büküm açıları, boyutları ve sırasını CNC kontrol paneline girer. Modern sistemlerde bu bilgiler doğrudan CAD/CAM yazılımından aktarılabilir. CNC kontrol ünitesi, arka dayama (back gauge) mesafesini, üst kızak (ram) strokunu ve hızını otomatik olarak ayarlar. Operatör sacı alt kalıp üzerine yerleştirip arka dayamaya dayadıktan sonra pedala basar. Üst kızak, programlanan derinliğe iner ve zımba ile V kalıp arasında sac istenen açıya bükülür. Her büküm adımında arka dayama otomatik olarak bir sonraki pozisyona hareket eder. Açı ölçüm sensörleri (varsa) gerçek zamanlı geri bildirim sağlayarak geri yaylanma (springback) kompansasyonunu otomatik yapar.</p>

<h3>Abkant Preste Büküm Yöntemleri</h3>
<ul>
<li><strong>Hava Büküm (Air Bending):</strong> En yaygın kullanılan yöntemdir. Zımba, sacı V kalıbın dibine kadar bastırmaz; malzeme boşlukta elastik olarak şekillenir. Tek bir V kalıp ile 30° ile 180° arasında farklı açılar elde edilebilir. Düşük tonaj gereksinimi ve kalıp esnekliği sayesinde ekonomik ve çok yönlüdür. Geri yaylanma kompansasyonu CNC tarafından otomatik hesaplanır.</li>
<li><strong>Alt Büküm (Bottom Bending):</strong> Zımba malzemeyi V kalıbın tabanına kadar bastırır ancak tam sıkıştırma yapmaz. Hava büküme göre daha dar açı toleransı ve daha iyi tekrarlanabilirlik sağlar. Hava büküme kıyasla 3-5 kat daha fazla tonaj gerektirir.</li>
<li><strong>Coin Büküm (Coining):</strong> En yüksek hassasiyetli yöntemdir. Malzeme, zımba ve kalıp arasında tamamen sıkıştırılarak plastik deformasyon yapılır. Geri yaylanma neredeyse sıfırdır. Ancak hava büküme göre 5-8 kat fazla tonaj gerektirir ve kalıp aşınması daha hızlıdır.</li>
</ul>

<h3>Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> CNC abkant büküm, ±0.1° açı hassasiyeti ve ±0.05mm boyut hassasiyeti ile endüstriyel standartların çok üzerinde bir kalite sunar. Kalıp değişimi hızlıdır, küçük partilerden seri üretime geçiş kolaydır. Karmaşık profiller (kutu, U, Z, kanal) çok adımlı büküm ile elde edilebilir. CNC programlama sayesinde ilk seferde doğru parça üretimi mümkündür.</p>
<p><strong>Dezavantajları:</strong> Büküm işleminin doğası gereği minimum iç yarıçap sınırlaması vardır (genellikle malzeme kalınlığına eşit). Çok uzun parçalarda sehim (defleksiyon) kompansasyonu gerektirir. Yüksek mukavemetli malzemelerde (Hardox, yay çeliği) büküm zorlaşır ve çatlama riski artabilir. Parça geometrisine göre büküm sırası kritik önem taşır; yanlış sıralama, sonraki bükümlerin yapılmasını engelleyebilir.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>Abkant büküm, sac metal imalatın gerçekleştirildiği neredeyse tüm sektörlerde kritik bir süreçtir. Elektrik panosu ve kumanda dolabı imalatında gövde, kapak ve montaj plakaları; makine imalatında şasi, gövde ve kabin parçaları; havalandırma (HVAC) sektöründe kanal, bağlantı ve geçiş parçaları; asansör sektöründe kabin paneli ve kapı kasası; mobilya sektöründe metal aksesuar ve profiller; otomotiv yan sanayinde braket, tutucu ve karoseri elemanları; aydınlatma sektöründe armatür gövdeleri ve reflektörler abkant büküm ile üretilmektedir.</p>

<h3>Malzeme Uyumluluğu</h3>
<p>CNC abkant preste bükülebilen başlıca malzemeler: karbon çelik (St37, St52), paslanmaz çelik (304, 316L, 430), alüminyum (1050, 5754, 6082), galvaniz sac (DX51D, DX52D), bakır, pirinç ve DKP sac (soğuk haddelenmiş) malzemelerdir. Her malzemenin akma dayanımı ve geri yaylanma karakteristiği farklıdır; CNC kontrol sistemi bu değerleri otomatik olarak hesaba katarak doğru büküm açısını elde eder.</p>

<h3>Kuzey Şafak Lazer'de CNC Büküm Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde 220 ton kapasiteli, 3000mm büküm boyuna sahip CNC abkant presimizle hizmet veriyoruz. 0.5mm'den 12mm kalınlığa kadar çelik, paslanmaz çelik, alüminyum ve galvaniz saclarda büküm işlemi gerçekleştiriyoruz. CNC kontrol sayesinde ±0.1° açı hassasiyeti ve ±0.05mm boyut hassasiyeti sağlıyoruz. Aynı tesis içindeki fiber lazer kesim makinemizle entegre çalışarak, kesim ve büküm süreçlerini koordineli bir şekilde yürütüyor ve projenizi en kısa sürede teslim ediyoruz.</p>`,
    relatedServices: ['cnc-bukum'],
    faq: [
      { q: 'Abkant pres ile rulo büküm arasındaki fark nedir?', a: 'Abkant pres düz saclara açısal büküm yapar (V, U, Z, kutu profilleri). Rulo büküm (silindir büküm) ise sacı silindirik veya konik formlara dönüştürür. Farklı geometri ihtiyaçlarına hizmet eden iki ayrı şekillendirme yöntemidir.' },
      { q: 'CNC abkant büküm hassasiyeti ne kadardır?', a: 'CNC abkant presler ile ±0.1° açı hassasiyeti ve ±0.05mm boyutsal hassasiyet elde edilir. Açı ölçüm sensörlü sistemlerde bu değerler daha da iyileştirilebilir. Seri üretimde her parçada tutarlı sonuç garanti edilir.' },
      { q: 'Hangi malzemeler abkant preste bükülebilir?', a: 'Çelik, paslanmaz çelik, alüminyum, galvaniz, bakır, pirinç ve DKP saclar abkant preste bükülebilir. Malzemenin akma dayanımına ve kalınlığına göre büküm parametreleri (tonaj, V açıklığı, hız) otomatik ayarlanır.' },
      { q: 'Minimum büküm yarıçapı ne kadardır?', a: 'Genel kural olarak minimum iç büküm yarıçapı malzeme kalınlığına eşittir. Örneğin 2mm çelikte minimum R2, 3mm alüminyumda minimum R1.5 uygulanabilir. Bu değerin altındaki yarıçaplarda çatlama riski artar.' },
      { q: 'Büküm sonrası parça boyutu neden hedeften sapabilir?', a: 'Geri yaylanma (springback), yanlış K-faktörü veya hatalı açınım hesabı boyutsal sapmalara neden olabilir. CNC abkant presimizde otomatik springback kompansasyonu ve doğru K-faktörü hesaplaması ile bu sapmalar minimuma indirilir.' }
    ]
  },

  {
    slug: 'hardox-nedir',
    title: 'Hardox Nedir? Aşınma Çeliği Rehberi | Kuzey Şafak Lazer',
    h1: 'Hardox Nedir?',
    metaDesc: 'Hardox nedir, hangi sektörlerde kullanılır? Hardox 400, 450, 500 farkları ve lazer kesim ile işlenmesi. Kuzey Şafak Lazer İstanbul İkitelli.',
    category: 'bilgi',
    content: `<p><strong>Hardox</strong>, İsveç merkezli SSAB firması tarafından üretilen, dünya genelinde aşınmaya dayanıklı çelik kategorisinin en tanınmış markasıdır. Yüksek Brinell sertlik değeri (HBW) ile karakterize edilen Hardox, standart yapısal çeliğe göre 4-5 kat daha uzun kullanım ömrü sunar. Marka adı "Hard" (sert) ve "Ox" (öküz gücü) kelimelerinin birleşiminden gelmektedir. SSAB, Hardox'u ilk kez 1970'lerde piyasaya sürmüş ve o günden bu yana sürekli geliştirerek farklı sertlik ve tokluk kombinasyonlarına sahip geniş bir ürün yelpazesi oluşturmuştur.</p>

<h3>Hardox Nedir? Teknik Tanım</h3>
<p>Hardox, özel alaşım bileşimi ve kontrollü ısıl işlem (su verme + temperleme) ile üretilen düşük alaşımlı, yüksek sertlikteki bir çelik kalitesidir. Kimyasal bileşiminde düşük karbon oranı (%0.15-0.30), bor, krom, nikel ve molibden gibi alaşım elementleri bulunur. Bu özel bileşim sayesinde Hardox sadece yüksek sertliğe değil, aynı zamanda iyi tokluk, kaynak edilebilirlik ve bükülebilirlik özelliklerine de sahiptir. Bu da onu sadece bir aşınma astarı değil, aynı zamanda yapısal bir eleman olarak kullanılabilir kılar.</p>

<h3>Hardox Çeşitleri ve Özellikleri</h3>
<ul>
<li><strong>Hardox 400:</strong> 370-430 HBW sertlik aralığı. Genel amaçlı aşınma plakası olarak en yaygın kullanılan kalitedir. Kepçe gövdesi, damper kasa, konveyör astarı, silobas iç yüzeyi ve beton mikseri gibi orta aşınma koşullarında tercih edilir. İyi kaynak edilebilirlik ve bükülebilirlik sunar.</li>
<li><strong>Hardox 450:</strong> 425-475 HBW sertlik aralığı. Hardox 400'e göre daha yüksek aşınma direnci sunarken, bükülebilirlik ve kaynak edilebilirlik özelliklerini büyük ölçüde korur. İnşaat makineleri, madencilik ekipmanları ve geri dönüşüm tesisi bileşenlerinde yoğun olarak kullanılır.</li>
<li><strong>Hardox 500:</strong> 470-540 HBW sertlik aralığı. Ağır ve aşırı aşınma koşulları için tasarlanmıştır. Kırıcı astarları, kova dişleri, maden taşıma kanalları ve çimento sanayii ekipmanlarında tercih edilir. Bükülebilirliği Hardox 400'e göre sınırlıdır.</li>
<li><strong>Hardox 550 ve 600:</strong> En yüksek sertlik değerlerine sahip kalitelerdir. Aşırı abrazif aşınma koşullarında kullanılır. İşlenebilirlikleri sınırlıdır ve genellikle astar plakası olarak tercih edilir.</li>
<li><strong>Hardox HiTuf:</strong> Nispeten düşük sertlikte (350 HBW) ancak çok yüksek toklukta bir kalitedir. Darbe ve aşınmanın birlikte yoğun olduğu uygulamalarda, özellikle kaya kamyonu kasaları ve kırıcı gövdelerinde idealdir.</li>
</ul>

<h3>Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> Hardox'un en belirgin avantajı, standart çeliğe göre 3-5 kat daha uzun kullanım ömrü sağlamasıdır. Bu sayede ekipman bakım süreleri uzar, duruş süresi azalır ve toplam sahip olma maliyeti (TCO) düşer. Aynı aşınma direncini daha ince kalınlıkla sağladığı için ekipman hafifler ve taşıma kapasitesi artar. İyi kaynak edilebilirlik ve bükülebilirlik özelliği, imalat süreçlerinde esneklik sağlar.</p>
<p><strong>Dezavantajları:</strong> Standart yapısal çeliğe göre daha yüksek ham madde maliyeti Hardox'un temel dezavantajıdır. Yüksek sertlik nedeniyle mekanik işleme (delme, tornalama) zorlaşır ve özel takım gerektirebilir. Çok yüksek sertlikteki kalitelerde (500+) bükülebilirlik sınırlıdır ve kaynak öncesi ön ısıtma gerekebilir.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>Hardox çelik, aşınmanın yoğun olduğu hemen her endüstriyel alanda kullanılmaktadır. Madencilik sektöründe ekskavatör kepçesi, kırıcı astarı, konveyör tava ve bant sistemi bileşenleri; inşaat sektöründe beko-loder kepçesi, damper kasa ve beton mikseri; geri dönüşüm tesislerinde parçalama makinesi gövde ve bıçakları, konveyör elemanları; çimento sanayinde değirmen astarları, bunker ve silo iç yüzeyleri; tarım makinelerinde pulluk, toprak işleme bıçağı ve hasat makinesi parçaları; taşımacılık sektöründe silobas, tanker ve damper kasa astarları Hardox'un yoğun kullanıldığı uygulama alanlarıdır.</p>

<h3>Malzeme Uyumluluğu ve İşlenebilirlik</h3>
<p>Hardox çelik, tüm termal kesim yöntemleriyle işlenebilir. Fiber lazer kesim ince ve orta kalınlıklarda (3-20mm) en yüksek kenar kalitesini sunar. CNC plazma kesim, 20mm üzeri kalınlıklarda ekonomik alternatiftir. Oksi-yakıt kesim ise çok kalın plakalarda (50mm+) kullanılır. Hardox kaynak edilebilirliği iyidir; ancak kalınlık ve sertlik değerine göre ön ısıtma (100-200°C) ve düşük hidrojenli dolgu malzemesi kullanımı önerilir. Abkant preste büküm için Hardox 400 ve 450 uygun olup, minimum büküm yarıçapı standart çeliğe göre daha geniş tutulmalıdır.</p>

<h3>Kuzey Şafak Lazer'de Hardox İşleme Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde Hardox 400 ve Hardox 450 saclarını fiber lazer ve CNC plazma ile yüksek hassasiyette kesiyoruz. Lazer kesim, Hardox'un ısı etki alanını minimize ederek malzemenin sertlik ve mekanik özelliklerini korur. Kesim sonrası CNC büküm ve kaynaklı imalat hizmetlerimizle Hardox parçalarınızı komple imalat halinde teslim edebiliyoruz. Madencilik, inşaat, geri dönüşüm ve tarım makineleri sektörlerindeki müşterilerimize düzenli Hardox işleme hizmeti sağlıyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma'],
    faq: [
      { q: 'Hardox ile normal çelik arasındaki fark nedir?', a: 'Standard St37 çelik yaklaşık 120 HBW sertliğe sahipken, Hardox 400 ortalama 400 HBW sertliğe sahiptir. Bu, Hardox\'un aşınmaya karşı 3-4 kat daha dayanıklı olması ve ekipman ömrünün çok daha uzun olması anlamına gelir.' },
      { q: 'Hardox lazer ile kesilebilir mi?', a: 'Evet, Hardox fiber lazer ile yüksek kalitede kesilebilir. Lazer kesim, dar ısı etki alanı sayesinde Hardox\'un sertlik ve mekanik özelliklerini koruyarak en uygun kesim yöntemidir. Plazma ve oksi-yakıt kesime göre çok daha düzgün kenar kalitesi sağlar.' },
      { q: 'Hardox hangi sektörlerde kullanılır?', a: 'Madencilik, inşaat, geri dönüşüm, çimento, tarım makineleri, taşımacılık ve enerji sektörlerinde yoğun aşınmaya maruz kalan ekipman parçalarında yaygın olarak kullanılır.' },
      { q: 'Hardox 400 ile Hardox 500 arasındaki fark nedir?', a: 'Hardox 400 (370-430 HBW) genel amaçlı aşınma plakası olup iyi bükülebilirlik ve kaynak edilebilirlik sunar. Hardox 500 (470-540 HBW) çok daha yüksek aşınma direnci sağlar ancak bükülebilirliği ve kaynak edilebilirliği daha sınırlıdır.' },
      { q: 'Hardox yerine başka aşınma çeliği kullanılabilir mi?', a: 'Piyasada Hardox dışında Raex, Abrazo, Quard gibi alternatif aşınma çelikleri mevcuttur. Ancak Hardox, global düzeyde en geniş teknik destek ağına ve en tutarlı kaliteye sahip marka olarak öne çıkmaktadır.' }
    ]
  },

  {
    slug: 'dkp-sac-nedir',
    title: 'DKP Sac Nedir? Soğuk Haddelenmiş Çelik | Kuzey Şafak Lazer',
    h1: 'DKP Sac Nedir?',
    metaDesc: 'DKP sac nedir, HRP sac ile farkı nedir? Soğuk haddelenmiş çelik sac özellikleri, kullanım alanları ve lazer kesim bilgileri.',
    category: 'bilgi',
    content: `<p><strong>DKP sac</strong> (Derin Kesme Profil / Soğuk Haddelenmiş Sac), sıcak haddelenmiş çelik sacın (HRP) asit banyosunda tufal tabakasından arındırıldıktan sonra, oda sıcaklığında yüksek basınçlı hadde silindirlerinden geçirilerek inceltilmesi ve yüzey kalitesinin iyileştirilmesi ile elde edilen çelik sac türüdür. Uluslararası terminolojide CRC (Cold Rolled Coil) veya CR (Cold Rolled) olarak anılır. DKP sac, sac metal imalat sektörünün en temel ham maddelerinden biridir ve özellikle yüzey kalitesi, boyutsal hassasiyet ve şekillendirilebilirliğin kritik olduğu uygulamalarda tercih edilir.</p>

<h3>DKP Sac Üretim Süreci</h3>
<p>DKP sac üretimi, sıcak haddelenmiş sacın (HRP) işlenmesiyle başlar. İlk aşamada HRP sac, dekapaj hattında seyreltik hidroklorik asit veya sülfürik asit banyosundan geçirilerek yüzeydeki demir oksit (tufal) tabakası temizlenir. Temizlenen sac, soğuk haddeleme hattında oda sıcaklığında birbirini takip eden hadde silindirlerinden geçirilerek istenen kalınlığa indirilir. Bu işlem sırasında malzeme %40-90 oranında inceltilebilir. Soğuk haddeleme, malzemenin mekanik özelliklerini değiştirir (soğuk sertleşme); bu nedenle son aşamada tavlama fırınında ısıl işlem uygulanarak malzemenin sünekliği ve şekillendirilebilirliği geri kazandırılır. Temper haddeleme (skin pass) ile son yüzey kalitesi ve mekanik özellikler ayarlanır.</p>

<h3>DKP Sac Teknik Özellikleri</h3>
<ul>
<li><strong>Yüzey Kalitesi:</strong> Parlak, düzgün ve pürüzsüz yüzey. Boyama, toz boya, galvaniz kaplama ve diğer yüzey işlemleri için ideal altyapı sağlar. HRP saca göre çok üstün yüzey estetiği sunar.</li>
<li><strong>Kalınlık Toleransı:</strong> Soğuk haddeleme sayesinde çok dar kalınlık toleransları (±0.02-0.04mm) elde edilir. Bu, hassas imalat projelerinde kritik bir avantajdır.</li>
<li><strong>Şekillendirilebilirlik:</strong> Derin çekme (deep drawing), büküm, damgalama ve haddeleme gibi soğuk şekillendirme işlemlerinde mükemmel performans gösterir. DC01-DC06 kalitelerinde artan derin çekilebilirlik sunar.</li>
<li><strong>Kalınlık Aralığı:</strong> Standart olarak 0.3mm ile 3mm arasında üretilir. En yaygın kullanılan kalınlıklar 0.5mm, 0.8mm, 1mm, 1.2mm, 1.5mm ve 2mm'dir.</li>
<li><strong>Standartlar:</strong> EN 10130 (DC01, DC03, DC04, DC05, DC06) standardında üretilir. DC01 genel kullanım, DC04-DC06 derin çekme uygulamaları içindir.</li>
</ul>

<h3>DKP ile HRP Sac Farkı</h3>
<p>HRP (sıcak haddelenmiş) sac, 900-1200°C sıcaklıkta haddelenir ve mat, pürüzlü ve tufal kaplamalı bir yüzeye sahiptir. Kalınlık toleransı geniştir (±0.1-0.3mm). DKP sac ise oda sıcaklığında haddelenerek parlak, düzgün yüzeye ve çok dar kalınlık toleransına (±0.02mm) sahiptir. DKP sac daha ince kalınlıklarda üretilebilir (0.3mm'ye kadar), daha iyi yüzey kalitesi sunar ve şekillendirme esnasında daha öngörülebilir davranır. Ancak HRP sac, 3mm üzeri kalınlıklarda daha ekonomiktir ve yapısal uygulamalarda yeterli performansı sağlar.</p>

<h3>Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> Üstün yüzey kalitesi sayesinde boyama ve kaplama sonrası estetik görünüm elde edilir. Dar kalınlık toleransları hassas parça üretimini kolaylaştırır. Mükemmel şekillendirilebilirlik karmaşık büküm ve derin çekme operasyonlarında avantaj sağlar. Tutarlı mekanik özellikler seri üretimde güvenilir sonuçlar verir.</p>
<p><strong>Dezavantajları:</strong> HRP saca göre birim fiyatı daha yüksektir. Korozyona karşı koruma sağlamaz; mutlaka boyama, galvaniz kaplama veya başka bir yüzey işlemi gerektirir. Kalınlık aralığı sınırlıdır (genellikle 3mm'ye kadar); daha kalın ihtiyaçlarda HRP sac kullanılmalıdır.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>DKP saclar, yüzey kalitesi ve hassas boyutların önemli olduğu geniş bir sektörel yelpazede kullanılmaktadır. Otomotiv sanayinde karoseri dış panel ve iç parçaları; beyaz eşya sektöründe bulaşık makinesi, çamaşır makinesi ve buzdolabı gövdeleri; elektrik-elektronik sektöründe pano, kumanda dolabı ve cihaz kasaları; mobilya sektöründe metal aksesuarlar ve çekmece rayları; aydınlatma sektöründe armatür gövde ve reflektörleri; reklam ve tabela sektöründe dekoratif metal paneller DKP sacın yoğun kullanıldığı alanlardır.</p>

<h3>Malzeme Uyumluluğu</h3>
<p>DKP sac, tüm standart sac metal işleme yöntemleriyle uyumludur. Fiber lazer kesim ile mikron hassasiyetinde kesilebilir, CNC abkant preste kolayca bükülebilir, MIG ve TIG kaynak yöntemleriyle birleştirilebilir. Derin çekme kalıplarında sorunsuz şekillendirilebilir. Toz boya, ıslak boya, elektrostatik boyama, galvaniz kaplama, nikelaj ve kromlama gibi tüm yüzey işlemlerine uygundur.</p>

<h3>Kuzey Şafak Lazer'de DKP Sac İşleme Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde DKP sacları fiber lazer ile mikron düzeyinde hassasiyetle kesiyoruz. DKP'nin düzgün yüzey kalitesi, lazer kesim sonrası ek yüzey işlemi gerektirmeden doğrudan boyama veya kaplama işlemine geçilmesine olanak tanır. CNC abkant presimizle DKP sacların hassas bükümünü, kaynaklı imalat hizmetimizle montaj ve birleştirme işlemlerini aynı tesis içinde gerçekleştiriyoruz. Projenizi baştan sona tek çatı altında tamamlıyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'DKP sac ile galvaniz sac arasındaki fark nedir?', a: 'DKP sac kaplanmamış soğuk haddelenmiş çeliktir, korozyona karşı korunmasızdır ve mutlaka boyama veya kaplama gerektirir. Galvaniz sac ise DKP veya HRP sacın çinko ile kaplanmış halidir ve boyasız bile korozyon direnci sunar.' },
      { q: 'DKP sac en kalın kaç mm olur?', a: 'DKP sac standart olarak 0.3mm ile 3mm aralığında üretilir. Daha kalın ihtiyaçlarda HRP (sıcak haddelenmiş) sac kullanılır. En yaygın DKP kalınlıkları 0.5mm, 0.8mm, 1mm, 1.5mm ve 2mm\'dir.' },
      { q: 'DKP sac lazer kesim için uygun mudur?', a: 'DKP sac, düzgün yüzeyi ve dar kalınlık toleransları sayesinde lazer kesim için ideal malzemelerden biridir. Fiber lazer ile çapaksız, oksidasyonsuz kesim yapılabilir ve kesim sonrası yüzey kalitesi korunur.' },
      { q: 'DC01 ile DC04 arasındaki fark nedir?', a: 'DC01 genel amaçlı DKP sac olup standart büküm ve basit şekillendirme işlemleri için uygundur. DC04 derin çekme kalitesindedir ve karmaşık 3D formların elde edildiği uygulamalarda tercih edilir. Uzama değeri ve Lankford katsayısı DC04\'te daha yüksektir.' },
      { q: 'DKP sac boyama öncesi ne yapılmalıdır?', a: 'DKP sac yüzeyi boyama öncesi yağ ve kirden arındırılmalıdır. Fosfatlama veya kumartma gibi yüzey hazırlık işlemleri boya tutunmasını ve korozyon direncini artırır. Toz boya uygulamalarında fosfatlama özellikle önerilir.' }
    ]
  },

  {
    slug: 'galvaniz-sac-nedir',
    title: 'Galvaniz Sac Nedir? Özellikleri ve Kullanım Alanları | Kuzey Şafak Lazer',
    h1: 'Galvaniz Sac Nedir?',
    metaDesc: 'Galvaniz sac nedir, çeşitleri nelerdir, nerelerde kullanılır? Sıcak daldırma ve elektrolitik galvaniz farkları. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Galvaniz sac</strong>, çelik sacın korozyona (paslanmaya) karşı korunması amacıyla çinko (Zn) metalinin ince bir tabaka halinde kaplanması sonucu elde edilen, endüstriyel imalatın en yaygın kullanılan malzemelerinden biridir. Galvanizleme işlemi, 1742 yılında Fransız kimyager Paul Jacques Malouin tarafından keşfedilmiş ve 1836'da Sorel tarafından patentlenmiştir. "Galvaniz" ismi, İtalyan fizikçi Luigi Galvani'den gelmektedir. Günümüzde dünya çelik üretiminin yaklaşık %6'sı galvaniz kaplanmış olarak tüketilmektedir. Çinko kaplamanın çelik yüzeyinde oluşturduğu fiziksel bariyer ve elektrokimyasal (katodik) koruma mekanizması, sacın kullanım ömrünü 5-10 kat artırır.</p>

<h3>Galvaniz Kaplama Yöntemleri ve Üretim Süreci</h3>
<ul>
<li><strong>Sıcak Daldırma Galvaniz (HDG - Hot Dip Galvanized):</strong> Çelik sac, 450°C sıcaklıktaki erimiş çinko banyosuna daldırılır. Çelik ve çinko arasında metalürjik bağ oluşur ve kalın, dayanıklı bir kaplama meydana gelir (genellikle Z100-Z275, yani 100-275 g/m²). Dış mekan, ağır korozyon koşulları ve yapısal uygulamalarda tercih edilir. En yaygın galvaniz türüdür.</li>
<li><strong>Elektrolitik Galvaniz (EG - Electrogalvanized):</strong> Çinko kaplaması, elektroliz yöntemiyle oda sıcaklığına yakın koşullarda uygulanır. Daha ince (Z20-Z50), düzgün ve estetik bir yüzey sağlar. İç mekan uygulamalarında, boyama gerektiren otomotiv panellerinde ve hassas yüzey kalitesi istenen parçalarda tercih edilir.</li>
<li><strong>Galvanneal (GA):</strong> Sıcak daldırma galvaniz sonrası ek bir ısıl işlem uygulanarak çinko-demir alaşım katmanı oluşturulur. Boya tutunması sıcak daldırma galvanize göre çok daha iyidir. Otomotiv sanayinde yaygın kullanılır.</li>
</ul>

<h3>Galvaniz Sac Teknik Özellikleri</h3>
<p>Galvaniz saclar EN 10346 standardına göre DX51D, DX52D, DX53D ve DX56D gibi çelik kalitelerinde üretilir. DX51D genel amaçlı, DX53D ve DX56D derin çekme uygulamaları içindir. Kaplama kalınlığı Z100 (her iki yüzde toplam 100 g/m²) ile Z275 (toplam 275 g/m²) arasında değişir ve kaplama miktarı arttıkça korozyon direnci doğrusal olarak yükselir. Standart sac kalınlığı 0.3mm ile 3mm arasındadır. Çekme dayanımı çelik kalitesine göre 270-500 MPa aralığında değişir. Yüzey kaplama türüne göre normal spangle (çiçekli), minimum spangle (mat) veya skin-pass (düzgün) olarak sınıflandırılır.</p>

<h3>Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> Galvaniz sacın en büyük avantajı, korozyon direncidir. Çinko kaplaması fiziksel bariyer görevi görmesinin yanı sıra, kaplama hasar görse bile çinkonun katodik koruma mekanizmasıyla çeliğin paslanmasını yavaşlatır. Dış mekan kullanımında boyasız bile 15-25 yıl ömür sağlayabilir (ortam koşullarına bağlı). DKP saca göre ek koruma işlemi gerektirmez. İyi bükülebilirlik ve kaynak edilebilirlik sunar.</p>
<p><strong>Dezavantajları:</strong> DKP saca göre birim fiyatı daha yüksektir. Kaynak sırasında çinko buharı açığa çıkar, bu durum gözenekli kaynak dikişine neden olabilir ve iyi havalandırma gerektirir. Kalın kaplama türlerinde (Z275) yüzey pürüzlülüğü artabilir ve boyama öncesi uygun yüzey hazırlığı önem kazanır. Sıcak daldırma galvaniz yüzeyinde "spangle" (çinko kristalleri) görülebilir; bu durum bazı estetik uygulamalarda istenmeyen bir görünüm oluşturabilir.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>Galvaniz sac, korozyon direncinin önemli olduğu geniş bir sektörel yelpazede kullanılmaktadır. Havalandırma (HVAC) sektöründe kanal, menfez ve bağlantı parçaları; inşaat sektöründe çatı kaplama, trapez sac, yağmur oluğu ve alçıpan profilleri; elektrik sektöründe pano, kumanda dolabı ve kablo kanalları; otomotiv sanayinde şasi ve karoseri bileşenleri; tarım makinelerinde gövde ve koruma parçaları; beyaz eşya sektöründe arka panel ve iç yapısal elemanlar; genel sac metal imalatta dış mekan kullanımına uygun her türlü parça galvaniz sactan üretilmektedir.</p>

<h3>Malzeme Uyumluluğu ve İşlenebilirlik</h3>
<p>Galvaniz sac, tüm standart sac metal işleme yöntemleriyle uyumludur. Fiber lazer kesim ile çinko kaplama minimum hasar görecek şekilde hassas kesim yapılabilir. CNC abkant preste büküm işleminde çinko kaplamanın çatlaması minimum düzeydedir (doğru kalıp seçimi ile). MIG/MAG ve TIG kaynak yöntemleriyle birleştirilebilir; ancak çinko buharı nedeniyle özel kaynak parametreleri ve iyi havalandırma gereklidir. Punta kaynak, perçinleme ve vidalı birleştirme yöntemleri de uygulanabilir.</p>

<h3>Kuzey Şafak Lazer'de Galvaniz Sac İşleme</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde galvaniz sacları fiber lazer ile çapaksız ve oksidasyonsuz kesiyoruz. Azot gazı ile yapılan kesimlerde kenar bölgesinde çinko kaplamanın minimum zarar görmesi sağlanır ve kesim kenarı parlak kalır. CNC abkant presimizle galvaniz sacların hassas bükümünü, kaynaklı imalat hizmetimizle montaj ve birleştirme işlemlerini aynı tesis içinde gerçekleştiriyoruz. Havalandırma, elektrik panosu, çatı aksesuarı ve genel sac metal imalat projelerinizde galvaniz sac işleme çözümleri sunuyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'Galvaniz sac paslanır mı?', a: 'Galvaniz sacın çinko kaplaması bozulmadığı sürece çelik yüzey paslanmaz. Kesim, kaynak veya mekanik hasar görmüş bölgelerde bile çinkonun katodik koruma mekanizması paslanmayı önemli ölçüde yavaşlatır. Kaplama kalınlığına ve ortam koşullarına bağlı olarak 15-25 yıl koruma sağlayabilir.' },
      { q: 'Galvaniz sac lazer ile kesilince kaplama bozulur mu?', a: 'Lazer kesim çok dar bir ısı etki alanı (0.1-0.3mm) oluşturur. Kesim kenarının hemen yanındaki dar bölgede çinko kaplama kısmen etkilenebilir ancak çinkonun katodik koruma etkisi bu bölgeyi de korur. Azot gazı ile yapılan kesimlerde kaplama hasarı minimuma iner.' },
      { q: 'Galvaniz sac kaynağı yapılabilir mi?', a: 'Evet, galvaniz sac MIG/MAG ve TIG kaynak yöntemleriyle birleştirilebilir. Ancak kaynak sırasında çinko buharı açığa çıkar ve gözenekli dikiş oluşma riski vardır. Uygun kaynak parametreleri, düşük hız ve iyi havalandırma ile kaliteli kaynak yapılabilir.' },
      { q: 'DX51D ile DX53D arasındaki fark nedir?', a: 'DX51D genel amaçlı galvaniz sac olup standart büküm ve basit şekillendirme işlemleri için uygundur. DX53D derin çekme kalitesindedir ve daha karmaşık formlama operasyonlarında tercih edilir. Akma dayanımı DX53D\'de daha düşük, uzama değeri daha yüksektir.' },
      { q: 'Z100 ile Z275 galvaniz arasındaki fark nedir?', a: 'Z100 her iki yüzde toplam 100 g/m² çinko kaplama anlamına gelir (yüzey başına yaklaşık 7μm). Z275 ise toplam 275 g/m² kaplama sunar (yüzey başına yaklaşık 20μm). Kaplama kalınlığı arttıkça korozyon direnci artar ancak maliyet de yükselir. İç mekan için Z100, dış mekan ve ağır korozyon ortamı için Z275 tercih edilir.' }
    ]
  },

  {
    slug: 'st37-celik-nedir',
    title: 'St37 Çelik Nedir? Özellikleri ve Kullanımı | Kuzey Şafak Lazer',
    h1: 'St37 Çelik Nedir?',
    metaDesc: 'St37 çelik nedir, S235JR ile farkı nedir, nerelerde kullanılır? St37 çelik sac özellikleri ve lazer kesim bilgileri. Kuzey Şafak Lazer.',
    category: 'bilgi',
    content: `<p><strong>St37</strong> (DIN 17100 standardı) veya güncel Avrupa standardındaki karşılığıyla <strong>S235JR</strong> (EN 10025-2), dünya genelinde en yaygın kullanılan genel amaçlı yapısal karbon çeliğidir. Endüstriyel imalatın adeta temel yapı taşı olan bu çelik kalitesi, ekonomik fiyatı, kolay işlenebilirliği ve mükemmel kaynak edilebilirliği sayesinde sac metal, profil, boru ve yapısal çelik uygulamalarının vazgeçilmez malzemesidir. "St" harfleri Almanca "Stahl" (çelik) kelimesinin kısaltmasıdır ve "37" rakamı minimum çekme dayanımını (370 N/mm²) ifade eder.</p>

<h3>St37 ve S235JR Standart İlişkisi</h3>
<p>St37 tanımı, 1980 öncesi yürürlükte olan eski DIN 17100 standardına aittir. Avrupa Birliği'nin standart harmonizasyonu kapsamında EN 10025-2 standardı ile güncellenmiş ve S235JR olarak yeniden adlandırılmıştır. Her iki tanım da pratikte aynı malzemeyi ifade eder. Yeni isimlendirme sisteminde "S" yapısal (Structural) çeliği, "235" minimum akma dayanımını (235 MPa, 16mm altı kalınlıklarda) ve "JR" darbe testi koşulunu (oda sıcaklığında, 20°C'de minimum 27 Joule Charpy darbe enerjisi) belirtir. ASTM standardındaki yaklaşık karşılığı A36'dır.</p>

<h3>St37 Çelik Mekanik ve Kimyasal Özellikleri</h3>
<ul>
<li><strong>Çekme Dayanımı:</strong> 360-510 N/mm² (MPa)</li>
<li><strong>Akma Dayanımı:</strong> Min. 235 N/mm² (16mm altı kalınlıklarda), min. 225 N/mm² (16-40mm), min. 215 N/mm² (40-63mm)</li>
<li><strong>Uzama (A5):</strong> Min. %26 (uzunlamasına, 3mm üzeri kalınlık)</li>
<li><strong>Karbon İçeriği:</strong> Maks. %0.17 (ladle analizi)</li>
<li><strong>Manganez İçeriği:</strong> Maks. %1.40</li>
<li><strong>Fosfor İçeriği:</strong> Maks. %0.045</li>
<li><strong>Kükürt İçeriği:</strong> Maks. %0.045</li>
<li><strong>Yoğunluk:</strong> 7.85 g/cm³</li>
<li><strong>Karbon Eşdeğeri (CEV):</strong> Maks. 0.35 (mükemmel kaynak edilebilirlik)</li>
</ul>

<h3>Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> St37 çeliğin en önemli avantajı, ekonomik fiyatı ile geniş kullanım alanı sunmasıdır. Düşük karbon içeriği sayesinde mükemmel kaynak edilebilirlik sunar; ön ısıtma gerektirmez. Tüm termal kesim yöntemleriyle (lazer, plazma, oksi-yakıt) sorunsuz kesilir. CNC abkant preste kolayca bükülebilir. Sıcak ve soğuk şekillendirme işlemlerine uygundur. Global olarak en kolay temin edilebilen çelik kalitesidir ve geniş bir kalınlık aralığında (0.5mm-200mm) bulunur.</p>
<p><strong>Dezavantajları:</strong> Korozyona karşı doğal direnci yoktur; dış mekan kullanımında mutlaka boyama, galvaniz kaplama veya başka koruyucu işlem gerektirir. Yüksek mukavemet gerektiren yapısal uygulamalarda yetersiz kalabilir (bu durumda St52/S355JR tercih edilir). Yüksek sıcaklık uygulamalarında (350°C üzeri) mekanik özellikleri önemli ölçüde düşer.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>St37 çelik, sanayi üretiminin hemen her alanında kullanılmaktadır. Çelik konstrüksiyon ve yapısal çelik imalatında kolon, kiriş ve bağlantı plakası; makine imalatında şasi, gövde, yatak ve taşıyıcı eleman; genel sac metal işlerinde kutu, kabin, kapak ve panel imalatı; boru ve profil üretiminde dikişli boru, kutu profil ve özel profil; tarım makinelerinde şasi, karter ve koruma sacları; depo ve raf sistemlerinde taşıyıcı kol, bağlantı elemanı ve taban plakası; platform, merdiven ve korkuluk imalatında ana yapısal malzeme olarak St37 çelik tercih edilmektedir. Otomotiv yan sanayi, mobilya, aydınlatma ve enerji sektörleri de yoğun St37 kullanıcılarıdır.</p>

<h3>Malzeme Uyumluluğu ve İşlenebilirlik</h3>
<p>St37 çelik, sac metal imalatında kullanılan tüm işleme yöntemleriyle tam uyumludur. Fiber lazer ile 0.5-25mm, CNC plazma ile 6-50mm kalınlık aralığında yüksek kalitede kesilebilir. CNC abkant preste dar açılardan geniş açılara kadar sorunsuz bükülebilir. MIG/MAG, TIG ve elektrot kaynak yöntemlerinin tamamıyla ön ısıtma gerektirmeden birleştirilebilir. Delme, tornalama, frezeleme gibi talaşlı imalat işlemlerinde iyi işlenebilirlik gösterir. Toz boya, ıslak boya, sıcak daldırma galvaniz, elektrolitik kaplama ve fosfatlama gibi tüm yüzey işlemlerine uygundur.</p>

<h3>St37 ile St52 (S355JR) Karşılaştırması</h3>
<p>St37 ve St52 arasındaki temel fark mukavemet değerlerindedir. St52 (S355JR), 355 MPa akma dayanımı ile St37'nin 235 MPa değerine göre yaklaşık %50 daha yüksek mukavemet sunar. Bu sayede St52 ile aynı taşıma kapasitesi daha ince kesitlerle sağlanabilir ve yapı ağırlığı azaltılır. Ancak St52, St37'ye göre daha pahalıdır ve kaynak edilebilirliği bir miktar daha dikkatli parametre seçimi gerektirebilir. Standart yapısal uygulamalarda St37 yeterli ve ekonomik iken, yüksek mukavemet gerektiren köprü, kule ve ağır makine imalatında St52 tercih edilir.</p>

<h3>Kuzey Şafak Lazer'de St37 Sac İşleme</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde St37 sacları fiber lazer (0.5-25mm) ve CNC plazma (6-50mm) ile yüksek hassasiyette kesiyoruz. CNC abkant presimizle büküm, kaynaklı imalat hizmetimizle birleştirme ve montaj işlemlerini aynı çatı altında gerçekleştiriyoruz. St37, işlediğimiz en yüksek hacimli malzeme olup, her kalınlıkta stok bulundurmakta veya hızla tedarik edebilmekteyiz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma', 'kaynakli-imalat'],
    faq: [
      { q: 'St37 ile St52 arasındaki fark nedir?', a: 'St37 (S235JR) 235 MPa akma dayanımına sahipken, St52 (S355JR) 355 MPa akma dayanımına sahiptir. St52, daha yüksek mukavemet gerektiren yapısal uygulamalarda tercih edilir ancak maliyeti St37\'ye göre daha yüksektir.' },
      { q: 'St37 sac kaynak edilebilir mi?', a: 'Evet, St37 çelik düşük karbon eşdeğeri (CEV maks. 0.35) sayesinde mükemmel kaynak edilebilirliğe sahiptir. MIG/MAG, TIG ve elektrot kaynak yöntemlerinin tamamıyla ön ısıtma gerektirmeden sorunsuz birleştirilir.' },
      { q: 'St37 sac kalınlıkları nelerdir?', a: 'Piyasada St37 saclar 0.5mm ile 200mm arasında üretilmektedir. Kuzey Şafak Lazer olarak fiber lazer kesim için 0.5-25mm, CNC plazma kesim için 6-50mm kalınlık aralığında hizmet veriyoruz.' },
      { q: 'St37 sac dış mekanda kullanılabilir mi?', a: 'St37 çeliğin doğal korozyon direnci yoktur. Dış mekan kullanımında mutlaka boyama, galvaniz kaplama veya başka bir korozyon koruma işlemi uygulanmalıdır. Aksi halde kısa sürede paslanma başlar.' },
      { q: 'St37 sacın ASTM karşılığı nedir?', a: 'St37 (S235JR) çeliğin ASTM standardındaki yaklaşık karşılığı A36\'dır. Mekanik özellikler çok benzer olmakla birlikte kimyasal bileşim limitlerinde küçük farklılıklar bulunabilir.' }
    ]
  },

  {
    slug: 'kaynak-nedir',
    title: 'Kaynak (Welding) Nedir? Kaynak Çeşitleri | Kuzey Şafak Lazer',
    h1: 'Kaynak Nedir? Temel Kaynak Yöntemleri',
    metaDesc: 'Kaynak nedir, kaynak çeşitleri nelerdir? MIG, TIG, elektrot kaynak farkları. Endüstriyel kaynaklı imalat rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Kaynak</strong> (welding), iki veya daha fazla metal parçanın ısı, basınç veya her ikisinin kombinasyonu kullanılarak, atom düzeyinde metalürjik bağ oluşturacak şekilde kalıcı olarak birleştirilmesi işlemidir. Metal imalat sektörünün en temel ve en kritik birleştirme yöntemi olan kaynak, doğru uygulandığında ana malzeme kadar güçlü, hatta bazı durumlarda daha güçlü bağlantılar oluşturur. Kaynağın tarihi, 1800'lerin başında Humphry Davy'nin elektrik arkını keşfetmesine dayanır. Modern kaynak teknolojisi ise 20. yüzyılın başlarında örtülü elektrot kaynağının geliştirilmesiyle endüstriyel ölçekte kullanılmaya başlamıştır.</p>

<h3>Kaynak Nasıl Çalışır? (Teknik Prensip)</h3>
<p>Kaynak işleminin temel prensibi, birleştirilecek metal parçaların birleştirme bölgesinde lokal olarak ergitilmesi (eritme kaynağı) veya basınç altında plastik deformasyon yoluyla atom difüzyonu sağlanmasıdır (basınç kaynağı). Eritme kaynağında, bir enerji kaynağı (elektrik arkı, lazer, elektron ışını veya gaz alevi) kullanılarak birleştirme bölgesindeki ana metal ve dolgu malzemesi birlikte eritilir. Soğuma sırasında erimiş metal katılaşarak metalürjik bağ oluşturur. Koruyucu gaz veya örtü malzemesi, kaynak banyosunu atmosferik gazlardan (oksijen, azot, hidrojen) koruyarak kaynak kalitesini sağlar.</p>

<h3>Yaygın Kaynak Yöntemleri</h3>
<ul>
<li><strong>MIG/MAG Kaynak (GMAW):</strong> Metal Inert Gas / Metal Active Gas kaynak yöntemidir. Sürekli beslenen eritken tel elektrot, koruyucu gaz altında ark oluşturarak kaynak yapar. MIG'de argon veya argon-helyum karışımı, MAG'da argon-CO2 karışımı veya saf CO2 kullanılır. Yüksek hız, yüksek verimlilik ve kolay öğrenilebilirlik avantajlarıyla seri üretimde en çok tercih edilen yöntemdir. Yarı otomatik ve tam robotik uygulamalarda yaygındır.</li>
<li><strong>TIG Kaynak (GTAW):</strong> Tungsten Inert Gas kaynak yöntemidir. Eritmeyen tungsten elektrot ile ark oluşturulur, dolgu teli elle ayrı beslenir. Koruyucu gaz olarak yüksek saflıkta argon veya argon-helyum karışımı kullanılır. En yüksek kaliteli, en temiz ve en estetik kaynak dikişini oluşturur. Paslanmaz çelik, alüminyum, titanyum ve bakır alaşımlarında tercih edilir. Gıda sanayi, petrokimya ve havacılık gibi kritik sektörlerde standart yöntemdir.</li>
<li><strong>Elektrot Kaynak (SMAW):</strong> Örtülü (flux kaplı) elektrot ile yapılan en eski ve en yaygın bilinen ark kaynak yöntemidir. Elektrot örtüsü, kaynak sırasında eriyerek koruyucu gaz ve cüruf oluşturur. Saha koşullarında, açık havada ve kalın malzemelerde kullanılır. Ekipman basitliği ve taşınabilirliği en büyük avantajıdır. Çelik konstrüksiyon, boru hattı ve bakım-onarım işlerinde yaygındır.</li>
<li><strong>Punta Kaynak (Spot Welding):</strong> Direnç kaynağı yöntemlerinden biridir. İki metal sac, bakır elektrotlar arasında sıkıştırılarak yüksek elektrik akımı geçirilir. Temas noktasında oluşan ısı, metalleri lokal olarak eritir ve nokta birleştirme sağlar. Otomotiv karoseri, beyaz eşya gövdesi ve elektrik panosu imalatında yoğun kullanılır.</li>
<li><strong>Tozaltı Kaynak (SAW):</strong> Kaynak banyosu granüler toz örtü ile korunur. Yüksek akım ve yüksek yığma hızı ile kalın malzemelerde derin nüfuziyet sağlar. Gemi inşa, basınçlı kaplar ve büyük çaplı boru üretiminde otomatik olarak uygulanır.</li>
</ul>

<h3>Avantajları ve Dezavantajları</h3>
<p><strong>Avantajları:</strong> Kaynak, ana malzeme dayanımına eşit veya yakın kalıcı birleştirmeler oluşturur. Sızdırmazlık gerektirir uygulamalarda (tank, boru, basınçlı kap) vazgeçilmezdir. Tasarım esnekliği yüksektir; karmaşık geometriler birleştirilebilir. Otomasyon ve robotik uygulamalara uygundur. Cıvata, perçin gibi mekanik birleştirme elemanlarına göre daha hafif bağlantılar oluşturur.</p>
<p><strong>Dezavantajları:</strong> Kaynak ısı girdisi, birleştirme bölgesinde kalıntı gerilme, çarpılma ve ısı etki alanında (HAZ) mikroyapı değişikliğine neden olabilir. Kalite, operatör becerisine ve doğru parametre seçimine güçlü biçimde bağlıdır. Sökülemeyen birleştirmedir; tamir veya değişiklik zordur. Bazı malzeme kombinasyonlarında (farklı metaller arası) özel dikkat ve dolgu malzemesi gerektirir.</p>

<h3>Kaynak Kalitesini Etkileyen Faktörler</h3>
<p>Kaynak dikişinin mekanik dayanımı, görünümü ve ömrü birçok faktöre bağlıdır. Doğru kaynak parametreleri (akım, voltaj, ilerleme hızı), uygun dolgu malzemesi seçimi (ana malzemeyle uyumlu tel/elektrot), temiz birleştirme yüzeyleri (yağ, pas, tufal olmadan), uygun kaynak pozisyonu (düz, yatay, dikey, tavan), uygun birleştirme tasarımı (alın, köşe, bindirme, T-birleştirme) ve operatör tecrübesi kaynak kalitesinin ana belirleyicileridir. Kritik uygulamalarda NDT (tahribatsız muayene) testleri ile kaynak kalitesi doğrulanır.</p>

<h3>Kullanım Alanları ve Sektörler</h3>
<p>Kaynaklı imalat, metal kullanılan hemen her sektörde hayati öneme sahiptir. Makine imalatında şasi, gövde ve alt yapı birleştirmeleri; çelik konstrüksiyonda kolon-kiriş bağlantıları; basınçlı kap ve tank imalatında gövde ve kapak kaynakları; boru hattı inşaatında alın ve fittings kaynakları; gemi inşada tekne gövde sacları; otomotiv sanayinde karoseri ve şasi birleştirmeleri; enerji sektöründe rüzgar türbini, güneş paneli yapısı ve doğalgaz tesisatı kaynaklı imalatın yoğun olarak kullanıldığı alanlardır.</p>

<h3>Kuzey Şafak Lazer'de Kaynaklı İmalat Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde deneyimli kaynakçı kadromuzla MIG/MAG ve TIG kaynak yöntemleriyle endüstriyel standartlarda kaynaklı imalat yapıyoruz. Çelik, paslanmaz çelik ve alüminyum malzemelerde birleştirme, montaj ve komple kaynaklı imalat hizmeti sunuyoruz. Aynı tesis bünyesindeki fiber lazer kesim ve CNC büküm makinelerimizle entegre çalışarak projenizi kesimden kaynağa kadar tek çatı altında tamamlıyoruz.</p>`,
    relatedServices: ['kaynakli-imalat'],
    faq: [
      { q: 'En güçlü kaynak yöntemi hangisidir?', a: 'Tüm ark kaynak yöntemleri (MIG, TIG, elektrot) doğru uygulandığında ana malzeme dayanımına eşit veya yakın bağlantılar oluşturur. En güçlü yöntem, uygulamaya ve malzemeye en uygun olan yöntemdir. Kritik uygulamalarda kaynak prosedürü (WPS) hazırlanarak kalite güvence altına alınır.' },
      { q: 'Paslanmaz çelik hangi yöntemle kaynaklanır?', a: 'Paslanmaz çelik en kaliteli sonuçlar için TIG kaynak ile birleştirilir. Seri üretimde ve görünmeyen birleştirmelerde MIG kaynak da başarıyla kullanılır. Önemli olan uygun dolgu malzemesi (örn: 308L, 316L tel) ve yüksek saflıkta argon koruyucu gaz seçimidir.' },
      { q: 'Kaynaklı imalat süresi ne kadar sürer?', a: 'Süre projenin karmaşıklığına, toplam kaynak dikişi uzunluğuna, parça sayısına ve kalite gereksinimlerine bağlıdır. Basit birleştirmeler saatler içinde, karmaşık konstrüksiyon projeleri günler veya haftalar içinde tamamlanır. Projenize özel süre bilgisi teklif aşamasında verilir.' },
      { q: 'Alüminyum kaynak yapıyor musunuz?', a: 'Evet, AC TIG kaynak yöntemiyle alüminyum birleştirme yapıyoruz. AC akım, alüminyumun yüzeyindeki oksit tabakasını temizleyerek kaliteli kaynak yapılmasını sağlar. Alüminyum profil, levha ve sac malzemelerde hizmet veriyoruz.' },
      { q: 'Kaynak sonrası hangi testler yapılabilir?', a: 'Standart sürecimizde görsel muayene ve boyutsal kontrol uygulanır. Kritik uygulamalarda penetrant testi (PT), radyografik test (RT), ultrasonik test (UT) ve basınç testi gibi NDT yöntemleri organize edilebilir.' }
    ]
  },

  // =============================================
  // KATEGORI: BİLGİ — "X nasıl yapılır?" sayfaları
  // =============================================
  {
    slug: 'sac-metal-imalat-sureci',
    title: 'Sac Metal İmalat Süreci Nasıl İşler? | Kuzey Şafak Lazer',
    h1: 'Sac Metal İmalat Süreci Nasıl İşler?',
    metaDesc: 'Sac metal imalat süreci adım adım: tasarım, kesim, büküm, kaynak, boyama. Endüstriyel sac metal işleme rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Sac metal imalat</strong>, düz metal sacların çeşitli endüstriyel işlemlerden geçirilerek kesme, bükme, kaynak, montaj ve yüzey işlemi aşamalarıyla nihai ürün haline dönüştürülmesi sürecidir. Bu süreç, bir parçanın konsept tasarımından bitmiş ürün olarak sevk edilmesine kadar uzanan, birbiriyle bağlantılı birçok aşamadan oluşur. Sac metal imalat, endüstriyel üretimin en temel disiplinlerinden biridir ve otomotivden beyaz eşyaya, havacılıktan elektronik kasalara kadar son derece geniş bir yelpazede uygulanmaktadır.</p>

<h3>Sac Metal İmalat Neden Önemlidir?</h3>
<p>Sac metal imalat, diğer üretim yöntemlerine göre birçok avantaj sunar. Kalıp yatırımı gerektirmeden (lazer kesim ve büküm ile) prototipten seri üretime geçiş mümkündür. Hafif ancak mukavim parçalar üretilebilir. Karmaşık 3D geometriler, düz sacdan büküm ve kaynak ile elde edilebilir. Geniş malzeme seçeneği (çelik, paslanmaz, alüminyum, galvaniz, bakır) ve kalınlık aralığı (0.5mm-50mm) esneklik sağlar. CNC otomasyon ile yüksek hassasiyet ve tekrarlanabilirlik garanti edilir.</p>

<h3>1. Tasarım ve Teknik Çizim Aşaması</h3>
<p>Sac metal imalat süreci, 2D veya 3D CAD yazılımlarında (SolidWorks, AutoCAD, Inventor, Fusion 360, Solid Edge) parça tasarımıyla başlar. Tasarım aşamasında büküm yarıçapları, büküm payları (bend allowance), K-faktörü, minimum kenar mesafeleri ve delik-büküm mesafeleri gibi üretilebilirlik kriterleri (DFM - Design for Manufacturing) dikkate alınır. 3D modelden açınım (flat pattern) çıkarılarak lazer kesim dosyası (DXF/DWG) hazırlanır. Büküm çizgileri, kaynak sembolleri ve toleranslar teknik resimde belirtilir. Doğru bir tasarım, üretim sürecinde hata ve israfı minimuma indirir.</p>

<h3>2. Malzeme Seçimi ve Tedarik</h3>
<p>Projenin fonksiyonel gereksinimlerine göre uygun malzeme türü ve kalınlığı belirlenir. Taşıma kapasitesi, korozyon direnci, estetik beklenti, bükülebilirlik ve maliyet, malzeme seçiminin ana parametreleridir. Genel amaçlı uygulamalarda St37 çelik sac; korozyon direnci gerektiğinde paslanmaz çelik (304, 316L) veya galvaniz sac; hafiflik önemli ise alüminyum; dış mekan uygulamalarında galvaniz veya boyalı sac tercih edilir. Malzeme, standart tabaka boyutlarında (1000x2000mm, 1250x2500mm, 1500x3000mm) tedarik edilir ve kesim öncesi nesting optimizasyonu ile fire oranı minimize edilir.</p>

<h3>3. Malzeme Kesimi (Lazer / Plazma)</h3>
<p>Tasarım onayı ve malzeme tedariki sonrası saclar kesim işlemine alınır. İnce ve orta kalınlıklarda (0.5-25mm) fiber lazer kesim, kalın saclarda (15-50mm) CNC plazma kesim uygulanır. CNC kontrollü kesim makineleri, DXF dosyasındaki kontürleri mikron hassasiyetinde takip eder. Nesting yazılımı, parçaları sac üzerine en verimli şekilde yerleştirerek malzeme kullanımını optimize eder. Lazer kesimde ±0.1mm, plazma kesimde ±0.5mm toleranslar sağlanır.</p>

<h3>4. Büküm ve Şekillendirme</h3>
<p>Kesilen düz parçalar, CNC abkant preste programlanan açı ve boyutlara göre bükülür. Büküm sırası (bending sequence) parça geometrisine göre optimize edilir; yanlış sıralama sonraki bükümlerin yapılmasını engelleyebilir. CNC kontrol, her büküm adımında arka dayama mesafesini ve ram strokunu otomatik ayarlar. Karmaşık parçalarda 6-10 büküm adımı uygulanabilir. Kutu profiller, U kanallar, Z profiller ve özel geometriler çok adımlı büküm ile elde edilir. Geri yaylanma kompansasyonu CNC tarafından otomatik hesaplanır.</p>

<h3>5. Kaynak ve Montaj</h3>
<p>Bükülmüş parçalar, birbirine veya diğer bileşenlere MIG/MAG veya TIG kaynak yöntemiyle birleştirilir. Kaynak öncesi parçalar fikstür (sabitleme aparatı) ile pozisyonlandırılarak boyutsal doğruluk sağlanır. Kaynak yöntemi seçimi malzeme türü, kalınlık, estetik ve dayanım gereksinimlerine göre yapılır. Karbon çelikte genellikle MIG/MAG, paslanmaz çelik ve alüminyumda TIG kaynak tercih edilir. Kaynak sonrası gerektiğinde taşlama, düzeltme ve kaynak dikişi temizleme işlemleri uygulanır.</p>

<h3>6. Yüzey İşlemi ve Kaplama</h3>
<p>Son aşamada parçalar, kullanım koşullarına göre uygun yüzey işleminden geçer. Kumlama veya raspalama ile yüzey hazırlanır. Fosfatlama, boya tutunmasını artırır. Toz boya (powder coating) en yaygın endüstriyel boyama yöntemidir ve yüksek korozyon direnci ile mekanik dayanıklılık sunar. Islak boya özel renk ve efektlerde kullanılır. Sıcak daldırma galvaniz, dış mekan uygulamalarında uzun ömürlü korozyon koruması sağlar. Paslanmaz çelik parçalarda elektropolisaj veya pasivasyon uygulanabilir.</p>

<h3>7. Kalite Kontrol ve Sevkiyat</h3>
<p>Bitmiş ürünler boyutsal kontrol, görsel muayene ve fonksiyonel test aşamalarından geçer. Kritik ölçüler kumpas, mikrometre ve gerektiğinde CMM (koordinat ölçüm makinesi) ile doğrulanır. Uygun ambalajlama sonrası ürünler sevkiyata hazır hale getirilir.</p>

<h3>Kuzey Şafak Lazer'de Sac Metal İmalat</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde fiber lazer kesim, CNC plazma kesim, CNC abkant büküm ve kaynaklı imalat süreçlerinin tamamını tek çatı altında gerçekleştiriyoruz. Tasarım danışmanlığından son ürün teslimatına kadar projenizin her aşamasında yanınızdayız. Tek parça prototipten binlerce adetlik seri üretime kadar her ölçekte, tutarlı kalite ve rekabetçi teslim süreleri sunuyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat', 'cnc-plazma'],
    faq: [
      { q: 'Sac metal imalat için teknik çizim şart mı?', a: 'Hassas imalat için teknik çizim (DXF, DWG veya STEP formatı) gereklidir. Teknik çiziminiz yoksa, eskiz, el çizimi veya numune parçadan teknik ekibimiz çizim oluşturabilir. Üretilebilirlik (DFM) danışmanlığı da sağlıyoruz.' },
      { q: 'Sac metal imalat süresi ne kadardır?', a: 'Basit kesim+büküm parçalarında 1-2 iş günü, orta karmaşıklıktaki kaynaklı imalatlarda 3-5 iş günü, büyük ve karmaşık projelerde 5-10 iş günü standart sürelerimizdir. Acil siparişlerde hızlandırılmış üretim mümkündür.' },
      { q: 'Minimum sipariş adedi var mı?', a: 'Kuzey Şafak Lazer olarak tek parça prototipten binlerce adetlik seri üretime kadar her miktarda hizmet veriyoruz. Minimum sipariş limiti uygulamıyoruz.' },
      { q: 'Hangi malzemelerle çalışıyorsunuz?', a: 'Çelik (St37, St52), paslanmaz çelik (304, 316L, 430), alüminyum, galvaniz sac, DKP sac, bakır, pirinç ve Hardox aşınma çeliklerinde sac metal imalat hizmeti veriyoruz. 0.5mm ile 50mm arası kalınlıklarda çalışıyoruz.' },
      { q: 'Boyama ve kaplama hizmeti de sunuyor musunuz?', a: 'Boyama ve kaplama hizmetini anlaşmalı tedarikçilerimiz aracılığıyla organize ediyoruz. Toz boya, ıslak boya, sıcak daldırma galvaniz ve elektropolisaj seçenekleri mevcuttur. Boyalı veya kaplamalı bitmiş ürün olarak teslim edebiliyoruz.' }
    ]
  },

  {
    slug: 'lazer-kesim-dosyasi-nasil-hazirlanir',
    title: 'Lazer Kesim Dosyası Nasıl Hazırlanır? DXF Rehberi | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim Dosyası Nasıl Hazırlanır?',
    metaDesc: 'Lazer kesim için DXF dosyası nasıl hazırlanır? AutoCAD ve SolidWorks ile kesim dosyası hazırlama rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Lazer kesim dosyası</strong>, CNC lazer kesim makinesinin kesim yollarını (tool path) takip etmesi için gerekli olan dijital çizim dosyasıdır. Doğru hazırlanmış bir kesim dosyası, üretim sürecinin hızını, kalitesini ve maliyetini doğrudan etkiler. Hatalı dosyalar; yanlış boyut, açık konturlar, çift çizgiler veya uygunsuz geometriler nedeniyle kesim hatalarına, malzeme israfına ve zaman kaybına yol açabilir. Bu rehberde, lazer kesim dosyası hazırlarken dikkat edilmesi gereken tüm teknik detayları adım adım açıklıyoruz.</p>

<h3>Kabul Edilen Dosya Formatları</h3>
<p>Lazer kesim için en yaygın ve tercih edilen format DXF (Drawing Exchange Format) olmakla birlikte, farklı yazılımlardan gelen dosyalarla da çalışılabilir. Kabul edilen formatlar:</p>
<ul>
<li><strong>DXF (.dxf):</strong> En yaygın ve en uyumlu format. AutoCAD, SolidWorks, Inventor ve diğer CAD yazılımlarından dışa aktarılabilir. R12 veya R14 versiyonu en geniş uyumluluğu sağlar.</li>
<li><strong>DWG (.dwg):</strong> AutoCAD'in doğal formatı. DXF ile aynı bilgiyi taşır ancak bazı eski makinelerde uyumluluk sorunu yaşanabilir.</li>
<li><strong>STEP (.step, .stp):</strong> 3D model formatı. Sac metal parçalarda açınım çıkarılarak kesim dosyası oluşturulur. En evrensel 3D mühendislik formatıdır.</li>
<li><strong>IGES (.igs, .iges):</strong> Eski ama hala yaygın kullanılan 3D model formatı. STEP'e benzer şekilde işlenir.</li>
<li><strong>AI (.ai):</strong> Adobe Illustrator formatı. Dekoratif ve sanatsal kesim işlerinde sıklıkla karşılaşılır.</li>
<li><strong>PDF (.pdf):</strong> Ölçekli teknik çizimlerden vektör bilgisi çıkarılabilir. Ölçek bilgisinin doğru olması kritik önem taşır.</li>
</ul>

<h3>DXF Dosyası Hazırlarken Temel Kurallar</h3>
<ul>
<li><strong>Ölçek 1:1 olmalı:</strong> Çizim gerçek boyutlarda, milimetre (mm) biriminde hazırlanmalıdır. Ölçek hatası, parçanın yanlış boyutta kesilmesine neden olur. Dosyayı göndermeden önce bir referans ölçüyü kontrol edin.</li>
<li><strong>Kapalı konturlar:</strong> Tüm kesim hatları kapalı polyline veya kapalı geometri olmalıdır. Açık uçlu çizgiler (0.01mm bile olsa) CNC programında hata oluşturur ve kesim başlatılamaz. AutoCAD'de "PEDIT" > "Join" komutu ile çizgileri birleştirebilirsiniz.</li>
<li><strong>Çift çizgi temizliği:</strong> Üst üste binen (duplicate) çizgiler temizlenmelidir. Çift çizgi, makinenin aynı yolu iki kez kesmesine neden olur; bu durum kenar kalitesini bozar ve süreyi artırır. AutoCAD'de "OVERKILL" komutu bu sorunu çözer.</li>
<li><strong>Minimum delik çapı:</strong> Lazer kesimde delik çapı en az malzeme kalınlığına eşit olmalıdır. Örneğin 2mm sacta minimum 2mm çapında delik açılabilir. Daha küçük deliklerde kalite düşer ve ısı birikimi artar.</li>
<li><strong>Minimum parçalar arası mesafe:</strong> Nesting sırasında parçalar arasında en az malzeme kalınlığı kadar (minimum 2mm) boşluk bırakılmalıdır. Yetersiz mesafe ısı birikimine ve deformasyona neden olabilir.</li>
<li><strong>Spline yerine polyline arc:</strong> Serbest eğriler (spline) mümkünse polyline arc segmentlerine dönüştürülmelidir. Spline'lar bazı CAM yazılımlarında doğru yorumlanamayabilir. "FLATTEN" veya "SPLINEDIT" > "Convert to polyline" komutları kullanılabilir.</li>
<li><strong>Gereksiz elemanların temizlenmesi:</strong> Ölçü çizgileri (dimension), yazılar (text), tarama (hatch), blok referansları ve layer bilgileri kesim dosyasında bulunmamalıdır. Sadece kesim konturları kalmalıdır.</li>
</ul>

<h3>AutoCAD ile DXF Dosyası Hazırlama</h3>
<p>AutoCAD, lazer kesim dosyası hazırlamak için en yaygın kullanılan yazılımdır. Parçanızı 1:1 ölçekte milimetre biriminde çizin. Tüm kesim çizgilerini tek bir layer'a (örn: "KESIM") toplayın. "PEDIT" komutu ile çizgileri kapalı polyline haline getirin. "OVERKILL" ile çift çizgileri temizleyin. Ölçü çizgileri, yazılar ve taramaları silin. "Save As" > "DXF" seçeneğiyle AutoCAD R12 veya R14 DXF formatında kaydedin. Kaydetmeden önce "ZOOM" > "Extents" yaparak çizimin koordinat merkezine yakın olduğundan emin olun.</p>

<h3>SolidWorks ile DXF Dosyası Hazırlama</h3>
<p>SolidWorks'te 3D modelinizi sac metal (Sheet Metal) özellikleriyle tasarlayın. Flatten (düzleştirme) komutu ile açınım alın. "File" > "Save As" > "DXF/DWG" seçeneğiyle kaydedin. Dışa aktarma seçeneklerinde "Geometry" ve isterseniz "Bend lines" layer'larını seçin. Büküm çizgilerini ayrı bir layer'da tutmak, üretim ekibinin büküm referanslarını görmesini sağlar. SolidWorks'ün otomatik K-faktörü ve büküm payı hesaplamaları, doğru açınım boyutu için kritik öneme sahiptir.</p>

<h3>Inventor, Fusion 360 ve Diğer Yazılımlar</h3>
<p>Autodesk Inventor'da sac metal parçanızın Flat Pattern görünümünden DXF dışa aktarma yapabilirsiniz. Fusion 360'ta "Create Flat Pattern" sonrası "Export DXF" kullanılır. Solid Edge, CATIA ve Creo gibi yazılımlarda da benzer sac metal açınım ve DXF dışa aktarma özellikleri mevcuttur. Tüm yazılımlarda temel kural aynıdır: 1:1 ölçek, kapalı konturlar ve temiz geometri.</p>

<h3>Sık Yapılan Hatalar</h3>
<p>Lazer kesim dosyalarında en sık karşılaşılan hatalar: açık konturlar (kapatılmamış çizgiler), çift çizgiler, yanlış ölçek (inç yerine mm veya tersi), gereksiz elemanlar (ölçü, yazı, tarama), spline eğrilerin yorumlanma sorunu, referans noktasının çizimden çok uzak olması ve birden fazla parçanın aynı dosyada düzensiz yerleştirilmesidir. Bu hataların çoğu, dosya gönderilmeden önce basit bir kontrol ile tespit edilebilir.</p>

<h3>Dosyanız Yoksa Ne Yapabilirsiniz?</h3>
<p>Teknik çizim dosyanızın olmaması engel değildir. Kuzey Şafak Lazer teknik ekibi olarak, size birkaç alternatif sunuyoruz: Ölçülü el çizimi veya eskiz gönderebilirsiniz, biz bunu DXF'e dönüştürürüz. Mevcut bir parçanızın numunesini getirebilirsiniz, ölçülendirip çizimini oluşturabiliriz. JPG veya PNG formatında bir görsel bile olsa, vektörel çizime dönüştürebiliriz. WhatsApp (0555 000 83 04) veya e-posta ile iletişime geçerek dosyanızı bize ulaştırabilirsiniz.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Hangi dosya formatlarını kabul ediyorsunuz?', a: 'DXF, DWG, STEP, IGES, AI (Adobe Illustrator), PDF ve hatta JPG/PNG görselden bile çizim çıkarabiliriz. En ideal ve en hızlı işlenen format, 1:1 ölçekli DXF dosyasıdır.' },
      { q: 'DXF dosyam yoksa ne yapmalıyım?', a: 'Bize numune parça, ölçülü eskiz veya el çizimi göndermeniz yeterlidir. Teknik ekibimiz dosyanızı oluşturarak kesime hazır hale getirir. WhatsApp üzerinden fotoğraf göndermek bile yeterli olabilir.' },
      { q: '3D model gönderebilir miyim?', a: 'Evet, STEP veya IGES formatında 3D model gönderebilirsiniz. Sac metal parçalar için açınım (flat pattern) çıkararak kesim dosyasını hazırlarız. SolidWorks, Inventor veya Fusion 360 doğal formatlarını da kabul ediyoruz.' },
      { q: 'DXF dosyamda açık kontur hatası ne anlama gelir?', a: 'Açık kontur, kesim hattının tam olarak kapanmamış olduğu anlamına gelir. Lazer makinesi kapalı bir yol takip edemez ve parça doğru kesilemez. AutoCAD\'de PEDIT > Join komutu ile çizgileri birleştirerek bu sorunu çözebilirsiniz.' },
      { q: 'Dosya hazırlama ücreti var mı?', a: 'Basit çizim düzenlemeleri ve dosya dönüşümleri standart hizmetimize dahildir. Sıfırdan karmaşık çizim oluşturma işlemlerinde projeye özel değerlendirme yapılır.' }
    ]
  },

  // =============================================
  // KATEGORI: BİLGİ — "X vs Y farkı" sayfaları
  // =============================================
  {
    slug: 'lazer-kesim-plazma-kesim-farki',
    title: 'Lazer Kesim vs Plazma Kesim: Farklar ve Karşılaştırma | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim ile Plazma Kesim Arasındaki Farklar',
    metaDesc: 'Lazer kesim mi plazma kesim mi? Hassasiyet, maliyet, kalınlık kapasitesi ve kenar kalitesi karşılaştırması. Projenize en uygun yöntemi seçin.',
    category: 'bilgi',
    content: `<p><strong>Lazer kesim</strong> ve <strong>plazma kesim</strong>, endüstriyel metal işleme sektöründe en yaygın kullanılan iki CNC kontrollü termal kesim yöntemidir. Her ikisi de bilgisayar programı ile kontrol edilen kesim kafası aracılığıyla metal sacları istenilen geometride keser, ancak çalışma prensipleri, hassasiyet değerleri, kalınlık kapasiteleri ve maliyet yapıları birbirinden önemli ölçüde farklıdır. Doğru yöntem seçimi, projenizin kalitesini, maliyetini ve teslimat süresini doğrudan etkiler. Bu karşılaştırma rehberinde, her iki yöntemin teknik detaylarını inceleyerek projenize en uygun çözümü belirlemenize yardımcı oluyoruz.</p>

<h3>Çalışma Prensibi Farkı</h3>
<p><strong>Lazer kesim:</strong> Fiber veya CO2 lazer rezonatöründe üretilen koherant ışık demeti, odaklama lensi aracılığıyla 0.1mm'den küçük bir noktaya yoğunlaştırılır. Bu noktada enerji yoğunluğu 10^6 W/cm²'yi aşar ve malzeme lokal olarak eritilir, buharlaştırılır veya oksitlenir. Yardımcı gaz (azot veya oksijen) erimiş malzemeyi kesim bölgesinden uzaklaştırır.</p>
<p><strong>Plazma kesim:</strong> Elektrik arkı ile iyonize edilen basınçlı gaz (hava, oksijen veya azot), 20.000-30.000°C sıcaklığa ulaşan plazma jeti oluşturur. Bu süper ısıtılmış iyonize gaz akışı metali eritir ve yüksek kinetik enerji ile erimiş malzemeyi uzaklaştırır. Plazma jeti 1-2mm genişliğindedir.</p>

<h3>Detaylı Karşılaştırma Tablosu</h3>
<table>
<tr><th>Kriter</th><th>Lazer Kesim</th><th>Plazma Kesim</th></tr>
<tr><td>Tolerans</td><td>±0.1mm</td><td>±0.5-1mm</td></tr>
<tr><td>Kerf genişliği</td><td>0.1-0.3mm</td><td>1.5-3mm</td></tr>
<tr><td>Çelik kalınlık kapasitesi</td><td>0.5-25mm</td><td>6-50mm+</td></tr>
<tr><td>İnce sacta hız (1-6mm)</td><td>Çok yüksek</td><td>Orta</td></tr>
<tr><td>Kalın sacta hız (20mm+)</td><td>Düşük</td><td>Yüksek</td></tr>
<tr><td>Kenar kalitesi</td><td>Pürüzsüz, dik</td><td>Pürüzlü olabilir</td></tr>
<tr><td>Çapak oluşumu</td><td>Minimum</td><td>Alt kenarda dross</td></tr>
<tr><td>Isı etki alanı (HAZ)</td><td>Dar (0.1-0.3mm)</td><td>Geniş (1-3mm)</td></tr>
<tr><td>Detay kabiliyeti</td><td>Çok yüksek</td><td>Sınırlı</td></tr>
<tr><td>Enerji verimliliği</td><td>%30-40</td><td>%50-60</td></tr>
<tr><td>Pah (bevel) kesim</td><td>Sınırlı</td><td>Mümkün</td></tr>
<tr><td>İletken olmayan malzeme</td><td>CO2 lazer ile evet</td><td>Hayır</td></tr>
</table>

<h3>Hassasiyet ve Kenar Kalitesi</h3>
<p>Lazer kesim, ±0.1mm tolerans ve 0.1-0.3mm kerf genişliği ile çok daha yüksek hassasiyet sunar. Kesim kenarı pürüzsüz, dik ve çapaksızdır; genellikle ek işlem (taşlama) gerektirmez. Plazma kesimde tolerans ±0.5-1mm, kerf genişliği 1.5-3mm'dir. Kenar yüzeyi lazer kadar pürüzsüz değildir ve alt kenarda çapak (dross) oluşabilir. Hassas parçalar, birbirine geçmeli montaj elemanları ve estetik uygulamalar için lazer kesim tercih edilir.</p>

<h3>Kalınlık Kapasitesi ve Hız Karşılaştırması</h3>
<p>Fiber lazer, çelikte 0.5mm ile 25mm arasında verimli kesim yapar. 1-6mm aralığında lazer kesim çok yüksek hızlara ulaşır ve plazma ile kıyaslanamayacak kadar hızlıdır. CNC plazma ise 6mm ile 50mm+ aralığında güçlüdür. 15mm üzeri kalınlıklarda plazma kesim hız avantajı sağlamaya başlar. 20mm üzerinde plazma, lazerden 2-3 kat daha hızlı kesim yapabilir. 10-15mm arası kalınlıklar ise her iki yöntemin de verimli çalıştığı, tercih parametresinin hassasiyet ve maliyet dengesine göre belirlendiği geçiş bölgesidir.</p>

<h3>Maliyet Karşılaştırması</h3>
<p>Maliyet karşılaştırması kalınlığa göre önemli farklılıklar gösterir. İnce saclarda (0.5-10mm) lazer kesim hem daha hızlı hem de birim kesim maliyetinde daha ekonomiktir. Kalın saclarda (20mm+) plazma kesim, lazer kesime göre belirgin maliyet avantajı sunar; çünkü kesim hızı daha yüksek ve sarf malzeme maliyeti daha düşüktür. Orta kalınlıklarda (10-20mm) maliyet karşılaştırması parça geometrisi, hassasiyet gereksinimi ve toplam adede göre değişir. İlk yatırım açısından bakıldığında, plazma kesim makineleri lazer kesim makinelerine göre önemli ölçüde düşük maliyetlidir.</p>

<h3>Hangi Durumda Hangi Yöntem Tercih Edilmeli?</h3>
<p><strong>Lazer kesimi tercih edin:</strong> İnce ve orta kalınlıklarda (0.5-15mm), hassas tolerans gerektiğinde, karmaşık geometri ve küçük detaylarda, temiz kenar kalitesi istendiğinde, birbirine geçmeli montaj parçalarında ve estetik görünümün önemli olduğu uygulamalarda.</p>
<p><strong>Plazma kesimi tercih edin:</strong> Kalın saclarda (15mm+), ±0.5mm toleransın yeterli olduğu yapısal parçalarda, çelik konstrüksiyon elemanlarında, flanş ve bağlantı plakalarında, pah (bevel) kesim gerektiğinde ve maliyet optimizasyonunun öncelikli olduğu kalın kesim projelerinde.</p>

<h3>Kuzey Şafak Lazer'de Her İki Yöntem Tek Çatıda</h3>
<p>Kuzey Şafak Lazer olarak İstanbul İkitelli OSB'deki tesisimizde hem fiber lazer kesim hem de CNC plazma kesim hizmeti sunuyoruz. Projenizde ince ve kalın parçaların bir arada bulunması durumunda, her parça için en uygun yöntemi seçerek toplam maliyeti optimize ediyor ve projenizi eksiksiz teslim ediyoruz. Teknik çiziminizi gönderin, en uygun kesim yöntemini ve projenize özel teklifi birlikte belirleyelim.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma'],
    faq: [
      { q: 'İnce saclar için lazer mı plazma mı kullanmalıyım?', a: '10mm altı kalınlıklarda lazer kesim her zaman daha iyi sonuç verir. Daha yüksek hassasiyet (±0.1mm), temiz kenar kalitesi, minimum çapak ve daha yüksek kesim hızı sağlar. Maliyet açısından da lazer avantajlıdır.' },
      { q: 'Plazma kesim ne zaman lazere tercih edilir?', a: '15-20mm üzeri kalın çelik saclarda plazma kesim maliyet ve hız avantajı sağlar. Çelik konstrüksiyon, ağır makine parçaları ve yapısal elemanlar gibi hassasiyet gereksiniminin ±0.5mm ile karşılandığı uygulamalarda plazma tercih edilir.' },
      { q: 'Her iki yöntemi bir projede birlikte kullanabilir miyiz?', a: 'Evet, aynı projede kalın parçaları CNC plazma ile, ince ve hassas parçaları fiber lazer ile keserek maliyet optimizasyonu sağlıyoruz. Kuzey Şafak Lazer\'de her iki makine aynı tesiste bulunmaktadır.' },
      { q: '10-15mm kalınlıkta hangi yöntemi tercih etmeliyim?', a: 'Bu kalınlık aralığı geçiş bölgesidir. Hassasiyet ve kenar kalitesi kritikse lazer, maliyet öncelikliyse plazma tercih edilir. Parça geometrisi ve tolerans gereksinimlerine göre projenize özel değerlendirme yapıyoruz.' },
      { q: 'Plazma kesim sonrası ek işlem gerekir mi?', a: 'Plazma kesim sonrası kenar kalitesine bağlı olarak taşlama veya çapak temizleme gerekebilir. Lazer kesimde ise genellikle ek işlem gerekmez. Uygulamanın tolerans ve estetik gereksinimine göre değerlendirilir.' }
    ]
  },

  {
    slug: 'tig-mig-kaynak-farki',
    title: 'TIG vs MIG Kaynak: Farklar ve Avantajlar | Kuzey Şafak Lazer',
    h1: 'TIG Kaynak ile MIG Kaynak Arasındaki Farklar',
    metaDesc: 'TIG kaynak mı MIG kaynak mı? Her iki yöntemin avantajları, dezavantajları ve kullanım alanları karşılaştırması. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>TIG kaynak</strong> (Tungsten Inert Gas / GTAW) ve <strong>MIG kaynak</strong> (Metal Inert Gas / GMAW), endüstriyel metal imalatında en yaygın kullanılan iki koruyucu gaz altı ark kaynak yöntemidir. Her ikisi de elektrik arkı ile metal eritme prensibine dayanır ve yüksek kaliteli kalıcı birleştirmeler oluşturur. Ancak çalışma prensipleri, üretim hızları, operatör beceri gereksinimleri ve uygulama alanları önemli farklılıklar gösterir. Doğru kaynak yöntemi seçimi, projenizin kalitesini, maliyetini ve üretim süresini doğrudan etkiler. Bu rehberde, her iki yöntemin avantaj ve dezavantajlarını teknik detaylarıyla karşılaştırıyoruz.</p>

<h3>Çalışma Prensibi Farkı</h3>
<p><strong>TIG Kaynak (GTAW):</strong> Tungsten Inert Gas kaynağında, eritmeyen (tükenmeyen) tungsten elektrot ile iş parçası arasında elektrik arkı oluşturulur. Kaynak banyosu, yüksek saflıkta argon veya argon-helyum karışımı ile atmosferik gazlardan korunur. Dolgu malzemesi (kaynak teli) gerektiğinde operatör tarafından diğer elle ayrı olarak kaynak banyosuna beslenir. Kaynak akımı, ayak pedalı ile anlık olarak kontrol edilebilir. DC (doğru akım) çelik ve paslanmaz çelikte, AC (alternatif akım) alüminyum ve magnezyumda kullanılır. AC akım, alüminyum yüzeyindeki oksit tabakasını temizleme (cleaning action) özelliğine sahiptir.</p>
<p><strong>MIG Kaynak (GMAW):</strong> Metal Inert Gas (veya Metal Active Gas = MAG) kaynağında, sürekli beslenen eritken tel elektrot hem ark kaynağı hem de dolgu malzemesi görevi görür. Tel, makinenin motor sürücüsü tarafından sabit hızda kaynak banyosuna otomatik beslenir. Koruyucu gaz olarak saf argon (MIG), argon+CO2 karışımı veya saf CO2 (MAG) kullanılır. MIG terimi genellikle paslanmaz çelik ve alüminyumda argon gazı ile, MAG terimi karbon çelikte CO2 içeren gaz karışımları ile kullanılır. Operatör tek elle torcu yönlendirirken, tel besleme otomatik olarak gerçekleşir.</p>

<h3>Detaylı Karşılaştırma Tablosu</h3>
<table>
<tr><th>Kriter</th><th>TIG Kaynak (GTAW)</th><th>MIG Kaynak (GMAW)</th></tr>
<tr><td>Kaynak hızı</td><td>Yavaş (50-150 mm/dk)</td><td>Hızlı (200-800 mm/dk)</td></tr>
<tr><td>Kaynak dikişi estetiği</td><td>Mükemmel, temiz</td><td>İyi, sıçrantı olabilir</td></tr>
<tr><td>Gözeneklilik riski</td><td>Çok düşük</td><td>Düşük-orta</td></tr>
<tr><td>Operatör becerisi</td><td>Yüksek (çift el)</td><td>Orta (tek el)</td></tr>
<tr><td>İnce malzeme (<1mm)</td><td>Mükemmel</td><td>Zor</td></tr>
<tr><td>Kalın malzeme (>6mm)</td><td>Yavaş, çok paso</td><td>Verimli</td></tr>
<tr><td>Isı girdisi kontrolü</td><td>Çok hassas (pedal)</td><td>Orta</td></tr>
<tr><td>Seri üretim uygunluğu</td><td>Düşük</td><td>Çok yüksek</td></tr>
<tr><td>Robotik otomasyon</td><td>Uygun (orbital TIG)</td><td>Çok yaygın</td></tr>
<tr><td>Koruyucu gaz</td><td>Argon, Ar+He</td><td>Ar+CO2, CO2, Argon</td></tr>
<tr><td>Çelik</td><td>İyi</td><td>Mükemmel (MAG)</td></tr>
<tr><td>Paslanmaz çelik</td><td>Mükemmel</td><td>İyi</td></tr>
<tr><td>Alüminyum</td><td>Mükemmel (AC)</td><td>İyi (pulslu)</td></tr>
<tr><td>İşçilik maliyeti</td><td>Yüksek</td><td>Düşük</td></tr>
</table>

<h3>Avantajlar ve Dezavantajlar</h3>
<p><strong>TIG kaynağın avantajları:</strong> En yüksek kaliteli ve en estetik kaynak dikişini oluşturur. Gözeneklilik riski minimum düzeydedir. Isı girdisi pedal kontrolü ile çok hassas ayarlanabilir, bu sayede ince malzemelerde deformasyon minimuma iner. 0.5mm gibi çok ince saclarda bile kaliteli birleştirme yapılabilir. Sıçrantısız ve cürufsuz temiz kaynak sağlar. Paslanmaz çelik, alüminyum, titanyum ve bakır alaşımlarında üstün sonuçlar verir.</p>
<p><strong>TIG kaynağın dezavantajları:</strong> MIG'e göre 3-5 kat daha yavaştır. Yüksek operatör becerisi ve deneyim gerektirir (çift el koordinasyonu). Seri üretimde işçilik maliyeti yüksektir. Kalın malzemelerde çok pasolu kaynak gerektirir ve süre uzar. Dış ortamda rüzgara karşı hassastır.</p>
<p><strong>MIG/MAG kaynağın avantajları:</strong> Otomatik tel beslemesi sayesinde yüksek kaynak hızı ve üretkenlik sağlar. Öğrenme eğrisi TIG'e göre kısadır. Seri üretimde birim işçilik maliyetini önemli ölçüde düşürür. 1mm üzeri tüm kalınlıklarda verimlidir. Robotik otomasyon için idealdir. Geniş dolgu malzemesi (tel) çeşitliliği mevcuttur.</p>
<p><strong>MIG/MAG kaynağın dezavantajları:</strong> Estetik olarak TIG kadar temiz dikiş oluşturamaz. Sıçrantı (spatter) oluşabilir ve temizlik gerektirebilir. Çok ince malzemelerde (1mm altı) yanma riski vardır. Koruyucu gaz tüketimi TIG'e göre genellikle daha yüksektir.</p>

<h3>Malzemeye Göre Yöntem Tercih Rehberi</h3>
<p><strong>Karbon çelik (St37, St52):</strong> Genel imalat, konstrüksiyon ve seri üretimde MIG/MAG kaynak en ekonomik ve verimli seçimdir. TIG, sadece çok ince karbon çelikte veya özel estetik gereksinimlerinde tercih edilir.</p>
<p><strong>Paslanmaz çelik (304, 316L):</strong> Gıda sanayi, kimya sanayi ve estetik uygulamalarda TIG kaynak standarttır. Seri üretimde ve görünmeyen birleştirmelerde MIG kaynak da başarıyla uygulanır. Kök paso TIG, dolgu pasoları MIG ile yapılan kombine yaklaşım da yaygındır.</p>
<p><strong>Alüminyum:</strong> İnce alüminyum parçalarda (3mm altı) AC TIG kaynak vazgeçilmezdir. Kalın alüminyumda (6mm+) pulslu MIG kaynak verimli bir alternatif sunar. Alüminyum kaynağı her iki yöntemde de özel dikkat ve deneyim gerektirir.</p>

<h3>Maliyet Karşılaştırması</h3>
<p>TIG kaynak, düşük yığma hızı ve yüksek operatör becerisi nedeniyle MIG'e göre 2-4 kat daha yüksek işçilik maliyeti oluşturur. Ancak TIG ile elde edilen üstün kalite, bazı uygulamalarda kaynak sonrası taşlama ve düzeltme ihtiyacını ortadan kaldırarak toplam maliyeti dengeleyebilir. Seri üretimde MIG/MAG kaynak tartışmasız en ekonomik seçimdir. Düşük adetli, yüksek kaliteli işlerde TIG'in maliyet dezavantajı kabul edilebilir düzeydedir.</p>

<h3>Kuzey Şafak Lazer'de Kaynak Hizmetleri</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde hem TIG hem MIG/MAG kaynak kapasitesine sahibiz. Deneyimli kaynakçı kadromuz, projenizin malzeme türü, kalınlığı, estetik ve dayanım gereksinimlerine göre en uygun kaynak yöntemini belirliyor ve endüstriyel standartlarda uyguluyoruz. Lazer kesim ve CNC büküm hizmetlerimizle entegre çalışarak projenizi baştan sona tek çatı altında tamamlıyoruz.</p>`,
    relatedServices: ['kaynakli-imalat'],
    faq: [
      { q: 'Paslanmaz çelik için hangi kaynak yöntemi daha iyi?', a: 'Estetik, korozyon direnci ve sızdırmazlık gerektiren uygulamalarda TIG kaynak tercih edilir. Seri üretimde ve görünmeyen birleştirmelerde MIG kaynak da başarıyla uygulanır. Gıda sanayi uygulamalarında TIG kaynak genellikle zorunludur.' },
      { q: 'MIG kaynak dikişi TIG kadar dayanıklı mıdır?', a: 'Evet, her iki yöntem de doğru parametre ve dolgu malzemesi ile uygulandığında ana malzeme dayanımına eşit veya yakın mekanik dayanım sağlar. Fark daha çok estetik, gözeneklilik oranı ve ısı girdisi kontrolünde ortaya çıkar.' },
      { q: 'Alüminyum kaynak yapıyor musunuz?', a: 'Evet, AC TIG kaynak yöntemiyle alüminyum birleştirme yapıyoruz. AC akım, alüminyumun yüzeyindeki oksit tabakasını temizleyerek kaliteli kaynak yapılmasını sağlar. Alüminyum profil, levha ve sac malzemelerde hizmet veriyoruz.' },
      { q: 'Hangi kaynak yöntemi daha hızlıdır?', a: 'MIG/MAG kaynak, otomatik tel beslemesi sayesinde TIG\'e göre 3-5 kat daha yüksek kaynak hızına sahiptir. Seri üretimde ve kalın malzemelerde MIG/MAG önemli zaman ve maliyet tasarrufu sağlar.' },
      { q: 'İnce sac kaynak yapabiliyor musunuz?', a: 'Evet, TIG kaynak ile 0.5mm kalınlıktan itibaren ince sac kaynağı yapabiliyoruz. Pedal kontrollü akım ayarı ile ince malzemelerde deformasyon ve yanma riski minimuma indirilir.' }
    ]
  },

  {
    slug: 'fiber-lazer-co2-lazer-farki',
    title: 'Fiber Lazer vs CO2 Lazer: Hangisi Daha İyi? | Kuzey Şafak Lazer',
    h1: 'Fiber Lazer ile CO2 Lazer Arasındaki Farklar',
    metaDesc: 'Fiber lazer mi CO2 lazer mi? Verimlilik, kesim hızı, bakım maliyeti ve malzeme uyumluluğu karşılaştırması. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Fiber lazer</strong> ve <strong>CO2 lazer</strong>, metal işleme sektöründe kullanılan iki farklı lazer teknolojisidir. Son yıllarda fiber lazer, metal kesimde CO2 lazerin yerini hızla almaktadır. Bu sayfada her iki teknolojinin karşılaştırmasını bulabilirsiniz.</p>

<h3>Teknoloji Farkı</h3>
<p>CO2 lazer, karbon dioksit gazı karışımı içinde elektrik deşarjı ile lazer ışını üretir (10.6μm dalga boyu). Fiber lazer ise nadir toprak elementi (genellikle ytterbium) katkılı optik fiber içinde lazer ışını üretir (1.07μm dalga boyu).</p>

<h3>Verimlilik ve Enerji Tüketimi</h3>
<ul>
<li><strong>Fiber lazer verimi:</strong> %30-40 (elektrikten lazere dönüşüm)</li>
<li><strong>CO2 lazer verimi:</strong> %8-12</li>
<li><strong>Sonuç:</strong> Aynı kesim gücü için fiber lazer %60-70 daha az elektrik tüketir.</li>
</ul>

<h3>Kesim Hızı Karşılaştırması</h3>
<p>İnce metallerde (0.5-6mm) fiber lazer, CO2 lazere göre 2-3 kat daha hızlıdır. Orta kalınlıklarda (6-12mm) hız farkı azalır. 20mm üzeri kalınlıklarda her iki teknoloji benzer performans gösterir. Fiber lazerin kısa dalga boyu metallerde daha iyi emilir, bu da yüksek hızın temel nedenidir.</p>

<h3>Bakım Maliyeti</h3>
<p>CO2 lazerlerde ayna, lens ve türbin bakımı düzenli olarak gerekir; lazer gazı tüketimi vardır. Fiber lazerlerde hareketli optik parça yoktur, lazer gazı kullanılmaz, bakım maliyeti CO2'ye göre %80 daha düşüktür.</p>

<h3>Malzeme Uyumluluğu</h3>
<p>Fiber lazer tüm metal malzemelerde üstündür. CO2 lazer ise ahşap, akrilik, kumaş ve kağıt gibi organik malzemeleri kesebilir, fiber lazer bu malzemelerde kullanılmaz. Metal kesim odaklı tesislerde fiber lazer tartışmasız tercih olmuştur.</p>

<p>Kuzey Şafak Lazer olarak son teknoloji fiber lazer kesim makinemizle hizmet veriyoruz.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Fiber lazer neden CO2 lazerden daha hızlı keser?', a: 'Fiber lazerin 1.07μm dalga boyu, metallerde CO2 lazerin 10.6μm dalga boyuna göre çok daha iyi emilir. Bu yüksek emilim, aynı güçte daha hızlı kesim yapılmasını sağlar.' },
      { q: 'CO2 lazer artık kullanılmıyor mu?', a: 'Metal kesimde fiber lazer büyük oranda CO2 lazerin yerini almıştır. Ancak ahşap, akrilik, tekstil gibi organik malzeme kesiminde CO2 lazer hala vazgeçilmezdir.' },
      { q: 'Fiber lazer bakımı gerektirir mi?', a: 'Fiber lazerin bakım gereksinimi CO2 lazere göre çok düşüktür. Hareketli optik parça ve lazer gazı olmadığı için bakım maliyeti %80 daha azdır. Koruyucu cam ve nozul gibi sarf malzemeleri periyodik değişim gerektirir.' }
    ]
  },

  // =============================================
  // KATEGORI: FASON — "Fason X İstanbul" sayfaları
  // =============================================
  {
    slug: 'fason-lazer-kesim-istanbul',
    title: 'Fason Lazer Kesim İstanbul | İkitelli OSB | Kuzey Şafak Lazer',
    h1: 'Fason Lazer Kesim Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason lazer kesim hizmeti. Fiber lazer ile 0.5-25mm çelik, paslanmaz, alüminyum kesim. Aynı gün teslimat. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason lazer kesim</strong>, kendi üretim tesisinde lazer kesim makinesi bulunmayan firmaların, kesim işlerini dışarıdan temin etmesidir. Kuzey Şafak Lazer olarak İstanbul İkitelli Organize Sanayi Bölgesi'ndeki tesisimizde fason lazer kesim hizmeti sunuyoruz.</p>

<h3>Neden Kuzey Şafak Lazer'i Tercih Etmelisiniz?</h3>
<ul>
<li><strong>Merkezi konum:</strong> İkitelli OSB, İstanbul'un en büyük sanayi bölgesidir. Kolay ulaşım ve lojistik avantajı sağlar.</li>
<li><strong>Fiber lazer teknolojisi:</strong> 2000x6000mm kesim alanına sahip yüksek güçlü fiber lazer makinemiz ile hızlı ve hassas kesim.</li>
<li><strong>Geniş malzeme yelpazesi:</strong> Çelik, paslanmaz, alüminyum, galvaniz, bakır, pirinç ve hardox kesim.</li>
<li><strong>Hızlı teslimat:</strong> Acil siparişlerde aynı gün veya ertesi gün teslimat imkanı.</li>
<li><strong>Malzeme tedariki:</strong> Kendi malzemenizi getirebilir veya sizin adınıza uygun fiyatla tedarik edebiliriz.</li>
</ul>

<h3>Fason Lazer Kesim Süreci</h3>
<p>1. DXF/DWG dosyanızı e-posta veya WhatsApp üzerinden gönderin. 2. Malzeme cinsi, kalınlığı ve adet bilgisi verin. 3. Aynı gün içinde fiyat teklifi alın. 4. Onay sonrası en kısa sürede kesim ve teslimat.</p>

<h3>Kimler Fason Lazer Kesim Yaptırır?</h3>
<p>Makine imalatçıları, çelik konstrüksiyon firmaları, mobilya üreticileri, asansör firmaları, otomotiv yan sanayi, reklam ve tabela sektörü, HVAC firmaları ve daha birçok sektör fason lazer kesim hizmetimizden yararlanmaktadır.</p>

<h3>Ek Hizmetler</h3>
<p>Sadece kesim değil; CNC büküm, kaynaklı imalat ve CNC plazma kesim hizmetlerimizle projenizi başından sonuna kadar tek çatı altında tamamlayabiliyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: 'Fason lazer kesim için minimum sipariş adedi var mı?', a: 'Hayır, tek parçadan binlerce adede kadar her miktarda fason lazer kesim yapıyoruz.' },
      { q: 'Malzeme sizden temin edilebilir mi?', a: 'Evet, ihtiyacınız olan sacı sizin adınıza piyasa koşullarında tedarik edebiliriz. Alternatif olarak kendi malzemenizi de getirebilirsiniz.' },
      { q: 'Fason lazer kesim süresi ne kadardır?', a: 'Parça sayısı ve karmaşıklığına göre değişmekle birlikte, standart siparişlerde 1-2 iş günü, acil siparişlerde aynı gün teslimat mümkündür.' },
      { q: 'Fason lazer kesim yaptırmak için ne göndermem gerekir?', a: 'DXF veya DWG formatında kesim dosyası, malzeme cinsi, kalınlığı ve adet bilgisi yeterlidir. Dosyanız yoksa eskiz veya numune de kabul ediyoruz.' }
    ]
  },

  {
    slug: 'fason-cnc-bukum-istanbul',
    title: 'Fason CNC Büküm İstanbul | Abkant Pres | Kuzey Şafak Lazer',
    h1: 'Fason CNC Büküm (Abkant) Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason CNC büküm hizmeti. 3000mm büküm boyu, 220 ton kapasite. Çelik, paslanmaz, alüminyum sac büküm. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason CNC büküm</strong>, sac metal parçaların dışarıdan CNC abkant pres ile bükülme hizmeti alınmasıdır. Kuzey Şafak Lazer olarak İstanbul İkitelli OSB'de 220 ton kapasiteli CNC abkant presimizle fason büküm hizmeti veriyoruz.</p>

<h3>CNC Büküm Kapasitemiz</h3>
<ul>
<li><strong>Büküm uzunluğu:</strong> 3000mm</li>
<li><strong>Büküm kapasitesi:</strong> 220 ton</li>
<li><strong>Açı hassasiyeti:</strong> ±0.1°</li>
<li><strong>Malzeme kalınlığı:</strong> 0.5mm - 12mm (malzeme türüne göre)</li>
<li><strong>Malzeme türleri:</strong> Çelik, paslanmaz çelik, alüminyum, galvaniz, bakır</li>
</ul>

<h3>Fason Büküm Avantajlarımız</h3>
<p>CNC kontrollü makinemiz her parçada aynı hassasiyeti garanti eder. Programlanabilir arka dayama (backgauge) sistemi ile karmaşık çok adımlı büküm operasyonlarını hızla gerçekleştiriyoruz. Deneyimli operatörlerimiz özellikle dar toleranslı ve çok bükümlü parçalarda fark yaratır.</p>

<h3>Lazer Kesim + Büküm Entegrasyonu</h3>
<p>En büyük avantajımız, aynı tesis içinde lazer kesim ve büküm yapabilmemizdir. Kesim ve büküm arasında taşıma, bekleme ve iletişim kaybı yoktur. Bu entegrasyon hem süreyi kısaltır hem de boyutsal doğruluğu artırır.</p>

<h3>Hangi Sektörlere Hizmet Veriyoruz?</h3>
<p>Elektrik panosu üreticileri, makine imalatçıları, asansör firmaları, havalandırma (HVAC) şirketleri, mobilya üreticileri ve genel sac metal imalat firmaları düzenli olarak fason CNC büküm hizmetimizden yararlanmaktadır.</p>`,
    relatedServices: ['cnc-bukum', 'lazer-kesim'],
    faq: [
      { q: 'Fason büküm için kesim de yaptırabilir miyim?', a: 'Evet, lazer kesim + CNC büküm kombinasyonunu tek çatı altında sunuyoruz. Bu sayede hem zaman hem maliyet tasarrufu sağlarsınız.' },
      { q: 'En kalın kaç mm sac bükebilirsiniz?', a: 'Çelikte 12mm, paslanmazda 8mm, alüminyumda 10mm kalınlığa kadar büküm yapabiliyoruz. Kalınlık büküm uzunluğuyla ters orantılıdır.' },
      { q: 'Fason büküm için ne göndermem gerekir?', a: 'Teknik çizim (büküm açıları ve ölçüleri belirtilmiş), malzeme cinsi ve kalınlığı bilgisi gereklidir. Kesilmiş parçaları bize iletebilir veya kesimi de bizden yaptırabilirsiniz.' }
    ]
  },

  {
    slug: 'fason-kaynak-istanbul',
    title: 'Fason Kaynak ve İmalat İstanbul | Kuzey Şafak Lazer',
    h1: 'Fason Kaynak ve Kaynaklı İmalat - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason kaynak hizmeti. MIG, TIG kaynak ile çelik, paslanmaz, alüminyum imalat. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason kaynak</strong>, metal parçaların birleştirilmesi veya kaynaklı imalat işlerinin dışarıdan profesyonel bir atölye tarafından yapılmasıdır. Kuzey Şafak Lazer olarak İstanbul İkitelli OSB'de deneyimli kaynakçı kadromuzla fason kaynak ve kaynaklı imalat hizmeti veriyoruz.</p>

<h3>Kaynak Yöntemlerimiz</h3>
<ul>
<li><strong>MIG/MAG Kaynak:</strong> Çelik ve paslanmaz çelik seri üretim birleştirmelerinde. CO2 ve karışım gazı ile yüksek verimli kaynak.</li>
<li><strong>TIG Kaynak:</strong> Paslanmaz çelik ve alüminyumda estetik ve yüksek kaliteli birleştirmeler. Gıda sanayi ve mimari uygulamalarda tercih edilir.</li>
<li><strong>Elektrot Kaynak:</strong> Ağır konstrüksiyon ve saha montajı gerektiren işlerde.</li>
</ul>

<h3>Kaynaklı İmalat Alanlarımız</h3>
<p>Makine şasileri ve gövdeleri, çelik konstrüksiyon, platform ve merdiven imalatı, tank ve hazneler, taşıma ekipmanları, pano kutuları, korkuluk ve küpeşte, dekoratif metal işleri, özel amaçlı fikstürler ve daha fazlası.</p>

<h3>Kalite Güvencesi</h3>
<p>Tüm kaynak operasyonlarında uygun dolgu malzemesi, gaz ve parametre seçimi yapılır. Kritik uygulamalarda görsel muayene ve boyutsal kontrol standart sürecimize dahildir. İhtiyaç halinde NDT (tahribatsız muayene) testleri organize edilebilir.</p>

<h3>Entegre Hizmet Avantajı</h3>
<p>Lazer kesim, CNC büküm ve kaynak süreçlerinin tamamını tek tesiste gerçekleştiriyoruz. Bu entegrasyon, süreçler arası uyumu artırır, teslimat süresini kısaltır ve toplam maliyeti düşürür.</p>`,
    relatedServices: ['kaynakli-imalat', 'lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'Alüminyum TIG kaynak yapıyor musunuz?', a: 'Evet, AC TIG kaynak ile alüminyum birleştirme yapıyoruz. Alüminyum profil, levha ve sac malzemelerde kaynaklı imalat hizmeti veriyoruz.' },
      { q: 'Kaynaklı imalat projesi için ne göndermem gerekir?', a: 'Teknik çizim (montaj ve parça resimleri), malzeme listesi ve adet bilgisi gereklidir. Çiziminiz yoksa eskiz veya numune parça ile de çalışabiliriz.' },
      { q: 'Büyük konstrüksiyon işleri yapabiliyor musunuz?', a: 'Atölye kapasitemiz dahilinde çelik konstrüksiyon, platform ve makine gövdesi imalatı yapıyoruz. Büyük projeler için kapasite ve süre bilgisi teklif aşamasında verilir.' }
    ]
  },

  {
    slug: 'fason-plazma-kesim-istanbul',
    title: 'Fason CNC Plazma Kesim İstanbul | Kuzey Şafak Lazer',
    h1: 'Fason CNC Plazma Kesim Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason CNC plazma kesim. 6-50mm çelik sac plazma kesim hizmeti. Kalın saclarda ekonomik çözüm. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason CNC plazma kesim</strong>, özellikle kalın metal sacların ekonomik ve hızlı kesilmesi için tercih edilen dış kaynaklı bir imalat hizmetidir. Kuzey Şafak Lazer olarak İstanbul İkitelli OSB'de CNC plazma kesim makinemizle fason kesim hizmeti veriyoruz.</p>

<h3>CNC Plazma Kesim Kapasitemiz</h3>
<ul>
<li><strong>Kesim alanı:</strong> 2000 x 6000mm</li>
<li><strong>Kesim kalınlığı:</strong> 6mm - 50mm çelik</li>
<li><strong>Kesim toleransı:</strong> ±0.5mm</li>
<li><strong>Kesilebilen malzemeler:</strong> Çelik, paslanmaz çelik, alüminyum</li>
</ul>

<h3>Plazma Kesim Ne Zaman Tercih Edilir?</h3>
<p>15mm üzeri kalınlıklarda plazma kesim, lazer kesime göre önemli maliyet avantajı sağlar. Çelik konstrüksiyon sacları, makine gövdeleri, flanş ve bağlantı plakaları gibi kalın parçalarda CNC plazma en verimli seçenektir. Hassasiyet gereksiniminin ±0.5mm civarında olduğu uygulamalarda ideal performans sunar.</p>

<h3>Plazma + Lazer Kombinasyonu</h3>
<p>Aynı projede hem ince hem kalın parçalar bulunabilir. Kalın plakaları CNC plazma ile, ince sacları fiber lazer ile kesiyoruz. Bu yaklaşımla her parçanın en uygun yöntemle kesilmesini sağlayarak toplam maliyet optimize edilir.</p>

<h3>Hizmet Süreci</h3>
<p>Kesim dosyanızı (DXF/DWG) gönderin, malzeme ve kalınlık bilgisi verin, aynı gün teklif alın. Malzeme temini bizden veya sizden olabilir. Onay sonrası hızlı kesim ve teslimat.</p>`,
    relatedServices: ['cnc-plazma', 'lazer-kesim'],
    faq: [
      { q: 'Plazma kesim ile hangi kalınlıklarda çalışıyorsunuz?', a: '6mm ile 50mm arasında çelik ve paslanmaz çelik plazma kesim yapıyoruz. 6-15mm aralığında lazer kesim de alternatif olarak sunuyoruz.' },
      { q: 'Plazma kesim kenar kalitesi nasıldır?', a: 'CNC plazma kesim ile düzgün kenar kalitesi elde edilir. Gerekirse kesim sonrası taşlama hizmeti de sunabiliriz.' },
      { q: 'Hardox plazma ile kesilebilir mi?', a: 'Evet, Hardox 400 ve Hardox 450 gibi aşınma çeliklerini CNC plazma ile başarıyla kesiyoruz. Kalınlığa göre lazer kesim de tercih edilebilir.' }
    ]
  },

  {
    slug: 'fason-sac-metal-imalat-istanbul',
    title: 'Fason Sac Metal İmalat İstanbul | Kuzey Şafak Lazer',
    h1: 'Fason Sac Metal İmalat Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason sac metal imalat. Lazer kesim, CNC büküm ve kaynak bir arada. Komple sac metal çözüm. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason sac metal imalat</strong>, metal sac parçaların kesim, büküm, kaynak ve montaj süreçlerinin tamamının tek bir üretici tarafından gerçekleştirilmesidir. Kuzey Şafak Lazer olarak İkitelli OSB'deki tesisimizde komple sac metal imalat hizmeti sunuyoruz.</p>

<h3>Tek Çatı Altında Komple Çözüm</h3>
<p>Birçok firma kesim, büküm ve kaynak işlerini farklı tedarikçilere yaptırır. Bu durum koordinasyon zorluğu, boyutsal uyumsuzluk ve zaman kaybına neden olur. Kuzey Şafak Lazer'de tüm süreçler aynı tesis içinde, aynı kalite standartlarıyla gerçekleştirilir.</p>

<h3>Üretim Süreçlerimiz</h3>
<ul>
<li><strong>Lazer Kesim:</strong> 2000x6000mm fiber lazer ile 0.5-25mm çelik, paslanmaz, alüminyum kesim</li>
<li><strong>CNC Plazma:</strong> 6-50mm kalınlıklarda ekonomik kesim</li>
<li><strong>CNC Büküm:</strong> 3000mm boy, 220 ton kapasite abkant pres ile hassas büküm</li>
<li><strong>Kaynaklı İmalat:</strong> MIG/MAG ve TIG kaynak ile birleştirme ve montaj</li>
</ul>

<h3>Hizmet Verdiğimiz Sektörler</h3>
<p>Makine imalat, otomasyon, gıda sanayi, savunma sanayi, asansör, havalandırma, elektrik panosu, mobilya, otomotiv yan sanayi ve mimari dekorasyon sektörlerinde fason sac metal imalat hizmeti veriyoruz.</p>

<h3>Prototipten Seri Üretime</h3>
<p>Tek parça prototipten yüzlerce adetlik seri üretime kadar her sipariş büyüklüğünde hizmet veriyoruz. Minimum adet limiti yoktur. Prototip aşamasında destek, seri üretimde tutarlılık garantisi sunuyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat', 'cnc-plazma'],
    faq: [
      { q: 'Tasarım desteği sunuyor musunuz?', a: 'Evet, üretilebilirlik (DFM) konusunda teknik danışmanlık sağlıyoruz. Tasarımınızı üretim süreçlerine uygun hale getirmek için önerilerde bulunuyoruz.' },
      { q: 'Yüzey işlemi (boyama) yapıyor musunuz?', a: 'Boyama hizmetini anlaşmalı tedarikçilerimiz aracılığıyla organize ediyoruz. Toz boya, ıslak boya ve galvaniz kaplama seçenekleri mevcuttur.' },
      { q: 'Fason imalat süresi ne kadardır?', a: 'Basit kesim+büküm işlerinde 2-3 iş günü, kaynaklı imalatlarda 5-10 iş günü standart sürelerimizdir. Proje detayına göre kesin süre teklif ile birlikte bildirilir.' }
    ]
  },

  // =============================================
  // KATEGORI: TEKLİF — "X teklif" sayfaları
  // =============================================
  {
    slug: 'lazer-kesim-teklif',
    title: 'Lazer Kesim Teklif Al | Fiyatı Etkileyen Faktörler | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim Teklif Alın',
    metaDesc: 'Lazer kesim fiyatını etkileyen faktörler nelerdir? Projenize özel lazer kesim teklifi alın. Aynı gün fiyat bilgisi. Kuzey Şafak Lazer İstanbul.',
    category: 'teklif',
    content: `<p><strong>Lazer kesim fiyatı</strong>; malzeme cinsi, kalınlığı, kesim uzunluğu, parça adedi ve geometri karmaşıklığına göre projeye özel belirlenir. Her iş farklı parametreler içerdiğinden sabit bir fiyat listesi yerine projenize özel teklif sunuyoruz.</p>

<h3>Lazer Kesim Fiyatını Etkileyen Faktörler</h3>
<ul>
<li><strong>Malzeme cinsi:</strong> Çelik, paslanmaz çelik ve alüminyum farklı kesim hızlarına sahiptir. Paslanmaz ve alüminyum kesimde azot gazı kullanımı maliyeti etkiler.</li>
<li><strong>Malzeme kalınlığı:</strong> Kalınlık arttıkça kesim hızı düşer ve birim kesim maliyeti artar. 1mm çelik ile 20mm çelik arasında ciddi fiyat farkı oluşur.</li>
<li><strong>Kesim uzunluğu (metre):</strong> Lazer kesim fiyatlandırmasında temel birim genellikle metre başına (TL/m) hesaplanır. Toplam kesim metre miktarı maliyeti doğrudan etkiler.</li>
<li><strong>Parça adedi:</strong> Yüksek adetlerde nesting (dizilim) optimizasyonu ile fire azalır ve birim maliyet düşer.</li>
<li><strong>Geometri karmaşıklığı:</strong> Çok sayıda delik, dar kesim aralıkları veya keskin köşeler kesim süresini artırabilir.</li>
<li><strong>Malzeme temini:</strong> Malzeme sizden mi gelecek, biz mi tedarik edeceğiz? Tedarik dahil paket fiyat sunabiliyoruz.</li>
</ul>

<h3>Hızlı Teklif Nasıl Alınır?</h3>
<p>En doğru fiyat teklifi için aşağıdaki bilgileri bize iletin:</p>
<ul>
<li>Kesim dosyası (DXF, DWG, STEP veya PDF)</li>
<li>Malzeme cinsi ve kalınlığı</li>
<li>Adet bilgisi</li>
<li>Varsa ek işlem talebi (büküm, kaynak vb.)</li>
</ul>
<p>Teknik çiziminizi <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta yoluyla göndermeniz yeterlidir. İş yoğunluğuna göre genellikle <strong>aynı gün içinde</strong> fiyat teklifi dönüşü yapıyoruz.</p>

<h3>Neden Sabit Fiyat Listesi Yayınlamıyoruz?</h3>
<p>Her proje kendine özgü parametreler taşır. Genel bir fiyat listesi, müşterilerimize yanıltıcı bilgi verebilir. Projenize özel detaylı teklif hazırlayarak en doğru ve rekabetçi fiyatı sunmayı tercih ediyoruz.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Lazer kesim fiyatı nasıl hesaplanır?', a: 'Lazer kesim fiyatı genel olarak metre başına (TL/m) hesaplanır. Malzeme cinsi, kalınlığı, kesim uzunluğu ve adet çarpanları ile toplam fiyat oluşturulur. Kesin fiyat için dosyanızı gönderin.' },
      { q: 'Teklif almak için teknik çizim şart mı?', a: 'Tercihen evet, ancak eskiz, el çizimi veya numune parça ile de çalışabiliriz. DXF dosyası en hızlı ve doğru teklif alma yöntemidir.' },
      { q: 'Teklif ne kadar sürede gelir?', a: 'Standart siparişlerde aynı gün veya en geç ertesi iş günü içinde fiyat teklifi dönüşü yapıyoruz.' },
      { q: 'Malzeme dahil fiyat alabilir miyim?', a: 'Evet, malzeme tedariki dahil paket fiyat sunabiliyoruz. Kendi malzemenizi de getirebilirsiniz.' }
    ]
  },

  {
    slug: 'cnc-bukum-teklif',
    title: 'CNC Büküm Teklif Al | Abkant Pres Fiyat Faktörleri | Kuzey Şafak Lazer',
    h1: 'CNC Büküm (Abkant) Teklif Alın',
    metaDesc: 'CNC büküm fiyatını etkileyen faktörler nelerdir? Projenize özel abkant büküm teklifi alın. Kuzey Şafak Lazer İstanbul İkitelli.',
    category: 'teklif',
    content: `<p><strong>CNC büküm (abkant pres) fiyatı</strong>; malzeme cinsi, kalınlığı, büküm sayısı, büküm boyu ve parça adedine göre projeye özel hesaplanır. Her parçanın büküm karmaşıklığı farklı olduğundan, doğru fiyat ancak teknik çizim incelenerek verilebilir.</p>

<h3>CNC Büküm Fiyatını Etkileyen Faktörler</h3>
<ul>
<li><strong>Büküm sayısı:</strong> Her parçadaki büküm adımı sayısı doğrudan işlem süresini ve maliyeti etkiler. Tek bükümlü bir parça ile 6 bükümlü karmaşık bir kutu farklı fiyatlanır.</li>
<li><strong>Malzeme kalınlığı ve cinsi:</strong> Kalın ve sert malzemeler (paslanmaz, hardox) daha yüksek tonaj gerektirir ve büküm süresi artar.</li>
<li><strong>Büküm uzunluğu:</strong> Uzun bükümlerde kalıp boyutu ve makinenin büküm kapasitesi fiyatı etkiler.</li>
<li><strong>Tolerans gereksinimleri:</strong> Dar toleranslı parçalar daha fazla dikkat ve zaman gerektirir.</li>
<li><strong>Parça adedi:</strong> Yüksek adetlerde setup maliyeti parça başına düşer, birim fiyat azalır.</li>
<li><strong>Özel kalıp ihtiyacı:</strong> Standart V kalıp ile yapılamayan özel büküm profilleri ek kalıp maliyeti oluşturabilir.</li>
</ul>

<h3>Doğru Teklif İçin Gerekenler</h3>
<p>En hızlı ve doğru teklif için şu bilgileri iletin:</p>
<ul>
<li>Teknik çizim (büküm açıları ve ölçüleri belirtilmiş)</li>
<li>Malzeme cinsi ve kalınlığı</li>
<li>Adet bilgisi</li>
<li>Varsa ek işlem talebi (kesim, kaynak, boyama)</li>
</ul>

<h3>Lazer Kesim + Büküm Kombinasyonu</h3>
<p>Kesim ve büküm işini birlikte yaptırmanız durumunda, tek tedarikçi avantajı ile hem zaman hem maliyet tasarrufu sağlarsınız. Lazer kesim + CNC büküm paket teklifimiz için detayları bizimle paylaşın.</p>

<p>Teknik çiziminizi <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile gönderin, aynı gün fiyat teklifi alın.</p>`,
    relatedServices: ['cnc-bukum', 'lazer-kesim'],
    faq: [
      { q: 'CNC büküm fiyatı nasıl hesaplanır?', a: 'Büküm fiyatı genellikle parça başına büküm adımı sayısı, malzeme kalınlığı ve adet üzerinden hesaplanır. Kesin fiyat için teknik çizim göndermeniz gerekir.' },
      { q: 'Kesim yapılmış parçamı sadece büktürebilir miyim?', a: 'Evet, daha önce kesilmiş parçalarınızı bize getirerek sadece büküm hizmeti alabilirsiniz.' },
      { q: 'Büküm sonrası kaynak da yaptırabilir miyim?', a: 'Evet, büküm sonrası kaynaklı imalat da aynı tesis içinde gerçekleştirilir. Komple imalat paketi sunabiliyoruz.' }
    ]
  },

  {
    slug: 'kaynakli-imalat-teklif',
    title: 'Kaynaklı İmalat Teklif Al | Fiyat Faktörleri | Kuzey Şafak Lazer',
    h1: 'Kaynaklı İmalat Teklif Alın',
    metaDesc: 'Kaynaklı imalat fiyatını etkileyen faktörler nelerdir? Projenize özel kaynak ve imalat teklifi alın. Kuzey Şafak Lazer İstanbul.',
    category: 'teklif',
    content: `<p><strong>Kaynaklı imalat fiyatı</strong>; projenin karmaşıklığı, parça sayısı, kaynak yöntemi, malzeme türü ve işçilik süresine göre belirlenir. Kaynaklı imalat projeleri geniş bir yelpazeye yayıldığından, her proje özel olarak değerlendirilir.</p>

<h3>Kaynaklı İmalat Fiyatını Etkileyen Faktörler</h3>
<ul>
<li><strong>Proje karmaşıklığı:</strong> Basit bir birleştirme ile çok parçalı bir makine şasisi arasında büyük maliyet farkı vardır.</li>
<li><strong>Kaynak yöntemi:</strong> TIG kaynak, MIG/MAG kaynağa göre daha yavaş ve işçilik yoğundur, bu nedenle daha yüksek maliyetlidir.</li>
<li><strong>Malzeme türü:</strong> Paslanmaz çelik ve alüminyum kaynağı, karbon çeliğe göre daha özel dolgu malzemesi ve gaz gerektirir.</li>
<li><strong>Toplam kaynak uzunluğu:</strong> Kaynak dikişi uzunluğu arttıkça işlem süresi ve dolgu malzemesi tüketimi artar.</li>
<li><strong>Ön hazırlık:</strong> Kesim, büküm, taşlama, punta gibi ön hazırlık aşamaları toplam maliyeti etkiler.</li>
<li><strong>Kalite gereksinimleri:</strong> X-ray, ultrasonik test veya basınç testi gerektiren uygulamalarda ek maliyetler oluşabilir.</li>
</ul>

<h3>Teklif İçin Gerekenler</h3>
<p>Projeniz hakkında ne kadar detay paylaşırsanız teklif o kadar doğru olur:</p>
<ul>
<li>Montaj çizimi ve parça resimleri</li>
<li>Malzeme listesi (BOM)</li>
<li>Kaynak kalite gereksinimleri</li>
<li>Adet bilgisi</li>
<li>Termin (teslim süresi) beklentisi</li>
</ul>

<p>Projenizin detaylarını <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile paylaşın. Mümkün olan en kısa sürede projenizi değerlendirecek ve size özel teklif sunacağız.</p>`,
    relatedServices: ['kaynakli-imalat', 'lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'Kaynaklı imalat fiyatı nasıl hesaplanır?', a: 'Kaynaklı imalat fiyatı; kesim, büküm, kaynak işçiliği, malzeme ve sarf malzeme maliyetlerinin toplamıdır. Her proje ayrı değerlendirilir.' },
      { q: 'Sadece kaynak yaptırabilir miyim?', a: 'Evet, kesilmiş ve bükülmüş parçalarınızı bize getirerek sadece kaynak ve montaj hizmeti alabilirsiniz.' },
      { q: 'Teklif ne kadar sürede gelir?', a: 'Proje kapsamına bağlı olarak 1-3 iş günü içinde detaylı teklif hazırlıyoruz. Basit birleştirme işlerinde aynı gün teklif verilebilir.' }
    ]
  },

  {
    slug: 'plazma-kesim-teklif',
    title: 'CNC Plazma Kesim Teklif Al | Kuzey Şafak Lazer',
    h1: 'CNC Plazma Kesim Teklif Alın',
    metaDesc: 'CNC plazma kesim fiyatını etkileyen faktörler nelerdir? Kalın sac kesim projenize özel teklif alın. Kuzey Şafak Lazer İstanbul.',
    category: 'teklif',
    content: `<p><strong>CNC plazma kesim fiyatı</strong>; malzeme cinsi, kalınlığı, kesim uzunluğu ve parça adedine göre projeye özel hesaplanır. Plazma kesim özellikle kalın saclarda (15mm+) lazer kesime göre belirgin maliyet avantajı sunar.</p>

<h3>Plazma Kesim Fiyatını Etkileyen Faktörler</h3>
<ul>
<li><strong>Malzeme kalınlığı:</strong> 6mm ile 50mm arasında kesim yapıyoruz. Kalınlık arttıkça kesim hızı düşer ve gaz tüketimi artar.</li>
<li><strong>Malzeme cinsi:</strong> Çelik, paslanmaz çelik ve alüminyum farklı plazma gaz kombinasyonları gerektirir.</li>
<li><strong>Kesim uzunluğu:</strong> Toplam kesim uzunluğu (metre) fiyatın temel belirleyicisidir.</li>
<li><strong>Parça geometrisi:</strong> Düz kesim ve basit geometriler hızlı kesilirken, karmaşık konturlar ve çok sayıda iç kesim süreyi artırır.</li>
<li><strong>Malzeme temini:</strong> Malzeme temin dahil veya hariç fiyat verilebilir.</li>
</ul>

<h3>Plazma mı Lazer mi Daha Uygun?</h3>
<p>15mm altı kalınlıklarda genellikle lazer kesim hem daha hassas hem daha ekonomiktir. 15mm üzerinde plazma kesim maliyet avantajı sağlar. Projenizde her iki yönteme uygun parçalar varsa, karma teklif hazırlayarak toplam maliyeti optimize edebiliriz.</p>

<h3>Teklif İçin Gerekenler</h3>
<ul>
<li>Kesim dosyası (DXF, DWG veya ölçülü çizim)</li>
<li>Malzeme cinsi ve kalınlığı</li>
<li>Adet bilgisi</li>
</ul>

<p>Dosyanızı <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile gönderin. Aynı gün plazma kesim fiyat teklifinizi oluşturalım.</p>`,
    relatedServices: ['cnc-plazma', 'lazer-kesim'],
    faq: [
      { q: 'Plazma kesim lazer kesimden daha mı ucuz?', a: 'Kalın saclarda (15mm+) plazma kesim lazer kesime göre önemli ölçüde daha ekonomiktir. İnce saclarda ise lazer kesim hem kalite hem maliyet olarak avantajlıdır.' },
      { q: 'Plazma kesim toleransı ne kadardır?', a: 'CNC plazma kesim ile ±0.5mm tolerans sağlıyoruz. Daha dar tolerans gerektiren parçalar için lazer kesim öneririz.' },
      { q: 'Aynı projede plazma ve lazer kesim birlikte kullanılabilir mi?', a: 'Evet, kalın parçaları plazma, ince parçaları lazer ile keserek en ekonomik kombinasyonu sunuyoruz.' }
    ]
  },

  {
    slug: 'sac-metal-imalat-teklif',
    title: 'Sac Metal İmalat Teklif Al | Komple Çözüm | Kuzey Şafak Lazer',
    h1: 'Sac Metal İmalat Teklif Alın',
    metaDesc: 'Komple sac metal imalat teklifi alın. Kesim, büküm, kaynak bir arada. Projenize özel fiyatlandırma. Kuzey Şafak Lazer İstanbul İkitelli.',
    category: 'teklif',
    content: `<p><strong>Sac metal imalat fiyatı</strong>; projenin kapsamına göre kesim, büküm, kaynak ve yüzey işlemi aşamalarının toplam maliyetinden oluşur. Her aşamanın karmaşıklığı, malzeme türü ve adet bilgisi toplam fiyatı belirler.</p>

<h3>Fiyatı Etkileyen Temel Faktörler</h3>
<ul>
<li><strong>İşlem sayısı:</strong> Sadece kesim mi, kesim+büküm mü, yoksa kesim+büküm+kaynak mı? Her ek işlem toplam maliyete eklenir.</li>
<li><strong>Malzeme türü ve kalınlığı:</strong> Farklı malzemeler farklı işleme parametreleri gerektirir. Paslanmaz çelik ve alüminyum, karbon çeliğe göre daha yüksek maliyetlidir.</li>
<li><strong>Parça karmaşıklığı:</strong> Basit bir L büküm parçası ile çok bükümlü, kaynaklı bir kutu imalatı arasında önemli fark vardır.</li>
<li><strong>Toplam adet:</strong> Seri üretimde setup maliyetleri dağıtılır ve birim fiyat düşer.</li>
<li><strong>Yüzey işlemi:</strong> Toz boya, ıslak boya veya kaplama gereksinimi ek maliyet oluşturur.</li>
<li><strong>Teslimat süresi:</strong> Acil siparişlerde express üretim ücreti uygulanabilir.</li>
</ul>

<h3>Neden Tek Tedarikci Avantajı?</h3>
<p>Kesim, büküm ve kaynak işlemlerini farklı firmalara yaptırdığınızda taşıma maliyeti, bekleme süresi ve boyutsal uyumsuzluk riski oluşur. Kuzey Şafak Lazer'de tüm süreçler tek çatı altında gerçekleşir; bu durum hem maliyeti düşürür hem kaliteyi artırır.</p>

<h3>Teklif Nasıl Alınır?</h3>
<p>Projenizin teknik çizimlerini, malzeme listesini ve adet bilgisini <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile gönderin. Proje kapsamına göre 1-3 iş günü içinde detaylı teklif hazırlayalım.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat', 'cnc-plazma'],
    faq: [
      { q: 'Tek parça yaptırabilir miyim?', a: 'Evet, tek parçadan seri üretime kadar her adette hizmet veriyoruz. Minimum sipariş limiti uygulamıyoruz.' },
      { q: 'Tasarımım yok, sadece fikrim var. Yardımcı olabilir misiniz?', a: 'Eskiz, el çizimi veya sözlü tarif ile teknik ekibimiz çizim oluşturabilir ve üretilebilirlik önerisi sunabilir.' },
      { q: 'Teslim süresi ne kadardır?', a: 'Basit parçalarda 2-3 iş günü, kaynaklı imalatlarda 5-10 iş günü standart sürelerimizdir. Acil siparişlerde hızlandırılmış üretim mümkündür.' }
    ]
  },

  // =============================================
  // KATEGORI: BİLGİ — Ek bilgi sayfaları
  // =============================================
  {
    slug: 'cnc-nedir',
    title: 'CNC Nedir? Bilgisayarlı Sayısal Kontrol Rehberi | Kuzey Şafak Lazer',
    h1: 'CNC Nedir?',
    metaDesc: 'CNC nedir, ne işe yarar, nasıl çalışır? CNC tezgah çeşitleri ve sac metal imalatta CNC kullanımı rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>CNC</strong> (Computer Numerical Control - Bilgisayarlı Sayısal Kontrol), takım tezgahlarının bilgisayar programları aracılığıyla otomatik olarak kontrol edilmesi teknolojisidir. CNC ile kesim, büküm, tornalama, frezeleme gibi imalat işlemleri yüksek hassasiyet ve tekrarlanabilirlikle gerçekleştirilir.</p>

<h3>CNC Nasıl Çalışır?</h3>
<p>CNC makinelerde üretim süreci şu adımlardan oluşur: Önce CAD yazılımında parça tasarımı yapılır. Ardından CAM yazılımında takım yolları oluşturularak G-kod (makine dili) üretilir. Bu kod CNC kontrol ünitesine yüklenir ve makine otomatik olarak programı çalıştırır.</p>

<h3>Sac Metal İmalatta CNC Kullanımı</h3>
<ul>
<li><strong>CNC Lazer Kesim:</strong> Sac metal parçaların 2D kontur kesimi. DXF dosyasından otomatik nesting ve kesim.</li>
<li><strong>CNC Plazma Kesim:</strong> Kalın sacların bilgisayar kontrollü plazma ile kesilmesi.</li>
<li><strong>CNC Abkant Büküm:</strong> Sac parçaların programlanmış açılarda otomatik bükülmesi.</li>
<li><strong>CNC Pres:</strong> Delme, damgalama ve şekillendirme işlemleri.</li>
</ul>

<h3>CNC'nin Avantajları</h3>
<p>CNC teknolojisi; insan hatasını minimuma indirir, her parçada aynı kaliteyi garanti eder, karmaşık geometrileri sorunsuz üretir ve 7/24 çalışma imkanı sunar. Prototipten seri üretime geçiş sadece adet değişikliği ile mümkündür.</p>

<h3>Kuzey Şafak Lazer'de CNC Teknolojisi</h3>
<p>Tesisimizde CNC fiber lazer kesim, CNC plazma kesim ve CNC abkant pres makineleri ile tam otomasyon kapasitesinde üretim yapıyoruz. CNC kontrollü üretim süreçlerimiz, her parçada tutarlı kalite ve kısa teslimat süresi sağlıyor.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'cnc-plazma'],
    faq: [
      { q: 'CNC ile manuel imalat arasındaki fark nedir?', a: 'CNC imalat bilgisayar kontrollü ve otomatiktir, her parçada aynı hassasiyeti garanti eder. Manuel imalat operatör becerisine bağlıdır ve parçalar arası farklılık olabilir.' },
      { q: 'CNC makineler hangi dosya formatlarını okur?', a: 'CNC makineler G-kod ile çalışır. Kesim makineleri DXF/DWG, büküm makineleri özel büküm programları kullanır. Bu dosyalar CAD/CAM yazılımlarından oluşturulur.' },
      { q: 'CNC ile ne kadar hassas üretim yapılır?', a: 'CNC lazer kesimde ±0.1mm, CNC büküm de ±0.1° hassasiyet sağlanır. Bu değerler endüstriyel imalat standartlarının çok üzerindedir.' }
    ]
  },

  {
    slug: 'paslanmaz-celik-cesitleri',
    title: 'Paslanmaz Çelik Çeşitleri: 304, 316, 430 Farkları | Kuzey Şafak Lazer',
    h1: 'Paslanmaz Çelik Çeşitleri ve Farkları',
    metaDesc: 'Paslanmaz çelik çeşitleri: 304, 316, 316L, 430, 201 farkları nelerdir? Hangi paslanmaz çelik nerede kullanılır? Kuzey Şafak Lazer rehberi.',
    category: 'bilgi',
    content: `<p><strong>Paslanmaz çelik</strong>, minimum %10.5 krom içeren, korozyona ve paslanmaya dayanıklı çelik alaşımıdır. Farklı alaşım bileşimleri, farklı kullanım alanlarına uygun paslanmaz çelik çeşitleri oluşturur.</p>

<h3>304 Paslanmaz Çelik (18/8)</h3>
<p>En yaygın kullanılan paslanmaz çelik kalitesidir. %18 krom ve %8 nikel içerir. Gıda sanayi, mutfak ekipmanları, mimari uygulamalar ve genel amaçlı kullanımlarda tercih edilir. İyi korozyon direnci, mükemmel şekillendirilebilirlik ve kaynak edilebilirlik sunar.</p>

<h3>316 ve 316L Paslanmaz Çelik</h3>
<p>%16 krom, %10 nikel ve %2 molibden içerir. Molibden katkısı, özellikle klorür ortamlarında (deniz suyu, kimyasallar) korozyon direncini artırır. 316L düşük karbonlu versiyondur ve kaynak sonrası korozyon riskini minimuma indirir. Kimya sanayi, denizcilik ve medikal sektörde tercih edilir.</p>

<h3>430 Paslanmaz Çelik</h3>
<p>Ferritik yapıda, nikel içermeyen paslanmaz çeliktir. %16-18 krom içerir. 304'e göre daha ekonomiktir. İç mekan dekorasyon, beyaz eşya kaplamaları ve düşük korozyon riskli ortamlarda kullanılır. Manyetik özelliğe sahiptir.</p>

<h3>201 Paslanmaz Çelik</h3>
<p>Nikel oranı düşürülüp manganez ile takviye edilmiş ekonomik alternatiftir. 304'e benzer görünüm sunar ancak korozyon direnci daha düşüktür. Dekoratif uygulamalar ve iç mekan kullanımlarında maliyet avantajı sağlar.</p>

<h3>Hangi Paslanmaz Çeliği Seçmeliyim?</h3>
<p>Genel kullanım ve gıda sanayi: 304. Kimyasal ve deniz ortamı: 316/316L. Ekonomik iç mekan: 430 veya 201. Kuzey Şafak Lazer olarak tüm paslanmaz çelik kalitelerinde lazer kesim, büküm ve kaynak hizmeti veriyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: '304 ile 316 paslanmaz arasındaki fark nedir?', a: '316, molibden katkısı sayesinde 304\'ten daha yüksek korozyon direncine sahiptir. Özellikle klorürlü ortamlarda (deniz suyu, tuz) 316 tercih edilir.' },
      { q: 'Paslanmaz çelik gerçekten paslanmaz mı?', a: 'Paslanmaz çelik normal koşullarda paslanmaz. Ancak uygun olmayan ortam (yüksek klorür, yüksek sıcaklık) veya yanlış kalite seçiminde lokal korozyon oluşabilir.' },
      { q: '304 mü 430 mu daha ucuz?', a: '430 paslanmaz çelik, nikel içermediği için 304\'e göre önemli ölçüde daha ekonomiktir. Korozyon direnci yeterliyse 430 maliyet avantajı sağlar.' }
    ]
  },

  {
    slug: 'sac-kalinlik-tablosu',
    title: 'Sac Kalınlık Tablosu ve Ağırlık Hesaplama | Kuzey Şafak Lazer',
    h1: 'Sac Kalınlık Tablosu ve Ağırlık Hesaplama',
    metaDesc: 'Çelik, paslanmaz ve alüminyum sac kalınlık tablosu. Sac ağırlık hesaplama formülü. Lazer kesim kalınlık limitleri. Kuzey Şafak Lazer.',
    category: 'bilgi',
    content: `<p><strong>Sac kalınlık tablosu</strong>, metal imalat projelerinde doğru malzeme seçimi ve ağırlık hesaplaması için kullanılan temel bir referans kaynağıdır. Projenizin ağırlığını, maliyetini ve üretilebilirliğini doğru hesaplamak için aşağıdaki bilgileri kullanabilirsiniz.</p>

<h3>Yaygın Sac Kalınlıkları</h3>
<p>Sac metal imalatta en sık kullanılan standart kalınlıklar: 0.5mm, 0.8mm, 1mm, 1.2mm, 1.5mm, 2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm, 12mm, 15mm, 20mm ve 25mm'dir. Her kalınlık farklı uygulama alanlarına hitap eder.</p>

<h3>Sac Ağırlık Hesaplama Formülü</h3>
<p>Sac ağırlığı basit bir formülle hesaplanır:</p>
<p><strong>Ağırlık (kg) = Uzunluk (m) x Genişlik (m) x Kalınlık (mm) x Yoğunluk (kg/dm³)</strong></p>
<ul>
<li><strong>Çelik yoğunluğu:</strong> 7.85 kg/dm³</li>
<li><strong>Paslanmaz çelik yoğunluğu:</strong> 7.93-8.00 kg/dm³</li>
<li><strong>Alüminyum yoğunluğu:</strong> 2.71 kg/dm³</li>
<li><strong>Bakır yoğunluğu:</strong> 8.96 kg/dm³</li>
</ul>

<h3>Örnek Hesaplama</h3>
<p>1000mm x 2000mm boyutlarında 3mm çelik sac ağırlığı: 1.0 x 2.0 x 3 x 7.85 = 47.1 kg</p>

<h3>Lazer Kesim Kalınlık Limitleri</h3>
<ul>
<li><strong>Çelik (St37/St52):</strong> 0.5mm - 25mm</li>
<li><strong>Paslanmaz Çelik:</strong> 0.5mm - 20mm</li>
<li><strong>Alüminyum:</strong> 0.5mm - 12mm</li>
<li><strong>Galvaniz:</strong> 0.5mm - 6mm</li>
<li><strong>Bakır/Pirinç:</strong> 0.5mm - 6mm</li>
</ul>

<h3>Kalınlık Seçimi Nasıl Yapılır?</h3>
<p>Kalınlık seçiminde parçanın taşıyacağı yük, büküm gereksinimleri, estetik beklentiler ve maliyet birlikte değerlendirilir. Projenize uygun kalınlık konusunda teknik ekibimizden destek alabilirsiniz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'cnc-plazma'],
    faq: [
      { q: '1mm çelik sac metrekare ağırlığı kaçtır?', a: '1mm kalınlığında çelik sacın metrekare ağırlığı yaklaşık 7.85 kg\'dır (1.0 x 1.0 x 1 x 7.85).' },
      { q: 'En ince kaç mm lazer kesim yapılır?', a: 'Fiber lazer ile 0.5mm kalınlıktan başlayarak kesim yapabiliyoruz. İnce saclar çok yüksek hassasiyetle kesilir.' },
      { q: 'Standart sac boyutları nelerdir?', a: 'Piyasada en yaygın sac boyutları 1000x2000mm, 1250x2500mm ve 1500x3000mm\'dir. Kuzey Şafak Lazer olarak 2000x6000mm\'ye kadar kesim yapabiliyoruz.' }
    ]
  },

  {
    slug: 'metal-isleme-yontemleri',
    title: 'Metal İşleme Yöntemleri: Kapsamlı Rehber | Kuzey Şafak Lazer',
    h1: 'Metal İşleme Yöntemleri',
    metaDesc: 'Metal işleme yöntemleri nelerdir? Kesme, bükme, kaynak, döküm ve talaşlı imalat. Endüstriyel metal işleme rehberi. Kuzey Şafak Lazer.',
    category: 'bilgi',
    content: `<p><strong>Metal işleme</strong>, ham metal malzemelerin çeşitli yöntemlerle şekillendirilmesi, kesilmesi, birleştirilmesi ve yüzey işlemi uygulanarak kullanılabilir parça veya ürün haline dönüştürülmesi sürecidir. Endüstriyel üretimde onlarca farklı metal işleme yöntemi kullanılır.</p>

<h3>Termal Kesim Yöntemleri</h3>
<ul>
<li><strong>Lazer Kesim:</strong> Yüksek hassasiyet, dar kerf, minimum ısı etkisi. İnce-orta kalınlıklarda en çok tercih edilen yöntem.</li>
<li><strong>Plazma Kesim:</strong> Kalın metallerde ekonomik kesim. İletken tüm metallerle uyumlu.</li>
<li><strong>Oksi-Yakıt Kesim:</strong> Çok kalın çelikte (100mm+) kullanılır. Sadece karbon çelikte etkili.</li>
<li><strong>Su Jeti Kesim:</strong> Isı etkisi sıfır, her malzemede kullanılabilir ancak yavaş.</li>
</ul>

<h3>Şekillendirme Yöntemleri</h3>
<ul>
<li><strong>Abkant Büküm:</strong> Sac metalin açısal olarak şekillendirilmesi.</li>
<li><strong>Rulo Büküm:</strong> Silindirik formların elde edilmesi.</li>
<li><strong>Derin Çekme:</strong> Sacın kalıp içinde üç boyutlu forma çekilmesi.</li>
<li><strong>Damgalama (Stamping):</strong> Seri üretimde hızlı şekillendirme.</li>
</ul>

<h3>Birleştirme Yöntemleri</h3>
<p>Kaynak (MIG, TIG, elektrot), perçinleme, vidalı birleştirme, yapıştırma ve lehimleme metal parçaların birleştirilmesinde kullanılan temel yöntemlerdir. Uygulama gereksinimlerine göre en uygun yöntem seçilir.</p>

<h3>Yüzey İşleme</h3>
<p>Kumlama, boyama (toz boya, ıslak boya), galvaniz kaplama, anotlama (alüminyum), nikelaj, kromlama ve elektropolisaj gibi yüzey işlemleri metal parçalara korozyon direnci ve estetik görünüm kazandırır.</p>

<p>Kuzey Şafak Lazer olarak lazer kesim, plazma kesim, CNC büküm ve kaynaklı imalat hizmetlerimizle metal işleme sürecinizin tamamında yanınızdayız.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: 'Hangi metal işleme yöntemi en hassastır?', a: 'Kesim yöntemleri arasında lazer kesim (±0.1mm), talaşlı imalat yöntemleri arasında CNC frezeleme en yüksek hassasiyeti sağlar.' },
      { q: 'Sac metal ile blok metal işleme arasındaki fark nedir?', a: 'Sac metal imalat düz sacların kesilip bükülmesiyle 3D formlar oluşturur. Blok metal işleme (talaşlı imalat) ise dolu malzemeden talaş kaldırarak parça üretir.' },
      { q: 'Projem için hangi yöntem uygun?', a: 'Doğru yöntem seçimi; parça geometrisi, malzeme türü, kalınlık, tolerans ve adet gereksinimine bağlıdır. Projenizi paylaşın, en uygun yöntemi birlikte belirleyelim.' }
    ]
  },

  {
    slug: 'lazer-kesim-toleranslari',
    title: 'Lazer Kesim Toleransları ve Hassasiyet | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim Toleransları ve Hassasiyet Değerleri',
    metaDesc: 'Lazer kesim hassasiyeti ve toleransları: kalınlığa göre tolerans tablosu, kerf genişliği, tekrarlanabilirlik. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Lazer kesim toleransı</strong>, kesim işleminde gerçekleşen boyutsal sapmanın kabul edilebilir aralığını ifade eder. Fiber lazer kesim, termal kesim yöntemleri içinde en yüksek hassasiyeti sunar. Doğru tolerans bilgisi, tasarım aşamasında kritik öneme sahiptir.</p>

<h3>Fiber Lazer Kesim Tolerans Değerleri</h3>
<ul>
<li><strong>0.5-3mm kalınlık:</strong> ±0.05-0.1mm</li>
<li><strong>3-6mm kalınlık:</strong> ±0.1mm</li>
<li><strong>6-12mm kalınlık:</strong> ±0.1-0.15mm</li>
<li><strong>12-20mm kalınlık:</strong> ±0.15-0.2mm</li>
<li><strong>20-25mm kalınlık:</strong> ±0.2-0.3mm</li>
</ul>

<h3>Kerf Genişliği (Kesim Ağzı)</h3>
<p>Lazer ışınının malzemede açtığı kesim boşluğuna kerf denir. Fiber lazer kesimde kerf genişliği genellikle 0.1-0.3mm arasındadır. CNC yazılımı kerf değerini otomatik olarak kompanse eder, böylece parça boyutları doğru kalır.</p>

<h3>Tekrarlanabilirlik</h3>
<p>CNC lazer kesimin en büyük avantajlarından biri yüksek tekrarlanabilirliktir. Aynı program ile kesilen parçalar arasında boyutsal fark ±0.05mm'den azdır. Bu özellik, seri üretimde parça değiştirilebilirliğini garanti eder.</p>

<h3>Toleransı Etkileyen Faktörler</h3>
<p>Malzeme kalınlığı arttıkça tolerans genişler. Malzeme düzlüğü (sac eğriliği), ısıl genleşme, makine kalibrasyonu ve kesim parametreleri toleransı etkileyen ana faktörlerdir. Çok dar tolerans gerektiren parçalarda tasarım aşamasında danışmanlık almanızı öneriyoruz.</p>

<h3>Plazma Kesim ile Tolerans Karşılaştırması</h3>
<p>Lazer kesim: ±0.1mm genel tolerans. Plazma kesim: ±0.5-1mm. Bu nedenle tolerans kritik parçalarda lazer kesim tercih edilmelidir.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Lazer kesim ile ±0.05mm tolerans mümkün müdür?', a: 'İnce saclarda (0.5-3mm) ±0.05mm tolerans elde edilebilir. Kalınlık arttıkça tolerans değeri genişler. Projenizin tolerans gereksinimini önceden paylaşın.' },
      { q: 'Kerf genişliği parça boyutunu etkiler mi?', a: 'CNC yazılımı kerf kompansasyonu uygulayarak parça boyutlarının doğru kalmasını sağlar. Tasarım aşamasında kerf ile ilgili bir düzeltme yapmanız gerekmez.' },
      { q: 'Çok hassas parçalar için ne önerirsiniz?', a: '±0.05mm altı tolerans gereken parçalarda lazer kesim sonrası CNC frezeleme ile son işlem yapılması önerilir. Lazer kesim kaba işlem, CNC frezeleme hassas işlem olarak uygulanabilir.' }
    ]
  },

  {
    slug: 'ikitelli-osb-metal-isleme',
    title: 'İkitelli OSB Metal İşleme Hizmetleri | Kuzey Şafak Lazer',
    h1: 'İkitelli OSB Metal İşleme ve Sac İmalat',
    metaDesc: 'İkitelli Organize Sanayi Bölgesi\'nde metal işleme ve sac imalat. Lazer kesim, plazma, büküm, kaynak hizmetleri. Kuzey Şafak Lazer İkitelli.',
    category: 'bilgi',
    content: `<p><strong>İkitelli Organize Sanayi Bölgesi</strong> (İkitelli OSB), İstanbul'un Başakşehir ilçesinde yer alan Türkiye'nin en büyük organize sanayi bölgelerinden biridir. Binlerce üretim tesisine ev sahipliği yapan İkitelli OSB, metal işleme sektörünün de İstanbul'daki en önemli merkezidir.</p>

<h3>Kuzey Şafak Lazer - İkitelli OSB</h3>
<p>Kuzey Şafak Lazer olarak İkitelli OSB'deki modern tesisimizde kapsamlı metal işleme hizmetleri sunuyoruz. Merkezi konumumuz, İstanbul'un her noktasından kolay erişim ve hızlı teslimat avantajı sağlar.</p>

<h3>Sunduğumuz Hizmetler</h3>
<ul>
<li><strong>Fiber Lazer Kesim:</strong> 2000x6000mm, çelik 25mm, paslanmaz 20mm, alüminyum 12mm kapasiteli.</li>
<li><strong>CNC Plazma Kesim:</strong> 6-50mm kalınlıklarda çelik ve paslanmaz kesim.</li>
<li><strong>CNC Abkant Büküm:</strong> 3000mm boy, 220 ton kapasite.</li>
<li><strong>Kaynaklı İmalat:</strong> MIG/MAG ve TIG kaynak ile endüstriyel imalat.</li>
</ul>

<h3>İkitelli OSB'nin Avantajları</h3>
<p>İkitelli OSB'de bulunmamız; çevre sanayicilere hızlı hizmet, malzeme tedarikinde lojistik avantaj, yan sanayi erişimi ve rekabetçi fiyatlandırma sunmamızı mümkün kılar. Bölgedeki yoğun sanayi ağı, her türlü metal imalat projesinin hızla gerçekleştirilmesini sağlar.</p>

<h3>Ulaşım</h3>
<p>İkitelli OSB; TEM ve E-5 otoyollarına, Atatürk Havalimanı'na ve İstanbul'un ana lojistik hatlarına yakın konumdadır. İstanbul'un Avrupa ve Anadolu yakasından kolay ulaşılabilir konumuyla müşterilerimize zaman tasarrufu sağlıyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: 'İkitelli OSB\'ye nasıl ulaşılır?', a: 'İkitelli OSB, İstanbul Başakşehir\'de TEM otoyolu çıkışında yer alır. Toplu taşıma ile metro (M3 hattı) ve metrobüs ile ulaşılabilir.' },
      { q: 'Teslimat yapıyor musunuz?', a: 'İstanbul içi teslimat organize ediyoruz. Büyük siparişlerde ücretsiz, küçük siparişlerde uygun fiyatlı teslimat hizmeti mevcuttur.' },
      { q: 'Tesisi ziyaret edebilir miyim?', a: 'Evet, mesai saatleri içinde tesisimizi ziyaret edebilir, makinelerimizi görebilir ve projenizi yerinde değerlendirebilirsiniz. Randevu için 0555 000 83 04 numarasını arayabilirsiniz.' }
    ]
  },

  {
    slug: 'sac-bukum-teknikleri',
    title: 'Sac Büküm Teknikleri ve Kuralları | Kuzey Şafak Lazer',
    h1: 'Sac Büküm Teknikleri ve Tasarım Kuralları',
    metaDesc: 'Sac büküm teknikleri, minimum büküm yarıçapı, büküm payı hesaplama ve tasarım kuralları. CNC büküm rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Sac büküm</strong>, düz metal sacların CNC abkant preste veya elle işletilen bükme makinelerinde açısal olarak şekillendirilmesi işlemidir. Doğru büküm sonuçları için tasarım aşamasında bazı temel kuralların bilinmesi gerekir.</p>

<h3>Minimum Büküm Yarıçapı</h3>
<p>Her malzemenin minimum iç büküm yarıçapı vardır. Bu değerin altında büküm yapılırsa malzeme çatlar. Genel kural olarak: çelik ve paslanmaz çelikte minimum iç yarıçap = malzeme kalınlığı (t), alüminyumda minimum iç yarıçap = 0.5 x t olarak kabul edilir. Örneğin 2mm çeliğin minimum iç büküm yarıçapı 2mm'dir.</p>

<h3>Büküm Payı (Bend Allowance)</h3>
<p>Sac bükülürken dış yüzey gerilir, iç yüzey sıkışır. Bu nedenle açınım hesabında büküm payı dikkate alınmalıdır. K-faktörü (genellikle 0.33-0.50 arası) ile hesaplanan büküm payı, doğru açınım boyutunu verir. CAD yazılımları bu hesabı otomatik yapar.</p>

<h3>Tasarım Kuralları</h3>
<ul>
<li><strong>Kenar-büküm mesafesi:</strong> Büküm çizgisi ile sac kenarı arasında en az 2 x malzeme kalınlığı mesafe bırakın.</li>
<li><strong>Delik-büküm mesafesi:</strong> Delik kenarı ile büküm çizgisi arasında en az 2.5 x t + büküm yarıçapı mesafe bırakın.</li>
<li><strong>Geri yaylanma (Springback):</strong> Malzeme bükümden sonra hafifçe geri açılır. CNC abkant preslerde bu otomatik kompanse edilir.</li>
<li><strong>Büküm yönü:</strong> Hadde yönüne dik büküm, çatlama riskini azaltır.</li>
</ul>

<h3>Yaygın Büküm Profilleri</h3>
<p>V büküm (en yaygın), U büküm, Z büküm, kutu büküm ve silindirik büküm en çok kullanılan büküm profilleridir. CNC abkant preste çok adımlı büküm ile karmaşık 3D formlar elde edilebilir.</p>`,
    relatedServices: ['cnc-bukum'],
    faq: [
      { q: 'Minimum büküm yarıçapı nedir?', a: 'Genel kural olarak minimum iç büküm yarıçapı, malzeme kalınlığına eşittir. 2mm çelikte minimum R2, 3mm çelikte minimum R3. Alüminyumda daha dar yarıçaplar mümkündür.' },
      { q: 'Büküm payı nedir, neden önemlidir?', a: 'Büküm payı, sacın bükülürken uzaması nedeniyle açınım hesabına eklenen değerdir. Doğru büküm payı hesaplanmazsa bitmiş parça boyutları hatalı olur.' },
      { q: 'Büküm sonrası parça boyutu neden farklı çıkıyor?', a: 'Yanlış K-faktörü, geri yaylanma kompansasyonu eksikliği veya hatalı açınım hesabı boyutsal sapmalara neden olur. Profesyonel CNC büküm ile bu sorunlar minimuma indirilir.' }
    ]
  },

  {
    slug: 'nesting-nedir',
    title: 'Nesting Nedir? Lazer Kesimde Malzeme Optimizasyonu | Kuzey Şafak Lazer',
    h1: 'Nesting Nedir? Malzeme Optimizasyonu',
    metaDesc: 'Nesting nedir, lazer kesimde malzeme firesi nasıl azaltılır? Otomatik nesting yazılımları ve faydaları. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Nesting</strong> (yerleşim optimizasyonu), lazer kesim ve plazma kesimde parçaların sac üzerine en verimli şekilde dizilmesi işlemidir. Amaç, malzeme firesini (atık) minimuma indirerek ham madde maliyetini düşürmektir.</p>

<h3>Nesting Neden Önemlidir?</h3>
<p>Metal sac maliyeti, toplam imalat bedelinin önemli bir kısmını oluşturur. İyi bir nesting ile fire oranı %5-15 aralığına düşürülebilirken, kötü yerleşimde bu oran %30-40'lara çıkabilir. Özellikle pahalı malzemelerde (paslanmaz çelik, alüminyum) nesting optimizasyonu ciddi maliyet tasarrufu sağlar.</p>

<h3>Nesting Yöntemleri</h3>
<ul>
<li><strong>Manuel nesting:</strong> Operatör parçaları elle yerleştirir. Basit ve az parçalı işlerde kullanılır ancak optimize değildir.</li>
<li><strong>Otomatik nesting:</strong> Yazılım algoritmaları parçaları otomatik olarak en verimli şekilde diziler. Genetik algoritma ve yapay zeka tabanlı nesting motorları ile %90+ malzeme kullanım oranı sağlanabilir.</li>
<li><strong>True shape nesting:</strong> Parçaların gerçek geometrisi dikkate alınarak dikdörtgen sınırları dışında iç içe yerleşim yapılır. En yüksek verimlilik bu yöntemle elde edilir.</li>
</ul>

<h3>Nesting'i Etkileyen Faktörler</h3>
<p>Parça geometrisi (düzensiz şekiller daha zor dizilir), parça sayısı ve çeşitliliği, minimum parçalar arası mesafe (web width), sac boyutu ve malzemenin hadde yönü nesting verimliliğini etkileyen ana faktörlerdir.</p>

<h3>Kuzey Şafak Lazer'de Nesting Uygulaması</h3>
<p>Profesyonel nesting yazılımı kullanarak her kesim işinde malzeme verimliliğini maksimize ediyoruz. Müşterilerimize fire oranı bilgisi ile birlikte şeffaf fiyatlandırma sunuyoruz. Yüksek adetli siparişlerde nesting optimizasyonu ile önemli maliyet tasarrufu sağlıyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma'],
    faq: [
      { q: 'Nesting maliyeti ayrı hesaplanır mı?', a: 'Hayır, nesting optimizasyonu standart hizmetimize dahildir. Her kesim işinde otomatik nesting uygulayarak müşterilerimize en düşük fire oranını sunuyoruz.' },
      { q: 'Fire oranı ne kadar olur?', a: 'Parça geometrisine ve adetine bağlı olarak %5-20 arasında fire oluşur. Yüksek adetlerde ve düzenli geometrilerde fire oranı minimuma iner.' },
      { q: 'Firem olan malzemeyi kullanabilir misiniz?', a: 'Evet, elinizde kalan artık sacları değerlendirebiliriz. Parça boyutlarınız artık saca sığıyorsa, fire malzemenizi kullanarak maliyetinizi düşürebiliriz.' }
    ]
  }

];

// Slug -> InfoPage map for fast lookup
export const INFO_PAGE_MAP: Record<string, InfoPage> = {};
INFO_PAGES.forEach(p => INFO_PAGE_MAP[p.slug] = p);
