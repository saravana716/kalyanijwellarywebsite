import React from 'react';
import { motion } from 'framer-motion';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';

import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Traditional Collection', image: g1, price: '45,000' },
  { id: 2, name: 'Royal Collection', image: g2, price: '85,000' },
  { id: 3, name: 'Elegant Collection', image: g3, price: '25,000' },
  { id: 4, name: 'Heritage Collection', image: g4, price: '65,000' },
  { id: 5, name: 'Bespoke Collection', image: g5, price: '1,20,000' },
  { id: 6, name: 'Signature Collection', image: g6, price: '55,000' },
];

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <section id="categories" style={{ padding: '8rem 0', background: 'var(--dark-2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Browse by category</span>
          <h2 className="section-title">Our Curated <em>Collections</em></h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/collection/${cat.name.replace(/\s+/g, '-')}`)}
              style={{
                position: 'relative',
                height: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
              }}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className="category-img"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{cat.name}</h3>
                <span style={{ fontSize: '0.8rem', opacity: 0.9, letterSpacing: '0.1em' }}>Starting from ₹{cat.price}</span>
                <div style={{ 
                  marginTop: '1.2rem', 
                  fontSize: '0.7rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em', 
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  width: 'fit-content',
                  paddingBottom: '0.3rem'
                }}>
                  Explore Collection
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .motion-div:hover .category-img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default ProductCategories;
