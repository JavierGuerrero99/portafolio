import React from "react";

const team = [
  {
    name: "Juan Diego Contreras Garcia",
    role: "Product Owner",
    photo: "/JuanDiego.jpg"
  },
  {
    name: "Javier Adrian Ramirez Guerrero",
    role: "Scrum Master",
    photo: "/JavierAdrian.jpg"
  },
  {
    name: "Miguel Angel Cárdenas",
    role: "Programador Full Stack, Documentador",
    photo: ""
  },
  {
    name: "Juan Camilo Muñoz Niño",
    role: "Programador Full Stack, Documentador",
    photo: ""
  },
  {
    name: "Yefferson David Delgado Galviz",
    role: "Programador Full Stack, Documentador",
    photo: ""
  },
  {
    name: "Yeison Andrey Mantilla Sanabria",
    role: "Programador Full Stack, Documentador",
    photo: ""
  }
];

const AboutUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">¿Quiénes somos?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <div className="w-32 h-32 bg-blue-100 rounded-full mb-4 flex items-center justify-center overflow-hidden">
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-6xl text-blue-300">👤</span>
              )}
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-1 text-center">{member.name}</h2>
            <p className="text-blue-600 text-center text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
