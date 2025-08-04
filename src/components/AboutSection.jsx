// src/components/AboutSection.jsx

import React from 'react';

const AboutSection = () => {
  return (
    <section
      className="relative bg-white py-24 px-6 md:px-12 font-sans overflow-hidden"
      style={{ fontFamily: 'Montserrat' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - About Us */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
              About <span className="text-[#ff6b00]">NIA</span> Osun State Chapter
            </h2>
            <div className="w-16 h-1 bg-[#ff6b00] mb-2"></div>

            <p className="text-gray-600 text-lg leading-relaxed">
              The Osun State Chapter of the Nigerian Institute of Architects was founded through the dedication and vision of pioneering architects who sought to promote professional excellence, community development, and creative management of the built environment.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Initial efforts began in 1992 with meetings convened by the Ministry of Works and Transport, Osogbo. The chapter was officially structured with the election of Protem Officers on April 18, 1996.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Founding members came from a wide range of establishments, including government ministries, academic institutions, private consultancies, and development corporations across the state.
            </p>

            {/* Vision */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To attain excellence in creative management of the physical environment.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mission Statement</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To mobilize informed membership for quality services.
              </p>
            </div>
          </div>

          {/* Right Column - History / Foundation */}
          <div className="space-y-10">
            {/* History */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#ff6b00]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Brief History</h3>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  The Osun State Chapter of the Nigerian Institute of Architects was inaugurated on the 6th of December, 1996 by Arc. Dele Oguleye (FNIA), then NIA president. The event included notable figures like Arc. N.J. Faworaja (Hon. Gen. Sec.), Arc. Tunji Bolu (Chairman, Oyo State Chapter), and Arc. Akin Ajani (Hon. Sec., Oyo Chapter).
                </p>
                <p>
                  Members were drawn from various institutions including:
                  <ul className="list-disc list-inside pl-4">
                    <li>Ministry of Works and Transport (Public Building Dept.)</li>
                    <li>Obafemi Awolowo University, Ile-Ife</li>
                    <li>The Federal Polytechnic, Ede</li>
                    <li>Osun State College of Technology, Esa-Oke</li>
                    <li>Property Development Corporation of Osun State</li>
                    <li>Federal Ministry of Works & Housing, Osogbo</li>
                    <li>Private Consultancy Firms</li>
                  </ul>
                </p>
                <p>
                  At inception, the chapter had:
                  <br />
                  <strong>21</strong> Full members, <strong>6</strong> Graduate members, and <strong>8</strong> Student members.
                </p>
                <p>
                  The first Executive Council included:
                  <ul className="list-disc list-inside pl-4">
                    <li>Arc. S.A. Amole – Chairman</li>
                    <li>Arc. J.O. Farinloye – Vice Chairman</li>
                    <li>Arc. T. Bamidele Ojo – Secretary</li>
                    <li>Arc. Niyi Ogundiran – Asst. Secretary</li>
                    <li>Arc. D.A. Olaiya – PRO</li>
                    <li>Arc. Adekunle Akande – Financial Secretary</li>
                    <li>Arc. Femi Olasoji – Treasurer</li>
                    <li>Arc. Wale Ojo – Auditor</li>
                    <li>Arc. O.I. Odekunle & Arc. (Mrs) O. Osasona – Ex Officio</li>
                  </ul>
                </p>
                <p>
                  Since then, the chairmanship has rotated as follows:
                  <ul className="list-disc list-inside pl-4">
                    <li>Arc. S.A. Amole (1996–2005)</li>
                    <li>Arc. A.O. Usman (2005–2011)</li>
                    <li>Arc. (Chief) T. Bamidele Ojo (2011–Present)</li>
                  </ul>
                </p>
                <p>
                  Foundational support came from senior professionals including Arc. Ayodeji Bolarinwa, Arc. Funso Bamidele, and Arc. I.O. Alo who guided the chapter's early growth.
                </p>
                <p>
                  As of today, membership has grown to:
                  <ul className="list-disc list-inside pl-4">
                    <li>2 Fellows</li>
                    <li>31 Full Members</li>
                    <li>81 Associate/Graduate Members</li>
                    <li>102 Student Members</li>
                  </ul>
                </p>
                <p>
                  The chapter organizes public education programs to inform society about the architecture profession, conducted monthly and bi-monthly.
                </p>
                <p className="font-semibold italic text-gray-700">
                  Long live Osun State Chapter of the Nigerian Institute of Architects. <br />
                  Long live the Nigerian Institute of Architects. <br />
                  Long live Osun State. <br />
                  Long live the Federal Republic of Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
