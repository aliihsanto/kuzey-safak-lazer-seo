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
    content: `<p><strong>Fiber lazer</strong> ve <strong>CO2 lazer</strong>, endüstriyel malzeme kesiminde kullanılan iki farklı lazer teknolojisidir. Son on yılda fiber lazer teknolojisi, metal kesim alanında CO2 lazerin yerini büyük ölçüde almıştır ve bu dönüşüm halen devam etmektedir. Her iki teknoloji de lazer ışını üretir ancak üretim mekanizması, dalga boyu, enerji verimliliği, bakım maliyeti ve malzeme uyumluluğu açısından temel farklılıklar taşır. Bu kapsamlı karşılaştırma rehberinde, her iki lazer teknolojisinin teknik özelliklerini inceleyerek metal kesim projeleriniz için en doğru seçimi yapmanıza yardımcı oluyoruz.</p>

<h3>Teknoloji ve Çalışma Prensibi Farkı</h3>
<p><strong>CO2 Lazer:</strong> Karbondioksit (CO2), azot (N2) ve helyum (He) gaz karışımı içinde elektrik deşarjı (RF veya DC excitation) ile lazer ışını üretir. Dalga boyu 10.6μm (kızılötesi) olup, lazer ışını aynalar ve lens sistemi ile kesim kafasına iletilir. CO2 lazer teknolojisi 1964'te icat edilmiş ve 1970'lerden itibaren endüstriyel kesimde kullanılmaya başlanmıştır. Olgun ve iyi bilinen bir teknolojidir.</p>
<p><strong>Fiber Lazer:</strong> Ytterbium (Yb) gibi nadir toprak elementi katkılı optik fiber içinde diyot pompalama ile lazer ışını üretir. Dalga boyu 1.07μm (yakın kızılötesi) olup, lazer ışını optik fiber kablo ile kesim kafasına iletilir; ayna veya lens sistemi gerekmez. Fiber lazer teknolojisi 2000'li yılların başında ticarileşmiş ve 2010 sonrasında metal kesim pazarının dominant teknolojisi haline gelmiştir.</p>

<h3>Detaylı Karşılaştırma Tablosu</h3>
<table>
<tr><th>Kriter</th><th>Fiber Lazer</th><th>CO2 Lazer</th></tr>
<tr><td>Dalga boyu</td><td>1.07μm</td><td>10.6μm</td></tr>
<tr><td>Elektrik-lazer verimi</td><td>%30-40</td><td>%8-12</td></tr>
<tr><td>Metal kesim hızı (ince)</td><td>2-3x daha hızlı</td><td>Referans</td></tr>
<tr><td>Metal kesim hızı (kalın)</td><td>Benzer</td><td>Benzer</td></tr>
<tr><td>Bakım maliyeti</td><td>Çok düşük</td><td>Yüksek</td></tr>
<tr><td>Lazer gazı tüketimi</td><td>Yok</td><td>Var (CO2, N2, He)</td></tr>
<tr><td>Optik yol</td><td>Fiber kablo</td><td>Ayna/lens sistemi</td></tr>
<tr><td>Metal emilim oranı</td><td>Çok yüksek</td><td>Düşük</td></tr>
<tr><td>Yansıtıcı metal kesimi</td><td>İyi (bakır, pirinç)</td><td>Zor ve riskli</td></tr>
<tr><td>Organik malzeme kesimi</td><td>Uygun değil</td><td>Mükemmel</td></tr>
<tr><td>Ömür beklentisi</td><td>100.000+ saat</td><td>20.000-30.000 saat</td></tr>
<tr><td>İlk yatırım maliyeti</td><td>Orta-yüksek</td><td>Orta</td></tr>
<tr><td>Toplam sahip olma maliyeti</td><td>Düşük</td><td>Yüksek</td></tr>
</table>

<h3>Verimlilik ve Enerji Tüketimi</h3>
<p>Fiber lazer ve CO2 lazer arasındaki en çarpıcı fark enerji verimliliğindedir. Fiber lazer %30-40 elektrik-lazer dönüşüm verimine sahipken, CO2 lazerin verimi yalnızca %8-12'dir. Bu, aynı kesim gücü (örneğin 4 kW lazer çıkışı) için fiber lazerin %60-70 daha az elektrik tüketmesi anlamına gelir. Fiber lazer rezonatörü daha az ısı ürettiğinden, soğutma sistemi de daha küçük ve daha az enerji tüketen boyuttadır. Yıllık enerji tasarrufu, işletme büyüklüğüne göre önemli maliyet avantajı oluşturur.</p>

<h3>Kesim Hızı Karşılaştırması</h3>
<p>İnce metallerde (0.5-6mm) fiber lazer, CO2 lazere göre 2-3 kat daha hızlı kesim yapar. Bunun temel nedeni, fiber lazerin 1.07μm dalga boyunun metallerde CO2 lazerin 10.6μm dalga boyuna göre çok daha yüksek emilim oranına sahip olmasıdır. Çelikte emilim oranı fiber lazer için yaklaşık %35, CO2 lazer için yaklaşık %5'tir. Orta kalınlıklarda (6-12mm) hız farkı azalmaya başlar. 20mm üzeri kalınlıklarda her iki teknoloji benzer performans gösterir; çünkü kalın malzemede kesim hızı ışın emiliminden çok termal penetrasyon mekanizmasına bağlıdır.</p>

<h3>Bakım Maliyeti ve İşletme Giderleri</h3>
<p>CO2 lazerlerde optik yol üzerindeki aynalar ve odaklama lensi periyodik temizlik ve değişim gerektirir. Lazer rezonatöründeki türbin (blower) bakımı yapılmalıdır. CO2, N2 ve He lazer gazı sürekli tüketilir. Toplam bakım maliyeti yıllık bazda önemli bir gider kalemidir. Fiber lazerlerde ise lazer ışını optik fiber kablo ile iletildiğinden hareketli ayna veya lens sistemi yoktur. Lazer gazı kullanılmaz. Diyot pompa modüllerinin ömrü 100.000+ saattir (CO2 lazerlerin 3-5 katı). Bakım maliyeti CO2 lazere göre %80'e kadar düşüktür. Sadece koruyucu cam, nozul ve filtre gibi sarf malzemeleri periyodik değişim gerektirir.</p>

<h3>Malzeme Uyumluluğu</h3>
<p><strong>Metal kesim:</strong> Fiber lazer, tüm metal malzemelerde CO2 lazere göre üstün performans gösterir. Özellikle bakır, pirinç ve alüminyum gibi yansıtıcı metallerde fiber lazer çok daha güvenli ve verimlidir (CO2 lazer geri yansıma nedeniyle rezonatör hasarı riski taşır).</p>
<p><strong>Organik malzemeler:</strong> CO2 lazerin 10.6μm dalga boyu, ahşap, akrilik (pleksiglas), MDF, kumaş, deri, kağıt ve plastik gibi organik malzemelerde mükemmel emilir. Bu malzemelerin kesimi, gravürü ve markalanması CO2 lazer ile yapılır. Fiber lazerin 1.07μm dalga boyu bu malzemelerde emilmez ve kesim yapılamaz.</p>

<h3>Hangi Durumda Hangi Teknoloji Tercih Edilmeli?</h3>
<p><strong>Fiber lazer tercih edilmeli:</strong> Metal kesim odaklı tüm uygulamalarda, özellikle ince-orta kalınlıklarda yüksek hız ve verimlilik gerektiğinde, bakır ve pirinç gibi yansıtıcı metallerde, düşük işletme maliyeti ve minimum bakım istendiğinde, 7/24 yüksek kapasite üretim yapılacağında.</p>
<p><strong>CO2 lazer tercih edilmeli:</strong> Ahşap, akrilik, tekstil, deri, kağıt ve plastik gibi organik malzeme kesiminde, hem metal hem organik malzeme kesen karma tesislerde, gravür ve markalama uygulamalarında.</p>

<h3>Kuzey Şafak Lazer'de Fiber Lazer Teknolojisi</h3>
<p>Kuzey Şafak Lazer olarak İstanbul İkitelli OSB'deki tesisimizde son teknoloji yüksek güçlü fiber lazer kesim makinemizle hizmet veriyoruz. Metal kesim odaklı üretim yapımız için fiber lazer, üstün hız, hassasiyet, enerji verimliliği ve düşük bakım maliyeti ile en doğru teknoloji tercihidir. 2000x6000mm kesim alanı ve geniş kalınlık kapasitemiz ile çelik, paslanmaz çelik, alüminyum, galvaniz, bakır, pirinç ve Hardox malzemelerde hizmet veriyoruz.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Fiber lazer neden CO2 lazerden daha hızlı keser?', a: 'Fiber lazerin 1.07μm dalga boyu, metallerde CO2 lazerin 10.6μm dalga boyuna göre çok daha yüksek oranda emilir (çelikte %35 vs %5). Bu yüksek emilim oranı, aynı güçte 2-3 kat daha hızlı kesim yapılmasını sağlar.' },
      { q: 'CO2 lazer artık kullanılmıyor mu?', a: 'Metal kesimde fiber lazer büyük oranda CO2 lazerin yerini almıştır. Ancak ahşap, akrilik, tekstil, deri ve kağıt gibi organik malzeme kesiminde CO2 lazer hala vazgeçilmezdir ve bu alanda fiber lazerin alternatifi yoktur.' },
      { q: 'Fiber lazer bakımı gerektirir mi?', a: 'Fiber lazerin bakım gereksinimi CO2 lazere göre çok düşüktür. Hareketli optik parça ve lazer gazı tüketimi yoktur. Diyot ömrü 100.000+ saattir. Sadece koruyucu cam, nozul ve filtre gibi sarf malzemeleri periyodik değişim gerektirir.' },
      { q: 'Fiber lazer bakır ve pirinç kesebilir mi?', a: 'Evet, fiber lazer bakır ve pirinç gibi yansıtıcı metalleri güvenle kesebilir. CO2 lazerde bu malzemelerde geri yansıma riski bulunurken, fiber lazerin dalga boyu bu metallerde daha iyi emilir ve rezonatör hasarı riski yoktur.' },
      { q: 'Fiber lazerin ömrü ne kadardır?', a: 'Fiber lazer diyot pompa modüllerinin ortalama ömrü 100.000 saatin üzerindedir. Bu, günde 8 saat çalışma ile yaklaşık 30+ yıla karşılık gelir. CO2 lazer rezonatörlerinin ömrü ise 20.000-30.000 saat aralığındadır.' }
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
    content: `<p><strong>Fason lazer kesim</strong>, kendi üretim tesisinde lazer kesim makinesi bulunmayan veya mevcut kapasitesi yetersiz kalan firmaların, lazer kesim ihtiyaçlarını uzman bir tedarikçiden temin etmesidir. Fason üretim modeli, firmalara yüksek maliyetli makine yatırımı yapmadan, son teknoloji ekipmanların avantajlarından yararlanma imkanı sunar. Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli Organize Sanayi Bölgesi'ndeki modern tesisimizde yüksek güçlü fiber lazer makinemizle fason lazer kesim hizmeti sunuyoruz.</p>

