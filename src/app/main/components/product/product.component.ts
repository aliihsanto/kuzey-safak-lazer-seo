import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';
import {
  Product,
  PRODUCT_MAP,
  PRODUCTS,
  PRODUCTS_BY_CATEGORY
} from 'src/app/shared/data/products';

interface ServiceInfo {
  slug: string;
  name: string;
  description: string;
}

const SERVICE_DISPLAY_MAP: Record<string, ServiceInfo> = {
  'lazer-kesim': {
    slug: 'lazer-kesim',
    name: 'Lazer Kesim',
    description: 'CNC fiber lazer ile hassas ve h\u0131zl\u0131 kesim i\u015Flemi. Tolerans: +/- 0.1mm.'
  },
  'cnc-bukum': {
    slug: 'cnc-bukum',
    name: 'CNC B\u00FCk\u00FCm',
    description: 'CNC abkant pres ile hassas a\u00E7\u0131larda b\u00FCkme ve \u015Fekillendirme.'
  },
  'cnc-plazma': {
    slug: 'cnc-plazma',
    name: 'CNC Plazma Kesim',
    description: 'Kal\u0131n malzemeler i\u00E7in y\u00FCksek kapasiteli plazma kesim hizmeti.'
  },
  'kaynakli-imalat': {
    slug: 'kaynakli-imalat',
    name: 'Kaynak\u0131 \u0130malat',
    description: 'MIG/MAG, TIG ve robotik kaynak ile profesyonel birle\u015Ftirme.'
  }
};

const CATEGORY_LABELS: Record<string, string> = {
  sac: 'Sac \u00C7e\u015Fitleri',
  profil: 'Profil \u00C7e\u015Fitleri',
  boru: 'Boru \u00C7e\u015Fitleri'
};

const CATEGORY_DISPLAY: Record<string, string> = {
  sac: 'Sac',
  profil: 'Profil',
  boru: 'Boru'
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  product?: Product;
  relatedProducts: Product[] = [];
  applicableServiceInfos: ServiceInfo[] = [];
  categoryLabel = '';
  categoryDisplay = '';

  categoryNav: { label: string; category: string; products: Product[] }[] = [];

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
    this.product = PRODUCT_MAP[slug];

    if (!this.product) return;

    // Kategori bilgileri
    this.categoryLabel = CATEGORY_LABELS[this.product.category] || '';
    this.categoryDisplay = CATEGORY_DISPLAY[this.product.category] || '';

    // Uygulanabilir hizmetler
    this.applicableServiceInfos = this.product.applicableServices
      .map(s => SERVICE_DISPLAY_MAP[s])
      .filter(s => !!s);

    // Ayn\u0131 kategorideki di\u011Fer \u00FCr\u00FCnler
    this.relatedProducts = PRODUCTS
      .filter(p => p.category === this.product!.category && p.slug !== this.product!.slug);

    // Sidebar kategori navigasyonu
    this.categoryNav = [
      { label: 'Sac \u00C7e\u015Fitleri', category: 'sac', products: PRODUCTS_BY_CATEGORY.sac },
      { label: 'Profil \u00C7e\u015Fitleri', category: 'profil', products: PRODUCTS_BY_CATEGORY.profil },
      { label: 'Boru \u00C7e\u015Fitleri', category: 'boru', products: PRODUCTS_BY_CATEGORY.boru }
    ];

    // SEO
    const desc = this.product.description.length > 160
      ? this.product.description.substring(0, 157) + '...'
      : this.product.description;

    this.seo.update({
      title: `${this.product.name} | \u00D6zellikleri ve \u0130\u015Fleme Hizmetleri - Kuzey \u015Eafak Lazer`,
      description: desc,
      canonical: `https://safaklazer.com.tr/urun/${slug}`
    });

    this.seo.setJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': this.product.name,
        'description': this.product.description,
        'url': `https://safaklazer.com.tr/urun/${slug}`,
        'brand': {
          '@type': 'Organization',
          'name': 'Kuzey \u015Eafak Lazer'
        },
        'manufacturer': {
          '@type': 'Organization',
          'name': 'Kuzey \u015Eafak Lazer',
          'telephone': '+905550008304',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '\u0130kitelli OSB, Metal-\u0130\u015F Sanayi Sitesi 8. Blok No:22-24-26',
            'addressLocality': 'Ba\u015Fak\u015Fehir',
            'addressRegion': '\u0130stanbul',
            'addressCountry': 'TR'
          }
        },
        'category': this.categoryDisplay,
        'additionalProperty': this.product.specs.map(s => ({
          '@type': 'PropertyValue',
          'name': s.label,
          'value': s.value
        }))
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
            'name': '\u00DCr\u00FCnler',
            'item': 'https://safaklazer.com.tr/urunler'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': this.categoryLabel,
            'item': `https://safaklazer.com.tr/urunler/${this.product.category}`
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': this.product.name,
            'item': `https://safaklazer.com.tr/urun/${slug}`
          }
        ]
      }
    ]);
  }
}
