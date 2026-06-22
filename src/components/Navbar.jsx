import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import logodev from '../assets/logodev.svg'; // Ajusta la ruta según tu estructura

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['about', 'skills', 'projects', 'reviews', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Sobre Mí', number: '01' },
    { id: 'skills', label: 'Habilidades', number: '02' },
    { id: 'projects', label: 'Proyectos', number: '03' },
    { id: 'reviews', label: 'Reviews', number: '04' },
    { id: 'faq', label: 'FAQ', number: '05' },
    { id: 'contact', label: 'Contacto', number: '06' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* LOGO */}
        <motion.div 
          className="logo" 
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 0.96 }}
          whileTap={{ scale: 0.92 }}
        >
          <img src={logodev} alt="Gerald Calderón - Logo" />
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="nav-links desktop">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              className={`glass-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="nav-link">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mobile-menu-inner">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="mobile-nav-link"
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mobile-link-number">{item.number}</span>
                  <span className="mobile-link-text">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;