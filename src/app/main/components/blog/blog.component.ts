import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceItem, SERVICES } from 'src/app/shared/mock.data';
import { SeoService } from 'src/app/shared/services/seo.service';
import { DISTRICTS } from 'src/app/shared/data/districts';
import { LONGTAIL_PAGES, LongTailPage } from 'src/app/shared/data/longtail-keywords';

interface Stat {
  value: string;
  label: string;
}

const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  'lazer-kesim': {
    title: 'Lazer Kesim Hizmeti | 2000x6000mm Fiber Lazer - Kuzey Şafak Lazer',
    description: 'İkitelli OSB\'de 2000x6000mm CNC fiber lazer kesim hizmeti. Yumuşak çelik, paslanmaz çelik ve alüminyum plaka kesiminde üstün hassasiyet. Kuzey Şafak Lazer.'
  },
  'kaynakli-imalat': {
    title: 'Kaynaklı İmalat Hizmeti | Profesyonel Kaynak - Kuzey Şafak Lazer',
    description: 'Profesyonel kaynaklı imalat hizmetleri. Lazer kaynak makineleriyle küçük parça montajından büyük projelere kadar dayanıklı ve estetik metal imalat çözümleri.'
  },
  'cnc-bukum': {
    title: 'CNC Büküm Hizmeti | 4 Metre Abkant Büküm - Kuzey Şafak Lazer',
    description: 'CNC büküm hizmeti ile bakır sacdan 20mm çeliğe kadar hassas metal büküm. 4 metre abkant büküm kapasitesiyle büyük projelerde üstün performans.'
  },
  'cnc-plazma': {
    title: 'CNC Plazma Kesim Hizmeti | 2600x6000mm - Kuzey Şafak Lazer',
    description: '2600x6000mm CNC plazma kesim hizmeti. Her türlü metal levhayı yüksek hassasiyetle kesim. Karmaşık ve detaylı projeler için profesyonel çözümler.'
  }
};

const SERVICE_STATS: Record<string, Stat[]> = {
  'lazer-kesim': [
    { value: '6m', label: 'Maksimum Kesim Uzunluğu' },
    { value: '25mm', label: 'Maks. Çelik Kalınlığı' },
    { value: '±0.1mm', label: 'Kesim Hassasiyeti' },
    { value: '400+', label: 'Tamamlanan Proje' }
  ],
  'kaynakli-imalat': [
    { value: '3', label: 'Kaynak Yöntemi (TIG/MIG/Lazer)' },
    { value: '∞', label: 'Özel Proje Kapasitesi' },
    { value: '15+', label: 'Yıllık Deneyim' },
    { value: '400+', label: 'Tamamlanan Proje' }
  ],
  'cnc-bukum': [
    { value: '4m', label: 'Maksimum Büküm Uzunluğu' },
    { value: '20mm', label: 'Maks. Kalınlık' },
    { value: '±0.1°', label: 'Açısal Hassasiyet' },
    { value: '400+', label: 'Tamamlanan Proje' }
  ],
  'cnc-plazma': [
    { value: '6m', label: 'Maksimum Kesim Uzunluğu' },
    { value: '50mm', label: 'Maks. Çelik Kalınlığı' },
    { value: '±0.5mm', label: 'Kesim Hassasiyeti' },
    { value: '400+', label: 'Tamamlanan Proje' }
  ]
};

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  service?: ServiceItem;
  categories: { label: string; link: string; slug: string; icon: string }[] = [];
  districtLinks: { name: string; link: string; side: string }[] = [];
  relatedLongtails: LongTailPage[] = [];
  stats: Stat[] = [];
  currentSlug = '';
  heroDesc = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {
    this.fetchData();
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
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

  fetchData(): void {
    const srv = SERVICES;
    const iconMap: Record<string, string> = {
      'lazer-kesim': 'icon-work-process',
      'kaynakli-imalat': 'icon-house-repair',
      'cnc-bukum': 'icon-time-management',
      'cnc-plazma': 'icon-industrial'
    };
    this.categories = srv.map(s => ({
      label: s.label,
      link: '/hizmetler/' + s.slug,
      slug: s.slug,
      icon: iconMap[s.slug] || 'icon-work-process'
    }));

    const slug = this.route.snapshot.params['slug'] || null;
    this.currentSlug = slug || '';

    if (slug) {
      const related = srv.find(s => s.slug === slug);
      this.service = related;
      this.stats = SERVICE_STATS[slug] || [];

      this.districtLinks = DISTRICTS.map(d => ({
        name: d.name,
        link: '/' + slug + '/' + d.slug,
        side: d.side
      }));

      this.relatedLongtails = LONGTAIL_PAGES.filter(p => p.serviceSlug === slug);

      const seoData = SERVICE_SEO[slug];
      if (seoData) {
        this.heroDesc = seoData.description;
        this.seo.update({
          title: seoData.title,
          description: seoData.description,
          canonical: 'https://safaklazer.com.tr/hizmetler/' + slug,
          ogImage: related?.topImg
        });

        const serviceName = seoData.title.split(' | ')[0];
        this.seo.setJsonLd([
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': serviceName,
            'description': seoData.description,
            'url': 'https://safaklazer.com.tr/hizmetler/' + slug,
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
            'areaServed': { '@type': 'City', 'name': 'İstanbul' }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Ana Sayfa', 'item': 'https://safaklazer.com.tr/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Hizmetlerimiz', 'item': 'https://safaklazer.com.tr/hizmetler/lazer-kesim' },
              { '@type': 'ListItem', 'position': 3, 'name': serviceName, 'item': 'https://safaklazer.com.tr/hizmetler/' + slug }
            ]
          }
        ]);
      }
    }
  }
}
