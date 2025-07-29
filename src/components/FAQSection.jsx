import React, { useState } from 'react';

// Sample FAQ data
const faqData = [
  {
    question: "What is the Nigerian Institute of Architects (NIA)?",
    answer: "The Nigerian Institute of Architects (NIA) is the professional body for architects in Nigeria. It was founded with the aim of promoting architectural education, practice, and professionalism in the country."
  },
  {
    question: "How can I become a member of the NIA?",
    answer: "Membership involves several stages, typically starting with a degree in architecture from an accredited university, followed by a professional practice examination. Please visit our 'Membership' page for detailed requirements and application procedures."
  },
  {
    question: "What are the benefits of being an NIA member?",
    answer: "Members gain access to a network of professionals, continuous professional development opportunities, industry events, publications, and advocacy that protects and promotes the interests of architects in Nigeria."
  },
  {
    question: "Where can I find information about upcoming events?",
    answer: "All our events, including AGMs, workshops, and quarterly dinners, are listed on our 'Events' page. We also announce them in our newsletter and on our social media channels."
  }
];

// Reusable Accordion Item
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left items-center gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-800">
          {question}
        </span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <div className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded-full">
            <span className="block w-2.5 h-0.5 bg-gray-700" />
            <span className={`block w-0.5 h-2.5 bg-gray-700 absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`mt-4 text-gray-600 leading-relaxed transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 max-h-[400px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-20" style={{ fontFamily: 'Montserrat' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#2c5b43]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Still have questions? Contact our support team for help.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
