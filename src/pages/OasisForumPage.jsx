import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCalendar, FiMapPin, FiAward, FiUsers, FiMic,
  FiCoffee, FiBriefcase, FiMap, FiSunset, FiSunrise
} from 'react-icons/fi';
import images from '../constants/images';

const day1Schedule = [
  { time: '7:30 AM', title: 'Arrival & Registration', description: 'Led by Madam President (Arc. Mobolaji Adeniyi fnia) on Air - Western Spring Television.', icon: <FiCoffee /> },
  { time: '9:00 AM', title: 'Media Session with Madam President', description: 'On Air at Unique FM 103.1.', icon: <FiMic /> },
  { time: '10:00 AM - 12:00 PM', title: 'Courtesy Visit to Deputy Governor', description: 'Convergence at Osun State Secretariat.', icon: <FiBriefcase /> },
  { time: '12:00 PM - 1:00 PM', title: 'Groundbreaking & City Tour', description: 'Ceremony for the new Osun NIA Secretariat building.', icon: <FiMap /> },
  { time: '1:00 PM - 4:00 PM', title: 'UniOsun Facility Tour', description: 'Courtesy Visit to the Vice Chancellor, Osun State University.', icon: <FiBriefcase /> },
  { time: '4:00 PM - 8:00 PM', title: 'Networking Session', description: 'Connect with peers and industry leaders.', icon: <FiUsers /> },
];

const day2Schedule = [
  { time: 'Morning', title: 'Opening Ceremony & Keynote Speeches', description: 'Address by the Governor of Osun State, H.E. Ademola Nurudeen Jackson Adeleke.', icon: <FiSunrise /> },
  { time: 'Session 01', title: 'Keynote Lecture', description: 'By Arc. Abiodun Owoborode, fnia, mnip on "Responsibilities in the Built Environment".', icon: <FiMic /> },
  { time: 'Session 02', title: 'Symbolic Presence of Ori-Olokun', description: 'Connecting the past, present, and future with His Imperial Majesty, the Ooni of Ife.', icon: <FiAward /> },
  { time: 'Afternoon', title: 'Lunch & Roundtable Session', description: 'Interdisciplinary Collaborations led by Arc. Ladipo Adeseye Lewis & Arc. Dr Adekunle Adeyemo.', icon: <FiUsers /> },
  { time: 'Afternoon', title: 'Excellence Awards & Exhibition Tour', description: 'Recognition of Outstanding Students and tour of product exhibitions.', icon: <FiAward /> },
  { time: 'Evening', title: 'Gala Night, Awards & Investiture', description: 'Launching of NIA State Secretariat Building, Awards, and Inauguration of new executives.', icon: <FiSunset /> },
];

const OasisForumPage = () => {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <div className="bg-slate-100 text-slate-800 font-sans">

      {/* HERO */}
      <header className="relative bg-slate-900">
        <img
          src={images.oasis4}
          alt="OASIS Forum Banner"
          className="w-full max-h-[80vh] object-contain bg-black"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            OASIS 8.0 Forum
          </motion.h1>
          <p className="mt-3 text-lg text-slate-200">August 13–14, 2025 • Osogbo, Nigeria</p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* WHAT IS OASIS */}
        <motion.section
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              What is the OASIS Forum?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              OASIS is a dynamic platform by the Nigerian Institute of Architects (NIA), Osun State Chapter,
              dedicated to examining critical issues in the built environment—from practice and education to its
              broader societal impact.
            </p>
          </div>
          <div className="flex justify-center items-center rounded-2xl shadow-xl p-2">
            <img
              src={images.oasis1}
              alt="Architectural collaboration"
              className="rounded-xl w-full object-contain"
            />
          </div>
        </motion.section>

        {/* SCHEDULE */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Schedule of Events</h2>
            <p className="text-slate-600 mt-1">August 13th - 14th, 2025</p>
          </div>

          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <ScheduleTab id="day1" activeTab={activeTab} setActiveTab={setActiveTab} label="Day 1 - Aug 13" />
            <ScheduleTab id="day2" activeTab={activeTab} setActiveTab={setActiveTab} label="Day 2 - Aug 14" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'day1' && <EventList events={day1Schedule} />}
              {activeTab === 'day2' && <EventList events={day2Schedule} />}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* GALLERY */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {[images.oasis2, images.oasis3].map((src, idx) => (
            <div key={idx} className="flex justify-center items-center rounded-2xl shadow-lg p-2">
              <img
                src={src}
                alt={`Oasis gallery ${idx + 1}`}
                className="rounded-xl w-full object-contain"
              />
            </div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center bg-gradient-to-r from-red-600 to-red-800 text-white p-10 md:p-16 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Join Us for OASIS 8.0</h2>
          <p className="mt-3 text-lg max-w-2xl mx-auto text-slate-200">
            Be part of a pivotal conversation on "Responsibilities in the Built Environment" and network
            with industry leaders, royal patrons, and keynote speakers.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-200">
            <div className="flex items-center gap-2"><FiCalendar className="text-yellow-300" /> August 13–14, 2025</div>
            <div className="flex items-center gap-2"><FiMapPin className="text-yellow-300" /> Aurora Conference Centre, Osogbo</div>
          </div>
          <a
            href="/contact"
            className="mt-8 bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-500 transition-transform hover:scale-105 inline-block"
          >
            Register Now
          </a>
        </motion.section>

      </main>
    </div>
  );
};

// TAB BUTTON
const ScheduleTab = ({ id, activeTab, setActiveTab, label }) => {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-5 py-2 rounded-full font-semibold transition ${
        isActive ? 'bg-red-600 text-white' : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
      }`}
    >
      {label}
    </button>
  );
};

// EVENT LIST
const EventList = ({ events }) => (
  <div className="space-y-4 max-w-3xl mx-auto">
    {events.map((event, index) => (
      <EventItem key={index} {...event} />
    ))}
  </div>
);

const EventItem = ({ time, title, description, icon }) => (
  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
    <div className="flex-shrink-0 text-red-600 bg-red-100 p-3 rounded-full text-xl">
      {icon}
    </div>
    <div className="flex-1">
      <p className="font-bold text-slate-900">{title}</p>
      <p className="text-sm text-slate-500 mb-1">{time}</p>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);

export default OasisForumPage;
