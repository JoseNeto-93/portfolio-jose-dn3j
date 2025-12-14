import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Projetos', route: 'projects' },
  { label: 'Sobre mim', route: 'about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    const event = new CustomEvent('navigate', { detail: route });
    window.dispatchEvent(event);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 bg-black/20 backdrop-blur-sm border-b border-white/5`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavigate(e, 'home')}
          className="hover:opacity-80 transition-opacity flex items-center"
        >
          {/* 
            Tenta carregar a imagem via /public/logo.png.
            Se falhar, o onError tenta /logo.png.
            Se falhar novamente, exibe o texto DN3J.
          */}
          {!logoError ? (
            <img 
              src="/public/logo.png" 
              alt="DN3J Sistemas" 
              className="h-14 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Previne loop infinito verificando se já tentamos o fallback
                if (target.src.includes('public/logo.png')) {
                  target.src = '/logo.png';
                } else {
                  setLogoError(true);
                }
              }}
            />
          ) : (
            <span className="text-2xl font-serif font-bold text-cream tracking-tighter">
              DN3J.
            </span>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => handleNavigate(e, item.route)}
              className="text-sm font-sans font-medium text-cream/80 hover:text-cream transition-colors uppercase tracking-wide px-4 py-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => handleNavigate(e, 'contact')}
            className="bg-cream text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white transition-colors"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden shadow-xl glass-panel">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => handleNavigate(e, item.route)}
              className="text-lg font-serif text-cream py-2 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
           <a
            href="#"
            onClick={(e) => handleNavigate(e, 'contact')}
            className="text-lg font-serif text-cream py-2 border-b border-white/10"
          >
            Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;