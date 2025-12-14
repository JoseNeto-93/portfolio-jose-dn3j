import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;