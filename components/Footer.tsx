import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#F3F0EB] px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-end min-h-[30vh]">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 font-sans uppercase tracking-widest text-center md:text-left">
            © DN3J Sistemas. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/dn3j.93/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jos%C3%A9-dos-santos-dias-neto-b7b965203/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;