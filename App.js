import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import LayoutFooter from './components/LayoutFooter';
import DescubrePage from './components/DescubrePage';
import EventosPageNuevo from './components/EventosPageNuevo';
import NosotrosPage from './components/NosotrosPage';
import SumatePage from './components/SumatePage';
import FounderPopup from './components/FounderPopup';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            {/* Aquí puedes agregar más secciones de la landing si las tienes */}
          </>
        );
      case 'descubre':
        return <DescubrePage navigateTo={navigateTo} />;
      case 'eventos':
        return <EventosPageNuevo navigateTo={navigateTo} />;
      case 'nosotros':
        return <NosotrosPage navigateTo={navigateTo} />;
      case 'sumate':
        return <SumatePage navigateTo={navigateTo} />;
      default:
        return (
          <>
            <HeroSection />
            {/* Página por defecto */}
          </>
        );
    }
  };

  return (
    // Asegurándonos de que el fondo del contenedor principal sea negro
    <div className="font-sans bg-black min-h-screen"> {/* Agregando bg-black y min-h-screen */}
      {showPopup && <FounderPopup onClose={handleClosePopup} />}
      <LayoutHeader navigateTo={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;


// DONE