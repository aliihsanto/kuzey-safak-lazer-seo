import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.update({
      title: 'Hakkımızda | Kuzey Şafak Lazer - Metal İşleme & Lazer Kesim',
      description: 'Kuzey Şafak Lazer, 2010\'dan beri İkitelli OSB\'de ağır sanayi, inşaat ve endüstriyel mutfak ekipmanları imalatına yönelik metal işleme çözümleri sunmaktadır.',
      canonical: 'https://safaklazer.com.tr/about'
    });
  }

}
