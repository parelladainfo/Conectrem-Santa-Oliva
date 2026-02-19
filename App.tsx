import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import LoadingScreen from './components/LoadingScreen';
import LevelBar from './components/LevelBar';
import CharacterGrid from './components/CharacterGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem('lumina_user_name');
    const timer = setTimeout(() => {
      if (savedName) setUserName(savedName);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = (name: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setUserName(name);
      localStorage.setItem('lumina_user_name', name);
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!userName) {
    return <Onboarding onComplete={handleStart} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-light-olive animate-in fade-in duration-1000">
      <Header userName={userName} />
      
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 pt-32 pb-12 flex flex-col gap-12">
        {/* Barra de nivel movida a la parte superior y contenedor más ancho (max-w-6xl) */}
        <LevelBar level={0} progress={0} />
        
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-700 border-b border-lime-200 pb-2">Guàrdies del destí</h2>
          <CharacterGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;