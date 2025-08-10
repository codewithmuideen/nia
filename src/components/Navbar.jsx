// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import logo from "../assets/logo-osun.png"; 
import { FiSearch } from 'react-icons/fi';
import { HiX } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';

// --- Optimized Navigation Structure ---
const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    subLinks: [
      { name: 'History of NIA', path: '/nia-osun-history' },
      { name: 'About NIA', path: '/about-nia' },
      { name: 'About NIA Osun', path: '/about-nia-osun' },
      { name: 'Chairman Address', path: '/chairman-address' },
      // { name: 'Board of Trustees', path: '/board-of-trustees' },
      { name: 'Excos', path: '/excos' },
    ],
  },
  {
    name: 'Membership',
    subLinks: [
      { name: 'Membership Overview', path: '/membership' },
      { name: 'Pay Dues (Local)', path: '/membership/pay-dues/local' },
      { name: 'Pay Dues (National)', path: '/membership/pay-dues/national' },
      { name: 'Financial Status', path: '/membership/financial-status' },
      { name: 'Admission Forms', path: '/membership/admission-forms' },
      { name: 'Exam Form', path: '/membership/exam-form' },
    ],
  },
  {
    name: 'Directory',
    subLinks: [
      { name: 'Architects Practicing Outside Osun State', path: '/directory/architects-outside-osun-state' },
      // { name: 'Firms Resident in Osun State', path: '/firms-resident-osun-state' },
      { name: 'Registered Architects', path: '/directory/architects' },
      { name: 'Architectural Firms in Osun State', path: '/directory/firms' },
      { name: 'Schools of Architecture', path: '/directory/schools' },
      // { name: 'College of Fellows', path: '/directory/fellows' },
      { name: 'Professors of Architecture', path: '/directory/professors' },
    ],
  },
  {
    name: 'Resources',
    subLinks: [
      { name: 'OASIS [1.0 - 8.0]', path: '/resources/oasis' },
      { name: 'Publications', path: '/resources/publications' },
      { name: 'E-Library', path: '/resources/e-library' },
      { name: 'Glossary of Terms', path: '/resources/glossary' },
      { name: 'Downloadables', path: '/resources/downloads' },
      { name: 'Archives', path: '/resources/archives' },
      { name: 'Videos', path: '/resources/videos' },
    ],
  },
  {
    name: 'Community',
    subLinks: [
      { name: 'Events', path: '/community/events' },
      { name: 'News', path: '/community/news' },
      { name: 'Gallery', path: '/community/gallery' },
      { name: 'Awardees', path: '/community/awardees' },
      { name: 'Goodwill Messages', path: '/community/goodwill-messages' },
      { name: 'Freebies', path: '/community/freebies' },
    ],
  },
  {
    name: 'Support',
    subLinks: [
      { name: 'CPD Programs', path: '/support/cpd' },
      { name: 'Manufacturer of Month', path: '/support/manufacturer-spotlight' },
      { name: 'Benevolent Fund', path: '/support/benevolent-fund' },
      { name: 'Sponsorships', path: '/support/sponsorships' },
      { name: 'Donate', path: '/support/donate' },
      { name: 'MDAs', path: '/support/mdas' },
    ],
  },
  {
    name: 'Contact',
    subLinks: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQs', path: '/faqs' },
    ],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdown = (name) => setOpenDropdown(openDropdown === name ? '' : name);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    // Redirect to search results page
    // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-[#f0f5f3] shadow-sm font-sans w-full sticky top-0 z-30" style={{fontFamily:'Montserrat'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col py-3 sm:flex-row sm:items-center sm:justify-between sm:h-24 sm:py-0">
            
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <a href="/" title="Homepage">
                <img className="h-20 w-auto" src={logo} alt="The Nigerian Institute of Architects Logo" />
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-3 sm:mt-0 sm:justify-start">
              
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="search"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full sm:w-48 lg:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#546e7a] focus:border-transparent transition-all"
                />
              </form>

              <div className="hidden sm:flex items-center space-x-3">
                <a href="/member" className="px-4 py-2 bg-[#546e7a] text-white rounded-md text-sm font-semibold hover:bg-[#37474f] transition-colors duration-300">
                  BECOME A MEMBER
                </a>
                <a href="/login" className="px-4 py-2 bg-white text-[#546e7a] border-2 border-[#546e7a] rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors duration-300">
                  SIGN IN
                </a>
              </div>
              
              <div className="flex sm:hidden items-center space-x-2">
                 <a href="/member" className="px-3 py-1.5 bg-[#546e7a] text-white rounded-md text-xs font-semibold hover:bg-[#37474f] transition-colors duration-300">
                   BECOME A MEMBER
                 </a>
                 <a href="/login" className="px-3 py-1.5 bg-white text-[#546e7a] border-2 border-[#546e7a] rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors duration-300">
                   SIGN IN
                 </a>
              </div>

              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-200/80 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="space-y-1.5">
                  <span className="block w-8 h-0.5 bg-gray-700"></span>
                  <span className="block w-8 h-0.5 bg-gray-700"></span>
                  <span className="block w-8 h-0.5 bg-gray-700"></span>
                </div>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* --- SIDE MENU --- */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#a6d8c4] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b border-black/10">
          <a href="/" onClick={toggleMenu}>
            <img className="h-14 w-auto" src={logo} alt="Logo" />
          </a>
          <button
            onClick={toggleMenu}
            className="p-2 text-3xl text-gray-800 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <form onSubmit={handleSearch} className="px-4 py-3 md:hidden">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="search"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#546e7a] focus:border-transparent"
            />
          </div>
        </form>

        <nav className="p-2 text-lg overflow-y-auto h-[calc(100vh-80px)]" style={{fontFamily:'Montserrat'}}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-black/10 last:border-b-0">
                {link.subLinks ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(link.name)}
                      className={`w-full flex justify-between items-center text-left py-4 px-2 transition-colors duration-200 ${openDropdown === link.name ? 'bg-[#37474f] text-white' : 'hover:bg-black/5 text-gray-800'}`}
                    >
                      <span className="font-semibold">{link.name}</span>
                      <span className={`transform transition-transform duration-300 ${openDropdown === link.name ? 'rotate-45' : 'rotate-0'}`}>
                        <AiOutlinePlus size={20} />
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === link.name ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <ul className="bg-black/5 py-2 px-2">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <a
                                href={subLink.path}
                                onClick={toggleMenu}
                                className="block py-2 px-4 text-gray-700 rounded-md hover:bg-[#37474f] hover:text-white transition-colors duration-200"
                              >
                                {subLink.name}
                                <hr className="my-1 border-t border-gray-300" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.path}
                    onClick={toggleMenu}
                    className={`block w-full text-left py-4 px-2 font-semibold transition-colors duration-200 ${link.name === "Home" ? 'bg-[#37474f] text-white' : 'hover:bg-black/5 text-gray-800'}`}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar;