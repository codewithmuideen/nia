import React from 'react';

export default function NiaPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-20 flex items-center justify-center">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-300 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="w-full max-w-6xl z-10 space-y-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">About NIA</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The Nigerian Institute of Architects: Shaping the Built Environment Since 1960.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Nigerian Institute of Architects (NIA) was founded on the 1st of April 1960,
              as an association of independent professional architects with the aim of fostering
              friendship amongst members, catering for their welfare, and establishing mutual support
              and cooperation amongst them.
            </p>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              From a modest 13 members at inception, the Institute has grown phenomenally in
              membership, activities, and influence — now with over 12,000 members impacting
              architectural discourse at both national and international levels.
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-sky-700 font-semibold hover:underline transition"
            >
              Read More →
            </a>
          </div>

          {/* Core Values, Vision, Mission */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Core Value</h3>
              <p className="text-gray-700 leading-relaxed">
                We remain true to the same principles on which NIA was founded since 1960:
                producing members that create superior designs, shaping our world, putting safety
                first, and creating opportunities for our people.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To attain excellence in the creative management of the physical environment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To mobilize informed membership for national development through architecture and the
                built environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
