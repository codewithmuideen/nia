import React from 'react';

const historyContent = [
  "The Osun State Chapter of the Nigerian Institute of Architects (NIA) was formally inaugurated on the 6th of December, 1996—five years after the creation of Osun State on May 27, 1991. This marked a significant milestone in the history of the architectural profession in the state, laying the foundation for a community of dedicated professionals committed to shaping the built environment.",
  
  "The early years were driven by a core vision: to uphold architectural integrity, promote public awareness, and fight quackery in the construction industry. Through advocacy and education, the Chapter positioned itself as a crucial voice in both professional development and community building.",
  
  "In 2011, the Chapter celebrated its 14th Anniversary during the Osun State Architects Week, themed 'Affordable Building for Today.' This event reinforced the Chapter’s ongoing mission to ensure that every Nigerian has access to safe, functional, and affordable housing—designed and supervised by qualified professionals.",
  
  "Over the decades, the Chapter has grown steadily in membership, influence, and impact. It has fostered partnerships with government agencies, developers, academic institutions, and other built environment professionals to drive excellence and innovation in architectural practice.",
  
  "Today, the Osun State Chapter continues to thrive as a beacon of professionalism, education, and collaboration. As we honor our history, we also look forward—to a future built on unity, sustainability, and service to humanity through architecture."
];

export default function History() {
  return (
    <section className="relative min-h-screen bg-white px-6 py-20 flex items-center justify-center overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full max-w-6xl z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Our History
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the journey of the NIA Osun State Chapter—from inception to impact.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-10 md:p-14">
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            {historyContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
