import React from 'react';
import EventCard from './EventCard';

// Mock data para eventos (debería ir en mock/events.js)
const mockEvents = [
  { id: 1, title: 'Meetup Bitcoin CDMX', date: '15 de Octubre, 2024', description: 'Charla sobre la adopción de Bitcoin en México.' },
  { id: 2, title: 'Workshop Lightning Network', date: '20 de Noviembre, 2024', description: 'Aprende a usar y desarrollar con Lightning Network.' },
  { id: 3, title: 'Conferencia ABLA 2025', date: 'Febrero 2025', description: 'El evento más grande de Bitcoin en Latinoamérica.' },
];

const EventsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Próximos Eventos</h2> {/* Espaciado inferior ajustado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;


// DONE