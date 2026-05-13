import React from 'react';
import { motion } from 'framer-motion';
import l1 from '../assets/l1.jpeg';

const TrendingNow = () => {
  return (
    <section id="trending" style={{ 
      position: 'relative',
      height: '600px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1
      }}>
        <img 
          src={l1} 
          alt="Jewelry Banner" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)', // Dark overlay for text readability
          zIndex: 2
        }} />
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          position: 'relative', 
          zIndex: 3,
          padding: '0 2rem',
          maxWidth: '800px'
        }}
      >
        <span style={{ 
          display: 'block',
          fontSize: '0.8rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em', 
          color: 'var(--gold-pale)',
          marginBottom: '2rem',
          fontWeight: 600
        }}>
          {/* Limited Collection */}
        </span>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
          lineHeight: 1.2, 
          fontWeight: 400,
          marginBottom: '2rem'
        }}>
          Jewels For Every Occasion
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: 1.8, 
          fontWeight: 300,
          opacity: 0.9
        }}>
          From weddings to everyday moments, our jewellery shines with you.
        </p>
      </motion.div>
    </section>
  );
};

export default TrendingNow;
