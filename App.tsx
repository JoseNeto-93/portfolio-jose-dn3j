import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import QualificationsPage from './components/QualificationsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Função para lidar com o evento de navegação personalizado
    const handleNavigation = (event: CustomEvent) => {
      const page = event.detail;
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    // Adiciona o listener
    window.addEventListener('navigate', handleNavigation as EventListener);

    // Limpeza
    return () => {
      window.removeEventListener('navigate', handleNavigation as EventListener);
    };
  }, []);

  const getComponent = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'qualifications':
        return <QualificationsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-charcoal selection:text-white">
      {getComponent()}
    </div>
  );
};

export default App;