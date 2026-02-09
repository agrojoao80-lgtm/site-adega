import React from 'react';
import { Crown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100019] text-gray-400 py-12 border-t border-royal-gold/20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <Crown className="text-royal-gold w-6 h-6" />
          <span className="font-cinzel text-2xl text-gray-200">Adega Real</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm uppercase tracking-widest font-lato">
            <a href="#" className="hover:text-royal-gold transition-colors">Sobre</a>
            <a href="#" className="hover:text-royal-gold transition-colors">Vinhos</a>
            <a href="#" className="hover:text-royal-gold transition-colors">Personalização</a>
            <a href="#" className="hover:text-royal-gold transition-colors">Blog</a>
            <a href="#" className="hover:text-royal-gold transition-colors">Contato</a>
        </div>

        <div className="text-xs text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Adega Real. Todos os direitos reservados.</p>
          <p className="mt-2">Beba com moderação. Venda proibida para menores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
};