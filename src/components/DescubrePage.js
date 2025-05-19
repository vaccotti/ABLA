import React, { useState } from 'react';
import InitiativeCardVisual from './InitiativeCardVisual';
import { initiatives } from '../mock/initiatives';
import ShareInitiativePopup from './ShareInitiativePopup';

const DescubrePage = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleOpenSharePopup = () => {
    setShowSharePopup(true);
  };

  const handleCloseSharePopup = () => {
    setShowSharePopup(false);
  };

  const handleShareInitiative = (handle) => {
    console.log('Iniciativa compartida:', handle);
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Título principal con "ABLA" en naranja */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-12">
          DESCUBRE <span className="text-orange-500">ABLA</span>
        </h1>

        {/* Cita en "nube" */}
        <div className="relative bg-gray-800 rounded-3xl p-6 mb-12">
          <div className="absolute -top-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-800 border-r-[20px] border-r-transparent"></div>
          <p className="text-xl italic">
            "Bitcoin es la primera herramienta monetaria que no puede ser confiscada, censurada o devaluada por ningún gobierno o institución." – Michael Saylor
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-6 text-lg mb-12">
          <p>
            Bitcoin es mucho más que una moneda digital: es un protocolo de consenso descentralizado que permite transferir valor sin intermediarios. Su diseño ingenioso resuelve el problema del doble gasto sin necesidad de una autoridad central, mediante la prueba de trabajo y la cadena de bloques.
          </p>

          <p>
            En América Latina, donde la confianza en las instituciones financieras tradicionales se ha erosionado, Bitcoin ofrece una alternativa soberana. Países como El Salvador ya han adoptado Bitcoin como moneda de curso legal, mientras que en Argentina y Venezuela su uso como reserva de valor frente a la inflación es cada vez más común.
          </p>
        </div>

        {/* Sección de Iniciativas con tarjetas visuales */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">Iniciativas en Latinoamérica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map(initiative => (
              <InitiativeCardVisual key={initiative.id} initiative={initiative} />
            ))}
          </div>
        </div>

        {/* Botón para compartir iniciativa */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleOpenSharePopup}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            ¿FALTA TU INICIATIVA?
          </button>
        </div>

        {/* Popup de compartir iniciativa */}
        {showSharePopup && <ShareInitiativePopup onClose={handleCloseSharePopup} onShare={handleShareInitiative} />}
      </div>
    </section>
  );
};

export default DescubrePage;


// DONE