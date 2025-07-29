// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import NIALeadership from './components/NIALeadership';
import StatsBar from './components/StatsBar';
import LatestNews from './components/LatestNews';
import AffiliationsSection from './components/AffiliationsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <NIALeadership />
      <StatsBar />
      <LatestNews />
      <AffiliationsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
