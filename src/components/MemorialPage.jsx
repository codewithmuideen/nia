import React from 'react';
import images from '../constants/images';

const memorialData = [
  {
    name: 'Late F. M. Ewemade',
    title: 'A Founding Father and Visionary Leader',
    imageSrc: images.ewemade,
  },
  {
    name: 'Late - Arc. Yekini Omisakin',
    title: 'Former Head, Dept. of Architectural Technology',
    imageSrc: images.male,
  },
  {
    name: 'Late - Arc. (Mrs.) Fasilat O.',
    title: 'Member, Forum of Local Government Architects',
    imageSrc: images.female,
  },
  {
    name: 'Late (Mrs.) Abimbola Adefila',
    title: 'Former Protem Financial Secretary, NIA Osun',
    imageSrc: images.female,
  }
];

// --- The Card Component ---
// This is a single card for one person.
const MemorialCard = ({ name, title, imageSrc }) => (
  <div className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
    <div className="aspect-w-3 aspect-h-4">
      <img
        className="h-full w-full object-cover object-center filter grayscale transition-all duration-500 group-hover:grayscale-0"
        src={imageSrc}
        alt={`Portrait of ${name}`}
      />
    </div>
    <div className="flex flex-1 flex-col justify-between p-6">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-2 text-base text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);


// --- The Main Page Component ---
// This component lays out the entire page.
const MemorialPage = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            In Memoriam
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Remembering and honoring the colleagues, mentors, and friends who have
            contributed to our community and left a lasting legacy.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {memorialData.map((person, index) => (
            <MemorialCard
              key={index}
              name={person.name}
              title={person.title}
              imageSrc={person.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemorialPage;