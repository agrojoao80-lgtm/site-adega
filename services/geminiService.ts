import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedLabel, LabelRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLabelContent = async (request: LabelRequest): Promise<GeneratedLabel> => {
  const prompt = `
    Atue como um Sommelier Real e Poeta da corte da "Adega Real".
    Crie um texto elegante e sofisticado para um rótulo de vinho personalizado.
    
    Detalhes do pedido:
    - Ocasião: ${request.occasion}
    - Destinatário/Marca: ${request.recipientName}
    - Tipo de Vinho: ${request.wineType}
    - Tom de voz: ${request.tone}

    A resposta deve ser em JSON contendo:
    1. Um título nobre para o vinho.
    2. Uma descrição curta, poética e envolvente para o contra-rótulo (máx 50 palavras).
    3. Uma sugestão de harmonização refinada.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            pairingSuggestion: { type: Type.STRING },
          },
          required: ["title", "description", "pairingSuggestion"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedLabel;
  } catch (error) {
    console.error("Error generating label:", error);
    // Fallback in case of API error
    return {
      title: "Reserva Real " + request.recipientName,
      description: "Um vinho de elegância inigualável, criado para celebrar momentos que ficarão marcados na história.",
      pairingSuggestion: "Ideal para acompanhar grandes banquetes e celebrações vitoriosas."
    };
  }
};