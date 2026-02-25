import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      "Anasayfa": "Anasayfa",
      "Hakkimizda": "Hakkımızda",
      "Villalarimiz": "Villalarımız",
      "Cirali": "Çıralı",
      "Iletisim": "İletişim",
      // --- HERO BÖLÜMÜ ---
      "heroTitle": "Doğanın Kalbinde, Huzur Dolu Bir Mola",
      "heroSubtitle": "Çıralı'nın eşsiz doğasında, portakal ve limon ağaçları arasında unutulmaz bir tatil deneyimi.",
      "heroButton": "Villalarımızı Keşfedin"
    }
  },
  en: {
    translation: {
      "Anasayfa": "Home",
      "Hakkimizda": "About Us",
      "Villalarimiz": "Our Villas",
      "Cirali": "Discover Çıralı",
      "Iletisim": "Contact",
      // --- HERO BÖLÜMÜ ---
      "heroTitle": "A Peaceful Break in the Heart of Nature",
      "heroSubtitle": "An unforgettable holiday experience among orange and lemon trees in the unique nature of Çıralı.",
      "heroButton": "Discover Our Villas"
    }
  },
  de: {
    translation: {
      "Anasayfa": "Startseite",
      "Hakkimizda": "Über Uns",
      "Villalarimiz": "Unsere Villen",
      "Cirali": "Çıralı Entdecken",
      "Iletisim": "Kontakt",
      // --- HERO BÖLÜMÜ ---
      "heroTitle": "Eine Friedliche Pause im Herzen der Natur",
      "heroSubtitle": "Ein unvergessliches Urlaubserlebnis inmitten von Orangen- und Zitronenbäumen in der einzigartigen Natur von Çıralı.",
      "heroButton": "Entdecken Sie Unsere Villen"
    }
  },
  ru: {
    translation: {
      "Anasayfa": "Главная",
      "Hakkimizda": "О Нас",
      "Villalarimiz": "Наши Виллы",
      "Cirali": "О Чыралы",
      "Iletisim": "Контакты",
      // --- HERO BÖLÜMÜ ---
      "heroTitle": "Мирный Отдых в Сердце Природы",
      "heroSubtitle": "Незабываемый отдых среди апельсиновых и лимонных деревьев в уникальной природе Чыралы.",
      "heroButton": "Откройте Для Себя Наши Виллы"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr",
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;