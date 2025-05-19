import React from 'react';

const InitiativeCardVisual = ({ initiative }) => {
  return (
    <a
      href={initiative.instagramLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 text-white p-6 rounded-2xl shadow-md flex flex-col hover:bg-gray-700 transition-colors"
    >
      {/* Sección de Perfil */}
      <div className="flex items-center mb-4">
        {/* Placeholder para Foto de Perfil */}
        <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0">
          {/* Aquí iría la imagen de perfil */}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{initiative.name}</h3>
          <p className="text-orange-500 text-sm">{initiative.instagramUser}</p>
        </div>
      </div>

      {/* Descripción - Ajustando para manejar texto largo */}
      <p className="text-gray-300 text-sm mb-4 flex-grow overflow-hidden text-ellipsis"> {/* Agregando overflow y text-ellipsis */}
        {initiative.description}
      </p>

      {/* Sección de Últimas Fotos (Placeholders) */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {/* Placeholder para Foto 1 */}
        <div className="w-full h-20 bg-gray-700 rounded-md">
          {/* Aquí iría la imagen del feed */}
        </div>
        {/* Placeholder para Foto 2 */}
        <div className="w-full h-20 bg-gray-700 rounded-md">
          {/* Aquí iría la imagen del feed */}
        </div>
        {/* Placeholder para Foto 3 */}
        <div className="w-full h-20 bg-gray-700 rounded-md">
          {/* Aquí iría la imagen del feed */}
        </div>
      </div>
    </a>
  );
};

export default InitiativeCardVisual;


// DONE