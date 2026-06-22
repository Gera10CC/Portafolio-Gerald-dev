import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué servicios de desarrollo ofreces?',
      answer: 'Ofrezco desarrollo web full-stack con especialización en Laravel (backend) y React (frontend). Esto incluye: aplicaciones web empresariales, sistemas de gestión, plataformas e-commerce, APIs RESTful, diseño de bases de datos, arquitectura de aplicaciones, y despliegue en servidores. Me enfoco en crear soluciones escalables, seguras y optimizadas.'
    },
    {
      question: '¿Cuál es tu proceso de trabajo?',
      answer: 'Mi proceso consta de 5 fases: 1) Análisis de requisitos y planificación detallada, 2) Diseño de arquitectura y base de datos, 3) Desarrollo iterativo con revisiones periódicas, 4) Testing exhaustivo (funcional, seguridad y rendimiento), 5) Despliegue y documentación completa. Mantengo comunicación constante y transparente durante todo el proyecto.'
    },
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'El tiempo varía según la complejidad y alcance. Un sistema básico puede tomar 2-4 semanas, mientras que plataformas más complejas requieren 2-3 meses. Después de analizar tus requisitos específicos, proporciono un cronograma detallado con hitos claros y fechas de entrega realistas.'
    },
    {
      question: '¿Trabajas con metodologías ágiles?',
      answer: 'Sí, utilizo principios ágiles adaptados a cada proyecto. Esto incluye sprints cortos, entregas incrementales, revisiones frecuentes y flexibilidad para ajustar prioridades. Esta metodología permite que veas progreso tangible constantemente y que podamos hacer ajustes antes de que sea costoso cambiar.'
    },
    {
      question: '¿Ofreces soporte post-lanzamiento?',
      answer: 'Sí, todos mis proyectos incluyen un período de soporte inicial para resolver cualquier incidencia. También ofrezco planes de mantenimiento continuo que cubren: actualizaciones de seguridad, optimizaciones de rendimiento, corrección de bugs, nuevas funcionalidades, y monitoreo del sistema. El soporte se adapta a las necesidades específicas de cada cliente.'
    },
    {
      question: '¿Cómo manejas la seguridad y el rendimiento?',
      answer: 'La seguridad y el rendimiento son prioridades desde el diseño inicial. Implemento: autenticación robusta, protección contra inyecciones SQL y XSS, encriptación de datos sensibles, optimización de consultas de base de datos, caché inteligente, y código limpio siguiendo mejores prácticas. Realizo auditorías de seguridad y pruebas de carga antes del lanzamiento.'
    },
    {
      question: '¿Puedo ver ejemplos de tu trabajo anterior?',
      answer: 'Por supuesto. En la sección de Proyectos puedes ver demostraciones de sistemas que he desarrollado, incluyendo plataformas de gestión, aplicaciones móviles y sistemas e-commerce. Para proyectos confidenciales, puedo compartir casos de estudio sin revelar información sensible del cliente. También estoy disponible para discutir casos similares a tu necesidad específica.'
    },
    {
      question: '¿Cuál es tu modelo de precios?',
      answer: 'Ofrezco dos modelos principales: 1) Precio fijo por proyecto - ideal cuando el alcance está bien definido, incluye presupuesto detallado y cronograma específico, 2) Tarifa por hora - ideal para proyectos con requisitos evolutivos o mantenimiento continuo. Proporciono estimaciones transparentes y sin cargos ocultos. Cada cotización incluye un desglose detallado de fases, entregables y costos.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="faq" className="faq" ref={ref}>
      <motion.div
        className="faq-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">05</span>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div className="faq-list" variants={containerVariants}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              variants={itemVariants}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;
