import React, { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import { CgSpinner } from 'react-icons/cg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success', 'error', or 'info'
  const [isLoading, setIsLoading] = useState(false);
  const [subscribedEmails, setSubscribedEmails] = useState(new Set()); // ✅ Moved inside the component

  const getMessageStyles = () => {
    switch (messageType) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'info':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setMessageType('');

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessageType('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (subscribedEmails.has(email.toLowerCase())) {
      setMessageType('info');
      setMessage('You have already subscribed.');
    } else {
      const updatedSet = new Set(subscribedEmails);
      updatedSet.add(email.toLowerCase());
      setSubscribedEmails(updatedSet);

      setMessageType('success');
      setMessage('Thank you! You have subscribed to our newsletter.');
      setEmail('');
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
            <FiMail className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Stay Ahead of the Curve
        </h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          Subscribe to our newsletter for the latest in architectural trends, project showcases, and industry news.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                aria-label="Email Address"
                required
                className="w-full bg-gray-700 text-white rounded-lg py-3 pr-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto flex items-center justify-center bg-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <CgSpinner className="animate-spin mr-2" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <FiSend className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Message Display */}
        <div className="mt-4 h-6 text-center">
          {message && (
            <p className={`text-sm animate-fadeIn ${getMessageStyles()}`}>
              {message}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
