
import React from 'react';

const LoadingScreen: React.FC = () => {
  const logoUrl = "https://mail.google.com/mail/u/0/?ui=2&ik=c16e94a0f5&attid=0.1&permmsgid=msg-a:r-8278142516282172636&th=19be0f555ef48450&view=fimg&disp=thd&attbid=ANGjdJ98OM-StApQImrDzVTA964FnriuF1FwNMz_xyvgbuKdlnIKFwbbc-W2iSvuVLBgrtAquxEREBAWvBrQm9mtZWGBiGmZOWiRdZy2MnwuNR4uRGkjf9AsD_GpIn4&ats=2524608000000&sz=w3440-h1279&auditContext=forDisplay";

  return (
    <div className="fixed inset-0 z-[100] bg-[#f4f7ed] flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
      {/* Decoración de fondo */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-300/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-300/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="relative z-10 text-center">
        <img 
          src={logoUrl} 
          alt="Lumina Logo" 
          className="w-20 h-20 rounded-3xl object-cover shadow-2xl shadow-lime-900/20 mx-auto mb-8 animate-bounce"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-20 h-20 bg-lime-700 rounded-3xl flex items-center justify-center font-bold text-white text-4xl shadow-2xl shadow-lime-900/20 mx-auto mb-8 animate-bounce">L</div>');
          }}
        />
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          <span className="gradient-text uppercase tracking-widest">Conectem Santa Oliva</span>
        </h2>
        
        <div className="w-48 h-1 bg-slate-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-lime-700 w-full animate-[loading_1.5s_ease-in-out_infinite] origin-left"></div>
        </div>
        
        <p className="mt-6 text-sm text-slate-400 font-medium animate-pulse">
          Sincronizando entorno creativo...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.5); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
