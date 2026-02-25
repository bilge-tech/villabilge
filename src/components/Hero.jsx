import React from 'react';
// 1. TERCÜMANI ÇAĞIRIYORUZ
import { useTranslation } from 'react-i18next'; 

function Hero() {
  // 2. ÇEVİRİ FONKSİYONUNU (t) ALIYORUZ
  const { t } = useTranslation(); 

  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center">
      
      {/* Arka Plan Resmi */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bilge2.webp"
          alt="Villa Bilge Manzara" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 3. SABİT YAZILARI TERCÜMANA ({t('...')}) BAĞLIYORUZ */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8 drop-shadow-md">
          {t('heroSubtitle')}
        </p>
        <button 
          onClick={() => document.getElementById('villalarimiz').scrollIntoView({ behavior: 'smooth' })}
          className="bg-bilge-turkuaz hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
        >
          {t('heroButton')}
        </button>
      </div>

    </div>
  );
}

export default Hero;