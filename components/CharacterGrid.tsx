import React, { useState } from 'react';

interface Character {
  id: number;
  name: string;
  img: string;
  description?: string;
  location?: string;
  missionImg?: string;
}

const characters: Character[] = [
  { 
    id: 1, 
    name: "La Barraca", 
    img: "https://mail.google.com/mail/u/0/?ui=2&ik=c16e94a0f5&attid=0.1&permmsgid=msg-a:r8009001999007583148&th=19be0e0722751233&view=fimg&disp=thd&attbid=ANGjdJ-vqKJXo7WZ6MFNWyS0e8yx571-LQj9UKlUlWArTG9VfvvfaHqR5XVKQYjqrIuy42irkktGGVUnObzsBFyg1K878jhEQPmmJmf5tt7gv9nePlCxUwyWqygs8kI&ats=2524608000000&sz=w3440-h1279&auditContext=forDisplay",
    location: "Murs de pedra seca - Camí de les Planes",
    description: "Hola! Sóc la Barraca, el guardià dels murs de pedra seca de Santa Oliva. Em trobareu entre els paisatges rocosos i les antigues construccions de pedra. Vull que sapigueu que les parets de pedra seca són testimonis de la nostra història i tradició. Esteu preparats per col·laborar amb mi en aquesta tasca? Escanejant el codi QR, podreu ajudar a construir i restaurar murs de pedra seca virtuals. Si ho feu amb èxit, us espera la \"medalla del mestre constructor de pedra seca\". Us espero entre les pedres!",
    missionImg: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://scratch.mit.edu/projects/1008672337&color=064e3b" 
  },
  { 
    id: 2, 
    name: "La Glu-Glu", 
    img: "https://copilot.microsoft.com/th/id/BCO.13d77c9a-1002-4636-8395-47774edb466f.png",
    location: "Safareig i Fonts del Poble",
    description: "Hola! Sóc la Glú-Glú, la guardiana de les aigües cristal·lines de Santa Oliva. Em trobareu rient i saltant entre el safareig i fonts del poble. Vull que sapigueu que l'aigua és un tresor que cal protegir i preservar. Esteu preparats per unir-vos a mi en aquesta missió? Escanejant el codi QR, podreu endinsar-vos en un món submarí virtual ple de reptes i descobriments. Si aconseguiu superar-los tots, us espera la \"medalla de protector de l'aigua\".",
    missionImg: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://scratch.mit.edu/projects/1008620664/&color=064e3b"
  },
  { 
    id: 3, 
    name: "La Vinyet", 
    img: "https://copilot.microsoft.com/th/id/BCO.2bfa5d1c-b461-4daa-b821-f18f23d72e97.png",
    location: "Vinyes de la Plana",
    description: "Salutacions! Sóc la Vinyet, la guardiana de les vinyes de Santa Oliva. Em trobareu entre les suculentes vinyes i les redoltes carregades de raïm. Vull que sàpigues que les vinyes han estat un símbol d'hospitalitat i generositat per a la nostra comunitat durant segles. Us agradaria unir-vos a mi en una aventura vitivinícola? Escanejant el codi QR, podreu jugar a un emocionant videojoc on podreu aprendre tot sobre la viticultura i la vinificació. Si aconseguiu superar el repte, us espera la \"medalla de l'expert en vinya\".",
    missionImg: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://scratch.mit.edu/projects/1008663249/&color=064e3b"
  },
  { 
    id: 4, 
    name: "La Terri", 
    img: "https://copilot.microsoft.com/th/id/BCO.4b68dab7-ce11-4b76-b8a2-cf5b3c46efd2.png",
    location: "Hortes del Rec",
    description: "Hola! Sóc la Terri, la protectora de les terres i hortes de Santa Oliva. Em trobareu entre els camps verds i les hortes florides. Vull que sapigueu que las terres i hortes són el cor de la nostra comunitat, proporcionant-nos aliments frescos i saludables des de temps immemorials. Esteu preparats per posar-vos les mans a la terra? Escanejant el codi QR, podreu jugar a un videojoc on gestionareu la vostra pròpia parcel·la agrícola virtual. Si aconseguiu passar la partida, guanyareu la \"medalla de l'hortalà expert\". Us espero entre els conreus!",
    missionImg: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://scratch.mit.edu/projects/1008667958&color=064e3b"
  },
  { 
    id: 5, 
    name: "L'Olivarro", 
    img: "https://mail.google.com/mail/u/0/?ui=2&ik=c16e94a0f5&attid=0.1&permmsgid=msg-a:r1693768563726514436&th=19be0e3a407538d2&view=fimg&disp=thd&attbid=ANGjdJ_wbo2EDJnui0a6GBDcgbPA9CHwvw8MII8bDPuhlpJGwbOKDxj9WRYx5uAnaSpMp1UP72u8ZT9RnLfRwUrsDwVpSMZRD9ihGdkwOVNXQC-4mRll4UYtWxwrGn4&ats=2524608000000&sz=w3440-h1279&auditContext=forDisplay",
    location: "Oliveres Centenàries",
    description: "Salut! Sóc Olivarro, el guardià de las oliveres i l'oli d'oliva de Santa Oliva. Em trobareu entre les oliveres centenàries i els olis aromàtics. Vull que sapigueu que les oliveres són un tresor de la nostra terra, donant-nos l'oli d'oliva que és una part essencial de la nostra cuina i cultura. Esteu preparats per descubrir els secrets de l'oli? Escanejant el codi QR, podreu jugar a un videojoc d'experimentació del procés d'elaboració de l'oli d'oliva. Si aconseguiu superar el joc, us espera la \"medalla del mestre oliver\". Us espero entre les olives!",
    // Generem el QR amb l'enllaç de Scratch per a l'Olivarro
    missionImg: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://scratch.mit.edu/projects/1008677175/&color=064e3b"
  },
];

