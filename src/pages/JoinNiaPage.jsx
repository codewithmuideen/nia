// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { FiInfo, FiCheckCircle, FiLogIn, FiUserCheck, FiCreditCard, FiMail, FiX } from 'react-icons/fi';

// // --- Stripe Publishable Key ---
// const stripePromise = loadStripe('pk_test_51R7EHGC6XK5vokuTYuH6kE2d2X6jHK1bJ1Zzt1A22voS0NkKkHUmLrV6YpVaeqLYLwVVwsNkLXcAfhvII1rWGNCI00mauZJFhk');

// const InfoBox = ({ color, title, children }) => {
//   const colorClasses = {
//     green: 'bg-[#26a69a]',
//     red: 'bg-[#ef5350]',
//   };
//   return (
//     <div className={`${colorClasses[color]} text-white p-6 rounded-lg shadow-md`}>
//       {title && <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>}
//       <div className="text-base leading-relaxed">{children}</div>
//     </div>
//   );
// };

// const MembershipModal = ({ show, onClose, onPayment }) => {
//   const [step, setStep] = useState('initial');
//   const [isExistingMember, setIsExistingMember] = useState('');
//   const [category, setCategory] = useState('');
//   const [email, setEmail] = useState('');
//   const [paymentDetails, setPaymentDetails] = useState({ amount: 0, type: '' });

//   const membershipOptions = {
//     'Student Membership': 2500,
//     'Architectural Technologist Membership': 5000,
//     'Graduate Membership': 5000,
//     'Associate Membership': 5000,
//     'Full Membership': 10000,
//   };

//   const handleClose = () => {
//     setStep('initial');
//     setIsExistingMember('');
//     setCategory('');
//     setEmail('');
//     onClose();
//   };

//   const handleContinue = () => {
//     if (step === 'initial') {
//       if (isExistingMember === 'Yes') setStep('upgradeInfo');
//       else if (isExistingMember === 'No') setStep('selectCategory');
//       else alert('Please select an option.');
//     } else if (step === 'selectCategory') {
//       if (category) {
//         const amount = membershipOptions[category];
//         setPaymentDetails({ amount, type: `${category} Application` });
//         setStep('confirmEmail');
//       } else alert('Please select a membership category.');
//     } else if (step === 'confirmEmail') {
//       if (email && email.includes('@')) setStep('confirmPayment');
//       else alert('Please enter a valid email address.');
//     }
//   };

//   const handleFinalPayment = async () => {
//     try {
//       const response = await fetch('http://localhost:4242/create-checkout-session', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...paymentDetails, email }),
//       });
//       const session = await response.json();
//       const stripe = await stripePromise;
//       const result = await stripe.redirectToCheckout({ sessionId: session.id });
//       if (result.error) alert(result.error.message);
//     } catch (err) {
//       alert('Payment failed. Please try again.');
//     }
//   };

//   const renderStepContent = () => {
//     switch (step) {
//       case 'initial':
//         return (
//           <>
//             <FiUserCheck className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-800">Existing Member?</h2>
//             <p className="text-gray-500 mt-2 mb-6">Do you have an existing NIA Membership ID? (e.g., A/1234 or G/1234)</p>
//             <select value={isExistingMember} onChange={(e) => setIsExistingMember(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6">
//               <option value="">Select Yes or No</option>
//               <option value="No">No</option>
//               <option value="Yes">Yes</option>
//             </select>
//             <button onClick={handleContinue} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue</button>
//           </>
//         );
//       case 'selectCategory':
//         return (
//           <>
//             <FiCreditCard className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-800">Membership Category</h2>
//             <p className="text-gray-500 mt-2 mb-6">Ensure you select the right category before making payment.</p>
//             <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6">
//               <option value="">Select your Application Category</option>
//               {Object.keys(membershipOptions).map(opt => <option key={opt} value={opt}>{opt}</option>)}
//             </select>
//             <button onClick={handleContinue} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue</button>
//           </>
//         );
//       case 'confirmEmail':
//         return (
//           <>
//             <FiMail className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-800">Confirm Email Address</h2>
//             <p className="text-gray-500 mt-2 mb-6">Ensure it's correct as this email will be used for all correspondence.</p>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your.email@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6" />
//             <div className="flex justify-center gap-4">
//               <button onClick={handleClose} className="bg-gray-500 text-white font-bold py-2 px-8 rounded-md">Cancel</button>
//               <button onClick={handleContinue} className="bg-blue-600 text-white font-bold py-2 px-8 rounded-md">OK</button>
//             </div>
//           </>
//         );
//       case 'confirmPayment':
//         return (
//           <>
//             <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-800">Confirm and Pay</h2>
//             <div className="text-gray-600 my-6 bg-gray-100 p-4 rounded-lg">
//               <p><strong>Email:</strong> {email}</p>
//               <p><strong>Application Type:</strong> {paymentDetails.type}</p>
//               <p><strong>Amount:</strong> ₦{paymentDetails.amount.toLocaleString()}</p>
//             </div>
//             <div className="flex justify-center gap-4">
//               <button onClick={handleClose} className="bg-[#ef5350] text-white font-bold py-2 px-8 rounded-md">Cancel</button>
//               <button onClick={handleFinalPayment} className="bg-green-600 text-white font-bold py-2 px-8 rounded-md">Pay Now</button>
//             </div>
//           </>
//         );
//       case 'upgradeInfo':
//         return (
//           <>
//             <FiLogIn className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
//             <h2 className="text-2xl font-bold text-gray-800">Upgrade your Membership</h2>
//             <p className="text-gray-500 mt-2 mb-6">Please Login to <a href="/login" className="text-blue-600 font-semibold">myNIA</a> to upgrade your membership.</p>
//             <button onClick={handleClose} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">OK</button>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Montserrat' }}>
//       <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center relative">
//         <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
//           <FiX size={24} />
//         </button>
//         {renderStepContent()}
//       </div>
//     </div>
//   );
// };

