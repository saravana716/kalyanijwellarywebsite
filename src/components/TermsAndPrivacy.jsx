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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {['terms', 'privacy', 'refund', 'shipping', 'cancellation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.8rem 1.5rem', fontSize: '0.65rem' }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab === 'terms' ? '& Conditions' : tab === 'privacy' ? 'Policy' : 'Policy'}
            </button>
          ))}
        </div>

        <motion.div
          id={activeTab}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{ padding: '3rem', borderRadius: '4px' }}
        >
          <div className="legal-content">
            {activeTab === 'privacy' && (
              <>
                <h3 className="policy-title">Privacy Policy</h3>
                <p>At Sri Kalyani Jewellery, we respect your privacy and are committed to protecting your personal information. We collect customer details such as name, mobile number, email address, billing/shipping address, and payment information solely for order processing, delivery, and customer support. Customer data is stored securely and will never be sold or shared with unauthorized third parties. By using our website, you agree to our privacy practices and policies.</p>
              </>
            )}
            
            {activeTab === 'terms' && (
              <>
                <h3 className="policy-title">Terms & Conditions</h3>
                <p>By accessing and using the Sri Kalyani Jewellery website, customers agree to follow all website terms, policies, and conditions. Product prices, availability, offers, and designs may change without prior notice. Orders will be confirmed only after successful payment verification. Unauthorized use of website content, product images, logos, or designs is strictly prohibited. Sri Kalyani Jewellery reserves the right to refuse or cancel any order in case of pricing errors, stock issues, or suspicious activities.</p>
              </>
            )}

            {activeTab === 'refund' && (
              <>
                <h3 className="policy-title">Refund & Return Policy</h3>
                <p>Customers may request a return or exchange for eligible products within the specified return period after delivery. Products must be unused, undamaged, and returned with original packaging, tags, and invoice. Customized, personalized, or damaged products are not eligible for return or exchange. Refunds will be processed after product verification and may take 5–10 business days to reflect in the original payment method.</p>
              </>
            )}

            {activeTab === 'shipping' && (
              <>
                <h3 className="policy-title">Shipping & Delivery Policy</h3>
                <p>Sri Kalyani Jewellery processes and ships orders within the estimated business days mentioned on the website. Delivery timelines may vary based on customer location, courier availability, and unforeseen circumstances. Customers will receive shipment tracking details once the order is dispatched. Shipping charges, if applicable, will be displayed during checkout. Sri Kalyani Jewellery is not responsible for delays caused by courier services or natural disruptions.</p>
              </>
            )}

            {activeTab === 'cancellation' && (
              <>
                <h3 className="policy-title">Cancellation Policy</h3>
                <p>Orders can be canceled only before dispatch confirmation. Once the product is shipped, cancellation requests may not be accepted. Canceled refund requests will be processed to the original payment method within the standard refund timeline. Sri Kalyani Jewellery reserves the right to cancel any order due to stock unavailability, payment issues, or technical errors.</p>
              </>
            )}
          </div>
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
        .policy-title {
          font-size: 1.5rem;
          color: var(--gold);
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        .legal-content p {
          margin-bottom: 1.5rem;
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
