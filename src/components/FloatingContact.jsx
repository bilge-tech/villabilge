import React from 'react';

function FloatingContact() {
  return (
    // ANA KAPSAYICI: fixed ile ekrana sabitliyoruz, top-1/2 ile tam ortalıyoruz.
    <div className="fixed left-[15px] top-1/2 -translate-y-1/2 flex flex-col gap-[12px] z-[9999]">
      
      {/* 1. TELEFON BUTONU */}
      {/* Neden 'group' kullanıyoruz? Çünkü Tailwind'e "Fare benim üstüme gelince içimdeki gizli yazıyı göster" komutunu bu kelimeyle veriyoruz. */}
      <a href="tel:+905336315400" className="group w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-[#3a4bb0] hover:text-white relative text-gray-800 decoration-none">
        <span className="text-[22px]">📞</span>
        
        {/* AÇIKLAMA BALONU (Tooltip) */}
        {/* Neden 'opacity-0' ve 'group-hover:opacity-100'? 
            opacity-0: Normalde yazıyı tamamen şeffaf (görünmez) yapar. 
            group-hover:opacity-100: Fare butonun üstüne geldiğinde şeffaflığı bitirir ve yazıyı %100 görünür yapar. */}
        <span className="hidden md:block absolute left-[60px] group-hover:left-[65px] bg-[#333] text-white px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
          +90 533 631 54 00
        </span>
      </a>

      {/* 2. WHATSAPP BUTONU */}
      {/* Neden 'wa.me/905336315400'? Bu WhatsApp'ın resmi yönlendirme linkidir. Tıklayan kişiyi doğrudan 533 631 5400 numaralı telefonun sohbet penceresine atar. */}
      <a href="https://wa.me/905336315400" target="_blank" rel="noreferrer" className="group w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-[#25D366] relative decoration-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-[28px] h-[28px]" />
        
        {/* Neden 'whitespace-nowrap'? Yazı uzun olsa bile alt satıra geçip şekli bozmasın, tek bir satırda düzgünce dursun diye. */}
        <span className="hidden md:block absolute left-[60px] group-hover:left-[65px] bg-[#333] text-white px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
          WhatsApp
        </span>
      </a>

      {/* 3. INSTAGRAM BUTONU */}
      {/* Neden 'ciralivillabilge'? href kısmındaki linki tam senin istediğin sayfaya yönlendirecek şekilde güncelledik. */}
      < a href="https://instagram.com/ciralivillabilge" target="_blank" rel="noreferrer" className="group w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:bg-[#E1306C] relative decoration-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-[28px] h-[28px]" />
        <span className="hidden md:block absolute left-[60px] group-hover:left-[65px] bg-[#333] text-white px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
          @ciralivillabilge
        </span>
      </a>  

{/* 4. ÖZGE BUNGALOW BUTONU (En Alttaki Buton) */}
      <a href="https://ozgebungalow.com" target="_blank" rel="noreferrer" className="group w-[42px] h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:border-2 hover:border-orange-500 relative decoration-none overflow-hidden">
        
        {/* EMOJİYİ SİLDİK, YERİNE LOGOYU KOYDUK */}
        {/* src="/ozgelogo.png" kısmı senin public klasörüne attığın logonun adıdır. İsmi neyse buraya onu yazmalısın. */}
        {/* className="w-[28px] h-[28px] object-contain" ile logoyu butonun içine tam sığacak şekilde boyutlandırdık. */}
        <img 
          src="/ozgelogo.png" 
          alt="Özge Bungalow Logo" 
          className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] object-contain" 
        />
        
        <span className="hidden md:block absolute left-[60px] group-hover:left-[65px] bg-[#333] text-white px-3 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
          Özge Bungalow
        </span>
      </a>
      

    </div>
  );
}

export default FloatingContact;