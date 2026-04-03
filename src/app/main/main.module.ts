import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BlogComponent } from './components/blog/blog.component';
import { CityServiceComponent } from './components/city-service/city-service.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DistrictServiceComponent } from './components/district-service/district-service.component';
import { LongtailComponent } from './components/longtail/longtail.component';
import { ProductComponent } from './components/product/product.component';
import { SectorServiceComponent } from './components/sector-service/sector-service.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    BlogComponent,
    CityServiceComponent,
    ContactComponent,
    AboutComponent,
    DistrictServiceComponent,
    LongtailComponent,
    ProductComponent,
    SectorServiceComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
