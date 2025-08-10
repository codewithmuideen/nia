import React, { useState } from 'react';
import { FiDownload, FiAward, FiBookOpen, FiStar, FiGlobe, FiBriefcase, FiShield, FiEdit } from 'react-icons/fi';
import ososona from '../assets/ososona.pdf';
import cordelia from '../assets/cordelia.pdf'
import images from '../constants/images';
// --- Placeholders for Assets ---
// In your project, you would replace these with actual imports.
// const images = {
//     osasona: 'https://i.imgur.com/G5g2mJc.png' // Using the provided image URL
// };


// --- Data Extracted from Provided Documents ---

const profileData = {
  name: "Cordelia Olatokunbo Osasona",
  titles: "Professor of Architecture, FNIA, Heritage Conservationist",
  image: images.ososona,
  bio: "A trailblazing figure in Nigerian architecture, Professor Osasona is the first female Professor of Architecture in southwestern Nigeria and the first Architecture alumna of Obafemi Awolowo University. Her distinguished career is marked by pioneering academic achievements, a profound dedication to the history of African architecture, and a hands-on commitment to preserving Nigeria's invaluable architectural heritage.",
  education: [
    { degree: "Professor of Architecture", date: "2010", university: "Obafemi Awolowo University, Ile-Ife" },
    { degree: "Master of Arts (Fine Arts)", university: "Obafemi Awolowo University, Ile-Ife" },
    { degree: "Master of Science (Architecture)", university: "Obafemi Awolowo University, Ile-Ife" },
    { degree: "Bachelor of Science (Architecture)", university: "Obafemi Awolowo University, Ile-Ife" },
  ],
  memberships: [
    { name: "Fellow, Nigerian Institute of Architects (NIA)", detail: "First OAU Architecture graduate to be inducted as a Fellow." },
    { name: "Architects' Registration Council of Nigeria (ARCON)", detail: "Served on the Board of Architectural Education (2008-2016)." },
    { name: "Commonwealth Association of Architects (CAA)", detail: "Represented Nigeria at four accreditation exercises on the continent." },
    { name: "Wessex Institute of Technology (STREMAH Conferences)", detail: "Member, International Scientific Advisory Committee (since 2013)." },
  ],
  featuredProject: {
    title: "Restoration of the Hinderer House, Ibadan (2022)",
    role: "Technical Consultant",
    funder: "Gerda Henkel Stiftung Foundation, Germany",
    description: "Professor Osasona served as the Technical Consultant for the complete restoration of the Hinderer House (c. 1853), the first two-storey building in Ibadan. This landmark project revived a vital piece of Nigeria's colonial and missionary history, safeguarding its unique monolithic cob construction and its legacy as a cradle for girl-child education in the region.",
    significance: [
      "Preserved a key historical and typological landmark from dilapidation.",
      "Championed the use of authentic conservation techniques on traditional materials.",
      "Highlighted the crucial link between architecture, history, and social development.",
      "Served as a practical application of her extensive research in heritage conservation."
    ]
  },
  careerHighlights: [
    "First female Architecture alumna of Obafemi Awolowo University (1977 cohort).",
    "First female Professor in the Faculty of Environmental Design and Management, OAU.",
    "First female Professor of Architecture in Southwestern Nigeria.",
    "Pioneered the establishment of the Department of Architecture at the University of Ibadan, serving as its first Head of Department (2018-2020).",
    "Authored numerous books, journals, and conference proceedings on African Architecture and Heritage.",
    "Her book, 'Colonial Architecture in Ile-Ife, Nigeria', was translated into French, signifying its international impact."
  ],
  academicVision: [
    "Championing the scholarly study and active conservation of traditional and vernacular African architectural forms.",
    "Integrating the art-content and historical narratives into architectural pedagogy and practice.",
    "Mentoring future generations of architects with a strong sense of cultural identity and professional excellence.",
    "Believes that heritage buildings are not just relics, but living documents that inform contemporary design and national identity.",
    "Advocates for a proactive approach to conservation, viewing it as an essential act of passing on a worthy legacy to posterity."
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

const FeaturedProject = ({ project }) => (
    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200" style={{ fontFamily: 'Montserrat' }}>
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            <FiShield className="text-blue-600 mr-2" />
            {project.title}
        </h4>
        <p className="font-medium text-gray-700"><strong>Role:</strong> {project.role}</p>
        <p className="font-medium text-gray-700 mb-3"><strong>Funder:</strong> {project.funder}</p>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <h5 className="font-semibold text-gray-700 mb-2">Key Significance:</h5>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            {project.significance.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);


// --- Main Profile Component ---

const OsasonaProfile = () => {
  const [activeTab, setActiveTab] = useState('Achievements');

  const renderContent = () => {
    switch (activeTab) {
      case 'Vision & Publications':
        return (
            <div className='animate-fadeIn' style={{ fontFamily: 'Montserrat' }}>
                 <Section title="Academic Vision & Philosophy" icon={<FiStar className="text-blue-500" />}>
                    <ul className="list-none space-y-3">
                        {profileData.academicVision.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <FiStar className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
                 <Section title="Key Publications Focus" icon={<FiEdit className="text-blue-500" />}>
                    <p>Professor Osasona has published extensively (books, journal articles, and learned conference proceedings), with a primary focus on African architectural history, vernacular forms, and the critical need for heritage conservation.</p>
                </Section>
            </div>
        );
      case 'Achievements':
      default:
        return (
            <div className='animate-fadeIn space-y-8' style={{ fontFamily: 'Montserrat' }}>
                <Section title="Pioneering Career Highlights" icon={<FiAward className="text-blue-500" />}>
                     <ul className="list-disc list-inside space-y-2">
                        {profileData.careerHighlights.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </Section>
                <Section title="Featured Heritage Project" icon={<FiBriefcase className="text-blue-500" />}>
                    <FeaturedProject project={profileData.featuredProject} />
                </Section>
            </div>
        );
        case 'Profile & Education':
        return (
            <div className='animate-fadeIn space-y-8' style={{ fontFamily: 'Montserrat' }}>
                <Section title="Education" icon={<FiBookOpen className="text-blue-500" />}>
                    {profileData.education.map((edu, index) => (
                        <div key={index}>
                            <p className="font-semibold text-gray-700">{edu.degree}</p>
                            <p className="text-sm">{edu.university}{edu.date ? ` - ${edu.date}` : ''}</p>
                        </div>
                    ))}
                </Section>
                <Section title="Professional Service & Memberships" icon={<FiGlobe className="text-blue-500" />}>
                    {profileData.memberships.map((mem, index) => (
                        <div key={index}>
                            <p className="font-semibold text-gray-700">{mem.name}</p>
                            <p className="text-sm">{mem.detail}</p>
                        </div>
                    ))}
                </Section>
            </div>
        );
    }
  };

  const tabs = ['Achievements', 'Vision & Publications', 'Profile & Education'];

  return (
    <div className="bg-gray-100 min-h-screen font-sans p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* --- Hero Section --- */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center md:col-span-1">
                     <img 
                        src={profileData.image}
                        alt={`Professor ${profileData.name}`}
                        className="h-60 w-60 rounded-full object-cover shadow-2xl ring-4 ring-white"
                        style={{objectPosition: 'top'}}
                    />
                </div>
                <div className="text-white text-center md:text-left md:col-span-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Prof. {profileData.name}</h1>
                    <p className="text-xl text-blue-300 mt-2">{profileData.titles}</p>
                    <p className="mt-4 text-gray-300 max-w-2xl">{profileData.bio}</p>
                   <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                      <a 
                        href={cordelia}
                        download
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform transform hover:scale-105"
                      >
                        <FiDownload className="-ml-1 mr-3 h-5 w-5" />
                        Publications
                      </a>
                      <a 
                        href={ososona}
                        download
                        className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-transform transform hover:scale-105"
                      >
                        <FiDownload className="-ml-1 mr-3 h-5 w-5" />
                        Download Profile
                      </a>
                    </div>
                </div>
            </div>
        </div>

        {/* --- Tabs & Content Section --- */}
        <div className="p-8 md:p-12" style={{ fontFamily: 'Montserrat' }}>
            <div className="mb-8 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
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

export default OsasonaProfile;