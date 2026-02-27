import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión para Gym',
    description:
      'Sistema web para administración de clientes, control de pagos y portal de usuario. Incluye base de datos estructurada y despliegue en servidor.',
    videoUrl: 'https://www.youtube.com/embed/Mq6pLLYG860',
    tags: ['React', 'Java', 'MySQL', 'Docker'],
  },
  {
    id: 2,
    title: 'SkillLink - Plataforma de Servicios',
    description:
      'Aplicación móvil y web que conecta clientes con proveedores de servicios. Incluye autenticación, panel administrativo y arquitectura escalable.',
    videoUrl: 'https://www.youtube.com/embed/ZAJFbNTf_RY',
    tags: ['ReactNative', 'API REST', 'Mobile App', 'Full Stack'],
  },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">03</span>
          <h2 className="section-title">Proyectos</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <iframe
                  className="project-video"
                  src={project.videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
