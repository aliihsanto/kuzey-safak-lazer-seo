import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';
import { InfoPage, INFO_PAGE_MAP, INFO_PAGES } from 'src/app/shared/data/info-pages';
import { SERVICES } from 'src/app/shared/mock.data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  page?: InfoPage;
  relatedInfoPages: InfoPage[] = [];
  relatedServiceLinks: { label: string; link: string; slug: string }[] = [];
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

  fetchData(): void {
    const slug = this.route.snapshot.params['slug'];
    this.page = INFO_PAGE_MAP[slug];

    if (!this.page) return;

    // Related info pages: same category, excluding current
    this.relatedInfoPages = INFO_PAGES
      .filter(p => p.category === this.page!.category && p.slug !== this.page!.slug)
      .slice(0, 6);

    // Related service links from page data
    this.relatedServiceLinks = this.page.relatedServices
      .map(serviceSlug => {
        const service = SERVICES.find(s => s.slug === serviceSlug);
        return service
          ? { label: service.label, link: '/hizmetler/' + service.slug, slug: service.slug }
          : null;
      })
      .filter((s): s is { label: string; link: string; slug: string } => s !== null);

    // All service links for sidebar
    this.allServiceLinks = SERVICES.map(s => ({
      label: s.label,
      link: '/hizmetler/' + s.slug
    }));

    // SEO meta tags
    this.seo.update({
      title: this.page.title,
      description: this.page.metaDesc,
      canonical: `https://safaklazer.com.tr/bilgi/${slug}`
    });

    // JSON-LD structured data
    this.seo.setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': this.page.h1,
        'description': this.page.metaDesc,
        'url': `https://safaklazer.com.tr/bilgi/${slug}`,
        'author': {
          '@type': 'Organization',
          'name': 'Kuzey Şafak Lazer',
          'url': 'https://safaklazer.com.tr'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Kuzey Şafak Lazer',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://safaklazer.com.tr/assets/images/resources/kuzey-safak-logo.webp'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://safaklazer.com.tr/bilgi/${slug}`
        }
      },
      ...(this.page.faq.length ? [{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': this.page.faq.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }] : []),
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Ana Sayfa', 'item': 'https://safaklazer.com.tr/' },
          { '@type': 'ListItem', 'position': 2, 'name': this.getCategoryLabel(), 'item': 'https://safaklazer.com.tr/bilgi' },
          { '@type': 'ListItem', 'position': 3, 'name': this.page.h1, 'item': `https://safaklazer.com.tr/bilgi/${slug}` }
        ]
      }
    ]);
  }

  getCategoryLabel(): string {
    if (!this.page) return 'Bilgi';
    switch (this.page.category) {
      case 'bilgi': return 'Bilgi Merkezi';
      case 'teklif': return 'Teklif Al';
      case 'fason': return 'Fason Hizmetler';
      default: return 'Bilgi';
    }
  }

  getCategoryIcon(): string {
    if (!this.page) return 'fa-info-circle';
    switch (this.page.category) {
      case 'bilgi': return 'fa-book-open';
      case 'teklif': return 'fa-file-invoice';
      case 'fason': return 'fa-industry';
      default: return 'fa-info-circle';
    }
  }

  isTeklifPage(): boolean {
    return this.page?.category === 'teklif';
  }
}
