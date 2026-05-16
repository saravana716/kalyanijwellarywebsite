import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import storeImg from '../assets/banner1.jpeg';

const AboutUs = () => {
  return (
    <section id="about" style={{ padding: '8rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          alignItems: 'center', 
          gap: '5rem' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={storeImg} 
              alt="Sri Kalyani Showroom" 
              style={{ 
                width: '100%', 
                borderRadius: '4px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
              }} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Legacy</span>
            <h2 className="section-title" style={{ fontSize: '2.8rem', color: '#1A1814' }}>
              About Sri Kalyani <em>Jewellery</em>
            </h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                <strong>Celebrating 30 Years of Trust & Brilliance</strong>
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                For three decades, Sri Kalyani Jewellery has been more than just a jewelry destination; 
                it has been a part of your family’s most precious milestones. Established with a vision 
                to redefine purity and craftsmanship, we have spent 30 years perfecting the art of fine jewelry 
                while staying rooted in our core values of transparency and tradition.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Our Legacy Since our inception, we have been dedicated to bringing you the finest gold and diamond collections. 
                Our tagline, <strong>"Nambikkaiyin Adaiyaalam"</strong> (The Symbol of Trust), is not just a motto—it is a promise 
                we have kept to every customer who walks through our doors.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Explore Our Journey</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
