import React from 'react';

interface LevelBarProps {
  level: number;
  progress: number;
}

const LevelBar: React.FC<LevelBarProps> = ({ level, progress }) => {
  return (
    <div className="glass p-8 rounded-3xl shadow-xl shadow-lime-900/5 border border-white">
      <div className="flex justify-between items-end mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-lime-700">Progreso Actual</span>
          <h2 className="text-4xl font-black text-slate-900">Nivel {level}</h2>
        </div>
        <div className="text-right">
          <span className="text-sm font-medium text-slate-500">{progress}% para Nivel {level + 1}</span>
        </div>
      </div>
      
      <div className="w-full h-5 bg-slate-200/50 rounded-full overflow-hidden border border-white shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-lime-500 to-emerald-500 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(132,204,22,0.4)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LevelBar;