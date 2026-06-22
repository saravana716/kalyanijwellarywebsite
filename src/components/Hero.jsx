import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/image1.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '8rem 2rem 6rem',
      overflow: 'hidden',
      background: 'var(--dark)'
    }}>
      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        alignItems: 'center',
        gap: '4rem',
        zIndex: 2
      }}>
        <motion.div
          className="hero-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'left' }}
        >
          <span className="section-label">Tradition Meets Brilliance</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1rem', color: '#1A1814', lineHeight: 1.2 }}>
            Timeless<br />
            <em style={{ color: 'var(--gold)' }}>Traditions</em><br />
            Brilliant<br />
            <em style={{ color: 'var(--gold)' }}>Creations</em>
          </h1>
          
          <p style={{
            maxWidth: '540px',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--text-muted)',
            marginBottom: '3rem',
            fontWeight: 300
          }}>
            Crafting elegance for generations. Discover our heritage collection of temple jewelry and contemporary masterpieces.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <a href="#products" className="btn btn-primary"> Explore More</a>
            {/* <a href="#enroll" className="btn btn-outline">Consult Designer</a> */}
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            inset: '-15px',
            border: '1px solid var(--gold-light)',
            opacity: 0.2,
            zIndex: -1,
            transform: 'rotate(-2deg)'
          }} />
          <img 
            src={heroImage} 
            alt="Heritage Jewelry" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '2px',
              boxShadow: '0 30px 60px rgba(96, 40, 54, 0.15)'
            }} 
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
          }
          .hero-content {
            text-align: center !important;
            order: 2;
          }
          .hero-image {
            order: 1;
            max-width: 500px;
            margin: 0 auto;
          }
          .hero-content p {
            margin: 0 auto 3rem !important;
          }
          .hero-content .section-title {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
