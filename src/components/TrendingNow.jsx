import React from 'react';
import { motion } from 'framer-motion';
import l1 from '../assets/l1.jpeg';

const TrendingNow = () => {
  return (
    <section id="trending" style={{ padding: '0', background: 'white', overflow: 'hidden' }}>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        minHeight: '600px'
      }}>
        {/* Left Side: Full Cover Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ 
            flex: '1 1 500px',
            position: 'relative',
            minHeight: '400px'
          }}
        >
          <img 
            src={l1} 
            alt="Limited Edition Piece" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              position: 'absolute',
              inset: 0
            }} 
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ 
            flex: '1 1 500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '10% 8%',
            background: '#F9F7F2'
          }}
        >
          <span className="section-label" style={{ marginBottom: '0rem' }}>Limited Edition</span>
          <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>
            {/* The Royal <br/><em>Choker</em> */}
          </h2>
          <p style={{ 
            color: 'var(--text-muted)', 
            lineHeight: 1.8, 
            marginBottom: '2rem', 
            fontSize: '1.1rem',
            maxWidth: '500px'
          }}>
            Jewels For Every Occasion
From weddings to everyday moments, our jewellery shines with you.

          </p>
          <div>
            <a href="#products" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>Explore Collection</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingNow;
