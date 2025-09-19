import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Portafolio – Talento-Hub</h2>
      <p className="text-lg md:text-2xl mb-6">Materia: Análisis y Diseño de Sistemas</p>
      <a
        href="#introduccion"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
      >
        Explorar Proyecto
      </a>
    </section>
  );
};

export default Hero;
