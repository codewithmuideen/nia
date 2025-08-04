import React, { useState } from 'react';

// Reusable InfoBox component (No changes here)
const InfoBox = ({ color, title, children }) => {
  const colorClasses = {
    green: 'bg-[#26a69a]', // Teal
    red: 'bg-[#ef5350]',   // Red
  };

  return (
    <div className={`${colorClasses[color]} text-white p-6 rounded-md shadow-md`}>
      {title && <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>}
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  );
};

const JoinNiaPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [reference, setReference] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the reference here
    alert(`Confirming reference: ${reference}`);
    setShowModal(false);
    setReference('');
  };

  return (
    <div className="bg-gray-50 font-sans flex justify-center py-14 sm:py-20 px-4 relative" style={{ fontFamily: 'Montserrat' }}>
      <main className="max-w-3xl w-full space-y-10">
        {/* Title Section */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-800">Join the NIA</h1>
          <div className="border-t-2 border-gray-300 mt-4 w-full"></div>
        </div>

        {/* New Members Section */}
        <InfoBox color="green" title="New to NIA? Join">
          If you are NOT a member of the Nigerian Institute of Architects and would like to join,
          get started using the button below. Choose your Application Category and proceed to make payment.
        </InfoBox>

        {/* Warning Section */}
        <InfoBox color="red">
          Do not click this button (JOIN) IF you're already a member of the institute (with a membership number).
          Registering AGAIN as a Member has <strong className="font-extrabold uppercase">grave repercussions</strong>.
          Please contact the secretariat if you can't access your Member Profile.
        </InfoBox>

        {/* Join Now Button */}
        <div className="text-center" style={{ fontFamily: 'Montserrat' }}>
          <a
            href="/member"
            className="inline-block bg-[#26a69a] text-white font-bold py-3 px-10 rounded-md shadow-lg hover:bg-[#1e867c] transition-all duration-300 transform hover:scale-105"
          >
            JOIN NIA NOW!
          </a>
        </div>

        {/* Payment Reference Section */}
        <div className="text-center py-10 border-y border-gray-300 space-y-4" style={{ fontFamily: 'Montserrat' }}>
          <p className="text-gray-700 text-lg">
            Already paid and have a reference starting with <span className="font-semibold">‘j’</span>?
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-yellow-500 text-white font-medium py-2.5 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
          >
            I have a payment reference
          </button>
        </div>

        {/* Existing Members Info */}
        <InfoBox color="red" title="Existing Members">
          If you have an existing NIA Membership ID and you wish to UPGRADE to another membership category,
          please <strong className="font-extrabold">login to continue</strong> using your existing membership ID.
        </InfoBox>

        {/* Login Link */}
        <div className="text-center" style={{ fontFamily: 'Montserrat' }}>
          <p className="text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Go to Login
            </a>
          </p>
        </div>
      </main>

      {/* --- MODAL (This is the updated section) --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Montserrat' }}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm p-8 text-center">
            
            {/* Icon */}
            <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center border-2 border-cyan-400 rounded-full">
              <span className="text-4xl font-light text-cyan-400 italic">i</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Paystack Payment Reference
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-500 mb-8">
              Enter your payment reference if you've already paid, check your email for it
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Paystack Reference"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-8"
                required
              />
              
              {/* Button Group */}
              <div className="flex justify-center gap-4" style={{ fontFamily: 'Montserrat' }}>
                <button
                  type="submit"
                  className="bg-[#26a69a] hover:bg-[#1e867c] text-white font-bold py-2 px-8 rounded-md transition-colors"
                >
                  Confirm
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-[#ef5350] hover:bg-[#d84a48] text-white font-bold py-2 px-8 rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinNiaPage;