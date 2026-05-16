import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import AutoSlider from '../components/AutoSlider';
import ProductCategories from '../components/ProductCategories';
import ProductShowcase from '../components/ProductShowcase';
import TrendingNow from '../components/TrendingNow';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import TermsAndPrivacy from '../components/TermsAndPrivacy';
import EnrollmentForm from '../components/EnrollmentForm';
import AboutUs from '../components/AboutUs';
import SacredSilver from '../components/SacredSilver';
import VideoShowcase from '../components/VideoShowcase';

const Home = ({ setActiveSection }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <>
      <AutoSlider />
      <Hero />
      <VideoShowcase />
      <ProductCategories />
      <ProductShowcase />
      <TrendingNow />
      <SacredSilver />
      <Features />
      <HowItWorks />
      <EnrollmentForm />
      <AboutUs />
      <TermsAndPrivacy />
    </>
  );
};

export default Home;