<h3>Fason Lazer Kesimin Avantajları</h3>
<p>Fason lazer kesim hizmeti almak, birçok stratejik avantaj sağlar. Firmanız milyonlarca TL'lik lazer kesim makinesi yatırımı yapmak zorunda kalmaz. Makine bakım, onarım, operatör istihdamı ve enerji giderlerinden tasarruf edersiniz. İhtiyacınız olduğunda, ihtiyacınız kadar kapasite kullanırsınız; sabit maliyet değişken maliyete dönüşür. Son teknoloji fiber lazer makinelerin sağladığı yüksek hassasiyet ve hızdan faydalanırsınız. Üretim kapasitenizi esnek tutarak talep dalgalanmalarına hızla adapte olabilirsiniz. Ana uzmanlık alanınıza odaklanırken, kesim işini uzman bir partnere bırakırsınız.</p>

<h3>İstanbul İkitelli OSB'de Fason Lazer Kesim Almanın Faydaları</h3>
<p>İkitelli Organize Sanayi Bölgesi, İstanbul'un ve Türkiye'nin en büyük sanayi bölgelerinden biridir. Binlerce üretim tesisine ev sahipliği yapar ve metal işleme sektörünün İstanbul'daki merkezidir. İkitelli OSB'de konumlanmış olmamız, müşterilerimize önemli avantajlar sağlar: TEM ve E-5 otoyollarına yakınlık sayesinde İstanbul'un her noktasından kolay erişim; bölgedeki yoğun sanayi altyapısı sayesinde hızlı malzeme tedariki; çevre sanayicilerle aynı ekosistemde bulunmanın getirdiği hızlı iletişim ve teslimat; lojistik firmalarıyla yakın ilişkiler sayesinde İstanbul dışı sevkiyatlarda da rekabetçi nakliye imkanı.</p>

<h3>Lazer Kesim Kapasitemiz</h3>
<ul>
<li><strong>Makine:</strong> Yüksek güçlü fiber lazer kesim makinesi</li>
<li><strong>Kesim alanı:</strong> 2000 x 6000mm</li>
<li><strong>Çelik kesim kapasitesi:</strong> 0.5mm - 25mm (St37, St52, S235JR, S355JR)</li>
<li><strong>Paslanmaz çelik:</strong> 0.5mm - 20mm (304, 316L, 430)</li>
<li><strong>Alüminyum:</strong> 0.5mm - 12mm</li>
<li><strong>Galvaniz sac:</strong> 0.5mm - 6mm</li>
<li><strong>Bakır/Pirinç:</strong> 0.5mm - 6mm</li>
<li><strong>Hardox:</strong> 3mm - 20mm (Hardox 400, 450)</li>
<li><strong>Tolerans:</strong> ±0.1mm</li>
</ul>

<h3>Hangi Sektörlere Hizmet Veriyoruz?</h3>
<p>Fason lazer kesim hizmetimizden yararlanan sektörler: makine imalatı ve otomasyon, çelik konstrüksiyon, asansör imalatı, havalandırma (HVAC), elektrik panosu üretimi, mobilya ve metal aksesuarlar, otomotiv yan sanayi, reklam ve tabela sektörü, gıda sanayi ekipmanları, savunma sanayi, medikal cihaz, aydınlatma, enerji sektörü ve mimari dekorasyon. Küçük atölyelerden büyük sanayi kuruluşlarına kadar geniş bir müşteri portföyüne hizmet veriyoruz.</p>

<h3>Fason Lazer Kesim Sipariş Süreci</h3>
<p>Sipariş sürecimiz hızlı ve pratiktir:</p>
<ul>
<li><strong>1. Dosya gönderimi:</strong> DXF, DWG, STEP veya PDF formatında kesim dosyanızı WhatsApp (0555 000 83 04) veya e-posta ile gönderin.</li>
<li><strong>2. Bilgi paylaşımı:</strong> Malzeme cinsi, kalınlığı ve sipariş adedini belirtin.</li>
<li><strong>3. Teklif:</strong> Aynı gün içinde projenize özel fiyat teklifi alın.</li>
<li><strong>4. Onay ve üretim:</strong> Teklif onayı sonrası en kısa sürede kesim işlemi gerçekleştirilir.</li>
<li><strong>5. Teslimat:</strong> Kesilen parçalar kalite kontrol sonrası teslim edilir. İstanbul içi teslimat organize edilebilir.</li>
</ul>

