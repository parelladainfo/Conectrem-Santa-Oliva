
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  userName: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ userName }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `¡Hola ${userName}! Soy el Asistente Creativo de Lumina. Cuéntame sobre tu proyecto y generemos algunas ideas juntos.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Eres el Director Creativo de Lumina Studio. Estás hablando con ${userName}. Tu objetivo es proporcionar ideas de diseño inspiradoras, profesionales y ligeramente futuristas, eslóganes de marketing y conceptos de marca. Mantén las respuestas concisas, creativas y visualmente evocadoras. Habla SIEMPRE en español y como parte del equipo de Lumina.`,
          temperature: 0.8,
        },
      });

      const aiResponse = response.text || "Lo siento, no pude generar una respuesta. ¡Intentemos otro enfoque!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Ups, nuestros enlaces neuronales están un poco atascados. Por favor, inténtalo de nuevo en un momento." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white/30">
      <div className="p-3 border-b border-lime-200/50 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-lime-600 animate-pulse"></div>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Núcleo Lumina v3.1</span>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-lime-200"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-lime-700 text-white shadow-md' 
                : 'bg-white text-slate-800 border border-lime-100 shadow-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl flex space-x-2 border border-lime-100">
              <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-lime-200/50 bg-white/50">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Hola ${userName}, ¿en qué trabajamos hoy?`}
            className="w-full bg-white border border-lime-200 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-lime-600/20 text-slate-900 placeholder:text-slate-400"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-2 w-8 h-8 bg-lime-700 text-white rounded-lg flex items-center justify-center hover:bg-lime-600 transition-colors disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
        <p className="mt-2 text-[10px] text-slate-400 text-center">
          Impulsado por Gemini AI. Motor creativo experimental.
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;
