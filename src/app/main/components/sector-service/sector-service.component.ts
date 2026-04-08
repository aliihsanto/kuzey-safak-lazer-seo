import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';
import { Sector, SECTORS } from 'src/app/shared/data/sectors';
import { SERVICES, ServiceItem } from 'src/app/shared/mock.data';
import { ADDITIONAL_SERVICES } from 'src/app/shared/data/additional-services';
import { District, DISTRICT_MAP, DISTRICTS } from 'src/app/shared/data/districts';
import { MARMARA_DISTRICT_MAP, MarmaraDistrict, MARMARA_DISTRICTS } from 'src/app/shared/data/marmara-districts';
import { CITY_MAP, City } from 'src/app/shared/data/cities';

/** Human-readable Turkish names for service slugs */
const SERVICE_NAME_MAP: Record<string, string> = {
  'lazer-kesim': 'Lazer Kesim',
  'kaynakli-imalat': 'Kaynaklı İmalat',
  'cnc-bukum': 'CNC Büküm',
  'cnc-plazma': 'CNC Plazma'
};

/** Capability bullets per service */
const SERVICE_CAPABILITIES: Record<string, string[]> = {
  'lazer-kesim': [
    '2000x6000 mm fiber lazer kesim kapasitesi',
    '0.5 mm - 25 mm kalınlık aralığında hassas kesim',
    'Yumuşak çelik, paslanmaz çelik ve alüminyum işleme',
    'Karmaşık geometrilerde mikron düzeyinde doğruluk',
    'CAD/CAM destekli otomatik programlama',
    'Hızlı prototipleme ve seri üretim desteği'
  ],
  'kaynakli-imalat': [
    'MIG/MAG, TIG ve özel kaynak teknikleri',
    'Yapısal çelik ve paslanmaz çelik kaynak',
    'Sertifikalı kaynakçı kadrosu',
    'Kaynak sonrası taşlama ve yüzey temizleme',
    'Montaj ve imalat bir arada çözüm',
    'NDT (tahribatsız muayene) kontrol imkanı'
  ],
  'cnc-bukum': [
    '4 metre abkant pres büküm kapasitesi',
    '0.5 mm - 20 mm sac büküm kalınlığı',
    'CNC kontrollü hassas açı ve ölçü ayarı',
    'Karmaşık profil ve çoklu bükme operasyonları',
    'Bakır, alüminyum, çelik tüm metallerde büküm',
    'Seri ve fason üretim esnekliği'
  ],
  'cnc-plazma': [
    '2600x6000 mm CNC plazma kesim alanı',
    '6 mm - 50 mm kalın sac kesim kapasitesi',
    'Ağır konstrüksiyon parça kesimi',
    'Yüksek hızda düzgün kesim kenarı',
    'Otomatik nesting ile malzeme tasarrufu',
    'Büyük hacimli projelerde maliyet avantajı'
  ]
};

