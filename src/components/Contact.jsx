import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Configuración de EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('Enviando email con:', { serviceId, templateId, publicKey }); // Debug

      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: 'Gerald',
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email enviado exitosamente:', response); // Debug
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setIsSubmitting(false);
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      setTimeout(() => setSubmitError(''), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header centered" variants={itemVariants}>
          <span className="section-number">04</span>
          <h2 className="section-title">Contacto</h2>
        </motion.div>

        <motion.p className="contact-subtitle" variants={itemVariants}>
          ¿Tienes un proyecto en mente? Hablemos.
        </motion.p>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Conectemos</h3>
            <p>
              Estoy disponible para proyectos freelance, oportunidades 
              laborales o simplemente charlar sobre tecnología.
            </p>

            <div className="contact-methods">
              <motion.a
                href="mailto:geraldcalderoncastillo@gmail.com"
                className="contact-method"
                whileHover={{ x: 5 }}
              >
                <Mail className="contact-icon" size={20} />
                <span>geraldcalderoncastillo@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/gerald-calderón-castillo-037142367"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                whileHover={{ x: 5 }}
              >
                <Linkedin className="contact-icon" size={20} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/Gera10CC"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                whileHover={{ x: 5 }}
              >
                <Github className="contact-icon" size={20} />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Nombre</label>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Email</label>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder=" "
              />
              <label>Mensaje</label>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : submitSuccess ? (
                <>✓ Enviado</>
              ) : (
                <>Enviar mensaje</>
              )}
            </motion.button>

            {submitSuccess && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ¡Gracias! Te responderé pronto.
              </motion.p>
            )}

            {submitError && (
              <motion.p
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitError}
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
