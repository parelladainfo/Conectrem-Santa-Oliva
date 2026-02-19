import React, { useState, useEffect } from 'react';

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = "https://mail.google.com/mail/u/0/?ui=2&ik=c16e94a0f5&attid=0.1&permmsgid=msg-a:r-8278142516282172636&th=19be0f555ef48450&view=fimg&disp=thd&attbid=ANGjdJ98OM-StApQImrDzVTA964FnriuF1FwNMz_xyvgbuKdlnIKFwbbc-W2iSvuVLBgrtAquxEREBAWvBrQm9mtZWGBiGmZOWiRdZy2MnwuNR4uRGkjf9AsD_GpIn4&ats=2524608000000&sz=w3440-h1279&auditContext=forDisplay";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-lime-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="w-10 h-10 rounded-lg object-cover shadow-lg shadow-lime-900/20"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-10 h-10 bg-lime-700 rounded-lg flex items-center justify-center font-bold text-white">L</div>');
            }}
          />
        </div>
        
        <div className="flex items-center">
          {userName && (
            <div className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-lime-800 hidden sm:inline">Hola, {userName}</span>
              <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-700 text-xs font-bold border border-lime-200 shadow-sm">
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;