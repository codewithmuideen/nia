import React from 'react';

// This assumes you have an `images.js` file in a `constants` folder
// structured like this:
//
// import mobolajiAdeniyi from '../assets/mobolaji-adeniyi.png';
// ... and so on for other images
//
// export const images = {
//   mobolajiAdeniyi,
//   saniSaulawa,
//   chiomaWoguOgbonna,
//   aliMukhtar,
//   chikeIbeanu,
//   oyegokeOmigbodun,
// };
import  images  from '../constants/images';


const NIALeadership = () => {
  return (
    <div className="bg-black text-white w-full py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center" style={{fontFamily:'Montserrat'}}>
      <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

        {/* Left Side: Team Members */}
        <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col items-center gap-10">
          
          {/* President */}
          <div className="flex flex-col items-center text-center">
            <img
              src={images.female}
              alt="Arc. Mobolaji Adeniyi, fnia, pnia"
              className="w-44 h-44 rounded-full object-cover filter grayscale"
            />
            <h3 className="mt-4 font-bold text-lg">Arc. Mobolaji Adeniyi, fnia, pnia</h3>
            <p className="text-sm text-gray-300">NIA President</p>
          </div>

          {/* Vice Presidents Row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <img
                src={images.male}
                alt="Arc. Sani I. Saulawa, fnia"
                className="w-36 h-36 rounded-full object-cover filter grayscale"
              />
              <h3 className="mt-4 font-bold text-base">Arc. Sani I. Saulawa, fnia</h3>
              <p className="text-sm text-gray-300">1st Vice President</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <img
                src={images.female}
                alt="Arc. Chioma Wogu-Ogbonna, fnia"
                className="w-36 h-36 rounded-full object-cover filter grayscale"
              />
              <h3 className="mt-4 font-bold text-base">Arc. Chioma Wogu-Ogbonna, fnia</h3>
              <p className="text-sm text-gray-300">2nd Vice President</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <img
                src={images.male}
                alt="Arc. Ali Mukhtar, fnia"
                className="w-36 h-36 rounded-full object-cover filter grayscale"
              />
              <h3 className="mt-4 font-bold text-base">Arc. Ali Mukhtar, fnia</h3>
              <p className="text-sm text-gray-300">3rd Vice President</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
            <div className="flex flex-col items-center text-center max-w-[220px]">
              <img
                src={images.male}
                alt="Arc. Chike Chamberlain Ibeanu, fnia"
                className="w-36 h-36 rounded-full object-cover filter grayscale"
              />
              <h3 className="mt-4 font-bold text-base">Arc. Chike Chamberlain Ibeanu, fnia</h3>
              <p className="text-sm text-gray-300">Honorary General Secretary</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[220px]">
              <img
                src={images.male}
                alt="Arc. Oyegoke Omigbodun, fnia"
                className="w-36 h-36 rounded-full object-cover filter grayscale"
              />
              <h3 className="mt-4 font-bold text-base">Arc. Oyegoke Omigbodun, fnia</h3>
              <p className="text-sm text-gray-300">National Treasurer</p>
            </div>
          </div>
          
          {/* Button */}
          <div className="mt-4">
            <button className="bg-[#4d4d4d] hover:bg-gray-500 transition-colors text-white text-sm font-semibold py-3 px-6 rounded-md">
              View NIA Leadership Team
            </button>
          </div>

        </div>

        {/* Right Side: Title */}
        <div className="lg:col-span-2 order-1 lg:order-2 text-center lg:text-left" style={{fontFamily:'Montserrat'}}>
          <p className="text-sm uppercase tracking-widest text-gray-400">THE TEAM</p>
          <h2 className="mt-2 text-6xl font-bold">NIA Leadership</h2>
          <div className="mt-4 h-1 w-24 bg-green-500 mx-auto lg:mx-0"></div>
        </div>

      </div>
    </div>
  );
};

export default NIALeadership;