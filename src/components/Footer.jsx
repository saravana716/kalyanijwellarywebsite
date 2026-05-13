import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo_new.png';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0 2rem', background: 'var(--dark-2)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <img src={logo} alt="Sri Kalyani Logo" style={{ height: '150px', width: 'auto', marginLeft: '-1rem', marginBottom: '1.5rem' }} />
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
            <h4 style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem', fontWeight: 600 }}>Follow Us</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li>
                <a href="https://www.instagram.com/srikalyani_jewellery/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <FaInstagram size={18} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <FaFacebookF size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/917598303666" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
              </li>
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
