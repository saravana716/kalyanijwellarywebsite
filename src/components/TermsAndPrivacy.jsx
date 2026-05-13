import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsAndPrivacy = () => {
  const [activeTab, setActiveTab] = useState('terms');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setActiveTab('privacy');
      } else if (hash === '#terms') {
        setActiveTab('terms');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="terms" style={{ padding: '8rem 0', background: 'var(--dark-2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Legal & Compliance</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Terms & <em>Privacy</em></h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <button
            onClick={() => setActiveTab('terms')}
            className={`btn ${activeTab === 'terms' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.8rem 2rem' }}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`btn ${activeTab === 'privacy' ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.8rem 2rem' }}
          >
            Privacy Policy
          </button>
        </div>

        <motion.div
          id={activeTab}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{ padding: '4rem', borderRadius: '4px' }}
        >
          {activeTab === 'terms' ? (
            <div className="legal-content">
              <LegalSection title="1. Introduction">
                Welcome to Sri Kalyani Jewellery. By using our website and services for jewelry inquiries and bespoke consultations, you agree to comply with and be bound by the following terms and conditions.
              </LegalSection>
              
              <LegalSection title="2. Product Information">
                <ul>
                  <li>All jewelry showcased on our website is subject to availability.</li>
                  <li>Weights and dimensions provided are approximate and may vary slightly in the final handcrafted piece.</li>
                  <li>Prices are not listed on the website as they are subject to change based on the prevailing market gold and gemstone rates at the time of inquiry.</li>
                </ul>
              </LegalSection>

              <LegalSection title="3. Authenticity & Quality">
                <ul>
                  <li>Sri Kalyani Jewellery guarantees that all gold jewelry is BIS Hallmarked with a valid HUID.</li>
                  <li>All diamond and gemstone jewelry are accompanied by certificates from recognized laboratories (GIA, IGI, or equivalent).</li>
                  <li>We maintain the highest standards of purity and craftsmanship in every piece.</li>
                </ul>
              </LegalSection>

              <LegalSection title="4. Bespoke & Custom Orders">
                <ul>
                  <li>Custom designs (Bespoke) require a detailed consultation and approval of the design blueprint.</li>
                  <li>A formal quotation will be provided after the design finalization.</li>
                  <li>Custom orders may require an advance payment to commence the crafting process.</li>
                  <li>Timelines for bespoke pieces are shared during the consultation and may vary based on complexity.</li>
                </ul>
              </LegalSection>

              <LegalSection title="5. Return & Exchange Policy">
                <ul>
                  <li>Returns and exchanges are subject to inspection and must be accompanied by the original invoice and certificates.</li>
                  <li>Custom-made pieces may have specific terms regarding buy-back and exchange values.</li>
                  <li>For standard collections, exchange policies follow current market standards and company norms.</li>
                </ul>
              </LegalSection>

              <LegalSection title="6. User Inquiries">
                <ul>
                  <li>Submitting an inquiry through our forms does not constitute a financial transaction.</li>
                  <li>Our team will contact you via your provided phone or email to discuss product details and pricing.</li>
                </ul>
              </LegalSection>

              <LegalSection title="7. Intellectual Property">
                All designs, images, and content on this website are the intellectual property of Sri Kalyani Jewellery. Unauthorized use or reproduction is strictly prohibited.
              </LegalSection>
            </div>
          ) : (
            <div className="legal-content">
              <LegalSection title="1. Information Collection">
                We collect personal information such as Name, Contact Number, Email, and jewelry preferences when you request a consultation or submit an inquiry.
              </LegalSection>

              <LegalSection title="2. Usage of Information">
                Your information is used exclusively to:
                <ul>
                  <li>Provide personalized jewelry consultations.</li>
                  <li>Answer product-specific inquiries and provide price quotes.</li>
                  <li>Update you on our latest collections and heritage events.</li>
                  <li>Improve our customer service experience.</li>
                </ul>
              </LegalSection>

              <LegalSection title="3. Data Security">
                <ul>
                  <li>We implement industry-standard security measures to protect your personal data from unauthorized access.</li>
                  <li>Your data is never sold or shared with third-party marketing agencies.</li>
                </ul>
              </LegalSection>

              <LegalSection title="4. Consultation Privacy">
                Bespoke design discussions and shared inspiration images are treated with the highest confidentiality to protect your unique vision.
              </LegalSection>

              <LegalSection title="5. Contact for Compliance">
                For any legal or privacy-related queries, please contact:<br/>
                <strong>Sri Kalyani Jewellery</strong><br/>
                Address: Kovilpatti, Tamil Nadu<br/>
                Phone: 7598303666<br/>
                Email: srikalyanikvp@gmail.com
              </LegalSection>
            </div>
          )}
        </motion.div>
      </div>

      <style>{`
        .legal-content {
          color: var(--cream);
          opacity: 0.9;
          font-size: 1rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .legal-content ul {
          list-style: none;
          padding-left: 0;
          margin-top: 1rem;
        }
        .legal-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .legal-content li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
};

const LegalSection = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h3 style={{ 
      fontFamily: "'Lexend', sans-serif", 
      fontSize: '1.4rem', 
      color: 'var(--gold)', 
      marginBottom: '1rem',
      fontWeight: 600
    }}>
      {title}
    </h3>
    <div>{children}</div>
  </div>
);

export default TermsAndPrivacy;
