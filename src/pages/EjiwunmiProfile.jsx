import React, { useState } from 'react';
import images from '../constants/images'; 
import ejiwunmiCV from '../assets/ejiwunmi.pdf'; // Correctly import the PDF
import { FiDownload, FiBriefcase, FiAward, FiBookOpen, FiStar, FiShield, FiUsers } from 'react-icons/fi';

// --- Data Extracted and Organized ---
const profileData = {
  name: "Olubukunola Atinuke Ejiwunmi",
  titles: "FNIA, PPNIA",
  tagline: "Architect | Public Sector Leader | Project Manager | Trailblazer",
  bio: "A pioneering Nigerian architect whose illustrious career has spanned over five decades. Born in Lagos with Osun State heritage, she has consistently broken new ground as a female leader in a traditionally male-dominated profession.",
  about: {
    education: {
      title: "Education & Early Career",
      icon: <FiBookOpen className="text-sky-500" />,
      content: "Arc. Ejiwunmi earned her B.Sc. and M.Sc. in Architecture from Ahmadu Bello University, Zaria, graduating in 1974 as the only woman in her class. Her formative years included working in Oxford, UK, and at the renowned Modulor Group of Architects. She later rose to become Head of Department at Lagos State Polytechnic before co-founding Noark Consult in 1981."
    },
    publicService: {
      title: "Public Sector Impact",
      icon: <FiShield className="text-sky-500" />,
      content: "Serving the Lagos State Government from 1985 to 2005, she culminated her public service career as Permanent Secretary in three key ministries: Transportation, Housing, and Physical Planning & Urban Development. She contributed to the execution of hundreds of infrastructure projects over a 20-year span."
    },
    leadership: {
      title: "Leadership in the Profession",
      icon: <FiUsers className="text-sky-500" />,
      content: "She made history as the first female President of the Nigerian Institute of Architects (2001–2003) and the founding Chairperson of the Female Architects of Nigeria (FAN). A Fellow of the NIA, her legacy includes championing inclusion, mentorship, and establishing the Architects' Benevolent Fund."
    }
  },
  projects: [
    "Satellite campuses and facilities for Lagos State Polytechnic",
    "Broadcasting Corporation Complex, Lagos",
    "State Printing Corporation Press, Lagos",
    "Fire Stations: Agege, Epe, Ikorodu, Isolo",
    "General Hospital Wards: Ikorodu and Epe",
    "Jubilee Low-Income Housing: Ikeja, Ajah, Ojokoro, Ikorodu, Epe",
    "5 Model Colleges across Lagos",
    "Lagos State Liaison Office and Government Lodges in Abuja and Ikeja",
    "Redesign of All Souls Anglican Church, Ilupeju",
    "Numerous church, educational, and institutional buildings across Nigeria"
  ],
  awards: [
    "First Lady National President Award – NIA",
    "ARCON Award of Meritorious Service",
    "Lagos State Government Award for Exemplary Public Service",
    "FAN First Chairperson Award",
    "Episcopal Awards from the Anglican Communion",
    "Association of Housing Corporations of Nigeria – Award of Excellence"
  ],
  legacy: {
    title: "Legacy",
    icon: <FiStar className="text-sky-500" />,
    content: "Arc. (Mrs.) Ejiwunmi's legacy is defined by her pioneering spirit, deep commitment to architecture, and her unwavering service to both society and the profession. She is revered as an icon in Nigerian architecture—a bridge-builder, role model, and servant-leader whose life and work continue to inspire generations of architects, particularly women."
  }
};

// --- Helper Component for Cleanliness ---
const Section = ({ title, icon, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      {icon}
      <span className="ml-3">{title}</span>
    </h3>
    <div className="border-l-4 border-sky-500 pl-4 space-y-4 text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Main Profile Component ---
const EjiwunmiProfile = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return (
          <div className='animate-fadeIn'>
            <Section title="Key Projects" icon={<FiBriefcase className="text-sky-500" />}>
              <ul className="list-disc list-inside space-y-2">
                {profileData.projects.map((proj, index) => <li key={index}>{proj}</li>)}
              </ul>
            </Section>
          </div>
        );
      case 'Awards & Legacy':
        return (
          <div className='animate-fadeIn space-y-8'>
             <Section title="Awards & Recognition" icon={<FiAward className="text-sky-500" />}>
                <ul className="list-disc list-inside space-y-2">
                    {profileData.awards.map((award, index) => <li key={index}>{award}</li>)}
                </ul>
            </Section>
            <Section title={profileData.legacy.title} icon={profileData.legacy.icon}>
              <p className="italic">{profileData.legacy.content}</p>
            </Section>
          </div>
        );
      case 'About':
      default:
        return (
          <div className='animate-fadeIn space-y-8'>
            <Section title={profileData.about.education.title} icon={profileData.about.education.icon}>
              <p>{profileData.about.education.content}</p>
            </Section>
            <Section title={profileData.about.publicService.title} icon={profileData.about.publicService.icon}>
              <p>{profileData.about.publicService.content}</p>
            </Section>
             <Section title={profileData.about.leadership.title} icon={profileData.about.leadership.icon}>
              <p>{profileData.about.leadership.content}</p>
            </Section>
          </div>
        );
    }
  };

  const tabs = ['About', 'Projects', 'Awards & Legacy'];

  return (
    <div className="bg-gray-100 min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* === Hero Section === */}
        <div className="bg-gradient-to-br from-sky-50 via-sky-100 to-blue-100 p-8 md:p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative h-64 w-64 mx-auto md:mx-0 col-span-1 flex items-center justify-center">
                    <img 
                        src={images.eji2}
                        alt="Arc. Ejiwunmi" 
                        className="absolute h-52 w-52 rounded-full object-cover opacity-80 transform -translate-x-8 -translate-y-4 -rotate-12"
                    />
                    <img 
                        src={images.eji1}
                        alt="Arc. Ejiwunmi Profile" 
                        className="relative h-56 w-56 rounded-full object-cover shadow-2xl ring-4 ring-white"
                    />
                </div>
                <div className="text-gray-800 text-center md:text-left col-span-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Arc. (Mrs.) {profileData.name}</h1>
                    <p className="text-xl text-sky-600 mt-2">{profileData.titles}</p>
                    <p className="mt-4 text-gray-600 max-w-2xl">{profileData.bio}</p>
                    <a 
                        href={ejiwunmiCV}
                        download
                        className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-100 focus:ring-sky-500 transition-transform transform hover:scale-105"
                    >
                        <FiDownload className="-ml-1 mr-3 h-5 w-5" />
                        Download CV
                    </a>
                </div>
            </div>
        </div>

        {/* === Tabs & Content Section === */}
        <div className="p-8 md:p-12">
            <div className="mb-8 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${
                            activeTab === tab
                            ? 'border-sky-500 text-sky-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors focus:outline-none`}
                    >
                    {tab}
                    </button>
                ))}
                </nav>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EjiwunmiProfile;