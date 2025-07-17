import { Beer, Utensils, Wine, MapPin, Clock, Instagram, Phone, Mail } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#121212] text-white font-sans">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center">
        {/* Tropical dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#121212] to-emerald-900 opacity-95"></div>
        
        {/* Tropical foliage background image */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Tropical bar atmosphere" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-neutral-100 mb-6 leading-tight">
            LE COMPTOIR<br />DES COPAINS
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 font-light">
            Un bar, une table, des copains.
          </p>
          <button 
            onClick={() => scrollToSection('menu')}
            className="inline-block bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
          >
            DÉCOUVRIR LA CARTE
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#121212] to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-8">
              À Propos
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
              Un lieu de copains, pour boire, manger et rire.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-100 mb-16">
            Notre Carte
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bières */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center hover:bg-[#252525] transition-all duration-300 transform hover:scale-105">
              <div className="text-amber-500 text-5xl mb-6">
                <Beer className="mx-auto" size={60} />
              </div>
              <h3 className="text-2xl font-serif text-neutral-100 mb-4">
                BIÈRES PRESSION
              </h3>
              <p className="text-neutral-400">
                Sélection de bières artisanales et locales
              </p>
            </div>

            {/* Cocktails */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center hover:bg-[#252525] transition-all duration-300 transform hover:scale-105">
              <div className="text-amber-500 text-5xl mb-6">
                <Wine className="mx-auto" size={60} />
              </div>
              <h3 className="text-2xl font-serif text-neutral-100 mb-4">
                COCKTAILS MAISON
              </h3>
              <p className="text-neutral-400">
                Créations originales et grands classiques
              </p>
            </div>

            {/* Tapas */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center hover:bg-[#252525] transition-all duration-300 transform hover:scale-105">
              <div className="text-amber-500 text-5xl mb-6">
                <Utensils className="mx-auto" size={60} />
              </div>
              <h3 className="text-2xl font-serif text-neutral-100 mb-4">
                TAPAS & PLATS CHAUDS
              </h3>
              <p className="text-neutral-400">
                Petites assiettes et plats à partager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-100 mb-16">
            Galerie
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Bar interior with warm lighting */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Interior of bar with warm lighting" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Colorful cocktails on bar counter */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Colorful cocktails on bar counter" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Friends socializing and toasting at bar */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Friends socializing and toasting at bar" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Tropical bar setup with palm plants */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Tropical bar setup with palm plants" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-neutral-100 mb-16">
            Infos Pratiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
              <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
                <MapPin className="mr-3" size={24} />
                Adresse
              </h3>
              <p className="text-neutral-200 text-lg mb-8">
                12 rue des Fossés<br />
                59800 Lille
              </p>
              
              <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
                <Clock className="mr-3" size={24} />
                Horaires
              </h3>
              <div className="text-neutral-200 space-y-2">
                <p><span className="font-medium">Lundi à mercredi :</span> 17h à 1h</p>
                <p><span className="font-medium">Jeudi à samedi :</span> 17h à 2h</p>
                <p><span className="font-medium">Dimanche :</span> Fermé</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl">
              <h3 className="text-2xl font-serif text-amber-500 mb-6 flex items-center">
                <Instagram className="mr-3" size={24} />
                Suivez-nous
              </h3>
              <a 
                href="https://instagram.com/comptoirdescopains" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="mr-2" size={20} />
                @comptoirdescopains
              </a>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-neutral-200 mb-4">Contact</h4>
                <p className="text-neutral-400 mb-2 flex items-center">
                  <Phone className="mr-2" size={16} />
                  03 20 XX XX XX
                </p>
                <p className="text-neutral-400 flex items-center">
                  <Mail className="mr-2" size={16} />
                  contact@comptoirdescopains.fr
                </p>
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] p-4 rounded-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.4444444444!2d3.0597!3d50.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDM3JzU5LjkiTiAzwrAwMycyMy4wIkU!5e0!3m2!1sfr!2sfr!4v1644444444444!5m2!1sfr!2sfr&q=12+rue+des+Fossés,+59800+Lille"
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location du Comptoir des Copains"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-400">
            © 2024 Le Comptoir des Copains - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
