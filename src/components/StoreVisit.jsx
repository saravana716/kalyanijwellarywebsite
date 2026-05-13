import React from 'react';
import { motion } from 'framer-motion';
import storeImg from '../assets/banner1.jpeg';
import { MapPin, Phone, Clock } from 'lucide-react';

const StoreVisit = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          alignItems: 'center', 
          gap: '4rem' 
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              inset: '-10px',
              border: '1px solid var(--gold-light)',
              opacity: 0.1,
              zIndex: -1
            }} />
            <img 
              src={storeImg} 
              alt="Sri Kalyani Showroom" 
              style={{ 
                width: '100%', 
                borderRadius: '2px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Visit Our Showroom</span>
            <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Experience Luxury in <em>Person</em></h2>
            <p style={{ marginBottom: '3rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
              Step into our world of elegance. Visit our flagship showroom in Kovilpatti to explore our full collection with personalized service from our experts.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <MapPin className="text-gold" size={20} />
                <div>
                  <h4 style={{ fontSize: '0.8rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Address</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Kovilpatti, Tamil Nadu</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Clock className="text-gold" size={20} />
                <div>
                  <h4 style={{ fontSize: '0.8rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hours</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreVisit;
