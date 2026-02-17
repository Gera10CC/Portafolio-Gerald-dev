import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

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
            <p>
              Soy un desarrollador web con pasión por crear experiencias digitales 
              que combinan diseño elegante con funcionalidad impecable. Creo firmemente 
              que los mejores productos nacen de la intersección entre estética y usabilidad.
            </p>
            <p>
              Me especializo en desarrollo frontend, construyendo interfaces 
              intuitivas y responsivas. Siempre busco aprender y explorar 
              nuevas tecnologías para mejorar continuamente mi trabajo.
            </p>
            <p>
              Cuando no estoy programando, disfruto explorar nuevas herramientas, 
              contribuir a proyectos open source y perfeccionar cada detalle 
              de mis diseños.
            </p>

            <motion.div className="tech-list" variants={itemVariants}>
              <p>Tecnologías principales:</p>
              <ul>
                {['JavaScript (ES6+)', 'React', 'TypeScript', 'Node.js', 'CSS/SASS', 'Git'].map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.08 }}
                  >
                    <span className="tech-arrow">→</span> {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span className="placeholder-icon">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="stats-container" variants={containerVariants}>
          {[
            { number: '2+', label: 'Años de Experiencia' },
            { number: '15+', label: 'Proyectos Completados' },
            { number: '10+', label: 'Tecnologías' },
            { number: '100%', label: 'Compromiso' },
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
