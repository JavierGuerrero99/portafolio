
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Talento-Hub</h1>
        <ul className="flex space-x-4">
          <li><a href="/#introduccion" className="hover:underline">Introducción</a></li>
          <li><a href="/#problema" className="hover:underline">Problema</a></li>
          <li><a href="/#solucion" className="hover:underline">Solución</a></li>
          <li><a href="/#requerimientos" className="hover:underline">Requerimientos</a></li>
          <li><a href="/#cronograma" className="hover:underline">Cronograma</a></li>
          <li><Link to="/pdfs" className="hover:underline">Análisis</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
