import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, register, registeredUsers } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for "real-time" feel
    await new Promise(resolve => setTimeout(resolve, 800));

    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) {
        setIsSuccess(true);
        setTimeout(onClose, 1000);
      } else {
        setError('Invalid email or password.');
        setIsLoading(false);
      }
    } else {
      const existing = registeredUsers.find(u => u.email === formData.email);
      if (existing) {
        setError('Email already registered.');
        setIsLoading(false);
      } else {
        register({ ...formData });
        setIsSuccess(true);
        setTimeout(onClose, 1000);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass"
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '2.5rem',
          borderRadius: '4px',
          position: 'relative',
          background: 'white'
        }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><Lock size={40} color="#22c55e" /></motion.div>
            </div>
            <h3 style={{ color: '#22c55e', marginBottom: '0.5rem' }}>Authenticated!</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>Redirecting you to your collection...</p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                {isLogin ? 'Welcome Back' : 'Join the Legacy'}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {isLogin ? 'Access your exclusive jewelry collection' : 'Create an account for personalized styling'}
              </p>
            </div>

            {error && (
              <div style={{ color: '#ff4d4f', background: 'rgba(255, 77, 79, 0.05)', padding: '0.8rem', borderRadius: '4px', fontSize: '0.8rem', marginBottom: '1.5rem', textAlign: 'center', border: '1px solid rgba(255, 77, 79, 0.1)' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {!isLogin && (
                <div className="input-group">
                  <User size={18} className="input-icon" />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              )}
              <div className="input-group">
                <Mail size={18} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="input-group">
                <Lock size={18} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '1rem', opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating...' : (isLogin ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button 
                onClick={() => setIsLogin(!isLogin)}
                style={{ background: 'none', border: 'none', color: 'var(--gold)', fontWeight: 600, cursor: 'pointer', padding: 0 }}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </>
        )}
      </motion.div>

      <style>{`
        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--gold-light);
          opacity: 0.6;
        }
        .input-group input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 2px;
          outline: none;
          font-family: inherit;
          transition: var(--transition);
        }
        .input-group input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(96, 40, 54, 0.05);
        }
      `}</style>
    </div>
  );
};

export default AuthModal;
