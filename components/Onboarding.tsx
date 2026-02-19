
import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: (name: string) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const logoUrl = "https://mail.google.com/mail/u/0/?ui=2&ik=c16e94a0f5&attid=0.1&permmsgid=msg-a:r-8278142516282172636&th=19be0f555ef48450&view=fimg&disp=thd&attbid=ANGjdJ98OM-StApQImrDzVTA964FnriuF1FwNMz_xyvgbuKdlnIKFwbbc-W2iSvuVLBgrtAquxEREBAWvBrQm9mtZWGBiGmZOWiRdZy2MnwuNR4uRGkjf9AsD_GpIn4&ats=2524608000000&sz=w3440-h1279&auditContext=forDisplay";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onComplete(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-light-olive flex items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-lime-300/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-emerald-300/20 rounded-full blur-[120px]"></div>

      <div className="max-w-md w-full relative z-10 text-center animate-in zoom-in-95 duration-500">
        <img 
          src={logoUrl} 
          alt="Logo" 
          className="w-16 h-16 rounded-2xl object-cover shadow-xl shadow-lime-900/20 mx-auto mb-10"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
          ¡Hola! Bienvenido
        </h1>
        
        <p className="text-slate-600 mb-10">
          ¿Cómo te gustaría que te llamáramos en esta aventura?
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Introduce tu nombre..."
            className="w-full bg-white border border-lime-200 rounded-2xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-lime-500/10 shadow-sm text-slate-900 placeholder:text-slate-300 transition-all text-center"
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-lime-700 hover:bg-lime-800 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-lime-900/20 active:scale-95 disabled:opacity-50"
          >
            Empezar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
