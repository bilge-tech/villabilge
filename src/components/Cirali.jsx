import React from 'react';
import { useTranslation } from 'react-i18next'; // Çeviri kancamızı import ettik

function Cirali() {
  const { t } = useTranslation(); // 't' fonksiyonumuzu başlattık

  const places = [
    {
      id: 1,
      title: t('yanartasTitle'),
      description: t('yanartasDesc'),
      image: '/yanartas.webp',
      // CSS'indeki .tall karşılığı (2 kat uzun)
      sizeClass: 'md:row-span-2' 
    },
    {
      id: 2,
      title: t('olimposTitle'),
      description: t('olimposDesc'),
      image: '/olimpos.webp',
      // CSS'indeki .wide karşılığı (2 kat geniş)
      sizeClass: 'md:col-span-2' 
    },
    {
      id: 3,
      title: t('tekneTitle'),
      description: t('tekneDesc'),
      image: '/tekne.webp',
      sizeClass: '' // Standart 1x1
    },
    {
      id: 4,
      title: t('sahilTitle'),
      description: t('sahilDesc'),
      image: '/deniz.webp',
      sizeClass: 'md:col-span-2' 
    },
    {
      id: 5,
      title: t('likyaTitle'),
      description: t('likyaDesc'),
      image: '/likya.webp',
      sizeClass: 'md:row-span-2' 
    },
    {
      id: 6,
      title: t('ulupinarTitle'),
      description: t('ulupinarDesc'),
      image: '/ulupınar.webp',
      sizeClass: '' 
    },
    {
      id: 7,
      title: t('carettaTitle'),
      description: t('carettaDesc'),
      image: '/caretta.webp',
      sizeClass: 'md:col-span-2' 
    }
  ];

  return (
    <section id="cirali" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          {/* Başlık ve alt başlığı çeviriye uygun hale getirdik */}
          <h2 className="text-4xl font-bold text-bilge-lacivert mb-4">{t('ciraliMainTitle')}</h2>
          <p className="text-gray-600 text-lg">{t('ciraliMainSubtitle')}</p>
        </div>

        {/* MASONRY GRID 
            grid-cols-1: Mobilde 1 sütun
            md:grid-cols-3: Bilgisayarda 3 sütun (Minmax 300px mantığına uygun)
            grid-flow-dense: Boşlukları akıllıca doldurur (CSS'indeki dense özelliği)
            grid-auto-rows: Temel satır yüksekliği 200px
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-4 auto-rows-[200px]">
          
          {places.map((place) => (
            <div 
              key={place.id} 
              className={`group relative overflow-hidden rounded-[15px] shadow-md transition-all duration-300 ${place.sizeClass}`}
            >
              {/* Resim Katmanı */}
              <img 
                src={place.image} 
                alt={place.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay - CSS'indeki .masonry-overlay mantığı */}
              {/* md:opacity-0: Bilgisayarda normalde gizli.
                  group-hover:opacity-100: Üstüne gelince görünür.
                  Mobilde (md: olmayanlar): Altta sabit siyah geçişle hep görünür.
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-bilge-lacivert/85 flex flex-col justify-end md:justify-center items-center p-6 text-center transition-opacity duration-400 md:opacity-0 group-hover:opacity-100">
                
                {/* Başlık: Turkuaz renk (text-bilge-turkuaz) */}
                <h3 className="text-xl md:text-2xl font-bold text-bilge-turkuaz mb-2">
                  {place.title}
                </h3>
                
                {/* Açıklama */}
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Cirali;