"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import m1 from "./../../../../images/handbags.jpg";
import m2 from "./../../../../images/m.jpg";
import m3 from "./../../../../images/m1.jpg";
import m4 from "./../../../../images/m2.jpg";
import m5 from "./../../../../images/m3.jpg";
import m6 from "./../../../../images/m4.jpg";
import m7 from "./../../../../images/m5.jpg";
import m8 from "./../../../../images/m6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageCaro = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const images = [m1, m2, m3, m4, m5, m6, m7, m8];

  return (
    <div className="relative mt-16 md:mt-20">
      {/* Gradient overlay for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900 z-10 pointer-events-none" />
      
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={800}
        className="overflow-hidden"
      >
        {images.map((img, index) => (
          <div key={index} className="relative">
            {loading && index === 0 && (
              <div className="h-[300px] md:h-[500px] bg-dark-800">
                <Skeleton 
                  height="100%" 
                  baseColor="#1E293B" 
                  highlightColor="#334155" 
                />
              </div>
            )}
            <div className={`${loading && index === 0 ? "hidden" : "block"}`}>
              <Image 
                src={img} 
                alt={`Banner ${index + 1}`}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent z-20" />
    </div>
  );
};

export default ImageCaro;
