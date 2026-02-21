import React from 'react';

function Cirali() {
  const places = [
    {
      id: 1,
      title: 'Yanartaş (Chimaera)',
      description: 'Binlerce yıldır sönmeyen mitolojik ateş.',
      image: 'https://images.unsplash.com/photo-1629196615344-a5c64048013c?auto=format&fit=crop&w=800&q=80',
      // CSS'indeki .tall karşılığı (2 kat uzun)
      sizeClass: 'md:row-span-2' 
    },
    {
      id: 2,
      title: 'Olimpos Antik Kenti',
      description: 'Tarihin içinde bir nehir yürüyüşü.',
      image: 'https://images.unsplash.com/photo-1590079080759-84c920744726?auto=format&fit=crop&w=800&q=80',
      // CSS'indeki .wide karşılığı (2 kat geniş)
      sizeClass: 'md:col-span-2' 
    },
    {
      id: 3,
      title: 'Tekne Turları',
      description: 'Akdeniz\'in gizli koylarını keşfedin.',
      image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=800&q=80',
      sizeClass: '' // Standart 1x1
    },
    {
      id: 4,
      title: 'Çıralı Sahili',
      description: '3 kilometrelik eşsiz bir kumsal ve masmavi deniz.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      sizeClass: 'md:col-span-2' 
    },
    {
      id: 5,
      title: 'Likya Yolu',
      description: 'Tarihi patikalarda doğa yürüyüşü.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
      sizeClass: 'md:row-span-2' 
    },
    {
      id: 6,
      title: 'Ulupınar',
      description: 'Buz gibi suların üzerinde yemek keyfi.',
      image: 'https://images.unsplash.com/photo-1504413106449-613bc0ae21b2?auto=format&fit=crop&w=800&q=80',
      sizeClass: '' 
    },
    {
      id: 7,
      title: 'Caretta Caretta',
      description: 'Doğanın mucizesine tanıklık edin.',
      image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
      sizeClass: 'md:col-span-2' 
    }
  ];

  return (
    <section id="cirali" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bilge-lacivert mb-4">Çıralı'da Keşfedilecekler</h2>
          <p className="text-gray-600 text-lg">Doğanın ve tarihin kucağında unutulmaz deneyimler.</p>
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