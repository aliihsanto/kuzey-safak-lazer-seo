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
    content: `<p><strong>DKP sac</strong> (Derin Kesme Profil / Soğuk Haddelenmiş Sac), sıcak haddelenmiş sacın asitle temizlendikten sonra oda sıcaklığında hadde silindirlerinden geçirilerek inceltilmesi ile elde edilen çelik sacdır. İngilizce karşılığı CRC (Cold Rolled Coil) veya CR (Cold Rolled) olarak bilinir.</p>

<h3>DKP Sac Özellikleri</h3>
<ul>
<li><strong>Yüzey Kalitesi:</strong> Parlak, düzgün ve pürüzsüz yüzey. Boyama ve kaplama için ideal altyapı sağlar.</li>
<li><strong>Kalınlık Toleransı:</strong> HRP saca göre çok daha dar kalınlık toleransları (±0.02mm).</li>
<li><strong>Şekillendirilebilirlik:</strong> Derin çekme, büküm ve damgalama işlemlerinde üstün performans.</li>
<li><strong>Kalınlık Aralığı:</strong> Genellikle 0.3mm ile 3mm arasında üretilir.</li>
</ul>

<h3>DKP ile HRP Sac Farkı</h3>
<p>HRP (sıcak haddelenmiş) sac, yüksek sıcaklıkta haddelenir ve mat, tufal kaplamalı bir yüzeye sahiptir. DKP sac ise soğuk haddeleme sonrası parlak, düzgün yüzeye sahiptir. DKP sac daha ince kalınlıklarda üretilebilir ve boyutsal hassasiyeti çok daha yüksektir.</p>

<h3>DKP Sac Kullanım Alanları</h3>
<p>DKP saclar; otomotiv karoseri parçaları, beyaz eşya gövdeleri, elektrik panoları, mobilya aksesuarları, aydınlatma armatürleri, elektronik cihaz kasaları ve hassas sac metal imalatında yaygın olarak kullanılır.</p>

<h3>DKP Sac Lazer Kesim</h3>
<p>Kuzey Şafak Lazer olarak DKP sacları fiber lazer ile mikron düzeyinde hassasiyetle kesiyoruz. DKP'nin düzgün yüzey kalitesi, lazer kesim sonrası ek yüzey işlemi gerektirmeden doğrudan boyama veya kaplama işlemine geçilmesine olanak tanır.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'DKP sac ile galvaniz sac arasındaki fark nedir?', a: 'DKP sac kaplanmamış soğuk haddelenmiş çeliktir, korozyona açıktır ve boyama gerektirir. Galvaniz sac ise DKP veya HRP sacın çinko kaplanmış halidir ve korozyon direnci yüksektir.' },
      { q: 'DKP sac en kalın kaç mm olur?', a: 'DKP sac genellikle 0.3mm ile 3mm aralığında üretilir. Daha kalın ihtiyaçlarda HRP (sıcak haddelenmiş) sac kullanılır.' },
      { q: 'DKP sac lazer kesim fiyatı nasıl hesaplanır?', a: 'DKP sac lazer kesim fiyatı; sac kalınlığı, kesim uzunluğu, parça adedi ve geometri karmaşıklığına göre projeye özel belirlenir. Detaylı teklif için teknik çiziminizi gönderebilirsiniz.' }
    ]
  },

  {
    slug: 'galvaniz-sac-nedir',
    title: 'Galvaniz Sac Nedir? Özellikleri ve Kullanım Alanları | Kuzey Şafak Lazer',
    h1: 'Galvaniz Sac Nedir?',
    metaDesc: 'Galvaniz sac nedir, çeşitleri nelerdir, nerelerde kullanılır? Sıcak daldırma ve elektrolitik galvaniz farkları. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Galvaniz sac</strong>, çelik sacın korozyona (paslanmaya) karşı korunması amacıyla çinko (Zn) ile kaplanması sonucu elde edilen bir malzemedir. Çinko kaplama, çelik yüzeyinde koruyucu bir bariyer oluşturarak sacın ömrünü 5-10 kat artırır.</p>

<h3>Galvaniz Kaplama Yöntemleri</h3>
<ul>
<li><strong>Sıcak Daldırma Galvaniz (HDG):</strong> Sac, erimiş çinko banyosuna daldırılır. Kalın ve dayanıklı kaplama oluşur. Dış mekan ve ağır korozyon koşullarında tercih edilir.</li>
<li><strong>Elektrolitik Galvaniz (EG):</strong> Çinko kaplaması elektroliz yöntemiyle uygulanır. Daha ince, düzgün ve estetik yüzey sağlar. İç mekan ve boyama gerektiren uygulamalarda tercih edilir.</li>
</ul>

<h3>Galvaniz Sac Teknik Özellikleri</h3>
<p>Galvaniz saclar DX51D, DX52D, DX53D ve DX56D gibi çelik kalitelerinde üretilir. Kaplama kalınlığı Z100 (100 g/m²) ile Z275 (275 g/m²) arasında değişir. Kaplama kalınlığı arttıkça korozyon direnci artar. Standart kalınlık aralığı 0.3mm-3mm'dir.</p>

<h3>Galvaniz Sac Nerelerde Kullanılır?</h3>
<p>Havalandırma kanalları, çatı kaplama, yağmur oluğu, elektrik panoları, otomotiv parçaları, tarım makineleri ve genel sac metal imalatında en çok tercih edilen malzemelerden biridir. Dış mekan kullanımında boyasız bile uzun ömür sunar.</p>

<h3>Galvaniz Sac Lazer Kesim</h3>
<p>Kuzey Şafak Lazer olarak galvaniz sacları fiber lazer ile çapaksız ve oksidasyonsuz kesiyoruz. Lazer kesim, galvaniz kaplamanın bütünlüğünü bozmadan kesim yapabilir. Azot gazı ile yapılan kesimlerde kenar bölgesinde çinko kaplamanın minimum zarar görmesi sağlanır.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum'],
    faq: [
      { q: 'Galvaniz sac paslanır mı?', a: 'Galvaniz sacın çinko kaplaması bozulmadığı sürece paslanmaz. Ancak kesim, kaynak veya mekanik hasar görmüş bölgelerde çinko katodik koruma sağlayarak paslanmayı yavaşlatır.' },
      { q: 'Galvaniz sac lazer ile kesilince kaplama bozulur mu?', a: 'Lazer kesim dar bir ısı etki alanı oluşturur. Kesim kenarından 0.1-0.3mm mesafede çinko kaplama etkilenebilir ancak bu alan çinkonun katodik koruma etkisiyle halen korunur.' },
      { q: 'Galvaniz sac kaynağı yapılabilir mi?', a: 'Evet, ancak kaynak sırasında çinko buharı açığa çıkar. Uygun kaynak parametreleri ve iyi havalandırma ile galvaniz sac başarıyla kaynaklanabilir.' }
    ]
  },

  {
    slug: 'st37-celik-nedir',
    title: 'St37 Çelik Nedir? Özellikleri ve Kullanımı | Kuzey Şafak Lazer',
    h1: 'St37 Çelik Nedir?',
    metaDesc: 'St37 çelik nedir, S235JR ile farkı nedir, nerelerde kullanılır? St37 çelik sac özellikleri ve lazer kesim bilgileri. Kuzey Şafak Lazer.',
    category: 'bilgi',
    content: `<p><strong>St37</strong> (DIN standardı) veya güncel Avrupa standardıyla <strong>S235JR</strong>, genel amaçlı yapısal karbon çeliktir. Sanayide en yaygın kullanılan çelik kalitesidir. "St" yapısal çelik (Stahl) anlamına gelir, "37" ise minimum çekme dayanımını (370 N/mm²) ifade eder.</p>

