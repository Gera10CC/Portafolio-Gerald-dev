import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Laravel', level: 95 },
    { name: 'PHP', level: 92 },
    { name: 'Blade', level: 95 },
    { name: 'React', level: 88 },
    { name: 'JavaScript', level: 88 },
    { name: 'MySQL', level: 90 },
  ];

  const tools = [
    { name: 'VS Code'},
    { name: 'Figma' },
    { name: 'GitHub'},
    { name: 'Terminal'},
    { name: 'Docker'},
    { name: 'Railway'},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
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

        <div className="skills-grid">
          <motion.div className="skills-category" variants={itemVariants}>
            <h3 className="category-title">Tecnologías</h3>
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skills-category" variants={itemVariants}>
            <h3 className="category-title">Herramientas</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="tool-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="skills-extra" variants={itemVariants}>
          <h3 className="category-title">También trabajo con</h3>
          <div className="extra-skills">
            {['REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Tailwind', 'SASS', 'Webpack', 'Jest', 'Framer Motion'].map((skill, index) => (
              <motion.span
                key={skill}
                className="extra-skill-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.04 }}
                whileHover={{ y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
