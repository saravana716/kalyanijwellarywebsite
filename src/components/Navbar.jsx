import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 'clamp(1rem, 5vw, 3rem)',
        paddingRight: 'clamp(1rem, 5vw, 3rem)'
      }}
    >
      <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="/logo.png" alt="Sri Kalyani Logo" style={{ height: 'clamp(80px, 12vw, 120px)', width: 'auto' }} />
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-links-desktop">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id || (activeSection === 'privacy' && item.id === 'privacy') || (activeSection === 'terms' && item.id === 'terms');
          
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold)' : 'var(--cream)',
                textDecoration: 'none',
                opacity: isActive ? 1 : 0.8,
                transition: 'var(--transition)',
                position: 'relative',
                fontWeight: 500
              }}
              onMouseOver={(e) => { e.target.style.opacity = '1'; e.target.style.color = 'var(--gold)'; }}
              onMouseOut={(e) => { 
                if (!isActive) {
                  e.target.style.opacity = '0.8'; 
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
                    height: '2px',
                    background: 'var(--gold)'
                  }}
                />
              )}
            </a>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <a
          href="#enroll"
          className="btn btn-primary nav-enroll-btn"
          style={{ padding: '0.7rem 1.8rem', fontSize: '0.65rem' }}
        >
          Enroll Now
        </a>

        {/* Hamburger Icon */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-toggle"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--gold)', 
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none' // Controlled by CSS
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
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
              maxWidth: '320px',
              background: '#FFFFFF',
              zIndex: 101,
              padding: '8rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              boxShadow: '-10px 0 50px rgba(0,0,0,0.05)',
              borderLeft: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleLinkClick}
                style={{
                  fontSize: '1.2rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  fontWeight: 400
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#enroll"
              className="btn btn-primary"
              onClick={handleLinkClick}
              style={{ marginTop: '2rem', textAlign: 'center' }}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)',
              zIndex: 100
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 968px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        @media (max-width: 480px) {
          .nav-enroll-btn {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
