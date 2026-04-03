export interface MarmaraDistrict {
  name: string;
  slug: string;
  citySlug: string;
  cityName: string;
}

// ============================================================================
// Marmara Bölgesi - Tüm İlçeler
// Toplam: 119 ilçe (İstanbul hariç, İstanbul ilçeleri districts.ts'de)
// Şirket Lokasyonu: İkitelli OSB, İstanbul
// ============================================================================

export const MARMARA_DISTRICTS: MarmaraDistrict[] = [

  // =========================================================================
  // KOCAELİ (12 ilçe)
  // =========================================================================
  { name: 'Gebze', slug: 'gebze', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Darıca', slug: 'darica', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Çayırova', slug: 'cayirova', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Dilovası', slug: 'dilovasi', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Körfez', slug: 'korfez', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Derince', slug: 'derince', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'İzmit', slug: 'izmit', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Kartepe', slug: 'kartepe', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Başiskele', slug: 'basiskele', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Gölcük', slug: 'golcuk', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Kandıra', slug: 'kandira', citySlug: 'kocaeli', cityName: 'Kocaeli' },
  { name: 'Karamürsel', slug: 'karamursel', citySlug: 'kocaeli', cityName: 'Kocaeli' },

  // =========================================================================
  // BURSA (17 ilçe)
  // =========================================================================
  { name: 'Osmangazi', slug: 'osmangazi', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Yıldırım', slug: 'yildirim', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Nilüfer', slug: 'nilufer', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Gemlik', slug: 'gemlik', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'İnegöl', slug: 'inegol', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Mustafakemalpaşa', slug: 'mustafakemalpasa', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Mudanya', slug: 'mudanya', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Gürsu', slug: 'gursu', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Kestel', slug: 'kestel', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Orhangazi', slug: 'orhangazi', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Karacabey', slug: 'karacabey', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'İznik', slug: 'iznik', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Yenişehir', slug: 'yenisehir', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Büyükorhan', slug: 'buyukorhan', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Harmancık', slug: 'harmancik', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Keles', slug: 'keles', citySlug: 'bursa', cityName: 'Bursa' },
  { name: 'Orhaneli', slug: 'orhaneli', citySlug: 'bursa', cityName: 'Bursa' },

  // =========================================================================
  // TEKİRDAĞ (11 ilçe)
  // =========================================================================
  { name: 'Süleymanpaşa', slug: 'suleymanpasa', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Çorlu', slug: 'corlu', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Çerkezköy', slug: 'cerkezkoy', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Ergene', slug: 'ergene', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Kapaklı', slug: 'kapakli', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Saray', slug: 'saray', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Malkara', slug: 'malkara', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Hayrabolu', slug: 'hayrabolu', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Şarköy', slug: 'sarkoy', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Muratlı', slug: 'muratli', citySlug: 'tekirdag', cityName: 'Tekirdağ' },
  { name: 'Marmaraereğlisi', slug: 'marmaraereglisi', citySlug: 'tekirdag', cityName: 'Tekirdağ' },

  // =========================================================================
  // EDİRNE (9 ilçe)
  // =========================================================================
  { name: 'Merkez', slug: 'edirne-merkez', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Keşan', slug: 'kesan', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Uzunköprü', slug: 'uzunkopru', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'İpsala', slug: 'ipsala', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Havsa', slug: 'havsa', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Enez', slug: 'enez', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Lalapaşa', slug: 'lalapasa', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Meriç', slug: 'meric', citySlug: 'edirne', cityName: 'Edirne' },
  { name: 'Süloğlu', slug: 'suloglu', citySlug: 'edirne', cityName: 'Edirne' },

  // =========================================================================
  // KIRKLARELİ (8 ilçe)
  // =========================================================================
  { name: 'Merkez', slug: 'kirklareli-merkez', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Lüleburgaz', slug: 'luleburgaz', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Babaeski', slug: 'babaeski', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Vize', slug: 'vize', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Pınarhisar', slug: 'pinarhisar', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Demirköy', slug: 'demirkoy', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Pehlivanköy', slug: 'pehlivankoy', citySlug: 'kirklareli', cityName: 'Kırklareli' },
  { name: 'Kofçaz', slug: 'kofcaz', citySlug: 'kirklareli', cityName: 'Kırklareli' },

  // =========================================================================
  // SAKARYA (16 ilçe)
  // =========================================================================
  { name: 'Adapazarı', slug: 'adapazari', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Serdivan', slug: 'serdivan', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Erenler', slug: 'erenler', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Arifiye', slug: 'arifiye', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Hendek', slug: 'hendek', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Akyazı', slug: 'akyazi', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Geyve', slug: 'geyve', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Pamukova', slug: 'pamukova', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Sapanca', slug: 'sapanca', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Kaynarca', slug: 'kaynarca', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Ferizli', slug: 'ferizli', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Söğütlü', slug: 'sogutlu', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Taraklı', slug: 'tarakli', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Karapürçek', slug: 'karapurcek', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Kocaali', slug: 'kocaali', citySlug: 'sakarya', cityName: 'Sakarya' },
  { name: 'Karasu', slug: 'karasu', citySlug: 'sakarya', cityName: 'Sakarya' },

  // =========================================================================
  // YALOVA (6 ilçe)
  // =========================================================================
  { name: 'Merkez', slug: 'yalova-merkez', citySlug: 'yalova', cityName: 'Yalova' },
  { name: 'Çiftlikköy', slug: 'ciftlikkoy', citySlug: 'yalova', cityName: 'Yalova' },
  { name: 'Altınova', slug: 'altinova', citySlug: 'yalova', cityName: 'Yalova' },
  { name: 'Çınarcık', slug: 'cinarcik', citySlug: 'yalova', cityName: 'Yalova' },
  { name: 'Armutlu', slug: 'armutlu', citySlug: 'yalova', cityName: 'Yalova' },
  { name: 'Termal', slug: 'termal', citySlug: 'yalova', cityName: 'Yalova' },

  // =========================================================================
  // BALIKESİR (20 ilçe)
  // =========================================================================
  { name: 'Altıeylül', slug: 'altieylul', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Karesi', slug: 'karesi', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Bandırma', slug: 'bandirma', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Edremit', slug: 'edremit', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Gönen', slug: 'gonen', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Erdek', slug: 'erdek', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Ayvalık', slug: 'ayvalik', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Burhaniye', slug: 'burhaniye', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Susurluk', slug: 'susurluk', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Bigadiç', slug: 'bigadic', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Sındırgı', slug: 'sindirgi', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Dursunbey', slug: 'dursunbey', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'İvrindi', slug: 'ivrindi', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Manyas', slug: 'manyas', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Havran', slug: 'havran', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Balya', slug: 'balya', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Kepsut', slug: 'kepsut', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Marmara', slug: 'marmara', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Savaştepe', slug: 'savastepe', citySlug: 'balikesir', cityName: 'Balıkesir' },
  { name: 'Gömeç', slug: 'gomec', citySlug: 'balikesir', cityName: 'Balıkesir' },

  // =========================================================================
  // ÇANAKKALE (12 ilçe)
  // =========================================================================
  { name: 'Merkez', slug: 'canakkale-merkez', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Biga', slug: 'biga', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Çan', slug: 'can', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Gelibolu', slug: 'gelibolu', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Ezine', slug: 'ezine', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Ayvacık', slug: 'ayvacik', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Bayramiç', slug: 'bayramic', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Lapseki', slug: 'lapseki', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Yenice', slug: 'yenice', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Eceabat', slug: 'eceabat', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Gökçeada', slug: 'gokceada', citySlug: 'canakkale', cityName: 'Çanakkale' },
  { name: 'Bozcaada', slug: 'bozcaada', citySlug: 'canakkale', cityName: 'Çanakkale' },

  // =========================================================================
  // BİLECİK (8 ilçe)
  // =========================================================================
  { name: 'Merkez', slug: 'bilecik-merkez', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'Bozüyük', slug: 'bozuyuk', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'Söğüt', slug: 'sogut', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'Osmaneli', slug: 'osmaneli', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'Pazaryeri', slug: 'pazaryeri', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'Gölpazarı', slug: 'golpazari', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'İnhisar', slug: 'inhisar', citySlug: 'bilecik', cityName: 'Bilecik' },
  { name: 'Yenipazar', slug: 'yenipazar', citySlug: 'bilecik', cityName: 'Bilecik' },
];

// ============================================================================
// Şehre göre gruplandırılmış ilçeler
// ============================================================================
export const MARMARA_DISTRICTS_BY_CITY: Record<string, MarmaraDistrict[]> = {};
MARMARA_DISTRICTS.forEach((d) => {
  if (!MARMARA_DISTRICTS_BY_CITY[d.citySlug]) {
    MARMARA_DISTRICTS_BY_CITY[d.citySlug] = [];
  }
  MARMARA_DISTRICTS_BY_CITY[d.citySlug].push(d);
});

// ============================================================================
// Slug'a göre hızlı erişim haritası
// ============================================================================
export const MARMARA_DISTRICT_MAP: Record<string, MarmaraDistrict> = {};
MARMARA_DISTRICTS.forEach((d) => {
  MARMARA_DISTRICT_MAP[d.slug] = d;
});