<h3>St37 Çelik Mekanik Özellikleri</h3>
<ul>
<li><strong>Çekme Dayanımı:</strong> 360-510 N/mm²</li>
<li><strong>Akma Dayanımı:</strong> Min. 235 N/mm² (16mm altı kalınlıklarda)</li>
<li><strong>Uzama:</strong> %26 (uzunlamasına)</li>
<li><strong>Karbon İçeriği:</strong> Maks. %0.17</li>
<li><strong>Yoğunluk:</strong> 7.85 g/cm³</li>
</ul>

<h3>St37 ve S235JR İlişkisi</h3>
<p>St37 eski DIN 17100 standardına aittir. Günümüzde EN 10025-2 standardıyla S235JR olarak anılır. Pratikte aynı malzemeyi ifade eder. "S" yapısal (Structural), "235" akma dayanımı (MPa), "JR" ise darbe testi koşulunu (oda sıcaklığında 27J) belirtir.</p>

<h3>Nerelerde Kullanılır?</h3>
<p>St37 çelik; çelik konstrüksiyon, makine imalatı, genel sac metal işleri, kaynaklı imalat, boru ve profil üretimi, tarım makineleri, taşıyıcı platformlar ve depo rafı sistemlerinde yaygın olarak kullanılır. İyi kaynaklanabilirliği ve ekonomik fiyatı ile endüstrinin temel malzemesidir.</p>

