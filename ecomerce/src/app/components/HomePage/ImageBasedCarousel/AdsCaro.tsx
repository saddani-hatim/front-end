import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from "./../../../../images/medal worthy/00e27983-d373-4d86-9f25-3e46a18ec12a1690609817622-Top_casual_Styles-_Levi-s-_Tommy_Min_40.png";
import r2 from "./../../../../images/medal worthy/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png";
import r3 from "./../../../../images/medal worthy/2ccbd34a-3340-4b55-bd4e-2ac182e425c11691079149976-image_png_1139490265.png";
import r4 from "./../../../../images/medal worthy/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png";
import r5 from "./../../../../images/medal worthy/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png";
import r6 from "./../../../../images/medal worthy/7abcde7c-18e5-44c5-9cd9-c1490daa842a1691142533559-image_png2078004791.png";
import r7 from "./../../../../images/medal worthy/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png";
import r8 from "./../../../../images/medal worthy/921e38ac-f903-4701-a419-df42b9448ef51691142513445-image_png1803300271.png";
import r9 from "./../../../../images/medal worthy/944486f4-8cf8-456e-a0d5-c2655bf1deaa1691131597834-image_png_1935947130.png";
import r0 from "./../../../../images/medal worthy/a06120fd-caa3-4dac-93c3-3d4d574f8d7c1691087170219-image_png_116457033.png";
import r10 from "./../../../../images/medal worthy/a9734bdc-8054-4806-8ab4-748d7dfdfe411691066316796-unnamed---2023-08-03T180830.165.png";
import r12 from "./../../../../images/medal worthy/b504644b-f446-48c9-b928-36f1958bd19a1691142484406-image_png_292913761.png";
import r11 from "./../../../../images/medal worthy/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png";
import r13 from "./../../../../images/medal worthy/ca44e488-c06b-48ce-814f-3a1e3e66e08b1691142548139-image_png_840304476.png";
import r14 from "./../../../../images/medal worthy/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png";
import r15 from "./../../../../images/medal worthy/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png";
import r16 from "./../../../../images/medal worthy/dc79e7c8-af20-4b65-ae2f-da2ca8e8c3f31691134139774-image_png1749927309.png";
import r17 from "./../../../../images/medal worthy/eb385972-caf6-4e84-a37c-3fc2b4ac52041691079093062-image_png892897249.png";
import Image from "next/image";

function AdsCaro(props: any) {
  const [slidesToShow, setSlidesToShow] = useState(6);
  const [slidesToScroll, setSlidesToScroll] = useState(6);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSlidesToShow(window.innerWidth < 768 ? 3 : 6);
      setSlidesToScroll(window.innerWidth < 768 ? 3 : 6);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  const images = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <h2 className="px-6 text-xl md:text-3xl font-bold uppercase tracking-wider text-center">
          <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
            {props.heading}
          </span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* Slider Container */}
      <div className="relative">
        <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <div className="relative group overflow-hidden rounded-xl 
                bg-dark-800 border border-slate-700/50
                transition-all duration-300 
                hover:border-primary/50 hover:shadow-glow">
                <Image
                  src={img}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-auto object-contain 
                    transition-transform duration-500 
                    group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AdsCaro;
