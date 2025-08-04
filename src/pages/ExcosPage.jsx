import React from 'react';
import images from '../constants/images';
import { FiArrowUpRight } from 'react-icons/fi';

// --- Data (Unchanged) ---
const leadershipData = [
  { name: "Arc. (Prof.) S. A. Amole fnia", title: "Pioneer State Chair", image: images.pioneer },
  { name: "Arc. Emmanuel Oladejo, mnia", title: "Chapter Chair", image: images.emmanuel },
  { name: "Arc. Biola Akinola, mnia , AIA Int. Assoc. ", title: "Imm. Past Chair", image: images.biola },
  { name: "Arc. Dr. Oladunni Izobo-Martins, mnia", title: "Vice Chair", image: images.oladunni },
  { name: "Arc. Dr. Ayodeji Ajayi, mnia", title: "Treasurer", image: images.ayodeji },
  { name: "Arc Clement A. Tokede, mnia", title: "Secretary", image: images.clement },
  { name: "Arc. Adesiji Balogun, mnia", title: "Assistant Secretary", image: images.adesiji },
];

// --- Reusable, Interactive Leader Card Component ---
const LeaderCard = ({ name, title, image, isProminent = false }) => {
  const cardHeight = isProminent ? 'h-96 sm:h-[450px]' : 'h-80';

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className={`w-full ${cardHeight} object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out`} 
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full text-white transform translate-y-1/3 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h3 className={`font-bold ${isProminent ? 'text-2xl' : 'text-xl'}`}>{name}</h3>
        <p className="text-sm uppercase tracking-wider text-gray-300 mt-1">{title}</p>
        
        {/* Hidden details that appear on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-4">
           <div className="flex items-center text-nia-green-light font-semibold">
                <span>View Bio</span>
                <FiArrowUpRight className="ml-1" />
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Main NIALeadership Component ---
const NIALeadership = () => {
  // Programmatically find leaders instead of relying on array index
  const chapterChair = leadershipData.find(m => m.title === "Chapter Chair");
  const pioneerChair = leadershipData.find(m => m.title === "Pioneer State Chair");
  const otherLeaders = leadershipData.filter(
    m => m.title !== "Chapter Chair" && m.title !== "Pioneer State Chair"
  );

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#2C5B43] font-semibold mb-2">Our Leaders</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            NIA Osun State Chapter Executive Council
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Meet the dedicated professionals shaping the future of architecture and advocating for excellence within Osun State.
          </p>
        </div>

        {/* --- Top Leadership Section (Chair & Pioneer) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {chapterChair && <LeaderCard {...chapterChair} isProminent={true} />}
          {pioneerChair && <LeaderCard {...pioneerChair} isProminent={true} />}
        </div>

        {/* --- Executive Council Members Section --- */}
        <div className="text-left mb-10 border-l-4 border-[#2C5B43] pl-4">
             <h3 className="text-3xl font-bold text-gray-800">Council Members</h3>
             <p className="text-gray-500 mt-1">The core team driving the chapter's initiatives.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {otherLeaders.map((member, index) => (
            <LeaderCard key={index} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NIALeadership;