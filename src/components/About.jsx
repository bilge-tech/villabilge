import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. i18n hook'unu import ettik

function About() {
  const { t } = useTranslation(); // 2. Çeviri fonksiyonumuzu çağırdık

  return (
    <section id="hakkimizda" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* ================= SOL SÜTUN (FOTOĞRAF) ================= */}
          <div className="relative">
            <img 
              src="/bilge1.webp"
              alt="Villa Bilge Çıralı" 
              className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"            
            />
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-4 border-bilge-turkuaz rounded-2xl hidden md:block"></div>
          </div>

          {/* ================= SAĞ SÜTUN (YAZILAR) ================= */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bilge-lacivert mb-6">
              {t('aboutTitle')} {/* Çeviri Anahtarı */}
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                {t('aboutP1')} {/* Çeviri Anahtarı: 1. Paragraf */}
              </p>
              <p>
                {t('aboutP2')} {/* Çeviri Anahtarı: 2. Paragraf */}
              </p>
              
              {/* ALINTI KUTUSU */}
              <div className="mt-8 p-6 bg-slate-50 rounded-xl border-l-4 border-bilge-turkuaz shadow-sm">
                <p className="italic text-gray-700 font-medium">
                  "{t('aboutQuote')}" {/* Çeviri Anahtarı: Alıntı Sözü */}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-bilge-lacivert font-bold not-italic">
                    {t('aboutAuthor')} {/* Çeviri Anahtarı: Yazar */}
                  </span>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;