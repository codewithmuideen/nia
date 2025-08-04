import React from 'react';
import { Link } from 'react-router-dom';
import images from '../constants/images'; // Your image constants file
import { FiArrowRight } from 'react-icons/fi';

// --- Data for the Architect Cards ---
// This makes it easy to add more architects in the future
const architectsData = [
  {
    name: 'Arc. (Dr.) Olabode O. Jegede',
    title: 'FNIA, FOSHA, Principal Partner',
    description: 'A distinguished architect with a Ph.D. focusing on indigenous ornamentation and branding in residential architecture.',
    image: images.bode, // Main profile image
    profileUrl: '/pages/olabode-jegede/', // Route to his profile page
  },
  {
    name: 'Arc. (Mrs.) Olubukunola Atinuke Ejiwunmi',
    title: 'FNIA, PPNIA, Principal Architect',
    description: 'Specializing in contemporary and sustainable architectural solutions for urban environments.',
    image: images.eji1, // Ejiwunmi's profile image
    profileUrl: '/pages/atinuke-ejiwumi/', // Route to his profile page
  },
];

const ArchitectCard = ({ name, title, description, image, profileUrl }) => (
  <Link to={profileUrl} className="group block">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img className="w-full h-full object-cover" src={image} alt={`Profile of ${name}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{name}</h3>
        <p className="text-md font-semibold text-blue-500 mt-1">{title}</p>
        <p className="text-gray-600 mt-3 text-sm">{description}</p>
        <div className="mt-4 flex items-center text-blue-600 font-semibold">
          View Profile
          <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </Link>
);


const ArchitectsDirectoryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans p-4 sm:p-8 lg:p-12">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- Page Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Renowned Architects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Meet the visionary minds behind our landmark projects. Click on a profile to learn more about their work and philosophy.
          </p>
        </div>

        {/* --- Architects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {architectsData.map((architect, index) => (
            <ArchitectCard
              key={index}
              name={architect.name}
              title={architect.title}
              description={architect.description}
              image={architect.image}
              profileUrl={architect.profileUrl}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ArchitectsDirectoryPage;