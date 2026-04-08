import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';
import { LongTailPage, LONGTAIL_MAP, LONGTAIL_PAGES } from 'src/app/shared/data/longtail-keywords';
import { AdditionalService, ADDITIONAL_SERVICE_MAP, ADDITIONAL_SERVICES } from 'src/app/shared/data/additional-services';
import { SERVICES } from 'src/app/shared/mock.data';

@Component({
  selector: 'app-longtail',
  templateUrl: './longtail.component.html',
  styleUrls: ['./longtail.component.scss']
})
export class LongtailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  page?: LongTailPage;
  relatedPages: LongTailPage[] = [];
  allServiceLinks: { label: string; link: string }[] = [];
  isAdditionalService = false;

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

    // Önce long-tail'de ara
    const ltPage = LONGTAIL_MAP[slug];
    if (ltPage) {
      this.page = ltPage;
      this.isAdditionalService = false;
      this.relatedPages = LONGTAIL_PAGES
        .filter(p => p.serviceSlug === ltPage.serviceSlug && p.slug !== ltPage.slug);
    } else {
      // Ek hizmetlerde ara
      const addSvc = ADDITIONAL_SERVICE_MAP[slug];
      if (addSvc) {
        this.isAdditionalService = true;
        // AdditionalService'i LongTailPage formatına dönüştür
        this.page = {
          slug: addSvc.slug,
          serviceSlug: addSvc.parentService,
          title: `${addSvc.name} | Kuzey Şafak Lazer İstanbul`,
          h1: addSvc.name,
          metaDesc: addSvc.metaDesc,
          keywords: addSvc.keywords,
          content: addSvc.content,
          faq: []
        };
        // Aynı parent hizmetteki diğer ek hizmetler
        this.relatedPages = ADDITIONAL_SERVICES
          .filter(s => s.parentService === addSvc.parentService && s.slug !== addSvc.slug)
          .map(s => ({
            slug: s.slug,
            serviceSlug: s.parentService,
            title: s.name,
            h1: s.name,
            metaDesc: s.metaDesc,
            keywords: s.keywords,
            content: s.content,
            faq: []
          }));
      } else {
        // Bulunamadı
        this.page = undefined;
        return;
      }
    }

    if (!this.page) return;

    // Sidebar hizmet linkleri
    this.allServiceLinks = SERVICES.map(s => ({
      label: s.label,
      link: '/hizmetler/' + s.slug
    }));

    // SEO
    this.seo.update({
      title: this.page.title,
      description: this.page.metaDesc,
      canonical: `https://hemenlazerkesim.com/hizmet/${slug}`
    });

    this.seo.setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': this.page.h1,
        'description': this.page.metaDesc,
        'url': `https://hemenlazerkesim.com/hizmet/${slug}`,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Kuzey Şafak Lazer',
          'telephone': '+905550008304'
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
          { '@type': 'ListItem', 'position': 1, 'name': 'Ana Sayfa', 'item': 'https://hemenlazerkesim.com/' },
          { '@type': 'ListItem', 'position': 2, 'name': this.page.h1, 'item': `https://hemenlazerkesim.com/hizmet/${slug}` }
        ]
      }
    ]);
  }
}
