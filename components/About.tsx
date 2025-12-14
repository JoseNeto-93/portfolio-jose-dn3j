import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://picsum.photos/id/445/800/1000" 
            alt="Interior Office Tech" 
            className="w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-sm font-sans uppercase tracking-widest text-charcoal/60 mb-4 block">Sobre a DN3J</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
            Onde a arquitetura de software encontra a intenção.
          </h2>
          <div className="space-y-6 text-charcoal/80 font-sans leading-relaxed text-lg">
            <p>
              Na DN3J Sistemas, criamos espaços digitais onde a funcionalidade encontra a estética. Nosso foco não é apenas escrever código, mas desenvolver soluções robustas que escalam com o seu negócio.
            </p>
            <p>
              Com uma equipe apaixonada por inovação, trabalhamos desde a concepção até o produto final, garantindo linhas limpas de código, formas balanceadas de design e uma experiência de usuário atemporal.
            </p>
          </div>
          
          <div className="mt-12 flex space-x-12">
            <div>
              <span className="block text-3xl font-serif mb-1">50+</span>
              <span className="text-xs uppercase tracking-wider text-charcoal/60">Projetos Entregues</span>
            </div>
            <div>
              <span className="block text-3xl font-serif mb-1">10</span>
              <span className="text-xs uppercase tracking-wider text-charcoal/60">Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;