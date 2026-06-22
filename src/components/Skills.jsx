import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Laravel', 'PHP', 'Blade', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'Tailwind', 'SASS', 'Framer Motion']
    },
    {
      title: 'Base de Datos',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git/GitHub', 'Railway', 'VS Code', 'Figma']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      {/* Fondo glass decorativo */}
      <div className="skills-bg">
        <div className="glass-orb-skills orb-skills-1"></div>
        <div className="glass-orb-skills orb-skills-2"></div>
      </div>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">02</span>
          <h2 className="section-title">Habilidades</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div className="skills-grid" variants={containerVariants}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="skill-glass-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="card-header">
                <span className="card-icon">{category.icon}</span>
                <h3 className="card-title">{category.title}</h3>
              </div>
              <div className="skills-chips">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;