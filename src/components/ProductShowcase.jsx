import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductShowcase = () => {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate(`/checkout?id=${product.id}&step=1`);
  };

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
          {products.slice(0, 6).map((product, index) => {
            const isFav = favorites.find(f => f.id === product.id);
            
            return (
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

                <button 
                  onClick={() => toggleFavorite(product)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    zIndex: 2,
                    color: isFav ? 'var(--gold)' : 'var(--text-muted)',
                    transition: '0.3s'
                  }}
                >
                  <Heart size={18} fill={isFav ? 'var(--gold)' : 'none'} />
                </button>
                
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
                  <span style={{ fontSize: '0.65rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>
                    {product.category}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', margin: '0.4rem 0 0.8rem 0', color: 'var(--cream)', fontWeight: 500 }}>{product.name}</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--gold)', fontFamily: 'Lexend' }}>
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#999', textDecoration: 'line-through', fontWeight: 300 }}>
                      ₹{(product.price * 1.15).toLocaleString()}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="btn btn-primary" 
                    style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      fontSize: '0.75rem', 
                      gap: '0.8rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    <ShoppingCart size={18} /> ADD TO BAG
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
