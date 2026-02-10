import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';
import { SectionId } from '../types';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-royal-purpleDark text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl font-cinzel text-royal-gold mb-6">Entre em Contato</h2>
            <p className="text-gray-300 mb-10 leading-relaxed text-lg font-lato">
              Estamos prontos para transformar sua visão em um vinho exclusivo. Agende uma degustação ou solicite um orçamento para o seu projeto real.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-royal-gold/10 p-3 rounded-full border border-royal-gold/20">
                    <Phone className="w-6 h-6 text-royal-gold" />
                </div>
                <div>
                  <h4 className="text-royal-gold font-bold uppercase tracking-wider text-sm mb-1">Telefone Real</h4>
                  <p className="text-gray-300 font-lato">+55 (38) 9 8828-1732</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-royal-gold/10 p-3 rounded-full border border-royal-gold/20">
                    <Mail className="w-6 h-6 text-royal-gold" />
                </div>
                <div>
                  <h4 className="text-royal-gold font-bold uppercase tracking-wider text-sm mb-1">Correio Real</h4>
                  <p className="text-gray-300 font-lato">contato@adegareal.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-royal-gold/10 p-3 rounded-full border border-royal-gold/20">
                    <MapPin className="w-6 h-6 text-royal-gold" />
                </div>
                <div>
                  <h4 className="text-royal-gold font-bold uppercase tracking-wider text-sm mb-1">Castelo (Sede)</h4>
                  <p className="text-gray-300 font-lato">Vale dos Vinhedos, Bento Gonçalves - RS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-purple via-royal-red to-royal-purple"></div>
            <h3 className="text-2xl font-cinzel text-royal-purpleDark mb-6">Envie sua Mensagem</h3>
            
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-gray-800 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
                        <input type="tel" className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-gray-800 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-gray-800 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-gray-800 focus:border-royal-purple focus:ring-1 focus:ring-royal-purple outline-none"></textarea>
                </div>
                <Button fullWidth onClick={(e) => e.preventDefault()}>Enviar Solicitação</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
