import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FavoritesPage = () => {
  const { favorites, toggleFavorite, addToCart, user } = useCart();
  const navigate = useNavigate();

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

        <div style={{ marginBottom: '5rem' }}>
          <span className="section-label">Your Wishlist</span>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--cream)', fontWeight: 500, margin: '0.5rem 0' }}>
            My <em>Favorites</em>
          </h1>
        </div>

        {favorites.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '10rem 0', color: 'var(--text-muted)' }}>
            <Heart size={64} style={{ marginBottom: '2rem', opacity: 0.2 }} />
            <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>Your wishlist is currently empty.</p>
            <button onClick={() => navigate('/')} className="btn btn-outline" style={{ marginTop: '2rem' }}>DISCOVER COLLECTIONS</button>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem' 
          }}>
            {favorites.map((product, index) => (
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
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
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
                    color: '#ff4d4f'
                  }}
                >
                  <Trash2 size={18} />
                </button>

                <div style={{ height: '350px', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 500, marginBottom: '0.8rem' }}>{product.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--gold)' }}>₹{product.price.toLocaleString()}</span>
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
