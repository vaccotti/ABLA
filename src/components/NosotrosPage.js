import React from 'react';

const NosotrosPage = ({ navigateTo }) => { // Recibiendo navigateTo como prop
  return (
    <section className="bg-black text-white min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Título principal con "VOS" en naranja */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-12">
          NOSOTROS SOMOS <span className="text-orange-500">VOS</span>
        </h1>

        {/* Cita en "nube" */}
        <div className="relative bg-gray-800 rounded-3xl p-6 mb-12">
          <div className="absolute -top-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-800 border-r-[20px] border-r-transparent"></div>
          <p className="text-xl italic">
            "Nadie libera a nadie, ni nadie se libera solo. Los hombres se liberan en comunión." – Paulo Freire
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-6 text-lg mb-12">
          <p>
            Nuestra América Latina ha sufrido siglos de opresión: antes con cadenas visibles, hoy con ataduras invisibles impuestas por sistemas financieros centralizados. Desde el altiplano andino hasta la pampa argentina, nuestros pueblos han enfrentado inflación descontrolada, exclusión bancaria y dependencia monetaria extranjera. Nos han tratado como simples receptáculos pasivos, tal como Freire denunció en la educación bancaria, pero ya no aceptaremos ser “alumnos” dóciles del orden económico opresor. Somos protagonistas conscientes de nuestra propia liberación financiera, dispuestos a preguntar, aprender y actuar sobre nuestro destino económico.
          </p>

          <p>
            Bitcoin es nuestra herramienta de emancipación. Nacido de la gente para la gente, Bitcoin no responde a ningún gobierno ni corporación; responde solo a la verdad matemática y al consenso libre. Representa el “dinero sano” del que hablaron los pensadores de la escuela austríaca: una moneda inmune a la imprenta arbitraria y a la tiranía inflacionaria. Como señaló Ludwig von Mises, “la moneda sana fue concebida como un instrumento para la protección de las libertades civiles contra las incursiones despóticas de los gobiernos”. Bitcoin encarna ese principio, poniéndole un freno voluntario al abuso monetario estatal y devolviendo el poder económico a cada individuo.
          </p>

          {/* Continuación y final del texto */}
          <p>
            Queremos unir todas las iniciativas que recorren nuestros países, en una riqueza que no conoce de fronteras, que sabe de luchas y de salir adelante juntos. ABLA no busca ser una iniciativa más, sino una plataforma para que se amplifique el hermoso trabajo que están realizando miles de personas a través de cientos de iniciativas en todo el continente. ABLA es un lugar de encuentro, de comunidad.
          </p>
        </div>

        {/* Sección Fundadores */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold uppercase mb-8">FUNDADORES</h2>
          <p className="text-lg mb-8">
            En el contexto del evento Bitcoin más grande que unirá Latinoamérica este año, no queremos dejar pasar la oportunidad para encontrarnos (física y virtualmente) y construir un camino descentralizado de sueños compartidos. Si estás construyendo comunidades libres, empoderadas y autodidactas, ABLA es tu lugar. Hacé click en <button onClick={() => navigateTo('sumate')} className="text-orange-500 hover:underline font-semibold">SÚMATE</button> para conocer más.
          </p>
        </div>


        {/* Video embedido centrado */}
        <div className="flex justify-center mt-12">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qb4M1lfDJSA?si=6Q66ukxoHnHuFTuR&amp;start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default NosotrosPage;