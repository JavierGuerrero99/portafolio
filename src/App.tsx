
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import PdfViewer from "./components/PdfViewer";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="font-sans">
            <Hero />
            <Section id="introduccion" title="Introducción">
              <p>
                Este portafolio documenta el proceso de análisis y diseño del software{" "}
                <strong>Talento-Hub</strong>, una plataforma web multiempresa para la
                gestión integral de procesos de selección de personal.
              </p>
            </Section>
            <Section id="problema" title="Problema y Objetivo">
              <ul className="list-disc pl-6">
                <li>
                  <strong>Problema:</strong> Dificultades en la gestión centralizada de
                  procesos de selección.
                </li>
                <li>
                  <strong>Objetivo:</strong> Desarrollar una plataforma accesible,
                  escalable y transparente para reclutadores y candidatos.
                </li>
              </ul>
            </Section>
            <Section id="solucion" title="Descripción de la Solución">
              <p>
                Talento-Hub permitirá gestionar vacantes, postulaciones, candidatos,
                notificaciones y reportes en tiempo real, mejorando la eficiencia de
                Recursos Humanos.
              </p>
            </Section>
            <Section id="requerimientos" title="Requerimientos Funcionales">
              <p>
                Se clasifican en tres roles principales: <strong>Usuario</strong>,{" "}
                <strong>Recursos Humanos</strong> y <strong>Administrador</strong>.
              </p>
            </Section>
            <Section id="stakeholders" title="Stakeholders Clave">
              <ul className="list-disc pl-6">
                <li>Empresas / Administradores</li>
                <li>Reclutadores</li>
                <li>Candidatos</li>
                <li>Gerentes / Directivos</li>
              </ul>
            </Section>
            <Section id="beneficios" title="Beneficios Esperados">
              <p>
                Tangibles: reducción de tiempos, eficiencia en contratación, reportes
                estratégicos. <br />
                Intangibles: mejor experiencia del candidato, transparencia, imagen
                organizacional fortalecida.
              </p>
            </Section>
            <Section id="cronograma" title="Cronograma y Hitos">
              <ol className="list-decimal pl-6">
                <li>Análisis y diseño – 2 semanas</li>
                <li>Desarrollo del prototipo – 6 semanas</li>
                <li>Pruebas y seguridad – 3 semanas</li>
                <li>Piloto e implementación – 2 semanas</li>
                <li>Despliegue final – 3 semanas</li>
              </ol>
            </Section>
            <Section id="conclusiones" title="Conclusiones">
              <p>
                El desarrollo de Talento-Hub permitió aplicar conceptos de Análisis y
                Diseño, estructurando una solución tecnológica con visión ágil y
                orientada a la gestión de talento humano.
              </p>
            </Section>
            <Footer />
          </div>
        } />
        <Route path="/pdfs" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
};

export default App;

