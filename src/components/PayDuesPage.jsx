// src/pages/PayDuesPage.js
import React, { useState } from 'react';
import { FiCreditCard, FiCheckCircle, FiSearch, FiMail, FiX, FiFileText, FiAlertTriangle, FiLoader, FiUserPlus } from 'react-icons/fi';

// STEP 1: Import the MembershipModal from your JoinNiaPage file
import { MembershipModal } from '../pages/JoinNiaPage'; 

// --- Reusable Components (can be moved to a separate file) ---
const InfoBox = ({ color, title, children }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-[#26a69a]',
    red: 'bg-[#ef5350]',
  };
  return (
    <div className={`${colorClasses[color]} text-white p-6 rounded-lg shadow-md`}>
      {title && <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>}
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  );
};

// ... The PayDuesModal component remains exactly the same as before ...
const PayDuesModal = ({ show, onClose }) => {
  const [step, setStep] = useState('enterId'); // Initial step
  const [membershipId, setMembershipId] = useState('');
  const [email, setEmail] = useState('');
  const [memberData, setMemberData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // --- This is a MOCK API call. Replace with your actual backend logic. ---
  const handleFindMember = async () => {
    if (!membershipId) {
      alert('Please enter your Membership ID.');
      return;
    }
    setStep('loading'); // Show loading state

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // ** REPLACE THIS MOCK LOGIC WITH YOUR ACTUAL API FETCH **
    if (membershipId.toUpperCase() === 'A/1234') {
      setMemberData({
        id: 'A/1234',
        name: 'John Doe Architect',
        email: 'john.doe@example.com', // Pre-fill email if available from backend
        dues: [
          { description: 'Annual Dues 2024', amount: 15000 },
          { description: 'Building Levy', amount: 5000 },
        ],
        total: 20000,
      });
      setEmail('john.doe@example.com'); // Set email for the next step
      setStep('confirmDues');
    } else {
      setErrorMsg(`No member found with ID "${membershipId}". Please check the ID and try again, or contact support.`);
      setStep('error');
    }
    // ** END OF MOCK LOGIC **
  };
  
  const handleFinalPayment = async () => {
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: memberData.total,
          email: email,
          type: `Annual Dues for ${memberData.id}` 
        }),
      });
      const data = await response.json();

      if (data.authorization_url) {
        window.location.href = data.authorization_url; // Redirect to Paystack
      } else {
        alert('Payment initialization failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Payment failed. Please try again.');
    }
  };

  const handleClose = () => {
    setStep('enterId');
    setMembershipId('');
    setEmail('');
    setMemberData(null);
    setErrorMsg('');
    onClose();
  };

  const handleTryAgain = () => {
    setStep('enterId');
    setErrorMsg('');
  };
  
  // No changes needed inside the renderStepContent for PayDuesModal
  const renderStepContent = () => {
      //... all the cases for PayDuesModal are here, unchanged
    switch (step) {
      case 'enterId':
        return (
          <>
            <FiSearch className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Find Your Account</h2>
            <p className="text-gray-500 mt-2 mb-6">Please enter your NIA Membership ID to retrieve your dues information.</p>
            <input
              type="text"
              value={membershipId}
              onChange={(e) => setMembershipId(e.target.value)}
              placeholder="e.g., A/1234"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 uppercase"
            />
            <button onClick={handleFindMember} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Find My Dues</button>
          </>
        );
      case 'loading':
        return (
          <>
            <FiLoader className="mx-auto h-16 w-16 text-cyan-500 mb-4 animate-spin" />
            <h2 className="text-2xl font-bold text-gray-800">Searching...</h2>
            <p className="text-gray-500 mt-2 mb-6">Please wait while we retrieve your records.</p>
          </>
        );
      case 'error':
        return (
          <>
            <FiAlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Member Not Found</h2>
            <p className="text-gray-500 mt-2 mb-6 bg-red-50 p-4 rounded-md">{errorMsg}</p>
            <button onClick={handleTryAgain} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Try Again</button>
          </>
        );
      case 'confirmDues':
        return (
          <>
            <FiFileText className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Outstanding Dues</h2>
            <p className="text-gray-500 mt-2 mb-6">Welcome, <strong>{memberData.name}</strong>. Please review your outstanding payments below.</p>
            <div className="text-left bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6 space-y-2">
              {memberData.dues.map((due, index) => (
                 <div key={index} className="flex justify-between">
                   <span>{due.description}</span>
                   <span className="font-semibold">₦{due.amount.toLocaleString()}</span>
                 </div>
              ))}
              <div className="border-t border-gray-300 my-2 pt-2 flex justify-between font-bold text-lg">
                  <span>Total Due</span>
                  <span>₦{memberData.total.toLocaleString()}</span>
              </div>
            </div>
            <button onClick={() => setStep('confirmEmail')} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue to Payment</button>
          </>
        );
      case 'confirmEmail':
        return (
          <>
            <FiMail className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Confirm Your Email</h2>
            <p className="text-gray-500 mt-2 mb-6">Your payment receipt will be sent to this address.</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your.email@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6" />
            <button onClick={() => setStep('confirmPayment')} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Confirm and Proceed</button>
          </>
        );
      case 'confirmPayment':
        return (
          <>
            <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Final Confirmation</h2>
            <div className="text-left text-gray-600 my-6 bg-gray-100 p-4 rounded-lg">
              <p><strong>Member ID:</strong> {memberData.id}</p>
              <p><strong>Name:</strong> {memberData.name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p className="mt-2 pt-2 border-t font-bold text-lg"><strong>Total Amount:</strong> ₦{memberData.total.toLocaleString()}</p>
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={() => setStep('confirmDues')} className="bg-gray-500 text-white font-bold py-3 px-8 rounded-lg">Back</button>
              <button onClick={handleFinalPayment} className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg">Pay Now</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Montserrat' }}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center relative transition-transform transform scale-100">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <FiX size={24} />
        </button>
        {renderStepContent()}
      </div>
    </div>
  );
};

// --- The Main Page Component ---
const PayDuesPage = () => {
  const [showDuesModal, setShowDuesModal] = useState(false);
  // STEP 2: Add state for the new modal
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <div className="bg-gray-50 font-sans flex justify-center py-14 px-4" style={{ fontFamily: 'Montserrat' }}>
      <main className="max-w-3xl w-full space-y-10">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800">Member Payments</h1>
          <p className="text-lg text-gray-500 mt-2">Pay your annual dues or join the institute.</p>
          <div className="w-24 h-1 bg-[#26a69a] mx-auto mt-4 rounded"></div>
        </div>

        <InfoBox color="blue" title="Pay Your Dues">
          For existing members with an NIA ID. Use this option to securely pay your annual dues and any outstanding levies.
        </InfoBox>

        <InfoBox color="red" title="Join The Institute">
          For aspiring architects who are not yet members. Use this option to start your application process.
        </InfoBox>

        {/* STEP 3: Create a container for the buttons and add the new button */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
           {/* Existing Button */}
          <button
            onClick={() => setShowDuesModal(true)}
            className="bg-[#26a69a] text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:bg-[#1e867c] transition-transform transform hover:scale-105"
          >
            <FiCreditCard className="inline-block mr-2 -mt-1" />
            MY DUES
          </button>
          
          {/* New Button */}
          <button
            onClick={() => setShowJoinModal(true)}
            className="bg-blue-600 text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <FiUserPlus className="inline-block mr-2 -mt-1" />
            PAY DUES
          </button>
        </div>

      </main>

      {/* Existing Modal for paying dues */}
      <PayDuesModal
        show={showDuesModal}
        onClose={() => setShowDuesModal(false)}
      />

      {/* STEP 4: Render the imported MembershipModal */}
      <MembershipModal
        show={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </div>
  );
};

export default PayDuesPage;