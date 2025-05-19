import React from 'react';

const FounderPopup = ({ onClose }) => {
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

        <h3 className="text-2xl font-bold mb-4">CONVOCATORIA DE SOCIOS FUNDADORES</h3>
        <p className="text-gray-700 mb-6">
          ABLA está dando sus primeros pasos y hasta el 22-07 recibirá solicitudes de organizaciones e iniciativas que quieran formar parte.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
          CONOCE MAS
        </button>
      </div>
    </div>
  );
};

export default FounderPopup;