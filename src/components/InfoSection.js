import React from 'react';

const InfoSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Información ABLA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Educación Bitcoin</h3>
            <p className="text-gray-700 flex-grow">
              Promovemos la educación sobre Bitcoin y su tecnología en toda Latinoamérica.
            </p>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors self-start">
              Más información
            </button>
          </div>
          
          {/* Tarjeta 2 */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Comunidad</h3>
            <p className="text-gray-700 flex-grow">
              Conectamos a entusiastas, desarrolladores y empresarios de Bitcoin en toda la región.
            </p>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors self-start">
              Únete
            </button>
          </div>
          
          {/* Tarjeta 3 */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">Recursos</h3>
            <p className="text-gray-700 flex-grow">
              Ofrecemos materiales educativos y herramientas en español para facilitar la adopción.
            </p>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors self-start">
              Explorar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;