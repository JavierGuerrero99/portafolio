import React from "react";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-blue-600">{title}</h3>
        <div className="text-lg leading-relaxed">{children}</div>
      </div>
    </section>
  );
};

export default Section;
