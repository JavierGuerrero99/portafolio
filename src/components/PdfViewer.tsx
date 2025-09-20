import React, { useState } from "react";

// Configuración necesaria para react-pdf
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Ejemplo de PDFs y secciones
const pdfList = [
  {
    title: "Documento de Requisitos",
    file: "/docs/EP2-Documento-de-requisitos-SRS.pdf"
  },
  {
    title: "ADD - Arquitectura de alto nivel",
    file: "/docs/ADD -Arquitectura de alto nivel -Modelo del Negocio.pdf"
  },
  {
    title: "EP0-Documento Vision",
  file: "https://docs.google.com/document/d/13TVYKiaq41Tct60vFhOLx76wylM9Brhf/preview"
  },
  {
    title: "Documento 2",
    file: "/docs/ejemplo2.pdf"
  },
];

const PdfViewer: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState(0);
  const doc = pdfList[selectedDoc];

  return (
  <div className="flex h-screen">
      {/* Índice lateral */}
  <aside className="w-72 bg-gradient-to-b from-blue-50 to-white p-6 border-r shadow-lg flex flex-col min-h-full pt-16">
  <h2 className="font-extrabold text-xl text-blue-700 mb-6 mt-2 flex items-center gap-3 whitespace-normal break-words">
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 min-w-5 text-blue-500 flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 16h8M8 12h8m-8-4h8M4 6h16M4 10h16M4 14h16M4 18h16' /></svg>
          <span className="block">Índice de Documentos</span>
        </h2>
        <ul className="space-y-2">
          {pdfList.map((pdf, idx) => (
            <li key={pdf.title}>
              <button
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors duration-150 text-left 
                  ${selectedDoc === idx ? "bg-blue-100 text-blue-700 font-semibold shadow" : "hover:bg-blue-50 text-gray-700"}`}
                onClick={() => setSelectedDoc(idx)}
              >
                <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: selectedDoc === idx ? '#2563eb' : '#cbd5e1' }}></span>
                {pdf.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8 text-xs text-gray-400 text-center select-none">
          © {new Date().getFullYear()} Portafolio
        </div>
      </aside>
      {/* Visor PDF con iframe */}
  <main className="flex-1 flex flex-col items-center justify-center bg-white pt-16">
        <h1 className="text-2xl font-bold mb-4">{doc.title}</h1>
        <div className="border shadow p-2 bg-gray-50">
          <iframe
            src={doc.file}
            title={doc.title}
            width={600}
            height={800}
            className="rounded"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
};

export default PdfViewer;
