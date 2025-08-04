import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import { CgSpinner } from 'react-icons/cg';

// --- Reusable component for contact info items ---
const ContactInfoItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' }); // idle, loading, success, error
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: '' });

    // --- Simulate API Call ---
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // --- Mock Success/Error Logic ---
    if (formData.email && formData.message) {
      setFormStatus({ status: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } else {
      setFormStatus({ status: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="bg-slate-900 font-sans text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            We're here to help. Reach out to us via phone, email, or our contact form.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Column: Info & Map --- */}
          <div className="space-y-12">
            <div className="space-y-8">
              <ContactInfoItem icon={<FiMapPin className="w-6 h-6 text-blue-400" />}>
                Our Office
                <p>Opposite State House of Assembly, Behind Nigeria Revenue Service, Gbongan Road, Osogbo, Osun State.</p>
              </ContactInfoItem>
              
              <ContactInfoItem icon={<FiPhone className="w-6 h-6 text-blue-400" />}>
                Phone Lines
                <a href="tel:+2348035771565" className="block hover:text-blue-400 transition-colors">+234 803 577 1565</a>
                <a href="tel:+2348033969807" className="block hover:text-blue-400 transition-colors">+234 803 396 9807</a>
                <a href="tel:+2349122100079" className="block hover:text-blue-400 transition-colors">+234 912 210 0079</a>
              </ContactInfoItem>

              <ContactInfoItem icon={<FiMail className="w-6 h-6 text-blue-400" />}>
                Email Us
                <a href="mailto:info@archiosun.com" className="hover:text-blue-400 transition-colors">info@archiosun.com</a>
                <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
              </ContactInfoItem>
            </div>
            
            {/* --- Embedded Map --- */}
            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.218556557675!2d4.536979615284346!3d7.659358109312658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037d8d2f5a896fb%3A0xe542f21136709477!2sGbongan-Osogbo%20Rd%2C%20Osogbo%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1671234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="filter grayscale-[0.5] contrast-125"
              ></iframe>
            </div>
          </div>
          
          {/* --- Right Column: Contact Form --- */}
          <div className="bg-slate-800/50 p-8 sm:p-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-300 capitalize mb-2">{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    required={field !== 'subject'}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus.status === 'loading'}
                  className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                  {formStatus.status === 'loading' ? (
                    <CgSpinner className="animate-spin h-5 w-5" />
                  ) : (
                    <>
                      <FiSend className="mr-3 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
            {formStatus.message && (
              <p className={`mt-4 text-center text-sm ${formStatus.status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {formStatus.message}
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;