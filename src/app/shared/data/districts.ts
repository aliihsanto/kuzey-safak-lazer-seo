export interface District {
  name: string;
  slug: string;
  side: 'avrupa' | 'anadolu';
  nearby: string[]; // yakın ilçeler (iç link için)
}

export const DISTRICTS: District[] = [
  // === AVRUPA YAKASI ===
  { name: 'Arnavutköy', slug: 'arnavutkoy', side: 'avrupa', nearby: ['basaksehir', 'esenyurt', 'eyupsultan'] },
  { name: 'Avcılar', slug: 'avcilar', side: 'avrupa', nearby: ['esenyurt', 'kucukcekmece', 'beylikduzu'] },
  { name: 'Bağcılar', slug: 'bagcilar', side: 'avrupa', nearby: ['gungoren', 'bahcelievler', 'esenler', 'kucukcekmece'] },
  { name: 'Bahçelievler', slug: 'bahcelievler', side: 'avrupa', nearby: ['bagcilar', 'bakirkoy', 'gungoren'] },
  { name: 'Bakırköy', slug: 'bakirkoy', side: 'avrupa', nearby: ['bahcelievler', 'zeytinburnu', 'kucukcekmece'] },
  { name: 'Başakşehir', slug: 'basaksehir', side: 'avrupa', nearby: ['arnavutkoy', 'bagcilar', 'kucukcekmece', 'esenyurt'] },
  { name: 'Bayrampaşa', slug: 'bayrampasa', side: 'avrupa', nearby: ['esenler', 'eyupsultan', 'gungoren', 'zeytinburnu'] },
  { name: 'Beşiktaş', slug: 'besiktas', side: 'avrupa', nearby: ['sisli', 'sariyer', 'beyoglu'] },
  { name: 'Beylikdüzü', slug: 'beylikduzu', side: 'avrupa', nearby: ['esenyurt', 'avcilar', 'buyukcekmece'] },
  { name: 'Beyoğlu', slug: 'beyoglu', side: 'avrupa', nearby: ['sisli', 'besiktas', 'fatih', 'kagithane'] },
  { name: 'Büyükçekmece', slug: 'buyukcekmece', side: 'avrupa', nearby: ['beylikduzu', 'esenyurt', 'catalca'] },
  { name: 'Çatalca', slug: 'catalca', side: 'avrupa', nearby: ['buyukcekmece', 'arnavutkoy', 'silivri'] },
  { name: 'Esenler', slug: 'esenler', side: 'avrupa', nearby: ['bagcilar', 'bayrampasa', 'gungoren', 'sultangazi'] },
  { name: 'Esenyurt', slug: 'esenyurt', side: 'avrupa', nearby: ['beylikduzu', 'avcilar', 'basaksehir', 'buyukcekmece'] },
  { name: 'Eyüpsultan', slug: 'eyupsultan', side: 'avrupa', nearby: ['bayrampasa', 'kagithane', 'sariyer', 'sultangazi'] },
  { name: 'Fatih', slug: 'fatih', side: 'avrupa', nearby: ['beyoglu', 'zeytinburnu', 'bayrampasa'] },
  { name: 'Gaziosmanpaşa', slug: 'gaziosmanpasa', side: 'avrupa', nearby: ['sultangazi', 'eyupsultan', 'esenler'] },
  { name: 'Güngören', slug: 'gungoren', side: 'avrupa', nearby: ['bagcilar', 'bahcelievler', 'bayrampasa', 'esenler'] },
  { name: 'Kağıthane', slug: 'kagithane', side: 'avrupa', nearby: ['sisli', 'beyoglu', 'eyupsultan', 'sariyer'] },
  { name: 'Küçükçekmece', slug: 'kucukcekmece', side: 'avrupa', nearby: ['avcilar', 'bagcilar', 'bakirkoy', 'basaksehir'] },
  { name: 'Sarıyer', slug: 'sariyer', side: 'avrupa', nearby: ['besiktas', 'eyupsultan', 'kagithane'] },
  { name: 'Silivri', slug: 'silivri', side: 'avrupa', nearby: ['catalca', 'buyukcekmece'] },
  { name: 'Sultanbeyli', slug: 'sultanbeyli', side: 'anadolu', nearby: ['sancaktepe', 'kartal', 'pendik'] },
  { name: 'Sultangazi', slug: 'sultangazi', side: 'avrupa', nearby: ['gaziosmanpasa', 'esenler', 'eyupsultan', 'arnavutkoy'] },
  { name: 'Şişli', slug: 'sisli', side: 'avrupa', nearby: ['besiktas', 'beyoglu', 'kagithane', 'sariyer'] },
  { name: 'Zeytinburnu', slug: 'zeytinburnu', side: 'avrupa', nearby: ['bakirkoy', 'fatih', 'bayrampasa', 'gungoren'] },

  // === ANADOLU YAKASI ===
  { name: 'Adalar', slug: 'adalar', side: 'anadolu', nearby: ['kartal', 'maltepe', 'kadikoy'] },
  { name: 'Ataşehir', slug: 'atasehir', side: 'anadolu', nearby: ['kadikoy', 'uskudar', 'umraniye', 'sancaktepe'] },
  { name: 'Beykoz', slug: 'beykoz', side: 'anadolu', nearby: ['uskudar', 'umraniye', 'sile'] },
  { name: 'Çekmeköy', slug: 'cekmekoy', side: 'anadolu', nearby: ['sancaktepe', 'umraniye', 'beykoz', 'sile'] },
  { name: 'Kadıköy', slug: 'kadikoy', side: 'anadolu', nearby: ['atasehir', 'uskudar', 'maltepe'] },
  { name: 'Kartal', slug: 'kartal', side: 'anadolu', nearby: ['maltepe', 'pendik', 'sultanbeyli'] },
  { name: 'Maltepe', slug: 'maltepe', side: 'anadolu', nearby: ['kadikoy', 'kartal', 'atasehir'] },
  { name: 'Pendik', slug: 'pendik', side: 'anadolu', nearby: ['kartal', 'sultanbeyli', 'tuzla'] },
  { name: 'Sancaktepe', slug: 'sancaktepe', side: 'anadolu', nearby: ['atasehir', 'umraniye', 'cekmekoy', 'sultanbeyli'] },
  { name: 'Şile', slug: 'sile', side: 'anadolu', nearby: ['beykoz', 'cekmekoy', 'pendik'] },
  { name: 'Tuzla', slug: 'tuzla', side: 'anadolu', nearby: ['pendik', 'kartal'] },
  { name: 'Ümraniye', slug: 'umraniye', side: 'anadolu', nearby: ['uskudar', 'atasehir', 'sancaktepe', 'cekmekoy'] },
  { name: 'Üsküdar', slug: 'uskudar', side: 'anadolu', nearby: ['kadikoy', 'atasehir', 'umraniye', 'beykoz'] }
];

export const DISTRICT_MAP: Record<string, District> = {};
DISTRICTS.forEach(d => DISTRICT_MAP[d.slug] = d);