<h3>Ek Hizmetler: Tek Çatı Altında Komple Çözüm</h3>
<p>Kuzey Şafak Lazer'de sadece lazer kesim değil, CNC plazma kesim, CNC abkant büküm ve kaynaklı imalat hizmetleri de aynı tesis bünyesinde sunulmaktadır. Projenizi kesimden montaja kadar tek tedarikçiden tamamlayabilir, koordinasyon zorluğunu ortadan kaldırabilir ve toplam maliyeti düşürebilirsiniz. Malzeme tedariki, nesting optimizasyonu ve teknik çizim desteği de standart hizmetlerimiz arasındadır.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: 'Fason lazer kesim için minimum sipariş adedi var mı?', a: 'Hayır, tek parçadan binlerce adede kadar her miktarda fason lazer kesim yapıyoruz. Minimum sipariş limiti uygulamıyoruz. Prototip, numune veya seri üretim fark etmez.' },
      { q: 'Malzeme sizden temin edilebilir mi?', a: 'Evet, ihtiyacınız olan sacı sizin adınıza piyasa koşullarında tedarik edebiliriz ve malzeme dahil paket fiyat sunabiliriz. Alternatif olarak kendi malzemenizi de getirebilirsiniz.' },
      { q: 'Fason lazer kesim süresi ne kadardır?', a: 'Parça sayısı ve karmaşıklığına göre değişmekle birlikte, standart siparişlerde 1-2 iş günü, acil siparişlerde aynı gün teslimat mümkündür. Büyük hacimli siparişlerde termin bilgisi teklif ile birlikte verilir.' },
      { q: 'Fason lazer kesim yaptırmak için ne göndermem gerekir?', a: 'DXF veya DWG formatında kesim dosyası, malzeme cinsi, kalınlığı ve adet bilgisi yeterlidir. Dosyanız yoksa eskiz, el çizimi, numune parça veya fotoğraf da kabul ediyoruz. Teknik ekibimiz çizim oluşturabilir.' },
      { q: 'İstanbul dışına teslimat yapıyor musunuz?', a: 'Evet, anlaşmalı kargo ve nakliye firmalarımız aracılığıyla Türkiye geneline teslimat yapıyoruz. Büyük siparişlerde parsiyel veya komple araç organizasyonu da mümkündür.' }
    ]
  },

  {
    slug: 'fason-cnc-bukum-istanbul',
    title: 'Fason CNC Büküm İstanbul | Abkant Pres | Kuzey Şafak Lazer',
    h1: 'Fason CNC Büküm (Abkant) Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason CNC büküm hizmeti. 3000mm büküm boyu, 220 ton kapasite. Çelik, paslanmaz, alüminyum sac büküm. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason CNC büküm</strong>, sac metal parçaların dışarıdan profesyonel bir CNC abkant pres ile hassas bükülme hizmeti alınmasıdır. Abkant pres yatırımı yapmak istemeyen, mevcut kapasitesi yetersiz kalan veya özel büküm gereksinimleri olan firmalar için fason büküm, esnek ve ekonomik bir çözüm sunar. Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde 220 ton kapasiteli CNC abkant presimizle fason büküm hizmeti veriyoruz.</p>

<h3>Fason CNC Büküm Almanın Avantajları</h3>
<p>CNC abkant pres yatırımı, makine bedeli, kalıp seti, operatör istihdamı ve bakım giderleri ile önemli bir sermaye gerektirir. Fason büküm hizmeti alarak bu yatırımlardan tasarruf edersiniz. Sadece ihtiyacınız kadar kapasite kullanır, sabit maliyetleri değişken hale getirirsiniz. CNC kontrollü makinemiz her parçada ±0.1° açı hassasiyeti ve ±0.05mm boyutsal hassasiyet garanti eder. Deneyimli operatörlerimiz, karmaşık ve çok adımlı büküm operasyonlarında fark yaratır. İşinizdeki büyüme veya talep dalgalanmalarına hızla uyum sağlayabilirsiniz.</p>

<h3>İstanbul İkitelli OSB'de Fason Büküm Hizmeti</h3>
<p>İkitelli OSB, İstanbul'un sanayi kalbinde yer alır ve metal işleme sektörünün en yoğun olduğu bölgedir. Bu konumun sağladığı lojistik avantaj sayesinde, İstanbul'un her noktasından kolay ulaşım ve hızlı teslimat mümkündür. Bölgedeki yoğun sanayi altyapısı, malzeme tedarikinde ve yan hizmetlerde (boyama, kaplama vb.) kolaylık sağlar. Fason büküm için kesilmiş parçalarınızı tesisimize getirebilir veya kargo ile gönderebilirsiniz.</p>

<h3>CNC Büküm Kapasitemiz</h3>
<ul>
<li><strong>Makine:</strong> CNC kontrollü hidrolik abkant pres</li>
<li><strong>Büküm uzunluğu:</strong> 3000mm</li>
<li><strong>Büküm kapasitesi:</strong> 220 ton</li>
<li><strong>Açı hassasiyeti:</strong> ±0.1°</li>
<li><strong>Boyut hassasiyeti:</strong> ±0.05mm</li>
<li><strong>Malzeme kalınlığı:</strong> Çelikte 0.5-12mm, paslanmazda 0.5-8mm, alüminyumda 0.5-10mm</li>
<li><strong>Malzeme türleri:</strong> Çelik, paslanmaz çelik, alüminyum, galvaniz, DKP, bakır, pirinç</li>
<li><strong>Arka dayama:</strong> Programlanabilir çok eksenli backgauge sistemi</li>
<li><strong>Kalıp seti:</strong> Standart V kalıplar, kaz boynu, Z kalıp ve özel profil kalıpları</li>
</ul>

<h3>Hangi Sektörlere Hizmet Veriyoruz?</h3>
<p>Fason CNC büküm hizmetimizden yararlanan başlıca sektörler: elektrik panosu ve kumanda dolabı üreticileri, makine imalatçıları, asansör firmaları, havalandırma (HVAC) şirketleri, mobilya üreticileri, aydınlatma sektörü, otomotiv yan sanayi, reklam ve tabela firmaları, gıda sanayi ekipman üreticileri ve genel sac metal imalat firmaları. Küçük atölyelerden büyük fabrikalara kadar geniş bir müşteri yelpazesine hizmet veriyoruz.</p>

<h3>Lazer Kesim + Büküm Entegrasyonu: Tek Çatı Avantajı</h3>
<p>Kuzey Şafak Lazer'in en büyük avantajlarından biri, aynı tesis içinde fiber lazer kesim ve CNC büküm hizmeti sunmasıdır. Kesim ve büküm süreçleri arasında taşıma, bekleme ve iletişim kaybı yoktur. Her iki işlem aynı kalite standartlarıyla, aynı teknik ekip tarafından koordineli bir şekilde yürütülür. Bu entegrasyon, teslimat süresini kısaltır, boyutsal doğruluğu artırır ve toplam maliyeti düşürür. Kesim+büküm paket siparişlerinizde ek avantaj sağlıyoruz.</p>

<h3>Fason Büküm Sipariş Süreci</h3>
<ul>
<li><strong>1. Teknik çizim gönderimi:</strong> Büküm açıları ve ölçülerinin belirtildiği teknik çizimi WhatsApp (0555 000 83 04) veya e-posta ile gönderin.</li>
<li><strong>2. Bilgi paylaşımı:</strong> Malzeme cinsi, kalınlığı ve adet bilgisini belirtin. Parçalarınız kesilmişse mevcut durumunu bildirin.</li>
<li><strong>3. Teklif:</strong> Projenize özel fiyat teklifi alın.</li>
<li><strong>4. Parça teslimi:</strong> Kesilmiş parçalarınızı tesisimize getirin veya kargo ile gönderin. Kesim de bizden olacaksa sadece dosya gönderin.</li>
<li><strong>5. Üretim ve teslimat:</strong> CNC büküm işlemi gerçekleştirilir, kalite kontrol sonrası parçalarınız teslim edilir.</li>
</ul>`,
    relatedServices: ['cnc-bukum', 'lazer-kesim'],
    faq: [
      { q: 'Fason büküm için kesim de yaptırabilir miyim?', a: 'Evet, fiber lazer kesim + CNC büküm kombinasyonunu tek çatı altında sunuyoruz. Kesim ve büküm entegrasyonu hem zaman hem maliyet tasarrufu sağlar ve boyutsal uyumluluğu artırır.' },
      { q: 'En kalın kaç mm sac bükebilirsiniz?', a: '220 ton kapasitemizle çelikte 12mm, paslanmazda 8mm, alüminyumda 10mm kalınlığa kadar büküm yapabiliyoruz. Kalınlık kapasitesi büküm uzunluğuyla ters orantılıdır; kısa bükümlerde daha kalın malzeme işlenebilir.' },
      { q: 'Fason büküm için ne göndermem gerekir?', a: 'Büküm açıları ve ölçülerinin belirtildiği teknik çizim, malzeme cinsi ve kalınlığı bilgisi gereklidir. Kesilmiş parçaları bize iletebilir veya kesimi de bizden yaptırabilirsiniz.' },
      { q: 'Büküm sonrası kaynak da yaptırabilir miyim?', a: 'Evet, CNC büküm sonrası MIG/MAG veya TIG kaynak ile birleştirme ve montaj işlemlerini aynı tesis içinde gerçekleştiriyoruz. Kesim+büküm+kaynak paket hizmeti sunuyoruz.' },
      { q: 'Çok adımlı karmaşık büküm yapabiliyor musunuz?', a: 'Evet, CNC abkant presimizin programlanabilir arka dayama sistemi sayesinde 6-10 adımlık karmaşık büküm sekanslarını hassas ve tutarlı şekilde gerçekleştiriyoruz. Kutu, kabin ve profil gibi çok bükümlü parçalarda uzmanız.' }
    ]
  },

  {
    slug: 'fason-kaynak-istanbul',
    title: 'Fason Kaynak ve İmalat İstanbul | Kuzey Şafak Lazer',
    h1: 'Fason Kaynak ve Kaynaklı İmalat - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason kaynak hizmeti. MIG, TIG kaynak ile çelik, paslanmaz, alüminyum imalat. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason kaynak</strong>, metal parçaların profesyonel kaynak ekipmanları ve deneyimli operatörler tarafından birleştirilmesi veya komple kaynaklı imalat projelerinin dış kaynak olarak gerçekleştirilmesidir. Kaynak işlemi, yüksek beceri, doğru ekipman ve uygun çalışma ortamı gerektiren kritik bir üretim aşamasıdır. Fason kaynak hizmeti alarak, bu kritik süreci uzman bir partnere bırakabilir ve projenizin kalitesinden emin olabilirsiniz. Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde deneyimli kaynakçı kadromuzla fason kaynak ve kaynaklı imalat hizmeti sunuyoruz.</p>

<h3>Fason Kaynak Hizmeti Almanın Avantajları</h3>
<p>Kaynaklı imalat, sadece kaynak makinesi yatırımı değil, aynı zamanda deneyimli kaynakçı istihdamı, sertifikasyon, kalite kontrol altyapısı ve uygun çalışma ortamı gerektirir. Fason kaynak hizmeti ile bu yatırımlardan tasarruf edersiniz. Deneyimli kadromuzun becerisi ve tecrübesi sayesinde yüksek kaliteli kaynak dikişi garanti edilir. MIG/MAG ve TIG kaynak yöntemlerinin her ikisine de sahip olduğumuzdan, projenizin malzeme türüne ve kalite gereksinimine en uygun yöntem uygulanır. İhtiyacınız olduğunda, ihtiyacınız kadar kapasite kullanırsınız.</p>

<h3>İstanbul İkitelli OSB'de Fason Kaynak Hizmeti</h3>
<p>İkitelli OSB, İstanbul'un ve Türkiye'nin en büyük organize sanayi bölgelerinden biridir. Metal işleme sektörünün İstanbul'daki merkezidir ve güçlü bir tedarik zincirine sahiptir. Bu konumun avantajları: TEM ve E-5 otoyollarına yakınlık ile kolay ulaşım, bölgedeki yoğun sanayi ağından dolgu malzemesi, gaz ve yan malzeme tedarikinde hız, çevre sanayicilere yakınlık sayesinde hızlı iletişim ve teslimat, İstanbul'un her iki yakasından erişilebilir merkezi konum.</p>

<h3>Kaynak Yöntemlerimiz ve Kapasitemiz</h3>
<ul>
<li><strong>MIG/MAG Kaynak (GMAW):</strong> Çelik ve paslanmaz çelik seri üretim birleştirmelerinde yüksek verimli kaynak. CO2, argon+CO2 karışımı ve saf argon gazlarıyla çalışıyoruz. 0.8mm-1.6mm çapında dolgu telleriyle geniş kalınlık aralığında hizmet veriyoruz.</li>
<li><strong>TIG Kaynak (GTAW):</strong> Paslanmaz çelik ve alüminyumda estetik, gözeneksiz ve yüksek kaliteli birleştirmeler. DC ve AC TIG kapasitesi ile çelik, paslanmaz ve alüminyum malzemelerde hizmet veriyoruz. Gıda sanayi, kimya sanayi ve mimari uygulamalarda standart yöntemimizdir.</li>
<li><strong>Punta Kaynak:</strong> İnce sac birleştirmelerinde ve montaj puntalamasında kullanılmaktadır.</li>
</ul>

<h3>Hangi Sektörlere Hizmet Veriyoruz?</h3>
<p>Fason kaynak ve kaynaklı imalat hizmetimizden yararlanan başlıca sektörler: makine imalatı (şasi, gövde, yatak), çelik konstrüksiyon (kolon, kiriş, bağlantı), asansör (kabin, kapı kasası), havalandırma (HVAC kanal, menfez), elektrik (pano kutusu, kablo kanalı), mobilya (metal aksesuarlar), gıda sanayi (paslanmaz ekipman), otomotiv yan sanayi (braket, tutucu), mimari dekorasyon (korkuluk, küpeşte, dekoratif metal) ve genel sac metal imalat.</p>

<h3>Kaynaklı İmalat Alanlarımız</h3>
<p>Makine şasileri ve gövdeleri, çelik konstrüksiyon elemanları, platform ve merdiven imalatı, tank ve hazneler, taşıma ekipmanları (palet, sepet, araba), pano kutuları ve kumanda dolabı gövdeleri, korkuluk ve küpeşte sistemleri, dekoratif metal işleri, özel amaçlı fikstürler ve montaj aparatları, tarım makinesi parçaları, enerji sektörü metal aksamı ve daha fazlası. Basit birleştirmelerden karmaşık çok parçalı montajlara kadar geniş bir yelpazeye hizmet veriyoruz.</p>

<h3>Kalite Güvencesi</h3>
<p>Tüm kaynak operasyonlarında doğru dolgu malzemesi, koruyucu gaz ve kaynak parametresi seçimi titizlikle yapılır. Her proje için uygun birleştirme tasarımı, kaynak sırası ve parametre tablosu belirlenir. Standart sürecimize dahil olan kalite kontrol adımları: kaynak öncesi birleştirme yüzeylerinin temizlik kontrolü, kaynak sırası parametre takibi, kaynak sonrası görsel muayene ve boyutsal kontrol. Kritik uygulamalarda penetrant testi (PT), ultrasonik test (UT) ve basınç testi gibi NDT yöntemleri organize edilebilir.</p>

<h3>Entegre Hizmet: Kesim + Büküm + Kaynak</h3>
<p>Kuzey Şafak Lazer'in en güçlü avantajlarından biri, fiber lazer kesim, CNC büküm ve kaynaklı imalat süreçlerinin tamamını aynı tesis içinde sunmasıdır. Bu entegrasyon, süreçler arası boyutsal uyumu artırır, koordinasyon zorluğunu ortadan kaldırır, teslimat süresini kısaltır ve toplam maliyeti düşürür. Projenizi tasarımdan bitmiş ürüne kadar tek tedarikçiden tamamlayabilirsiniz.</p>`,
    relatedServices: ['kaynakli-imalat', 'lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'Alüminyum TIG kaynak yapıyor musunuz?', a: 'Evet, AC TIG kaynak ile alüminyum birleştirme yapıyoruz. AC akım alüminyumun oksit tabakasını temizleyerek kaliteli kaynak sağlar. Alüminyum profil, levha ve sac malzemelerde hizmet veriyoruz.' },
      { q: 'Kaynaklı imalat projesi için ne göndermem gerekir?', a: 'Teknik çizim (montaj resmi ve parça detayları), malzeme listesi (BOM) ve adet bilgisi gereklidir. Çiziminiz yoksa eskiz, numune parça veya fotoğraf ile de çalışabiliriz.' },
      { q: 'Büyük konstrüksiyon işleri yapabiliyor musunuz?', a: 'Atölye kapasitemiz dahilinde çelik konstrüksiyon, platform, merdiven ve makine gövdesi imalatı yapıyoruz. Büyük ve ağır projeler için kapasite değerlendirmesi teklif aşamasında yapılır.' },
      { q: 'Paslanmaz çelik kaynak kalitesi nasıl sağlanır?', a: 'Paslanmaz çelik kaynağında uygun dolgu malzemesi (308L, 316L tel), yüksek saflıkta argon koruyucu gaz ve doğru ısı girdisi kontrolü ile kaliteli, gözeneksiz ve korozyona dayanıklı kaynak dikişi elde edilir.' },
      { q: 'Kaynak sonrası taşlama ve düzeltme yapıyor musunuz?', a: 'Evet, kaynak dikişi taşlama, yüzey düzeltme ve pürüz giderme hizmetleri standart sürecimize dahildir. Estetik uygulamalarda kaynak dikişi görünmez hale getirilebilir.' }
    ]
  },

  {
    slug: 'fason-plazma-kesim-istanbul',
    title: 'Fason CNC Plazma Kesim İstanbul | Kuzey Şafak Lazer',
    h1: 'Fason CNC Plazma Kesim Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason CNC plazma kesim. 6-50mm çelik sac plazma kesim hizmeti. Kalın saclarda ekonomik çözüm. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason CNC plazma kesim</strong>, özellikle kalın metal sacların ekonomik ve hızlı kesilmesi için tercih edilen dış kaynaklı bir imalat hizmetidir. Lazer kesimin kalınlık ve maliyet açısından sınırlarına ulaştığı noktalarda (15mm+ çelik), CNC plazma kesim en verimli ve ekonomik termal kesim çözümünü sunar. Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde CNC plazma kesim makinemizle fason kesim hizmeti veriyoruz.</p>

<h3>Fason Plazma Kesim Almanın Avantajları</h3>
<p>CNC plazma kesim makinesi yatırımı, makine bedeli, güç kaynağı, toz toplama sistemi, operatör istihdamı ve sarf malzeme stoku ile önemli bir sermaye gerektirir. Fason plazma kesim hizmeti alarak bu yatırımları yapmadan, kalın sac kesim ihtiyacınızı profesyonel bir tedarikçiden karşılayabilirsiniz. Sadece ihtiyacınız kadar kapasite kullanır, sabit giderleri değişken maliyete dönüştürürsünüz. CNC kontrollü makinemiz tutarlı kesim kalitesi ve ±0.5mm tolerans sağlar.</p>

<h3>İstanbul İkitelli OSB Avantajı</h3>
<p>İkitelli OSB, İstanbul'un sanayi merkezi konumundadır ve metal işleme sektörünün en yoğun olduğu bölgedir. TEM ve E-5 otoyollarına yakın konumu ile İstanbul'un her noktasından kolay erişim sağlar. Bölgedeki geniş tedarikçi ağı sayesinde kalın sac plakaların hızlı tedariki mümkündür. Çelik konstrüksiyon, makine imalatı ve ağır sanayi firmalarının yoğun olduğu bölgede, fason plazma kesim talebi yüksektir ve bu talebi karşılayacak altyapıya sahibiz.</p>

<h3>CNC Plazma Kesim Kapasitemiz</h3>
<ul>
<li><strong>Makine:</strong> CNC kontrollü portal tip plazma kesim makinesi</li>
<li><strong>Kesim alanı:</strong> 2000 x 6000mm</li>
<li><strong>Çelik kesim kapasitesi:</strong> 6mm - 50mm (St37, St52, S235JR, S355JR)</li>
<li><strong>Paslanmaz çelik:</strong> 6mm - 40mm</li>
<li><strong>Alüminyum:</strong> 6mm - 30mm</li>
<li><strong>Hardox:</strong> 6mm - 40mm (Hardox 400, Hardox 450)</li>
<li><strong>Kesim toleransı:</strong> ±0.5mm</li>
<li><strong>Kerf genişliği:</strong> 1.5-3mm (kalınlığa bağlı)</li>
</ul>

<h3>Hangi Sektörlere Hizmet Veriyoruz?</h3>
<p>Fason CNC plazma kesim hizmetimizden yararlanan başlıca sektörler: çelik konstrüksiyon (kolon, kiriş, bağlantı plakası, gusset), makine imalatı (şasi, gövde, yatak plakası), gemi inşa (tekne sacları), ağır sanayi (tank, silo, basınçlı kap), madencilik ekipmanları (Hardox kepçe, aşınma plakası), platform ve merdiven imalatı (taban ve korkuluk plakaları), enerji sektörü (rüzgar türbini temeli, çelik direk), köprü ve altyapı projeleri, tarım makineleri ve vinç-kreyn imalatı.</p>

<h3>Plazma Kesim Ne Zaman Tercih Edilir?</h3>
<p>15mm üzeri kalınlıklarda CNC plazma kesim, lazer kesime göre belirgin maliyet avantajı sağlar ve tercih edilir. Çelik konstrüksiyon sacları, makine gövde plakaları, flanş ve bağlantı elemanları, tank ve silo sacları gibi kalın parçalarda plazma kesim en verimli yöntemdir. ±0.5mm toleransın yeterli olduğu yapısal uygulamalarda ideal performans sunar. 6-15mm aralığında ise projenin hassasiyet ve kalite gereksinimine göre plazma veya lazer tercih edilir.</p>

<h3>Plazma + Lazer Kombinasyonu: Maliyet Optimizasyonu</h3>
<p>Birçok projede hem ince hem kalın parçalar bir arada bulunur. Kuzey Şafak Lazer olarak aynı tesis bünyesinde CNC plazma ve fiber lazer makinelerimiz mevcuttur. Kalın plakaları CNC plazma ile, ince ve hassas parçaları fiber lazer ile keserek her parçanın en uygun yöntemle işlenmesini sağlıyoruz. Bu karma yaklaşım, toplam maliyeti optimize eder ve projenizi eksiksiz teslim etmemizi mümkün kılar.</p>

<h3>Sipariş Süreci</h3>
<ul>
<li><strong>1. Dosya gönderimi:</strong> DXF, DWG veya ölçülü çizim dosyanızı WhatsApp (0555 000 83 04) veya e-posta ile gönderin.</li>
<li><strong>2. Bilgi paylaşımı:</strong> Malzeme cinsi, kalınlığı ve sipariş adedini belirtin.</li>
<li><strong>3. Teklif:</strong> Aynı gün içinde projenize özel fiyat teklifi alın.</li>
<li><strong>4. Malzeme:</strong> Kendi malzemenizi getirebilir veya bizden tedarik isteyebilirsiniz.</li>
<li><strong>5. Üretim ve teslimat:</strong> Onay sonrası hızlı kesim ve kalite kontrol sonrası teslimat.</li>
</ul>`,
    relatedServices: ['cnc-plazma', 'lazer-kesim'],
    faq: [
      { q: 'Plazma kesim ile hangi kalınlıklarda çalışıyorsunuz?', a: '6mm ile 50mm arasında çelik ve paslanmaz çelik plazma kesim yapıyoruz. 6-15mm aralığında lazer kesim de alternatif olarak sunuyoruz; projenizin hassasiyet gereksinimine göre en uygun yöntemi öneriyoruz.' },
      { q: 'Plazma kesim kenar kalitesi nasıldır?', a: 'CNC plazma kesim ile düzgün ve çoğu yapısal uygulama için yeterli kenar kalitesi elde edilir. Gerekirse kesim sonrası taşlama ve çapak temizleme hizmeti de sunuyoruz.' },
      { q: 'Hardox plazma ile kesilebilir mi?', a: 'Evet, Hardox 400 ve Hardox 450 gibi aşınma çeliklerini 40mm kalınlığa kadar CNC plazma ile başarıyla kesiyoruz. İnce Hardox saclarda lazer kesim de tercih edilebilir.' },
      { q: 'Kalın sac malzeme tedariki yapıyor musunuz?', a: 'Evet, projeniz için gerekli kalın çelik plakalarını sizin adınıza tedarik edebiliyoruz. Malzeme dahil paket fiyat teklifi sunabiliyoruz.' },
      { q: 'Plazma kesim sonrası büküm veya kaynak da yaptırabilir miyim?', a: 'Evet, CNC plazma kesim sonrası CNC büküm ve kaynaklı imalat hizmetlerimizle projenizi komple tamamlayabiliyoruz. Tüm süreçler aynı tesis içinde gerçekleştirilir.' }
    ]
  },

  {
    slug: 'fason-sac-metal-imalat-istanbul',
    title: 'Fason Sac Metal İmalat İstanbul | Kuzey Şafak Lazer',
    h1: 'Fason Sac Metal İmalat Hizmeti - İstanbul',
    metaDesc: 'İstanbul İkitelli OSB\'de fason sac metal imalat. Lazer kesim, CNC büküm ve kaynak bir arada. Komple sac metal çözüm. Kuzey Şafak Lazer.',
    category: 'fason',
    content: `<p><strong>Fason sac metal imalat</strong>, metal sac parçaların tasarımdan bitmiş ürüne kadar tüm üretim aşamalarının (kesim, büküm, kaynak, montaj ve yüzey işlemi) tek bir profesyonel imalat partneri tarafından gerçekleştirilmesidir. Bu komple hizmet modeli, projenin tek sorumludan teslim alınmasını sağlayarak koordinasyon yükünü ortadan kaldırır. Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde kesimden kaynağa kadar tüm sac metal imalat süreçlerini tek çatı altında sunuyoruz.</p>

<h3>Fason Sac Metal İmalatın Avantajları</h3>
<p>Birçok firma, kesim, büküm ve kaynak işlerini farklı tedarikçilere yaptırmak zorunda kalır. Bu durum ciddi dezavantajlar doğurur: her firma arasında taşıma ve bekleme süreleri oluşur, farklı ekipmanlar arasında boyutsal uyumsuzluk riski artar, iletişim kopukluğu ve sorumluluk belirsizliği yaşanabilir, toplam maliyet aracı taşıma ve koordinasyon giderleri ile yükselir. Tek çatı altında komple imalat hizmeti ile tüm bu sorunlar ortadan kalkar. Kuzey Şafak Lazer'de tüm süreçler aynı tesis içinde, aynı kalite standartlarıyla ve aynı teknik ekip tarafından yürütülür.</p>

<h3>İstanbul İkitelli OSB'de Komple Sac Metal İmalat</h3>
<p>İkitelli OSB, Türkiye'nin en büyük organize sanayi bölgelerinden biri olarak güçlü bir sanayi altyapısına ve tedarik ağına sahiptir. Bu konumun sağladığı avantajlar: geniş malzeme tedarikçi ağından hızlı ham madde temini, TEM ve E-5 otoyollarına yakınlık ile kolay lojistik, bölgedeki yan sanayi firmalarına (boyama, kaplama, ısıl işlem) hızlı erişim, İstanbul'un her noktasından erişilebilir merkezi konum. Bu altyapı, fason imalat projelerinizi hızlı ve rekabetçi şekilde tamamlamamızı mümkün kılar.</p>

<h3>Üretim Süreçlerimiz ve Kapasitemiz</h3>
<ul>
<li><strong>Fiber Lazer Kesim:</strong> 2000x6000mm kesim tablası, çelikte 25mm, paslanmazda 20mm, alüminyumda 12mm kapasiteli yüksek güçlü fiber lazer. ±0.1mm tolerans ile hassas kesim.</li>
<li><strong>CNC Plazma Kesim:</strong> 2000x6000mm kesim tablası, 6-50mm kalınlıklarda çelik ve paslanmaz sac kesimi. Kalın saclarda ekonomik çözüm.</li>
<li><strong>CNC Abkant Büküm:</strong> 3000mm büküm boyu, 220 ton kapasite. ±0.1° açı hassasiyeti ile çelik, paslanmaz ve alüminyum büküm.</li>
<li><strong>Kaynaklı İmalat:</strong> MIG/MAG ve TIG kaynak ile çelik, paslanmaz çelik ve alüminyum birleştirme ve montaj.</li>
<li><strong>Ek Hizmetler:</strong> Nesting optimizasyonu, teknik çizim desteği, malzeme tedariki, kalite kontrol.</li>
<li><strong>Yüzey İşlemi:</strong> Anlaşmalı tedarikçiler aracılığıyla toz boya, ıslak boya, galvaniz kaplama organizasyonu.</li>
</ul>

<h3>Hangi Sektörlere Hizmet Veriyoruz?</h3>
<p>Fason sac metal imalat hizmetimizden yararlanan başlıca sektörler: makine imalatı ve otomasyon, gıda sanayi ekipmanları (paslanmaz çelik), savunma sanayi, asansör imalatı, havalandırma (HVAC), elektrik panosu ve kumanda dolabı, mobilya ve metal aksesuarlar, otomotiv yan sanayi, reklam ve tabela, mimari dekorasyon (korkuluk, küpeşte, cephe), aydınlatma, enerji sektörü, medikal cihaz ve tarım makineleri. Küçük atölyelerden büyük sanayi kuruluşlarına kadar geniş bir müşteri portföyüne hizmet veriyoruz.</p>

<h3>Prototipten Seri Üretime</h3>
<p>Kuzey Şafak Lazer olarak tek parça prototipten yüzlerce ve binlerce adetlik seri üretime kadar her sipariş büyüklüğünde hizmet veriyoruz. Minimum adet limiti uygulamıyoruz. Prototip aşamasında üretilebilirlik (DFM) danışmanlığı sağlıyor, tasarımınızı üretim süreçlerine uygun hale getirmek için önerilerde bulunuyoruz. Seri üretimde ise CNC otomasyon sayesinde her parçada tutarlı kalite garanti ediyoruz.</p>

<h3>Sipariş Süreci</h3>
<ul>
<li><strong>1. Proje paylaşımı:</strong> Teknik çizimlerinizi, malzeme listesini ve adet bilgisini WhatsApp (0555 000 83 04) veya e-posta ile gönderin.</li>
<li><strong>2. Değerlendirme ve teklif:</strong> Teknik ekibimiz projenizi değerlendirir ve 1-3 iş günü içinde detaylı teklif hazırlar.</li>
<li><strong>3. Onay ve malzeme:</strong> Teklif onayı sonrası malzeme tedariki ve üretim planlaması yapılır.</li>
<li><strong>4. Üretim:</strong> Kesim, büküm, kaynak ve kalite kontrol aşamaları sırasıyla gerçekleştirilir.</li>
<li><strong>5. Teslimat:</strong> Bitmiş ürünler ambalajlanarak teslim edilir veya İstanbul içi teslimat organize edilir.</li>
</ul>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat', 'cnc-plazma'],
    faq: [
      { q: 'Tasarım desteği sunuyor musunuz?', a: 'Evet, üretilebilirlik (DFM - Design for Manufacturing) konusunda teknik danışmanlık sağlıyoruz. Büküm yarıçapları, kaynak erişimi, malzeme seçimi ve tolerans optimizasyonu konularında önerilerde bulunuyoruz.' },
      { q: 'Yüzey işlemi (boyama) yapıyor musunuz?', a: 'Boyama ve kaplama hizmetini anlaşmalı tedarikçilerimiz aracılığıyla organize ediyoruz. Toz boya, ıslak boya, sıcak daldırma galvaniz ve elektropolisaj seçenekleri mevcuttur. Boyalı bitmiş ürün olarak teslim edebiliyoruz.' },
      { q: 'Fason imalat süresi ne kadardır?', a: 'Basit kesim+büküm parçalarında 2-3 iş günü, kaynaklı imalatlarda 5-10 iş günü standart sürelerimizdir. Büyük ve karmaşık projelerde termin bilgisi teklif ile birlikte verilir. Acil siparişlerde hızlandırılmış üretim mümkündür.' },
      { q: 'Minimum sipariş adedi var mı?', a: 'Hayır, tek parça prototipten binlerce adetlik seri üretime kadar her miktarda hizmet veriyoruz. Minimum sipariş limiti uygulamıyoruz.' },
      { q: 'Teknik çizimim yok, yine de sipariş verebilir miyim?', a: 'Evet, eskiz, el çizimi, numune parça veya fotoğraf ile çalışabiliriz. Teknik ekibimiz ilettiğiniz referanslara göre çizim oluşturabilir ve üretilebilirlik önerisi sunabilir.' }
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
    content: `<p><strong>Lazer kesim fiyatı</strong>, birçok teknik parametrenin birleşimiyle projeye özel olarak belirlenir. Malzeme cinsi, kalınlığı, toplam kesim uzunluğu, parça adedi, geometri karmaşıklığı ve ek işlem talepleri fiyatlandırmanın temel bileşenleridir. Her proje kendine özgü parametreler taşıdığından, Kuzey Şafak Lazer olarak sabit fiyat listesi yerine projenize özel detaylı teklif hazırlıyoruz. Bu yaklaşım, müşterilerimize en doğru ve rekabetçi fiyatı sunmamızı sağlar.</p>

<h3>Lazer Kesim Fiyatını Etkileyen Temel Faktörler</h3>
<p>Lazer kesim fiyatlandırması, aşağıdaki parametrelerin her birinin etkisiyle şekillenir. Bu faktörleri anlamak, projeniz için gerçekçi bir bütçe öngörüsü yapmanıza yardımcı olur.</p>
<ul>
<li><strong>Malzeme cinsi:</strong> Çelik, paslanmaz çelik ve alüminyum farklı kesim hızlarına sahiptir. Paslanmaz çelik ve alüminyum kesimde oksidasyonsuz temiz kenar elde etmek için azot gazı kullanılır; bu da gaz tüketim maliyetini artırır. Bakır ve pirinç gibi yansıtıcı metaller, özel kesim parametreleri gerektirir. Malzeme türüne göre birim kesim maliyeti önemli farklılıklar gösterir.</li>
<li><strong>Malzeme kalınlığı:</strong> Kalınlık arttıkça lazer ışınının malzemeyi penetrasyonu yavaşlar, kesim hızı düşer ve birim metre maliyeti artar. 1mm çelik ile 20mm çelik arasında 8-10 kat maliyet farkı oluşabilir. İnce saclarda (1-3mm) lazer kesim çok hızlı ve ekonomik iken, kalın saclarda (15mm+) maliyet belirgin şekilde yükselir.</li>
<li><strong>Toplam kesim uzunluğu (metre):</strong> Lazer kesim fiyatlandırmasının temel birimi genellikle metre başına (TL/m) hesaplanır. Parçanın dış konturu, iç kesimler (delikler, pencereler) ve detay kesimlerin toplam metresi, kesim süresini ve dolayısıyla maliyeti doğrudan belirler.</li>
<li><strong>Parça adedi ve nesting verimliliği:</strong> Yüksek adetlerde nesting (dizilim) optimizasyonu ile sacdan daha fazla parça çıkarılır, fire oranı düşer ve birim maliyet azalır. Tek parçalık sipariş ile 1000 adetlik sipariş arasında birim fiyat farkı oluşabilir.</li>
<li><strong>Geometri karmaşıklığı:</strong> Çok sayıda küçük delik, dar kesim aralıkları, keskin köşeler, ince dişler ve karmaşık konturlar kesim süresini artırır. Basit dikdörtgen parçalar hızlı kesilirken, çok detaylı dekoratif parçalar daha yavaş işlenir.</li>
<li><strong>Malzeme temini:</strong> Malzeme sizden mi gelecek, biz mi tedarik edeceğiz? Kuzey Şafak Lazer olarak malzeme tedarik dahil paket fiyat sunabiliyoruz. Kendi malzemenizi getirmeniz durumunda sadece kesim işçiliği fiyatlanır.</li>
<li><strong>Ek işlem talepleri:</strong> Lazer kesim sonrası CNC büküm, kaynak, taşlama veya delik delme gibi ek işlemler toplam maliyete eklenir. Ancak tüm süreçleri tek tedarikçiden almanız, taşıma ve koordinasyon giderlerini ortadan kaldırarak toplam maliyeti düşürür.</li>
</ul>

<h3>Teklif Almak İçin Gerekli Bilgiler</h3>
<p>En doğru ve en hızlı fiyat teklifi için aşağıdaki bilgileri bize iletmeniz yeterlidir:</p>
<ul>
<li><strong>Kesim dosyası:</strong> DXF formatı idealdir. DWG, STEP, IGES, AI ve PDF formatları da kabul edilir. Dosyanız yoksa eskiz, el çizimi veya numune parça da gönderebilirsiniz.</li>
<li><strong>Malzeme cinsi:</strong> Çelik (St37), paslanmaz çelik (304, 316L), alüminyum, galvaniz, bakır, pirinç veya Hardox.</li>
<li><strong>Malzeme kalınlığı:</strong> mm cinsinden.</li>
<li><strong>Sipariş adedi:</strong> Kaç adet kesilecek?</li>
<li><strong>Malzeme temini:</strong> Malzeme sizden mi, bizden mi olacak?</li>
<li><strong>Ek işlem talebi:</strong> Büküm, kaynak, boyama gibi ek hizmet gerekiyor mu?</li>
<li><strong>Termin beklentisi:</strong> Ne zaman teslim edilmesini istiyorsunuz?</li>
</ul>

<h3>Teklif Alma Süreci</h3>
<p>Teknik çiziminizi ve yukarıdaki bilgileri <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta yoluyla göndermeniz yeterlidir. Teknik ekibimiz dosyanızı inceleyerek nesting simülasyonu yapar, kesim süresini hesaplar ve projenize özel fiyat teklifi oluşturur. Standart siparişlerde <strong>aynı gün içinde</strong>, karmaşık projelerde en geç ertesi iş günü fiyat teklifi dönüşü yapıyoruz.</p>

<h3>Neden Sabit Fiyat Listesi Yayınlamıyoruz?</h3>
<p>Her proje kendine özgü parametreler (malzeme, kalınlık, geometri, adet) taşıdığından, genel bir fiyat listesi müşterilerimize yanıltıcı bilgi verebilir. Projenize özel detaylı teklif hazırlayarak en doğru, en güncel ve en rekabetçi fiyatı sunmayı tercih ediyoruz. Bu yaklaşım, hem müşterilerimizin bütçe planlamasını kolaylaştırır hem de gereksiz maliyet sürprizlerini önler.</p>

<h3>Projenize Özel Teklif İçin Hemen İletişime Geçin</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde fiber lazer kesim, CNC plazma, CNC büküm ve kaynaklı imalat hizmetleri sunuyoruz. Lazer kesim projeniz için hemen <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile iletişime geçin, aynı gün projenize özel teklif alın.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Lazer kesim fiyatı nasıl hesaplanır?', a: 'Lazer kesim fiyatı genel olarak malzeme cinsi ve kalınlığına göre metre başına (TL/m) hesaplanır. Toplam kesim uzunluğu, adet ve geometri karmaşıklığı çarpanları ile projenize özel toplam fiyat oluşturulur. Kesin fiyat için dosyanızı gönderin.' },
      { q: 'Teklif almak için teknik çizim şart mı?', a: 'DXF dosyası en hızlı ve en doğru teklif alma yöntemidir. Ancak teknik çiziminiz yoksa eskiz, el çizimi, numune parça veya fotoğraf ile de çalışabiliriz. Teknik ekibimiz ihtiyaç halinde çizim oluşturabilir.' },
      { q: 'Teklif ne kadar sürede gelir?', a: 'Standart lazer kesim siparişlerinde aynı gün veya en geç ertesi iş günü içinde fiyat teklifi dönüşü yapıyoruz. Karmaşık ve çok parçalı projelerde 1-2 iş günü sürebilir.' },
      { q: 'Malzeme dahil fiyat alabilir miyim?', a: 'Evet, ihtiyacınız olan sacı sizin adınıza piyasa koşullarında tedarik edebilir ve malzeme dahil paket fiyat sunabiliriz. Kendi malzemenizi getirmeniz durumunda sadece kesim işçiliği fiyatlanır.' },
      { q: 'Büküm ve kaynak dahil komple teklif alabilir miyim?', a: 'Evet, lazer kesim sonrası CNC büküm ve kaynaklı imalat hizmetlerimiz de aynı tesis içindedir. Kesim+büküm+kaynak paket teklifi hazırlayabiliriz; tek tedarikçi avantajı ile hem maliyet hem zaman tasarrufu sağlarsınız.' }
    ]
  },

  {
    slug: 'cnc-bukum-teklif',
    title: 'CNC Büküm Teklif Al | Abkant Pres Fiyat Faktörleri | Kuzey Şafak Lazer',
    h1: 'CNC Büküm (Abkant) Teklif Alın',
    metaDesc: 'CNC büküm fiyatını etkileyen faktörler nelerdir? Projenize özel abkant büküm teklifi alın. Kuzey Şafak Lazer İstanbul İkitelli.',
    category: 'teklif',
    content: `<p><strong>CNC büküm (abkant pres) fiyatı</strong>, her parçanın büküm karmaşıklığının farklı olması nedeniyle projeye özel olarak hesaplanır. Malzeme cinsi, kalınlığı, büküm sayısı, büküm boyu, tolerans gereksinimleri ve sipariş adedi fiyatlandırmanın temel belirleyicileridir. Kuzey Şafak Lazer olarak projenizin teknik çizimini inceleyerek en doğru ve rekabetçi fiyat teklifini oluşturuyoruz.</p>

<h3>CNC Büküm Fiyatını Etkileyen Faktörler</h3>
<p>Abkant pres büküm fiyatlandırması, aşağıdaki parametrelerin her birinden etkilenir. Bu faktörleri anlamak, projeniz için doğru bütçe öngörüsü yapmanıza yardımcı olur.</p>
<ul>
<li><strong>Büküm sayısı (adım):</strong> Her parçadaki büküm adımı sayısı, işlem süresini ve maliyeti doğrudan etkileyen en önemli faktördür. Tek bükümlü basit bir L parçası ile 6-8 bükümlü bir kutu gövde arasında ciddi maliyet farkı oluşur. Her büküm adımı, arka dayama pozisyonlama, malzeme yerleştirme ve presleme sürelerini içerir.</li>
<li><strong>Malzeme kalınlığı ve cinsi:</strong> Kalın ve yüksek akma dayanımlı malzemeler (paslanmaz çelik, Hardox) daha yüksek tonaj gerektirir ve presleme süresi artar. Alüminyum ise düşük akma dayanımı sayesinde daha az tonajla bükülebilir ancak geri yaylanma karakteristiği farklıdır.</li>
<li><strong>Büküm uzunluğu:</strong> 3000mm'ye kadar büküm yapabiliyoruz. Uzun bükümlerde kalıp boyutu ve toplam tonaj gereksinimi artar. Çok uzun parçalarda sehim (defleksiyon) kompansasyonu gerekebilir.</li>
<li><strong>Tolerans gereksinimleri:</strong> Standart toleranslarımız (±0.1° açı, ±0.05mm boyut) çoğu uygulama için fazlasıyla yeterlidir. Ancak olağanüstü dar tolerans gerektiren özel uygulamalarda ek kontrol ve ayar süresi maliyete yansıyabilir.</li>
<li><strong>Parça adedi:</strong> Yüksek adetlerde kalıp ve program setup maliyeti parça başına düşer ve birim fiyat belirgin şekilde azalır. Ayrıca operatör, parça geometrisine alıştıkça üretim hızı artar.</li>
<li><strong>Özel kalıp ihtiyacı:</strong> Standart V kalıp setimiz çoğu uygulamayı karşılar. Gaz boynu, kaz boynu, Z kalıp ve özel profil kalıpları mevcuttur. Ancak çok özel büküm profilleri gerektiren uygulamalarda ek kalıp yatırımı gerekebilir.</li>
<li><strong>Ek işlemler:</strong> Büküm öncesi lazer kesim, büküm sonrası kaynak, taşlama veya boyama gibi ek işlemler toplam maliyete eklenir. Tüm süreçleri tek çatı altında yaptırmanız durumunda paket avantajı sağlanır.</li>
</ul>

<h3>Teklif Almak İçin Gerekli Bilgiler</h3>
<p>En hızlı ve en doğru CNC büküm fiyat teklifi için aşağıdaki bilgileri bize iletin:</p>
<ul>
<li><strong>Teknik çizim:</strong> Büküm açıları, iç yarıçapları ve ölçülerin belirtildiği detaylı çizim. DXF, DWG, STEP veya PDF formatı kabul edilir.</li>
<li><strong>Malzeme cinsi ve kalınlığı:</strong> Çelik, paslanmaz, alüminyum, galvaniz vb. ve mm cinsinden kalınlık.</li>
<li><strong>Sipariş adedi:</strong> Toplam kaç adet parça bükülecek?</li>
<li><strong>Parça durumu:</strong> Parçalar kesilmiş mi, yoksa kesim de bizden mi yapılacak?</li>
<li><strong>Ek işlem talebi:</strong> Kaynak, boyama veya montaj gibi ek hizmet gerekiyor mu?</li>
</ul>

<h3>Lazer Kesim + CNC Büküm Paket Teklif</h3>
<p>Kesim ve büküm işini birlikte yaptırmanız durumunda tek tedarikçi avantajıyla hem zaman hem maliyet tasarrufu sağlarsınız. Aynı tesis içinde kesim ve büküm yapılması, süreçler arası taşıma ve bekleme süresini ortadan kaldırır. Boyutsal uyumluluk artar çünkü kesim parametreleri büküm gereksinimleri dikkate alınarak optimize edilir. Lazer kesim + CNC büküm paket teklifimiz için teknik çizimlerinizi bizimle paylaşın.</p>

<h3>Teklif Süreci</h3>
<p>Teknik çiziminizi ve yukarıdaki bilgileri <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile gönderin. Teknik ekibimiz çiziminizi inceleyerek büküm sırasını (bending sequence), gerekli tonajı ve kalıp seçimini belirler ve projenize özel fiyat teklifi oluşturur. Standart siparişlerde aynı gün, karmaşık projelerde en geç ertesi iş günü teklif dönüşü yapıyoruz.</p>

<h3>Kuzey Şafak Lazer'de CNC Büküm Avantajı</h3>
<p>2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde 220 ton kapasiteli, 3000mm büküm boyuna sahip CNC abkant presimizle hizmet veriyoruz. CNC kontrol sistemi, programlanabilir çok eksenli arka dayama ve geniş kalıp seti ile basit bükümlerden karmaşık çok adımlı operasyonlara kadar her türlü büküm ihtiyacınızı karşılıyoruz. Hemen iletişime geçin ve projenize özel teklif alın.</p>`,
    relatedServices: ['cnc-bukum', 'lazer-kesim'],
    faq: [
      { q: 'CNC büküm fiyatı nasıl hesaplanır?', a: 'Büküm fiyatı genellikle parça başına büküm adımı sayısı, malzeme kalınlığı ve adet üzerinden hesaplanır. Toplam setup süresi ve kalıp değişim ihtiyacı da fiyatı etkiler. Kesin fiyat için teknik çizim göndermeniz gerekir.' },
      { q: 'Kesim yapılmış parçamı sadece büktürebilir miyim?', a: 'Evet, daha önce kesilmiş parçalarınızı tesisimize getirerek veya kargo ile göndererek sadece CNC büküm hizmeti alabilirsiniz. Parçaların düzgün kesilmiş ve boyutsal olarak doğru olması önemlidir.' },
      { q: 'Büküm sonrası kaynak da yaptırabilir miyim?', a: 'Evet, CNC büküm sonrası MIG/MAG veya TIG kaynak ile birleştirme ve montaj işlemlerini aynı tesis içinde gerçekleştiriyoruz. Kesim+büküm+kaynak komple imalat paketi sunabiliyoruz.' },
      { q: 'Teklif ne kadar sürede gelir?', a: 'Standart büküm siparişlerinde aynı gün, karmaşık ve çok parçalı projelerde en geç ertesi iş günü fiyat teklifi dönüşü yapıyoruz.' },
      { q: 'Özel profil büküm yapabiliyor musunuz?', a: 'Evet, standart V büküm dışında gaz boynu, kaz boynu, Z profil ve özel kanal profilleri gibi büküm işlemleri için geniş kalıp setimiz mevcuttur. Standart kalıplarla yapılamayan özel profiller için kalıp imalatı da organize edilebilir.' }
    ]
  },

  {
    slug: 'kaynakli-imalat-teklif',
    title: 'Kaynaklı İmalat Teklif Al | Fiyat Faktörleri | Kuzey Şafak Lazer',
    h1: 'Kaynaklı İmalat Teklif Alın',
    metaDesc: 'Kaynaklı imalat fiyatını etkileyen faktörler nelerdir? Projenize özel kaynak ve imalat teklifi alın. Kuzey Şafak Lazer İstanbul.',
    category: 'teklif',
    content: `<p><strong>Kaynaklı imalat fiyatı</strong>, projenin kapsamı ve karmaşıklığına göre tamamen özel olarak belirlenir. Kaynaklı imalat projeleri, basit iki parça birleştirmesinden yüzlerce bileşenli makine şasisi imalatına kadar çok geniş bir yelpazeye yayılır. Bu nedenle her proje, teknik çizimleri ve gereksinimleri doğrultusunda ayrı ayrı değerlendirilir. Kuzey Şafak Lazer olarak projenizin detaylarını inceleyerek en doğru ve rekabetçi fiyat teklifini hazırlıyoruz.</p>

<h3>Kaynaklı İmalat Fiyatını Etkileyen Faktörler</h3>
<p>Kaynaklı imalat fiyatlandırması, birden fazla maliyet kaleminin toplamından oluşur. Bu faktörleri anlamak, bütçe planlamanıza yardımcı olur.</p>
<ul>
<li><strong>Proje karmaşıklığı ve parça sayısı:</strong> Toplam parça adedi, montaj karmaşıklığı ve birleştirme noktalarının sayısı fiyatın temel belirleyicisidir. Basit bir L birleştirme ile çok parçalı bir makine gövdesi arasında ciddi maliyet farkı bulunur.</li>
<li><strong>Kaynak yöntemi:</strong> TIG kaynak, yavaş yığma hızı ve yüksek operatör becerisi gerektirmesi nedeniyle MIG/MAG kaynağa göre 2-3 kat daha yüksek işçilik maliyeti oluşturur. Ancak TIG'in üstün kalitesi, bazı uygulamalarda kaynak sonrası taşlama ihtiyacını ortadan kaldırarak dengelenebilir.</li>
<li><strong>Malzeme türü:</strong> Paslanmaz çelik ve alüminyum kaynağı, karbon çeliğe göre daha pahalı dolgu malzemesi ve daha yüksek saflıkta koruyucu gaz gerektirir. Ayrıca bu malzemelerde kaynak operasyonu daha yüksek beceri ve dikkat ister.</li>
<li><strong>Toplam kaynak dikişi uzunluğu:</strong> Kaynak uzunluğu arttıkça işlem süresi, dolgu teli tüketimi ve koruyucu gaz kullanımı da artar. Metre başına kaynak maliyeti, dikiş türüne (alın, köşe, bindirme) ve pozisyona (düz, yatay, dikey) göre değişir.</li>
<li><strong>Ön hazırlık işlemleri:</strong> Kaynak öncesi kesim, büküm, kaynak ağzı açma, taşlama ve punta operasyonları toplam maliyetin önemli bir kısmını oluşturabilir. Parçaların kesilmiş ve bükülmüş olarak gelmesi, toplam maliyeti düşürür.</li>
<li><strong>Fikstür ihtiyacı:</strong> Karmaşık montajlarda boyutsal doğruluğu sağlamak için özel fikstür (sabitleme aparatı) gerekebilir. Seri üretimde fikstür maliyeti parçalara dağıtılır, düşük adetlerde birim etkisi daha fazla olur.</li>
<li><strong>Kalite gereksinimleri:</strong> Standart görsel muayene ve boyutsal kontrol sürecimize dahildir. Penetrant testi (PT), ultrasonik test (UT), radyografik test (RT) veya basınç testi gerektiren kritik uygulamalarda ek test maliyetleri oluşur.</li>
<li><strong>Yüzey işlemi:</strong> Kaynak sonrası taşlama, düzeltme, kumlama ve boyama gibi işlemler ekstra maliyet kalemi oluşturur.</li>
</ul>

<h3>Teklif Almak İçin Gerekli Bilgiler</h3>
<p>Kaynaklı imalat projelerinde ne kadar detaylı bilgi paylaşırsanız, teklif o kadar doğru ve hızlı olur:</p>
<ul>
<li><strong>Montaj çizimi:</strong> Birleştirme noktalarını, kaynak türlerini ve ölçüleri gösteren montaj resmi. DXF, DWG, STEP veya PDF formatı.</li>
<li><strong>Parça çizimleri:</strong> Her bir parçanın detay çizimi (kesim ve büküm boyutları).</li>
<li><strong>Malzeme listesi (BOM):</strong> Her parçanın malzeme cinsi, kalınlığı ve adedi.</li>
<li><strong>Kaynak kalite gereksinimleri:</strong> Standart mı, kritik mi? NDT gerekiyor mu?</li>
<li><strong>Sipariş adedi:</strong> Toplam kaç set/ünite üretilecek?</li>
<li><strong>Termin beklentisi:</strong> Ne zaman teslim edilmesi gerekiyor?</li>
<li><strong>Yüzey işlemi talebi:</strong> Boyama, kaplama veya özel yüzey işlemi gerekiyor mu?</li>
</ul>

<h3>Teklif Süreci</h3>
<p>Projenizin teknik çizimlerini ve yukarıdaki bilgileri <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile paylaşın. Teknik ekibimiz projenizi değerlendirerek kaynak yöntemi, malzeme ve işçilik hesaplamasını yapar. Basit birleştirme işlerinde aynı gün, kapsamlı kaynaklı imalat projelerinde 1-3 iş günü içinde detaylı teklif hazırlanır.</p>

<h3>Neden Komple Hizmet Avantajlıdır?</h3>
<p>Kesim, büküm ve kaynak işlemlerini farklı firmalara yaptırdığınızda taşıma maliyeti, bekleme süresi, boyutsal uyumsuzluk riski ve iletişim kopukluğu yaşanabilir. Kuzey Şafak Lazer olarak fiber lazer kesim, CNC plazma, CNC büküm ve kaynaklı imalat süreçlerinin tamamını İkitelli OSB'deki tek tesisimizde sunuyoruz. Komple imalat paketi ile toplam maliyet düşer, süre kısalır ve kalite artar.</p>

<h3>Projenize Özel Teklif İçin Hemen İletişime Geçin</h3>
<p>2010 yılından bu yana deneyimli kaynakçı kadromuz ve modern ekipmanlarımızla endüstriyel standartlarda kaynaklı imalat yapıyoruz. Projenizin detaylarını paylaşın, en kısa sürede size özel teklif sunalım.</p>`,
    relatedServices: ['kaynakli-imalat', 'lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'Kaynaklı imalat fiyatı nasıl hesaplanır?', a: 'Kaynaklı imalat fiyatı; kesim, büküm, kaynak işçiliği, dolgu malzemesi, koruyucu gaz tüketimi ve varsa ek işlem (taşlama, boyama) maliyetlerinin toplamıdır. Her proje teknik çizim incelenerek ayrı değerlendirilir.' },
      { q: 'Sadece kaynak yaptırabilir miyim?', a: 'Evet, kesilmiş ve bükülmüş parçalarınızı tesisimize getirerek sadece kaynak ve montaj hizmeti alabilirsiniz. Parçaların doğru boyutta ve birleştirmeye uygun durumda olması önemlidir.' },
      { q: 'Teklif ne kadar sürede gelir?', a: 'Basit birleştirme işlerinde aynı gün, kapsamlı kaynaklı imalat projelerinde 1-3 iş günü içinde detaylı teklif hazırlıyoruz. Proje karmaşıklığı ve parça sayısı süreyi etkiler.' },
      { q: 'Paslanmaz çelik kaynaklı imalat yapıyor musunuz?', a: 'Evet, TIG kaynak ile paslanmaz çelik (304, 316L) kaynaklı imalat yapıyoruz. Gıda sanayi, kimya sanayi ve mimari uygulamalarda deneyim sahibiyiz. Uygun dolgu malzemesi ve argon gazı ile yüksek kaliteli birleştirmeler sağlıyoruz.' },
      { q: 'Büyük projeler için kapasiteniz yeterli mi?', a: 'Atölye kapasitemiz dahilinde makine gövdesi, çelik konstrüksiyon, platform ve silo gibi büyük projeleri gerçekleştirebiliyoruz. Çok büyük projeler için kapasite ve termin değerlendirmesi teklif aşamasında yapılır.' }
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
