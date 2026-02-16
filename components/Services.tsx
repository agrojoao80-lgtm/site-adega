import React from 'react';
import { Briefcase, Heart, Award, Star } from 'lucide-react';
import { SectionId } from '../types';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-royal-purpleDark/50 border border-royal-gold/20 p-8 rounded-lg hover:border-royal-gold transition-all duration-300 group backdrop-blur-sm">
    <div className="mb-4 text-royal-gold group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-cinzel text-gray-100 mb-3">{title}</h3>
    <p className="text-gray-400 font-lato leading-relaxed">{desc}</p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-royal-purpleDark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-royal-gold uppercase tracking-[0.2em] text-sm font-bold mb-2 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white mb-6">Para Quem Servimos</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            icon={<Briefcase className="w-10 h-10" />}
            title="Corporativo & Empresas"
            desc="Presenteie clientes e parceiros com vinhos exclusivos. A marca da sua empresa estampada em rótulos de prestígio, perfeitos para festas de final de ano e conquistas de metas."
          />
          <ServiceCard 
            icon={<Heart className="w-10 h-10" />}
            title="Casamentos Reais"
            desc="O brinde dos noivos merece ser eterno. Personalize o vinho do seu casamento com as iniciais do casal, criando uma lembrança sofisticada para padrinhos e convidados."
          />
          <ServiceCard 
            icon={<Award className="w-10 h-10" />}
            title="Profissionais Liberais"
            desc="Advogados, médicos e consultores: fortaleça sua autoridade. Um vinho com seu nome é o cartão de visita mais elegante que você pode oferecer."
          />
        </div>

        <div className="mt-16 text-center bg-royal-purple p-8 rounded-2xl border border-royal-gold/30 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Star className="w-12 h-12 text-royal-gold fill-current" />
                <div className="text-left">
                    <h4 className="text-xl font-cinzel text-white mb-2">Qualidade Superior</h4>
                    <p className="text-gray-300">Trabalhamos apenas com uvas selecionadas e safras e vinhos de alta qualidade.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
