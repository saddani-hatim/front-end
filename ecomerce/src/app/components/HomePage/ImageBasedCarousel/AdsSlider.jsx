import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import r1 from "./../../../../images/rakshabandhan/24329cef-087e-441e-acd6-bc7e05eefc891691045352279-Ethnic_Wear.png"
import r2 from "./../../../../images/rakshabandhan/38f1add0-b7b9-4764-8156-625b026049a41691045352290-Handbags.png"
import r3 from "./../../../../images/rakshabandhan/728be17b-8a33-4cd6-95b1-4c612048d7961691045352269-Ethnic.png"
import r6 from "./../../../../images/rakshabandhan/f5.png"
import r4 from "./../../../../images/rakshabandhan/a4d4675c-0bfc-4250-8a7a-bfbdd62073f01691045352399-Watches_.png"
import Image from "next/image";

function AdsSlider() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSlidesToShow(window.innerWidth < 768 ? 3 : 5);
      setSlidesToScroll(1);
    };

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };

  const images = [r1, r2, r3, r4, r6];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <h2 className="px-6 text-xl md:text-3xl font-bold uppercase tracking-wider text-center">
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Special Gifts This Way
          </span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* Slider */}
      <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <div className="relative group overflow-hidden rounded-2xl
              bg-dark-800 border border-slate-700/50
              transition-all duration-300
              hover:border-secondary/50 hover:shadow-glow-pink">
              <Image 
                src={img} 
                alt={`Gift ${index + 1}`}
                className="w-full h-auto object-contain
                  transition-transform duration-500
                  group-hover:scale-105"
              />
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdsSlider;
