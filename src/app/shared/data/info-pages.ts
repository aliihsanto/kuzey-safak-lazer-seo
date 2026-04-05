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
    content: `<p><strong>CNC plazma kesim fiyatı</strong>, malzeme cinsi, kalınlığı, toplam kesim uzunluğu, parça geometrisi ve sipariş adedine göre projeye özel olarak hesaplanır. Plazma kesim, özellikle 15mm üzeri kalınlıklardaki çelik ve paslanmaz sac kesiminde lazer kesime göre belirgin maliyet avantajı sunar. Kuzey Şafak Lazer olarak projenizin teknik detaylarını inceleyerek en doğru ve rekabetçi CNC plazma kesim fiyat teklifini oluşturuyoruz.</p>

<h3>CNC Plazma Kesim Fiyatını Etkileyen Faktörler</h3>
<p>Plazma kesim fiyatlandırmasını etkileyen temel parametreler aşağıda detaylandırılmıştır. Bu faktörleri anlamak, kalın sac kesim projeleriniz için doğru bütçe planlaması yapmanıza yardımcı olur.</p>
<ul>
<li><strong>Malzeme kalınlığı:</strong> 6mm ile 50mm arasında CNC plazma kesim yapıyoruz. Kalınlık arttıkça kesim hızı düşer, amperaj yükselir ve plazma gazı ile sarf malzeme (nozul, elektrot) tüketimi artar. 10mm çelik ile 40mm çelik arasında önemli maliyet farkı oluşur.</li>
<li><strong>Malzeme cinsi:</strong> Çelik, paslanmaz çelik, alüminyum ve Hardox gibi aşınma çelikleri farklı plazma gaz kombinasyonları ve kesim parametreleri gerektirir. Paslanmaz çelik ve alüminyum kesimde özel gaz karışımları kullanılması maliyeti etkiler.</li>
<li><strong>Toplam kesim uzunluğu (metre):</strong> Plazma kesim fiyatlandırmasının temel birimi metre başına (TL/m) hesaplanır. Parçanın dış kontur, iç kesim ve detaylarının toplam metresi, kesim süresini ve dolayısıyla maliyeti belirler.</li>
<li><strong>Parça geometrisi:</strong> Düz kesim ve basit geometriler yüksek hızda kesilirken, çok sayıda iç kesim (delik, pencere), dar kesim aralıkları ve karmaşık konturlar kesim süresini artırır. Delik delme (piercing) sayısı da toplam süreyi etkiler.</li>
<li><strong>Parça adedi:</strong> Yüksek adetlerde nesting optimizasyonu ile fire oranı düşer, setup maliyeti parça başına azalır ve birim fiyat düşer.</li>
<li><strong>Malzeme temini:</strong> Kalın çelik plakalarını sizin adınıza tedarik edebilir ve malzeme dahil paket fiyat sunabiliriz. Kendi malzemenizi getirmeniz durumunda sadece kesim işçiliği fiyatlanır.</li>
<li><strong>Ek işlem talepleri:</strong> Plazma kesim sonrası taşlama, çapak temizleme, CNC büküm veya kaynak gibi ek işlemler toplam maliyete eklenir.</li>
</ul>

<h3>Plazma mı Lazer mi Daha Uygun? Maliyet Karşılaştırması</h3>
<p>15mm altı kalınlıklarda genellikle fiber lazer kesim hem daha hassas (±0.1mm) hem de birim maliyette daha ekonomiktir. 15mm üzerinde ise CNC plazma kesim belirgin maliyet avantajı sağlar. 20mm ve üzeri kalınlıklarda plazma, lazer kesime göre 2-4 kat daha uygun fiyatlı olabilir. Projenizde hem ince hem kalın parçalar bulunuyorsa, ince parçaları lazer, kalın parçaları plazma ile keserek karma teklif hazırlıyoruz. Bu yaklaşım, her parçanın en uygun yöntemle işlenmesini sağlayarak toplam maliyeti optimize eder.</p>

<h3>Teklif Almak İçin Gerekli Bilgiler</h3>
<ul>
<li><strong>Kesim dosyası:</strong> DXF, DWG veya ölçülü teknik çizim. PDF formatında detaylı çizim de kabul edilir.</li>
<li><strong>Malzeme cinsi:</strong> Çelik (St37, St52), paslanmaz çelik, alüminyum veya Hardox.</li>
<li><strong>Malzeme kalınlığı:</strong> mm cinsinden.</li>
<li><strong>Sipariş adedi:</strong> Kaç adet kesilecek?</li>
<li><strong>Malzeme temini:</strong> Sizden mi, bizden mi?</li>
<li><strong>Ek işlem talebi:</strong> Taşlama, büküm, kaynak gerekiyor mu?</li>
</ul>

<h3>Teklif Süreci</h3>
<p>Kesim dosyanızı ve yukarıdaki bilgileri <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile gönderin. Teknik ekibimiz dosyanızı inceleyerek nesting simülasyonu yapar, kesim süresini hesaplar ve projenize özel fiyat teklifi oluşturur. Standart siparişlerde aynı gün fiyat teklifi dönüşü yapıyoruz.</p>

<h3>Kuzey Şafak Lazer'de Plazma Kesim Avantajı</h3>
<p>2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde 2000x6000mm kesim tablalı CNC plazma makinemizle hizmet veriyoruz. Aynı tesis bünyesinde fiber lazer kesim, CNC büküm ve kaynaklı imalat hizmetlerimiz de bulunduğundan, kalın sac projenizi kesimden montaja kadar tek çatı altında tamamlayabilirsiniz. Hemen iletişime geçin, projenize özel plazma kesim teklifi alın.</p>`,
    relatedServices: ['cnc-plazma', 'lazer-kesim'],
    faq: [
      { q: 'Plazma kesim lazer kesimden daha mı ucuz?', a: '15mm üzeri kalın saclarda plazma kesim, lazer kesime göre 2-4 kat daha ekonomik olabilir. İnce saclarda (10mm altı) ise lazer kesim hem kalite hem maliyet olarak avantajlıdır. Geçiş bölgesinde (10-15mm) projeye özel değerlendirme yapılır.' },
      { q: 'Plazma kesim toleransı ne kadardır?', a: 'CNC plazma kesim ile ±0.5mm genel tolerans sağlıyoruz. Daha dar tolerans gerektiren parçalar için fiber lazer kesim öneriyoruz. Yapısal çelik uygulamalarında plazma toleransı fazlasıyla yeterlidir.' },
      { q: 'Aynı projede plazma ve lazer kesim birlikte kullanılabilir mi?', a: 'Evet, aynı projede kalın parçaları CNC plazma, ince ve hassas parçaları fiber lazer ile keserek her parçanın en uygun yöntemle işlenmesini sağlıyoruz. Karma teklif ile toplam maliyet optimize edilir.' },
      { q: 'Kalın sac malzeme tedariki yapıyor musunuz?', a: 'Evet, 6-50mm kalınlık aralığında çelik, paslanmaz ve Hardox plakalarını sizin adınıza tedarik edebilir ve malzeme dahil paket fiyat sunabiliriz.' },
      { q: 'Plazma kesim sonrası taşlama gerekir mi?', a: 'CNC plazma kesimde kenar kalitesi çoğu yapısal uygulama için yeterlidir. Gerektiğinde kesim sonrası taşlama ve çapak temizleme hizmeti de sunuyoruz. Lazer kesime kıyasla plazma kesimde ek taşlama ihtiyacı daha sık oluşabilir.' }
    ]
  },

  {
    slug: 'sac-metal-imalat-teklif',
    title: 'Sac Metal İmalat Teklif Al | Komple Çözüm | Kuzey Şafak Lazer',
    h1: 'Sac Metal İmalat Teklif Alın',
    metaDesc: 'Komple sac metal imalat teklifi alın. Kesim, büküm, kaynak bir arada. Projenize özel fiyatlandırma. Kuzey Şafak Lazer İstanbul İkitelli.',
    category: 'teklif',
    content: `<p><strong>Sac metal imalat fiyatı</strong>, projenin kapsamına göre kesim, büküm, kaynak, montaj ve yüzey işlemi aşamalarının toplam maliyetinden oluşur. Her bir aşamanın karmaşıklığı, kullanılan malzeme türü ve kalınlığı, parça adedi ve tolerans gereksinimleri toplam fiyatı belirler. Kuzey Şafak Lazer olarak projenizin tüm aşamalarını detaylı şekilde değerlendirerek en doğru ve rekabetçi komple imalat teklifini oluşturuyoruz.</p>

<h3>Sac Metal İmalat Fiyatını Etkileyen Temel Faktörler</h3>
<p>Komple sac metal imalat fiyatlandırması, birden fazla maliyet kaleminin toplamıdır. Bu faktörleri anlamak, projeniz için gerçekçi bir bütçe planlaması yapmanıza yardımcı olur.</p>
<ul>
<li><strong>İşlem kapsamı:</strong> Sadece kesim mi, kesim+büküm mü, yoksa kesim+büküm+kaynak+boyama mı? Her ek işlem adımı toplam maliyete eklenir. Ancak tüm işlemleri tek tedarikçiden almanız, ara taşıma ve koordinasyon giderlerini ortadan kaldırarak toplam maliyeti düşürür.</li>
<li><strong>Malzeme türü ve kalınlığı:</strong> Farklı malzemeler farklı kesim hızları, büküm tonajları ve kaynak yöntemleri gerektirir. Paslanmaz çelik ve alüminyum, karbon çeliğe göre daha yüksek ham madde ve işleme maliyetine sahiptir. Galvaniz sac korozyon koruması sağlarken, DKP sac boyama öncesi yüzey hazırlığı gerektirir.</li>
<li><strong>Parça karmaşıklığı:</strong> Basit bir L büküm parçası ile çok bükümlü, kaynaklı ve çok parçalı bir kutu imalatı arasında önemli maliyet farkı vardır. Geometri karmaşıklığı, delik ve detay sayısı, büküm adımları ve kaynak uzunluğu parça başına maliyeti belirler.</li>
<li><strong>Toplam sipariş adedi:</strong> Seri üretimde kesim nesting optimizasyonu, büküm program setup ve kaynak fikstür maliyetleri parçalara dağıtılır ve birim fiyat belirgin şekilde düşer. Tek parça prototip ile 500 adetlik seri arasında birim maliyet önemli farklılık gösterir.</li>
<li><strong>Yüzey işlemi:</strong> Toz boya, ıslak boya, sıcak daldırma galvaniz veya elektropolisaj gibi yüzey işlemleri ek maliyet oluşturur. Yüzey işlemi gereksinimi, parçanın kullanım ortamına ve estetik beklentisine göre belirlenir.</li>
<li><strong>Tolerans ve kalite gereksinimleri:</strong> Standart endüstriyel toleranslar (lazer ±0.1mm, büküm ±0.1°) çoğu uygulama için yeterlidir. Özel dar tolerans veya NDT testi gerektiren uygulamalarda ek kontrol ve işlem maliyeti oluşabilir.</li>
<li><strong>Teslimat süresi:</strong> Standart termin süreleri içinde ek ücret uygulanmaz. Acil siparişlerde hızlandırılmış üretim (express) ücreti uygulanabilir.</li>
</ul>

<h3>Teklif Almak İçin Gerekli Bilgiler</h3>
<p>Komple sac metal imalat projelerinde detaylı bilgi paylaşımı, doğru ve hızlı teklif almanın anahtarıdır:</p>
<ul>
<li><strong>Teknik çizimler:</strong> Parça çizimleri ve montaj resmi. DXF, DWG, STEP veya PDF formatı. Büküm açıları, kaynak sembolleri ve toleransların belirtilmiş olması idealdir.</li>
<li><strong>Malzeme listesi (BOM):</strong> Her parçanın malzeme cinsi, kalınlığı ve adedi.</li>
<li><strong>İşlem kapsamı:</strong> Hangi işlemler gerekiyor? (Kesim, büküm, kaynak, montaj, boyama)</li>
<li><strong>Sipariş adedi:</strong> Kaç set/ünite üretilecek?</li>
<li><strong>Yüzey işlemi:</strong> Toz boya rengi, galvaniz kaplama veya özel işlem talebi.</li>
<li><strong>Termin beklentisi:</strong> Teslim tarihi.</li>
</ul>

<h3>Neden Tek Tedarikçi Avantajı?</h3>
<p>Kesim, büküm ve kaynak işlemlerini farklı firmalara yaptırdığınızda birçok risk oluşur: firmalar arası taşıma maliyeti ve süresi, boyutsal uyumsuzluk riski (farklı makineler farklı toleranslarda çalışır), iletişim kopukluğu ve sorumluluk belirsizliği, toplam sürenin uzaması. Kuzey Şafak Lazer'de fiber lazer kesim, CNC plazma, CNC büküm ve kaynaklı imalat aynı tesis içinde, aynı kalite standartlarıyla gerçekleşir. Bu entegrasyon toplam maliyeti düşürür, teslimat süresini kısaltır ve kaliteyi artırır.</p>

<h3>Teklif Süreci</h3>
<p>Projenizin teknik çizimlerini, malzeme listesini ve yukarıdaki bilgileri <strong>WhatsApp (0555 000 83 04)</strong> veya e-posta ile gönderin. Teknik ekibimiz projenizi detaylı değerlendirerek, her işlem adımının maliyetini hesaplar ve projenize özel toplam fiyat teklifi hazırlar. Basit parçalarda 1-2 iş günü, kapsamlı projelerde 2-3 iş günü içinde detaylı teklif sunuyoruz.</p>

<h3>Projenize Özel Teklif İçin Hemen İletişime Geçin</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde tek parça prototipten binlerce adetlik seri üretime kadar komple sac metal imalat hizmeti sunuyoruz. Minimum sipariş limiti yoktur. Tasarım danışmanlığından boyalı bitmiş ürün teslimatına kadar projenizin her aşamasında yanınızdayız. Hemen iletişime geçin, projenize özel detaylı teklif alın.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat', 'cnc-plazma'],
    faq: [
      { q: 'Tek parça yaptırabilir miyim?', a: 'Evet, tek parça prototipten binlerce adetlik seri üretime kadar her miktarda hizmet veriyoruz. Minimum sipariş limiti uygulamıyoruz. Prototip aşamasında üretilebilirlik danışmanlığı da sağlıyoruz.' },
      { q: 'Tasarımım yok, sadece fikrim var. Yardımcı olabilir misiniz?', a: 'Evet, eskiz, el çizimi, numune parça veya sözlü tarif ile teknik ekibimiz çizim oluşturabilir ve üretilebilirlik (DFM) önerisi sunabilir. Fikrinizi ürüne dönüştürmenizde size destek oluyoruz.' },
      { q: 'Teslim süresi ne kadardır?', a: 'Basit kesim+büküm parçalarında 2-3 iş günü, kaynaklı imalatlarda 5-10 iş günü standart sürelerimizdir. Acil siparişlerde hızlandırılmış üretim mümkündür. Kesin termin bilgisi teklif ile birlikte verilir.' },
      { q: 'Boyama dahil teslim alabilir miyim?', a: 'Evet, anlaşmalı tedarikçilerimiz aracılığıyla toz boya, ıslak boya ve galvaniz kaplama organizasyonu yapıyoruz. İstediğiniz RAL renk kodunda boyalı veya kaplamalı bitmiş ürün olarak teslim edebiliyoruz.' },
      { q: 'Farklı malzemelerin bir arada kullanıldığı projeler yapabiliyor musunuz?', a: 'Evet, aynı projede çelik, paslanmaz çelik, alüminyum ve galvaniz gibi farklı malzemeleri bir arada işleyebiliyoruz. Her malzeme için en uygun kesim ve büküm parametrelerini uyguluyoruz.' }
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
    content: `<p><strong>CNC</strong> (Computer Numerical Control - Bilgisayarlı Sayısal Kontrol), takım tezgahlarının ve imalat makinelerinin bilgisayar programları aracılığıyla otomatik olarak kontrol edilmesi teknolojisidir. Modern endüstriyel üretimin temel taşı olan CNC, kesim, büküm, tornalama, frezeleme, delme ve taşlama gibi imalat operasyonlarının yüksek hassasiyet, tekrarlanabilirlik ve otomasyon ile gerçekleştirilmesini sağlar. CNC teknolojisi, 1950'lerde MIT (Massachusetts Institute of Technology) tarafından ABD Hava Kuvvetleri için geliştirilen NC (Numerical Control) teknolojisinin evrimleşmiş halidir.</p>

<h3>CNC'nin Tarihçesi</h3>
<p>Sayısal kontrol (NC) kavramı, 1949 yılında John T. Parsons ve MIT işbirliğiyle helikopter kanat profili üretimi için geliştirilmiştir. İlk NC makineler delikli kart veya kağıt bant ile programlanıyor ve çok sınırlı kapasiteye sahipti. 1960'larda transistör ve entegre devre teknolojisiyle NC kontrol üniteleri küçülüp güçlendi. 1970'lerde mikroişlemcilerin geliştirilmesiyle CNC (Bilgisayarlı Sayısal Kontrol) doğdu ve NC'nin yerini aldı. CNC, programın makine belleğinde saklanması, düzenlenmesi ve tekrar kullanılması imkanını getirdi. 1980'lerde CAD/CAM yazılımlarının entegrasyonu ile tasarımdan üretime dijital bir iş akışı oluştu. Günümüzde CNC teknolojisi, yapay zeka destekli adaptif kontrol, IoT bağlantılı uzaktan izleme ve 5 eksenli eş zamanlı işleme gibi ileri yeteneklere sahiptir.</p>

<h3>CNC Nasıl Çalışır? (Teknik Prensip)</h3>
<p>CNC makinelerde üretim süreci dijital bir iş akışı izler. İlk adımda CAD (Computer Aided Design) yazılımında parça tasarımı yapılır. Ardından CAM (Computer Aided Manufacturing) yazılımında takım yolları (tool paths) oluşturulur, kesim stratejileri belirlenir ve G-kod (ISO 6983 standardı) ile M-kod (makine fonksiyonları) üretilir. Bu program dosyası CNC kontrol ünitesine yüklenir. Kontrol ünitesi, programdaki koordinat bilgilerine göre servo motorları yönlendirerek makine eksenlerini (X, Y, Z ve varsa A, B, C) hassas biçimde hareket ettirir. Enkoder ve lineer ölçüm sistemleri, pozisyon geri bildirimi sağlayarak kapalı çevrim kontrol ile mikron düzeyinde hassasiyet elde edilir.</p>

<h3>Sac Metal İmalatta CNC Kullanımı</h3>
<p>CNC teknolojisi, sac metal imalatın tüm temel süreçlerinde kullanılmaktadır:</p>
<ul>
<li><strong>CNC Lazer Kesim:</strong> Sac metal parçaların 2D kontur kesimi. DXF dosyasından otomatik nesting ve kesim yolu oluşturma. Fiber lazer rezonatörü, kesim kafası hareketi ve yardımcı gaz sistemi CNC tarafından koordineli kontrol edilir. ±0.1mm hassasiyet.</li>
<li><strong>CNC Plazma Kesim:</strong> Kalın sacların bilgisayar kontrollü plazma torcu ile kesilmesi. Torç yüksekliği, kesim hızı ve amperaj otomatik ayarlanır. ±0.5mm hassasiyet.</li>
<li><strong>CNC Abkant Büküm:</strong> Sac parçaların programlanmış açılarda ve boyutlarda otomatik bükülmesi. CNC kontrol; ram stroğu, hız, arka dayama pozisyonu ve sehim kompansasyonunu otomatik ayarlar. ±0.1° açı hassasiyeti.</li>
<li><strong>CNC Pres (Turret Punch):</strong> Sac metallerin delinmesi, damgalanması ve şekillendirilmesi. Çoklu takım istasyonu ile hızlı seri üretim.</li>
<li><strong>CNC Kaynak Robotları:</strong> Programlanmış yörüngede otomatik MIG/MAG veya TIG kaynak. Seri üretimde yüksek tekrarlanabilirlik ve hız sağlar.</li>
</ul>

<h3>CNC Teknolojisinin Avantajları</h3>
<p><strong>Hassasiyet ve tekrarlanabilirlik:</strong> CNC makineler, her parçada aynı boyutsal kaliteyi mikron düzeyinde garanti eder. 1. parça ile 10.000. parça arasında fark yoktur. <strong>Otomasyon:</strong> İnsan hatasını minimuma indirir, 7/24 çalışma imkanı sunar ve operatör bağımlılığını azaltır. <strong>Esneklik:</strong> Program değişikliği ile farklı parçalara dakikalar içinde geçiş yapılabilir. Prototipten seri üretime geçiş sadece adet değişikliğiyle mümkündür. <strong>Karmaşık geometri:</strong> El ile üretimi imkansız olan karmaşık konturlar, eğriler ve 3D formlar CNC ile sorunsuz üretilebilir. <strong>Verimlilik:</strong> Nesting optimizasyonu ile malzeme firesi minimuma iner, üretim hızı artar ve birim maliyet düşer.</p>

<h3>CNC Teknolojisinin Dezavantajları</h3>
<p>CNC makinelerin yüksek ilk yatırım maliyeti temel dezavantajıdır. Ayrıca kalifiye operatör ve programcı ihtiyacı, düzenli bakım gereksinimleri ve yazılım lisans maliyetleri de dikkate alınmalıdır. Fason imalat hizmeti alarak bu dezavantajları bertaraf edebilir, CNC'nin avantajlarından yatırım yapmadan yararlanabilirsiniz.</p>

<h3>Kuzey Şafak Lazer'de CNC Teknolojisi</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde CNC fiber lazer kesim, CNC plazma kesim ve CNC abkant pres makineleri ile tam otomasyon kapasitesinde üretim yapıyoruz. CNC kontrollü üretim süreçlerimiz, her parçada tutarlı kalite, yüksek hassasiyet ve kısa teslimat süresi sağlar. Profesyonel CAD/CAM yazılımları ile nesting optimizasyonu, büküm simülasyonu ve kalite kontrol yapıyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'cnc-plazma'],
    faq: [
      { q: 'CNC ile manuel imalat arasındaki fark nedir?', a: 'CNC imalat bilgisayar kontrollü ve otomatiktir; her parçada aynı hassasiyeti garanti eder ve insan hatasını minimuma indirir. Manuel imalat operatör becerisine bağlıdır, parçalar arası boyutsal farklılık olabilir ve üretim hızı düşüktür.' },
      { q: 'CNC makineler hangi dosya formatlarını okur?', a: 'CNC makineler G-kod (ISO 6983) ile çalışır. Lazer ve plazma kesim makineleri DXF/DWG dosyalarını, abkant presler özel büküm program formatlarını kullanır. Bu dosyalar CAD/CAM yazılımlarından (AutoCAD, SolidWorks, Inventor vb.) oluşturulur.' },
      { q: 'CNC ile ne kadar hassas üretim yapılır?', a: 'CNC lazer kesimde ±0.1mm boyutsal hassasiyet, CNC abkant bükümde ±0.1° açı hassasiyeti sağlanır. İnce saclarda ±0.05mm tolerans bile elde edilebilir. Bu değerler çoğu endüstriyel uygulama için fazlasıyla yeterlidir.' },
      { q: 'CNC teknolojisi hangi sektörlerde kullanılır?', a: 'CNC teknolojisi hemen tüm imalat sektörlerinde kullanılır: otomotiv, havacılık, savunma, medikal, elektronik, enerji, makine imalatı, mobilya, beyaz eşya, gıda sanayi ekipmanları ve daha fazlası.' },
      { q: 'CNC makine yatırımı yapmadan CNC avantajlarından nasıl yararlanabilirim?', a: 'Fason imalat hizmeti alarak CNC makinelerin yüksek hassasiyet ve tekrarlanabilirlik avantajlarından makine yatırımı yapmadan yararlanabilirsiniz. Kuzey Şafak Lazer olarak CNC lazer kesim, plazma ve büküm hizmetleri sunuyoruz.' }
    ]
  },

  {
    slug: 'paslanmaz-celik-cesitleri',
    title: 'Paslanmaz Çelik Çeşitleri: 304, 316, 430 Farkları | Kuzey Şafak Lazer',
    h1: 'Paslanmaz Çelik Çeşitleri ve Farkları',
    metaDesc: 'Paslanmaz çelik çeşitleri: 304, 316, 316L, 430, 201 farkları nelerdir? Hangi paslanmaz çelik nerede kullanılır? Kuzey Şafak Lazer rehberi.',
    category: 'bilgi',
    content: `<p><strong>Paslanmaz çelik</strong> (stainless steel), minimum %10.5 krom (Cr) içeren, korozyona ve oksidasyona karşı yüksek direnç gösteren demir bazlı bir alaşım ailesidir. Krom elementi, çelik yüzeyinde görünmez ve kendini yenileyen bir krom oksit (Cr2O3) pasif tabakası oluşturarak malzemeyi korozyondan korur. Paslanmaz çelik, 1913 yılında İngiliz metalürjist Harry Brearley tarafından keşfedilmiştir. Günümüzde 150'den fazla paslanmaz çelik kalitesi mevcuttur ve her biri farklı korozyon direnci, mekanik özellikler ve uygulamalara yönelik olarak tasarlanmıştır.</p>

<h3>Paslanmaz Çelik Ailesi ve Sınıflandırma</h3>
<p>Paslanmaz çelikler mikroyapılarına göre beş ana grupta sınıflandırılır: <strong>Ostenitik</strong> (300 serisi - en yaygın, nikel katkılı, manyetik değil), <strong>Ferritik</strong> (400 serisi - nikelsiz, manyetik, ekonomik), <strong>Martensitik</strong> (yüksek sertlik, bıçak ve cerrahi alet), <strong>Dupleks</strong> (ostenit+ferrit karışımı, yüksek mukavemet) ve <strong>Çökelme sertleşmeli</strong> (havacılık ve savunma sanayi). Sac metal imalatta en çok kullanılan kaliteler ostenitik 304, 316L ve ferritik 430'dur.</p>

<h3>304 Paslanmaz Çelik (1.4301 / 18/8)</h3>
<p>Dünya genelinde en yaygın kullanılan paslanmaz çelik kalitesidir ve toplam paslanmaz çelik tüketiminin yaklaşık %50'sini oluşturur. %18 krom ve %8 nikel içerir. Ostenitik yapıda olup manyetik değildir (soğuk şekillendirme sonrası hafif manyetik olabilir). Mükemmel korozyon direnci, çok iyi şekillendirilebilirlik, üstün kaynak edilebilirlik ve hijyenik yüzey özellikleri sunar. Gıda sanayi ekipmanları, mutfak donanımları, hastane malzemeleri, mimari cephe ve korkuluk, kimya sanayi tankları, su arıtma sistemleri ve genel amaçlı endüstriyel uygulamalarda standart tercihtir. Çekme dayanımı 500-700 MPa, akma dayanımı min. 190 MPa'dır.</p>

<h3>316 ve 316L Paslanmaz Çelik (1.4401 / 1.4404)</h3>
<p>304'e ek olarak %2-3 molibden (Mo) içerir. Molibden katkısı, özellikle klorür iyonlarının yoğun olduğu ortamlarda (deniz suyu, tuzlu ortam, kimyasal çözeltiler) oyuklanma (pitting) ve çatlak korozyonuna karşı direnci önemli ölçüde artırır. 316L, düşük karbonlu (%0.03 maks.) versiyondur ve kaynak sırasında oluşan tanelerarası korozyon (intergranular corrosion) riskini minimuma indirir. Kimya ve petrokimya sanayi, denizcilik ve offshore yapılar, ilaç sanayi, medikal implantlar, yüzme havuzu ekipmanları ve yüksek korozyon riskli ortamlar için standart kalitedir.</p>

<h3>430 Paslanmaz Çelik (1.4016)</h3>
<p>Ferritik yapıda, nikel içermeyen paslanmaz çeliktir. %16-18 krom içerir. Ostenitik 304'e göre belirgin şekilde daha ekonomiktir çünkü pahalı nikel elementi bulundurmaz. Manyetik özelliğe sahiptir. İç mekan dekorasyon, beyaz eşya yan panelleri ve kaplamaları, otomotiv egzoz parçaları, bulaşık makinesi iç yüzeyleri ve düşük korozyon riskli ortamlarda kullanılır. Korozyon direnci 304'ten düşüktür, dış mekan ve kimyasal ortamlar için uygun değildir. Şekillendirilebilirliği ostenitik kalitelere göre sınırlıdır.</p>

<h3>201 Paslanmaz Çelik (1.4372)</h3>
<p>Nikel oranı düşürülüp manganez ve azot ile takviye edilmiş ekonomik bir ostenitik alternatiftir. %16-18 krom, %3.5-5.5 nikel ve %5.5-7.5 manganez içerir. 304'e benzer görünüm ve mekanik özellikler sunar ancak korozyon direnci 304'ün altındadır. Dekoratif iç mekan uygulamalarında, kapı ve asansör kaplamaları, mutfak tezgahı ve düşük korozyon riskli ortamlarda maliyet avantajı sağlar.</p>

<h3>Malzeme Seçim Rehberi</h3>
<table>
<tr><th>Uygulama</th><th>Önerilen Kalite</th><th>Neden?</th></tr>
<tr><td>Gıda sanayi ekipmanları</td><td>304 veya 316L</td><td>Hijyen, korozyon direnci, kaynak edilebilirlik</td></tr>
<tr><td>Denizcilik ve offshore</td><td>316L veya Dupleks</td><td>Klorür direnci, yüksek mukavemet</td></tr>
<tr><td>Kimya sanayi</td><td>316L</td><td>Kimyasal korozyon direnci</td></tr>
<tr><td>İç mekan dekorasyon</td><td>430 veya 201</td><td>Ekonomik, estetik yüzey</td></tr>
<tr><td>Beyaz eşya</td><td>430 veya 304</td><td>Maliyet ve korozyon dengesi</td></tr>
<tr><td>Mimari cephe/korkuluk</td><td>304 veya 316</td><td>Dış mekan korozyon direnci</td></tr>
</table>

<h3>Paslanmaz Çelik İşleme</h3>
<p>Paslanmaz çelik, karbon çeliğe göre daha yüksek akma dayanımı ve iş sertleşme eğilimi nedeniyle işlenmesi daha zordur. Lazer kesimde azot gazı ile oksidasyonsuz parlak kesim yapılır; bu yöntem paslanmaz çeliğin korozyon direncini korur. CNC büküm de paslanmaz çeliğin geri yaylanma karakteristiği dikkate alınarak uygun parametrelerle gerçekleştirilir. TIG kaynak, paslanmaz çelik birleştirmelerinde en yüksek kaliteyi sunar.</p>

<h3>Kuzey Şafak Lazer'de Paslanmaz Çelik İşleme</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde 304, 316L, 430 ve 201 dahil tüm paslanmaz çelik kalitelerinde fiber lazer kesim (0.5-20mm), CNC büküm ve TIG/MIG kaynak hizmeti veriyoruz. Azot gazı ile oksidasyonsuz parlak kesim, CNC kontrollü hassas büküm ve deneyimli kaynakçılarımızla estetik kaynak dikişi sunuyoruz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: '304 ile 316 paslanmaz arasındaki fark nedir?', a: '316, molibden katkısı (%2-3 Mo) sayesinde 304\'ten daha yüksek korozyon direncine sahiptir. Özellikle klorürlü ortamlarda (deniz suyu, tuz, kimyasal çözeltiler) 316 tercih edilir. 304 genel amaçlı kullanımda yeterlidir.' },
      { q: 'Paslanmaz çelik gerçekten paslanmaz mı?', a: 'Paslanmaz çelik normal atmosferik koşullarda paslanmaz. Ancak uygun olmayan kalite seçimi (örn: 430\'u deniz ortamında kullanmak), yüksek klorür konsantrasyonu, kontaminasyon veya yanlış kaynak tekniği lokal korozyona neden olabilir.' },
      { q: '304 mü 430 mu daha ucuz?', a: '430 paslanmaz çelik, nikel içermediği için 304\'e göre %30-50 daha ekonomiktir. Korozyon direnci yeterliyse ve manyetik özellik sorun oluşturmuyorsa 430 maliyet avantajı sağlar.' },
      { q: 'Paslanmaz çelik lazer kesim yapıyor musunuz?', a: 'Evet, 0.5mm ile 20mm arasında tüm paslanmaz çelik kalitelerinde (304, 316L, 430, 201) fiber lazer kesim yapıyoruz. Azot gazı ile oksidasyonsuz parlak kesim sağlıyoruz.' },
      { q: 'Gıda sanayi için hangi paslanmaz çelik kullanılmalı?', a: 'Gıda sanayi ekipmanlarında genellikle 304 paslanmaz çelik kullanılır. Tuzlu gıdalar veya asidik ortamlarda 316L tercih edilir. Yüzey pürüzlülüğü Ra 0.8μm altında olmalı ve kaynak dikişleri taşlanıp pasive edilmelidir.' }
    ]
  },

  {
    slug: 'sac-kalinlik-tablosu',
    title: 'Sac Kalınlık Tablosu ve Ağırlık Hesaplama | Kuzey Şafak Lazer',
    h1: 'Sac Kalınlık Tablosu ve Ağırlık Hesaplama',
    metaDesc: 'Çelik, paslanmaz ve alüminyum sac kalınlık tablosu. Sac ağırlık hesaplama formülü. Lazer kesim kalınlık limitleri. Kuzey Şafak Lazer.',
    category: 'bilgi',
    content: `<p><strong>Sac kalınlık tablosu</strong>, metal imalat projelerinde doğru malzeme seçimi, ağırlık hesaplaması ve maliyet öngörüsü için kullanılan temel bir referans kaynağıdır. Sac metal imalatında malzeme seçimi, parçanın mekanik gereksinimleri, kullanım ortamı, bükülebilirlik ihtiyaçları ve bütçe kısıtlamalarına göre yapılır. Kalınlık, bu parametrelerin tamamını doğrudan etkileyen en kritik değişkendir. Bu rehberde, yaygın sac kalınlıkları, ağırlık hesaplama formülleri, malzeme yoğunluk tabloları ve lazer/plazma kesim kalınlık limitlerini detaylı olarak bulabilirsiniz.</p>

<h3>Yaygın Sac Kalınlıkları ve Kullanım Alanları</h3>
<p>Sac metal imalatta standart kalınlıklar belirli aralıklarla üretilir. Her kalınlık grubunun tipik kullanım alanları farklıdır:</p>
<ul>
<li><strong>0.5-0.8mm:</strong> Elektronik cihaz kasaları, aydınlatma armatürleri, ince kabin parçaları. Hafif ve kolay şekillendirilebilir.</li>
<li><strong>1-1.5mm:</strong> Elektrik panoları, beyaz eşya gövdeleri, havalandırma kanalları, dekoratif paneller. En yaygın kullanılan kalınlık aralığıdır.</li>
<li><strong>2-3mm:</strong> Makine kabin ve kapakları, mobilya metal aksesuarları, orta yük taşıyan yapısal parçalar, taşıma ekipmanları.</li>
<li><strong>4-6mm:</strong> Makine şasileri, platform tabanları, tarım makinesi parçaları, orta ağırlıktaki yapısal elemanlar.</li>
<li><strong>8-12mm:</strong> Ağır makine gövdeleri, çelik konstrüksiyon bağlantı plakaları, flanş, tank ve silo parçaları.</li>
<li><strong>15-25mm:</strong> Ağır konstrüksiyon, köprü elemanları, basınçlı kap ve gemi sacları, madencilik ekipmanları.</li>
<li><strong>25-50mm:</strong> Çok ağır yapısal elemanlar, basınçlı kaplar, kırıcı astarları (Hardox). Plazma veya oksi-yakıt kesim gerektirir.</li>
</ul>

<h3>Sac Ağırlık Hesaplama Formülü</h3>
<p>Sac metal ağırlığı, malzeme yoğunluğu kullanılarak basit bir formülle hesaplanır:</p>
<p><strong>Ağırlık (kg) = Uzunluk (m) x Genişlik (m) x Kalınlık (mm) x Yoğunluk (kg/dm³)</strong></p>
<p>Bu formül, dikdörtgen sac plakaları için doğrudan uygulanır. Kesim sonrası parça ağırlığı, toplam sac ağırlığından fire payı düşülerek veya CAD yazılımında hesaplanarak elde edilir.</p>

<h3>Malzeme Yoğunluk Tablosu</h3>
<table>
<tr><th>Malzeme</th><th>Yoğunluk (kg/dm³)</th><th>1mm, 1m² Ağırlık</th></tr>
<tr><td>Çelik (St37, St52)</td><td>7.85</td><td>7.85 kg</td></tr>
<tr><td>Paslanmaz Çelik (304)</td><td>7.93</td><td>7.93 kg</td></tr>
<tr><td>Paslanmaz Çelik (316)</td><td>7.98</td><td>7.98 kg</td></tr>
<tr><td>Alüminyum (genel)</td><td>2.71</td><td>2.71 kg</td></tr>
<tr><td>Galvaniz Sac</td><td>7.85</td><td>7.85 kg + kaplama</td></tr>
<tr><td>Bakır</td><td>8.96</td><td>8.96 kg</td></tr>
<tr><td>Pirinç</td><td>8.50</td><td>8.50 kg</td></tr>
<tr><td>Hardox</td><td>7.85</td><td>7.85 kg</td></tr>
</table>

<h3>Örnek Ağırlık Hesaplamaları</h3>
<ul>
<li>1000x2000mm, 2mm çelik sac: 1.0 x 2.0 x 2 x 7.85 = <strong>31.4 kg</strong></li>
<li>1000x2000mm, 3mm çelik sac: 1.0 x 2.0 x 3 x 7.85 = <strong>47.1 kg</strong></li>
<li>1250x2500mm, 1.5mm paslanmaz sac: 1.25 x 2.5 x 1.5 x 7.93 = <strong>37.2 kg</strong></li>
<li>1000x2000mm, 3mm alüminyum sac: 1.0 x 2.0 x 3 x 2.71 = <strong>16.3 kg</strong></li>
<li>1500x3000mm, 10mm çelik plaka: 1.5 x 3.0 x 10 x 7.85 = <strong>353.3 kg</strong></li>
</ul>

<h3>Fiber Lazer Kesim Kalınlık Limitleri</h3>
<table>
<tr><th>Malzeme</th><th>Min. Kalınlık</th><th>Maks. Kalınlık</th></tr>
<tr><td>Çelik (St37/St52)</td><td>0.5mm</td><td>25mm</td></tr>
<tr><td>Paslanmaz Çelik</td><td>0.5mm</td><td>20mm</td></tr>
<tr><td>Alüminyum</td><td>0.5mm</td><td>12mm</td></tr>
<tr><td>Galvaniz Sac</td><td>0.5mm</td><td>6mm</td></tr>
<tr><td>Bakır</td><td>0.5mm</td><td>6mm</td></tr>
<tr><td>Pirinç</td><td>0.5mm</td><td>6mm</td></tr>
<tr><td>Hardox 400/450</td><td>3mm</td><td>20mm</td></tr>
</table>

<h3>CNC Plazma Kesim Kalınlık Limitleri</h3>
<p>CNC plazma ile çelikte 6-50mm, paslanmazda 6-40mm, alüminyumda 6-30mm kalınlık aralığında kesim yapılabilir. 15mm üzeri kalınlıklarda plazma kesim, lazer kesime göre daha ekonomiktir.</p>

<h3>Kalınlık Seçimi Nasıl Yapılır?</h3>
<p>Doğru kalınlık seçimi birçok faktörün dengelenmesini gerektirir: parçanın taşıyacağı mekanik yük ve gerilme analizi, büküm gereksinimleri (kalın malzeme daha büyük büküm yarıçapı gerektirir), estetik beklentiler (ince saclar daha zarif görünüm sunar), ağırlık kısıtlamaları (taşınabilirlik, montaj kolaylığı), korozyon koruması (kalın malzeme aşınma payı bırakır) ve maliyet (kalınlık arttıkça hem malzeme hem işleme maliyeti artar). Projenize uygun optimal kalınlık konusunda Kuzey Şafak Lazer teknik ekibimizden destek alabilirsiniz.</p>

<h3>Standart Sac Boyutları</h3>
<p>Türkiye piyasasında en yaygın sac tabaka boyutları: 1000x2000mm, 1250x2500mm ve 1500x3000mm'dir. Kalın plakalar genellikle 2000x6000mm veya 2500x6000mm boyutlarında üretilir. Kuzey Şafak Lazer olarak fiber lazer ve CNC plazma makinelerimizin 2000x6000mm kesim tablası, standart tabaka boyutlarının tamamını karşılar.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-bukum', 'cnc-plazma'],
    faq: [
      { q: '1mm çelik sac metrekare ağırlığı kaçtır?', a: '1mm kalınlığında çelik sacın metrekare ağırlığı yaklaşık 7.85 kg\'dır. Formül: 1.0 x 1.0 x 1 x 7.85 = 7.85 kg. Paslanmazda 7.93 kg, alüminyumda 2.71 kg olur.' },
      { q: 'En ince kaç mm lazer kesim yapılır?', a: 'Fiber lazer ile 0.5mm kalınlıktan başlayarak kesim yapabiliyoruz. İnce saclarda ±0.05mm gibi çok yüksek hassasiyet değerleri elde edilir ve çapak oluşumu neredeyse sıfırdır.' },
      { q: 'Standart sac boyutları nelerdir?', a: 'Piyasada en yaygın sac boyutları 1000x2000mm, 1250x2500mm ve 1500x3000mm\'dir. Kalın plakalar 2000x6000mm boyutlarında bulunur. Kesim tablalarımız 2000x6000mm olup tüm standart boyutları karşılar.' },
      { q: 'Alüminyum sac çelik sactan ne kadar hafiftir?', a: 'Alüminyumun yoğunluğu (2.71 kg/dm³) çeliğin yoğunluğunun (7.85 kg/dm³) yaklaşık üçte biri kadardır. Aynı boyut ve kalınlıkta alüminyum sac, çelik sacın yaklaşık %35\'i ağırlığındadır.' },
      { q: 'Sac ağırlığını otomatik hesaplayan bir araç var mı?', a: 'CAD yazılımları (SolidWorks, Inventor, Fusion 360) malzeme yoğunluğunu atayarak otomatik ağırlık hesaplar. Basit hesaplamalar için formülümüzü kullanabilirsiniz: Ağırlık = Uzunluk(m) x Genişlik(m) x Kalınlık(mm) x Yoğunluk(kg/dm³).' }
    ]
  },

  {
    slug: 'metal-isleme-yontemleri',
    title: 'Metal İşleme Yöntemleri: Kapsamlı Rehber | Kuzey Şafak Lazer',
    h1: 'Metal İşleme Yöntemleri',
    metaDesc: 'Metal işleme yöntemleri nelerdir? Kesme, bükme, kaynak, döküm ve talaşlı imalat. Endüstriyel metal işleme rehberi. Kuzey Şafak Lazer.',
    category: 'bilgi',
    content: `<p><strong>Metal işleme</strong>, ham metal malzemelerin endüstriyel yöntemlerle şekillendirilmesi, kesilmesi, birleştirilmesi ve yüzey işlemi uygulanarak kullanılabilir parça, bileşen veya ürün haline dönüştürülmesi sürecidir. İnsanlık tarihinin en eski üretim faaliyetlerinden biri olan metal işleme, Tunç Çağı'ndan günümüze kadar sürekli gelişerek endüstriyel üretimin temelini oluşturmuştur. Modern metal işleme, CNC otomasyon, lazer teknolojisi ve robotik sistemlerle yüksek hassasiyet ve verimlilik düzeyine ulaşmıştır.</p>

<h3>Metal İşleme Yöntemlerinin Sınıflandırması</h3>
<p>Metal işleme yöntemleri temel olarak dört ana kategoriye ayrılır: kesme (malzeme ayırma), şekillendirme (plastik deformasyon), birleştirme (kaynak, perçin, vida) ve yüzey işleme (kaplama, boyama). Her kategori kendi içinde onlarca alt yöntem barındırır ve doğru yöntem seçimi projenin malzeme türü, geometrisi, tolerans gereksinimi, adet ve maliyet hedeflerine göre belirlenir.</p>

<h3>Termal Kesim Yöntemleri</h3>
<ul>
<li><strong>Fiber Lazer Kesim:</strong> 1.07μm dalga boyunda lazer ışını ile metal kesim. ±0.1mm hassasiyet, 0.1-0.3mm kerf genişliği. İnce ve orta kalınlıklarda (0.5-25mm çelik) en yüksek hız, hassasiyet ve kenar kalitesi. Sac metal imalatın dominant kesim yöntemidir.</li>
<li><strong>CNC Plazma Kesim:</strong> İyonize gaz (plazma) jeti ile iletken metal kesimi. 6-50mm+ kalınlıklarda ekonomik ve hızlı. ±0.5mm tolerans. Çelik konstrüksiyon ve ağır sanayide yaygın.</li>
<li><strong>Oksi-Yakıt (Oksijen) Kesim:</strong> Oksijen-asetilen veya oksijen-propan alevi ile çelik kesimi. Çok kalın saclarda (50-300mm) kullanılır. Sadece karbon çelikte etkili, paslanmaz ve alüminyumda kullanılamaz.</li>
<li><strong>Su Jeti Kesim (Waterjet):</strong> Yüksek basınçlı su (4000-6000 bar) veya abrazif su jeti ile kesim. Isı etkisi sıfır, her malzemede (metal, taş, cam, seramik) kullanılabilir. Ancak kesim hızı düşük ve işletme maliyeti yüksektir.</li>
</ul>

<h3>Mekanik Kesim Yöntemleri</h3>
<ul>
<li><strong>Giyotin Makas:</strong> Düz sac parçaların şerit halinde kesilmesi. Hızlı ancak sadece düz kesim yapabilir. İnce saclarda (0.5-6mm) yaygın.</li>
<li><strong>CNC Revolver Pres (Turret Punch):</strong> Sac metallerin delinmesi, damgalanması ve şekillendirilmesi. Çoklu takım istasyonu ile hızlı seri üretim. Basit geometrilerde lazer kesime alternatif.</li>
<li><strong>Testere Kesim (Şerit/Daire):</strong> Profil, boru ve dolu malzeme kesiminde kullanılır.</li>
</ul>

<h3>Şekillendirme Yöntemleri</h3>
<ul>
<li><strong>Abkant Büküm:</strong> CNC abkant preste sac metalin açısal olarak şekillendirilmesi. V, U, Z, kutu ve özel profiller elde edilir. Sac metal imalatın en kritik şekillendirme aşamasıdır.</li>
<li><strong>Rulo Büküm (Silindir Büküm):</strong> Üç veya dört silindirli makinelerde sacın silindirik veya konik formlara dönüştürülmesi. Tank, silo ve boru imalatında kullanılır.</li>
<li><strong>Derin Çekme (Deep Drawing):</strong> Düz sacın kalıp içinde üç boyutlu kap, kutu veya gövde formuna çekilmesi. Otomotiv karoseri, mutfak eşyası ve ambalaj sanayinde yaygın.</li>
<li><strong>Damgalama (Stamping):</strong> Seri üretimde kalıp ile hızlı şekillendirme, delme ve kesme. Yüksek adetli uygulamalarda ekonomik, düşük adetlerde kalıp maliyeti dezavantaj.</li>
<li><strong>Haddeleme:</strong> Metal malzemenin silindirler arasından geçirilerek inceltilmesi ve şekillendirilmesi. Sac, profil ve ray üretiminde temel yöntem.</li>
</ul>

<h3>Birleştirme Yöntemleri</h3>
<p>Metal parçaların birleştirilmesi kalıcı ve sökülebilir yöntemlerle gerçekleştirilir:</p>
<ul>
<li><strong>Kaynak:</strong> MIG/MAG, TIG, elektrot, punta ve tozaltı kaynak. Ana malzeme dayanımına eşit kalıcı birleştirme. Sızdırmazlık ve yapısal uygulamalarda vazgeçilmez.</li>
<li><strong>Perçinleme:</strong> Pop perçin ve kör perçin ile mekanik birleştirme. Hafif yapılarda ve tek taraflı erişimde kullanılır.</li>
<li><strong>Vidalı Birleştirme:</strong> Cıvata-somun veya sac vida ile sökülebilir birleştirme. Montaj, bakım ve demontaj gerektiren uygulamalarda tercih edilir.</li>
<li><strong>Lehimleme:</strong> Düşük sıcaklıkta (yumuşak lehim) veya yüksek sıcaklıkta (sert lehim) dolgu malzemesi ile birleştirme. Elektrik bağlantıları ve ince parçalarda kullanılır.</li>
</ul>

<h3>Yüzey İşleme Yöntemleri</h3>
<p>Metal parçalara korozyon direnci, estetik görünüm ve aşınma direnci kazandırmak için uygulanan başlıca yüzey işlemleri: kumlama ve raspalama (yüzey hazırlığı), fosfatlama (boya altı koruma), toz boya (en yaygın endüstriyel boyama), ıslak boya (özel renk ve efektler), sıcak daldırma galvaniz (dış mekan korozyon koruması), elektrolitik kaplama (nikelaj, kromlama, çinko kaplama), anotlama (alüminyum yüzey sertleştirme) ve elektropolisaj (paslanmaz çelik yüzey parlatma).</p>

<h3>Kuzey Şafak Lazer'de Metal İşleme</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde fiber lazer kesim, CNC plazma kesim, CNC abkant büküm ve MIG/TIG kaynaklı imalat hizmetleri sunuyoruz. Metal işleme sürecinizin tasarımdan bitmiş ürüne kadar tüm aşamalarında yanınızdayız. Yüzey işlemleri (boyama, galvaniz) anlaşmalı tedarikçilerimiz aracılığıyla organize edilmektedir.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: 'Hangi metal işleme yöntemi en hassastır?', a: 'Termal kesim yöntemleri arasında fiber lazer kesim (±0.1mm) en yüksek hassasiyeti sağlar. Talaşlı imalat yöntemleri arasında CNC frezeleme ±0.01mm toleransa ulaşabilir. Uygulama gereksinimlerine göre doğru yöntem seçilir.' },
      { q: 'Sac metal ile blok metal işleme arasındaki fark nedir?', a: 'Sac metal imalat, düz sacların kesilip bükülmesiyle hafif ve 3D formlu parçalar üretir. Blok metal işleme (talaşlı imalat), dolu malzemeden talaş kaldırarak masif parçalar üretir. Sac metal daha hafif ve ekonomik, talaşlı imalat daha masif ve hassas parçalar için uygundur.' },
      { q: 'Projem için hangi yöntem uygun?', a: 'Doğru yöntem seçimi; parça geometrisi, malzeme türü, kalınlık, tolerans gereksinimi, sipariş adedi ve bütçeye bağlıdır. Projenizin detaylarını paylaşın, en uygun yöntemi ve kombineyi birlikte belirleyelim.' },
      { q: 'Lazer kesim mi su jeti kesim mi tercih etmeliyim?', a: 'Metal kesimde fiber lazer çok daha hızlı ve ekonomiktir. Su jeti, ısı etkisinin kesinlikle kabul edilmediği hassas uygulamalarda veya metal olmayan malzemelerde tercih edilir. Genel sac metal imalatta lazer kesim standarttır.' },
      { q: 'Hangi yüzey işlemi en dayanıklıdır?', a: 'Dış mekan korozyon korumasında sıcak daldırma galvaniz en uzun ömürlüdür (25+ yıl). Toz boya yüksek mekanik dayanıklılık sunar. Uygulamanın ortam koşullarına göre en uygun yüzey işlemi belirlenir.' }
    ]
  },

  {
    slug: 'lazer-kesim-toleranslari',
    title: 'Lazer Kesim Toleransları ve Hassasiyet | Kuzey Şafak Lazer',
    h1: 'Lazer Kesim Toleransları ve Hassasiyet Değerleri',
    metaDesc: 'Lazer kesim hassasiyeti ve toleransları: kalınlığa göre tolerans tablosu, kerf genişliği, tekrarlanabilirlik. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Lazer kesim toleransı</strong>, CNC lazer kesim işleminde gerçekleşen boyutsal sapmanın kabul edilebilir sınır aralığını ifade eder. Tolerans, bir parçanın tasarım boyutundan ne kadar sapabileceğini belirleyen mühendislik parametresidir. Fiber lazer kesim, tüm termal kesim yöntemleri içinde en yüksek hassasiyeti sunar ve bu özelliğiyle hassas sac metal imalatın temel yöntemidir. Doğru tolerans bilgisi, parça tasarımı, montaj planlaması ve kalite kontrolün her aşamasında kritik öneme sahiptir.</p>

<h3>Tolerans Nedir? Teknik Tanım</h3>
<p>Tolerans, bir ölçünün ideal (nominal) değerinden izin verilen maksimum sapma miktarıdır. Örneğin, 100mm nominal boyutta ±0.1mm tolerans, parçanın 99.9mm ile 100.1mm arasında kabul edilebilir olduğu anlamına gelir. Lazer kesimde tolerans; makine hassasiyeti, malzeme özellikleri, kesim parametreleri ve çevresel koşulların bileşkesidir. ISO 9013 standardı, termal kesim toleranslarının sınıflandırılmasında referans olarak kullanılır.</p>

<h3>Fiber Lazer Kesim Tolerans Tablosu</h3>
<p>Aşağıdaki tolerans değerleri, standart üretim koşullarında elde edilen tipik değerlerdir. Optimum koşullarda daha dar toleranslar mümkün olabilir.</p>
<table>
<tr><th>Malzeme Kalınlığı</th><th>Boyutsal Tolerans</th><th>Kerf Genişliği</th></tr>
<tr><td>0.5-1mm</td><td>±0.05mm</td><td>0.08-0.15mm</td></tr>
<tr><td>1-3mm</td><td>±0.05-0.1mm</td><td>0.1-0.2mm</td></tr>
<tr><td>3-6mm</td><td>±0.1mm</td><td>0.15-0.25mm</td></tr>
<tr><td>6-12mm</td><td>±0.1-0.15mm</td><td>0.2-0.3mm</td></tr>
<tr><td>12-20mm</td><td>±0.15-0.2mm</td><td>0.25-0.4mm</td></tr>
<tr><td>20-25mm</td><td>±0.2-0.3mm</td><td>0.3-0.5mm</td></tr>
</table>

<h3>Kerf Genişliği (Kesim Ağzı) ve Kompansasyonu</h3>
<p>Kerf, lazer ışınının malzemede açtığı kesim boşluğunun genişliğidir. Fiber lazer kesimde kerf genişliği tipik olarak 0.1-0.3mm aralığındadır ve malzeme kalınlığı ile orantılı olarak artar. CNC kesim yazılımı (nesting/CAM), kerf genişliğini otomatik olarak hesaplar ve kesim yolunu buna göre ofsetler (kerf kompansasyonu). Bu sayede, parça boyutları nominal değerlerinde kalır. Tasarımcının kerf ile ilgili ayrıca bir düzeltme yapmasına gerek yoktur; bu işlem tamamen CNC tarafında otomatik gerçekleştirilir.</p>

<h3>Tekrarlanabilirlik (Repeatability)</h3>
<p>CNC fiber lazer kesimin en değerli avantajlarından biri olağanüstü yüksek tekrarlanabilirliktir. Aynı CNC program ile ardışık kesilen parçalar arasındaki boyutsal fark ±0.05mm'den azdır. Bu, seri üretimde parça değiştirilebilirliğini (interchangeability) garanti eder. İlk parça ile 10.000. parça arasında boyutsal fark ihmal edilebilir düzeydedir. Bu özellik, montaj hattı üretimi, birbirine geçmeli bileşenler ve modüler sistemler için kritik öneme sahiptir.</p>

<h3>Toleransı Etkileyen Faktörler</h3>
<ul>
<li><strong>Malzeme kalınlığı:</strong> Kalınlık arttıkça lazer ışınının malzeme içindeki dağılımı artar ve tolerans genişler. Bu, tüm termal kesim yöntemlerinin ortak karakteristiğidir.</li>
<li><strong>Malzeme düzlüğü:</strong> Sac eğriliği (flatness), kesim tablasından yükseklik farklılığı yaratarak odaklama mesafesini etkiler. Düzgün saclar daha dar tolerans sağlar.</li>
<li><strong>Isıl genleşme:</strong> Uzun süreli kesim operasyonlarında malzemenin ısınması boyutsal genleşmeye neden olabilir. İyi bir CNC program bu etkiyi kesim stratejisi ile minimize eder.</li>
<li><strong>Makine kalibrasyonu:</strong> CNC lazer kesim makinesinin düzenli kalibrasyon ve bakımı, tolerans tutarlılığının temel koşuludur.</li>
<li><strong>Kesim parametreleri:</strong> Lazer gücü, kesim hızı, gaz basıncı ve odak pozisyonu doğru seçilmelidir. Optimum parametreler, malzeme türü ve kalınlığına göre belirlenir.</li>
<li><strong>Parça boyutu:</strong> Çok büyük parçalarda (1m+) kümülatif tolerans etkisi oluşabilir.</li>
</ul>

<h3>Plazma ve Oksi-Yakıt Kesim ile Tolerans Karşılaştırması</h3>
<table>
<tr><th>Kesim Yöntemi</th><th>Tipik Tolerans</th><th>Kerf Genişliği</th></tr>
<tr><td>Fiber Lazer</td><td>±0.1mm</td><td>0.1-0.3mm</td></tr>
<tr><td>CNC Plazma</td><td>±0.5-1mm</td><td>1.5-3mm</td></tr>
<tr><td>Hi-Def Plazma</td><td>±0.25mm</td><td>1-2mm</td></tr>
<tr><td>Oksi-Yakıt</td><td>±1-2mm</td><td>2-5mm</td></tr>
</table>
<p>Tolerans kritik parçalar, birbirine geçmeli bileşenler ve hassas uygulamalar için lazer kesim açık ara en uygun yöntemdir.</p>

<h3>Çok Dar Tolerans Gerektiren Uygulamalar</h3>
<p>±0.05mm altı tolerans gerektiren uygulamalarda lazer kesim tek başına yeterli olmayabilir. Bu durumda lazer kesim kaba işlem olarak uygulanır ve ardından CNC frezeleme veya taşlama ile son hassas boyut elde edilir. Bu ikili yaklaşım, hem üretim hızını hem de hassasiyeti optimize eder.</p>

<h3>Kuzey Şafak Lazer'de Tolerans Güvencesi</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde düzenli kalibrasyon ve bakım uygulanan fiber lazer makinemizle yukarıdaki tolerans değerlerini tutarlı şekilde sağlıyoruz. Projenizin tolerans gereksinimlerini tasarım aşamasında bizimle paylaşmanızı öneriyoruz; böylece en uygun kesim stratejisini birlikte belirleyebiliriz.</p>`,
    relatedServices: ['lazer-kesim'],
    faq: [
      { q: 'Lazer kesim ile ±0.05mm tolerans mümkün müdür?', a: 'İnce saclarda (0.5-3mm) ±0.05mm tolerans standart koşullarda elde edilebilir. Kalınlık arttıkça tolerans değeri genişler. Projenizin tolerans gereksinimini önceden paylaşmanız, en uygun kesim stratejisinin belirlenmesini sağlar.' },
      { q: 'Kerf genişliği parça boyutunu etkiler mi?', a: 'CNC yazılımı otomatik kerf kompansasyonu uygulayarak parça boyutlarının nominal değerde kalmasını sağlar. Tasarımcının kerf düzeltmesi yapmasına gerek yoktur; bu işlem tamamen makine tarafında otomatik gerçekleştirilir.' },
      { q: 'Çok hassas parçalar için ne önerirsiniz?', a: '±0.05mm altı tolerans gereken parçalarda lazer kesim sonrası CNC frezeleme ile son işlem önerilir. Lazer kesim kaba boyutu hızla oluşturur, CNC frezeleme ise kritik yüzeyleri hassas boyuta getirir.' },
      { q: 'Seri üretimde tolerans tutarlılığı nasıl sağlanır?', a: 'CNC lazer kesimin tekrarlanabilirliği ±0.05mm\'den azdır. Düzenli makine kalibrasyonu, doğru kesim parametreleri ve kontrollü ortam koşulları ile seri üretimde her parçada tutarlı tolerans garanti edilir.' },
      { q: 'Lazer kesim toleransı plazma kesimden ne kadar daha iyidir?', a: 'Fiber lazer kesim ±0.1mm, CNC plazma kesim ±0.5-1mm tolerans sağlar. Lazer kesim, plazma kesime göre 5-10 kat daha dar tolerans sunarak hassas parçalar için vazgeçilmez bir yöntemdir.' }
    ]
  },

  {
    slug: 'ikitelli-osb-metal-isleme',
    title: 'İkitelli OSB Metal İşleme Hizmetleri | Kuzey Şafak Lazer',
    h1: 'İkitelli OSB Metal İşleme ve Sac İmalat',
    metaDesc: 'İkitelli Organize Sanayi Bölgesi\'nde metal işleme ve sac imalat. Lazer kesim, plazma, büküm, kaynak hizmetleri. Kuzey Şafak Lazer İkitelli.',
    category: 'bilgi',
    content: `<p><strong>İkitelli Organize Sanayi Bölgesi</strong> (İkitelli OSB), İstanbul'un Başakşehir ilçesinde yer alan, Türkiye'nin ve İstanbul'un en büyük organize sanayi bölgelerinden biridir. 3.000'den fazla üretim tesisine ve 100.000'i aşkın çalışana ev sahipliği yapan İkitelli OSB, metal işleme, makine imalatı, otomotiv yan sanayi, tekstil, plastik ve birçok farklı sanayi kolunun İstanbul'daki en önemli üretim merkezidir. Bölge, 1990'ların başında İstanbul'un merkezindeki sanayi tesislerinin organize sanayi bölgelerine taşınması projesi kapsamında kurulmuş ve kısa sürede Türkiye'nin sanayi üretim üslerinden biri haline gelmiştir.</p>

<h3>İkitelli OSB'nin Sanayi Altyapısı</h3>
<p>İkitelli OSB, metal işleme sektörü için son derece elverişli bir ekosistem sunar. Bölgede çelik ve metal malzeme tedarikçileri, sarf malzeme bayileri, yüzey işleme tesisleri (boyama, galvaniz), ısıl işlem firmaları, CNC talaşlı imalat atölyeleri ve lojistik firmaları yoğun olarak bulunmaktadır. Bu ekosistem, ham maddeden bitmiş ürüne kadar tüm üretim süreçlerinin aynı bölge içinde tamamlanabilmesini mümkün kılar. Tedarik zincirinin kısa olması, hem maliyet hem süre avantajı sağlar.</p>

<h3>Kuzey Şafak Lazer - İkitelli OSB Tesisimiz</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İkitelli OSB'deki modern tesisimizde kapsamlı metal işleme ve sac metal imalat hizmetleri sunuyoruz. Tesisimiz, fiber lazer kesim, CNC plazma kesim, CNC abkant büküm ve kaynaklı imalat makinelerini bir arada barındıran, tam entegre bir üretim tesisidir. Bu entegrasyon, projelerin kesimden montaja kadar tek çatı altında, koordineli ve hızlı bir şekilde tamamlanmasını sağlar.</p>

<h3>Sunduğumuz Hizmetler ve Kapasiteler</h3>
<ul>
<li><strong>Fiber Lazer Kesim:</strong> 2000x6000mm kesim tablası. Çelikte 0.5-25mm, paslanmazda 0.5-20mm, alüminyumda 0.5-12mm, galvanizde 0.5-6mm, bakır/pirinçte 0.5-6mm kapasiteli. ±0.1mm tolerans.</li>
<li><strong>CNC Plazma Kesim:</strong> 2000x6000mm kesim tablası. 6-50mm kalınlıklarda çelik, paslanmaz ve alüminyum kesim. Kalın sac projelerinde ekonomik çözüm.</li>
<li><strong>CNC Abkant Büküm:</strong> 3000mm büküm boyu, 220 ton kapasite. ±0.1° açı hassasiyeti. Çelik, paslanmaz, alüminyum ve galvaniz büküm.</li>
<li><strong>Kaynaklı İmalat:</strong> MIG/MAG ve TIG kaynak ile çelik, paslanmaz çelik ve alüminyum birleştirme. Deneyimli kaynakçı kadrosu.</li>
<li><strong>Ek Hizmetler:</strong> Malzeme tedariki, teknik çizim desteği, nesting optimizasyonu, yüzey işlemi organizasyonu.</li>
</ul>

<h3>İkitelli OSB'de Konumlanmanın Müşterilerimize Sağladığı Avantajlar</h3>
<p>İkitelli OSB'de bulunmamız, müşterilerimize birçok somut avantaj sağlar:</p>
<ul>
<li><strong>Kolay ulaşım:</strong> TEM ve E-5 otoyollarına doğrudan bağlantı. İstanbul'un Avrupa ve Anadolu yakasından kolay erişim. Metro (M3 hattı), metrobüs ve otobüs ile toplu taşıma bağlantısı.</li>
<li><strong>Hızlı malzeme tedariki:</strong> Bölgedeki çelik depoları ve metal tedarikçilerinden aynı gün malzeme temini mümkündür.</li>
<li><strong>Yan sanayi erişimi:</strong> Boyama, galvaniz, ısıl işlem, talaşlı imalat ve kaplama firmaları bölge içinde veya yakın çevresinde bulunmaktadır.</li>
<li><strong>Lojistik avantaj:</strong> İstanbul içi nakliye firmaları ve kargo şirketleri bölgede yoğun olarak faaliyet göstermektedir. İstanbul dışı sevkiyat için parsiyel ve komple araç organizasyonu kolaylıkla yapılabilir.</li>
<li><strong>Rekabetçi fiyatlandırma:</strong> Yoğun sanayi altyapısı ve tedarikçi çeşitliliği, rekabetçi ham madde ve hizmet fiyatları oluşmasını sağlar.</li>
</ul>

<h3>Hizmet Verdiğimiz Sektörler</h3>
<p>İkitelli OSB'deki tesisimizden İstanbul başta olmak üzere Türkiye genelindeki müşterilerimize hizmet veriyoruz. Başlıca sektörler: makine imalatı, otomasyon, çelik konstrüksiyon, asansör, havalandırma (HVAC), elektrik-elektronik, gıda sanayi, savunma, otomotiv yan sanayi, mobilya, reklam-tabela, mimari dekorasyon, enerji ve tarım makineleri.</p>

<h3>Ulaşım Bilgileri</h3>
<p>İkitelli OSB, İstanbul Başakşehir ilçesinde TEM otoyolunun hemen yanında konumlanmıştır. Özel araçla TEM otoyolu İkitelli / Başakşehir çıkışından ulaşılır. Toplu taşıma ile M3 Metro hattı (Olimpiyat-Başakşehir) İkitelli Sanayi istasyonu ve metrobüs hatlarından transfer ile erişilebilir. İstanbul Havalimanı'na yaklaşık 25 km, Sabiha Gökçen Havalimanı'na yaklaşık 50 km mesafededir.</p>

<h3>Tesisimizi Ziyaret Edin</h3>
<p>İkitelli OSB'deki tesisimizi mesai saatleri içinde ziyaret edebilir, makinelerimizi yerinde görebilir ve projenizi teknik ekibimizle yüz yüze değerlendirebilirsiniz. Ziyaret randevusu için 0555 000 83 04 numarasını arayabilir veya WhatsApp ile iletişime geçebilirsiniz.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma', 'cnc-bukum', 'kaynakli-imalat'],
    faq: [
      { q: 'İkitelli OSB\'ye nasıl ulaşılır?', a: 'İkitelli OSB, İstanbul Başakşehir\'de TEM otoyolu çıkışında yer alır. Özel araçla TEM İkitelli çıkışından, toplu taşıma ile M3 Metro hattı İkitelli Sanayi istasyonundan ve metrobüs transferi ile ulaşılabilir.' },
      { q: 'Teslimat yapıyor musunuz?', a: 'Evet, İstanbul içi teslimat organize ediyoruz. Büyük siparişlerde teslimat hizmeti sunuyoruz. İstanbul dışına kargo ve nakliye organizasyonu da yapıyoruz.' },
      { q: 'Tesisi ziyaret edebilir miyim?', a: 'Evet, mesai saatleri içinde (Pazartesi-Cumartesi 08:30-18:00) tesisimizi ziyaret edebilirsiniz. Makinelerimizi görebilir ve projenizi yerinde değerlendirebilirsiniz. Randevu için 0555 000 83 04 numarasını arayabilirsiniz.' },
      { q: 'İstanbul dışından sipariş verebilir miyim?', a: 'Evet, Türkiye genelinden sipariş kabul ediyoruz. Teknik çizimlerinizi WhatsApp veya e-posta ile gönderebilirsiniz. Bitmiş ürünler kargo veya nakliye ile adresinize teslim edilir.' },
      { q: 'Acil siparişlerde ne kadar hızlı teslim edebilirsiniz?', a: 'Basit lazer kesim siparişlerinde aynı gün teslimat mümkündür. Kesim+büküm işlerinde 1-2 iş günü, kaynaklı imalatlarda proje kapsamına göre değişen sürelerde acil üretim yapabiliyoruz.' }
    ]
  },

  {
    slug: 'sac-bukum-teknikleri',
    title: 'Sac Büküm Teknikleri ve Kuralları | Kuzey Şafak Lazer',
    h1: 'Sac Büküm Teknikleri ve Tasarım Kuralları',
    metaDesc: 'Sac büküm teknikleri, minimum büküm yarıçapı, büküm payı hesaplama ve tasarım kuralları. CNC büküm rehberi. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Sac büküm</strong>, düz metal sacların CNC abkant preste kontrollü basınç uygulanarak açısal olarak şekillendirilmesi işlemidir. Sac metal imalatın en kritik aşamalarından biri olan büküm, düz bir sacı üç boyutlu fonksiyonel bir parçaya dönüştürür. Doğru büküm sonuçları elde etmek için tasarım aşamasında malzeme özellikleri, büküm yarıçapları, büküm payı hesaplamaları ve geometrik kısıtlamalar gibi temel mühendislik kurallarının bilinmesi gerekir. Bu rehberde, sac büküm tasarım kurallarını, hesaplama yöntemlerini ve pratik ipuçlarını detaylı olarak açıklıyoruz.</p>

<h3>Sac Büküm Temelleri</h3>
<p>Sac metal bükülürken, büküm çizgisinin dış yüzeyindeki malzeme gerilmeye, iç yüzeyindeki malzeme ise basınca maruz kalır. Bu gerilme-basınç dengesi nedeniyle malzeme kalınlığı büküm bölgesinde hafifçe değişir ve sacın toplam uzunluğu artar. Bu fiziksel gerçek, açınım (flat pattern) hesaplamalarında dikkate alınmalıdır. Büküm işleminin başarısı, doğru malzeme seçimi, uygun kalıp kombinasyonu, hassas CNC parametreleri ve deneyimli operatör birleşimiyle sağlanır.</p>

<h3>Minimum Büküm Yarıçapı</h3>
<p>Her malzemenin, çatlamadan bükülebileceği bir minimum iç büküm yarıçapı vardır. Bu değerin altında yapılan bükümlerde malzemenin dış yüzeyinde çatlak oluşma riski artar. Minimum yarıçapı belirleyen faktörler: malzeme türü, kalınlık, hadde yönü ve ısıl işlem durumudur.</p>
<table>
<tr><th>Malzeme</th><th>Minimum İç Yarıçap (genel kural)</th></tr>
<tr><td>Çelik (St37)</td><td>1.0 x t (malzeme kalınlığı)</td></tr>
<tr><td>Paslanmaz Çelik (304)</td><td>1.0 x t</td></tr>
<tr><td>Alüminyum (5754)</td><td>0.5-1.0 x t</td></tr>
<tr><td>Galvaniz Sac</td><td>1.0 x t</td></tr>
<tr><td>Bakır</td><td>0.5 x t</td></tr>
<tr><td>DKP Sac</td><td>0.8 x t</td></tr>
</table>
<p>Örneğin, 2mm çelik sacın minimum iç büküm yarıçapı R2, 3mm alüminyumun minimum iç yarıçapı R1.5-R3'tür. Hadde yönüne paralel bükümlerde çatlama riski artar; mümkünse büküm çizgisi hadde yönüne dik olacak şekilde tasarlanmalıdır.</p>

<h3>Büküm Payı (Bend Allowance) ve K-Faktörü</h3>
<p>Sac bükülürken, malzemenin nötr ekseni (ne gerilme ne basınç gören hat) iç yüzeye doğru kayar. Bu kayma nedeniyle büküm bölgesindeki malzeme uzunluğu değişir. Doğru açınım boyutu hesaplamak için büküm payı (bend allowance) veya büküm düşümü (bend deduction) kullanılır.</p>
<p><strong>Büküm Payı Formülü:</strong> BA = π/180 x (R + K x T) x A</p>
<p>Burada: BA = Büküm payı (mm), R = İç büküm yarıçapı (mm), K = K-faktörü, T = Malzeme kalınlığı (mm), A = Büküm açısı (derece).</p>
<p><strong>K-Faktörü:</strong> Nötr eksenin malzeme kalınlığı içindeki konumunu ifade eder. Değeri 0 ile 0.5 arasındadır (0 = iç yüzey, 0.5 = tam orta). Tipik değerler: hava bükümde 0.33-0.42, alt bükümde 0.40-0.50 arasındadır. Malzeme türü, kalınlık, yarıçap ve büküm yöntemi K-faktörünü etkiler. SolidWorks, Inventor ve Fusion 360 gibi CAD yazılımları bu hesaplamayı otomatik yapar.</p>

<h3>Tasarım Kuralları ve Geometrik Kısıtlamalar</h3>
<ul>
<li><strong>Kenar-büküm mesafesi:</strong> Büküm çizgisi ile sacın en yakın kenarı arasında minimum 2 x malzeme kalınlığı + büküm yarıçapı mesafe bırakılmalıdır. Yetersiz kenar mesafesi, bükümün tutmamasına ve malzeme deformasyonuna neden olur.</li>
<li><strong>Delik-büküm mesafesi:</strong> Delik kenarı ile büküm çizgisi arasında minimum 2.5 x t + R (büküm yarıçapı) mesafe bırakılmalıdır. Yetersiz mesafede delik büküm sırasında oval deformasyona uğrar. Bu kuralın uygulanamadığı durumlarda, büküm öncesi delik yerine pilot delik açılıp büküm sonrası genişletme yapılabilir.</li>
<li><strong>Büküm yönü ve hadde:</strong> Büküm çizgisi mümkünse hadde yönüne (rolling direction) dik olmalıdır. Hadde yönüne paralel bükümde çatlama riski artar, özellikle sert malzemelerde ve dar yarıçaplarda.</li>
<li><strong>Minimum flanş yüksekliği:</strong> Büküm sonrası oluşan flanş (kanat) yüksekliği, en az V kalıp açıklığının yarısından fazla olmalıdır. Aksi halde parça kalıptan kayar.</li>
<li><strong>Büküm sırası (Bending Sequence):</strong> Çok bükümlü parçalarda büküm sırası kritik önem taşır. Yanlış sıralama, sonraki bükümlerin makineye veya kalıba çarpmasına neden olabilir. CNC büküm programlama yazılımları otomatik sıralama önerir.</li>
</ul>

<h3>Geri Yaylanma (Springback)</h3>
<p>Sac metal bükümden sonra elastik geri dönme (springback) yaparak büküm açısını hafifçe açar. Geri yaylanma miktarı malzeme türüne, kalınlığa, büküm yarıçapına ve büküm yöntemine bağlıdır. Yüksek akma dayanımlı malzemelerde (paslanmaz çelik, yüksek mukavemetli çelik) geri yaylanma daha fazladır. CNC abkant preslerde geri yaylanma, overbending (fazla büküm) tekniği ile kompanse edilir. Açı ölçüm sensörlü sistemlerde gerçek zamanlı kompansasyon otomatik uygulanır.</p>

<h3>Yaygın Büküm Profilleri</h3>
<ul>
<li><strong>V büküm:</strong> Tek açılı büküm. En basit ve en yaygın profil. Herhangi bir açıda (30°-180°) uygulanabilir.</li>
<li><strong>U büküm:</strong> İki paralel büküm ile U kanal profili oluşturulur. İki büküm adımı gerektirir.</li>
<li><strong>Z büküm:</strong> İki zıt yönde büküm ile Z profili. İki büküm adımı veya özel Z kalıp ile tek adımda yapılabilir.</li>
<li><strong>Kutu büküm:</strong> Dört büküm ile kutu formlu kapalı profil. Genellikle 4 büküm adımı gerektirir. Pano, kabin ve kutu imalatında standart.</li>
<li><strong>Hem (katlama):</strong> Sacın kenarının 180° bükülmesi. Kenar güçlendirme ve keskin kenardan koruma amacıyla uygulanır.</li>
</ul>

<h3>Kuzey Şafak Lazer'de CNC Büküm Hizmeti</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana İstanbul İkitelli OSB'deki tesisimizde 220 ton kapasiteli, 3000mm büküm boyuna sahip CNC abkant presimizle bu rehberde açıklanan tüm büküm tekniklerini uyguluyoruz. Geniş kalıp setimiz (standart V, gaz boynu, kaz boynu, Z kalıp) ile çoğu büküm profilini karşılıyoruz. Projenizin büküm gereksinimleri konusunda teknik danışmanlık için iletişime geçin.</p>`,
    relatedServices: ['cnc-bukum'],
    faq: [
      { q: 'Minimum büküm yarıçapı nedir?', a: 'Genel kural olarak minimum iç büküm yarıçapı, malzeme kalınlığına eşittir. 2mm çelikte minimum R2, 3mm çelikte minimum R3. Alüminyumda daha dar yarıçaplar (0.5xt) mümkündür. Hadde yönüne dik büküm çatlama riskini azaltır.' },
      { q: 'Büküm payı nedir, neden önemlidir?', a: 'Büküm payı (bend allowance), sacın bükülürken uzaması nedeniyle açınım hesabına eklenen değerdir. K-faktörü ile hesaplanır. Doğru büküm payı hesaplanmazsa bitmiş parça boyutları tasarımdan sapacaktır. CAD yazılımları bu hesabı otomatik yapar.' },
      { q: 'Büküm sonrası parça boyutu neden hedeften sapabilir?', a: 'Yanlış K-faktörü seçimi, geri yaylanma kompansasyonu eksikliği, hatalı açınım hesabı veya yanlış kalıp-malzeme kombinasyonu boyutsal sapmalara neden olur. CNC abkant presimizde otomatik springback kompansasyonu ve doğru K-faktörü ile bu sapmalar minimuma indirilir.' },
      { q: 'Hadde yönü büküm kalitesini etkiler mi?', a: 'Evet, hadde yönüne paralel bükümlerde malzemenin dış yüzeyinde çatlama riski artar. Mümkünse büküm çizgisi hadde yönüne dik olacak şekilde tasarlanmalıdır. Özellikle kalın ve sert malzemelerde bu kural kritik önem taşır.' },
      { q: 'Kutu büküm yapabiliyor musunuz?', a: 'Evet, CNC abkant presimizle 4 adımlık kutu büküm dahil karmaşık çok adımlı büküm operasyonlarını gerçekleştiriyoruz. Pano, kabin, kutu ve profil bükümlerinde uzmanız.' }
    ]
  },

  {
    slug: 'nesting-nedir',
    title: 'Nesting Nedir? Lazer Kesimde Malzeme Optimizasyonu | Kuzey Şafak Lazer',
    h1: 'Nesting Nedir? Malzeme Optimizasyonu',
    metaDesc: 'Nesting nedir, lazer kesimde malzeme firesi nasıl azaltılır? Otomatik nesting yazılımları ve faydaları. Kuzey Şafak Lazer İstanbul.',
    category: 'bilgi',
    content: `<p><strong>Nesting</strong> (yerleşim optimizasyonu), lazer kesim ve plazma kesim operasyonlarında parçaların sac tabaka üzerine en verimli şekilde dizilerek malzeme kullanım oranının maksimize edilmesi işlemidir. Nesting, sac metal imalatın maliyet optimizasyonunda kritik bir rol oynar çünkü ham malzeme bedeli, toplam imalat maliyetinin %40-60'ını oluşturabilir. İyi bir nesting stratejisi ile fire (atık) oranı %5-15'e düşürülebilirken, kötü veya yapılmamış bir yerleşimde bu oran %30-40'lara çıkabilir. Özellikle paslanmaz çelik, alüminyum ve Hardox gibi pahalı malzemelerde nesting optimizasyonu, proje maliyetinde önemli farklılık yaratır.</p>

<h3>Nesting Neden Kritik Önem Taşır?</h3>
<p>Metal sac maliyeti, son yıllardaki global ham madde fiyat artışları nedeniyle toplam imalat bedelinin giderek artan bir payını oluşturmaktadır. Aynı parça geometrisi, aynı malzeme ve aynı kalınlıkta bile farklı nesting stratejileri %10-25 oranında maliyet farkı yaratabilir. Bu nedenle profesyonel nesting yazılımı kullanımı, fason kesim hizmeti veren firmalar için standart bir gereklilik haline gelmiştir. Nesting ayrıca kesim süresini de optimize eder: parçalar arası geçiş yollarını minimize eder, boş hareketleri azaltır ve toplam kesim süresini kısaltır.</p>

<h3>Nesting Yöntemleri</h3>
<ul>
<li><strong>Manuel (Elle) Nesting:</strong> Operatör, parçaları CAD ortamında veya doğrudan nesting yazılımında elle konumlandırır. Az sayıda ve basit geometrili parçalarda hızlı bir çözüm sunar. Ancak optimize değildir ve deneyimli operatöre bile %5-15 daha fazla fire bırakabilir. Zaman alıcıdır ve parça sayısı arttıkça verimsizleşir.</li>
<li><strong>Otomatik (Algoritmik) Nesting:</strong> Yazılım, matematiksel algoritmalar (genetik algoritma, simülatif tavlama, bin packing) kullanarak parçaları otomatik olarak en verimli konuma yerleştirir. İnsan müdahalesi minimum düzeydedir ve tutarlı, optimize sonuçlar üretir. Binlerce farklı parçayı saniyeler içinde dizebilir. Profesyonel nesting yazılımları ile %85-95 malzeme kullanım oranı sağlanabilir.</li>
<li><strong>True Shape (Gerçek Geometri) Nesting:</strong> Dikdörtgen sınırlama kutusu (bounding box) yerine parçaların gerçek geometrik konturu dikkate alınarak yerleşim yapılır. Parçalar birbirinin boşluklarına iç içe geçecek şekilde dizilir. En yüksek malzeme kullanım oranını sağlayan yöntemdir. Özellikle düzensiz geometrili parçalarda belirgin avantaj sunar.</li>
<li><strong>Çok Tabakalı (Multi-Sheet) Nesting:</strong> Farklı kalınlık veya malzemelerdeki siparişlerin birden fazla sac tabakaya optimum dağıtılması. Stok yönetimi ve malzeme kullanımını bütünsel olarak optimize eder.</li>
</ul>

<h3>Nesting Verimliliğini Etkileyen Faktörler</h3>
<ul>
<li><strong>Parça geometrisi:</strong> Düzenli geometrili parçalar (dikdörtgen, daire, düzgün çokgen) daha sıkı dizilir. Düzensiz ve asimetrik şekiller daha fazla boşluk bırakır. İç boşluklu parçaların (çerçeve, panel) içine küçük parçalar yerleştirmek fire oranını düşürür.</li>
<li><strong>Parça sayısı ve çeşitliliği:</strong> Farklı boyut ve geometride çok sayıda parça bulunması, nesting algoritmasına daha fazla kombinasyon seçeneği sunar ve verimlilik artar. Tek tip parça ile karışık parça nestingi farklı sonuçlar verir.</li>
<li><strong>Minimum parçalar arası mesafe (Web Width):</strong> Parçalar arasında bırakılması gereken minimum mesafe, malzeme kalınlığına ve kesim yöntemine bağlıdır. Lazer kesimde tipik olarak 2-5mm, plazma kesimde 5-10mm web genişliği bırakılır. Yetersiz mesafe ısı birikimine ve deformasyona neden olabilir.</li>
<li><strong>Sac boyutu:</strong> Standart sac tabaka boyutu (1000x2000mm, 1250x2500mm, 1500x3000mm) parça boyutlarıyla uyumlu olmalıdır. Büyük parçalar için 1500x3000mm veya 2000x6000mm tablalar kullanılabilir.</li>
<li><strong>Hadde yönü:</strong> Bazı uygulamalarda (büküm gerektiren parçalarda) hadde yönünün dikkate alınması gerekir. Bu kısıtlama nesting esnekliğini azaltabilir.</li>
<li><strong>Malzeme kalınlığı ve cinsi:</strong> Kalın ve pahalı malzemelerde nesting optimizasyonunun ekonomik etkisi çok daha büyüktür.</li>
</ul>

<h3>Nesting ve Kesim Süresi Optimizasyonu</h3>
<p>İyi bir nesting yalnızca malzeme firesini değil, kesim süresini de optimize eder. Akıllı nesting yazılımları, kesim kafasının boş hareket (rapid traverse) mesafesini minimize eden kesim sırası ve yönü belirler. Ortak kesim hatları (common line cutting) kullanarak iki bitişik parçanın ortak kenarını tek bir kesim geçişiyle keser. Bu teknik, kesim süresini %10-20 azaltabilir ve gaz tüketimini düşürür.</p>

<h3>Kuzey Şafak Lazer'de Nesting Uygulaması</h3>
<p>Kuzey Şafak Lazer olarak 2010 yılından bu yana profesyonel true shape nesting yazılımı kullanarak her kesim işinde malzeme verimliliğini maksimize ediyoruz. Otomatik nesting optimizasyonu standart hizmetimize dahildir ve ek ücret uygulanmaz. Müşterilerimize nesting düzeni ve fire oranı bilgisi ile birlikte şeffaf fiyatlandırma sunuyoruz. Yüksek adetli siparişlerde nesting optimizasyonu, önemli maliyet tasarrufu sağlar ve bu tasarruf tekliflerimize doğrudan yansır.</p>`,
    relatedServices: ['lazer-kesim', 'cnc-plazma'],
    faq: [
      { q: 'Nesting maliyeti ayrı hesaplanır mı?', a: 'Hayır, nesting optimizasyonu standart hizmetimize dahildir ve ek ücret uygulanmaz. Her kesim işinde profesyonel true shape nesting yazılımı kullanarak müşterilerimize en düşük fire oranını ve en ekonomik fiyatı sunuyoruz.' },
      { q: 'Fire oranı ne kadar olur?', a: 'Parça geometrisine, adetine ve sac boyutuna bağlı olarak %5-20 arasında fire oluşur. Düzenli geometrili parçalarda ve yüksek adetlerde fire oranı %5-10 seviyesine düşer. Düzensiz geometrilerde %15-20 olabilir.' },
      { q: 'Firem olan malzemeyi kullanabilir misiniz?', a: 'Evet, elinizde kalan artık (fire) sacları değerlendirebiliriz. Parça boyutlarınız artık saca sığıyorsa, fire malzemenizi kullanarak maliyetinizi düşürebiliriz. Artık sacın boyutunu ve malzeme bilgisini paylaşmanız yeterlidir.' },
      { q: 'Nesting raporunu görebilir miyim?', a: 'Evet, istek üzerine nesting düzeni görselini, malzeme kullanım oranını ve fire miktarı bilgisini müşterilerimizle paylaşıyoruz. Şeffaf fiyatlandırma politikamızın bir parçası olarak bu bilgiler teklif ile birlikte sunulabilir.' },
      { q: 'Ortak kesim hattı (common line) nedir?', a: 'Ortak kesim hattı, iki bitişik parçanın ortak kenarının tek bir kesim geçişiyle kesilmesidir. Bu teknik, toplam kesim uzunluğunu ve süresini azaltarak maliyet tasarrufu sağlar. Nesting yazılımımız uygun geometrilerde otomatik olarak ortak kesim hattı uygular.' }
    ]
  }

];

// Slug -> InfoPage map for fast lookup
export const INFO_PAGE_MAP: Record<string, InfoPage> = {};
INFO_PAGES.forEach(p => INFO_PAGE_MAP[p.slug] = p);
