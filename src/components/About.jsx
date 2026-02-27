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
            <p>
              Soy Ingeniero en Sistemas de Información y desarrollador web, enfocado en crear soluciones digitales sólidas, escalables y orientadas a resultados. Me apasiona construir sistemas que combinen una experiencia de usuario clara con una arquitectura técnica bien estructurada.
            </p>
            <p>
              Me especializo en desarrollo backend con Laravel y Blade, creando aplicaciones web robustas y escalables. También trabajo en desarrollo frontend con React, diseño de interfaces, bases de datos, arquitectura de aplicaciones y despliegue. Disfruto entender el sistema completo, desde la interacción del usuario hasta la lógica y la infraestructura que lo sostiene.
            </p>
            <p>
              Más allá del código, me interesa la eficiencia, la automatización y la sostenibilidad de los proyectos. Siempre busco optimizar procesos, evaluar herramientas con criterio técnico y construir productos que aporten valor real a largo plazo.
            </p>

            <motion.div className="tech-list" variants={itemVariants}>
              <p>Tecnologías principales:</p>
              <ul>
                {['Laravel', 'Blade', 'PHP', 'React', 'JavaScript (ES6+)', 'MySQL'].map((tech, index) => (
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
              <img src={profileImage} alt="Gerald - Desarrollador Web" className="profile-image" />
            </div>
          </motion.div>
        </div>

        <motion.div className="stats-container" variants={containerVariants}>
          {[
            { number: '2+', label: 'Años de Experiencia' },
            { number: '10+', label: 'Proyectos Completados' },
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
