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
                Welcome to Sri Kalyani Jewellery Chit Fund. By enrolling in our jewellery chit scheme, you agree to abide by the following terms and conditions.
              </LegalSection>
              
              <LegalSection title="2. Eligibility">
                <ul>
                  <li>The applicant must be 18 years of age or older.</li>
                  <li>Valid Government ID proof (Aadhaar / PAN / Voter ID / Driving License) is mandatory.</li>
                  <li>Address and contact details must be provided at the time of registration.</li>
                </ul>
              </LegalSection>

              <LegalSection title="3. Chit Scheme Details">
                <ul>
                  <li>Monthly installment amount: ₹________</li>
                  <li>Tenure: ______ months</li>
                  <li>Total payable amount: ₹________</li>
                  <li>The maturity amount can be redeemed only against a jewellery purchase at Sri Kalyani Jewellery.</li>
                </ul>
              </LegalSection>

              <LegalSection title="4. Payment Terms">
                <ul>
                  <li>Monthly installments must be paid on or before the due date.</li>
                  <li>Payments can be made via Cash / UPI / Bank Transfer.</li>
                  <li>A receipt will be issued for every payment.</li>
                  <li>Late payments may attract penalty charges as decided by management.</li>
                </ul>
              </LegalSection>

              <LegalSection title="5. Default & Cancellation">
                <ul>
                  <li>If a member fails to pay installments for consecutive months, the membership may be cancelled.</li>
                  <li>In case of voluntary cancellation, the paid amount will be refunded after deducting applicable charges (if any).</li>
                  <li>Refund processing time: ______ working days.</li>
                </ul>
              </LegalSection>

              <LegalSection title="6. Maturity & Redemption">
                <ul>
                  <li>On completion of all installments, the member is eligible to purchase jewellery equal to the chit value.</li>
                  <li>No cash refund will be provided upon maturity.</li>
                  <li>The scheme benefits (bonus/discount if applicable) apply only if all payments are made on time.</li>
                </ul>
              </LegalSection>

              <LegalSection title="7. Gold Rate & Making Charges">
                <ul>
                  <li>Jewellery will be billed based on the prevailing gold rate on the date of purchase.</li>
                  <li>Making charges and GST will be applicable as per current norms.</li>
                  <li>Scheme bonus/benefits (if any) will be adjusted accordingly.</li>
                </ul>
              </LegalSection>

              <LegalSection title="8. Transfer of Membership">
                <ul>
                  <li>Membership transfer is allowed only with a written request and valid ID proof.</li>
                  <li>Management reserves the right to approve or reject transfer requests.</li>
                </ul>
              </LegalSection>

              <LegalSection title="9. Company Rights">
                <ul>
                  <li>Sri Kalyani Jewellery Chit Fund reserves the right to modify scheme terms with prior notice.</li>
                  <li>In case of disputes, the decision of management shall be final. All disputes are subject to local jurisdiction.</li>
                </ul>
              </LegalSection>
            </div>
          ) : (
            <div className="legal-content">
              <LegalSection title="1. Information We Collect">
                We may collect: Name, Contact number, Address, Government ID details, Payment details, and Transaction history.
              </LegalSection>

              <LegalSection title="2. Purpose of Data Collection">
                Your information is collected to:
                <ul>
                  <li>Register yourself in the chit scheme</li>
                  <li>Maintain payment records</li>
                  <li>Communicate scheme updates</li>
                  <li>Process maturity benefits</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </LegalSection>

              <LegalSection title="3. Data Protection">
                <ul>
                  <li>We ensure reasonable security measures to protect your data.</li>
                  <li>Your information will not be sold or shared with third parties without consent, except where required by law.</li>
                </ul>
              </LegalSection>

              <LegalSection title="4. Communication">
                <ul>
                  <li>Members may receive SMS/WhatsApp/Call updates regarding payments, offers, and scheme details.</li>
                  <li>You may opt out of promotional communication upon request.</li>
                </ul>
              </LegalSection>

              <LegalSection title="5. Data Retention">
                Customer records will be retained in accordance with applicable laws and business requirements.
              </LegalSection>

              <LegalSection title="6. Changes to Privacy Policy">
                Sri Kalyani Jewellery Chit Fund reserves the right to update this Privacy Policy at any time. Updated policies will be communicated through official channels.
              </LegalSection>

              <LegalSection title="7. Contact Information">
                For any queries or concerns regarding Terms & Conditions or Privacy Policy, please contact:<br/>
                <strong>Sri Kalyani Jewellery Chit Fund</strong><br/>
                Address: Kovilpatti<br/>
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
