import React, { useState } from 'react';
import { FiLock, FiEye, FiEyeOff, FiUserPlus } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import images from '../constants/images'; // Update this with your actual logo path

// Reusable InputWithIcon component
const InputWithIcon = ({ icon, label, placeholder, type = 'text', value, onChange, children }) => (
  <div className="flex items-center border border-gray-300 rounded-md p-3 bg-gray-50/50">
    <div className="pr-3 text-gray-400">{icon}</div>
    <div className="flex-grow">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
        required
      />
    </div>
    {children}
  </div>
);

const LoginPage = () => {
  const [membershipNumber, setMembershipNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal toggle

  const handleLogin = (e) => {
    e.preventDefault();
    setShowModal(true); // Show modal instead of real login
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen" style={{ fontFamily: 'Montserrat' }}>
      <div className="h-1.5 bg-yellow-400"></div>

      <div className="flex justify-center items-start py-10 sm:py-16 px-4">
        <main className="w-full max-w-lg bg-white p-6 sm:p-10 rounded-lg shadow-sm">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img src={images.logo} alt="NIA Seal" className="h-20 w-auto" />
          </div>

          {/* First Time Section */}
          <section className="text-center border-y border-gray-200 py-6 mb-8">
            <h2 className="text-xl font-semibold text-red-500 mb-3">First time here?</h2>
            <p className="text-gray-600 text-sm mb-4">
              Have a NIA Membership Number but no login access? <span>↓</span>
            </p>
            <a href="/contact">
              <button className="bg-[#5c6bc0] text-white font-semibold py-2.5 px-6 rounded-md hover:bg-[#4d5a9b] transition-colors">
                Find myNIA Account
              </button>
            </a>
          </section>

          {/* Login Form */}
          <section>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Welcome Back!</h2>
              <p className="text-gray-500 mt-1">Sign in if you already have an account on myNIA.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <InputWithIcon
                icon={<BsPerson size={24} />}
                label="NIA Membership Number"
                placeholder="M9999"
                value={membershipNumber}
                onChange={(e) => setMembershipNumber(e.target.value)}
              />

              <InputWithIcon
                icon={<FiLock size={24} />}
                label="Password"
                placeholder="Enter password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-800 pl-2"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </InputWithIcon>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#26a69a] text-white font-bold py-3 rounded-md hover:bg-[#208c81] transition-colors"
              >
                Log In
              </button>
            </form>

            {/* Support Links */}
            <div className="text-center text-sm text-red-500 mt-5 space-x-2">
              <a href="/contact" className="hover:underline inline-flex items-center">
                <FiLock className="mr-1" /> Forgot your password?
              </a>
              <span className="text-gray-400">|</span>
              <a href="/contact" className="hover:underline inline-flex items-center">
                <FiLock className="mr-1" /> Forgot your MembershipID?
              </a>
            </div>

            {/* Join Button */}
            <div className="text-center mt-6">
              <a href="/member">
                <button className="bg-[#ef5350] text-white font-bold py-2.5 px-6 rounded-md hover:bg-[#d84a48] transition-colors inline-flex items-center">
                  <FiUserPlus className="mr-2" /> Join NIA?
                </button>
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Request Failed</h3>
            <p className="text-gray-600 mb-6">
              Your request can't be handled at the moment. Please get in touch with us{' '}
              <a href="/contact" className="text-blue-600 underline hover:text-blue-800">
                here
              </a>.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
