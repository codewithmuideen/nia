import React, { useState } from 'react';
import images from '../constants/images'; // As per your specified import path
import { FiDownload, FiBriefcase, FiHome, FiAward, FiBookOpen, FiStar, FiGlobe, FiEye } from 'react-icons/fi';
import jegede from '../assets/jegede-oladode.pdf';
import project from '../assets/current-project.pdf';
// --- Data Extracted from CV ---

const profileData = {
  name: "Olabode Olusesan Jegede",
  titles: "Ph.D. (Arch), FNIA, FOSHA",
  bio: "A distinguished architect who graduated from the Federal University of Technology Minna. After a year at Obafemi Awolowo University, he worked with premier practices like Allied Architects and Modulor Group Architects. In 2005, he founded ARCHIWORTH ASSOCIATES. He holds a Ph.D. in Architecture, focusing on Indigenous Ornamentation in Branding Residential Architecture in Southwest, Nigeria.",
  education: [
    { degree: "Ph.D. (Architecture)", date: "25th October 2023", university: "University of Lagos, Nigeria" },
    { degree: "M. Tech. (Architecture)", date: "28th May 1997", university: "Federal Univ. of Technology, Minna, Nigeria" },
    { degree: "B. Tech. (Architecture)", date: "25th October 1995", university: "Federal Univ. of Technology, Minna, Nigeria" },
  ],
  memberships: [
    { name: "Architects Registration Council of Nigeria (ARCON)", detail: "Full Registration No: F/2174" },
    { name: "Nigerian Institute of Architects (NIA)", detail: "Fellow, Membership No: F723" },
    { name: "Occupational Safety and Health Association UK (OSHA)", detail: "Fellow, Membership No: 3737" },
    { name: "International Council on Monuments and Sites (ICOMOS-Nigeria)", detail: "Membership No: NGA 44126" },
  ],
  languages: [
    { lang: "English", speaking: "Good", reading: "Excellent", writing: "Excellent" },
    { lang: "Yoruba", speaking: "Excellent", reading: "Excellent", writing: "Good" },
  ],
  projects: {
    residential: [
      "Project Architect for NIGER TOWERS, UPDC Luxury Apartments, Ikoyi (2002-2005)",
      "Afribank Estate, Iri-ebe, Port Harcourt Phase Two development",
      "TA Lagbaja Residence, Ilobu, Osun State",
      "Ule-Ona Residency, Osogbo",
      "Various Country homes around the country",
    ],
    commercial: [
      "Remodelling of Shopping Plaza, Osogbo/Gbongan Expressway (2022/2023)",
      "Corporate Head Office for Nigeria Publishers Association, Ibadan (2021)",
      "Corporate Head Office for CIBN Lagos branch, Ebute Metta (2022)",
      "Laboratories complex for NNMDA, Victoria Island, Lagos (2020)",
      "Independent Project Manager for 30 Central Medical Stores for NACA (2012)",
      "Pension Alliance Limited, Corporate Head office, Victoria Island (2017)",
      "UAC Food Bread Factories in Port Harcourt & Suleja (2001)",
      "Hotel Bellisimo Lekki, Phase II development (2007)",
      "Several Mr. Biggs Restaurant Outlets in Nigeria and Ghana (over 50 locations)",
    ],
    institutional: [
        "Student Hostel for FUT Minna permanent site, Katacregi, Niger State.",
        "Occupational Therapy Unit for UCH, Ibadan",
        "Corona Schools Boys Hostel at Agbara, Ogun State.",
        "Bowen University Iwo; Master plan development",
        "Obalende Primary School (Winning entry for a UK govt sponsored design competition, 2005)",
        "Toriah Hall of Residence, Osun State University, Osogbo (2018)",
    ],
  },
  philosophy: [
    "Believes in the totality of Architecture and its relevance to society at every scale.",
    "Advocates for Urban Renewal, Energy Conservation, and Green Sustainable Architecture.",
    "Committed to integrating Indigenous Art and Architectural forms into Contemporary Architecture to define a tropical, traditional identity.",
    "Enjoys cross-fertilization of emerging ideas through active participation in national and international events.",
    "His Ph.D. research objective was to filter out the Cultural Genetic Code of the people’s ornaments.",
    "Currently constructing Ule-Ona (House of Ornament) in Osogbo, a functional space for cultural architecture.",
  ]
};

// --- Helper Components for Cleanliness ---

const Section = ({ title, icon, children }) => (
  <div className="mb-8" style={{ fontFamily: 'Montserrat' }}>
    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
      {icon}
      <span className="ml-3">{title}</span>
    </h3>
    <div className="border-l-4 border-blue-500 pl-4 space-y-4 text-gray-600">
      {children}
    </div>
  </div>
);

