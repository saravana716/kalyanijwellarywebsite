import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, User, Menu, X, Search } from 'lucide-react';
import logo from '../assets/logo_new.png';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { cart, favorites, user, logout } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Shop', id: 'products', type: 'anchor' },
    { label: 'Collections', id: 'categories', type: 'anchor' },
    { label: 'Heritage', id: 'features', type: 'anchor' },
    { label: 'Process', id: 'how-it-works', type: 'anchor' },
    { label: 'Contact', path: '/contact', type: 'route' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const NavLink = ({ item }) => {
    const isActive = activeSection === item.id;
    const style = {
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: isActive ? 'var(--gold)' : '#1A1814',
      textDecoration: 'none',
      opacity: isActive ? 1 : 0.7,
      transition: 'var(--transition)',
      position: 'relative',
      fontWeight: 500,
      cursor: 'pointer'
    };

    if (item.type === 'route') {
      return (
        <Link 
          to={item.path} 
          style={style}
          onClick={handleLinkClick}
          onMouseOver={(e) => { e.target.style.opacity = '1'; e.target.style.color = 'var(--gold)'; }}
          onMouseOut={(e) => { e.target.style.opacity = '0.7'; e.target.style.color = '#1A1814'; }}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        href={`/#${item.id}`}
        style={style}
        onMouseOver={(e) => { e.target.style.opacity = '1'; e.target.style.color = 'var(--gold)'; }}
        onMouseOut={(e) => { 
          if (!isActive) {
            e.target.style.opacity = '0.7'; 
            e.target.style.color = '#1A1814'; 
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
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 left-0 right-0 z-[100] transition-all duration-500 py-4"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 'clamp(1rem, 5vw, 3rem)',
          paddingRight: 'clamp(1rem, 5vw, 3rem)',
          background: 'white',
          boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
          borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Sri Kalyani Logo" style={{ height: 'clamp(50px, 12vw, 100px)', width: 'auto' }} />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-links-desktop">
          {menuItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="nav-icons-desktop" style={{ display: 'flex', gap: '1.2rem', color: '#1A1814', opacity: 0.8, alignItems: 'center' }}>
            <Search 
              size={20} 
              cursor="pointer" 
              className="nav-icon" 
              onClick={() => setIsSearchOpen(true)}
            />
            
            <div 
              style={{ position: 'relative', cursor: 'pointer' }} 
              onClick={() => navigate('/checkout?step=2')} 
              className="nav-icon"
            >
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--gold)', color: 'white', fontSize: '0.6rem', padding: '0.1rem 0.4rem', borderRadius: '10px' }}>
                  {cart.length}
                </span>
              )}
            </div>

            <Link to="/wishlist" style={{ position: 'relative', cursor: 'pointer', color: 'inherit' }} className="nav-icon">
              <Heart size={20} color={favorites.length > 0 ? 'var(--gold)' : 'currentColor'} fill={favorites.length > 0 ? 'var(--gold)' : 'none'} />
              {favorites.length > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--gold)', color: 'white', fontSize: '0.6rem', padding: '0.1rem 0.4rem', borderRadius: '10px' }}>
                  {favorites.length}
                </span>
              )}
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => user ? logout() : setIsAuthOpen(true)} className="nav-icon">
              <User size={20} />
              {user && <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--gold)' }}>{user.name.split(' ')[0]}</span>}
            </div>
          </div>
          
          <Link
            to="/checkout?step=1"
            className="btn btn-primary nav-enroll-btn"
            style={{ padding: '0.7rem 1.8rem', fontSize: '0.65rem' }}
          >
            Shop Now
          </Link>

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
      </motion.nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              background: 'white',
              padding: '2rem',
              zIndex: 1000,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem'
            }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
              <input
                autoFocus
                type="text"
                placeholder="Search for jewelry, collections..."
                style={{
                  width: '100%',
                  padding: '1.5rem 4rem',
                  fontSize: '1.2rem',
                  border: '1px solid #eee',
                  outline: 'none',
                  borderRadius: '4px',
                  fontFamily: 'Lexend'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setIsSearchOpen(false);
                    navigate('/#products');
                  }
                }}
              />
              <Search style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold)' }} />
              <X 
                style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} 
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

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
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleLinkClick}
                  style={{
                    fontSize: '1.2rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#1A1814',
                    textDecoration: 'none',
                    fontWeight: 400
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`/#${item.id}`}
                  onClick={handleLinkClick}
                  style={{
                    fontSize: '1.2rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#1A1814',
                    textDecoration: 'none',
                    fontWeight: 400
                  }}
                >
                  {item.label}
                </a>
              )
            ))}
            <Link
              to="/checkout?step=1"
              className="btn btn-primary"
              onClick={handleLinkClick}
              style={{ marginTop: '2rem', textAlign: 'center' }}
            >
              Shop Collection
            </Link>
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
          .nav-icons-desktop {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .nav-enroll-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
