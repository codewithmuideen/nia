import React from 'react';
import { FiMapPin, FiInfo, FiUsers, FiAward, FiGrid } from 'react-icons/fi';

// Data has been slightly enriched with a 'type' property for dynamic icons,
// and the notes have been cleaned up for better presentation.
const institutions = [
  {
    name: 'Obafemi Awolowo University, Ile‑Ife (OAU)',
    location: 'Ile‑Ife, Osun State',
    type: 'University',
    notes: [
      'Houses a renowned Department of Architecture within its Faculty of Environmental Design & Management, established in 1982.',
      'Offers fully ARCON-accredited programmes including BSc, MSc, MPhil, and PhD in Architecture.',
      'The campus itself is a celebrated masterpiece of Bauhaus-inspired design by architect Arieh Sharon.',
    ],
    associations: ['Ife Architecture Students’ Association (IFASA)', 'National Association of Architecture Students (NAAS)'],
  },
  {
    name: 'Bowen University, Iwo',
    location: 'Iwo, Osun State',
    type: 'University',
    notes: ['A leading private university with a well-regarded Architecture programme in its College of Environmental Sciences.'],
    associations: ['NAAS'],
  },
  {
    name: 'Oduduwa University, Ipetumodu',
    location: 'Ipetumodu, Osun State',
    type: 'University',
    notes: ['Features an Architecture department within its College of Environmental Design & Management.'],
    associations: ['NAAS'],
  },
  {
    name: 'Adeleke University, Ede',
    location: 'Ede, Osun State',
    type: 'University',
    notes: ['This private, Seventh-day Adventist-affiliated university offers a comprehensive Architecture programme.'],
    associations: ['NAAS'],
  },
  {
    name: 'Osun State College of Technology (OSCOTECH)',
    location: 'Esa‑Oke, Osun State',
    type: 'Polytechnic',
    notes: ['A state-owned polytechnic providing foundational ND and HND programmes in Architectural Technology.'],
    associations: ['NAAS'],
  },
  {
    name: 'Osun State Polytechnic (OSP), Iree',
    location: 'Iree, Osun State',
    type: 'Polytechnic',
    notes: ['This public polytechnic offers an Architecture programme within its Faculty of Environmental Studies.'],
    associations: ['NAAS'],
  },
];

const ArchitectureSchoolsOsun = () => {
  return (
    <div className="bg-slate-100 font-sans min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Montserrat' }}>
      {/* --- Page Header --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Schools of <span className="text-blue-600">Architecture</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          A curated list of accredited universities and polytechnics offering architecture programmes in Osun State, Nigeria.
        </p>
      </div>

      {/* --- Institutions Grid --- */}
      <div className="max-w-4xl mx-auto grid gap-10" style={{ fontFamily: 'Montserrat' }}>
        {institutions.map((inst, index) => (
          <div style={{ fontFamily: 'Montserrat' }}
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-t-4 border-blue-500"
          >
            {/* --- Card Header --- */}
            <div className="p-6" style={{ fontFamily: 'Montserrat' }}>
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-slate-800 pr-4">{inst.name}</h3>
                <span 
                  title={inst.type}
                  className="flex-shrink-0 p-2 rounded-full bg-blue-100 text-blue-600"
                >
                  {inst.type === 'University' ? <FiAward size={20} /> : <FiGrid size={20} />}
                </span>
              </div>
              <div className="flex items-center text-slate-500 mt-2 text-sm">
                <FiMapPin className="mr-2 flex-shrink-0" />
                <span>{inst.location}</span>
              </div>
            </div>

            {/* --- Card Body --- */}
            <div className="p-6 border-t border-slate-200" style={{ fontFamily: 'Montserrat' }}>
              {/* --- Notes Section --- */}
              <div className="mb-6" style={{ fontFamily: 'Montserrat' }}>
                <h4 className="flex items-center text-md font-semibold text-slate-700 mb-3">
                  <FiInfo className="mr-2 text-blue-500" />
                  Key Information
                </h4>
                <ul className="space-y-3">
                  {inst.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 font-bold mr-3 mt-1">&#8227;</span>
                      <span className="text-slate-600">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- Associations Section --- */}
              <div style={{ fontFamily: 'Montserrat' }}>
                 <h4 className="flex items-center text-md font-semibold text-slate-700 mb-3" style={{ fontFamily: 'Montserrat' }}>
                  <FiUsers className="mr-2 text-blue-500" />
                  Student Associations
                </h4>
                 <div className="flex flex-wrap gap-2">
                   {inst.associations.map((assoc) => (
                      <span key={assoc} className="bg-slate-200 text-slate-800 text-xs font-medium px-3 py-1 rounded-full">
                        {assoc}
                      </span>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureSchoolsOsun;