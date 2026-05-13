import React from 'react';
import { motion } from 'framer-motion';
import silverImg from '../assets/silver_ganesha_idol.png';

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
            <span className="section-label">Sacred Silver Collections</span>
            <h2 className="section-title" style={{ fontSize: '2.8rem', color: '#1A1814' }}>
              Pure Silver Idols For Divine Blessings & <em>Auspicious Gifting</em>
            </h2>
            <p style={{ 
              marginBottom: '2.5rem', 
              color: 'var(--text-muted)', 
              lineHeight: 1.8, 
              fontSize: '1.05rem',
              fontWeight: 300 
            }}>
              Bring home positivity and spiritual elegance with our premium silver idol collections. 
              Sri Kalyani Jewellery offers beautifully detailed silver idols of Ganesha, Lakshmi, Murugan, Balaji, Krishna, and more — 
              perfect for pooja rooms, weddings, housewarming gifts, and festive occasions. 
              Crafted with purity and devotion, every piece reflects divine artistry and tradition.
            </p>
            <button className="btn btn-primary">Explore Silver Idols</button>
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
              alt="Sacred Silver Collection" 
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
