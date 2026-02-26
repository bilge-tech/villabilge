import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
// YENİ: Kütüphaneyi ve CSS dosyasını içeri aktarıyoruz
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Contact() {
  const { t } = useTranslation(); 

  // === FORM HAFIZASI (useState) ===
  // countryCode'u sildik, çünkü PhoneInput bize kodu ve numarayı birleşik verecek.
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

  // YENİ: Sadece telefon değiştiğinde çalışacak özel fonksiyon
  const handlePhoneChange = (value) => {
    // PhoneInput bize '905551234567' şeklinde veriyor, WhatsApp için başına '+' koyuyoruz.
    setFormData({ ...formData, phone: `+${value}` });
  };

  // WhatsApp'a Gönderme Fonksiyonu
  const sendWhatsApp = () => {
    const text = `${t('waGreeting')} ${formData.name}. %0A%0A${t('waContactInfo')}:%0A📞 ${formData.phone}%0A✉️ ${formData.email}%0A%0A${t('waMessage')}:%0A${formData.message}`;
    window.open(`https://wa.me/905336315400?text=${text}`, '_blank');
  };

  // E-Posta Gönderme Fonksiyonu
  const sendEmail = () => {
    window.location.href = `mailto:info@ozgehotel.com?subject=${t('emailSubject')}&body=${formData.message} - ${formData.name} (${formData.phone})`;
  };

  return (
    <section id="iletisim" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-bilge-lacivert mb-4">{t('contactTitle')}</h2>
          <p className="text-gray-600 text-lg">{t('contactSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* SOL TARAF */}
          <div className="space-y-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <span className="text-2xl">📍</span>
                <p>{t('address')}</p>
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
              <h3 className="text-2xl font-bold text-bilge-lacivert">{t('sendMessageTitle')}</h3>
              <div className="flex flex-col gap-4">
                <input 
                  type="text" id="name" placeholder={t('namePlaceholder')} 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none transition"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input 
                  type="email" id="email" placeholder={t('emailPlaceholder')} 
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none transition"
                  onChange={handleChange}
                  value={formData.email}
                />
                
                {/* --- YENİ EKLENEN PROFESYONEL TELEFON KUTUSU --- */}
                <div className="w-full">
                  <PhoneInput
                    country={'tr'} // Varsayılan ülke Türkiye
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    enableSearch={true} // İçinde ülke arama çubuğu çıksın (Özge Bungalow'daki gibi)
                    searchPlaceholder="Ülke Ara..."
                    // Sitenin Tailwind tasarımına uyması için özel stiller:
                    inputStyle={{
                      width: '100%',
                      height: '58px', // Diğer inputlarla aynı boyda olsun
                      borderRadius: '0.75rem', // rounded-xl karşılığı
                      borderColor: '#e5e7eb', // gray-200
                      fontSize: '1rem',
                      paddingLeft: '50px' // Bayrağın arkasında kalmasın diye boşluk
                    }}
                    buttonStyle={{
                      borderRadius: '0.75rem 0 0 0.75rem',
                      borderColor: '#e5e7eb',
                      backgroundColor: 'white'
                    }}
                  />
                </div>
                {/* ------------------------------------------------ */}

                <textarea 
                  id="message" placeholder={t('messagePlaceholder')} 
                  className="w-full p-4 h-32 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bilge-turkuaz outline-none resize-none transition"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={sendWhatsApp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6" />
                    {t('whatsappBtn')}
                  </button>
                  <button 
                    onClick={sendEmail}
                    className="flex-1 bg-bilge-turkuaz hover:bg-opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition transform hover:-translate-y-1"
                  >
                    ✉️ {t('emailBtn')}
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