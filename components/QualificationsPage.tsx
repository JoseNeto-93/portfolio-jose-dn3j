import React from 'react';
import { ArrowLeft, Code, Database, Layout, Smartphone, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const skills = [
  {
    category: "Desenvolvimento Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5 & CSS3 Semantic"]
  },
  {
    category: "Sistemas & Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Lógica de ERP", "Node.js (Estudos)", "Arquitetura de Software", "Integração de APIs", "Modelagem de Dados"]
  },
  {
    category: "Mobile & Ferramentas",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["React Native", "Git & Github", "VS Code", "Vercel/Deploy", "Metodologias Ágeis"]
  }
];

const certifications = [
  {
    name: "A partir do zero: HTML e CSS para projetos web",
    institution: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/5b8f04da-9d16-4cf3-8cd8-d9b2a137ba38"
  },
  {
    name: "A partir do zero: iniciante em programação",
    institution: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/2155d4bc-3e7d-479a-aba4-45f9b1051bda"
  },
  {
    name: "Gerencie aplicações React com Typescript",
    institution: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/81b07bdf-9500-4aeb-a3f4-25cfdb8ea0aa?lang"
  },
  {
    name: "Aprenda a programar em JavaScript com foco no back-end",
    institution: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/2bd324d1-a2b5-4823-bad7-d5a864d749d6"
  },
  {
    name: "APIs com Node.js e Express",
    institution: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/c9519165-5417-463b-8df6-7cb0ac01b27a"
  },
  {
    name: "Aprenda a programar em PHP",
    institution: "Alura",
    link: "https://cursos.alura.com.br/degree/certificate/aac0984f-77c0-49f3-853f-bcc2c7f59ed3"
  },
  {
    name: "Agilidade: promovendo a transformação ágil",
    institution: "Alura",
    link: "https://cursos.alura.com.br/certificate/2a9555e0-70f4-4a28-bd3a-3ae4bf2430ed"
  },
  {
    name: "Organização de Equipes Ágeis: os papéis existentes em uma equipe",
    institution: "Alura",
    link: "https://cursos.alura.com.br/certificate/7ca9d257-1723-46b3-9dd0-5d865a9c9573"
  },
  {
    name: "Scrum: agilidade em seu projeto",
    institution: "Alura",
    link: "https://cursos.alura.com.br/certificate/ae65c72a-7dfe-4509-a880-cf4b35a5fba7"
  },
  {
    name: "NLW Journey - Fullstack",
    institution: "Rocketseat",
    link: "https://app.rocketseat.com.br/certificates/03dcf5de-1842-452f-be5e-bd6dfdbc5473"
  }
];

const QualificationsPage: React.FC = () => {
  const handleNavigate = (route: string) => {
    const event = new CustomEvent('navigate', { detail: route });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <button 
              onClick={() => handleNavigate('about')}
              className="group flex items-center gap-2 text-cream/60 hover:text-cream mb-6 transition-colors text-sm uppercase tracking-wider"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Voltar para Sobre Mim
            </button>
            
            <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">
              Qualificações <br />
              <span className="italic text-cream/50">& Expertise</span>
            </h1>
            <p className="text-lg text-cream/70 max-w-2xl font-sans leading-relaxed">
              Minha caixa de ferramentas técnica combina criatividade visual com lógica estruturada. 
              Abaixo estão as principais tecnologias e competências que utilizo para dar vida aos projetos da DN3J.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream mb-6 border border-white/10">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-serif text-cream mb-6 border-b border-white/10 pb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-cream/80 font-sans">
                      <CheckCircle2 size={16} className="text-cream/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-8 flex items-center gap-3">
              <Award className="text-cream/80" size={32} />
              Certificações
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                    <div>
                      <h3 className="text-xl text-cream font-medium mb-1 group-hover:text-white transition-colors">
                        {cert.name}
                      </h3>
                      <span className="text-cream/50 text-sm uppercase tracking-wider">{cert.institution}</span>
                    </div>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-cream text-sm hover:bg-white hover:text-black transition-all whitespace-nowrap shadow-lg hover:shadow-xl w-full md:w-auto justify-center"
                    >
                      Ver Certificado
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education / Philosophy Section */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-sans uppercase tracking-widest text-cream/60 mb-2 block">Formação & Foco</span>
                <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">
                  Aprendizado Contínuo
                </h2>
                <p className="text-cream/70 text-lg leading-relaxed mb-6">
                  Como fundador da DN3J, adoto uma postura de eterno aprendiz ("Lifelong Learning"). 
                  A tecnologia muda rapidamente, e meu compromisso é evoluir junto com ela para entregar 
                  sempre o que há de mais moderno e eficiente.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full border border-white/20 text-cream/80 text-sm">Autodidata</span>
                  <span className="px-4 py-2 rounded-full border border-white/20 text-cream/80 text-sm">Foco em Soluções</span>
                  <span className="px-4 py-2 rounded-full border border-white/20 text-cream/80 text-sm">Design Driven</span>
                </div>
              </div>
              <div className="relative h-64 md:h-full rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                  alt="Coding environment" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif text-xl italic">
                    "Qualidade é fazer certo quando ninguém está olhando."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QualificationsPage;