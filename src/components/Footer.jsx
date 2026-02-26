import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    // Sitenin temasına uygun lacivert arka plan (bg-bilge-lacivert)
    <footer className="bg-bilge-lacivert text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 SÜTUNLU YAPI (Mobilde alt alta, PC'de yan yana) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* 1. SÜTUN: BİZE ULAŞIN */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white tracking-wider mb-6">
              {t('footerContactTitle')}
            </h4>
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <strong className="text-bilge-turkuaz">{t('footerAddressLabel')} </strong> 
                {t('footerAddress')}
              </p>
              <p>
                <strong className="text-bilge-turkuaz">{t('footerPhoneLabel')} </strong> 
                <a href="tel:+905336315400" className="hover:text-white transition">+90 533 631 54 00</a>
              </p>
              <p>
                <strong className="text-bilge-turkuaz">{t('footerEmailLabel')} </strong> 
                <a href="mailto:info@ozgehotel.com" className="hover:text-white transition">info@ozgehotel.com</a>
              </p>
            </div>
          </div>

          {/* 2. SÜTUN: SİTE HARİTASI */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white tracking-wider mb-6">
              {t('footerSitemapTitle')}
            </h4>
            <ul className="space-y-2 text-sm md:text-base flex flex-col">
              <li><a href="#anasayfa" className="hover:text-bilge-turkuaz transition">{t('Anasayfa')}</a></li>
              <li><a href="#hakkimizda" className="hover:text-bilge-turkuaz transition">{t('Hakkimizda')}</a></li>
              <li><a href="#villalarimiz" className="hover:text-bilge-turkuaz transition">{t('Villalarimiz')}</a></li>
              <li><a href="#cirali" className="hover:text-bilge-turkuaz transition">{t('Cirali')}</a></li>
              <li><a href="#iletisim" className="hover:text-bilge-turkuaz transition">{t('Iletisim')}</a></li>
            </ul>
          </div>

          {/* 3. SÜTUN: BİZİ TAKİP EDİN */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold text-white tracking-wider mb-6">
              {t('footerFollowTitle')}
            </h4>
            <div className="flex gap-4">
              {/* INSTAGRAM İKONU */}
              <a href="https://instagram.com/ciralivillabilge" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              
              {/* FACEBOOK İKONU */}
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* EN ALT BÖLÜM: TELİF HAKKI (COPYRIGHT) */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-400">
          <p>{t('footerCopyright')}</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;