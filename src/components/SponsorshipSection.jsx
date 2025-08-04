import React from 'react';
// Make sure your images object is set up correctly, e.g.:
// const images = { oasis: '/path/to/your-oasis-image.jpg' };
import images from '../constants/images';

// Data extracted from the image for easier management
const sponsorshipTiers = [
  { name: 'Full Page', price: '₦75,000' },
  { name: 'Inside Back Page', price: '₦100,000' },
  { name: 'Half Page', price: '₦50,000' },
  { name: 'Back Page', price: '₦150,000' },
  { name: 'Quarter Page', price: '₦25,000' },
  { name: 'Centrespread', price: '₦200,000' },
];

const paymentDetails = {
  accountName: 'NIG. Institute of Architects',
  bankName: 'First Bank',
  accountNumber: '2027883637',
};

// A simple bank icon component
const BankIcon = () => (
  <div className="w-24 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-emerald-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-emerald-600"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6 3v7H4v2h2v7h2v-7h4v7h2v-7h2v-2h-2V3h-2v7H8V3H6z" />
    </svg>
  </div>
);




const SponsorshipSection = () => {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
              Sponsorship & Adverts
            </h2>
            <p className="text-lg text-gray-600">
              Support OASIS 8.0 and showcase your brand to a dedicated audience of architects and built environment professionals.
            </p>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sponsorshipTiers.map((tier) => (
                <div key={tier.name} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-base font-medium text-gray-500">{tier.name}</p>
                  <p className="text-2xl font-bold text-emerald-700 mt-1">{tier.price}</p>
                </div>
              ))}
            </div>

            {/* Payment Details Card */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg flex items-center space-x-6">
              <div className="flex-shrink-0">
                <BankIcon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-800">Payment Information</h3>
                <p className="text-sm text-emerald-700 mt-1">
                  <strong>Account:</strong> {paymentDetails.accountName} <br/>
                  <strong>Bank:</strong> {paymentDetails.bankName} <br/>
                  <strong>Number:</strong> {paymentDetails.accountNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center">
            <img 
              src={images.oasis}
              alt="OASIS Sponsorship" 
              className="w-full max-w-md lg:max-w-none h-auto rounded-2xl shadow-2xl object-cover transform lg:rotate-3 transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;