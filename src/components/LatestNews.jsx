import React from 'react';
import images from '../constants/images';

const newsData = [
  {
    id: 1,
    title: 'Ooni To Speak At NIA 8th Edition Of Osun Architects’ Sustainable Information Synthesis Forum',
    date: '',
    image: images.ooni,
    link: 'https://citymirrornews.com/news/2025/31/ooni-to-speak-at-nia-8th-edition-of-osun-architects-sustainable-information-synthesis-forum/',
  },
  {
    id: 2,
    title: 'Ooni of Ife To Lead Conversation at 8th Edition of Osun Architects’ Forum',
    date: '',
    image: images.ooni2,
    link: 'https://www.spyloadedng.com/spyloaded-news/ooni-of-ife-to-lead-conversation-at-the-8th-edition-of-osun-architects/',
  },
  {
    id: 3,
    title: 'Celebrating Afrocentric Design Concepts at the Upcoming OASIS Conference',
    date: '',
    image: images.osunvisit,
    link: '',
  },
];

const NewsCard = ({ image, title, date, link }) => {
  const isExternal = link.startsWith('http');

  return (
    <a
      href={link}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
          />
        )}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#2c5b43]">
            {title}
          </h3>
          <div className="mt-auto">
            <hr className="my-4 border-gray-200" />
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const LatestNews = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-24" style={{ fontFamily: 'Montserrat' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl font-bold tracking-widest text-[#2c5b43]">
            LATEST EVENTS
          </h2>
          <hr className="w-full border-t border-gray-300" />
        </div>

        {/* OASIS 8.0 Highlight */}
        <div className="bg-white rounded-xl shadow-md mb-16 overflow-hidden">
          <img
            src={images.oasis1}
            alt="OASIS 8.0 Banner"
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6 md:p-10">
            <h3 className="text-2xl font-bold text-[#2c5b43] mb-4">
              OASIS 8.0 – RESPONSIBILITIES IN THE BUILT ENVIRONMENT
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Theme:</strong> Towards Integrated Professional Action for Sustainable Future
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Date:</strong> Wednesday 13th Aug & Thursday 14th August, 2025
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Venue:</strong> Aurora Conference Center, Ring Road, Osogbo, Osun State
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Royal Father of the Day:</strong> His Imperial Majesty, Oba Adeyeye Enitan Ogunwusi (Ooni of Ife)
            </p>
            <p className="text-gray-700">
              <strong>Contact & Enquiries:</strong> +234 803 698 7952, +234 803 396 9807 | Email: osunnia@gmail.com
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              title={item.title}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
