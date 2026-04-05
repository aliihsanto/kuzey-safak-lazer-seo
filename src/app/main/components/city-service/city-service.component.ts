import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';
import { City, CITIES, CITY_MAP } from 'src/app/shared/data/cities';
import { SERVICES, ServiceItem } from 'src/app/shared/mock.data';

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
  selector: 'app-city-service',
  templateUrl: './city-service.component.html',
  styleUrls: ['./city-service.component.scss']
})
export class CityServiceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  city?: City;
  service?: ServiceItem;
  serviceName = '';
  combinedSlug = '';

  /** Background image path for hero */
  heroImage = '';

  /** Capability list for the matched service */
  capabilities: string[] = [];

  /** Nearby cities with same service (internal links) */
  nearbyCities: { name: string; slug: string; routerLink: string; distanceKm: number }[] = [];

  /** Other services available for the same city */
  otherCityServices: { name: string; slug: string; routerLink: string }[] = [];

  /** Sidebar service links */
  allServiceLinks: { label: string; link: string }[] = [];

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
   * Parse the combined slug (e.g. "lazer-kesim-kocaeli") by trying every
   * service+city combination and finding the match.
   */
  private parseCombinedSlug(slug: string): { service: ServiceItem; city: City } | null {
    for (const svc of SERVICES) {
      for (const city of CITIES) {
        const candidate = svc.slug + '-' + city.slug;
        if (candidate === slug) {
          return { service: svc, city };
        }
      }
    }
    return null;
  }

  fetchData(): void {
    const slug = this.route.snapshot.params['combinedSlug'];
    if (!slug) return;

    this.combinedSlug = slug;
    const parsed = this.parseCombinedSlug(slug);
    if (!parsed) {
      this.router.navigate(['/']);
      return;
    }

    this.city = parsed.city;
    this.service = parsed.service;
    this.serviceName = SERVICE_NAME_MAP[this.service.slug] || this.service.slug;

    // Hero image
    const imgSlug = this.service.slug === 'kaynakli-imalat' ? 'kaynak' : this.service.slug;
    this.heroImage = `assets/images/services/${imgSlug}-slider.webp`;

    // Capabilities
    this.capabilities = SERVICE_CAPABILITIES[this.service.slug] || [];

    // Nearby cities with same service
    this.nearbyCities = this.city.nearby
      .map(nearbySlug => CITY_MAP[nearbySlug])
      .filter(c => !!c)
      .map(c => ({
        name: c.name,
        slug: c.slug,
        routerLink: '/' + this.service!.slug + '-' + c.slug,
        distanceKm: c.distanceKm
      }));

    // Other services for same city
    this.otherCityServices = SERVICES
      .filter(s => s.slug !== this.service!.slug)
      .map(s => ({
        name: SERVICE_NAME_MAP[s.slug] || s.slug,
        slug: s.slug,
        routerLink: '/' + s.slug + '-' + this.city!.slug
      }));

    // Sidebar links - aynı şehirdeki diğer hizmetlere yönlendir
    this.allServiceLinks = SERVICES.map(s => ({
      label: SERVICE_NAME_MAP[s.slug] || s.slug,
      link: '/' + s.slug + '-' + this.city!.slug
    }));

    // SEO
    const title = `${this.city.name} ${this.serviceName} Hizmeti | Kuzey Şafak Lazer`;
    const description = `${this.city.name} ve çevresine profesyonel ${this.serviceName.toLowerCase()} hizmeti. İkitelli OSB'den ${this.city.distanceKm} km mesafede, ${this.city.industrialZones.length} sanayi bölgesine hizmet. Kuzey Şafak Lazer.`;
    const canonical = `https://safaklazer.com.tr/${this.combinedSlug}`;

    this.seo.update({ title, description, canonical });

    this.seo.setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': `${this.city.name} ${this.serviceName}`,
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
          'name': this.city.name
        },
        'serviceType': this.serviceName
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Ana Sayfa',
            'item': 'https://safaklazer.com.tr/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': this.serviceName,
            'item': `https://safaklazer.com.tr/hizmetler/${this.service.slug}`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': `${this.city.name} ${this.serviceName}`,
            'item': canonical
          }
        ]
      }
    ]);
  }
}
