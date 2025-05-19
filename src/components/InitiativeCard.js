import React from 'react';

const InitiativeCard = ({ initiative }) => {
  return (
    <a
      href={initiative.instagramLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 text-white p-6 rounded-2xl shadow-md flex flex-col hover:bg-gray-700 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-2">{initiative.name}</h3>
      <p className="text-orange-500 text-sm mb-4">{initiative.instagramUser}</p>
      <p className="text-gray-300 text-sm flex-grow">{initiative.description}</p>
      {/* Puedes agregar un ícono de Instagram aquí si lo deseas */}
    </a>
  );
};

export default InitiativeCard;