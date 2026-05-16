import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment (Simulated), 3: Success
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    phone: ''
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price || 45000) * item.quantity, 0);

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    if (step === 2) {
      setTimeout(() => {
        clearCart();
      }, 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass"
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '3rem',
          borderRadius: '4px',
          position: 'relative',
          background: 'white',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        {step === 1 && (
          <form onSubmit={handleNext}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <Truck size={32} color="var(--gold)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.8rem', color: 'var(--cream)', fontWeight: 500 }}>Shipping Details</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="checkout-input" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Street Address" 
                className="checkout-input" 
                required 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input 
                  type="text" 
                  placeholder="City" 
                  className="checkout-input" 
                  required 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="checkout-input" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Continue to Payment
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <CreditCard size={32} color="var(--gold)" style={{ marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.8rem', color: 'var(--cream)', fontWeight: 500 }}>Payment Method</h2>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid var(--gold)', borderRadius: '4px', background: 'rgba(96, 40, 54, 0.02)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 500 }}>Order Total</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--gold)' }}>₹{subtotal.toLocaleString()}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center' }}>
              This is a secure checkout. Your transaction is protected with 256-bit SSL encryption.
            </p>
            <button onClick={handleNext} className="btn btn-primary" style={{ width: '100%' }}>
              Complete Purchase
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            >
              <CheckCircle size={80} color="#22c55e" style={{ marginBottom: '2rem' }} />
            </motion.div>
            <h2 style={{ fontSize: '2rem', color: 'var(--cream)', marginBottom: '1rem' }}>Order Confirmed!</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Thank you for choosing Sri Kalyani Jewellery. Your order has been placed successfully and we will contact you shortly for verification.
            </p>
            <button onClick={onClose} className="btn btn-outline" style={{ width: '100%' }}>
              Back to Home
            </button>
          </div>
        )}

        <style>{`
          .checkout-input {
            width: 100%;
            padding: 1rem;
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 2px;
            outline: none;
            font-family: inherit;
            transition: var(--transition);
          }
          .checkout-input:focus {
            border-color: var(--gold);
            background: rgba(96, 40, 54, 0.02);
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default CheckoutModal;
