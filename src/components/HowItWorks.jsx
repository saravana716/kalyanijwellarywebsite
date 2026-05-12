import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Enroll & Register',
    desc: 'Submit your valid Government ID (Aadhaar / PAN / Voter ID) and contact details to register for the scheme.'
  },
  {
    num: '02',
    title: 'Monthly Installments',
    desc: 'Pay your fixed monthly installment on time via Cash, UPI, or Bank Transfer. A receipt is issued for every payment.'
  },
  {
    num: '03',
    title: 'Complete the Tenure',
    desc: 'Once all installments are paid, you become eligible to redeem your chit value toward a jewellery purchase.'
  },
  {
    num: '04',
    title: 'Redeem Your Jewellery',
    desc: 'Visit our store, choose your jewellery, and your scheme amount will be adjusted against the purchase. On-time savers may receive bonus benefits.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ padding: '8rem 0', background: 'var(--dark-2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Process</span>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>How the<br /><em>Scheme Works</em></h2>
            <p className="section-body" style={{ color: 'var(--text-muted)', maxWidth: '450px' }}>
              Join our monthly Saving scheme, make regular installments, and at the end of your tenure redeem the full value toward any jewellery of your choice at our store.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--dark-3)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--dark)'; }}
                style={{ display: 'flex', gap: '2rem' }}
              >
                <div style={{ 
                  fontFamily: "'Lexend', sans-serif", 
                  fontSize: '3rem', 
                  color: 'rgba(96, 40, 54, 0.1)', 
                  lineHeight: 1,
                  minWidth: '3.5rem',
                  fontWeight: 600
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ 
                    fontFamily: "'Lexend', sans-serif", 
                    fontSize: '1.4rem', 
                    color: 'var(--gold)', 
                    marginBottom: '0.5rem',
                    fontWeight: 500
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
