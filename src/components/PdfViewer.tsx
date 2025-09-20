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
    title: "Documento 1",
    file: "/docs/ejemplo1.pdf"
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
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="font-bold mb-4">Índice de Documentos</h2>
        <ul>
          {pdfList.map((pdf, idx) => (
            <li key={pdf.title} className="mb-2">
              <button
                className={`text-left w-full ${selectedDoc === idx ? "font-bold text-blue-600" : "text-gray-800"}`}
                onClick={() => setSelectedDoc(idx)}
              >
                {pdf.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      {/* Visor PDF con iframe */}
      <main className="flex-1 flex flex-col items-center justify-center bg-white">
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
