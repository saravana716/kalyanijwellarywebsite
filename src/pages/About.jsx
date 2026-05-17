import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, ShieldCheck, Sparkles, Gem, Users, History, Award } from 'lucide-react';
import logo from '../assets/logo_new.png';
import videoSrc from '../assets/video.mp4';
import bannerImg from '../assets/banner.jpeg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Trust & Transparency",
      desc: "Building long-term relationships through honesty, purity assurance, and ethical business practices."
    },
    {
      icon: <Award size={32} />,
      title: "Quality Craftsmanship",
      desc: "Every jewellery piece is crafted with attention to detail, elegance, and perfection."
    },
    {
      icon: <Heart size={32} />,
      title: "Customer Commitment",
      desc: "Customer happiness and satisfaction are at the heart of everything we do."
    },
    {
      icon: <History size={32} />,
      title: "Tradition & Innovation",
      desc: "We respect traditional artistry while embracing modern designs and trends."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Excellence",
      desc: "We continuously strive to deliver excellence in quality, service, and experience."
    },
    {
      icon: <Users size={32} />,
      title: "Integrity",
      desc: "We conduct our business with responsibility, fairness, and professionalism."
    }
  ];

  const missionPoints = [
    "Elegant and trendy jewellery collections",
    "Trusted quality and purity assurance",
    "Affordable pricing with premium craftsmanship",
    "Personalized customer service",
    "Designs for weddings, festivals, and daily wear"
  ];

  return (
    <div style={{ background: '#fdfcf8', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '70vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000'
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: 0.6 
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
          zIndex: 1
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            src={logo} 
            alt="Sri Kalyani Logo" 
            style={{ height: '120px', marginBottom: '2rem', filter: 'brightness(0) invert(1)' }} 
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', fontWeight: 300, letterSpacing: '0.1em' }}
          >
            About <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Sri Kalyani</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="section-title" style={{ fontSize: '2.8rem', color: 'var(--cream)', marginBottom: '2rem' }}>
                Where Tradition Meets <br /><em>Timeless Elegance</em>
              </h2>
              <div style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Welcome to Sri Kalyani Jewellery — where tradition meets timeless elegance. 
                  We are dedicated to crafting and offering exquisite jewellery collections that celebrate 
                  culture, beauty, and every special moment in life.
                </p>
                <p>
                  With a passion for quality and craftsmanship, Sri Kalyani Jewellery brings you a wide range of gold, silver, diamond, and traditional jewellery designs that blend heritage with modern style. Every ornament is carefully selected and designed to reflect trust, purity, and sophistication.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ 
                position: 'absolute', 
                inset: '-20px', 
                border: '1px solid var(--gold)', 
                opacity: 0.2, 
                zIndex: -1,
                transform: 'rotate(-3deg)'
              }} />
              <img src={bannerImg} alt="Jewellery Showcase" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: '8rem 0', background: 'var(--dark-2)', color: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '4rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}
            >
              <Target size={48} color="var(--gold)" style={{ marginBottom: '2rem' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--gold)', fontWeight: 400 }}>Our <br /><em>Vision</em></h2>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, opacity: 0.9 }}>
                To become a trusted and leading jewellery brand known for elegance, purity, innovation, and customer satisfaction while preserving the beauty of traditional craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass"
              style={{ padding: '4rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}
            >
              <Gem size={48} color="var(--gold)" style={{ marginBottom: '2rem' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--gold)', fontWeight: 400 }}>Our <br /><em>Mission</em></h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "To provide high-quality and beautifully crafted jewellery at affordable prices",
                  "To deliver exceptional customer service with honesty and trust",
                  "To create jewellery collections that blend tradition with modern trends",
                  "To make every special occasion memorable with timeless designs",
                  "To maintain the highest standards of purity, craftsmanship, and value"
                ].map((text, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', opacity: 0.9, lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>•</span>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="section-label">Our Core Pillars</span>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>Our <em>Values</em></h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '3rem',
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid rgba(186, 139, 45, 0.1)',
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(186, 139, 45, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '1.5rem' }}>{value.icon}</div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '1rem', fontWeight: 500 }}>{value.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ padding: '8rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-grid">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title" style={{ fontSize: '2.5rem', color: 'var(--cream)', marginBottom: '2.5rem' }}>
                Crafting Your <br /><em>Emotions</em>
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                At Sri Kalyani Jewellery, we believe jewellery is more than an accessory — it is a symbol of emotion, tradition, and cherished memories passed from generation to generation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {missionPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(186, 139, 45, 0.1)', padding: '0.4rem', borderRadius: '50%', color: 'var(--gold)' }}>
                      <Sparkles size={16} />
                    </div>
                    <span style={{ fontSize: '1rem', color: '#444', fontWeight: 500 }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', padding: '4rem', background: 'rgba(186, 139, 45, 0.03)', borderRadius: '20px' }}
            >
              <p style={{ fontSize: '1.4rem', color: 'var(--cream)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '2rem' }}>
                "We thank our customers for being a part of our journey and for trusting us to be a part of their precious moments."
              </p>
              <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: '0 auto' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 968px) {
          .about-grid, .mission-vision-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
