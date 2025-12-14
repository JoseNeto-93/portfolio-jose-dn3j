import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const phoneNumber = "5515998974445";
    const text = `Olá, me chamo ${name}. ${message ? `\n\nMensagem: ${message}` : ''}`;
    const encodedText = encodeURIComponent(text);
    
    // Abre a URL do WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif text-cream mb-8">
            Tem um projeto<br/>em mente?
          </h2>
          <p className="text-lg text-cream/70 mb-12 max-w-md">
            Adoraríamos trabalhar com você. Preencha o formulário e entraremos em contato o mais breve possível via WhatsApp.
          </p>
          
          <div className="space-y-4 font-sans text-cream/80">
            <p>js.diasneto.93@gmail.com</p>
            <p>+55 (15) 99897-4445</p>
            <p>Itapetininga, SP - Brasil</p>
          </div>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-cream/60">Nome</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cream transition-colors font-serif text-xl placeholder-white/20 text-cream"
              placeholder="Seu nome"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-cream/60">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cream transition-colors font-serif text-xl placeholder-white/20 text-cream"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-cream/60">Mensagem</label>
            <textarea 
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cream transition-colors font-serif text-xl resize-none placeholder-white/20 text-cream"
              placeholder="Conte-nos sobre seu projeto"
              required
            />
          </div>
          <button 
            type="submit"
            className="bg-cream text-charcoal px-10 py-4 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-white transition-colors mt-4 w-full md:w-auto shadow-lg"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;