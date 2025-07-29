import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import images from '../constants/images';

const slideData = [
  {
    id: 1,
    image: images.slider,
    title: "The Nigerian Institute of Architects",
    subtitle: "The Policy Making Body for Architects In Nigeria",
  },
  {
    id: 2,
    image: images.slider2,
    title: "Designing the Future of Nigeria",
    subtitle: "Championing Excellence in Architectural Practice and Education",
  },
  {
    id: 3,
    image:images.slider3,
    title: "Building Sustainable Communities",
    subtitle: "Innovation, Integrity, and Professionalism at Our Core",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              <div className="absolute inset-0 flex items-end justify-start z-20">
                <div className="bg-[#1e293b]/90 text-white p-4 sm:p-6 md:p-10 m-4 sm:m-6 md:m-16 max-w-xl rounded-lg shadow-2xl">
                  <h1 className="text-xl sm:text-2xl md:text-5xl font-bold mb-2 md:mb-4 leading-snug font-montserrat">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #facc15;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
