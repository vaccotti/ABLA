import React, { useState } from 'react';

const LayoutHeader = ({ navigateTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Haciendo el texto del logo un botón */}
        <button
          onClick={() => navigateTo('home')}
          className="text-xl font-bold cursor-pointer hover:text-gray-300 transition-colors" // Agregando clases de botón y hover
        >
          ASOCIACIÓN BITCOIN LATINOAMÉRICA
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigateTo('descubre')} className="hover:text-gray-300">DESCUBRE</button>
          <button onClick={() => navigateTo('eventos')} className="hover:text-gray-300">EVENTOS</button>
          <button onClick={() => navigateTo('nosotros')} className="hover:text-gray-300">NOSOTROS</button>
          <button onClick={() => navigateTo('sumate')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">SÚMATE</button>
        </div>
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          &#9776;
        </button>
      </div>
      <div className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden bg-black`}>
        <ul className="px-4 pt-2 pb-4 space-y-2">
          <li><button onClick={() => navigateTo('descubre')} className="block hover:text-gray-300">DESCUBRE</button></li>
          <li><button onClick={() => navigateTo('eventos')} className="block hover:text-gray-300">EVENTOS</button></li>
          <li><button onClick={() => navigateTo('nosotros')} className="block hover:text-gray-300">NOSOTROS</button></li>
          <li><button onClick={() => navigateTo('sumate')} className="block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">SÚMATE</button></li>
        </ul>
      </div>
    </header>
  );
};

export default LayoutHeader;


// DONE