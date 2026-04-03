export interface Sector {
  name: string;
  slug: string;
  applicableServices: string[];
  description: string;
  keywords: string[];
  icon: string;
}

export const SECTORS: Sector[] = [
  {
    name: 'İnşaat',
    slug: 'insaat',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-bukum', 'cnc-plazma'],
    description: 'İnşaat sektöründe çelik konstrüksiyon, merdiven, korkuluk ve yapısal metal elemanların üretiminde lazer kesim, kaynak, bükme ve plazma kesim hizmetleri sunulmaktadır.',
    keywords: ['inşaat metal kesim', 'inşaat çelik işleme', 'yapısal çelik imalat', 'inşaat lazer kesim', 'çelik merdiven imalatı', 'metal korkuluk üretimi'],
    icon: 'fas fa-building'
  },
  {
    name: 'Asansör',
    slug: 'asansor',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-bukum', 'cnc-plazma'],
    description: 'Asansör sektörü için kabin, kapı paneli, şasi ve ray gibi kritik bileşenlerin hassas metal işleme ile üretimi gerçekleştirilmektedir.',
    keywords: ['asansör kabin imalatı', 'asansör kapı paneli', 'asansör metal parça', 'asansör lazer kesim', 'asansör şasi üretimi', 'asansör sac işleme'],
    icon: 'fas fa-arrows-alt-v'
  },
  {
    name: 'Mobilya',
    slug: 'mobilya',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-bukum'],
    description: 'Metal mobilya sektöründe masa, sandalye, raf sistemleri ve dekoratif metal aksesuar üretiminde hassas kesim ve şekillendirme hizmetleri verilmektedir.',
    keywords: ['metal mobilya imalatı', 'mobilya lazer kesim', 'metal masa ayağı', 'metal raf sistemi', 'dekoratif metal mobilya', 'çelik mobilya üretimi'],
    icon: 'fas fa-couch'
  },
  {
    name: 'Beyaz Eşya',
    slug: 'beyaz-esya',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'Beyaz eşya sektöründe buzdolabı, çamaşır makinesi ve fırın gibi ürünlerin sac gövde ve iç parçalarının hassas kesim ve bükme ile seri üretimi yapılmaktadır.',
    keywords: ['beyaz eşya sac kesim', 'beyaz eşya metal parça', 'beyaz eşya lazer kesim', 'beyaz eşya gövde imalatı', 'sac bükme beyaz eşya', 'beyaz eşya yan sanayi'],
    icon: 'fas fa-utensils'
  },
  {
    name: 'Otomotiv',
    slug: 'otomotiv',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-bukum'],
    description: 'Otomotiv yan sanayinde şasi, egzoz, braket ve gövde parçaları gibi bileşenlerin yüksek toleranslı metal işleme ile üretimi sağlanmaktadır.',
    keywords: ['otomotiv metal parça', 'otomotiv lazer kesim', 'otomotiv yan sanayi', 'araç şasi imalatı', 'otomotiv kaynak', 'otomotiv sac bükme'],
    icon: 'fas fa-car'
  },
  {
    name: 'Gıda Makineleri',
    slug: 'gida-makineleri',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    description: 'Gıda makineleri sektöründe paslanmaz çelik tank, konveyör parçası ve işleme ekipmanlarının hijyen standartlarına uygun imalatı yapılmaktadır.',
    keywords: ['gıda makinesi imalatı', 'paslanmaz çelik kesim', 'gıda sektörü metal işleme', 'gıda tankı üretimi', 'konveyör parça imalatı', 'paslanmaz kaynak'],
    icon: 'fas fa-seedling'
  },
  {
    name: 'Tarım Makineleri',
    slug: 'tarim-makineleri',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-plazma'],
    description: 'Tarım makineleri sektöründe pulluk, tırmık, römork şasi ve ekipman parçalarının dayanıklı metal işleme ile imalatı gerçekleştirilmektedir.',
    keywords: ['tarım makinesi imalatı', 'tarım ekipmanı metal parça', 'pulluk imalatı', 'römork şasi kesim', 'tarım makinesi kaynak', 'tarım aleti üretimi'],
    icon: 'fas fa-tractor'
  },
  {
    name: 'Savunma Sanayi',
    slug: 'savunma-sanayi',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    description: 'Savunma sanayi projelerinde zırh plakası, koruma paneli ve askeri araç bileşenlerinin yüksek hassasiyetli metal işleme ile üretimi yapılmaktadır.',
    keywords: ['savunma sanayi metal işleme', 'askeri araç parça imalatı', 'zırh plakası kesim', 'savunma sanayi lazer kesim', 'savunma sanayi kaynak', 'askeri ekipman imalatı'],
    icon: 'fas fa-shield-alt'
  },
  {
    name: 'Enerji',
    slug: 'enerji',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    description: 'Enerji sektöründe rüzgar türbini parçaları, güneş paneli taşıyıcıları ve enerji santral ekipmanlarının metal işleme ile imalatı sağlanmaktadır.',
    keywords: ['enerji sektörü metal işleme', 'rüzgar türbini parça imalatı', 'güneş paneli konstrüksiyon', 'enerji santrali ekipman', 'enerji sektörü lazer kesim', 'enerji sektörü kaynak'],
    icon: 'fas fa-bolt'
  },
  {
    name: 'HVAC/İklimlendirme',
    slug: 'hvac-iklimlendirme',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'HVAC ve iklimlendirme sektöründe havalandırma kanalları, klima gövdeleri ve fan kanatlarının sac kesim ve bükme ile seri üretimi yapılmaktadır.',
    keywords: ['havalandırma kanalı imalatı', 'HVAC metal işleme', 'klima gövde üretimi', 'iklimlendirme sac işleme', 'havalandırma lazer kesim', 'kanal sac bükme'],
    icon: 'fas fa-wind'
  },
  {
    name: 'Aydınlatma',
    slug: 'aydinlatma',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'Aydınlatma sektöründe armatür gövdeleri, direk ve dekoratif aydınlatma elemanlarının hassas lazer kesim ve bükme ile üretimi gerçekleştirilmektedir.',
    keywords: ['aydınlatma armatür imalatı', 'metal aydınlatma üretimi', 'aydınlatma direği imalatı', 'aydınlatma lazer kesim', 'armatür gövde sac işleme', 'dekoratif aydınlatma metal'],
    icon: 'fas fa-lightbulb'
  },
  {
    name: 'Reklam/Tabela',
    slug: 'reklam-tabela',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'Reklam ve tabela sektöründe kutu harf, totem, yönlendirme tabelası ve dekoratif pano gibi ürünlerin metal kesim ve bükme ile üretimi yapılmaktadır.',
    keywords: ['tabela metal kesim', 'kutu harf imalatı', 'reklam tabelası lazer kesim', 'totem tabela üretimi', 'metal harf kesim', 'yönlendirme tabelası imalatı'],
    icon: 'fas fa-ad'
  },
  {
    name: 'Dekorasyon',
    slug: 'dekorasyon',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'İç ve dış mekan dekorasyon projelerinde metal paravan, lazer kesim pano, dekoratif separatör ve duvar aksesuarlarının üretimi yapılmaktadır.',
    keywords: ['dekoratif metal kesim', 'lazer kesim dekorasyon', 'metal paravan imalatı', 'dekoratif pano üretimi', 'metal duvar aksesuarı', 'dekoratif separatör'],
    icon: 'fas fa-palette'
  },
  {
    name: 'Denizcilik',
    slug: 'denizcilik',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat'],
    description: 'Denizcilik sektöründe gemi gövde parçaları, güverte ekipmanları ve deniz araçları bileşenlerinin korozyona dayanıklı metal işleme ile imalatı yapılmaktadır.',
    keywords: ['gemi metal parça imalatı', 'denizcilik lazer kesim', 'gemi gövde kaynak', 'deniz araçları metal işleme', 'gemi ekipman üretimi', 'denizcilik çelik imalat'],
    icon: 'fas fa-ship'
  },
  {
    name: 'Medikal',
    slug: 'medikal',
    applicableServices: ['lazer-kesim'],
    description: 'Medikal sektörde cerrahi alet, implant bileşeni ve tıbbi cihaz parçalarının mikron düzeyinde hassas lazer kesim ile üretimi sağlanmaktadır.',
    keywords: ['medikal lazer kesim', 'tıbbi cihaz metal parça', 'cerrahi alet imalatı', 'medikal paslanmaz kesim', 'tıbbi ekipman metal işleme', 'medikal hassas kesim'],
    icon: 'fas fa-stethoscope'
  },
  {
    name: 'Elektronik',
    slug: 'elektronik',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'Elektronik sektöründe kasa, panel, soğutucu blok ve bağlantı elemanlarının ince sac işleme ile hassas üretimi gerçekleştirilmektedir.',
    keywords: ['elektronik kasa imalatı', 'elektronik panel kesim', 'metal soğutucu blok', 'elektronik sac işleme', 'elektronik kutu imalatı', 'PCB muhafaza üretimi'],
    icon: 'fas fa-microchip'
  },
  {
    name: 'Makine İmalat',
    slug: 'makine-imalat',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-plazma'],
    description: 'Makine imalat sektöründe şasi, gövde, kapak ve mekanik bileşenlerin ağır metal işleme teknikleri ile üretimi sağlanmaktadır.',
    keywords: ['makine imalat metal işleme', 'makine gövde üretimi', 'makine şasi imalatı', 'endüstriyel makine parça', 'makine lazer kesim', 'makine kaynak imalat'],
    icon: 'fas fa-cogs'
  },
  {
    name: 'Dış Cephe Kaplama',
    slug: 'dis-cephe-kaplama',
    applicableServices: ['lazer-kesim', 'cnc-bukum'],
    description: 'Dış cephe kaplama sektöründe alüminyum ve çelik kompozit paneller, dekoratif cephe elemanları ve giydirme cephe bileşenlerinin metal işleme ile üretimi yapılmaktadır.',
    keywords: ['dış cephe metal kaplama', 'cephe paneli imalatı', 'giydirme cephe metal', 'dış cephe lazer kesim', 'alüminyum cephe kaplama', 'dekoratif cephe paneli'],
    icon: 'fas fa-layer-group'
  },
  {
    name: 'Çelik Konstrüksiyon',
    slug: 'celik-konstruksiyon',
    applicableServices: ['lazer-kesim', 'kaynakli-imalat', 'cnc-plazma'],
    description: 'Çelik konstrüksiyon sektöründe kolon, kiriş, bağlantı plakası ve taşıyıcı elemanların ağır çelik işleme ile üretimi gerçekleştirilmektedir.',
    keywords: ['çelik konstrüksiyon imalat', 'çelik kolon kesim', 'çelik kiriş üretimi', 'konstrüksiyon kaynak', 'çelik yapı elemanları', 'taşıyıcı çelik imalat'],
    icon: 'fas fa-hard-hat'
  },
  {
    name: 'Pano İmalat',
    slug: 'pano-imalat',
    applicableServices: ['lazer-kesim', 'cnc-bukum', 'kaynakli-imalat'],
    description: 'Elektrik pano imalat sektöründe otomasyon panoları, dağıtım kutuları ve kumanda panellerinin sac kesim, bükme ve kaynak ile üretimi yapılmaktadır.',
    keywords: ['elektrik pano imalatı', 'otomasyon panosu üretimi', 'pano sac kesim', 'dağıtım panosu imalatı', 'kumanda panosu metal işleme', 'pano kutusu lazer kesim'],
    icon: 'fas fa-plug'
  }
];

export const SECTOR_MAP: Record<string, Sector> = {};
SECTORS.forEach(s => SECTOR_MAP[s.slug] = s);
