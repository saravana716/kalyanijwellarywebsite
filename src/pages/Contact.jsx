import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Our Store",
      detail: "23, 5th Cross St, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600034",
      subDetail: "Centrally located in the heart of the city."
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      detail: "+91 98765 43210",
      subDetail: "Available Mon-Sat, 10:00 AM - 8:00 PM"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      detail: "support@srikalyani.com",
      subDetail: "We typically respond within 24 hours."
    },
    {
      icon: <Clock size={24} />,
      title: "Store Hours",
      detail: "Mon - Sat: 10:00 AM - 8:30 PM",
      subDetail: "Sunday: 11:00 AM - 6:00 PM"
    }
  ];

  return (
    <div style={{ background: '#fdfcf8', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center', background: 'linear-gradient(rgba(255,255,255,0.9), rgba(253, 252, 248, 1))' }}>
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--cream)', fontWeight: 400, marginBottom: '2rem' }}
          >
            Contact <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: '700px', margin: '0 auto', color: '#666', lineHeight: 1.8, fontSize: '1.1rem' }}
          >
            Experience the personal touch of Sri Kalyani. Whether you have a query about a piece or wish to visit our showroom, we're here to assist you.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="contact-main-grid">
            
            {/* Left Column: Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="details-grid">
                {contactDetails.map((item, index) => (
                  <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(186, 139, 45, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                    <div style={{ color: 'var(--gold)', marginBottom: '1.2rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--cream)' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#444', fontWeight: 500, marginBottom: '0.4rem', lineHeight: 1.4 }}>{item.detail}</p>
                    <p style={{ fontSize: '0.75rem', color: '#888' }}>{item.subDetail}</p>
                  </div>
                ))}
              </div>
              
              <div style={{ padding: '2rem', background: 'rgba(186, 139, 45, 0.03)', borderRadius: '12px', border: '1px dashed rgba(186, 139, 45, 0.2)' }}>
                <p style={{ color: 'var(--cream)', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center' }}>
                  <strong>Need urgent assistance?</strong><br/>
                  Our customer support team is available 24/7 for your legacy needs.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: 'white', padding: '4rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <MessageSquare color="var(--gold)" size={24} />
                <h2 style={{ fontSize: '1.8rem', color: 'var(--cream)', fontWeight: 500 }}>Send us a message</h2>
              </div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                  <input type="text" placeholder="Your Name" className="contact-input" />
                  <input type="email" placeholder="Email Address" className="contact-input" />
                </div>
                <input type="text" placeholder="Subject" className="contact-input" />
                <textarea placeholder="How can we help you?" rows="5" className="contact-input" style={{ resize: 'none' }}></textarea>
                <button type="button" className="btn btn-primary" style={{ padding: '1.2rem', gap: '1rem', marginTop: '1rem' }}>
                  <Send size={18} /> SEND MESSAGE
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section style={{ padding: '4rem 0 0', height: '600px', position: 'relative' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        >
          <iframe 
            title="Sri Kalyani Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7009995755325!2d80.23773537482079!3d13.054694413051616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665c59d39c4b%3A0x2cf45468bc3b3b23!2s23%2C%205th%20Cross%20St%2C%20Lake%20Area%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1778934391174!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
        
        {/* Floating Map Link Overlay */}
        <div style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 10,
          background: 'white',
          padding: '1rem 2rem',
          borderRadius: '50px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer'
        }}>
          <MapPin size={18} color="var(--gold)" />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--cream)', letterSpacing: '0.05em' }}>OPEN IN GOOGLE MAPS</span>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          padding: 1.2rem 1.5rem;
          background: #fdfcf8;
          border: 1px solid #eee;
          border-radius: 8px;
          outline: none;
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(186, 139, 45, 0.05);
          background: white;
        }
        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .details-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          section[style*="height: 600px"] {
            height: 400px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
