// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutSection />
    </div>
  );
}
