import React from 'react';
import images from '../constants/images';

const affiliations = [
  {
    name: 'International Union of Architects',
    logo: images.uia,
    url: '#', // Replace with actual URL
  },
  {
    name: 'Commonwealth Association of Architects',
    logo: images.caa_logo,
    url: '#',
  },
  {
    name: 'Africa Union Of Architects',
    logo: images.aua,
    url: '#',
  },
];

const AffiliationsSection = () => {
  return (
    <section
      className="bg-white w-full py-16 sm:py-24"
      style={{ fontFamily: 'Montserrat' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5b43] tracking-wide">
            NIA Affiliations
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Connected to global architectural excellence
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          {affiliations.map((affiliation) => (
            <a
              key={affiliation.name}
              href={affiliation.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={affiliation.name}
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={affiliation.logo}
                alt={`${affiliation.name} logo`}
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
