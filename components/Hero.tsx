import React, { useState } from 'react';

type CarouselImage = {
  src: string;
  type?: 'logo' | 'normal';
};

const Hero: React.FC = () => {
  const images: CarouselImage[] = [
    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=800" },
    { src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600&h=800" },
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=800" },
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=800" },
    { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=800" },
    { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=800" },

    // SUBSTITUI imagem quebrada
    { src: "/developer.png" },
    { src: "/neto-dev.png" },

    // LOGO EM DESTAQUE
    { src: "/logo.png", type: 'logo' },
  ];

  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setRotation((e.clientX / window.innerWidth) * 360);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setRotation((e.touches[0].clientX / window.innerWidth) * 360);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="scale-[0.6] md:scale-100 transition-transform duration-500">
          <div className="perspective-1000 flex items-center justify-center">
            <div
              className="preserve-3d relative w-[240px] h-[360px] transition-transform duration-500 ease-out"
              style={{ transform: `rotateY(${-rotation}deg)` }}
            >
              {images.map((img, index) => {
                const isLogo = img.type === 'logo';

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-xl overflow-hidden border backdrop-blur-[2px] shadow-2xl
                      ${isLogo
                        ? 'border-cream/70 shadow-[0_0_50px_rgba(255,240,200,0.45)]'
                        : 'border-white/20 bg-white/5'
                      }`}
                    style={{
                      transform: `
                        rotateY(${index * (360 / images.length)}deg)
                        translateZ(${isLogo ? 650 : 550}px)
                        scale(${isLogo ? 1.1 : 1})
                      `,
                    }}
                  >
                    <img
                      src={img.src}
                      alt="DN3J Carousel"
                      className={`w-full h-full object-cover transition-opacity duration-300
                        ${isLogo ? 'opacity-100' : 'opacity-80 hover:opacity-100'}
                      `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl shadow-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8">
          Construímos o futuro <br />
          <span className="italic font-light text-cream/90">da sua tecnologia</span>
        </h1>

        <p className="text-lg md:text-xl font-sans text-cream/70 max-w-xl mx-auto font-medium">
          Soluções digitais sob medida. Transformamos ideias complexas em experiências de software elegantes e funcionais.
        </p>
      </div>
    </section>
  );
};

export default Hero;

