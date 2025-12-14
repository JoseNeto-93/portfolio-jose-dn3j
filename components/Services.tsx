import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: "01",
    title: "Desenvolvimento Web",
    description: "Criação de sites institucionais, e-commerce e portais corporativos com as tecnologias mais modernas do mercado, focando em performance e SEO."
  },
  {
    id: "02",
    title: "Design UI/UX",
    description: "Interfaces intuitivas e experiências de usuário memoráveis. Prototipagem de alta fidelidade e design systems completos para sua marca."
  },
  {
    id: "03",
    title: "Aplicativos Mobile",
    description: "Desenvolvimento nativo e híbrido para iOS e Android. Transformamos sua ideia em um aplicativo funcional e disponível nas lojas."
  },
  {
    id: "04",
    title: "Consultoria Técnica",
    description: "Análise de infraestrutura, arquitetura de software e otimização de processos tecnológicos para empresas que buscam escalar."
  }
];

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-cream mb-6 md:mb-0">Nossos<br/>Serviços</h2>
          <div className="max-w-md">
            <p className="text-lg text-cream/70 font-sans">
              Oferecemos uma gama completa de serviços digitais, ajudando marcas a navegar pela complexidade do mundo tecnológico com clareza e propósito.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20">
          {services.map((service) => (
            <div key={service.id} className="border-b border-white/20">
              <button 
                onClick={() => toggle(service.id)}
                className="w-full py-8 flex items-start justify-between text-left group hover:bg-white/5 transition-colors rounded-lg px-2"
              >
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="font-mono text-sm md:text-base text-cream/50">{service.id}</span>
                  <h3 className="text-2xl md:text-4xl font-serif text-cream group-hover:italic transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="pt-2">
                  {openId === service.id ? <Minus className="w-5 h-5 text-cream/50" /> : <Plus className="w-5 h-5 text-cream/50" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === service.id ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-12 md:pl-24 max-w-2xl">
                  <p className="text-cream/70 font-sans text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;