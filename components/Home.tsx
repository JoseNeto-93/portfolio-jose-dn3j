import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;