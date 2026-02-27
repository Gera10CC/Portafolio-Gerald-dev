import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-logo"
          whileHover={{ opacity: 0.7 }}
        >
          Gerald
        </motion.div>
        
        <div className="footer-social">
          <motion.a
            href="https://github.com/Gera10CC"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: '#f5f5f7' }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gerald-calderón-castillo-037142367"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: '#f5f5f7' }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:geraldcalderoncastillo@gmail.com"
            whileHover={{ color: '#f5f5f7' }}
          >
            Email
          </motion.a>
        </div>

        <p className="footer-credit">
          Diseñado y desarrollado por <span>Gerald Calderón Castillo</span>
        </p>
        <p className="footer-year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
