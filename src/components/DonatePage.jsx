// src/pages/DonatePage.jsx
import React, { useState } from 'react';
import { FiX, FiCreditCard, FiDollarSign, FiMail, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { FaUniversity } from 'react-icons/fa';

// --- Reusable InfoBox Component (optional, but good for consistency) ---
const InfoBox = ({ color, title, children }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-[#26a69a]',
  };
  return (
    <div className={`${colorClasses[color]} text-white p-6 rounded-xl shadow-md`}>
      {title && <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>}
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  );
};

// --- Modal for Bank Transfer ---
const BankTransferModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <FiX size={24} />
        </button>
        <FaUniversity className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bank Transfer Details</h2>
        <div className="text-gray-800 space-y-3 mb-6 text-left bg-gray-50 p-4 rounded-lg border">
          <p><strong>Bank Name:</strong> First Bank</p>
          <p><strong>Account Number:</strong> 2001827668</p>
          <p><strong>Account Name:</strong> Nigerian Institute of Architects, Osun State Chapter</p>
        </div>
        <button onClick={onClose} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
          Done
        </button>
      </div>
    </div>
  );
};

// --- Modal for Card Payment ---
const CardPaymentModal = ({ show, onClose }) => {
  const [step, setStep] = useState('enterAmount');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    // Reset state on close
    setStep('enterAmount');
    setAmount('');
    setEmail('');
    onClose();
  };

  const handleProceedToEmail = () => {
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    setStep('enterEmail');
  };

  const handleProceedToConfirm = () => {
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    setStep('confirmPayment');
  };

  const handleFinalPayment = async () => {
    setStep('loading');
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          // IMPORTANT: Paystack expects the amount in the lowest currency unit (kobo)
          amount: amount, 
          email: email,
          type: 'Donation' // This helps your backend identify the transaction type
        }),
      });
      const data = await response.json();

      if (data.authorization_url) {
        window.location.href = data.authorization_url; // Redirect to Paystack
      } else {
        alert('Payment initialization failed.');
        setStep('confirmPayment'); // Go back to confirmation step on failure
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
      setStep('confirmPayment');
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 'enterAmount':
        return (
          <>
            <FiDollarSign className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Enter Donation Amount</h2>
            <p className="text-gray-500 mt-2 mb-6">Your generosity is greatly appreciated.</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₦</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="5000"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg mb-6"
              />
            </div>
            <button onClick={handleProceedToEmail} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue</button>
          </>
        );
      case 'enterEmail':
        return (
          <>
            <FiMail className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Your Email Address</h2>
            <p className="text-gray-500 mt-2 mb-6">A receipt for your donation will be sent here.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6"
            />
            <button onClick={handleProceedToConfirm} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue</button>
          </>
        );
      case 'confirmPayment':
        return (
          <>
            <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Confirm Your Donation</h2>
            <div className="text-left text-gray-600 my-6 bg-gray-100 p-4 rounded-lg">
              <p className="flex justify-between"><strong>Email:</strong> <span>{email}</span></p>
              <p className="flex justify-between mt-2 pt-2 border-t text-lg"><strong>Amount:</strong> <span className="font-bold">₦{Number(amount).toLocaleString()}</span></p>
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={() => setStep('enterEmail')} className="bg-gray-500 text-white font-bold py-3 px-8 rounded-lg">Back</button>
              <button onClick={handleFinalPayment} className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg">Pay Now</button>
            </div>
          </>
        );
        case 'loading':
        return (
          <>
            <FiLoader className="mx-auto h-16 w-16 text-cyan-500 mb-4 animate-spin" />
            <h2 className="text-2xl font-bold text-gray-800">Processing...</h2>
            <p className="text-gray-500 mt-2 mb-6">Redirecting you to our secure payment gateway.</p>
          </>
        );
      default:
        return null;
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <FiX size={24} />
        </button>
        {renderStepContent()}
      </div>
    </div>
  );
};


// --- The Main Donate Page Component ---
const DonatePage = () => {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  return (
    <div className="bg-gray-50 font-sans flex justify-center py-14 px-4" style={{ fontFamily: 'Montserrat' }}>
      <main className="max-w-3xl w-full space-y-10">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800">Support Our Mission</h1>
          <p className="text-lg text-gray-500 mt-2">Your contribution empowers us to continue our work in the community.</p>
          <div className="w-24 h-1 bg-[#26a69a] mx-auto mt-4 rounded"></div>
        </div>

        <InfoBox color="green" title="Your Impact">
          Every donation, no matter the size, helps us fund vital projects, educational programs, and advocacy for architectural excellence in Osun State.
        </InfoBox>

        <div className="flex justify-center items-center gap-6 flex-wrap bg-white p-8 rounded-xl shadow-lg">
          {/* Bank Transfer Button */}
          <button
            onClick={() => setShowBankModal(true)}
            className="flex-1 min-w-[200px] bg-blue-600 text-white font-bold py-4 px-8 text-lg rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <FaUniversity className="inline-block mr-3 -mt-1" size={22} />
            Bank Transfer
          </button>
          
          {/* Card Payment Button */}
          <button
            onClick={() => setShowCardModal(true)}
            className="flex-1 min-w-[200px] bg-[#26a69a] text-white font-bold py-4 px-8 text-lg rounded-lg shadow-md hover:bg-[#1e867c] transition-transform transform hover:scale-105"
          >
            <FiCreditCard className="inline-block mr-3 -mt-1" size={22} />
            Pay with Card
          </button>
        </div>

      </main>

      {/* Render the Modals */}
      <BankTransferModal show={showBankModal} onClose={() => setShowBankModal(false)} />
      <CardPaymentModal show={showCardModal} onClose={() => setShowCardModal(false)} />
    </div>
  );
};

export default DonatePage;