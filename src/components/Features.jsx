import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Gift, ShieldCheck, RefreshCw, Scale, PhoneCall } from 'lucide-react';

const benefits = [
  {
    icon: <CreditCard className="text-gold" size={28} />,
    title: 'Flexible Payments',
    desc: 'Pay via Cash, UPI, or Bank Transfer. A receipt is issued for every installment for full transparency.'
  },
  {
    icon: <Gift className="text-gold" size={28} />,
    title: 'Bonus Benefits',
    desc: 'Members who complete all installments on time are eligible for exclusive scheme bonuses and discounts.'
  },
  {
    icon: <ShieldCheck className="text-gold" size={28} />,
    title: 'Secure & Trusted',
    desc: 'Your personal and payment data is protected with high-end security measures and never shared without consent.'
  },
  {
    icon: <RefreshCw className="text-gold" size={28} />,
    title: 'Easy Membership Transfer',
    desc: 'Transfer your membership with a simple written request and valid ID, subject to management approval.'
  },
  {
    icon: <Scale className="text-gold" size={28} />,
    title: 'Transparent Pricing',
    desc: 'Jewellery billed at prevailing gold rates with standard making charges — no hidden costs or surprises.'
  },
  {
    icon: <PhoneCall className="text-gold" size={28} />,
    title: 'Priority Support',
    desc: 'Receive timely updates via SMS, WhatsApp, or call regarding your payments and upcoming offers.'
  }
];

const Features = () => {
  return (
    <section id="benefits" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span className="section-label">Benefits</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Why Choose<br /><em>Our Scheme</em></h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1px',
          background: 'rgba(184, 134, 11, 0.1)'
        }}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card"
              style={{
                background: 'var(--dark)',
                padding: '3.5rem 2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition)',
                cursor: 'default'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--dark-2)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--dark)'; }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{benefit.icon}</div>
              <h3 style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: '1.5rem', 
                color: 'var(--cream)', 
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {benefit.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,26,26,0.5)', lineHeight: 1.8 }}>
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
