import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Terms', id: 'terms' },
    { label: 'Privacy', id: 'privacy' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '3rem',
        paddingRight: '3rem'
      }}
    >
      <a href="#" className="nav-logo luxe-text" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '1rem 0' }}>
        <img src="/logo.png" alt="Sri Kalyani Logo" style={{ height: '150px', width: 'auto' }} />
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="nav-links">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id || (activeSection === 'privacy' && item.id === 'privacy') || (activeSection === 'terms' && item.id === 'terms');
          
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold)' : 'var(--cream)',
                textDecoration: 'none',
                opacity: isActive ? 1 : 0.7,
                transition: 'var(--transition)',
                position: 'relative'
              }}
              onMouseOver={(e) => { e.target.style.opacity = '1'; e.target.style.color = 'var(--gold)'; }}
              onMouseOut={(e) => { 
                if (!isActive) {
                  e.target.style.opacity = '0.7'; 
                  e.target.style.color = 'var(--cream)'; 
                }
              }}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'var(--gold)'
                  }}
                />
              )}
            </a>
          );
        })}
      </div>

      <a
        href="#enroll"
        className="btn btn-primary"
        style={{ padding: '0.6rem 1.8rem', fontSize: '0.65rem' }}
      >
        Enroll Now
      </a>
    </motion.nav>
  );
};

export default Navbar;
