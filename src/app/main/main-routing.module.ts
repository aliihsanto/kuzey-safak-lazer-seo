import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CityServiceComponent } from './components/city-service/city-service.component';
import { ContactComponent } from './components/contact/contact.component';
import { DistrictServiceComponent } from './components/district-service/district-service.component';
import { HomeComponent } from './components/home/home.component';
import { LongtailComponent } from './components/longtail/longtail.component';
import { ProductComponent } from './components/product/product.component';
import { SectorServiceComponent } from './components/sector-service/sector-service.component';
import { InfoComponent } from './components/info/info.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'hizmetler/:slug',
        component: BlogComponent
      },
      {
        path: 'hizmet/:slug',
        component: LongtailComponent
      },
      {
        path: 'urun/:slug',
        component: ProductComponent
      },
      {
        path: 'sektor/:combinedSlug',
        component: SectorServiceComponent
      },
      {
        path: 'sektor/:sectorSlug/:districtSlug',
        component: SectorServiceComponent
      },
      {
        path: 'bilgi/:slug',
        component: InfoComponent
      },
      {
        path: 'urunler',
        redirectTo: '/urun/dkp-sac',
        pathMatch: 'full'
      },
      {
        path: 'sektorler',
        redirectTo: '/sektor/insaat-lazer-kesim',
        pathMatch: 'full'
      },
      {
        path: 'bilgi',
        redirectTo: '/bilgi/cnc-lazer-kesim-nedir',
        pathMatch: 'full'
      },
      {
        path: ':serviceSlug/:citySlug/:districtSlug',
        component: DistrictServiceComponent
      },
      {
        path: ':serviceSlug/:districtSlug',
        component: DistrictServiceComponent
      },
      {
        path: ':combinedSlug',
        component: CityServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
