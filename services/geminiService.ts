
import { GoogleGenAI, Type } from "@google/genai";
import type { Stage } from '../types';

const getApiKey = (): string => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable not set.");
  }
  return apiKey;
};

export const generateFlowchartData = async (text: string): Promise<Stage[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });

    const schema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.NUMBER, description: "The sequential stage number, starting from 1." },
          title: { type: Type.STRING, description: "The title of the stage, e.g., 'Etapa 1: Establecer Parámetros a Evaluar'." },
          description: { type: Type.STRING, description: "The detailed description of the stage from 'Descripción de la Etapa'." },
          actions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of actions performed from 'Acciones Realizadas'."
          },
          tools: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of tools used from 'Herramientas Utilizadas'."
          },
          evidence: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of evidences or key criteria from 'Evidencia'."
          }
        },
        required: ['id', 'title', 'description', 'actions', 'tools', 'evidence']
      }
    };
    
    const prompt = `
      Analiza el siguiente texto que describe un proceso de validación de un MVP. Ignora los números de sección como '8.1', '8.2', etc. 
      Extrae la información para cada una de las 7 etapas y formátala como un array de objetos JSON que cumpla con el esquema proporcionado.
      Asegúrate de que cada etapa tenga un 'id' numérico secuencial del 1 al 7.
      El título de cada etapa debe ser el texto que sigue a "Etapa X:".
      Texto de entrada:
      ---
      ${text}
      ---
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonString = response.text.trim();
    const parsedData = JSON.parse(jsonString) as Stage[];
    return parsedData;

  } catch (error) {
    console.error("Error generating flowchart data with Gemini:", error);
    throw new Error("Failed to process the text. Please check the console for more details.");
  }
};
