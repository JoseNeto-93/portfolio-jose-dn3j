import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  const handleNavigate = (route: string) => {
    const event = new CustomEvent('navigate', { detail: route });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="/developer.png" 
                alt="José Neto - Desenvolvedor" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Tenta carregar .jpg caso .png não exista
                  if (target.src.endsWith('png')) {
                    target.src = '/developer.jpg';
                  } else if (target.src.endsWith('jpg')) {
                     // Tenta jpeg como último recurso
                    target.src = '/developer.jpeg';
                  }
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/80 backdrop-blur-md p-8 rounded-full flex items-center justify-center hidden md:flex shadow-xl border border-white/20">
                 <p className="text-cream font-serif text-center italic text-lg leading-tight">
                   "Codificando o futuro, linha por linha."
                 </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 glass-panel p-8 md:p-12 rounded-3xl">
            <span className="text-sm font-sans uppercase tracking-widest text-cream/60 mb-4 block">Sobre Mim</span>
            <h1 className="text-5xl md:text-7xl font-serif text-cream mb-8 leading-tight">
              A mente por trás da <span className="italic text-cream/80">DN3J</span>
            </h1>
            <div className="space-y-6 text-cream/80 font-sans leading-relaxed text-lg md:text-xl">
              <p>
                Olá, sou José Neto, fundador da DN3J Sistemas, criada a partir do desejo de transformar ideias em soluções digitais funcionais, modernas e bem estruturadas.
              </p>
              <p>
                Minha jornada na tecnologia começou com uma curiosidade genuína sobre como as coisas funcionam no mundo digital. Hoje, estou em constante processo de formação e aprendizado, aprofundando meus estudos e aplicando esse conhecimento na criação de projetos reais. Mesmo estando no início dessa trajetória, já desenvolvi soluções como a Calculadora de Mercado e sistemas mais robustos, como o Almoxarifado Digital (ERP), sempre com foco em qualidade, organização e usabilidade.
              </p>
              <p>
                Acredito que código vai além da funcionalidade — ele envolve lógica, criatividade e atenção aos detalhes. Cada projeto recebe o mesmo cuidado, independentemente do tamanho, pois meu compromisso é entregar soluções que realmente façam a diferença para quem utiliza.
              </p>

              <div className="pt-6">
                <button 
                  onClick={() => handleNavigate('qualifications')}
                  className="group inline-flex items-center gap-3 px-8 py-3 bg-cream text-charcoal rounded-full text-sm font-medium uppercase tracking-wider hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Ver minhas qualificações
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;