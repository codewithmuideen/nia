import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Landing page sections
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import NIALeadership from './components/NIALeadership';
import StatsBar from './components/StatsBar';
import LatestNews from './components/LatestNews';
import AffiliationsSection from './components/AffiliationsSection';
import FAQSection from './components/FAQSection';

// Pages
import Contact from './pages/Contact';
import JoinNiaPage from './pages/JoinNiaPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import DonationItems from './components/DonationItems';
import ChairmanAddress from './components/ChairmanAddress';
import SponsorshipSection from './components/SponsorshipSection';
import ArchitectsDirectoryPage from './directory/ArchitectsDirectoryPage';
import FirmsResident from './directory/FirmsResident';
import OlabodeProfile from './pages/OlabodeProfile';
import EjiwunmiProfile from './pages/EjiwunmiProfile';
import AboutUs from './pages/AboutUs';
import History from './pages/History';
import NiaPage from './pages/NiaPage';
import ExcosPage from './pages/ExcosPage';
import Newsletter from './components/Newsletter';
import FAQPage from './pages/FAQPage';
import ContactUsPage from './pages/ContactUsPage';
import OsasonaProfile from './pages/OsasonaProfile';
import RegisterArchitect from './pages/RegisterArchitect';
import ArchitectureSchoolsOsun from './pages/ArchitectureSchoolsOsun';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <AboutSection />
              <ChairmanAddress />
              <NIALeadership />
              <StatsBar />
              <LatestNews />
              <SponsorshipSection />
              <AffiliationsSection />
              <DonationItems />
              <FAQSection />
              <Newsletter />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/member" element={<JoinNiaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/directory/architects-outside-osun-state" element={<ArchitectsDirectoryPage />} />
        <Route path="//directory/professors" element={<FirmsResident />} />
        <Route path="/pages/olabode-jegede/" element={<OlabodeProfile />} />
        <Route path="/pages/atinuke-ejiwumi/" element={<EjiwunmiProfile />} />
        <Route path="/pages/ososona-profile/" element={<OsasonaProfile />} />
        <Route path="/about-nia-osun/" element={<AboutUs />} />
        <Route path="/nia-osun-history/" element={<History />} />
        <Route path="/about-nia/" element={<NiaPage />} />
        <Route path="/chairman-address/" element={<ChairmanAddress />} />
        <Route path="/excos/" element={<ExcosPage />} />
        <Route path="/faqs/" element={<FAQPage />} />
        <Route path="/contact/" element={<ContactUsPage />} />
        <Route path="/directory/architects" element={<RegisterArchitect />} />
        <Route path="/directory/schools" element={<ArchitectureSchoolsOsun />} />
       
      
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}
