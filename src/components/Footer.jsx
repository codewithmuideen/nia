import React from 'react';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn,
  FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp
} from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import images from '../constants/images';

const aboutLinks = [
  { text: 'About', href: '#' },
  { text: 'How to Join', href: '#' },
  { text: 'Members\' Portal', href: '#' },
  { text: 'Events', href: '#' },
  { text: 'E-Library', href: '#' },
  { text: 'Press', href: '#' },
  { text: 'AGM/BGM & Conferences', href: '#' },
];

const instituteLinks = [
  { text: 'FAQ', href: '#' },
  { text: 'Contact Us', href: '#' },
  { text: 'Privacy Policy', href: '#' },
  { text: 'Terms & Conditions', href: '#' },
];

const externalLinks = [
  { text: 'NIA State Chapters', href: '#' },
  { text: 'ARCON', href: '#' },
  { text: 'Accredited Institutions', href: '#' },
];

const socialLinks = [
  { icon: <FaLinkedinIn />, href: '#', name: 'LinkedIn' },
  { icon: <FaFacebookF />, href: '#', name: 'Facebook' },
  { icon: <FaTwitter />, href: '#', name: 'Twitter' },
  { icon: <FaInstagram />, href: '#', name: 'Instagram' },
  { icon: <FaTelegramPlane />, href: '#', name: 'Telegram' },
  { icon: <FaWhatsapp />, href: '#', name: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 font-sans" style={{ fontFamily: 'Montserrat' }}>
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Institute Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={images.logowhite} alt="NIA Seal" />
            </div>
            <p className="text-base leading-relaxed mb-6">
              NIA was founded in 1960 and we remain true to producing members that create superior designs, shaping our world, putting safety first, and creating opportunities for our people.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 flex items-center justify-center bg-[#2a2a2a] text-white rounded-md transition-colors hover:bg-green-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact the NIA</h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 mt-1 text-gray-400 flex-shrink-0" />
                <span>Opposite, State House of Assembly, Behind Nigeria Revenue Service, Gbongan road, 
                  Osogbo, Osun State</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <a href="tel:+2348035771565" className="hover:text-white transition-colors">+2348035771565</a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <a href="tel:+2348033969807" className="hover:text-white transition-colors">+2348033969807</a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <a href="tel:+2349122100079" className="hover:text-white transition-colors">+2349122100079</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" />
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
            {/* <h3 className="text-white font-bold text-lg mt-8 mb-4">Work Hours</h3>
            <div className="text-base">
              <p>Monday - Friday</p>
              <p>9am to 5pm</p>
              <p className="mt-2">Closed: Saturday/Sunday</p>
            </div> */}
          </div>

          {/* Column 3: About Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About the NIA</h3>
            <ul className="space-y-3 text-base">
              {aboutLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institute & External Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">The Institute</h3>
            <ul className="space-y-3 text-base">
              {instituteLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-lg mt-8 mb-4">External Links</h3>
            <ul className="space-y-3 text-base">
              {externalLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nigerian Institute of Architects, Osun State Chapter. All rights reserved.</p>
          <p className="mt-2">
            Developed by{' '}
            <a
               href="https://wa.me/2348065958604?text=How%20may%20I%20help%20you%3F"
              className="text-[#2C5B43] hover:underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              NMHConcept
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
