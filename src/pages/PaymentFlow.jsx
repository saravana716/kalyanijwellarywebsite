import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, CreditCard, Truck, ShoppingBag, 
  ArrowRight, ArrowLeft, Trash2, Plus, Minus,
  Download, FileText, User, MapPin, Phone, Mail,
  Award, ShieldCheck, RefreshCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const steps = [
  { id: 1, label: 'Select Product' },
  { id: 2, label: 'Add to Cart' },
  { id: 3, label: 'Enter Details' },
  { id: 4, label: 'Checkout' },
  { id: 5, label: 'Payment' },
  { id: 6, label: 'Payment Success' },
  { id: 7, label: 'Order Confirmation' },
  { id: 8, label: 'Invoice & Receipt' }
];

const PaymentFlow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, user, addToCart } = useCart();
  
  const initialStep = parseInt(searchParams.get('step')) || 1;
  const productId = parseInt(searchParams.get('id'));
  
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [formData, setFormData] = useState({
    fullName: user?.name || 'Ramesh Kumar',
    mobileNumber: user?.phone || '+91 98765 43210',
    address: 'Kovilpatti, Tamil Nadu',
    email: user?.email || 'ramesh.kumar@email.com'
  });

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [completedOrder, setCompletedOrder] = useState(null);

  useEffect(() => {
    if (productId) {
      const prod = products.find(p => p.id === productId);
      if (prod) {
        setSelectedProduct(prod);
        // If it's not in cart, add it
        const inCart = cart.find(item => item.id === productId);
        if (!inCart) {
          addToCart(prod);
        }
      }
    } else if (cart.length > 0) {
      setSelectedProduct(cart[0]);
    }
  }, [productId]);

  useEffect(() => {
    const stepFromUrl = parseInt(searchParams.get('step'));
    if (stepFromUrl && stepFromUrl !== currentStep) {
      setCurrentStep(stepFromUrl);
    }
  }, [searchParams]);

  const goToStep = (step) => {
    if (step > 1 && !user) {
      alert('Please sign in to proceed with the checkout.');
      return;
    }
    setCurrentStep(step);
    setSearchParams({ id: productId || '', step });
    window.scrollTo(0, 0);
  };

  const nextStep = () => goToStep(currentStep + 1);
  const prevStep = () => goToStep(currentStep - 1);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.03);
  const total = subtotal + gst;

  // Render Step Logic
  const renderStep = () => {
    if (currentStep > 1 && !user) {
      return (
        <div className="flow-card" style={{ textAlign: 'center', padding: '5rem' }}>
          <User size={64} color="var(--gold)" style={{ marginBottom: '2rem', opacity: 0.5 }} />
          <h2 style={{ fontSize: '2rem', color: 'var(--cream)', marginBottom: '1rem' }}>Sign In Required</h2>
          <p style={{ color: '#888', marginBottom: '3rem' }}>You must be logged in to complete your purchase.</p>
          <button onClick={() => navigate('/')} className="btn btn-primary" style={{ padding: '1rem 3rem' }}>GO TO HOME TO LOGIN</button>
        </div>
      );
    }

    switch (currentStep) {
      case 1: return <StepSelectProduct product={selectedProduct} onNext={nextStep} user={user} />;
      case 2: return <StepAddToCart cart={cart} product={selectedProduct} onNext={nextStep} onPrev={prevStep} subtotal={subtotal} gst={gst} total={total} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />;
      case 3: return <StepEnterDetails formData={formData} setFormData={setFormData} onNext={nextStep} onPrev={prevStep} />;
      case 4: return <StepCheckout subtotal={subtotal} gst={gst} total={total} onNext={nextStep} onPrev={prevStep} cart={cart} />;
      case 5: return <StepPayment total={total} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} onNext={() => { 
        setCompletedOrder({
          items: [...cart],
          subtotal,
          gst,
          total,
          formData: {...formData}
        });
        clearCart(); 
        nextStep(); 
      }} onPrev={prevStep} />;
      case 6: return <StepPaymentSuccess total={completedOrder?.total || total} onNext={nextStep} />;
      case 7: return <StepOrderConfirmation total={completedOrder?.total || total} formData={completedOrder?.formData || formData} onNext={nextStep} />;
      case 8: return <StepInvoice 
        cart={completedOrder?.items || []} 
        total={completedOrder?.total || 0} 
        subtotal={completedOrder?.subtotal || 0} 
        gst={completedOrder?.gst || 0} 
        formData={completedOrder?.formData || formData} 
      />;
      default: return null;
    }
  };

  return (
    <div style={{ background: '#fdfcf8', minHeight: '100vh', padding: '120px 0 80px' }}>
      <div className="container">
        {/* Header Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <div className="badge-item"><Award size={20} /> BIS Hallmarked</div>
          <div className="badge-item"><Truck size={20} /> Free Insured Shipping</div>
          <div className="badge-item"><RefreshCcw size={20} /> Lifetime Exchange</div>
        </div>

        {/* Title */}
        <h1 style={{ textAlign: 'center', color: 'var(--gold)', fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 400 }}>
          Payment Flow
        </h1>

        {/* Stepper */}
        <div className="stepper-container">
          {steps.map((step) => (
            <div key={step.id} className={`step-item ${currentStep >= step.id ? 'active' : ''}`}>
              <div className="step-number">{step.id}</div>
              <div className="step-label">{step.label}</div>
              {step.id < 8 && <div className="step-line" />}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Badges */}
        <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.7, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.85rem' }}>
            <ShieldCheck size={24} color="var(--gold)" />
            <div>
              <strong>Secure & Encrypted Payments</strong><br/>
              Your transactions are 100% safe with us.
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.85rem' }}>
            <Phone size={24} color="var(--gold)" />
            <div>
              <strong>Need Help?</strong><br/>
              +91 98765 43210 | support@srikalyani.com
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.85rem' }}>
            <RefreshCcw size={24} color="var(--gold)" />
            <div>
              <strong>Easy Returns & Exchange</strong><br/>
              As per our return policy.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .badge-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--gold);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .stepper-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5rem;
          position: relative;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }
        .step-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #fff;
          color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
          border: 2px solid #eee;
          transition: var(--transition);
        }
        .step-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #aaa;
          font-weight: 600;
          text-align: center;
          max-width: 80px;
          line-height: 1.4;
        }
        .step-line {
          position: absolute;
          top: 18px;
          left: 50%;
          width: 100%;
          height: 1px;
          background: #eee;
          z-index: -1;
        }
        .step-item.active .step-number {
          background: var(--gold);
          color: white;
          border-color: var(--gold);
          box-shadow: 0 8px 16px rgba(96, 40, 54, 0.2);
        }
        .step-item.active .step-label {
          color: var(--gold);
        }
        .step-item.active .step-line {
          background: var(--gold);
          opacity: 0.2;
        }
        
        .flow-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.04);
          border-radius: 8px;
          padding: 3.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .flow-card-title {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-size: 1.6rem;
          color: var(--gold);
          margin-bottom: 3rem;
          font-weight: 500;
        }
        .step-tag {
          background: var(--gold);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .summary-card {
          background: #fdfcf8;
          padding: 2.5rem;
          border-radius: 8px;
          border: 1px solid rgba(186, 139, 45, 0.1);
        }
        .checkout-input {
          width: 100%;
          padding: 1.2rem;
          border: 1px solid #eee;
          border-radius: 4px;
          outline: none;
          font-family: inherit;
          font-size: 0.9rem;
          transition: var(--transition);
        }
        .checkout-input:focus {
          border-color: var(--gold);
          background: rgba(96, 40, 54, 0.01);
        }
      `}</style>
    </div>
  );
};

// Sub-components for Steps with refined UI
const StepSelectProduct = ({ product, onNext, user }) => (
  <div className="flow-card">
    <div className="flow-card-title">
      <div className="step-tag">1</div> {product ? 'Review Product' : 'Select Product'}
    </div>
    {product ? (
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem' }}>
        <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '450px' }}>
          <img src={product?.image} alt={product?.name} style={{ width: '100%', height: 'auto', borderRadius: '4px', mixBlendMode: 'multiply' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            {product?.category}
          </span>
          <h3 style={{ fontSize: '2.2rem', color: 'var(--cream)', marginBottom: '1rem', lineHeight: 1.2 }}>{product?.name}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', fontWeight: 300 }}>22KT Hallmarked Gold | Certified Diamonds</p>
          
          <div style={{ fontSize: '2.5rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '2.5rem', fontFamily: 'Lexend' }}>
            ₹{product?.price.toLocaleString()}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            <div className="summary-card" style={{ padding: '1.2rem' }}>
              <div style={{ fontSize: '0.6rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Gold Weight</div>
              <div style={{ fontWeight: 500, color: 'var(--cream)' }}>{product?.weight || '15.250 g'}</div>
            </div>
            <div className="summary-card" style={{ padding: '1.2rem' }}>
              <div style={{ fontSize: '0.6rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Making Charges</div>
              <div style={{ fontWeight: 500, color: 'var(--cream)' }}>₹{product?.making.toLocaleString()}</div>
            </div>
          </div>

          <button onClick={onNext} className="btn btn-primary" style={{ width: '100%', padding: '1.4rem', gap: '1.2rem', fontSize: '0.85rem' }}>
            {user ? (
              <><ShoppingBag size={20} /> PROCEED TO CART</>
            ) : (
              <><User size={20} /> SIGN IN TO PURCHASE</>
            )}
          </button>
        </div>
      </div>
    ) : (
      <div style={{ textAlign: 'center', padding: '5rem' }}>
        <ShoppingBag size={64} style={{ opacity: 0.2, marginBottom: '2rem' }} />
        <p>Your cart is empty. Please select a masterpiece to begin.</p>
        <button onClick={() => window.location.href='/#products'} className="btn btn-outline" style={{ marginTop: '2rem' }}>BROWSE PRODUCTS</button>
      </div>
    )}
  </div>
);

const StepAddToCart = ({ cart, onNext, subtotal, gst, total, removeFromCart, updateQuantity }) => (
  <div className="flow-card">
    <div className="flow-card-title">
      <div className="step-tag">2</div> Shopping Cart
    </div>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {cart.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center', padding: '3rem' }}>No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={{ border: '1px solid #f0f0f0', padding: '1.5rem', borderRadius: '8px', display: 'flex', gap: '1.5rem', alignItems: 'center', background: '#fafafa' }}>
              <div style={{ width: '100px', height: '100px', background: 'white', padding: '0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--cream)' }}>{item.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.category}</p>
                <div style={{ color: 'var(--gold)', fontWeight: 600, marginTop: '0.5rem' }}>₹{item.price.toLocaleString()}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={{ width: '28px', height: '28px', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer' }}
                ><Minus size={14} /></button>
                <span style={{ fontWeight: 600, width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={{ width: '28px', height: '28px', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer' }}
                ><Plus size={14} /></button>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', transition: '0.3s' }} 
                onMouseOver={e => e.currentTarget.style.color = '#ff4d4f'} 
                onMouseOut={e => e.currentTarget.style.color = '#ccc'}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="summary-card">
        <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 500, color: 'var(--gold)' }}>Order Summary</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
            <span style={{ color: '#888' }}>Subtotal ({cart.length} items)</span>
            <span style={{ fontWeight: 500 }}>₹{subtotal.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
            <span style={{ color: '#888' }}>Estimated GST (3%)</span>
            <span style={{ fontWeight: 500 }}>₹{gst.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '1.5rem', marginTop: '1rem', fontWeight: 600, fontSize: '1.4rem' }}>
            <span>Grand Total</span>
            <span style={{ color: 'var(--gold)' }}>₹{total.toLocaleString()}</span>
          </div>
        </div>
        <button onClick={onNext} disabled={cart.length === 0} className="btn btn-primary" style={{ width: '100%', marginTop: '3rem', padding: '1.4rem', fontSize: '0.85rem' }}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  </div>
);

const StepEnterDetails = ({ formData, setFormData, onNext }) => (
  <div className="flow-card">
    <div className="flow-card-title">
      <div className="step-tag">3</div> Customer Details
    </div>
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
        <div className="input-group-flow">
          <User size={18} className="icon" />
          <input 
            type="text" 
            placeholder="Full Name" 
            className="checkout-input"
            value={formData.fullName}
            onChange={e => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div className="input-group-flow">
          <Phone size={18} className="icon" />
          <input 
            type="text" 
            placeholder="Mobile Number" 
            className="checkout-input"
            value={formData.mobileNumber}
            onChange={e => setFormData({...formData, mobileNumber: e.target.value})}
          />
        </div>
        <div className="input-group-flow">
          <Mail size={18} className="icon" />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="checkout-input"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="input-group-flow">
          <MapPin size={18} className="icon" style={{ alignSelf: 'flex-start', marginTop: '1.2rem' }} />
          <textarea 
            placeholder="Detailed Delivery Address" 
            rows="4"
            className="checkout-input"
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
            style={{ paddingLeft: '3.5rem', lineHeight: 1.6 }}
          />
        </div>
        <button onClick={onNext} className="btn btn-primary" style={{ padding: '1.4rem', marginTop: '1rem', fontSize: '0.85rem' }}>
          CONFIRM DETAILS
        </button>
      </div>
    </div>
  </div>
);

const StepCheckout = ({ subtotal, gst, total, onNext, cart }) => (
  <div className="flow-card">
    <div className="flow-card-title">
      <div className="step-tag">4</div> Final Review
    </div>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Order Items</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--cream)' }}>
              <span>{item.name} x {item.quantity}</span>
              <span style={{ fontWeight: 600 }}>₹{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#fdfcf8', padding: '3rem', borderRadius: '8px', border: '1px solid rgba(186, 139, 45, 0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#777' }}>Subtotal</span>
          <span style={{ fontWeight: 500 }}>₹{subtotal.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#777' }}>GST (3%)</span>
          <span style={{ fontWeight: 500 }}>₹{gst.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem', marginTop: '1rem' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>Total Amount</span>
          <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)' }}>₹{total.toLocaleString()}</span>
        </div>
        <button onClick={onNext} className="btn btn-primary" style={{ marginTop: '1.5rem', padding: '1.4rem', fontSize: '0.85rem' }}>
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  </div>
);

const StepPayment = ({ total, paymentMethod, setPaymentMethod, onNext }) => (
  <div className="flow-card">
    <div className="flow-card-title">
      <div className="step-tag">5</div> Secure Payment
    </div>
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '4rem' }}>
        {[
          { id: 'upi', label: 'UPI (GPay, PhonePe, Paytm)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png' },
          { id: 'card', label: 'Credit / Debit Card (Visa, Master)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' },
          { id: 'net', label: 'Net Banking', logo: null }
        ].map((method) => (
          <div 
            key={method.id} 
            onClick={() => setPaymentMethod(method.id)}
            style={{ 
              padding: '1.5rem', 
              border: '1px solid #eee', 
              borderRadius: '8px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              cursor: 'pointer',
              background: paymentMethod === method.id ? 'rgba(96, 40, 54, 0.03)' : 'white',
              borderColor: paymentMethod === method.id ? 'var(--gold)' : '#eee'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {paymentMethod === method.id && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--gold)' }} />}
              </div>
              <span style={{ fontWeight: 500 }}>{method.label}</span>
            </div>
            {method.logo && <img src={method.logo} style={{ height: '18px' }} alt="" />}
          </div>
        ))}
      </div>
      <button onClick={onNext} className="btn btn-primary" style={{ width: '100%', padding: '1.4rem', fontSize: '0.85rem' }}>
        COMPLETE PAYMENT (₹{total.toLocaleString()})
      </button>
    </div>
  </div>
);

const StepPaymentSuccess = ({ total, onNext }) => (
  <div className="flow-card" style={{ textAlign: 'center', padding: '6rem 3rem' }}>
    <div style={{ background: 'rgba(34, 197, 94, 0.1)', width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3rem' }}>
      <CheckCircle size={70} color="#22c55e" />
    </div>
    <h2 style={{ fontSize: '3rem', color: '#22c55e', marginBottom: '1.5rem', fontWeight: 500 }}>Order Placed!</h2>
    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '4rem', fontWeight: 300 }}>
      Payment of <strong>₹{total.toLocaleString()}</strong> successful.
    </p>
    <button onClick={onNext} className="btn btn-primary" style={{ padding: '1.2rem 4rem' }}>VIEW CONFIRMATION</button>
  </div>
);

const StepOrderConfirmation = ({ total, formData, onNext }) => (
  <div className="flow-card" style={{ textAlign: 'center', padding: '5rem 3rem' }}>
    <div style={{ background: '#fdfcf8', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2.5rem' }}>
      <ShoppingBag size={54} color="var(--gold)" />
    </div>
    <h2 style={{ fontSize: '2.4rem', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 500 }}>Success!</h2>
    <p style={{ color: '#888', marginBottom: '4rem' }}>Your legacy selection is confirmed.</p>
    <button onClick={onNext} className="btn btn-primary" style={{ width: '100%', maxWidth: '550px', padding: '1.4rem' }}>DOWNLOAD TAX INVOICE</button>
  </div>
);

const StepInvoice = ({ cart, total, subtotal, gst, formData }) => (
  <div className="flow-card" style={{ padding: '4rem' }}>
    <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '8px', padding: '5rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'var(--gold)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6rem' }}>
        <div>
          <h2 style={{ color: 'var(--gold)', fontSize: '1.8rem' }}>SRI KALYANI</h2>
          <div style={{ color: 'var(--gold-light)', fontSize: '0.75rem', letterSpacing: '0.3em' }}>JEWELLERY MART</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 500 }}>Tax Invoice</h3>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginBottom: '6rem' }}>
        <div style={{ fontSize: '0.9rem' }}>
          <div>Invoice No: <strong>INV-2024-100245</strong></div>
          <div>Date: <strong>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.9rem' }}>
          <div style={{ color: '#aaa', textTransform: 'uppercase', fontSize: '0.7rem' }}>Billed To</div>
          <div style={{ fontWeight: 600 }}>{formData.fullName}</div>
          <div style={{ color: '#777' }}>{formData.address}</div>
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '5rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #f9f9f9', textAlign: 'left' }}>
            <th style={{ padding: '1.5rem 0', color: '#aaa' }}>Product</th>
            <th style={{ padding: '1.5rem 0', color: '#aaa', textAlign: 'right' }}>Qty</th>
            <th style={{ padding: '1.5rem 0', color: '#aaa', textAlign: 'right' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
              <td style={{ padding: '1.5rem 0' }}>{item.name}</td>
              <td style={{ padding: '1.5rem 0', textAlign: 'right' }}>{item.quantity}</td>
              <td style={{ padding: '1.5rem 0', textAlign: 'right' }}>₹{(item.price * item.quantity).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ maxWidth: '350px', marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>GST (3%)</span>
          <span>₹{gst.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid var(--gold)', paddingTop: '2rem', marginTop: '1rem', fontSize: '1.4rem', fontWeight: 700 }}>
          <span>Total Paid</span>
          <span style={{ color: 'var(--gold)' }}>₹{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
      <button className="btn btn-outline" style={{ flex: 1, padding: '1.4rem' }}><Download size={20} /> DOWNLOAD PDF</button>
      <button className="btn btn-primary" style={{ flex: 1, padding: '1.4rem' }}><FileText size={20} /> PRINT RECEIPT</button>
    </div>
  </div>
);

export default PaymentFlow;