// const JoinNiaPage = () => {
//   const [showJoinModal, setShowJoinModal] = useState(false);

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="bg-gray-50 font-sans flex justify-center py-14 px-4" style={{ fontFamily: 'Montserrat' }}>
//         <main className="max-w-3xl w-full space-y-10">
//           <div className="text-center mb-4">
//             <h1 className="text-3xl font-semibold text-gray-800">Join the NIA</h1>
//             <div className="border-t-2 border-gray-300 mt-4"></div>
//           </div>

//           <InfoBox color="green" title="New to NIA? Join">
//             If you are NOT a member of the Nigerian Institute of Architects and would like to join, get started using the button below.
//           </InfoBox>

//           <InfoBox color="red">
//             Do not click this button (JOIN) IF you're already a member. Registering again has <strong className="font-extrabold uppercase">grave repercussions</strong>.
//           </InfoBox>

//           <div className="text-center" style={{ fontFamily: 'Montserrat' }}>
//             <button
//               onClick={() => setShowJoinModal(true)}
//               className="bg-[#26a69a] text-white font-bold py-3 px-10 rounded-md hover:bg-[#1e867c]"
//             >
//               JOIN NIA NOW!
//             </button>
//           </div>

//           <InfoBox color="red" title="Existing Members" style={{ fontFamily: 'Montserrat' }}>
//             If you already have an NIA Membership ID and wish to UPGRADE, please <strong>login</strong> using your existing ID.
//           </InfoBox>

//           <div className="text-center" style={{ fontFamily: 'Montserrat' }}>
//             <p className="text-gray-700">
//               Already have an account?{' '}
//               <a href="/login" className="text-blue-600 font-semibold hover:underline">
//                 Go to Login
//               </a>
//             </p>
//           </div>
//         </main>

//         <MembershipModal
//           show={showJoinModal}
//           onClose={() => setShowJoinModal(false)}
//           onPayment={() => {}}
//         />
//       </div>
//     </Elements>
//   );
// };

// export default JoinNiaPage;




import React, { useState } from 'react';
import { FiInfo, FiCheckCircle, FiLogIn, FiUserCheck, FiCreditCard, FiMail, FiX } from 'react-icons/fi';

