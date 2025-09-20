import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Icono centrado arriba */}
      <img
        src="/favicon.ico.png"
  alt="Logo Toche-TI"
        className="w-80 h-80 mb-6 drop-shadow-xl rounded-full bg-white/80 p-2 border border-blue-200"
        style={{ pointerEvents: 'none' }}
      />
  <h2 className="text-4xl md:text-6xl font-bold mb-4">Portafolio – Toche-TI</h2>
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
