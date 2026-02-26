import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Villas() {
  // Çeviri fonksiyonumuzu içeri aktarıyoruz
  const { t } = useTranslation();

  // === 1. BİLGİLER VE FOTOĞRAFLAR (Veri Tabanımız) ===
  // Neden Dizi (Array) kullanıyoruz? Fotoğrafları tek tek yazmak yerine bir listede tutup sırayla göstermek için.
  // Sen buraya kendi çektiğin fotoğrafların isimlerini/linklerini koyacaksın. Şimdilik uygun görseller koydum.
  const images = [
    "/bilge3.webp", // Ev dış çekim
    "/bilge2.webp", // Ebeveyn Odası
    "/bilge1.webp", // Mutfak
  ];

  // === 2. REACT'İN HAFIZASI VE ZAMANLAYICISI ===
  // 'currentIndex' şu an ekranda olan fotoğrafın sıra numarasıdır (ilk fotoğraf 0'dır).
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sağ oka basınca çalışacak fonksiyon:
  const nextSlide = () => {
    // Mantık: Eğer son fotoğraftaysak başa (0) dön, değilse bir sonrakine (+1) geç.
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Sol oka basınca çalışacak fonksiyon:
  const prevSlide = () => {
    // Mantık: Eğer ilk fotoğraftaysak en sona git, değilse bir öncekine (-1) geç.
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Kendi kendine dönme (Auto-play) özelliği:
  // Neden 'useEffect'? Sayfa yüklendiğinde arka planda bir saat kurmak için.
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // 4000 milisaniye = 4 saniyede bir değişir. İstersen süreyi uzatıp kısaltabilirsin.
    
    // Neden 'clearInterval'? Kullanıcı başka sayfaya geçerse bu saati durdur ki bilgisayarı yormasın.
    return () => clearInterval(timer);
  }, [currentIndex]); // [currentIndex] -> Fotoğraf her değiştiğinde saati sıfırla ki süre şaşmasın.

  return (
    <section id="villalarimiz" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* --- BAŞLIK KISMI --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bilge-lacivert mb-4">{t('villasTitle')}</h2>
          <p className="text-gray-600 text-lg">{t('villasSubtitle')}</p>
        </div>

        {/* --- 1. KISIM: FOTOĞRAF SLİDER'I --- */}
        {/* relative: Okların bu kutunun dışına taşmadan tam üstüne yerleşmesi için. 
            overflow-hidden: Fotoğraflar kutudan taşmasın diye. */}
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          
          {/* Fotoğrafları Ekrana Basıyoruz */}
          {images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Villa Fotoğrafı ${index + 1}`}
              // İŞTE ANİMASYON BURADA: Eğer fotoğrafın sırası bizim 'currentIndex' ile aynıysa opacity-100 (göster), değilse opacity-0 (gizle).
              // transition-opacity duration-700: Bu değişimi aniden değil, 0.7 saniyede yumuşakça yap (Fade efekti).
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />
          ))}

          {/* SOL OK BUTONU */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-bilge-lacivert w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition"
          >
            {/* Sol ok ikonu (SVG) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* SAĞ OK BUTONU */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-bilge-lacivert w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition"
          >
            {/* Sağ ok ikonu (SVG) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* --- 2. KISIM: VİLLA ÖZELLİKLERİ --- */}
        {/* Neden grid? Özellikleri telefonda alt alta 2'li, bilgisayarda yan yana 4'lü kutular halinde şıkça dizmek için. */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-bilge-lacivert mb-6 border-b pb-4">{t('featuresTitle')}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏠</span>
              <span className="text-gray-700 font-medium">{t('feature1')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍊</span>
              <span className="text-gray-700 font-medium">{t('feature2')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🛏️</span>
              <span className="text-gray-700 font-medium">{t('feature3')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧸</span>
              <span className="text-gray-700 font-medium">{t('feature4')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍳</span>
              <span className="text-gray-700 font-medium">{t('feature5')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚿</span>
              <span className="text-gray-700 font-medium">{t('feature6')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪑</span>
              <span className="text-gray-700 font-medium">{t('feature7')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">❄️</span>
              <span className="text-gray-700 font-medium">{t('feature8')}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Villas;