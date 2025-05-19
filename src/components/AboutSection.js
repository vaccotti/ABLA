import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre ABLA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md"> {/* Ajustando padding y sombra */}
            <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md"> {/* Ajustando padding y sombra */}
            <h3 className="text-2xl font-semibold mb-4">Nuestra Visión</h3>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md"> {/* Ajustando padding y sombra */}
            <h3 className="text-2xl font-semibold mb-4">Nuestros Valores</h3>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// DONE