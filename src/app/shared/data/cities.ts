export interface City {
  name: string;
  slug: string;
  distanceKm: number; // İkitelli OSB'den yaklaşık mesafe
  industrialZones: string[];
  nearby: string[]; // yakın şehirler (iç link için)
}

export const CITIES: City[] = [
  {
    name: 'Kocaeli',
    slug: 'kocaeli',
    distanceKm: 100,
    industrialZones: [
      'Gebze OSB',
      'Dilovası OSB',
      'Arslanbey OSB',
      'Kocaeli Üniversitesi Teknopark',
      'TOSB (Tuzla OSB)',
      'Çayırova Sanayi Bölgesi'
    ],
    nearby: ['sakarya', 'bursa', 'yalova']
  },
  {
    name: 'Bursa',
    slug: 'bursa',
    distanceKm: 240,
    industrialZones: [
      'Bursa OSB (BOSB)',
      'Demirtaş OSB',
      'Nilüfer OSB',
      'Hasanağa OSB',
      'İnegöl OSB',
      'BUTEKOM Teknoloji Geliştirme Bölgesi'
    ],
    nearby: ['kocaeli', 'yalova', 'balikesir', 'bilecik']
  },
  {
    name: 'Tekirdağ',
    slug: 'tekirdag',
    distanceKm: 135,
    industrialZones: [
      'Çerkezköy OSB',
      'Velimeşe OSB',
      'Kapaklı OSB',
      'Muratlı OSB',
      'Çorlu Avrupa Serbest Bölgesi',
      'Hayrabolu OSB'
    ],
    nearby: ['edirne', 'kirklareli', 'canakkale']
  },
  {
    name: 'Edirne',
    slug: 'edirne',
    distanceKm: 235,
    industrialZones: [
      'Edirne OSB',
      'Keşan OSB',
      'Havsa OSB'
    ],
    nearby: ['tekirdag', 'kirklareli']
  },
  {
    name: 'Kırklareli',
    slug: 'kirklareli',
    distanceKm: 210,
    industrialZones: [
      'Kırklareli OSB',
      'Lüleburgaz OSB',
      'Lüleburgaz Deri İhtisas OSB',
      'Babaeski OSB'
    ],
    nearby: ['tekirdag', 'edirne']
  },
  {
    name: 'Sakarya',
    slug: 'sakarya',
    distanceKm: 150,
    industrialZones: [
      'Sakarya 1. OSB',
      'Sakarya 2. OSB',
      'Sakarya 3. OSB',
      'Hendek OSB',
      'Ferizli OSB',
      'Akyazı OSB'
    ],
    nearby: ['kocaeli', 'bilecik', 'bursa']
  },
  {
    name: 'Yalova',
    slug: 'yalova',
    distanceKm: 175,
    industrialZones: [
      'Yalova OSB',
      'Yalova Gemi İhtisas OSB',
      'Taşköprü Sanayi Bölgesi'
    ],
    nearby: ['kocaeli', 'bursa']
  },
  {
    name: 'Balıkesir',
    slug: 'balikesir',
    distanceKm: 310,
    industrialZones: [
      'Balıkesir OSB',
      'Bandırma OSB',
      'Gönen OSB',
      'Edremit OSB',
      'Bigadiç OSB'
    ],
    nearby: ['bursa', 'canakkale']
  },
  {
    name: 'Çanakkale',
    slug: 'canakkale',
    distanceKm: 340,
    industrialZones: [
      'Çanakkale OSB',
      'Biga OSB',
      'Çan OSB',
      'Lapseki OSB'
    ],
    nearby: ['tekirdag', 'balikesir']
  },
  {
    name: 'Bilecik',
    slug: 'bilecik',
    distanceKm: 280,
    industrialZones: [
      'Bilecik OSB',
      'Bozüyük OSB',
      'Söğüt OSB',
      'Osmaneli OSB'
    ],
    nearby: ['sakarya', 'bursa']
  }
];

export const CITY_MAP: Record<string, City> = {};
CITIES.forEach(c => CITY_MAP[c.slug] = c);