<h3>St37 Sac Lazer ve Plazma Kesim</h3>
<p>Kuzey Şafak Lazer olarak St37 sacları fiber lazer (0.5-25mm) ve CNC plazma (6-50mm) ile kesiyoruz. St37 çelik, tüm termal kesim yöntemleriyle sorunsuz işlenebilir. Lazer kesim sonrası büküm, kaynak ve boyama işlemlerine kolayca geçilebilir.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma', 'kaynakli-imalat'],
    faq: [
      { q: 'St37 ile St52 arasındaki fark nedir?', a: 'St37 (S235JR) 235 MPa akma dayanımına sahipken, St52 (S355JR) 355 MPa akma dayanımına sahiptir. St52, daha yüksek mukavemet gerektiren yapısal uygulamalarda tercih edilir.' },
      { q: 'St37 sac kaynak edilebilir mi?', a: 'Evet, St37 çelik mükemmel kaynak edilebilirliğe sahiptir. MIG/MAG, TIG ve elektrot kaynak yöntemlerinin tamamıyla sorunsuz birleştirilir.' },
      { q: 'St37 sac kalınlıkları nelerdir?', a: 'Piyasada St37 saclar 0.5mm ile 200mm arasında bulunur. Lazer kesim için 0.5-25mm, plazma kesim için 6-50mm kalınlık aralığında hizmet veriyoruz.' }
    ]
  },

  {
    slug: 'kaynak-nedir',
    title: 'Kaynak (Welding) Nedir? Kaynak Çeşitleri | Kuzey Şafak Lazer',
    h1: 'Kaynak Nedir? Temel Kaynak Yöntemleri',
    metaDesc: 'Kaynak nedir, kaynak çeşitleri nelerdir? MIG, TIG, elektrot kaynak farkları. Endüstriyel kaynaklı imalat rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Kaynak</strong> (welding), iki veya daha fazla metal parçanın ısı, basınç veya her ikisinin kombinasyonu kullanılarak kalıcı olarak birleştirilmesi işlemidir. Metal imalat sektörünün en temel birleştirme yöntemidir ve doğru uygulandığında ana malzeme kadar güçlü bağlantılar oluşturur.</p>

<h3>Yaygın Kaynak Yöntemleri</h3>
<ul>
<li><strong>MIG/MAG Kaynak (GMAW):</strong> Koruyucu gaz altında eritken tel elektrot ile yapılır. Yüksek hızlı, verimli ve öğrenmesi kolay. Seri üretimde en çok tercih edilen yöntem.</li>
<li><strong>TIG Kaynak (GTAW):</strong> Tungsten elektrot ile koruyucu gaz (argon) altında yapılır. Yüksek kaliteli, temiz ve estetik kaynak dikişi oluşturur. Paslanmaz çelik ve alüminyumda tercih edilir.</li>
<li><strong>Elektrot Kaynak (SMAW):</strong> Örtülü elektrot ile yapılır. Saha koşullarında ve kalın malzemelerde kullanılır. Ekipman basitliği avantajdır.</li>
<li><strong>Punta Kaynak (Spot Welding):</strong> İnce sacların nokta birleştirmesinde kullanılır. Otomotiv ve beyaz eşya sektöründe yaygın.</li>
</ul>

<h3>Kaynak Kalitesini Etkileyen Faktörler</h3>
<p>Kaynak kalitesi; doğru kaynak parametreleri (akım, voltaj, hız), uygun kaynak dolgu malzemesi, temiz birleştirme yüzeyleri, uygun kaynak pozisyonu ve operatör tecrübesine bağlıdır. Kuzey Şafak Lazer olarak deneyimli kaynakçı kadromuzla endüstriyel standartlarda kaynaklı imalat yapıyoruz.</p>

<h3>Endüstriyel Kaynaklı İmalat</h3>
<p>Kaynaklı imalat; makine şasileri, çelik konstrüksiyon, tank ve silo üretimi, taşıma ekipmanları, platform ve merdiven imalatı gibi birçok alanda kritik öneme sahiptir. Doğru kaynak yöntemi seçimi, projenin malzeme türü, kalınlığı, dayanım gereksinimi ve estetik beklentisine göre belirlenir.</p>`,
    relatedServices: ['kaynakli-imalat'],
    faq: [
      { q: 'En güçlü kaynak yöntemi hangisidir?', a: 'Tüm ark kaynak yöntemleri (MIG, TIG, elektrot) doğru uygulandığında ana malzeme dayanımına yakın bağlantılar oluşturur. En güçlü yöntem, uygulamaya en uygun olan yöntemdir.' },
      { q: 'Paslanmaz çelik hangi yöntemle kaynaklanır?', a: 'Paslanmaz çelik en kaliteli sonuçlar için TIG kaynak ile birleştirilir. Seri üretimde MIG kaynak da başarıyla kullanılabilir. Önemli olan uygun dolgu malzemesi ve koruyucu gaz seçimidir.' },
      { q: 'Kaynaklı imalat süresi ne kadar sürer?', a: 'Süre projenin karmaşıklığına, parça sayısına ve kaynak tipine bağlıdır. Basit birleştirmeler saatler içinde tamamlanırken, büyük konstrüksiyonlar günler sürebilir. Projenize özel süre bilgisi için bizimle iletişime geçin.' }
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
    content: `<p><strong>Sac metal imalat</strong>, düz metal sacların kesilmesi, bükülmesi, kaynaklanması ve yüzey işlemi uygulanarak nihai ürün haline getirilmesi sürecidir. Tasarımdan bitmiş ürüne kadar uzanan bu süreç, birden fazla aşamadan oluşur.</p>

<h3>1. Tasarım ve Teknik Çizim</h3>
<p>Süreç, 2D veya 3D CAD yazılımında (SolidWorks, AutoCAD, Inventor) parça tasarımı ile başlar. Açınım (flat pattern) çıkarılarak kesim dosyası hazırlanır. Büküm toleransları, kaynak erişimi ve malzeme özellikleri tasarım aşamasında dikkate alınır.</p>

<h3>2. Malzeme Kesimi</h3>
<p>Tasarım onayı sonrası saclar kesim işlemine alınır. Lazer kesim (ince-orta kalınlık) veya plazma kesim (kalın malzeme) ile CNC kontrollü hassas kesim yapılır. Kesim yöntemi malzeme türü, kalınlığı ve tolerans gereksinimine göre belirlenir.</p>

<h3>3. Büküm / Şekillendirme</h3>
<p>Kesilen parçalar CNC abkant preste programlanan açılara göre bükülür. Büküm sırası (bending sequence) parça geometrisine göre optimize edilir. Karmaşık parçalarda çoklu büküm adımları uygulanır.</p>

<h3>4. Kaynak ve Montaj</h3>
<p>Bükülmüş parçalar birbirine veya diğer bileşenlere MIG/MAG veya TIG kaynak ile birleştirilir. Fikstür kullanılarak boyutsal doğruluk sağlanır. Kaynak sonrası gerekirse taşlama ve düzeltme yapılır.</p>

<h3>5. Yüzey İşlemi</h3>
<p>Son aşamada parçalar kumlama, fosfatlama, toz boya, ıslak boya veya galvaniz kaplama gibi yüzey işlemlerinden geçer. Amaç hem koruma (korozyon direnci) hem de estetik sağlamaktır.</p>

<p>Kuzey Şafak Lazer olarak İkitelli OSB'deki tesisimizde kesimden kaynağa kadar tüm sac metal imalat süreçlerini tek çatı altında gerçekleştiriyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat', 'cnc-plazma'],
    faq: [
      { q: 'Sac metal imalat için teknik çizim şart mı?', a: 'Evet, hassas imalat için teknik çizim (DXF, DWG veya STEP formatı) gereklidir. Teknik çiziminiz yoksa, eskiz veya numune parçadan çizim oluşturulabilir.' },
      { q: 'Sac metal imalat süresi ne kadardır?', a: 'Basit parçalarda 1-2 iş günü, karmaşık kaynaklı imalatlarda 5-10 iş günü sürebilir. Proje detaylarına göre kesin süre bilgisi teklif aşamasında verilir.' },
      { q: 'Minimum sipariş adedi var mı?', a: 'Kuzey Şafak Lazer olarak tek parçadan seri üretime kadar her adette hizmet veriyoruz. Minimum sipariş limiti uygulamıyoruz.' }
    ]
  },

  {
    slug: 'lazer-kesim-dosyasi-nasil-hazirlanir',
    title: 'Lazer Kesim Dosyası Nasıl Hazırlanır? DXF Rehberi | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim Dosyası Nasıl Hazırlanır?',
    metaDesc: 'Lazer kesim için DXF dosyası nasıl hazırlanır? AutoCAD ve SolidWorks ile kesim dosyası hazırlama rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Lazer kesim dosyası</strong>, CNC lazer kesim makinesinin okuduğu ve kesim yollarını takip ettiği dijital çizim dosyasıdır. En yaygın format DXF (Drawing Exchange Format) olmakla birlikte DWG, STEP, IGES ve AI formatları da kullanılabilir.</p>

<h3>DXF Dosyası Hazırlarken Dikkat Edilecekler</h3>
<ul>
<li><strong>Ölçek 1:1 olmalı:</strong> Çizim gerçek boyutlarda (mm cinsinden) hazırlanmalıdır.</li>
<li><strong>Kapalı konturlar:</strong> Tüm kesim hatları kapalı polyline olmalı. Açık uçlu çizgiler kesim hatasına neden olur.</li>
<li><strong>Çift çizgi yok:</strong> Üst üste binen çizgiler temizlenmelidir.</li>
<li><strong>Minimum detay boyutu:</strong> Delik çapı en az malzeme kalınlığı kadar olmalıdır (örn: 2mm sacda min. 2mm delik).</li>
<li><strong>Spline yerine polyline:</strong> Eğriler mümkünse polyline arc segmentleri ile çizilmelidir.</li>
</ul>

<h3>AutoCAD ile DXF Hazırlama</h3>
<p>AutoCAD'de parçanızı 1:1 ölçekte çizin. Tüm çizgileri tek bir layer'da toplayın. "Save As" ile DXF R12 veya R14 formatında kaydedin. Ölçü çizgileri ve yazıları silmeyi unutmayın; sadece kesim konturları kalmalıdır.</p>

<h3>SolidWorks ile DXF Hazırlama</h3>
<p>SolidWorks'te 3D modelinizin sac metal (sheet metal) özelliğinden "Flatten" yaparak açınım alın. "Save As DXF/DWG" seçeneği ile kaydedin. Büküm çizgilerini ayrı layer'a atarak kesimcinin büküm referanslarını görmesini sağlayabilirsiniz.</p>

<h3>Dosyanız Yoksa Ne Yapabilirsiniz?</h3>
<p>Elimizde teknik çizim olması ideal olmakla birlikte, bir eskiz, numune parça veya el çizimi ile de çalışabiliriz. Kuzey Şafak Lazer teknik ekibi, ilettiğiniz referanslara göre DXF dosyasını sizin adınıza hazırlayabilir.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Hangi dosya formatlarını kabul ediyorsunuz?', a: 'DXF, DWG, STEP, IGES, AI (Adobe Illustrator), PDF ve hatta JPG/PNG görselden bile çizim çıkarabiliriz. En ideal format ölçekli DXF dosyasıdır.' },
      { q: 'DXF dosyam yoksa ne yapmalıyım?', a: 'Bize numune parça, eskiz veya ölçülü el çizimi göndermeniz yeterlidir. Teknik ekibimiz dosyanızı oluşturarak kesime hazır hale getirir.' },
      { q: '3D model gönderebilir miyim?', a: 'Evet, STEP veya IGES formatında 3D model gönderebilirsiniz. Sac metal parçalar için açınım çıkararak kesim dosyasını hazırlarız.' }
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
    content: `<p><strong>Lazer kesim</strong> ve <strong>plazma kesim</strong>, endüstride en yaygın kullanılan iki CNC termal kesim yöntemidir. Her ikisi de metal sacları CNC kontrollü olarak keser, ancak çalışma prensipleri, hassasiyetleri ve uygulama alanları farklıdır.</p>

<h3>Kesim Prensibi Farkı</h3>
<p>Lazer kesim, odaklanmış bir lazer ışını ile malzemeyi eritir/buharlaştırır. Plazma kesim ise elektrik arkı ile iyonize edilmiş gaz (plazma) kullanarak metali keser. Lazer'in odak noktası 0.1mm'den küçükken, plazma arkının genişliği 1-2mm'dir.</p>

<h3>Hassasiyet Karşılaştırması</h3>
<ul>
<li><strong>Lazer kesim toleransı:</strong> ±0.1mm</li>
<li><strong>Plazma kesim toleransı:</strong> ±0.5-1mm</li>
<li><strong>Lazer kerf genişliği:</strong> 0.1-0.3mm</li>
<li><strong>Plazma kerf genişliği:</strong> 1.5-3mm</li>
</ul>

<h3>Kalınlık Kapasitesi</h3>
<p>Fiber lazer ile çelikte 25mm'ye kadar ekonomik kesim yapılabilir. Plazma ile 50mm ve üzeri kalınlıklarda verimli kesim mümkündür. 10mm altı kalınlıklarda lazer açık ara öndedir; 20mm üzerinde plazma maliyet avantajı sağlar.</p>

<h3>Kenar Kalitesi</h3>
<p>Lazer kesimde kenar yüzeyi pürüzsüz ve dikeydir, çapak minimumdur. Plazma kesimde kenar daha pürüzlü olabilir ve alt kenarda çapak (dross) oluşabilir. Lazer kesim sonrası genellikle ek bir talaşlı imalat gerekmezken, plazma kesim sonrası taşlama gerekebilir.</p>

<h3>Maliyet Karşılaştırması</h3>
<p>İnce saclarda (0.5-10mm) lazer kesim hem daha hızlı hem de birim maliyette daha ekonomiktir. Kalın saclarda (20mm+) plazma kesim çok daha uygun maliyetlidir. Orta kalınlıklarda (10-20mm) proje gereksinimlerine göre en uygun yöntem belirlenir.</p>

<p>Kuzey Şafak Lazer olarak hem fiber lazer kesim hem de CNC plazma kesim hizmeti sunuyoruz. Projenizin teknik gereksinimlerine göre en uygun yöntemi birlikte belirleyelim.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma'],
    faq: [
      { q: 'İnce saclar için lazer mı plazma mı kullanmalıyım?', a: '10mm altı kalınlıklarda lazer kesim her zaman daha iyi sonuç verir. Daha yüksek hassasiyet, temiz kenar ve minimum çapak sağlar.' },
      { q: 'Plazma kesim ne zaman lazere tercih edilir?', a: '20mm üzeri kalın çelik saclarda plazma kesim maliyet ve hız avantajı sağlar. Yapısal çelik, konstrüksiyon ve ağır sanayi parçalarında plazma tercih edilir.' },
      { q: 'Her iki yöntemi bir projede birlikte kullanabilir miyiz?', a: 'Evet, karma projelerde kalın parçalar plazma, hassas parçalar lazer ile kesilebilir. Bu yaklaşım maliyet optimizasyonu sağlar.' }
    ]
  },

  {
    slug: 'tig-mig-kaynak-farki',
    title: 'TIG vs MIG Kaynak: Farklar ve Avantajlar | Kuzey Şafak Lazer',
    h1: 'TIG Kaynak ile MIG Kaynak Arasındaki Farklar',
    metaDesc: 'TIG kaynak mı MIG kaynak mı? Her iki yöntemin avantajları, dezavantajları ve kullanım alanları karşılaştırması. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>TIG kaynak</strong> (Tungsten Inert Gas / GTAW) ve <strong>MIG kaynak</strong> (Metal Inert Gas / GMAW), endüstriyel imalatta en çok kullanılan iki koruyucu gaz altı kaynak yöntemidir. Her ikisi de yüksek kaliteli birleştirmeler sağlar ancak farklı avantajlara sahiptir.</p>

<h3>Çalışma Prensibi Farkı</h3>
<p>TIG kaynak: Eritmeyen tungsten elektrot ile ark oluşturulur, dolgu malzemesi elle ayrı beslenir. Argon veya helyum koruyucu gaz kullanılır.</p>
<p>MIG kaynak: Eritken tel elektrot hem ark kaynağı hem de dolgu malzemesi görevi görür. Tel otomatik olarak beslenir. Argon+CO2 veya saf CO2 karışım gazı kullanılır.</p>

<h3>Avantaj ve Dezavantaj Karşılaştırması</h3>
<ul>
<li><strong>Hız:</strong> MIG kaynak, otomatik tel beslemesi sayesinde TIG'e göre 3-5 kat daha hızlıdır.</li>
<li><strong>Kalite:</strong> TIG kaynak daha temiz, gözeneksiz ve estetik kaynak dikişi oluşturur.</li>
<li><strong>Beceri gereksinimi:</strong> TIG kaynak çift el koordinasyonu gerektirir ve daha yüksek operatör becerisi ister.</li>
<li><strong>Malzeme kalınlığı:</strong> TIG 0.5mm gibi çok ince malzemelerde üstündür. MIG 1mm üzeri kalınlıklarda verimlidir.</li>
<li><strong>Maliyet:</strong> MIG kaynak seri üretimde işçilik maliyetini önemli ölçüde düşürür.</li>
</ul>

<h3>Malzemeye Göre Tercih</h3>
<p><strong>Paslanmaz çelik:</strong> Estetik önemli ise TIG, seri üretimde MIG tercih edilir. <strong>Alüminyum:</strong> İnce alüminyumda TIG vazgeçilmezdir; kalın alüminyumda pulslu MIG kullanılabilir. <strong>Karbon çelik:</strong> Genel imalatta MIG/MAG en ekonomik seçimdir.</p>

<h3>Kuzey Şafak Lazer'de Kaynak Hizmetleri</h3>
<p>Tesisimizde hem TIG hem MIG kaynak kapasitesine sahibiz. Projenizin malzeme türü, kalınlığı, estetik ve dayanım gereksinimlerine göre en uygun kaynak yöntemini belirliyor ve uyguluyor.</p>`,
    relatedServices: ['kaynakli-imalat'],
    faq: [
      { q: 'Paslanmaz çelik için hangi kaynak yöntemi daha iyi?', a: 'Estetik ve korozyon direnci önemli ise TIG kaynak tercih edilir. Seri üretimde ve görünmeyen birleştirmelerde MIG/MAG kaynak da başarıyla kullanılır.' },
      { q: 'MIG kaynak dikişi TIG kadar dayanıklı mıdır?', a: 'Evet, her iki yöntem de doğru uygulandığında benzer mekanik dayanım sağlar. Fark daha çok estetik, gözeneklilik ve ısı girdisinde ortaya çıkar.' },
      { q: 'Alüminyum kaynak yapıyor musunuz?', a: 'Evet, TIG kaynak ile alüminyum birleştirme yapıyoruz. AC (alternatif akım) TIG kaynak, alüminyumun oksit tabakasını temizleyerek kaliteli birleştirme sağlar.' }
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
