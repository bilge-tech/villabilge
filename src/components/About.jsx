import React from 'react';

function About() {
  return (
    // Neden <section>? Bu bir HTML kuralıdır. Sayfanın yeni bir bölümü olduğunu Google'a anlatır.
    // Neden id="hakkimizda"? İleride üst menüdeki "Hakkımızda" yazısına tıklanınca sayfanın buraya kaymasını sağlamak için bir 'hedef etiketi' koyduk.
    // py-24: Yukarıdan ve aşağıdan geniş bir nefes alma boşluğu (padding) bırakır.
    <section id="hakkimizda" className="py-24 bg-white relative">
      
      {/* Neden max-w-7xl ve mx-auto? İçeriğin dev ekranlarda bile sağa sola çok fazla açılmasını engeller, tam ortada derli toplu tutar. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* İŞTE SİHİRLİ IZGARA (GRID) KISMI */}
        {/* Neden 'grid-cols-1'? Telefondan girilirse 1 sütun (alt alta) olsun. */}
        {/* Neden 'md:grid-cols-2'? Ekran büyüyünce (Tablet/PC) ekranı ortadan 2 sütuna böl ve yan yana koy. */}
        {/* gap-16: Resim ve yazı arasına geniş bir boşluk koyar. */}
        {/* items-center: Resim ve yazıyı dikey olarak tam ortalar. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* ================= SOL SÜTUN (FOTOĞRAF) ================= */}
          <div className="relative">
            {/* Neden 'object-cover'? Sen ileride kendi fotoğrafınızı koyduğunda, resmin en-boy oranı bozulmadan (sünmeden) bu kutunun içine kusursuzca yerleşmesi için. */}
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
              alt="Villa Bilge Çıralı" 
              className="w-full h-[125px] object-cover rounded-2xl shadow-2xl"
            />
            {/* Fotoğrafın arkasına tasarımsal küçük bir dekoratif kutu koyuyoruz (şık dursun diye) */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-4 border-bilge-turkuaz rounded-2xl hidden md:block"></div>
          </div>

          {/* ================= SAĞ SÜTUN (YAZILAR) ================= */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bilge-lacivert mb-6">
              Hakkımızda
            </h2>
            
            {/* Neden 'leading-relaxed'? Satır aralarını biraz açarak okumayı kolaylaştırır. */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Çıralı'nın el değmemiş doğasında, yeşilin ve mavinin buluştuğu noktada yer alan Villa Bilge, sizlere unutulmaz bir tatil deneyimi sunmak için tasarlandı.
              </p>
              <p>
                Yıllardır <strong>Çıralı Özge Bungalow</strong>'da misafirlerimizi aile sıcaklığıyla ağırlamanın mutluluğunu yaşıyoruz. Edindiğimiz bu tecrübeyi ve misafirperverliği, şimdi Villa Bilge’nin modern dokunuşlarıyla birleştirerek sizlere sunmaktan gurur duyuyoruz.
              </p>
              
              {/* ALINTI KUTUSU: Babanızın sözünü ön plana çıkarmak için soluna turkuaz bir çizgi çekiyoruz. */}
              <div className="mt-8 p-6 bg-slate-50 rounded-xl border-l-4 border-bilge-turkuaz shadow-sm">
                <p className="italic text-gray-700 font-medium">
                  "Sizleri Çıralı'nın eşsiz doğasında, sadece bir müşteri olarak değil, ailemizin bir parçası gibi ağırlamaktan mutluluk duyuyoruz."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-bilge-lacivert font-bold not-italic">— Osman Şahin ve Ailesi</span>
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