@Component({
  selector: 'app-sector-service',
  templateUrl: './sector-service.component.html',
  styleUrls: ['./sector-service.component.scss']
})
export class SectorServiceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  sector?: Sector;
  service?: ServiceItem;
  serviceName = '';
  combinedSlug = '';
  sectorContent = '';

  /** Background image path for hero */
  heroImage = '';

  /** Capability list for the matched service */
  capabilities: string[] = [];

  /** Other services applicable to the same sector */
  otherSectorServices: { name: string; slug: string; routerLink: string }[] = [];

  /** Other sectors that also use this service */
  otherServiceSectors: { name: string; slug: string; routerLink: string }[] = [];

  /** Sidebar service links */
  allServiceLinks: { label: string; link: string }[] = [];

  /** Location info (if this is a sector+district page) */
  locationName = '';
  locationSlug = '';
  isLocationPage = false;
  nearbyLocations: { name: string; link: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {
    this.fetchData();
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.fetchData();
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Parse the combined slug (e.g. "insaat-lazer-kesim") by trying every
   * sector+service combination and finding the match.
   */
  private parseCombinedSlug(slug: string): { sector: Sector; service: ServiceItem } | null {
    for (const sector of SECTORS) {
      for (const svc of SERVICES) {
        const candidate = sector.slug + '-' + svc.slug;
        if (candidate === slug) {
          return { sector, service: svc };
        }
      }
    }
    return null;
  }

  fetchData(): void {
    const slug = this.route.snapshot.params['combinedSlug'];
    const districtSlug = this.route.snapshot.params['districtSlug'] || null;
    const sectorSlug = this.route.snapshot.params['sectorSlug'] || null;

    // Reset location
    this.isLocationPage = false;
    this.locationName = '';
    this.locationSlug = '';
    this.nearbyLocations = [];

    // Case 1: /sektor/:sectorSlug/:districtSlug (sector + location page)
    if (sectorSlug && districtSlug) {
      const sector = SECTORS.find(s => s.slug === sectorSlug);
      if (!sector) { this.router.navigate(['/']); return; }

      this.sector = sector;
      this.isLocationPage = true;
      this.locationSlug = districtSlug;

      // Find location - could be Istanbul district, Marmara district, or city
      const istDistrict = DISTRICT_MAP[districtSlug];
      const marDistrict = MARMARA_DISTRICT_MAP[districtSlug];
      const city = CITY_MAP[districtSlug];

      if (istDistrict) {
        this.locationName = istDistrict.name;
        this.nearbyLocations = (istDistrict.nearby || [])
          .filter(n => DISTRICT_MAP[n])
          .map(n => ({ name: DISTRICT_MAP[n].name, link: `/sektor/${sectorSlug}/${n}` }));
      } else if (marDistrict) {
        this.locationName = marDistrict.name;
        // Find same-city districts for nearby
        const sameCityDistricts = MARMARA_DISTRICTS.filter(d => d.citySlug === marDistrict.citySlug && d.slug !== districtSlug);
        this.nearbyLocations = sameCityDistricts.slice(0, 6)
          .map(d => ({ name: d.name, link: `/sektor/${sectorSlug}/${d.slug}` }));
      } else if (city) {
        this.locationName = city.name;
        this.nearbyLocations = (city.nearby || [])
          .filter(n => CITY_MAP[n])
          .map(n => ({ name: CITY_MAP[n].name, link: `/sektor/${sectorSlug}/${n}` }));
      } else {
        this.router.navigate(['/']); return;
      }

      // Use first applicable service as default
      const defaultSrv = sector.applicableServices[0] || 'lazer-kesim';
      this.service = SERVICES.find(s => s.slug === defaultSrv);
      if (!this.service) { this.router.navigate(['/']); return; }

      this.serviceName = SERVICE_NAME_MAP[this.service.slug] || this.service.slug;
      this.combinedSlug = `${sectorSlug}/${districtSlug}`;
    }
    // Case 2: /sektor/:combinedSlug (sector-service or sector-city combined)
    else if (slug) {
      this.combinedSlug = slug;

      // Try sector-city first (e.g., insaat-kocaeli)
      let foundCity = false;
      for (const sector of SECTORS) {
        for (const city of Object.values(CITY_MAP)) {
          if (slug === `${sector.slug}-${city.slug}`) {
            this.sector = sector;
            this.isLocationPage = true;
            this.locationName = city.name;
            this.locationSlug = city.slug;
            this.nearbyLocations = (city.nearby || [])
              .filter(n => CITY_MAP[n])
              .map(n => ({ name: CITY_MAP[n].name, link: `/sektor/${sector.slug}-${n}` }));
            const defaultSrv = sector.applicableServices[0] || 'lazer-kesim';
            this.service = SERVICES.find(s => s.slug === defaultSrv);
            this.serviceName = SERVICE_NAME_MAP[this.service?.slug || ''] || '';
            foundCity = true;
            break;
          }
        }
        if (foundCity) break;
      }

      // If not city, try sector-service (e.g., insaat-lazer-kesim)
      if (!foundCity) {
        const parsed = this.parseCombinedSlug(slug);
        if (!parsed) { this.router.navigate(['/']); return; }
        this.sector = parsed.sector;
        this.service = parsed.service;
        this.serviceName = SERVICE_NAME_MAP[this.service.slug] || this.service.slug;
      }
    } else {
      return;
    }

    if (!this.sector || !this.service) return;

    // Hero image - sektöre özel generated görsel varsa onu, yoksa hizmet slider'ını kullan
    const sectorImageMap: Record<string, string> = {
      'insaat': 'assets/images/generated/sektor-insaat.webp',
      'asansor': 'assets/images/generated/sektor-asansor.webp',
      'enerji': 'assets/images/generated/sektor-enerji.webp',
      'gida-makinalari': 'assets/images/generated/sektor-gida.webp'
    };
    if (this.sector && sectorImageMap[this.sector.slug]) {
      this.heroImage = sectorImageMap[this.sector.slug];
    } else {
      const imgSlug = this.service.slug === 'kaynakli-imalat' ? 'kaynak' : this.service.slug;
      this.heroImage = `assets/images/services/${imgSlug}-slider.webp`;
    }

    // Capabilities
    this.capabilities = SERVICE_CAPABILITIES[this.service.slug] || [];

    // Other services for same sector
    this.otherSectorServices = this.sector.applicableServices
      .filter(s => s !== this.service!.slug)
      .map(s => ({
        name: SERVICE_NAME_MAP[s] || s,
        slug: s,
        routerLink: '/sektor/' + this.sector!.slug + '-' + s
      }));

    // Other sectors that use the same service
    this.otherServiceSectors = SECTORS
      .filter(sec => sec.slug !== this.sector!.slug && sec.applicableServices.includes(this.service!.slug))
      .map(sec => ({
        name: sec.name,
        slug: sec.slug,
        routerLink: '/sektor/' + sec.slug + '-' + this.service!.slug
      }));

    // Rich content for sector+service
    this.sectorContent = this.generateSectorContent();

    // Sidebar links
    // Aynı sektördeki hizmet sayfalarına yönlendir + ek hizmetler
    this.allServiceLinks = [
      ...this.sector!.applicableServices.map(sSlug => ({
        label: SERVICE_NAME_MAP[sSlug] || sSlug,
        link: '/sektor/' + this.sector!.slug + '-' + sSlug
      })),
      ...ADDITIONAL_SERVICES.slice(0, 6).map(s => ({ label: s.name, link: '/hizmet/' + s.slug }))
    ];

    // SEO
    const locSuffix = this.isLocationPage ? ` ${this.locationName}` : '';
    const title = `${this.sector.name}${locSuffix} ${this.serviceName} Hizmeti | Kuzey Şafak Lazer`;
    const description = `${this.sector.name} sektörüne özel${locSuffix} ${this.serviceName.toLowerCase()} hizmeti. ${this.sector.description} Kuzey Şafak Lazer - İkitelli OSB.`;
    const canonical = `https://hemenlazerkesim.com/sektor/${this.combinedSlug}`;

    this.seo.update({ title, description, canonical });

    this.seo.setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': `${this.sector.name} ${this.serviceName}`,
        'description': description,
        'url': canonical,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Kuzey Şafak Lazer',
          'telephone': '+905550008304',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'İkitelli OSB, Metal-İş Sanayi Sitesi 8. Blok No:22-24-26',
            'addressLocality': 'Başakşehir',
            'addressRegion': 'İstanbul',
            'addressCountry': 'TR'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'İstanbul'
        },
        'serviceType': this.serviceName,
        'category': this.sector.name
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Ana Sayfa',
            'item': 'https://hemenlazerkesim.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': this.serviceName,
            'item': `https://hemenlazerkesim.com/hizmetler/${this.service.slug}`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': `${this.sector.name} ${this.serviceName}`,
            'item': canonical
          }
        ]
      }
    ]);
  }

  private generateSectorContent(): string {
    if (!this.sector || !this.service) return '';
    const s = this.sector.name;
    const sLow = s.toLowerCase();
    const h = this.serviceName;
    const hLow = h.toLowerCase();
    const loc = this.isLocationPage ? this.locationName : 'İstanbul';
    const locSuffix = this.isLocationPage ? ` ${this.locationName} bölgesinde` : '';

    return `<p><strong>${s} sektöründe${locSuffix} ${hLow}</strong> hizmeti, modern endüstriyel üretimin kritik süreçlerinden biridir. Kuzey Şafak Lazer olarak ${sLow} alanında faaliyet gösteren ${loc} firmalara İkitelli OSB'deki tesislerimizden profesyonel ${hLow} çözümleri sunuyoruz. ${s} sektörünün ihtiyaç duyduğu hassasiyet, dayanıklılık ve kalite standartlarını ${hLow} hizmetimizle karşılıyoruz.</p>

<h3>${s} Sektöründe ${h} Neden Kritik?</h3>
<p>${this.sector.description} ${s} projelerinde ${hLow} kalitesi, nihai ürünün performansını ve ömrünü doğrudan etkiler. Kuzey Şafak Lazer olarak 2010 yılından bu yana ${sLow} projelerinde edindiğimiz deneyim ile${locSuffix} güvenilir çözüm ortağınız olmaya devam ediyoruz.</p>

<h3>${s} İçin ${h} Çözümlerimiz</h3>
<ul>
<li><strong>Proje bazlı ${hLow}:</strong> ${s} projelerinize özel teknik çizimden üretime</li>
<li><strong>Seri üretim ${hLow}:</strong> ${s} sektörü için yüksek adetli siparişlerde tutarlı kalite</li>
<li><strong>Prototip ${hLow}:</strong> ${s} ürün geliştirme sürecinde hızlı numune üretimi</li>
<li><strong>Entegre imalat:</strong> ${s} projelerinizde kesim + büküm + kaynak tek elden</li>
<li><strong>${s} malzeme tedariki:</strong> Sektöre uygun malzeme seçimi ve temin desteği</li>
<li><strong>Teknik danışmanlık:</strong> ${s} projelerine özel malzeme ve üretim yöntemi önerileri</li>
</ul>

<h3>${s} Projelerinde Kalite Güvencemiz</h3>
<p>${loc} ve çevresindeki ${sLow} firmalarına sunduğumuz ${hLow} hizmetinde endüstri standartlarına tam uyum sağlıyoruz. Kalite kontrol süreçlerimiz malzeme girişinden sevkiyata kadar titizlikle uygulanır. ${s} sektörünün gerektirdiği tolerans değerlerine ve yüzey kalitesine ulaşmak için son teknoloji makine parkurumuzu kullanıyoruz.</p>

<h3>${loc} ${s} ${h} İçin Neden Biz?</h3>
<ul>
<li>15 yılı aşkın ${sLow} sektörü ${hLow} deneyimi</li>
<li>${loc} merkezli hızlı teslimat ve lojistik avantajı</li>
<li>İkitelli OSB'de geniş makine parkuru - tek elden ${hLow} çözümü</li>
<li>${s} projelerine özel rekabetçi fiyatlandırma</li>
<li>7/24 teknik destek ve ${sLow} proje takibi</li>
<li>ISO kalite standartlarında ${hLow} üretimi</li>
</ul>

<p><strong>${s} sektöründe${locSuffix} ${hLow} teklifi</strong> almak için hemen bizimle iletişime geçin. Teknik ekibimiz ${sLow} projenizi değerlendirip en kısa sürede size dönüş yapacaktır.</p>`;
  }
}