const CharacterGrid: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeTab, setActiveTab] = useState<'history' | 'mission'>('history');

  const openModal = (char: Character) => {
    setSelectedCharacter(char);
    setActiveTab('history');
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {characters.map((char) => (
          <button 
            key={char.id} 
            onClick={() => char.description && openModal(char)}
            className={`glass p-4 rounded-2xl border border-white flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-lg group ${!char.description ? 'cursor-default opacity-80' : 'cursor-pointer'}`}
          >
            <div className="w-20 h-20 rounded-full bg-slate-100 mb-4 overflow-hidden border-2 border-lime-200 group-hover:border-lime-500 transition-colors flex items-center justify-center">
              <img 
                src={char.img} 
                alt={char.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${char.name}&backgroundColor=d1d4f9`;
                }}
              />
            </div>
            <h3 className="font-bold text-slate-800 text-sm leading-tight">{char.name}</h3>
          </button>
        ))}
      </div>

      {/* Modal / Pestaña */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="glass max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col rounded-3xl border border-white shadow-2xl animate-in zoom-in-95 duration-300 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button 
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-slate-500 hover:bg-white transition-colors shadow-sm"
            >
              ✕
            </button>
            
            {/* Header Modal */}
            <div className="p-8 pb-4 flex flex-col items-center border-b border-lime-100 bg-white/30">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-lime-500 shadow-xl mb-4">
                <img 
                  src={selectedCharacter.img} 
                  alt={selectedCharacter.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-black text-slate-900">{selectedCharacter.name}</h2>
              <p className="text-lime-700 text-sm font-bold uppercase tracking-widest mt-1">Guardià del Patrimoni</p>
            </div>

            {/* Selector de pestañas */}
            <div className="flex bg-white/50 border-b border-lime-100">
              <button 
                onClick={() => setActiveTab('history')}
                className={`flex-1 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'history' ? 'border-lime-600 text-lime-800 bg-lime-50/50' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                La meva Història
              </button>
              <button 
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'mission' ? 'border-lime-600 text-lime-800 bg-lime-50/50' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                Missió
              </button>
            </div>

            {/* Contenido Pestañas */}
            <div className="flex-grow overflow-y-auto p-4 bg-white/20 min-h-[400px] flex flex-col items-center justify-center">
              {activeTab === 'history' ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 w-full">
                  <div className="text-slate-700 leading-relaxed text-lg text-left bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm mx-4">
                    {selectedCharacter.description?.split('"').map((part, index) => (
                      index % 2 === 1 ? <strong key={index} className="text-lime-700 font-bold italic">"{part}"</strong> : part
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 w-full flex items-center justify-center py-6">
                  {selectedCharacter.missionImg ? (
                    <div className="relative group">
                      {/* Efecte de resplendor per al QR */}
                      <div className="absolute -inset-1 bg-gradient-to-tr from-lime-600 to-emerald-400 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                      
                      <div className="relative p-6 bg-white rounded-[2rem] shadow-2xl border border-lime-100/50">
                        <img 
                          src={selectedCharacter.missionImg} 
                          alt="Codi QR de la Missió" 
                          className="w-64 h-64 md:w-80 md:h-80 object-contain"
                        />
                        
                        {/* Cantonades estètiques d'enfocament */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-lime-600 rounded-tl-xl"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-lime-600 rounded-tr-xl"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-lime-600 rounded-bl-xl"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-lime-600 rounded-br-xl"></div>
                        
                        {/* Línia d'escaneig animada */}
                        <div className="absolute top-8 left-8 right-8 h-1 bg-lime-500/40 rounded-full animate-[scan_4s_ease-in-out_infinite] blur-sm"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 opacity-10">
                      <svg className="w-24 h-24 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01" />
                      </svg>
                      <p className="text-slate-400 font-bold italic">Encara no hi ha missió activa per a aquest personatge.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <style>{`
              @keyframes scan {
                0%, 100% { transform: translateY(0); opacity: 0; }
                50% { transform: translateY(240px); opacity: 1; }
              }
            `}</style>

            {/* Footer Modal */}
            <div className="p-6 bg-white/50 border-t border-lime-100 flex justify-center">
              <button 
                onClick={() => setSelectedCharacter(null)}
                className="px-12 py-3 bg-lime-700 text-white font-bold rounded-full shadow-lg shadow-lime-900/20 hover:bg-lime-800 transition-all active:scale-95"
              >
                Entès!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterGrid;