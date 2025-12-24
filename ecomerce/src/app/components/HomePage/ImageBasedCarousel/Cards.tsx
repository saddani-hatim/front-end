import Image from "next/image";
import React from "react";
import m1 from "./../../../../../public/img/cards/k22.jpg";
import m2 from "./../../../../../public/img/cards/k21.jpg";
import m28 from "./../../../../../public/img/cards/k20.jpg";
import m3 from "./../../../../../public/img/cards/k19.jpg";
import m38 from "./../../../../../public/img/cards/k18.jpg";
import m4 from "./../../../../../public/img/cards/k17.jpg";
import m5 from "./../../../../../public/img/cards/k16.jpg";
import m6 from "./../../../../../public/img/cards/k15.jpg";
import m7 from "./../../../../../public/img/cards/k14.jpg";
import m8 from "./../../../../../public/img/cards/k13.jpg";
import m9 from "./../../../../../public/img/cards/k12.jpg";
import m10 from "./../../../../../public/img/cards/k11.jpg";
import m11 from "./../../../../../public/img/cards/k10.jpg";
import m12 from "./../../../../../public/img/cards/k9.jpg";
import m13 from "./../../../../../public/img/cards/k8.jpg";
import m14 from "./../../../../../public/img/cards/k6.jpg";
import m15 from "./../../../../../public/img/cards/k5.jpg";
import m16 from "./../../../../../public/img/cards/k4.jpg";

function Cards() {
  const rows = [
    [m1, m2, m28, m3, m38, m4],
    [m5, m6, m7, m8, m9, m10],
    [m11, m12, m13, m14, m15, m16],
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <h2 className="px-6 text-xl md:text-3xl font-bold uppercase tracking-wider text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Shop by Category
          </span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* Category Grid */}
      <div className="space-y-4 md:space-y-6">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4"
          >
            {row.map((img, colIndex) => (
              <div
                key={colIndex}
                className={`relative group overflow-hidden rounded-xl md:rounded-2xl
                  bg-dark-800 border border-slate-700/50
                  transition-all duration-300
                  hover:border-primary/50 hover:shadow-glow
                  cursor-pointer
                  ${colIndex >= 4 ? 'hidden md:block' : ''}`}
              >
                <Image
                  src={img}
                  alt={`Category ${rowIndex * 6 + colIndex + 1}`}
                  className="w-full h-auto object-contain
                    transition-transform duration-500
                    group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-1000 ease-out
                    bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <button className="px-8 py-3 rounded-xl font-semibold
          bg-gradient-to-r from-primary to-secondary
          text-white shadow-glow
          hover:shadow-glow-lg hover:scale-105
          transition-all duration-300">
          View All Categories
        </button>
      </div>
    </div>
  );
}

export default Cards;
