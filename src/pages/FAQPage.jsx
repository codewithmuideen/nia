import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {question}
        </h3>
        <span className="text-sky-600 text-xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <section className="bg-gradient-to-br from-white via-sky-50 to-emerald-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2c5b43] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            Got questions? We’ve got answers. If not, feel free to contact us directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
