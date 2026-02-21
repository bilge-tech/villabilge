import React, { useState } from 'react';

function Contact() {
  // === FORM HAFIZASI (useState) ===
  // Misafirin yazdığı her harfi bu 'formData' içinde tutuyoruz.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Girdi alanları değiştikçe hafızayı güncelleyen fonksiyon
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // WhatsApp'a Gönderme Fonksiyonu
  const sendWhatsApp = () => {
    const text = `Merhaba Villa Bilge, ben ${formData.name}. %0A%0Aİletişim Bilgilerim:%0A📞 ${formData.phone}%0A✉️ ${formData.email}%0A%0AMesajım:%0A${formData.message}`;
    window.open(`https://wa.me/905336315400?text=${text}`, '_blank');
  };

  // E-Posta Gönderme Fonksiyonu
  const sendEmail = () => {
    window.location.href = `mailto:info@ozgehotel.com?subject=Villa Bilge Rezervasyon&body=${formData.message} - ${formData.name} (${formData.phone})`;
  };

  return (
    <section id="iletisim" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bilge-lacivert mb-4">İletişim</h2>
          <p className="text-gray-600 text-lg">Bize ulaşın, tatilinizi birlikte planlayalım.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* SOL TARAF: BİLGİLER VE FORM */}
          <div className="space-y-8">
            
            {/* BİLGİ KARTLARI */}
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <span className="text-2xl">📍</span>
                <p>Ulupınar Köyü Çıralı Sok. No:20/1, Kemer/Antalya</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <a href="tel:+905336315400" className="text-bilge-lacivert font-semibold hover:text-bilge-turkuaz transition">
                  +90 533 631 54 00
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <a href="mailto:info@ozgehotel.com" className="text-bilge-lacivert font-semibold hover:text-bilge-turkuaz transition">
                  info@ozgehotel.com
                </a>
              </div>
            </div>

            {/* MESAJ FORMU */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-bilge-lacivert">Bize Mesaj Gönderin</h3>
              <div className="flex flex-col gap-4">
                <input 
                  type="text" id="name" placeholder="Adınız Soyadınız" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none transition"
                  onChange={handleChange}
                />
                <input 
                  type="email" id="email" placeholder="E-Posta Adresiniz" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none transition"
                  onChange={handleChange}
                />
                <input 
                  type="tel" id="phone" placeholder="Telefon Numaranız" 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none transition"
                  onChange={handleChange}
                />
                <textarea 
                  id="message" placeholder="Mesajınız (Tarih, kişi sayısı vb.)..." 
                  className="w-full p-4 h-32 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none resize-none transition"
                  onChange={handleChange}
                ></textarea>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={sendWhatsApp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6" />
                    WhatsApp
                  </button>
                  <button 
                    onClick={sendEmail}
                    className="flex-1 bg-bilge-turkuaz hover:bg-opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
                  >
                    ✉️ E-Posta
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: HARİTA */}
          <div className="h-[500px] lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.734!2d30.474!3d36.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDIzJzUyLjgiTiAzMMKwMjgnMjYuNCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Villa Bilge Konum"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;