import React from 'react';

const EventosPageNuevo = () => { // Nuevo nombre del componente
  return (
    <section className="bg-black text-white min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Título principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-12">
          EVENTOS
        </h1>

        {/* Cita en "nube" */}
        <div className="relative bg-gray-800 rounded-3xl p-6 mb-12">
          <div className="absolute -top-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-800 border-r-[20px] border-r-transparent"></div>
          <p className="text-xl italic">
            "La revolución no será televisada, será descentralizada." – Desconocido
          </p>
        </div>

        {/* Contenido (Lista de iniciativas, que ahora serán eventos) */}
        <div className="space-y-6 text-lg">
          <p>ABLA impulsa diversos eventos para promover la adopción y educación sobre Bitcoin en América Latina:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Educación Bitcoin</strong>: Talleres y cursos gratuitos sobre fundamentos de Bitcoin, seguridad y uso de wallets.</li>
            <li><strong>Meetups Regionales</strong>: Eventos presenciales y virtuales para conectar a la comunidad Bitcoin en diferentes países.</li>
            <li><strong>Investigación</strong>: Publicación de informes sobre el estado de Bitcoin en la región y su impacto económico.</li>
            <li><strong>Desarrollo</strong>: Apoyo a proyectos open-source que mejoren la infraestructura Bitcoin en español.</li>
            <li><strong>Adopción Comercial</strong>: Programas para incentivar a comercios a aceptar Bitcoin como medio de pago.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventosPageNuevo; // Exportando con el nuevo nombre