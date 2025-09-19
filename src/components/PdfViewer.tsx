import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configuración necesaria para react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Ejemplo de PDFs y secciones
const pdfList = [
  {
    title: "Documento 1",
    file: "/docs/ejemplo1.pdf",
    sections: [
      { label: "Portada", page: 1 },
      { label: "Resumen", page: 2 },
      { label: "Conclusión", page: 3 }
    ]
  },
  {
    title: "Documento 2",
    file: "/docs/ejemplo2.pdf",
    sections: [
      { label: "Introducción", page: 1 },
      { label: "Desarrollo", page: 2 }
    ]
  }
];

const PdfViewer: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

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
                onClick={() => {
                  setSelectedDoc(idx);
                  setPageNumber(1);
                }}
              >
                {pdf.title}
              </button>
              {/* Secciones del documento */}
              {selectedDoc === idx && (
                <ul className="ml-4 mt-1">
                  {pdf.sections.map((section) => (
                    <li key={section.label}>
                      <button
                        className={`text-sm ${pageNumber === section.page ? "text-blue-500" : "text-gray-600"}`}
                        onClick={() => setPageNumber(section.page)}
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      {/* Visor PDF */}
      <main className="flex-1 flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold mb-4">{doc.title}</h1>
        <div className="border shadow p-2 bg-gray-50">
          <Document file={doc.file} onLoadSuccess={({ numPages }) => { if(pageNumber > numPages) setPageNumber(1); }}>
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber === 1}
          >
            Página anterior
          </button>
          <span>Página {pageNumber}</span>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => setPageNumber((p) => p + 1)}
          >
            Página siguiente
          </button>
        </div>
      </main>
    </div>
  );
};

export default PdfViewer;
