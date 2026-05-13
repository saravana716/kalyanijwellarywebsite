import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Gem, Star, PenTool, Zap } from 'lucide-react';

const heritageFeatures = [
  {
    icon: <Award className="text-gold" size={28} />,
    title: 'BIS Hallmarked',
    desc: 'Every piece of jewelry we sell carries the BIS Hallmark, ensuring the highest standards of gold purity.'
  },
  {
    icon: <Gem className="text-gold" size={28} />,
    title: '100% Certified ',
    desc: 'Our diamonds are certified by international labs like GIA and IGI, guaranteeing quality and value.'
  },
  {
    icon: <PenTool className="text-gold" size={28} />,
    title: 'Custom Designs',
    desc: 'Work with our master craftsmen to create bespoke pieces that tell your unique story.'
  },
  {
    icon: <Star className="text-gold" size={28} />,
    title: 'Award Winning',
    desc: 'Recognized for our excellence in traditional temple jewelry and modern fusion designs.'
  },
  {
    icon: <ShieldCheck className="text-gold" size={28} />,
    title: 'Secure Shipping',
    desc: 'Fully insured doorstep delivery with real-time tracking for your peace of mind.'
  },
  {
    icon: <Zap className="text-gold" size={28} />,
    title: 'Instant Valuation',
    desc: 'Get transparent and fair market value for your old gold with our advanced testing technology.'
  }
];

const Features = () => {
  return (
    <section id="features" style={{ padding: '8rem 0', background: '#fff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>The Kalyani<br /><em>Heritage</em></h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1px',
          background: 'rgba(96, 40, 54, 0.1)'
        }}>
          {heritageFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card"
              style={{
                background: '#FFFFFF',
                padding: '3.5rem 2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition)',
                cursor: 'default'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--dark-2)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{feature.icon}</div>
              <h3 style={{ 
                fontFamily: "'Lexend', sans-serif", 
                fontSize: '1.5rem', 
                color: 'var(--cream)', 
                marginBottom: '1rem',
                fontWeight: 500
              }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
