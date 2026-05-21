import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, RefreshCw, Truck, FileX, Clock, Mail, Phone, MapPin } from 'lucide-react';

const Terms = () => {
  const [activeTab, setActiveTab] = useState('terms');

  const tabNames = {
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    refund: 'Refund & Return',
    shipping: 'Shipping Policy',
    cancellation: 'Cancellation & Exchange'
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setActiveTab('privacy');
      } else if (hash === '#terms') {
        setActiveTab('terms');
      } else if (hash === '#refund') {
        setActiveTab('refund');
      } else if (hash === '#shipping') {
        setActiveTab('shipping');
      } else if (hash === '#cancellation') {
        setActiveTab('cancellation');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContactBox = () => (
    <div className="legal-contact-card">
      <div style={{ flex: 1 }}>
        <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem', fontWeight: 600, fontSize: '1.1rem' }}>Questions or Requests?</h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          If you have questions regarding our policy or need support, contact our team:
        </p>
      </div>
      <div className="legal-contact-details">
        <div className="contact-item">
          <Mail size={16} color="var(--gold-light)" style={{ flexShrink: 0 }} />
          <a href="mailto:srikalyanijewellerykvp@gmail.com">srikalyanijewellerykvp@gmail.com</a>
        </div>
        <div className="contact-item">
          <Phone size={16} color="var(--gold-light)" style={{ flexShrink: 0 }} />
          <a href="tel:+919894462422">+91 98944 62422</a>
        </div>
        <div className="contact-item">
          <MapPin size={16} color="var(--gold-light)" style={{ flexShrink: 0 }} />
          <span>Kovilpatti, Tamil Nadu</span>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#fdfcf8', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Header Section */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center', background: 'linear-gradient(rgba(255,255,255,0.9), rgba(253, 252, 248, 1))' }}>
        <div className="container">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}
          >
            Legal & Compliance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: 'var(--cream)', fontWeight: 400, marginBottom: '1.5rem' }}
          >
            Terms & <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Privacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: '600px', margin: '0 auto', color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}
          >
            Please review our store policies, terms of use, shipping guidelines, and refund terms to understand your rights and commitments when purchasing from Sri Kalyani Jewellery.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '950px' }}>
          {/* Tab Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {Object.entries(tabNames).map(([tab, label]) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  window.location.hash = `#${tab}`;
                }}
                className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.8rem 1.4rem', fontSize: '0.7rem', letterSpacing: '0.08em', borderRadius: '4px' }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <motion.div
            id={activeTab}
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass"
            style={{ padding: '3.5rem 3rem', borderRadius: '8px' }}
          >
            <div className="legal-content">
              {activeTab === 'privacy' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(96, 40, 54, 0.1)', paddingBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(96, 40, 54, 0.05)', padding: '0.8rem', borderRadius: '50%' }}>
                      <Shield size={28} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 className="policy-title" style={{ margin: 0 }}>Privacy Policy</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                        <Clock size={12} /> Last updated: May 20, 2026
                      </span>
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    Sri Kalyani Jewellery respects your privacy and is committed to protecting the personal information you share with us when using our website and services.
                  </p>

                  <div className="policy-section">
                    <h4>1. Information We Collect</h4>
                    <p>We collect the following types of information to provide better services:</p>
                    <ul>
                      <li>Name, phone number, email address</li>
                      <li>Billing and shipping address</li>
                      <li>Payment details (processed securely via payment gateways)</li>
                      <li>Order history and purchase details</li>
                      <li>Device information (IP address, browser type)</li>
                      <li>Website usage data (pages visited, interactions)</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>2. How We Use Your Information</h4>
                    <p>We use your information to:</p>
                    <ul>
                      <li>Process and deliver your orders</li>
                      <li>Provide customer support</li>
                      <li>Send order updates and notifications</li>
                      <li>Improve our products and services</li>
                      <li>Prevent fraud and unauthorized transactions</li>
                      <li>Send promotional offers (only if you agree)</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>3. Information Sharing</h4>
                    <p>We do not sell your personal information. We may share your data only with:</p>
                    <ul>
                      <li>Payment gateway providers</li>
                      <li>Shipping and logistics partners</li>
                      <li>Legal authorities (if required by law)</li>
                      <li>Service providers (like Shopify or hosting services)</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>4. Data Security</h4>
                    <p>We use industry-standard security measures to protect your data. However, no online system is 100% secure, so we cannot guarantee absolute security.</p>
                  </div>

                  <div className="policy-section">
                    <h4>5. Cookies</h4>
                    <p>Our website may use cookies to:</p>
                    <ul>
                      <li>Improve user experience</li>
                      <li>Save preferences</li>
                      <li>Track website performance</li>
                    </ul>
                    <p style={{ marginTop: '0.5rem' }}>You can disable cookies in your browser settings.</p>
                  </div>

                  <div className="policy-section">
                    <h4>6. Your Rights</h4>
                    <p>You may request to:</p>
                    <ul>
                      <li>Access your personal data</li>
                      <li>Correct or update your information</li>
                      <li>Delete your account/data</li>
                      <li>Opt-out of marketing emails</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>7. Third-Party Links</h4>
                    <p>Our website may contain links to other websites. We are not responsible for their privacy policies or content.</p>
                  </div>

                  <div className="policy-section" style={{ marginBottom: 0 }}>
                    <h4>8. Changes to This Policy</h4>
                    <p>We may update this Privacy Policy from time to time. All changes will be posted on this page with an updated date.</p>
                  </div>

                  {renderContactBox()}
                </>
              )}
              
              {activeTab === 'terms' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(96, 40, 54, 0.1)', paddingBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(96, 40, 54, 0.05)', padding: '0.8rem', borderRadius: '50%' }}>
                      <Scale size={28} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 className="policy-title" style={{ margin: 0 }}>Terms & Conditions</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                        <Clock size={12} /> Last updated: May 20, 2026
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    Welcome to Sri Kalyani Jewellery! These Terms and Conditions outline the rules and regulations for the use of Sri Kalyani Jewellery’s website. By accessing or using this website, you agree to accept these terms in full. If you do not agree with any part of these terms, please do not continue using our website.
                  </p>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 500 }}>
                    By accessing and using the Sri Kalyani Jewellery website, you agree to comply with the following Terms & Conditions.
                  </p>

                  <div className="policy-section">
                    <h4>Use of Website</h4>
                    <ul>
                      <li>You must be at least 18 years old to make purchases.</li>
                      <li>All information provided must be accurate and complete.</li>
                      <li>Unauthorized use of this website is prohibited.</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>Intellectual Property</h4>
                    <p>All content on this website, including images, designs, logos, product photos, and text, is the property of Sri Kalyani Jewellery. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
                  </div>

                  <div className="policy-section">
                    <h4>Product Information</h4>
                    <p>We take utmost care to display our products as accurately as possible. However, slight variations in color, design, or appearance may occur due to lighting conditions or device screen settings.</p>
                    <p style={{ marginTop: '0.5rem', fontWeight: 500 }} className="text-gold">All one gram gold jewellery items sold are imitation jewellery and are not made of real gold unless explicitly mentioned.</p>
                  </div>

                  <div className="policy-section">
                    <h4>Pricing</h4>
                    <p>All prices listed on the website are subject to change without prior notice. Sri Kalyani Jewellery reserves the right to modify, update, or discontinue any product at any time without notice.</p>
                  </div>

                  <div className="policy-section">
                    <h4>Order Acceptance</h4>
                    <p>Receiving an order confirmation email or message does not guarantee acceptance of your order. We reserve the right to accept or reject any order due to reasons such as product unavailability, pricing errors, or payment issues.</p>
                  </div>

                  <div className="policy-section">
                    <h4>Limitation of Liability</h4>
                    <p>Sri Kalyani Jewellery shall not be held responsible for any direct, indirect, incidental, or consequential damages arising from the use of our website or products.</p>
                  </div>

                  <div className="policy-section" style={{ marginBottom: 0 }}>
                    <h4>Governing Law</h4>
                    <p>These Terms & Conditions are governed by the laws of India. Any disputes arising shall fall under the jurisdiction of the courts located in Tamil Nadu.</p>
                  </div>

                  {renderContactBox()}
                </>
              )}

              {activeTab === 'refund' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(96, 40, 54, 0.1)', paddingBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(96, 40, 54, 0.05)', padding: '0.8rem', borderRadius: '50%' }}>
                      <RefreshCw size={28} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 className="policy-title" style={{ margin: 0 }}>Refund & Return Policy</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                        <Clock size={12} /> Last updated: May 20, 2026
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    At Sri Kalyani Jewellery, customer satisfaction is important to us. Please read our refund and return guidelines carefully before making a purchase.
                  </p>

                  <div className="policy-section">
                    <h4>Return Eligibility</h4>
                    <ul>
                      <li>Returns accepted only for damaged or defective products.</li>
                      <li>Return request must be made within 24–48 hours of delivery.</li>
                      <li>Items must be unused and in original packaging.</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>Refund Process</h4>
                    <ul>
                      <li>Refunds will be processed after product verification.</li>
                      <li>Amount will be credited within 5–7 business days.</li>
                      <li>Shipping charges are non-refundable.</li>
                    </ul>
                  </div>

                  <div className="policy-section" style={{ marginBottom: 0 }}>
                    <h4>Non-Returnable Items</h4>
                    <ul>
                      <li>Customized jewellery items.</li>
                      <li>Gold coins and bullion (if applicable).</li>
                      <li>Used or altered products.</li>
                    </ul>
                  </div>

                  {renderContactBox()}
                </>
              )}

              {activeTab === 'shipping' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(96, 40, 54, 0.1)', paddingBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(96, 40, 54, 0.05)', padding: '0.8rem', borderRadius: '50%' }}>
                      <Truck size={28} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 className="policy-title" style={{ margin: 0 }}>Shipping Policy</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                        <Clock size={12} /> Last updated: May 20, 2026
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    At Sri Kalyani Jewellery, we ensure safe and secure delivery of all jewellery items with trusted logistics partners.
                  </p>

                  <div className="policy-section">
                    <h4>Shipping Time</h4>
                    <ul>
                      <li>Orders are processed within 24–48 hours.</li>
                      <li>Delivery time: 3–7 business days, depending on location.</li>
                      <li>Custom jewellery may take additional time.</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>Shipping Charges</h4>
                    <ul>
                      <li>Free shipping on selected orders.</li>
                      <li>Charges (if applicable) will be shown at checkout.</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>Order Tracking</h4>
                    <ul>
                      <li>Tracking details will be shared via SMS or email.</li>
                      <li>You can track your order status anytime.</li>
                    </ul>
                  </div>

                  <div className="policy-section" style={{ marginBottom: 0 }}>
                    <h4>Delays</h4>
                    <ul>
                      <li>Delays may occur due to weather or courier issues.</li>
                      <li>We will notify customers in case of delays.</li>
                    </ul>
                  </div>

                  {renderContactBox()}
                </>
              )}

              {activeTab === 'cancellation' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(96, 40, 54, 0.1)', paddingBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(96, 40, 54, 0.05)', padding: '0.8rem', borderRadius: '50%' }}>
                      <FileX size={28} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 className="policy-title" style={{ margin: 0 }}>Cancellation & Exchange Policy</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                        <Clock size={12} /> Last updated: May 20, 2026
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    At Sri Kalyani Jewellery, we strive to ensure complete customer satisfaction. However, due to the nature of imitation jewellery, please carefully review our refund and cancellation terms below.
                  </p>

                  <div className="policy-section">
                    <h4>1. Order Cancellation</h4>
                    <p>Orders can be cancelled by contacting our customer support team at <strong>+91 98944 62422</strong>.</p>
                    <ul>
                      <li>Orders can be canceled only before they are shipped.</li>
                      <li>Once an order has been shipped, it cannot be canceled.</li>
                      <li>For cancellation requests, you may also email us at <a href="mailto:support@srikalyanijewellery.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>support@srikalyanijewellery.com</a> or contact our helpline.</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h4>2. Refund Policy</h4>
                    <p>Refunds are applicable only under the following conditions:</p>
                    <ul>
                      <li>Product received in a damaged condition (<strong>unboxing video proof is mandatory</strong>).</li>
                      <li>Incorrect item delivered.</li>
                    </ul>
                    <p style={{ marginTop: '0.5rem' }}>Once approved, refunds will be processed within 7–10 business days and credited to the original payment method used at the time of purchase.</p>
                  </div>

                  <div className="policy-section">
                    <h4>3. Exchange Policy</h4>
                    <p>Exchanges are allowed only for damaged or defective products.</p>
                    <ul>
                      <li>Customers must report the issue within 48 hours of delivery.</li>
                      <li>Proof (clear photos or unboxing video) is required for verification.</li>
                      <li>Replacement will be processed after approval from our team.</li>
                    </ul>
                  </div>

                  <div className="policy-section" style={{ marginBottom: 0 }}>
                    <h4>4. Non-Refundable Items</h4>
                    <p>Refunds or exchanges will not be provided in the following cases:</p>
                    <ul>
                      <li>Products that are used, worn, or altered.</li>
                      <li>Items returned without original packaging.</li>
                      <li>Damage caused after delivery due to customer handling.</li>
                    </ul>
                  </div>

                  {renderContactBox()}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .legal-content {
          color: var(--cream);
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .policy-title {
          font-size: 1.8rem;
          color: var(--gold);
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .policy-section {
          margin-bottom: 2.5rem;
        }
        .policy-section h4 {
          font-size: 1.15rem;
          color: var(--gold);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }
        .policy-section p {
          margin-bottom: 0.8rem;
          color: var(--cream);
          opacity: 0.9;
        }
        .policy-section ul {
          list-style: none;
          padding-left: 0.5rem;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .policy-section ul li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--cream);
          opacity: 0.85;
          font-size: 0.9rem;
        }
        .policy-section ul li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--gold-light);
          font-weight: bold;
          font-size: 1.2rem;
          line-height: 1;
          top: 0.1rem;
        }
        .legal-contact-card {
          margin-top: 3.5rem;
          padding: 2rem;
          background: rgba(96, 40, 54, 0.02);
          border: 1px solid rgba(96, 40, 54, 0.08);
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .legal-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          border-left: 1px solid rgba(96, 40, 54, 0.1);
          padding-left: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.85rem;
          color: var(--cream);
        }
        .contact-item a {
          color: inherit;
          text-decoration: none;
          transition: var(--transition);
        }
        .contact-item a:hover {
          color: var(--gold-light);
        }
        @media (max-width: 768px) {
          .legal-contact-card {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
          }
          .legal-contact-details {
            border-left: none;
            border-top: 1px solid rgba(96, 40, 54, 0.1);
            padding-left: 0;
            padding-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Terms;
