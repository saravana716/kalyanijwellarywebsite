import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo_new.png';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0 2rem', background: 'var(--dark-2)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <img src={logo} alt="Sri Kalyani Logo" style={{ height: '120px', width: 'auto', marginLeft: '-1rem', marginBottom: '1.5rem' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
              Discover the art of fine jewelry at Sri Kalyani. Handcrafted masterpieces in 22K Gold and Certified Diamonds, carrying a legacy of purity and trust since 1995.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem', fontWeight: 600 }}>Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><FooterLink href="#categories">Our Collections</FooterLink></li>
              <li><FooterLink href="#products">Featured Pieces</FooterLink></li>
              <li><FooterLink href="#features">Heritage & Quality</FooterLink></li>
              <li><FooterLink href="#how-it-works">Crafting Process</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem', fontWeight: 600 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><FooterLink href="#enroll">Bespoke Inquiry</FooterLink></li>
              <li><FooterLink href="#terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="#privacy">Privacy Policy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div style={{ 
          paddingTop: '3rem', 
          borderTop: '1px solid rgba(0,0,0,0.05)', 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          opacity: 0.8
        }}>
          <span>© 2026 Sri Kalyani Jewellery. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    style={{ 
      color: 'var(--text-muted)', 
      textDecoration: 'none', 
      fontSize: '0.85rem',
      transition: 'var(--transition)'
    }}
    onMouseOver={(e) => { e.target.style.color = 'var(--gold)'; }}
    onMouseOut={(e) => { e.target.style.color = 'var(--text-muted)'; }}
  >
    {children}
  </a>
);

export default Footer;
