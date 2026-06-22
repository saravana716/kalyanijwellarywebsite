import React from 'react';
import { motion } from 'framer-motion';
import silverImg from '../assets/goldd.jpeg';

const SacredSilver = () => {
  return (
    <section id="silver" style={{ padding: '8rem 0', background: '#F9F7F2' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          alignItems: 'center', 
          gap: '5rem' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">GOLD JEWELLERY COLLECTIONS</span>
            <h2 className="section-title" style={{ fontSize: '2.8rem', color: '#1A1814' }}>
              Elegant Gold Jewellery For Every Occasion
            </h2>
            <p style={{ 
              marginBottom: '1rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.8, 
              fontSize: '1.05rem',
              fontWeight: 300 
            }}>
              Discover beautifully crafted gold jewellery designed to celebrate life's special moments. From necklaces and bangles to rings and earrings, each piece combines timeless elegance with trusted quality.
    </p>
     <p style={{ 
              marginBottom: '2.5rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.8, 
              fontSize: '1.05rem',
              fontWeight: 300 
            }}>
Find the perfect jewellery for weddings, festivals, gifting, and everyday wear.    </p>
            <a href="#products" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>SHOP GOLD COLLECTIONS</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              inset: '-20px',
              border: '1px solid var(--gold-light)',
              opacity: 0.15,
              zIndex: -1
            }} />
            <img 
              src={silverImg} 
              alt="Sacred Collection" 
              style={{ 
                width: '100%', 
                borderRadius: '4px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
              }} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SacredSilver;
