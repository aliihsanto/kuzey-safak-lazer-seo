export interface ServiceItem {
  label: string;
  slug: string;
  sliderImg: string;
  topImg: string;
  iconImg: string;
  bottomImg: string;
  contentTitle: string;
  contentDesc: string;
  order?: number;
};

export const SERVICES: ServiceItem[] = [
  {
    label: 'service1.title',
    slug: 'lazer-kesim',
    sliderImg: '/assets/images/services/lazer-kesim-slider.webp',
    topImg: '/assets/images/services/lazer-kesim-top.webp',
    iconImg: '/assets/images/services/lazer-kesim-icon.webp',
    bottomImg: '/assets/images/services/lazer-kesim-bottom.webp',
    contentTitle: 'service1.contentTitle',
    contentDesc: 'service1.contentDesc'
  },
  {
    label: 'service2.title',
    slug: 'kaynakli-imalat',
    sliderImg: '/assets/images/services/kaynak-slider.webp',
    topImg: '/assets/images/services/kaynak-top.webp',
    iconImg: '/assets/images/services/kaynak-icon.webp',
    bottomImg: '/assets/images/services/kaynak-bottom.webp',
    contentTitle: 'service2.contentTitle',
    contentDesc: 'service2.contentDesc'
  },
  {
    label: 'service3.title',
    slug: 'cnc-bukum',
    sliderImg: '/assets/images/services/cnc-bukum-slider.webp',
    topImg: '/assets/images/services/cnc-bukum-top.webp',
    iconImg: '/assets/images/services/cnc-bukum-icon.webp',
    bottomImg: '/assets/images/services/cnc-bukum-bottom.webp',
    contentTitle: 'service3.contentTitle',
    contentDesc: 'service3.contentDesc'
  },
  {
    label: 'service4.title',
    slug: 'cnc-plazma',
    sliderImg: '/assets/images/services/cnc-plazma-slider.webp',
    topImg: '/assets/images/services/cnc-plazma-top.webp',
    iconImg: '/assets/images/services/cnc-plazma-icon.webp',
    bottomImg: '/assets/images/services/cnc-plazma-bottom.webp',
    contentTitle: 'service4.contentTitle',
    contentDesc: 'service4.contentDesc'
  }
];