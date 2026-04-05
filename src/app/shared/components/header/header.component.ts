import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SERVICES } from '../../mock.data';

interface MenuItem {
  label: string;
  link?: string | null;
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  menu: MenuItem[] = [
    {
      label: 'about.title',
      link: '/about'
    },
    {
      label: 'services.title',
      link: '/hizmetler/lazer-kesim',
      children: [
        { label: 'Lazer Kesim', link: '/hizmetler/lazer-kesim' },
        { label: 'Kaynaklı İmalat', link: '/hizmetler/kaynakli-imalat' },
        { label: 'CNC Büküm', link: '/hizmetler/cnc-bukum' },
        { label: 'CNC Plazma', link: '/hizmetler/cnc-plazma' },
        { label: 'Dekoratif Lazer Kesim', link: '/hizmet/dekoratif-lazer-kesim' },
        { label: 'Paslanmaz Çelik İmalat', link: '/hizmet/paslanmaz-celik-imalat' },
        { label: 'Pano Gövde İmalatı', link: '/hizmet/pano-govde-imalat' },
        { label: 'Tank ve Depo İmalatı', link: '/hizmet/tank-depo-imalat' },
        { label: 'Merdiven İmalatı', link: '/hizmet/merdiven-imalat' },
        { label: 'Korkuluk İmalatı', link: '/hizmet/korkuluk-imalat' },
        { label: 'Havalandırma Kanalı', link: '/hizmet/havalandirma-kanali-imalat' },
        { label: 'Prototip Üretim', link: '/hizmet/prototip-uretim' }
      ]
    },
    {
      label: 'Ürünler',
      link: '/urun/dkp-sac',
      children: [
        { label: 'DKP Sac', link: '/urun/dkp-sac' },
        { label: 'HRP Sac', link: '/urun/hrp-sac' },
        { label: 'Paslanmaz Çelik Sac', link: '/urun/paslanmaz-celik-sac' },
        { label: 'Galvaniz Sac', link: '/urun/galvaniz-sac' },
        { label: 'Alüminyum Sac', link: '/urun/aluminyum-sac' },
        { label: 'Siyah Sac (St37)', link: '/urun/st37-sac' },
        { label: 'Hardox Sac', link: '/urun/hardox-sac' },
        { label: 'Corten Sac', link: '/urun/corten-sac' },
        { label: 'Baklavalı Sac', link: '/urun/baklavali-sac' },
        { label: 'Kare Profil', link: '/urun/kare-profil' },
        { label: 'Çelik Boru', link: '/urun/celik-boru' }
      ]
    },
    {
      label: 'Sektörler',
      link: '/sektor/insaat-lazer-kesim',
      children: [
        { label: 'İnşaat', link: '/sektor/insaat-lazer-kesim' },
        { label: 'Asansör', link: '/sektor/asansor-lazer-kesim' },
        { label: 'Otomotiv', link: '/sektor/otomotiv-lazer-kesim' },
        { label: 'Enerji', link: '/sektor/enerji-lazer-kesim' },
        { label: 'Savunma Sanayi', link: '/sektor/savunma-sanayi-lazer-kesim' },
        { label: 'Gıda Makineleri', link: '/sektor/gida-makineleri-lazer-kesim' },
        { label: 'Makine İmalat', link: '/sektor/makine-imalat-lazer-kesim' },
        { label: 'HVAC/İklimlendirme', link: '/sektor/hvac-iklimlendirme-lazer-kesim' },
        { label: 'Dekorasyon', link: '/sektor/dekorasyon-lazer-kesim' }
      ]
    },
    {
      label: 'contact.title',
      link: '/contact'
    }
  ];
  menuVisible = false;
  lang = 'tr';
  private isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.lang = 'tr';
    this.translate.setDefaultLang('tr');
    this.translate.use('tr');
  }

  openMenu(): void {
    if (this.isBrowser && !document.body.classList.contains('locked')) {
      document.body.classList.add('locked');
    }
    this.menuVisible = true;
  }

  closeMenu(): void {
    if (this.isBrowser && document.body.classList.contains('locked')) {
      document.body.classList.remove('locked');
    }
    this.menuVisible = false;
  }

  changeLang(): void {
    // Dil değiştirme devre dışı - sadece Türkçe
  }

}