const InfoBox = ({ color, title, children }) => {
  const colorClasses = {
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

export const MembershipModal = ({ show, onClose }) => {
  const [step, setStep] = useState('initial');
  const [isExistingMember, setIsExistingMember] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({ amount: 0, type: '' });

  const membershipOptions = {
    'Student Membership': 2500,
    'Architectural Technologist Membership': 5000,
    'Graduate Membership': 5000,
    'Associate Membership': 5000,
    'Full Membership': 10000,
  };

  const handleClose = () => {
    setStep('initial');
    setIsExistingMember('');
    setCategory('');
    setEmail('');
    onClose();
  };

  const handleContinue = () => {
    if (step === 'initial') {
      if (isExistingMember === 'Yes') setStep('upgradeInfo');
      else if (isExistingMember === 'No') setStep('selectCategory');
      else alert('Please select an option.');
    } else if (step === 'selectCategory') {
      if (category) {
        const amount = membershipOptions[category];
        setPaymentDetails({ amount, type: `${category} Application` });
        setStep('confirmEmail');
      } else alert('Please select a membership category.');
    } else if (step === 'confirmEmail') {
      if (email && email.includes('@')) setStep('confirmPayment');
      else alert('Please enter a valid email address.');
    }
  };

  const handleFinalPayment = async () => {
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...paymentDetails, email }),
      });
      const data = await response.json();

      if (data.authorization_url) {
        // Redirect to Paystack payment page
        window.location.href = data.authorization_url;
      } else {
        alert('Payment initialization failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Payment failed. Please try again.');
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 'initial':
        return (
          <>
            <FiUserCheck className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Existing Member?</h2>
            <p className="text-gray-500 mt-2 mb-6">Do you have an existing NIA Membership ID? (e.g., A/1234 or G/1234)</p>
            <select value={isExistingMember} onChange={(e) => setIsExistingMember(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6">
              <option value="">Select Yes or No</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <button onClick={handleContinue} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue</button>
          </>
        );
      case 'selectCategory':
        return (
          <>
            <FiCreditCard className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Membership Category</h2>
            <p className="text-gray-500 mt-2 mb-6">Ensure you select the right category before making payment.</p>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6">
              <option value="">Select your Application Category</option>
              {Object.keys(membershipOptions).map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <button onClick={handleContinue} className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-lg hover:bg-[#1e867c]">Continue</button>
          </>
        );
      case 'confirmEmail':
        return (
          <>
            <FiMail className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Confirm Email Address</h2>
            <p className="text-gray-500 mt-2 mb-6">Ensure it's correct as this email will be used for all correspondence.</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your.email@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6" />
            <div className="flex justify-center gap-4">
              <button onClick={handleClose} className="bg-gray-500 text-white font-bold py-2 px-8 rounded-md">Cancel</button>
              <button onClick={handleContinue} className="bg-blue-600 text-white font-bold py-2 px-8 rounded-md">OK</button>
            </div>
          </>
        );
      case 'confirmPayment':
        return (
          <>
            <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Confirm and Pay</h2>
            <div className="text-gray-600 my-6 bg-gray-100 p-4 rounded-lg">
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Application Type:</strong> {paymentDetails.type}</p>
              <p><strong>Amount:</strong> ₦{paymentDetails.amount.toLocaleString()}</p>
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={handleClose} className="bg-[#ef5350] text-white font-bold py-2 px-8 rounded-md">Cancel</button>
              <button onClick={handleFinalPayment} className="bg-green-600 text-white font-bold py-2 px-8 rounded-md">Pay Now</button>
            </div>
          </>
        );
      case 'upgradeInfo':
        return (
          <>
            <FiLogIn className="mx-auto h-16 w-16 text-cyan-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Upgrade your Membership</h2>
            <p className="text-gray-500 mt-2 mb-6">Please Login to <a href="/login" className="text-blue-600 font-semibold">myNIA</a> to upgrade your membership.</p>
            <button onClick={handleClose} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">OK</button>
          </>
        );
      default:
        return null;
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ fontFamily: 'Montserrat' }}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <FiX size={24} />
        </button>
        {renderStepContent()}
      </div>
    </div>
  );
};

const JoinNiaPage = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <div className="bg-gray-50 font-sans flex justify-center py-14 px-4" style={{ fontFamily: 'Montserrat' }}>
      <main className="max-w-3xl w-full space-y-10">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-800">Join the NIA</h1>
          <div className="border-t-2 border-gray-300 mt-4"></div>
        </div>

        <InfoBox color="green" title="New to NIA? Join">
          If you are NOT a member of the Nigerian Institute of Architects and would like to join, get started using the button below.
        </InfoBox>

        <InfoBox color="red">
          Do not click this button (JOIN) IF you're already a member. Registering again has <strong className="font-extrabold uppercase">grave repercussions</strong>.
        </InfoBox>

        <div className="text-center">
          <button
            onClick={() => setShowJoinModal(true)}
            className="bg-[#26a69a] text-white font-bold py-3 px-10 rounded-md hover:bg-[#1e867c]"
          >
            JOIN NIA NOW!
          </button>
        </div>

        <InfoBox color="red" title="Existing Members">
          If you already have an NIA Membership ID and wish to UPGRADE, please <strong>login</strong> using your existing ID.
        </InfoBox>

        <div className="text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Go to Login
            </a>
          </p>
        </div>
      </main>

      <MembershipModal
        show={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </div>
  );
};

export default JoinNiaPage;



