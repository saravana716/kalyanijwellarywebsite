import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/banner.jpeg';
import banner2 from '../assets/banner1.jpeg';

const slides = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
];

const AutoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="auto-slider" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Progress Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '1rem',
        zIndex: 10
      }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '40px',
              height: '2px',
              background: i === current ? 'var(--gold-pale)' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

      <style>{`
        .auto-slider {
          height: 100vh;
        }
        @media (max-width: 768px) {
          .auto-slider {
            height: 50vh !important;
          }
        }
        @media (max-width: 480px) {
          .auto-slider {
            height: 25vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AutoSlider;
