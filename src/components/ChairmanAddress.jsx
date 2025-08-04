import React from 'react';

const chairmanContent = [
  "Distinguished guests, colleagues, and friends, it is with great honor and humility that I welcome you on behalf of the Executive Members and the entire Osun State Chapter of the Nigerian Institute of Architects to this momentous occasion—our 14th Anniversary and the Osun State Architects’ Week, held at Brymor Hotel, Osogbo.",
  
  "Founded on the 6th of December, 1996, five years after the creation of Osun State, our Chapter has grown into a vital force within the architectural and building community. The theme of this year’s celebration, *'Affordable Building for Today'*, speaks directly to one of the most critical challenges in our industry—housing. Shelter, alongside food, is a fundamental human necessity, and it is our professional duty to ensure it is accessible, safe, and sustainable.",
  
  "Since our inception, we have made continuous efforts to enlighten the public about the value of architecture and the role of the architect. Yet, we face persistent challenges, especially the widespread issue of quackery in the building industry. It is imperative now more than ever to uphold professional standards and protect public safety through proper engagement of qualified professionals.",
  
  "Our Chapter remains committed to building stronger partnerships with government authorities, regulatory bodies, and all stakeholders. We aim to ensure that all architectural designs are executed by certified architects, supported by the appropriate engineering professionals. The architect, as the lead consultant and coordinator, must ensure that designs are not only creative and cost-effective but also structurally sound and environmentally responsible.",
  
  "To achieve this, we will:",
  "1. Work collaboratively with the state government and industry stakeholders to promote the engagement of competent professionals in all building-related activities.",
  "2. Encourage climate-responsive design through innovation, sustainable materials, and passive strategies suited to our environment.",
  "3. Champion stricter development controls, ensure compliance with building codes and standards, and advocate for professional supervision of construction to mitigate the risks associated with climate change and substandard practices.",
  
  "I urge all approving authorities and regulators to enforce the requirement that every building design be signed and sealed by the appropriate professionals. Only through this can we preserve the integrity of our built environment and protect public interest.",
  
  "We thank you for your presence, your continued support, and your commitment to excellence in architecture and nation-building.",
  
  "God bless you all.",
  
  "Arc. Emmanuel Oladejo, mnia",
  "Chairman, Osun State Chapter",
  "Nigerian Institute of Architects"
];

export default function ChairmanAddress() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6 py-20 flex items-center justify-center overflow-hidden">
      {/* Floating Gradient Circle Decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full max-w-5xl z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Chairman’s Address
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A message from the leadership of the Nigerian Institute of Architects, Osun State Chapter
          </p>
        </div>

        {/* Card */}
        <div className="bg-white bg-opacity-5 border border-gray-800 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-loose">
            {chairmanContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
