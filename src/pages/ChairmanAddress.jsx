import React from 'react';

const ChairmanAddress = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Chairman’s Address
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            By Arc. (Chief) T. Bamidele Ojo – Chairman, Osun State Chapter, NIA
          </p>
          <p className="mt-1 text-sm text-gray-400 italic">
            On the occasion of the 14th Anniversary & Osun Architects’ Week – July 26–29, 2011
          </p>
        </div>

        {/* Body */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p className="font-semibold uppercase text-gray-600">Protocols.</p>

          <p>
            It is my great pleasure, on behalf of the executive members and the entire chapter,
            to welcome you all to this epoch-making occasion — the 14th Anniversary of the Osun
            State Chapter of the Nigerian Institute of Architects, founded on the 6th of December,
            1996. The theme for this year, <strong>"Affordable Building for Today,"</strong> is both
            timely and essential, addressing one of the fundamental necessities of life — housing.
          </p>

          <p>
            Osun State was created on May 27, 1991, and five years later, our chapter was
            inaugurated. Since inception, we have continued to champion public education and
            awareness regarding architectural practice and the essential role of the architect.
            However, the growing challenge of quackery in the building industry continues to demand
            urgent attention.
          </p>

          <p>
            As a chapter, and particularly this executive, we are committed to strengthening our
            synergy with government and approving authorities to ensure that:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Building designs are carried out exclusively by architects, with complementary input
              from qualified engineers and allied professionals.
            </li>
            <li>
              The architect, as the head of the design and construction team, upholds the values of
              affordability, safety, and quality.
            </li>
          </ul>

          <p className="font-semibold mt-6 text-gray-800">Our goals will be achieved by:</p>

          <ul className="list-decimal ml-6 space-y-2">
            <li>
              Collaborating with the State Government and relevant stakeholders to eliminate
              quackery by promoting only qualified professionals in the built environment.
            </li>
            <li>
              Encouraging climate-sensitive planning and the use of creative and appropriate
              building design techniques.
            </li>
            <li>
              Fostering synergy among professionals to enforce stricter development control,
              compliance to building codes, and adoption of environmentally sustainable practices.
            </li>
          </ul>

          <p>
            It is important to emphasize that building approving authorities must ensure that all
            building drawings are designed, signed, and stamped by relevant professionals. This is
            non-negotiable if we aim to maintain safety, professionalism, and sustainability.
          </p>

          <p>
            I wish to thank you all for your support and for making this celebration a reality.
            Together, we will continue to build a better and safer environment.
          </p>

          <p className="mt-6 font-bold text-gray-800">
            Arc (Chief) T. Bamidele Ojo<br />
            Chairman, Osun State Chapter<br />
            Nigerian Institute of Architects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChairmanAddress;
