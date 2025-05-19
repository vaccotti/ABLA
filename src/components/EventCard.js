import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col"> {/* Sombra y bordes según Figma */}
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{event.date}</p>
      <p className="text-gray-700 flex-grow">{event.description}</p>
      <button className="mt-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors self-start">
        Ver Detalles
      </button>
    </div>
  );
};

export default EventCard;