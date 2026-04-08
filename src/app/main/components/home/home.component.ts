import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from 'src/app/shared/services/seo.service';

interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
  link: string;
  image: string;
}

interface SectorItem {
  name: string;
  slug: string;
  icon: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface CityItem {
  name: string;
  slug: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quoteForm!: FormGroup;
  formSubmitted = false;
  videoVisible = false;

  stats: StatItem[] = [
    { value: '400+', label: 'Tamamlanan Proje' },
    { value: '15+', label: 'Yıllık Deneyim' },
    { value: '6m', label: 'Lazer Kesim Kapasitesi' },
    { value: '4m', label: 'CNC Büküm Kapasitesi' }
  ];

  mainServices: ServiceItem[] = [
    {
      title: 'CNC Lazer Kesim',
      desc: '2000x6000mm fiber lazer ile milimetrik hassasiyette metal kesim.',
      icon: 'icon-laser',
      link: '/hizmetler/lazer-kesim',
      image: 'assets/images/generated/lazer-kesim-hero.webp'
    },
    {
      title: 'Kaynaklı İmalat',
      desc: 'TIG, MIG ve lazer kaynak ile profesyonel metal birleştirme.',
      icon: 'icon-welding',
      link: '/hizmetler/kaynakli-imalat',
      image: 'assets/images/generated/kaynakli-imalat-hero.webp'
    },
    {
      title: 'CNC Büküm',
      desc: '4 metre abkant pres ile hassas sac büküm işlemleri.',
      icon: 'icon-bending',
      link: '/hizmetler/cnc-bukum',
      image: 'assets/images/generated/cnc-bukum-hero.webp'
    },
    {
      title: 'CNC Plazma Kesim',
      desc: '2600x6000mm plazma ile 50mm kalınlığa kadar güçlü kesim.',
      icon: 'icon-plasma',
      link: '/hizmetler/cnc-plazma',
      image: 'assets/images/generated/cnc-plazma-hero.webp'
    }
  ];

  additionalServices: ServiceItem[] = [
    {
      title: 'Dekoratif Lazer Kesim',
      desc: 'Metal panel, paravan, kapı ve cephe giydirme uygulamaları.',
      icon: 'icon-decorative',
      link: '/hizmet/dekoratif-lazer-kesim',
      image: 'assets/images/generated/metal-parcalar.webp'
    },
    {
      title: 'Paslanmaz Çelik İmalat',
      desc: 'Paslanmaz çelik kesim, büküm ve montaj hizmetleri.',
      icon: 'icon-stainless',
      link: '/hizmet/paslanmaz-celik-imalat',
      image: 'assets/images/generated/paslanmaz-celik.webp'
    },
    {
      title: 'Pano Gövde İmalatı',
      desc: 'Elektrik pano gövdeleri ve sac metal muhafazalar.',
      icon: 'icon-panel',
      link: '/hizmet/pano-govde-imalat',
      image: 'assets/images/generated/kalite-kontrol.webp'
    },
    {
      title: 'Tank ve Depo İmalatı',
      desc: 'Endüstriyel tank, silo ve depolama sistemleri.',
      icon: 'icon-tank',
      link: '/hizmet/tank-depo-imalat',
      image: 'assets/images/generated/fabrika-panorama.webp'
    },
    {
      title: 'Merdiven İmalatı',
      desc: 'Çelik ve paslanmaz çelik merdiven sistemleri.',
      icon: 'icon-stairs',
      link: '/hizmet/merdiven-imalat',
      image: 'assets/images/generated/sektor-insaat.webp'
    },
    {
      title: 'Korkuluk Imalati',
      desc: 'Modern ve klasik korkuluk tasarım ve uretimi.',
      icon: 'icon-railing',
      link: '/hizmet/korkuluk-imalat',
      image: 'assets/images/feature/metal-bukum.webp'
    }
  ];

  sectors: SectorItem[] = [
    { name: 'İnşaat Sektörü', slug: 'insaat-lazer-kesim', icon: 'fas fa-building' },
    { name: 'Enerji Sektörü', slug: 'enerji-lazer-kesim', icon: 'fas fa-bolt' },
    { name: 'Savunma Sanayi', slug: 'savunma-sanayi-lazer-kesim', icon: 'fas fa-shield-alt' },
    { name: 'Otomotiv', slug: 'otomotiv-lazer-kesim', icon: 'fas fa-car' },
    { name: 'Gıda Makineleri', slug: 'gida-makineleri-lazer-kesim', icon: 'fas fa-utensils' },
    { name: 'Makine İmalat', slug: 'makine-imalat-lazer-kesim', icon: 'fas fa-cogs' },
    { name: 'Mobilya Sektörü', slug: 'mobilya-lazer-kesim', icon: 'fas fa-couch' },
    { name: 'Dekorasyon', slug: 'dekorasyon-lazer-kesim', icon: 'fas fa-palette' },
    { name: 'Tarım Makineleri', slug: 'tarim-makineleri-lazer-kesim', icon: 'fas fa-tractor' },
    { name: 'HVAC / İklimlendirme', slug: 'hvac-iklimlendirme-lazer-kesim', icon: 'fas fa-wind' },
    { name: 'Denizcilik', slug: 'denizcilik-lazer-kesim', icon: 'fas fa-ship' },
    { name: 'Medikal', slug: 'medikal-lazer-kesim', icon: 'fas fa-heartbeat' }
  ];

  cities: CityItem[] = [
    { name: 'İstanbul', slug: 'lazer-kesim/basaksehir' },
    { name: 'Kocaeli', slug: 'lazer-kesim-kocaeli' },
    { name: 'Bursa', slug: 'lazer-kesim-bursa' },
    { name: 'Sakarya', slug: 'lazer-kesim-sakarya' },
    { name: 'Tekirdağ', slug: 'lazer-kesim-tekirdag' },
    { name: 'Edirne', slug: 'lazer-kesim-edirne' },
    { name: 'Kırklareli', slug: 'lazer-kesim-kirklareli' },
    { name: 'Yalova', slug: 'lazer-kesim-yalova' },
    { name: 'Balıkesir', slug: 'lazer-kesim-balikesir' },
    { name: 'Çanakkale', slug: 'lazer-kesim-canakkale' },
    { name: 'Bilecik', slug: 'lazer-kesim-bilecik' }
  ];

  serviceOptions: string[] = [
    'CNC Lazer Kesim',
    'Kaynakli Imalat',
    'CNC Bukum',
    'CNC Plazma Kesim',
    'Dekoratif Lazer Kesim',
    'Paslanmaz Celik Imalat',
    'Pano Govde Imalati',
    'Tank/Depo Imalati',
    'Merdiven Imalati',
    'Korkuluk Imalati',
    'Diger'
  ];

  materialOptions: string[] = [
    'Sac (DKP/HRP)',
    'Paslanmaz Celik',
    'Aluminyum',
    'Galvaniz',
    'Bakir / Pirinc',
    'Diger'
  ];

  private isBrowser: boolean;

  constructor(
    private seo: SeoService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.initForm();

    this.seo.update({
      title: 'Kuzey Şafak Lazer | CNC Lazer Kesim, Büküm, Plazma & Kaynak - İstanbul',
      description: 'Kuzey Şafak Lazer - İkitelli OSB\'de CNC lazer kesim, CNC büküm, CNC plazma kesim ve kaynaklı imalat hizmetleri. 2010\'dan beri kaliteli metal işleme çözümleri.',
      canonical: 'https://hemenlazerkesim.com/'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Kuzey Safak Lazer',
      'description': 'CNC lazer kesim, CNC bukum, CNC plazma kesim ve kaynakli imalat hizmetleri.',
      'url': 'https://hemenlazerkesim.com',
      'telephone': '+905550008304',
      'email': 'info@hemenlazerkesim.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Ikitelli OSB, Metal-Is Sanayi Sitesi 8. Blok No:22-24-26',
        'addressLocality': 'Basaksehir',
        'addressRegion': 'Istanbul',
        'addressCountry': 'TR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 41.066889,
        'longitude': 28.800185
      },
      'foundingDate': '2010',
      'sameAs': [
        'https://www.instagram.com/lazersafak/',
        'https://www.youtube.com/channel/UC0rsusAXgbRlCG9jugZ2KRQ'
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Metal Isleme Hizmetleri',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CNC Lazer Kesim' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Kaynakli Imalat' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CNC Bukum' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CNC Plazma Kesim' } }
        ]
      }
    });
  }

  private initForm(): void {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      service: ['', Validators.required],
      material: [''],
      description: ['']
    });
  }

  onSubmitQuote(): void {
    this.formSubmitted = true;
    if (this.quoteForm.invalid) {
      return;
    }
    // Form submission logic would go here
    // For now, redirect to WhatsApp with form data
    if (!this.isBrowser) return;

    const data = this.quoteForm.value;
    const rawMessage = `Merhaba, teklif almak istiyorum.\nAd: ${data.name}\nFirma: ${data.company || '-'}\nHizmet: ${data.service}\nMalzeme: ${data.material || '-'}\nDetay: ${data.description || '-'}`;
    const message = encodeURIComponent(rawMessage);
    window.open(`https://wa.me/905550008304?text=${message}`, '_blank');
  }

  showVideo(): void {
    if (!this.isBrowser) return;
    this.videoVisible = true;
    const videoDiv = document.getElementById('kuzey-safak-video');
    if (videoDiv) {
      setTimeout(() => {
        videoDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 0);
    }
  }

  scrollToQuote(): void {
    if (!this.isBrowser) return;
    const el = document.getElementById('teklif-formu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
