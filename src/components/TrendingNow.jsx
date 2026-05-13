import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/redesign/hero.png';

const TrendingNow = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--dark-2)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          alignItems: 'center', 
          gap: '5rem',
          background: 'white',
          padding: '4rem',
          borderRadius: '4px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.05)'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={heroImg} 
              alt="Trending Piece" 
              style={{ width: '100%', borderRadius: '2px' }} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Limited Edition</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>The Royal <em>Choker</em></h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Experience the pinnacle of craftsmanship with our limited edition Royal Choker. 
              Featuring intricately carved 22K gold and hand-picked emeralds, this piece is a testament to our legacy.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#enroll" className="btn btn-primary">Inquire Now</a>
              <a href="#products" className="btn btn-outline">Explore More</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
