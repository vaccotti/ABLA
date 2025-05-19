import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Ajustando el interlineado */}
        <h1 className="text-8xl sm:text-9xl lg:text-10xl font-extrabold uppercase leading-none text-left"> {/* Cambiando leading-tight a leading-none */}
          <span className="block">SE</span>
          <span className="block tracking-tighter">
            <span className="text-white inline-block">H</span>
            <span className="text-orange-500 inline-block">ABLA</span>
          </span>
          <span className="block">ESPAÑOL</span>
        </h1>
        <p className="italic mt-6 text-lg text-center max-w-4xl mx-auto">
          Somos el grito manso de la descentralización en América Latina, donde las fronteras son solamente para aquellos que le temen al infinito, la revolución que no será televisada
        </p>
      </div>
    </section>
  );
};

export default HeroSection;


// DONE