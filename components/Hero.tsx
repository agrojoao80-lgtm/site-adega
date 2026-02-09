import React from 'react';
import { Crown, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop" 
          alt="Adega de vinhos luxuosa" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-purpleDark/80 via-royal-purple/50 to-royal-purpleDark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <Crown className="w-16 h-16 text-royal-gold animate-pulse" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-cinzel text-royal-gold mb-4 drop-shadow-lg tracking-wider">
          Adega Real
        </h1>
        
        <div className="h-1 w-32 bg-royal-red mx-auto mb-8"></div>
        
        <h2 className="text-xl md:text-2xl font-playfair text-gray-200 mb-8 italic">
          "Onde a sua marca ganha a nobreza de um grande vinho."
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Vinhos de marca própria para empresas visionárias, casamentos reais e profissionais liberais que desejam deixar um legado.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button onClick={() => scrollTo(SectionId.GENERATOR)}>
            Criar Meu Rótulo Real
          </Button>
          <Button variant="outline" onClick={() => scrollTo(SectionId.SERVICES)}>
            Conhecer Serviços
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollTo(SectionId.ABOUT)}>
        <ChevronDown className="w-8 h-8 text-royal-gold" />
      </div>
    </section>
  );
};