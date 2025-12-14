import React, { useState } from 'react';

const Hero: React.FC = () => {
  // Collection of images specifically for System Dev, Programming, and Web Design
  const images = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=800", // Coding/Programming Monitor
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600&h=800", // UI/UX Design Workflow
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=800", // Developer Coding on Laptop
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=800", // Code Syntax Highlighting
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=800", // Web Design / Portfolio Making
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=800", // Clean Workspace / Coding
    "https://images.unsplash.com/photo-1558494949-ef2a0de47235?auto=format&fit=crop&q=80&w=600&h=800", // Server/System Backend
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600&h=800", // Code Abstract
  ];

  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const width = window.innerWidth;
    // Map width to 360 degrees.
    const newRotation = (x / width) * 360;
    setRotation(newRotation);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].clientX;
    const width = window.innerWidth;
    const newRotation = (x / width) * 360;
    setRotation(newRotation);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      
      {/* 3D Carousel Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        {/* Container to scale down on mobile */}
        <div className="scale-[0.6] md:scale-100 transition-transform duration-500">
          <div className="perspective-1000 w-full h-full flex items-center justify-center">
            {/* Rotating Ring */}
            <div 
              className="preserve-3d relative w-[240px] h-[360px] transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `rotateY(${-rotation}deg)` }}
            >
              {images.map((src, index) => (
                <div 
                  key={index}
                  className="absolute inset-0 rounded-xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-[2px] shadow-2xl"
                  style={{
                    // Rotate each card around the Y axis and push it out by Z pixels to create the ring
                    transform: `rotateY(${index * (360 / images.length)}deg) translateZ(550px)`,
                  }}
                >
                  <img 
                    src={src} 
                    alt="Portfolio Work" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Subtle overlay/shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Text Content (Foreground) */}
      <div className="relative z-10 text-center max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl shadow-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-[1.1] md:leading-[1.1] mb-8 opacity-0 animate-fade-in drop-shadow-sm">
          Construímos o futuro <br />
          <span className="italic font-light text-cream/90">da sua tecnologia</span>
        </h1>
        <p className="text-lg md:text-xl font-sans text-cream/70 max-w-xl mx-auto mb-0 opacity-0 animate-fade-in [animation-delay:400ms] font-medium">
          Soluções digitais sob medida. Transformamos ideias complexas em experiências de software elegantes e funcionais.
        </p>
      </div>
    </section>
  );
};

export default Hero;