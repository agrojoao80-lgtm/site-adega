import React, { useState } from 'react';
import { ScrollText, Wand2, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { SectionId, LabelRequest, GeneratedLabel } from '../types';
import { generateLabelContent } from '../services/geminiService';

export const LabelGenerator: React.FC = () => {
  const [request, setRequest] = useState<LabelRequest>({
    occasion: '',
    recipientName: '',
    wineType: 'Tinto Seco Cabernet Sauvignon',
    tone: 'celebratory'
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedLabel | null>(null);

  const handleGenerate = async () => {
    if (!request.recipientName || !request.occasion) return;
    
    setLoading(true);
    try {
      const data = await generateLabelContent(request);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.GENERATOR} className="py-24 bg-gradient-to-b from-royal-purpleDark to-royal-purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal-red blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-royal-gold blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-royal-gold/10 px-4 py-2 rounded-full border border-royal-gold/20 mb-4">
            <Wand2 className="w-4 h-4 text-royal-gold" />
            <span className="text-royal-gold text-xs uppercase tracking-widest font-bold">O Escriba Real (IA)</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white mb-4">Crie Seu Rótulo</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Descreva a ocasião e deixe nossa inteligência artificial criar uma descrição digna da nobreza para o seu vinho.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Form Input */}
          <div className="flex-1 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-royal-gold text-sm font-bold uppercase tracking-wider mb-2">Para quem é este vinho?</label>
                <input 
                  type="text"
                  placeholder="Ex: Empresa Tech Solutions ou Casamento Ana e João"
                  className="w-full bg-royal-purpleDark border border-royal-gold/30 rounded-lg p-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-colors"
                  value={request.recipientName}
                  onChange={(e) => setRequest({...request, recipientName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-royal-gold text-sm font-bold uppercase tracking-wider mb-2">Qual a ocasião?</label>
                <input 
                  type="text"
                  placeholder="Ex: Festa de fim de ano, Bodas de Prata, Presente para Cliente VIP"
                  className="w-full bg-royal-purpleDark border border-royal-gold/30 rounded-lg p-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-colors"
                  value={request.occasion}
                  onChange={(e) => setRequest({...request, occasion: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-royal-gold text-sm font-bold uppercase tracking-wider mb-2">Tipo de Vinho</label>
                  <select 
                    className="w-full bg-royal-purpleDark border border-royal-gold/30 rounded-lg p-4 text-white focus:border-royal-gold outline-none"
                    value={request.wineType}
                    onChange={(e) => setRequest({...request, wineType: e.target.value})}
                  >
                    <option>Tinto Seco Cabernet Sauvignon</option>
                    <option>Tinto Merlot Reserva</option>
                    <option>Brut Espumante</option>
                    <option>Rosé Suave</option>
                  </select>
                </div>
                <div>
                  <label className="block text-royal-gold text-sm font-bold uppercase tracking-wider mb-2">Tom do Texto</label>
                  <select 
                    className="w-full bg-royal-purpleDark border border-royal-gold/30 rounded-lg p-4 text-white focus:border-royal-gold outline-none"
                    value={request.tone}
                    onChange={(e) => setRequest({...request, tone: e.target.value as any})}
                  >
                    <option value="celebratory">Celebrativo & Festivo</option>
                    <option value="formal">Formal & Corporativo</option>
                    <option value="poetic">Poético & Romântico</option>
                  </select>
                </div>
              </div>

              <Button 
                fullWidth 
                onClick={handleGenerate}
                disabled={loading || !request.recipientName || !request.occasion}
                className={loading ? 'opacity-70 cursor-not-allowed' : ''}
              >
                {loading ? (
                  <span className="flex items-center gap-2"><RefreshCw className="animate-spin w-4 h-4"/> Criando Obra de Arte...</span>
                ) : (
                  <span className="flex items-center gap-2"><ScrollText className="w-4 h-4"/> Gerar Descrição do Rótulo</span>
                )}
              </Button>
            </div>
          </div>

          {/* Preview / Result */}
          <div className="flex-1 flex items-center justify-center">
            <div className={`relative w-full max-w-sm aspect-[3/4] transition-all duration-700 ${result ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
              
              {/* Bottle/Label Visualization */}
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-t-[100px] rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-royal-gold/20 flex flex-col items-center p-6 overflow-hidden">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-10"></div>
                
                {/* Gold Border on Label */}
                <div className="w-full h-full border-2 border-royal-gold p-1 flex flex-col">
                  <div className="w-full h-full border border-royal-gold/50 flex flex-col items-center text-center p-6 justify-between bg-[#fffcf5] text-royal-purpleDark">
                    
                    <div className="mt-4">
                      <div className="text-royal-gold text-4xl mb-2">♔</div>
                      <h3 className="font-cinzel text-xl font-bold uppercase tracking-widest text-royal-purpleDark border-b border-royal-gold pb-2 mb-2">
                        {result ? "Adega Real" : "Sua Marca"}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-royal-red font-bold">Reserva Especial</p>
                    </div>

                    <div className="my-4">
                      {result ? (
                        <>
                          <h4 className="font-playfair text-2xl font-bold mb-3 text-royal-purple leading-tight">{result.title}</h4>
                          <p className="font-lato text-xs italic leading-relaxed text-gray-700 mb-4 px-2">
                            "{result.description}"
                          </p>
                          <div className="text-[10px] uppercase font-bold text-gray-500 mt-2 border-t border-gray-300 pt-2">
                            Harmonização: {result.pairingSuggestion}
                          </div>
                        </>
                      ) : (
                        <div className="text-gray-400 italic font-playfair py-12">
                          "O texto do seu rótulo aparecerá aqui, escrito com a maestria de um rei."
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                       <p className="text-xs font-bold uppercase tracking-widest text-royal-red">{request.wineType}</p>
                       <p className="text-[10px] text-gray-500 mt-1">750ml • 13.5% Vol • Safra 2024</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};