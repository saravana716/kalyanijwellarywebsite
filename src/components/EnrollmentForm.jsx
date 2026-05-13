import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const EnrollmentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="enroll" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="container"
        >
          <CheckCircle2 size={80} className="text-gold" style={{ marginBottom: '2rem', margin: '0 auto' }} />
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Inquiry <em>Received</em></h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8, maxWidth: '500px', margin: '0 auto' }}>
            Thank you for your interest in our bespoke collections. Our design consultant will reach out to you shortly to discuss your requirements in detail.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '3rem' }}>
            Back to Home
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="enroll" style={{ padding: '10rem 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        zIndex: -1
      }} />

      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Custom Design</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}><em>Consultation</em></h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8, maxWidth: '500px', margin: '0 auto' }}>
            Book a private consultation with our master designers to create a one-of-a-kind masterpiece tailored to your vision.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass"
          style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '4px' }}
        >
          <div className="form-grid">
            <FormGroup label="Full Name" placeholder="Mr./Ms. Your Name" required />
            <FormGroup label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          </div>

          <div className="form-grid">
            <FormGroup label="Email Address" type="email" placeholder="your@email.com" required />
            <div className="form-group">
              <label>Jewelry Category</label>
              <select className="form-input">
                <option value="">Select Category</option>
                <option>Engagement Ring</option>
                <option>Wedding Set</option>
                <option>Heritage Necklace</option>
                <option>Bespoke Bracelet</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div className="form-group">
              <label>Custom Requirements</label>
              <textarea 
                className="form-input" 
                placeholder="Describe your dream jewelry (Metal type, gemstone preference, etc.)" 
                rows="4"
                style={{ resize: 'none' }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Request Consultation
          </button>
          
          <p style={{ 
            fontSize: '0.7rem', 
            color: 'var(--text-muted)', 
            textAlign: 'center', 
            marginTop: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Our concierge team will contact you within 24 hours.
          </p>
        </motion.form>
      </div>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .form-group label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }
        .form-input {
          background: #FDFCF8;
          border: 1px solid rgba(96, 40, 54, 0.15);
          padding: 1rem 1.2rem;
          font-family: 'Lexend', sans-serif;
          font-size: 0.9rem;
          color: #1A1814;
          transition: var(--transition);
          outline: none;
          width: 100%;
          border-radius: 2px;
        }
        .form-input:focus {
          border-color: var(--gold);
          background: #FFFFFF;
          box-shadow: 0 0 0 4px rgba(96, 40, 54, 0.05);
        }
        .form-input::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
        select.form-input option {
          background: #FFFFFF;
          color: #1A1814;
        }
      `}</style>
    </section>
  );
};

const FormGroup = ({ label, ...props }) => (
  <div className="form-group">
    <label>{label}</label>
    <input className="form-input" {...props} />
  </div>
);

export default EnrollmentForm;
