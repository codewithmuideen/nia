import React from 'react';
import images from '../constants/images';

const newsData = [
  {
    id: 1,
    title: 'WORLD ENVIRONMENT DAY 2024. PRESS RELEASE',
    date: 'June 4, 2024',
    uppercase: true,
    link: '/latestnews/world-environment-day-2024', // internal or relative
  },
  {
    id: 2,
    title: 'NIA EGM/QUARTERLY DINNER: IKOGOSI 2024',
    date: 'May 20, 2024',
    uppercase: true,
    link: '/latestnews/ikogosi-2024',
  },
  {
    id: 3,
    title: 'FAREWELL ARC (CHIEF) GABRIEL YAKUBU ADUKU, FNIA, RIBA, OON (1944-2024)',
    date: 'April 18, 2024',
    uppercase: true,
    link: '/latestnews/gabriel-yakubu-aduku',
  },
  {
    id: 4,
    title: 'NIA PRESIDENT VISITS THE HON. MINISTER OF ENVIRONMENT',
    date: 'March 7, 2024',
    image: images.team,
    uppercase: true,
    link: 'https://news.com/environment-minister-visit', // external
  },
  {
    id: 5,
    title: 'Critiquing Nigeria’s Government Bias Towards Foreign Consultants',
    date: 'February 29, 2024',
    uppercase: false,
    link: '/latestnews/government-bias',
  },
  {
    id: 6,
    title: 'President of NIA meets Hon. Minister of Mines and Steel',
    date: 'February 1, 2024',
    uppercase: false,
    link: 'https://news.com/mines-and-steel-meeting', // external
  },
];

const NewsCard = ({ image, title, date, uppercase, link }) => {
  const isExternal = link.startsWith('http');

  return (
    <a
      href={link}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
          />
        )}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className={`text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#2c5b43] ${uppercase ? 'uppercase' : ''}`}>
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
            LATEST NEWS
          </h2>
          <hr className="w-full border-t border-gray-300" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              title={item.title}
              date={item.date}
              uppercase={item.uppercase}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
