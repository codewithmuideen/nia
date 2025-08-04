import React from 'react';

const aboutUsContent = [
  "The Nigerian Institute of Architects (NIA) – Osun State Chapter was officially inaugurated on the 6th of December, 1996, five years after the creation of Osun State. Since then, it has grown into a thriving professional body committed to excellence in architectural practice, public service, and sustainable development.",
  
  "As a key part of the national architectural community, the Osun Chapter exists to foster innovation, enforce professional ethics, and serve as a vital bridge between architects, the government, and the general public. Our mission is rooted in a deep commitment to creating safe, affordable, and climate-resilient structures that improve the lives of Nigerians.",
  
  "Over the years, the Chapter has made significant strides in raising awareness about the value of architecture and the critical role of architects in nation-building. Through continuous advocacy, public enlightenment, and professional development programs, we work tirelessly to combat quackery and unprofessional practices in the building industry.",
  
  "We believe architecture is not just about buildings—it’s about people. That’s why we collaborate with government agencies, stakeholders in the built environment, and fellow professionals to uphold the highest standards of practice while promoting sustainable and affordable housing solutions for all.",
  
  "With each passing year, the Osun State Chapter reaffirms its commitment to professionalism, leadership, and community development. Through unity, knowledge-sharing, and a shared passion for excellence, we continue to shape a built environment that reflects the best of our culture, values, and vision for the future."
];

export default function AboutUs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-bl from-white to-gray-100 px-6 py-20 flex items-center justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full max-w-6xl z-10">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the vision, values, and journey of the NIA Osun State Chapter
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-10 md:p-14">
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            {aboutUsContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
