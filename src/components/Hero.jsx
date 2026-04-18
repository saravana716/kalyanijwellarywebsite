import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      padding: '6rem 2rem 4rem',
      overflow: 'hidden'
    }}>
      {/* Background with Gradients */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(186,139,45,0.05) 0%, transparent 70%), var(--dark)',
        zIndex: -1
      }} />

      {/* Decorative Rings */}
      {[500, 720, 960].map((size, i) => (
        <motion.div
          key={size}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05 - (i * 0.01), scale: 1 }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            border: '1px solid rgba(96, 40, 54, 0.08)',
            pointerEvents: 'none',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}
        />
      ))}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Trusted Jewellery Chit Fund</span>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '0.5rem', color: '#1A1814' }}>
          Sri Kalyani<br />
          <em style={{ color: 'var(--gold)' }}>Jewellery</em>
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 2.2rem)', 
          color: 'var(--gold-light)',
          letterSpacing: '0.15em',
          marginBottom: '2.5rem',
          fontWeight: 400,
          textTransform: 'uppercase'
        }}>
          Chit Fund Scheme
        </p>
      </motion.div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          maxWidth: '540px',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          color: 'var(--text-muted)',
          marginBottom: '3.5rem',
          fontWeight: 300
        }}
      >
        Save systematically every month and redeem your full maturity value as exquisite jewellery. 
        A trusted way to plan your dream gold purchase with complete transparency.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}
      >
        <a href="#enroll" className="btn btn-primary">Start Saving Today</a>
        <a href="#how-it-works" className="btn btn-outline">Learn More</a>
      </motion.div>

      {/* App Download Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem',
          padding: '1rem 2rem',
          background: 'rgba(0, 0, 0, 0.02)',
          borderRadius: '100px',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Get the App
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ transition: 'var(--transition)' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.8'}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{ height: '30px' }} />
          </a>
          <a href="#" style={{ transition: 'var(--transition)' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.8'}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '30px', filter: 'brightness(0.3)' }} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
