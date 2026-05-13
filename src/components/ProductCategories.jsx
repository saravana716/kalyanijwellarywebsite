import React from 'react';
import { motion } from 'framer-motion';
import ringsImg from '../assets/redesign/rings.png';
import necklacesImg from '../assets/redesign/necklaces.png';
import earringsImg from '../assets/redesign/earrings.png';
import banglesImg from '../assets/redesign/bangles.png';

const categories = [
  { id: 1, name: 'Exquisite Rings', image: ringsImg, count: '120+ Designs' },
  { id: 2, name: 'Royal Necklaces', image: necklacesImg, count: '85+ Designs' },
  { id: 3, name: 'Elegant Earrings', image: earringsImg, count: '200+ Designs' },
  { id: 4, name: 'Heritage Bangles', image: banglesImg, count: '50+ Designs' },
];

const ProductCategories = () => {
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
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                position: 'relative',
                height: '400px',
                borderRadius: '4px',
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
                background: 'linear-gradient(to top, rgba(26, 24, 20, 0.8) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem',
                color: 'white'
              }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold-pale)' }}>
                  {cat.count}
                </span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', fontWeight: 500 }}>{cat.name}</h3>
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
