import React from 'react';
import images from '../constants/images';

const leadership = [
  { name: "Arc. (Prof.) S. A. Amole fnia", title: "Pioneer State Chair", image: images.pioneer },
  { name: "Arc. Emmanuel Oladejo, mnia", title: "Chapter Chair", image: images.emmanuel },
  { name: "Arc. Biola Akinola, mnia , AIA Int. Assoc. ", title: "Imm. Past Chair", image: images.biola },
  { name: "Arc. Dr. Oladunni Izobo-Martins, mnia", title: "Vice Chair", image: images.oladunni },
  { name: "Arc. Dr. Ayodeji Ajayi, mnia", title: "Treasurer", image: images.ayodeji },
  { name: "Arc Clement A. Tokede, mnia", title: "Secretary", image: images.clement},
  { name: "Arc. Adesiji Balogun, mnia", title: "Assistant Secretary", image: images.adesiji }, 
  { name: "Arc. Olusola Michael Adubi", title: "Public Relations Officer", image: images.pro }, 
];

const NIALeadership = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 sm:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wide text-[#2C5B43] mb-2">Our Leaders</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10">NIA Osun State Chapter Excos</h2>
      </div>

      <div className="grid gap-10">
        {/* Chairman – Large card at top */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <img src={leadership[0].image} alt={leadership[0].name} className="w-full h-96 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">{leadership[0].name}</h3>
            <p className="text-sm text-gray-500 mt-1">{leadership[0].title}</p>
          </div>
        </div>

        {/* Next 3 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leadership.slice(1, 4).map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last 3 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {leadership.slice(4).map((member, index) => (
            <div key={index + 4} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NIALeadership;
