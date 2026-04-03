import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://safaklazer.com.tr';
  private defaultImage = '/assets/images/resources/kuzey-safak-logo.webp';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  update(data: SeoData): void {
    // Title
    this.title.setTitle(data.title);

    // Meta Description
    this.meta.updateTag({ name: 'description', content: data.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: this.baseUrl + (data.ogImage || this.defaultImage) });
    this.meta.updateTag({ property: 'og:locale', content: 'tr_TR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Kuzey Şafak Lazer' });

    if (data.canonical) {
      this.meta.updateTag({ property: 'og:url', content: data.canonical });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.baseUrl + (data.ogImage || this.defaultImage) });

    // Canonical
    this.updateCanonical(data.canonical);
  }

  private updateCanonical(url?: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url || this.baseUrl);
  }

  setJsonLd(schema: object | object[]): void {
    // Remove existing JSON-LD
    const existing = this.doc.querySelectorAll('script[type="application/ld+json"].seo-schema');
    existing.forEach(el => el.remove());

    const schemas = Array.isArray(schema) ? schema : [schema];
    schemas.forEach(s => {
      const script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'seo-schema';
      script.text = JSON.stringify(s);
      this.doc.head.appendChild(script);
    });
  }
}
