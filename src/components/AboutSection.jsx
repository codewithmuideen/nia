// src/components/AboutSection.jsx

import React from 'react';
import { IoEyeOutline, IoRocketOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 font-sans overflow-hidden" style={{fontFamily:'Montserrat'}}>
      <div className="max-w-7xl mx-auto">
        {/* Intro & Core Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - About NIA */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight relative z-10">
              About <span className="text-[#ff6b00]">NIA</span>
            </h2>
            <div className="w-16 h-1 bg-[#ff6b00] mb-2"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Nigerian Institute of Architects (NIA) was founded on April 1st, 1960, by visionary architects dedicated to fostering friendship, welfare, and professional excellence.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Starting with 13 members, NIA now thrives with over 12,000 professionals impacting Nigeria’s built environment and influencing architecture globally.
            </p>
            <div className="pt-4">
              <a
                href="#about"
                className="inline-flex items-center text-[#ff6b00] text-lg font-medium group hover:underline"
              >
                Learn More
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>

          {/* Right Column - Core Values, Vision, Mission */}
          <div className="space-y-10">
            {/* Core Value */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#ff6b00]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Core Value
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We uphold creativity, safety, service, and community development—producing architects who shape and elevate our built environment with excellence and ethics.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Vision Card */}
              <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg border border-gray-100">
                <IoEyeOutline className="text-4xl text-[#546e7a] flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                    Vision
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    To attain excellence in the creative management of the physical environment.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg border border-gray-100">
                <IoRocketOutline className="text-4xl text-[#546e7a] flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                    Mission
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    To mobilize informed membership for quality architectural services and societal impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block bg-[#546e7a] hover:bg-[#37474f] text-white text-base font-semibold px-8 py-4 rounded-md shadow-md transition-transform transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
