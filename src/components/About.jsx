import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import profileImage from '../assets/dev.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">01</span>
          <h2 className="section-title">Sobre Mí</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            {/* TEXTO MEJORADO - MÁS DIRECTO Y PROFESIONAL */}
            <p className="highlight-text">
Ingeniero en Sistemas. Construyo aplicaciones web robustas y mantenibles.

            </p>
            
            <p>
Arquitectura, bases de datos, automatización y rendimiento. Todo pensado para que el sistema crezca contigo.            </p>

            <motion.div className="tech-list" variants={itemVariants}>
              <p>Tecnologías que domino:</p>
              <ul>
                {['Laravel', 'React', 'PHP', 'JavaScript (ES6+)', 'MySQL', 'Blade'].map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.08 }}
                  >
                    <span className="tech-arrow">▹</span> {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <img src={profileImage} alt="Gerald - Ingeniero en Sistemas" className="profile-image" />
            </div>
          </motion.div>
        </div>

        <motion.div className="stats-container" variants={containerVariants}>
          {[
            { number: '2+', label: 'años de experiencia' },
            { number: '10+', label: 'proyectos completados' },
            { number: '6', label: 'tecnologías core' },
            { number: '100%', label: 'enfoque en calidad' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              variants={itemVariants}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;