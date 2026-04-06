import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';
import { District, DISTRICT_MAP, DISTRICTS } from 'src/app/shared/data/districts';
import { MARMARA_DISTRICT_MAP, MARMARA_DISTRICTS, MARMARA_DISTRICTS_BY_CITY, MarmaraDistrict } from 'src/app/shared/data/marmara-districts';
import { CITY_MAP } from 'src/app/shared/data/cities';
import {
  ServiceTemplate, SERVICE_TEMPLATE_MAP,
  generateDistrictContent, generateDistrictMeta,
  getDistrictSuffix, getDistrictDistance,
  getServiceFaq
} from 'src/app/shared/data/district-content';
import { SERVICES } from 'src/app/shared/mock.data';
import { ADDITIONAL_SERVICES } from 'src/app/shared/data/additional-services';

@Component({
  selector: 'app-district-service',
  templateUrl: './district-service.component.html',
  styleUrls: ['./district-service.component.scss']
})
export class DistrictServiceComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  district?: District;
  template?: ServiceTemplate;
  content = '';
  whyUsItems: string[] = [];
  nearbyDistricts: District[] = [];
  otherServices: ServiceTemplate[] = [];
  allServiceLinks: { label: string; link: string }[] = [];
  faqItems: { q: string; a: string }[] = [];
  cityName = '';
  citySlug = '';

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

  fetchData(): void {
    const serviceSlug = this.route.snapshot.params['serviceSlug'];
    const districtSlug = this.route.snapshot.params['districtSlug'];
    const citySlugParam = this.route.snapshot.params['citySlug'] || null;

    this.cityName = '';
    this.citySlug = '';

    // 3 segmentli: /{hizmet}/{sehir}/{ilce}
    if (citySlugParam) {
      const city = CITY_MAP[citySlugParam];
      if (city) {
        this.cityName = city.name;
        this.citySlug = city.slug;
      }
    }

    // İstanbul ilçesi mi, Marmara ilçesi mi?
    const istDistrict = DISTRICT_MAP[districtSlug];
    const marDistrict = MARMARA_DISTRICT_MAP[districtSlug];

    this.template = SERVICE_TEMPLATE_MAP[serviceSlug];

    if (istDistrict && this.template) {
      this.district = istDistrict;
      if (!this.cityName) { this.cityName = 'İstanbul'; this.citySlug = 'istanbul'; }
    } else if (marDistrict && this.template) {
      this.district = {
        name: marDistrict.name,
        slug: marDistrict.slug,
        side: 'avrupa' as any,
        nearby: MARMARA_DISTRICTS
          .filter(d => d.citySlug === marDistrict.citySlug && d.slug !== marDistrict.slug)
          .slice(0, 5)
          .map(d => d.slug)
      };
      if (!this.cityName) {
        this.cityName = marDistrict.cityName;
        this.citySlug = marDistrict.citySlug;
      }
    } else {
      return;
    }

    if (!this.district || !this.template) return;

    // İçerik üret
    this.content = generateDistrictContent(this.district, this.template);
    this.whyUsItems = this.template.whyUs.map(item =>
      item.replace(/\{\{district\}\}/g, this.district!.name)
    );

    // Yakın ilçeler (iç link) - hem İstanbul hem Marmara'dan bak
    this.nearbyDistricts = this.district.nearby
      .map(slug => {
        const ist = DISTRICT_MAP[slug];
        if (ist) return ist;
        const mar = MARMARA_DISTRICT_MAP[slug];
        if (mar) return { name: mar.name, slug: mar.slug, side: 'avrupa' as any, nearby: [] };
        return null;
      })
      .filter(d => !!d) as District[];

    // Diğer hizmetler
    this.otherServices = SERVICES
      .map(s => SERVICE_TEMPLATE_MAP[s.slug])
      .filter(t => t && t.serviceSlug !== this.template!.serviceSlug);

    // Sidebar hizmet linkleri
    // Aynı ilçedeki diğer hizmetlere yönlendir + ek hizmetler
    this.allServiceLinks = [
      ...SERVICES.map(s => ({ label: s.label, link: '/' + s.slug + '/' + districtSlug })),
      ...ADDITIONAL_SERVICES.slice(0, 6).map(s => ({ label: s.name, link: '/hizmet/' + s.slug }))
    ];

    // FAQ
    this.faqItems = getServiceFaq(serviceSlug);

    // SEO
    const meta = generateDistrictMeta(this.district, this.template);
    const canonicalPath = this.citySlug && this.citySlug !== 'istanbul'
      ? `${serviceSlug}/${this.citySlug}/${districtSlug}`
      : `${serviceSlug}/${districtSlug}`;
    this.seo.update({
      title: meta.title,
      description: meta.description,
      canonical: `https://safaklazer.com.tr/${canonicalPath}`
    });

    this.seo.setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': `${this.district.name} ${this.template.serviceName}`,
        'description': meta.description,
        'url': `https://safaklazer.com.tr/${canonicalPath}`,
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
          '@type': 'Place',
          'name': this.district.name + ', İstanbul'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Ana Sayfa', 'item': 'https://safaklazer.com.tr/' },
          { '@type': 'ListItem', 'position': 2, 'name': this.template.serviceName, 'item': `https://safaklazer.com.tr/hizmetler/${serviceSlug}` },
          { '@type': 'ListItem', 'position': 3, 'name': `${this.district.name} ${this.template.serviceName}`, 'item': `https://safaklazer.com.tr/${canonicalPath}` }
        ]
      }
    ]);
  }
}
