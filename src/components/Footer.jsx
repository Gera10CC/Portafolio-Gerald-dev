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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: '#f5f5f7' }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: '#f5f5f7' }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:gerald@example.com"
            whileHover={{ color: '#f5f5f7' }}
          >
            Email
          </motion.a>
        </div>

        <p className="footer-credit">
          Diseñado y desarrollado por <span>Gerald</span>
        </p>
        <p className="footer-year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
