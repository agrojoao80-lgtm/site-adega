import React, { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { LabelGenerator } from './components/LabelGenerator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-royal-purpleDark text-white selection:bg-royal-gold selection:text-royal-purpleDark">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-royal-purpleDark/95 shadow-lg py-3 border-b border-royal-gold/20' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
            <Crown className={`transition-colors ${isScrolled ? 'text-royal-gold' : 'text-white'} w-8 h-8`} />
            <span className={`font-cinzel text-xl font-bold tracking-widest ${isScrolled ? 'text-white' : 'text-white'}`}>
              Adega Real
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { label: 'Serviços', id: SectionId.SERVICES },
              { label: 'O Escriba Real', id: SectionId.GENERATOR },
              { label: 'Contato', id: SectionId.CONTACT },
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className="font-lato text-sm uppercase tracking-widest hover:text-royal-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollTo(SectionId.CONTACT)}
              className="bg-transparent border border-royal-gold text-royal-gold px-6 py-2 rounded-sm font-cinzel text-sm hover:bg-royal-gold hover:text-royal-purpleDark transition-all duration-300"
            >
              Orçamento
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-royal-purpleDark border-b border-royal-gold/30 shadow-2xl animate-fade-in-down">
             <div className="flex flex-col p-6 gap-4">
                <button onClick={() => scrollTo(SectionId.SERVICES)} className="text-left py-2 border-b border-gray-800 text-gray-200 hover:text-royal-gold">Serviços</button>
                <button onClick={() => scrollTo(SectionId.GENERATOR)} className="text-left py-2 border-b border-gray-800 text-gray-200 hover:text-royal-gold">Criar Rótulo (IA)</button>
                <button onClick={() => scrollTo(SectionId.CONTACT)} className="text-left py-2 text-gray-200 hover:text-royal-gold">Contato</button>
             </div>
           </div>
        )}
      </nav>

      <main>
        <Hero />
        <div className="relative">
             {/* Section Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] text-royal-purpleDark" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-current"></path>
                </svg>
            </div>
            <Services />
        </div>
        
        <LabelGenerator />
        
        <div className="relative">
             <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-[60px] text-royal-purple" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-current"></path>
                </svg>
            </div>
            <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;