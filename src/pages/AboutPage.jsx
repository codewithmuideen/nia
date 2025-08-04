import React from 'react';

// Import necessary icons
import { FiEye } from 'react-icons/fi';
import { GoGoal } from 'react-icons/go'; // A suitable "mission" icon

// Assume your 60th-anniversary logo is in this path
import images from '../constants/images';

// Data for the committees list - makes it easy to manage
const committees = [
  { name: "Board of Architectural Education", description: "is responsible for all Educational programmes and activities of the Institute such as Visitation and Accreditation of Schools of Architecture in Nigeria, conduct of Professional Practice Examinations, and implementation of Continued Professional Development Programmes." },
  { name: "Practice Committee", description: "is responsible for professional practice policies, programmes and ethics in all its ramifications." },
  { name: "International Affairs Committee", description: "is responsible for the initiation of NIA's Policies, Programmes, and activities as they relate to international organizations to which the NIA is affiliated." },
  { name: "Students Affairs Committee", description: "takes care of the welfare and interests of architecture students in Institutions of higher learning and their integration into the Institute's programmes." },
  { name: "Publications and Library Committee", description: "is responsible for collecting and publishing materials and write-ups from both the academics and practice as well as other related matters. The committee is also responsible for keeping stock, running and maintaining a comprehensive library." },
  { name: "Public Relations committee", description: "is vested with the responsibility of maintaining a good public image for the Institute, the architects and the architectural profession as a whole. It also ensures cordial relationship with the authorities, the mass media, the public and other allied professionals and organizations within the built industry through various public relations programmes and activities." },
  { name: "Disciplinary Committee", description: "is primarily concerned with maintaining high ethical and professional standards and strict adherence to the above as provided for in the various provisions of the NIA Code of Conduct and Ethics." },
  { name: "Admission Committee", description: "is responsible for the processing of applications for admission into various categories of membership viz: Fellow, Full Member, Associate, Graduate, Student and Honourary Membership." },
  { name: "Female Architects of Nigeria (FAN)", description: "The Female Architects of Nigeria is tasked with mobilizing women members to fully participate in the activities of the Institute in addition to other specific programs." },
  { name: "Archibuilt Committee", description: "is saddled with the responsibility of organizing and planning the annual specialized forum of Building Materials and Construction Technology and other related programmes including the publication of Compendium and the Archibuilt up-date. Archibuilt is one of several NIA Public service programmes being pursued to complement efforts of government and other interest groups in the development of the nation." },
  { name: "Finance Committee", description: "whose Chairman is the National Treasurer is responsible for handling the finances of the Institute. The Committee is responsible for the initiation of financial policies and programmes for the Institute including ways and methods of generating funds for the Institute." },
];

const AboutPage = () => {
  return (
    <div className="bg-white font-sans text-gray-700" style={{ fontFamily: 'Montserrat' }}>
      {/* Hero Banner */}
      <section className="bg-[#bde0d2] py-16 sm:py-20" style={{ fontFamily: 'Montserrat' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#2d3748]">About</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Montserrat' }}>
        
        {/* Introduction Section */}
        <section className="py-16 md:py-24" style={{ fontFamily: 'Montserrat' }}>
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img src={images.nia_about} alt="NIA 60th Anniversary" className="w-full max-w-sm mx-auto" />
            </div>
            <div className="md:col-span-3 space-y-6 text-lg leading-relaxed">
              <p>
                The Nigerian Institute of Architects (NIA) was founded on the 1st of April 1960, as an association of independent professional architects with the aims and objectives of fostering friendship amongst members, cater for their welfare and establish mutual support and cooperation amongst them.
              </p>
              <p>
                From a modest 13 members at inauguration, the Institute has experienced a phenomenal growth in its membership, activities, stature and influence both at national and international levels. Total membership today stands at about 12000 in 5 classes of membership including Fellows, Full members, Associates, Graduates & Students members spread across 31 Chapters and the Federal Capital Territory.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values, Vision & Mission Section */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 p-4 sm:p-6 lg:p-8 py-16 md:py-24" style={{ fontFamily: 'Montserrat' }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Our Core Value</h2>
              <div className="w-20 h-1 bg-teal-500"></div>
              <p className="text-lg leading-relaxed pt-2">
                We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world and, putting safety first, to creating opportunities for our people.
              </p>
            </div>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 text-teal-600 bg-teal-100 p-3 rounded-full">
                  <FiEye size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">OUR VISION</h3>
                  <p className="text-lg leading-relaxed">To attain excellence in the creative management of the physical environment.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 text-teal-600 bg-teal-100 p-3 rounded-full">
                  <GoGoal size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">OUR MISSION</h3>
                  <p className="text-lg leading-relaxed">To mobilize informed membership for quality services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Committees Section */}
        <section className="py-16 md:py-24" style={{ fontFamily: 'Montserrat' }}>
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              The policy making body of the Institute is the Executive Council and activities are carried out through the Committees of Council as follows:
            </h2>
            <ol className="list-decimal list-outside space-y-6 mt-10 text-base leading-relaxed pl-5">
              {committees.map((committee) => (
                <li key={committee.name}>
                  <strong className="font-semibold text-gray-800">{committee.name}:</strong> {committee.description}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Governance & Affiliations */}
        <section className="border-t border-gray-200 py-16 md:py-24 text-center text-lg leading-loose max-w-5xl mx-auto space-y-8" style={{ fontFamily: 'Montserrat' }}>
            <p>
                The management of the affairs of the Institute is vested in an Executive Council which comprises of members elected at the Biennial General Meeting of the Institute or appointed. The Executive Council is headed by the President who takes the Chair at all its meetings and the General Assembly.
            </p>
            <p>
                The Institute continues to cooperate with governmental and non-governmental organization, universities, polytechnics, technical institutions and other institutions of learning, professional institutions and other bodies in promoting the dynamic role of the architect in the society and in advancing the aims and objective of the Institute.
            </p>
            <p className="font-semibold text-gray-800">
                The Nigerian Institute of Architects is a member of the International Union of Architects (UIA), a founding member of both the Commonwealth Association of Architects (CAA) and the Africa Union of Architects (AUA).
            </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;