
import React from 'react';

interface HeroProps {
  userName?: string;
}

const Hero: React.FC<HeroProps> = ({ userName }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Orbes Decorativos Sutiles */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-lime-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-none text-slate-900">
          Diseñando el futuro <br /> 
          contigo, <span className="gradient-text">{userName}</span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Combinamos diseño visionario con IA avanzada para construir marcas que no solo existen, sino que lideran su industria. Bienvenido a tu nuevo estudio creativo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-lime-700 text-white font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-lime-900/20">
            Nuestro Portafolio
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-lime-900 font-bold rounded-full transition-all hover:bg-white/60 active:scale-95">
            Metodología
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center justify-center font-bold text-xl italic tracking-widest text-slate-400">BRANDX</div>
          <div className="flex items-center justify-center font-bold text-xl italic tracking-widest text-slate-400">NEXUS</div>
          <div className="flex items-center justify-center font-bold text-xl italic tracking-widest text-slate-400">FLOW</div>
          <div className="flex items-center justify-center font-bold text-xl italic tracking-widest text-slate-400">ORBIT</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
