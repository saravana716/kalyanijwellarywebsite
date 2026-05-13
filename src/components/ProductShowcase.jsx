import React from 'react';
import { motion } from 'framer-motion';
import m1 from '../assets/m1.jpeg';
import m2 from '../assets/m2.jpeg';
import m3 from '../assets/m3.jpeg';

const products = [
  { id: 1, name: 'Women Collection', category: 'Fine Jewelry', image: m1, featured: true },
  { id: 2, name: 'Men Collection', category: 'Accessories', image: m2, featured: true },
  { id: 3, name: 'Kids Collection', category: 'Heritage', image: m3, featured: true },
];

const ProductShowcase = () => {
  return (
    <section id="products" style={{ padding: '8rem 0', background: 'var(--dark)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="section-label">Our Best Sellers</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured <em>Masterpieces</em></h2>
          </div>
          <a href="#categories" className="btn btn-outline">View All Collections</a>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem' 
        }}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'white',
                border: '1px solid var(--dark-3)',
                padding: '1.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              {product.featured && (
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'var(--gold)',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  zIndex: 2
                }}>
                  Featured
                </span>
              )}
              
              <div style={{ 
                height: '350px', 
                overflow: 'hidden', 
                background: '#f9f9f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {product.category}
                </span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0', color: 'var(--cream)' }}>{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
