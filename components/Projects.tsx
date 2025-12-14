import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';

// Enhanced project data with descriptions for the slider
const projects: (Project & { description: string })[] = [
  {
    id: 1,
    title: "Calculadora de Mercado",
    category: "Mobile App",
    year: "2024",
    imageUrl: "https://picsum.photos/id/180/800/600",
    description: "Controle de gastos pessoais.",
    link: "https://controle-mercado-dn3j.vercel.app/"
  },
  {
    id: 2,
    title: "Macase Construções",
    category: "Site Institucional",
    year: "2023",
    imageUrl: "https://picsum.photos/id/1076/800/600",
    description: "Plataforma digital imersiva.",
    link: "https://macase-construcoes-dn3j.vercel.app/"
  },
  {
    id: 3,
    title: "Almoxarifado Digital",
    category: "Sistema ERP",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Sistema robusto de gestão.",
    link: "https://almoxarifado-digital-dn3j.vercel.app/"
  },
  {
    id: 4,
    title: "Branding Tech",
    category: "Design",
    year: "2024",
    imageUrl: "https://picsum.photos/id/96/800/600",
    description: "Identidade visual completa."
  }
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll to center logic
  useEffect(() => {
    if (trackRef.current) {
      const activeElement = trackRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNavigate = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    const event = new CustomEvent('navigate', { detail: route });
    window.dispatchEvent(event);
  };

  const getButtonLabel = (category: string) => {
    if (category === 'Mobile App') return 'Acessar App';
    if (category === 'Sistema ERP') return 'Acessar Sistema';
    return 'Acessar Site';
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-12 overflow-hidden bg-[#F3F0EB]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal leading-tight">
              Projetos<br />Selecionados
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all disabled:opacity-50"
                aria-label="Previous project"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all disabled:opacity-50"
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
          className="flex flex-col md:flex-row gap-4 md:gap-5 overflow-x-auto hide-scrollbar pb-10 md:h-[30rem]"
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                  flex-shrink-0 group
                  ${isActive 
                    ? 'h-[24rem] md:h-full basis-auto md:basis-[40rem] shadow-2xl' 
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
                      ? 'opacity-100 max-h-[250px] mt-4 md:mt-0 md:ml-8 md:max-w-xs' 
                      : 'opacity-0 max-h-0 w-0'
                    }
                  `}>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-white/70 block mb-1">{project.category}</span>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/20 hover:bg-white text-white hover:text-charcoal backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider transition-all border border-white/30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {getButtonLabel(project.category)} <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
           <a href="#" onClick={(e) => handleNavigate(e, 'projects')} className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider border-b border-charcoal pb-1">
            Ver todos os casos <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;