const ProjectList = ({ title, projects, icon }) => (
    <div className="mb-6" style={{ fontFamily: 'Montserrat' }}>
        <h4 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">{icon}<span className='ml-2'>{title}</span></h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            {projects.map((proj, index) => <li key={index}>{proj}</li>)}
        </ul>
    </div>
);


// --- Main Profile Component ---

const OlabodeProfile = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return (
            <div className='animate-fadeIn' style={{ fontFamily: 'Montserrat' }}>
                <ProjectList title="Commercial & Industrial" projects={profileData.projects.commercial} icon={<FiBriefcase className="text-blue-500" />} />
                <ProjectList title="Residential" projects={profileData.projects.residential} icon={<FiHome className="text-blue-500" />} />
                <ProjectList title="Institutional" projects={profileData.projects.institutional} icon={<FiAward className="text-blue-500" />} />
            </div>
        );
      case 'Philosophy':
        return (
            <div className='animate-fadeIn' style={{ fontFamily: 'Montserrat' }}>
                 <Section title="Architectural Philosophy" icon={<FiEye className="text-blue-500" />}>
                    <ul className="list-none space-y-3">
                        {profileData.philosophy.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <FiStar className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        );
      case 'About':
      default:
        return (
            <div className='animate-fadeIn space-y-8' style={{ fontFamily: 'Montserrat' }}>
                <Section title="Education" icon={<FiBookOpen className="text-blue-500" />}>
                    {profileData.education.map((edu, index) => (
                        <div key={index}>
                            <p className="font-semibold text-gray-700">{edu.degree}</p>
                            <p className="text-sm">{edu.university} - {edu.date}</p>
                        </div>
                    ))}
                </Section>
                <Section title="Professional Memberships" icon={<FiAward className="text-blue-500" />} style={{ fontFamily: 'Montserrat' }}>
                    {profileData.memberships.map((mem, index) => (
                        <div key={index}>
                            <p className="font-semibold text-gray-700">{mem.name}</p>
                            <p className="text-sm">{mem.detail}</p>
                        </div>
                    ))}
                </Section>
                 <Section title="Languages" icon={<FiGlobe className="text-blue-500" />} style={{ fontFamily: 'Montserrat' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {profileData.languages.map((lang, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                <p className="font-semibold text-gray-700">{lang.lang}</p>
                                <ul className="text-sm list-inside list-disc">
                                    <li>Speaking: {lang.speaking}</li>
                                    <li>Reading: {lang.reading}</li>
                                    <li>Writing: {lang.writing}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        );
    }
  };

  const tabs = ['About', 'Projects', 'Philosophy'];

  return (
    <div className="bg-gray-100 min-h-screen font-sans p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* --- Hero Section --- */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black p-8 md:p-12 relative" style={{ fontFamily: 'Montserrat' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative h-64 w-64 mx-auto md:mx-0 col-span-1 flex items-center justify-center">
                    <img 
                        src={images.bode} // The background image
                        alt="Olabode Jegede" 
                        className="absolute h-56 w-56 rounded-full object-cover opacity-70 transform translate-x-4 translate-y-4"
                        style={{width: '224px', height: '224px'}}
                    />
                    <img 
                        src={images.bode} // The main image
                        alt="Olabode Jegede Profile" 
                        className="relative h-60 w-60 rounded-full object-cover shadow-2xl ring-4 ring-white"
                        style={{width: '240px', height: '240px'}}
                    />
                </div>
                <div className="text-white text-center md:text-left col-span-2" style={{ fontFamily: 'Montserrat' }}>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Arc. (Dr.) {profileData.name}</h1>
                    <p className="text-xl text-blue-300 mt-2">{profileData.titles}</p>
                    <p className="mt-4 text-gray-300 max-w-2xl">{profileData.bio}</p>
                   <div className="mt-6 flex flex-wrap gap-4">
  <a 
    href={jegede}
    download
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform transform hover:scale-105"
  >
    <FiDownload className="-ml-1 mr-3 h-5 w-5" />
    Download CV
  </a>

  <a 
    href={project}
    download
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform transform hover:scale-105"
  >
    <FiDownload className="-ml-1 mr-3 h-5 w-5" />
    Ule-Ona Project
  </a>
</div>

                </div>
            </div>
        </div>

        {/* --- Tabs & Content Section --- */}
        <div className="p-8 md:p-12" style={{ fontFamily: 'Montserrat' }}>
            <div className="mb-8 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${
                            activeTab === tab
                            ? 'border-blue-500 text-blue-600'
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

export default OlabodeProfile;