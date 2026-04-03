/**
 * Google Analytics 4 + Search Console yardımcı servisi
 * Müşteriden GA4 Measurement ID ve Search Console doğrulama kodu alındıktan sonra aktif edilecek
 */

export const ANALYTICS_CONFIG = {
  // GA4 - Müşteriden alınacak
  ga4MeasurementId: '', // 'G-XXXXXXXXXX' formatında

  // Search Console - Müşteriden alınacak
  searchConsoleVerification: '', // meta tag content değeri

  // Site bilgileri
  siteUrl: 'https://safaklazer.com.tr',
  siteName: 'Kuzey Şafak Lazer',
};

/**
 * GA4 custom events - sayfa türlerine göre
 */
export const GA4_EVENTS = {
  // Hizmet sayfası görüntüleme
  viewService: (serviceName: string) => ({
    event: 'view_service',
    service_name: serviceName
  }),

  // İlçe sayfası görüntüleme
  viewDistrict: (district: string, service: string) => ({
    event: 'view_district_service',
    district,
    service_name: service
  }),

  // Sektör sayfası görüntüleme
  viewSector: (sector: string, service: string) => ({
    event: 'view_sector_service',
    sector,
    service_name: service
  }),

  // Şehir sayfası görüntüleme
  viewCity: (city: string, service: string) => ({
    event: 'view_city_service',
    city,
    service_name: service
  }),

  // Ürün sayfası görüntüleme
  viewProduct: (product: string) => ({
    event: 'view_product',
    product_name: product
  }),

  // Teklif butonu tıklama
  clickQuote: (source: string) => ({
    event: 'click_quote',
    source_page: source
  }),

  // Telefon tıklama
  clickPhone: (source: string) => ({
    event: 'click_phone',
    source_page: source
  })
};
