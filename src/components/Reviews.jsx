import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import forceGymImage from '../assets/ForceGymLogin.webp'; 
import glamImage from '../assets/glam.jpeg';
import './Reviews.css';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Yuliana Chacón Rodríguez',
      position: 'Administradora, ForceGym',
      review: 'Gerald es muy joven muy comprometido y responsable, trabajar con él fue una experiencia bastante satisfactoria por la atención que brinda a los detalles y la dedicación que entrega para realizar una excelente labor.',
      initials: 'YC',
      image: forceGymImage 
    },
    {
      id: 2,
      name: 'Mariel Matarrita Moraga',
      position: 'Dueña, Glamaura',
      review: 'Mi experiencia con Gerald fue estupenda. El proceso fue bastante rápido, comprendió uno a uno los puntos con los cuales quería proyectar mi página web. Me encantó la organización y puntualidad. Tuvimos al rededor de 3 sesiones en las cuales la primera fue basada en mi idea del proyecto, la segunda el me presentaba ya el proyecto montado, y la tercera fue el proyecto terminado en tiempo récord!. La confianza, la compresión y el profesionalismo fue fundamental, la página ha impulsado mis ventas muchísimo más, debido a que hace una presencia y confiabilidad mayor entre las chicas que compran mis productos',
      initials: 'MG',
      image: glamImage

    },
  ];

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

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
    <section id="reviews" className="reviews" ref={ref}>
      {/* Fondo glass decorativo */}
      <div className="reviews-bg">
        <div className="glass-orb-review orb-review-1"></div>
        <div className="glass-orb-review orb-review-2"></div>
      </div>

      <motion.div
        className="reviews-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">04</span>
          <h2 className="section-title">Testimonios</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={prevReview}>
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-viewport">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  
                  if (swipe < -10000) {
                    nextReview();
                  } else if (swipe > 10000) {
                    prevReview();
                  }
                }}
                className="review-glass-card carousel-card"
              >
                <div className="review-header">
                  {/* ✅ CONDICIÓN PARA MOSTRAR IMAGEN O INICIALES */}
                  <div className="review-avatar">
                    {reviews[currentIndex].image ? (
                      <img 
                        src={reviews[currentIndex].image} 
                        alt={reviews[currentIndex].name}
                        className="review-avatar-img"
                      />
                    ) : (
                      <span>{reviews[currentIndex].initials}</span>
                    )}
                  </div>
                  <div className="review-info">
                    <h3 className="review-name">{reviews[currentIndex].name}</h3>
                    <p className="review-position">{reviews[currentIndex].position}</p>
                  </div>
                </div>
                
                
                <p className="review-text">"{reviews[currentIndex].review}"</p>
                
                <div className="quote-icon">"</div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn carousel-btn-next" onClick={nextReview}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToReview(index)}
            />
          ))}
        </div>

        <motion.div className="reviews-footer" variants={itemVariants}>
          <p className="footer-text">
            Cada proyecto es una oportunidad de crear valor real. 
            ¿Hablamos del tuyo?
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Reviews;