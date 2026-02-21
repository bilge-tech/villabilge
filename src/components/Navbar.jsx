// 1. ADIM: React'in hafıza özelliğini ve yeni tercümanımızı içeri alıyoruz.
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // YENİ EKLENDİ

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. ADIM: TERCÜMANI BAŞLATIYORUZ
  // t: Çeviri fonksiyonu (Kelimeleri sözlükten bulur)
  // i18n: Dil değiştirme kumandası
  const { t, i18n } = useTranslation();

  // Bayraklara tıklanınca dili değiştiren fonksiyon
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* === LOGO ALANI === */}
          <div className="flex items-center">
            <img src="/bilgelogo.png" alt="Villa Bilge Logo" className="h-12 w-auto object-contain" />            
            <span className="ml-3 font-bold text-bilge-lacivert text-xl hidden sm:block">Villa Bilge</span>
          </div>

          {/* === SAĞ TARAF: BİLGİSAYAR MENÜSÜ VE BAYRAKLAR === */}
          {/* Menü ve bayrakları yan yana tutmak için yeni bir kapsayıcı div ekledik */}
          <div className="flex items-center gap-6">
            
            {/* 3. ADIM: YAZILARI TERCÜMANA BAĞLADIK {t('...')} */}
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
              <li onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Anasayfa')}</li>
              <li onClick={() => document.getElementById('hakkimizda').scrollIntoView({ behavior: 'smooth' })} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Hakkimizda')}</li>
              <li onClick={() => document.getElementById('villalarimiz').scrollIntoView({ behavior: 'smooth' })} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Villalarimiz')}</li>
              <li onClick={() => document.getElementById('cirali').scrollIntoView({ behavior: 'smooth' })} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Cirali')}</li>
              <li onClick={() => document.getElementById('iletisim').scrollIntoView({ behavior: 'smooth' })} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Iletisim')}</li>
            </ul>

            {/* 4. ADIM: DİL BAYRAKLARI BURAYA EKLENDİ */}
            <div className="flex gap-2 text-xl ml-2">
              <button onClick={() => changeLanguage('tr')} className="hover:scale-125 transition-transform" title="Türkçe">🇹🇷</button>
              <button onClick={() => changeLanguage('en')} className="hover:scale-125 transition-transform" title="English">🇬🇧</button>
              <button onClick={() => changeLanguage('de')} className="hover:scale-125 transition-transform" title="Deutsch">🇩🇪</button>
              <button onClick={() => changeLanguage('ru')} className="hover:scale-125 transition-transform" title="Русский">🇷🇺</button>
            </div>

            {/* === HAMBURGER BUTONU (Sadece Mobilde) === */}
            <div className="md:hidden flex items-center ml-2">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-bilge-lacivert hover:text-bilge-turkuaz focus:outline-none"
              >
                {isOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            
          </div>

        </div>
      </div>

      {/* === MOBİL AÇILIR MENÜ ALANI === */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 pt-4 pb-6 space-y-4 text-center text-gray-700 font-medium">
            <li onClick={() => { setIsOpen(false); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Anasayfa')}</li>
            <li onClick={() => { setIsOpen(false); document.getElementById('hakkimizda').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Hakkimizda')}</li>
            <li onClick={() => { setIsOpen(false); document.getElementById('villalarimiz').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Villalarimiz')}</li>
            <li onClick={() => { setIsOpen(false); document.getElementById('cirali').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Cirali')}</li>
            <li onClick={() => { setIsOpen(false); document.getElementById('iletisim').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-bilge-turkuaz cursor-pointer transition">{t('Iletisim')}</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;