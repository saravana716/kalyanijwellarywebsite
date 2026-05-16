import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', zIndex: 1000 }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '450px',
              background: 'white',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0 50px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ padding: '2rem', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <ShoppingBag size={24} color="var(--gold)" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: 500 }}>Your Shopping Bag ({cart.length})</h2>
              </div>
              <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                  <ShoppingBag size={64} style={{ color: '#eee', marginBottom: '1.5rem' }} />
                  <p style={{ color: 'var(--text-muted)' }}>Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="btn btn-outline"
                    style={{ marginTop: '2rem', padding: '0.8rem 2rem' }}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '1.2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f9f9f9' }}>
                      <div style={{ width: '100px', height: '100px', background: '#f9f9f9', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <h4 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--cream)' }}>{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', opacity: 0.6 }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gold-light)', marginTop: '0.2rem' }}>{item.category}</p>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', borderRadius: '2px' }}>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              style={{ padding: '0.3rem 0.6rem', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                              <Minus size={12} />
                            </button>
                            <span style={{ padding: '0 0.8rem', fontSize: '0.9rem' }}>{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              style={{ padding: '0.3rem 0.6rem', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span style={{ fontWeight: 600, color: 'var(--gold)' }}>
                            ₹{((item.price || 45000) * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: '2rem', borderTop: '1px solid #f0f0f0', background: '#fdfcf8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>₹{subtotal === 0 ? '45,000' : subtotal.toLocaleString()}</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Shipping and taxes calculated at checkout.
                </p>
                <button 
                  onClick={onCheckout}
                  className="btn btn-primary" 
                  style={{ width: '100%', gap: '1rem' }}
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
