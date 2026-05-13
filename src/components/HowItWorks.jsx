import React from 'react';
import { motion } from 'framer-motion';

const craftsmanshipSteps = [
  {
    num: '01',
    title: 'Design & Concept',
    desc: 'Our award-winning designers create detailed sketches, blending traditional motifs with contemporary elegance.'
  },
  {
    num: '02',
    title: 'Material Selection',
    desc: 'We hand-select the finest 22K gold and ethically sourced diamonds, ensuring each stone meets our rigorous standards.'
  },
  {
    num: '03',
    title: 'Master Crafting',
    desc: 'Our master craftsmen spend hundreds of hours hand-carving and setting each piece to achieve perfection.'
  },
  {
    num: '04',
    title: 'Quality Check',
    desc: 'Every piece undergoes a multi-stage quality audit and BIS Hallmarking before it is certified for our customers.'
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
            <span className="section-label">Our Process</span>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>The Art of<br /><em>Craftsmanship</em></h2>
            <p className="section-body" style={{ color: 'var(--text-muted)', maxWidth: '450px' }}>
              From the initial sketch to the final polish, discover how we create timeless pieces that celebrate your most precious moments.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="#enroll" className="btn btn-outline">Request Custom Design</a>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {craftsmanshipSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
