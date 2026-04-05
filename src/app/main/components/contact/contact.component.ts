import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;

  serviceOptions = [
    'CNC Lazer Kesim',
    'Kaynaklı İmalat',
    'CNC Büküm',
    'CNC Plazma Kesim',
    'Dekoratif Lazer Kesim',
    'Paslanmaz Çelik İmalat',
    'Pano Gövde İmalatı',
    'Tank/Depo İmalatı',
    'Merdiven İmalatı',
    'Korkuluk İmalatı',
    'Prototip Üretim',
    'Diğer'
  ];

  faqItems = [
    {
      question: 'Teklif almak için ne gerekir?',
      answer: 'Teknik çiziminizi (DXF, DWG, PDF) veya ölçülerinizi bize iletmeniz yeterlidir. Malzeme cinsi, kalınlık ve adet bilgisi ile birlikte en kısa sürede size fiyat teklifi sunuyoruz.',
      open: false
    },
    {
      question: 'Teslimat süresi ne kadar?',
      answer: 'Standart siparişlerde 3-7 iş günü içinde teslimat yapılmaktadır. Acil işler için aynı gün veya ertesi gün teslimat seçeneklerimiz de mevcuttur. Proje büyüklüğüne göre süre değişebilir.',
      open: false
    },
    {
      question: 'Minimum sipariş miktarı var mı?',
      answer: 'Minimum sipariş miktarı zorunluluğumuz yoktur. Tek parça prototipten seri üretime kadar her ölçekte hizmet vermekteyiz.',
      open: false
    },
    {
      question: 'Hangi dosya formatlarını kabul ediyorsunuz?',
      answer: 'DXF, DWG, PDF, STEP ve IGES formatlarında teknik çizim kabul ediyoruz. Elinizde çizim yoksa ölçüleri bize iletmeniz durumunda çizimi biz de hazırlayabiliriz.',
      open: false
    }
  ];

  constructor(
    private seo: SeoService,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      service: [''],
      message: ['', Validators.required]
    });

    this.seo.update({
      title: 'İletişim | Kuzey Şafak Lazer - İkitelli OSB İstanbul',
      description: 'Kuzey Şafak Lazer iletişim bilgileri. İkitelli OSB, Metal-İş Sanayi Sitesi, Başakşehir/İstanbul. Lazer kesim, CNC büküm ve kaynak hizmetleri için bize ulaşın.',
      canonical: 'https://safaklazer.com.tr/contact'
    });
  }

  toggleFaq(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;
    if (!isPlatformBrowser(this.platformId)) return;
    const v = this.contactForm.value;
    const rawText = `Merhaba, ${v.name} - ${v.company || 'Belirtilmedi'}\nHizmet: ${v.service || 'Belirtilmedi'}\nMesaj: ${v.message}\nTel: ${v.phone} | E-posta: ${v.email}`;
    const text = encodeURIComponent(rawText);
    window.open(`https://wa.me/905550008304?text=${text}`, '_blank');
    this.formSubmitted = true;
  }
}
