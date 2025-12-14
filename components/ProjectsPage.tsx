import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// Projetos solicitados
const projects = [
  {
    id: 1,
    title: "Calculadora de Mercado",
    category: "App Mobile",
    year: "2024",
    imageUrl: "https://picsum.photos/id/180/800/600",
    description: "Aplicação intuitiva para controle de gastos em tempo real durante compras.",
    link: "https://controle-mercado-dn3j.vercel.app/"
  },
  {
    id: 2,
    title: "Macase Construções",
    category: "Site Institucional",
    year: "2023",
    imageUrl: "https://picsum.photos/id/1076/800/600",
    description: "Plataforma digital imersiva exibindo portfólio de obras de alto padrão.",
    link: "https://macase-construcoes-dn3j.vercel.app/"
  },
  {
    id: 3,
    title: "Almoxarifado Digital",
    category: "Sistema ERP",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Sistema robusto de gestão de estoque com rastreamento em tempo real.",
    link: "https://almoxarifado-digital-dn3j.vercel.app/"
  }
];

const ProjectsPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const activeElement = trackRef.current.children[activeIndex] as HTMLElement;
        if (activeElement) {
          activeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getButtonLabel = (category: string) => {
    if (category === 'App Mobile') return 'Acessar aplicativo';
    if (category === 'Sistema ERP') return 'Acessar sistema';
    return 'Acessar site';
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-4 md:px-12 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Header Section in Glass */}
          <div className="glass-panel rounded-3xl p-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-cream leading-tight">
                Nossos<br />Projetos
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-cream hover:text-charcoal text-cream transition-all disabled:opacity-50"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-cream hover:text-charcoal text-cream transition-all disabled:opacity-50"
                  aria-label="Next project"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Slider Track */}
          <div 
            ref={trackRef}
            className="flex flex-col md:flex-row gap-4 md:gap-5 overflow-x-auto hide-scrollbar pb-10 min-h-[400px] md:h-[35rem]"
          >
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    flex-shrink-0 group border border-white/10
                    ${isActive 
                      ? 'h-[24rem] md:h-full basis-auto md:basis-[50rem] shadow-2xl' 
                      : 'h-[5rem] md:h-full basis-auto md:basis-[5rem]'
                    }
                  `}
                >
                  {/* Background Image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`
                      absolute inset-0 w-full h-full object-cover transition-all duration-700
                      ${isActive ? 'brightness-[0.8] scale-100' : 'brightness-[0.6] grayscale scale-110 group-hover:scale-105'}
                    `}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 md:opacity-40" />

                  {/* Content */}
                  <div className={`
                    absolute inset-0 flex p-6 text-white z-10 transition-all duration-500
                    ${isActive 
                      ? 'flex-col justify-end md:flex-row md:items-end md:justify-between' 
                      : 'justify-center items-center'
                    }
                  `}>
                    {/* Title */}
                    <h3 className={`
                      font-serif font-bold whitespace-nowrap transition-all duration-500
                      ${isActive 
                        ? 'text-3xl md:text-5xl order-1 md:order-1 transform-none' 
                        : 'text-xl md:text-2xl md:[writing-mode:vertical-rl] md:rotate-180 transform-none'
                      }
                    `}>
                      {project.title}
                    </h3>

                    {/* Details (Only visible when active) */}
                    <div className={`
                      transition-all duration-500 delay-100 overflow-hidden flex flex-col items-start gap-4
                      ${isActive 
                        ? 'opacity-100 max-h-[300px] mt-4 md:mt-0 md:ml-8 md:max-w-md' 
                        : 'opacity-0 max-h-0 w-0'
                      }
                    `}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs uppercase tracking-widest text-white/70">{project.category}</span>
                        </div>
                        <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                          {project.description}
                        </p>
                        
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-charcoal rounded-full text-sm font-medium uppercase tracking-wider hover:bg-cream transition-colors shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {getButtonLabel(project.category)}
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;