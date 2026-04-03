import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

interface FooterLink {
  label: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  isContactPage = false;

  // Hizmetler
  hizmetLinks: FooterLink[] = [
    { label: 'Lazer Kesim', link: '/hizmetler/lazer-kesim' },
    { label: 'Kaynaklı İmalat', link: '/hizmetler/kaynakli-imalat' },
    { label: 'CNC Büküm', link: '/hizmetler/cnc-bukum' },
    { label: 'CNC Plazma Kesim', link: '/hizmetler/cnc-plazma' },
    { label: 'Dekoratif Lazer Kesim', link: '/hizmet/dekoratif-lazer-kesim' },
    { label: 'Paslanmaz Çelik İmalat', link: '/hizmet/paslanmaz-celik-imalat' },
    { label: 'Pano Gövde İmalatı', link: '/hizmet/pano-govde-imalat' },
    { label: 'Prototip Üretim', link: '/hizmet/prototip-uretim' }
  ];

  // Sektörler
  sektorLinks: FooterLink[] = [
    { label: 'İnşaat Sektörü', link: '/sektor/insaat-lazer-kesim' },
    { label: 'Asansör Sektörü', link: '/sektor/asansor-lazer-kesim' },
    { label: 'Otomotiv', link: '/sektor/otomotiv-lazer-kesim' },
    { label: 'Enerji Sektörü', link: '/sektor/enerji-lazer-kesim' },
    { label: 'Makine İmalat', link: '/sektor/makine-imalat-lazer-kesim' },
    { label: 'Gıda Makineleri', link: '/sektor/gida-makinalari-lazer-kesim' },
    { label: 'Savunma Sanayi', link: '/sektor/savunma-sanayi-lazer-kesim' },
    { label: 'Çelik Konstrüksiyon', link: '/sektor/celik-konstruksiyon-lazer-kesim' }
  ];

  // Popüler Ürünler
  urunLinks: FooterLink[] = [
    { label: 'Paslanmaz Çelik Sac', link: '/urun/paslanmaz-celik-sac' },
    { label: 'DKP Sac', link: '/urun/dkp-sac' },
    { label: 'Alüminyum Sac', link: '/urun/aluminyum-sac' },
    { label: 'Galvaniz Sac', link: '/urun/galvaniz-sac' },
    { label: 'Hardox Sac', link: '/urun/hardox-sac' },
    { label: 'St37 Sac', link: '/urun/st37-sac' },
    { label: 'Corten Sac', link: '/urun/corten-sac' },
    { label: 'Çelik Boru', link: '/urun/celik-boru' }
  ];

  // Popüler Bölgeler
  bolgeLinks: FooterLink[] = [
    { label: 'Başakşehir Lazer Kesim', link: '/lazer-kesim/basaksehir' },
    { label: 'Kadıköy Lazer Kesim', link: '/lazer-kesim/kadikoy' },
    { label: 'Esenyurt Lazer Kesim', link: '/lazer-kesim/esenyurt' },
    { label: 'Bağcılar Lazer Kesim', link: '/lazer-kesim/bagcilar' },
    { label: 'Kocaeli Lazer Kesim', link: '/lazer-kesim-kocaeli' },
    { label: 'Bursa Lazer Kesim', link: '/lazer-kesim-bursa' },
    { label: 'Gebze Lazer Kesim', link: '/lazer-kesim/kocaeli/gebze' },
    { label: 'Tekirdağ Lazer Kesim', link: '/lazer-kesim-tekirdag' }
  ];

  // Bilgi Sayfaları
  bilgiLinks: FooterLink[] = [
    { label: 'Lazer Kesim Nedir?', link: '/bilgi/cnc-lazer-kesim-nedir' },
    { label: 'Plazma Kesim Nedir?', link: '/bilgi/plazma-kesim-nedir' },
    { label: 'Lazer vs Plazma Farkı', link: '/bilgi/lazer-kesim-plazma-kesim-farki' },
    { label: 'Sac Büküm Hesaplama', link: '/bilgi/sac-bukum-hesaplama' },
    { label: 'Fason Lazer Kesim', link: '/bilgi/fason-lazer-kesim-istanbul' },
    { label: 'Teklif Al', link: '/bilgi/lazer-kesim-teklif-al' }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.checkContactPage();
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => this.checkContactPage());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private checkContactPage(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isContactPage = window.location.pathname === '/contact';
    } else {
      this.isContactPage = this.router.url === '/contact';
    }
  }
}
