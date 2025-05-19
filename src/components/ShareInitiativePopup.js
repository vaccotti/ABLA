import React, { useState } from 'react';

const ShareInitiativePopup = ({ onClose, onShare }) => {
  const [instagramHandle, setInstagramHandle] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSend = () => {
    // Aquí podrías agregar lógica para enviar el handle a algún lugar (ej. una API, un email)
    console.log('Iniciativa compartida:', instagramHandle);
    setShowThankYou(true);
    // Opcional: cerrar el popup después de un tiempo
    // setTimeout(() => {
    //   onClose();
    // }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black p-8 rounded-lg shadow-xl max-w-sm w-full text-center relative">
        {/* Botón para cerrar el popup */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          &times;
        </button>

        {!showThankYou ? (
          <>
            <h3 className="text-2xl font-bold mb-4">¡Compartinos tu @!</h3>
            <input
              type="text"
              placeholder="@usuario_instagram"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={instagramHandle}
              onChange={(e) => setInstagramHandle(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Enviar
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            {/* SVG de Corazón (ejemplo simple) */}
            <svg className="w-12 h-12 text-red-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
            </svg>
            <p className="text-xl font-semibold text-green-600">¡Gracias por compartir amor!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareInitiativePopup;