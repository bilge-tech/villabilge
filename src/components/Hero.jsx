import React from 'react';

function Hero() {
  return (
    // 'h-screen' ekranın tamamını kaplamasını sağlar
    <div className="relative h-screen flex items-center justify-center mt-16">
      
      {/* Arka Plan Resmi */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        {/* Resmi biraz karartmak için siyah bir tül (overlay) çekiyoruz ki beyaz yazılar okunsun */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* İçerik ve Yazılar */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Villa Bilge'ye Hoş Geldiniz
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Çıralı'nın eşsiz doğasında, huzur dolu bir tatil...
        </p>
        <button className="bg-bilge-turkuaz text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-bilge-lacivert transition-all shadow-lg cursor-pointer">
          Hemen Keşfet
        </button>
      </div>
      
    </div>
  );
}

export default Hero;