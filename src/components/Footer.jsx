import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0 2rem', background: 'var(--dark-3)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}> */}
              <img src="/logo.png" alt="Sri Kalyani Logo" style={{ height: '180px', width: 'auto', marginLeft: '-2.5rem' }} />
            {/* </div> */}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              A trusted jewellery chit fund scheme helping you save systematically and redeem your dream jewellery with confidence and excellence.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><FooterLink href="#how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="#benefits">Benefits</FooterLink></li>
              <li><FooterLink href="#terms">Terms & Conditions</FooterLink></li>
              <li><FooterLink href="#privacy">Privacy Policy</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <MapPin size={18} className="text-gold" />
                <span>Visit our store for location details</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Phone size={18} className="text-gold" />
                <span>Contact at time of registration</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Mail size={18} className="text-gold" />
                <span>Email available in store</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          paddingTop: '3rem', 
          borderTop: '1px solid rgba(0,0,0,0.05)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          opacity: 0.8
        }}>
          <span>© 2026 Sri Kalyani Jewellery Chit Fund. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Compliance</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Dispute Resolution</a>
          </div>
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
