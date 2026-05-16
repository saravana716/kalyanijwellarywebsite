import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowLeft, Filter } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CollectionPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, favorites, user } = useCart();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Decode category name from URL (e.g., "Traditional-Collection" -> "Traditional Collection")
    const category = categoryName.replace(/-/g, ' ');
    const list = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    setFilteredProducts(list);
    window.scrollTo(0, 0);
  }, [categoryName]);

  const handleBuyNow = (product) => {
    if (!user) {
      alert('Please sign in to purchase.');
      return;
    }
    addToCart(product);
    navigate('/checkout?step=2');
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <button 
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 500 }}
        >
          <ArrowLeft size={20} /> BACK TO HOME
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
          <div>
            <span className="section-label">Exclusive Collection</span>
            <h1 style={{ fontSize: '3.5rem', color: 'var(--cream)', fontWeight: 500, margin: '0.5rem 0' }}>
              {categoryName.replace(/-/g, ' ')}
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <Filter size={18} /> {filteredProducts.length} Masterpieces Found
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem' 
        }}>
          {filteredProducts.map((product, index) => {
            const isFav = favorites.find(f => f.id === product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  transition: 'var(--transition)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <button 
                  onClick={() => toggleFavorite(product)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    zIndex: 2,
                    color: isFav ? 'var(--gold)' : '#ccc'
                  }}
                >
                  <Heart size={18} fill={isFav ? 'var(--gold)' : 'none'} />
                </button>

                <div style={{ height: '350px', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 500, marginBottom: '0.8rem' }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--gold)' }}>₹{product.price.toLocaleString()}</span>
                    <span style={{ fontSize: '0.8rem', color: '#999', textDecoration: 'line-through' }}>₹{(product.price * 1.15).toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="btn btn-primary" 
                    style={{ width: '100%', padding: '1rem', fontSize: '0.75rem', gap: '0.8rem' }}
                  >
                    <ShoppingCart size={18} /> ADD TO BAG
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
