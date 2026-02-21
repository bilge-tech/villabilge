import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingContact from './components/FloatingContact'; // Yeni butonlarımızı çağırdık
import About from './components/About'; // Hakkımızda bölümünü de ekleyelim   
import Villas from './components/Villas'; // Odalarımız bölümünü de ekleyelim
import Cirali from './components/Cirali'; // Çıralı Rehberi bölümünü de ekleyelim
import Contact from './components/Contact';
function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <FloatingContact />
      <About />
      <Villas />
      <Cirali />
      <Contact />
       {/* Hakkımızda bölümü */} 
      {/* Hakkımızda, Odalarımız gibi diğer parçalar da buraya alt alta gelecek */}
    </div>
  );
}

export default App;