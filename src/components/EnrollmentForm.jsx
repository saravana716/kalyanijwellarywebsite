import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

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
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Registration <em>Submitted</em></h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8, maxWidth: '500px', margin: '0 auto' }}>
            Thank you for your interest. Our verification team will review your banking details and get in touch with you shortly to finalize your enrollment.
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
          <span className="section-label">Enrollment & Bank Verification</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Begin Your <em>Gold Journey</em></h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8, maxWidth: '500px', margin: '0 auto' }}>
            Register your interest and submit your bank details for initial scheme verification. Our team will contact you for the next steps.
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
              <label>ID Proof Type</label>
              <select className="form-input">
                <option value="">Select ID Type</option>
                <option>Aadhaar Card</option>
                <option>PAN Card</option>
                <option>Voter ID</option>
                <option>Driving License</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <FormGroup label="Residential Address" placeholder="Your full address" required />
          </div>

          {/* Bank Verification Section */}
          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(96,40,54,0.1)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <ShieldCheck size={20} className="text-gold" />
              <h4 style={{ 
                fontFamily: "'Lexend', sans-serif", 
                fontSize: '1.2rem', 
                color: 'var(--gold)',
                fontWeight: 600
              }}>
                Bank Verification Details
              </h4>
            </div>
            
            <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
              <FormGroup label="Account Holder Name" placeholder="As per bank records" required />
              <FormGroup label="Bank Name" placeholder="e.g. HDFC, SBI" required />
            </div>

            <div className="form-grid">
              <FormGroup label="Account Number" placeholder="Enter account number" required />
              <FormGroup label="IFSC Code" placeholder="Enter bank IFSC" required />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '3rem' }}>
            Submit for Verification
          </button>
          
          <p style={{ 
            fontSize: '0.7rem', 
            color: 'var(--text-muted)', 
            textAlign: 'center', 
            marginTop: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Your data is encrypted and handled as per our Privacy Policy.
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
