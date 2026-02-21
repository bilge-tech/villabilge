import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TERCÜMANIN SÖZLÜKLERİ BURADA
const resources = {
  // TÜRKÇE SÖZLÜK
  tr: {
    translation: {
      "Anasayfa": "Anasayfa",
      "Hakkimizda": "Hakkımızda",
      "Villalarimiz": "Villalarımız",
      "Cirali": "Çıralı",
      "Iletisim": "İletişim"
    }
  },
  // İNGİLİZCE SÖZLÜK
  en: {
    translation: {
      "Anasayfa": "Home",
      "Hakkimizda": "About Us",
      "Villalarimiz": "Our Villas",
      "Cirali": "Discover Çıralı",
      "Iletisim": "Contact"
    }
  },
  // ALMANCA SÖZLÜK
  de: {
    translation: {
      "Anasayfa": "Startseite",
      "Hakkimizda": "Über Uns",
      "Villalarimiz": "Unsere Villen",
      "Cirali": "Çıralı Entdecken",
      "Iletisim": "Kontakt"
    }
  },
  // RUSÇA SÖZLÜK
  ru: {
    translation: {
      "Anasayfa": "Главная",
      "Hakkimizda": "О Нас",
      "Villalarimiz": "Наши Виллы",
      "Cirali": "О Чыралы",
      "Iletisim": "Контакты"
    }
  }
};

// TERCÜMANIN AYARLARI
i18n
  .use(initReactI18next) // Tercümana React mikrofonunu takıyoruz
  .init({
    resources,           // Yukarıdaki sözlükleri eline veriyoruz
    lng: "tr",           // Site ilk açıldığında varsayılan dil Türkçe olsun
    fallbackLng: "tr",   // Eğer çevirisi olmayan bir kelimeye denk gelirse Türkçe halini göstersin
    interpolation: {
      escapeValue: false // React'in güvenlik ayarlarıyla uyumlu çalışması için
    }
  });

export default i18n;