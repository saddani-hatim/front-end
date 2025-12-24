"use client";
import React, { useState } from 'react'

interface FilterSection {
  title: string;
  type: 'radio' | 'checkbox';
  name: string;
  options: string[];
}

const filterSections: FilterSection[] = [
  {
    title: "Gender",
    type: "radio",
    name: "gender",
    options: ["Men", "Women", "Boys", "Girls"]
  },
  {
    title: "Categories",
    type: "checkbox",
    name: "category",
    options: ["Lipstick", "Nail Polish", "Perfume", "Bindi", "Lip Gloss", "Lip Balm"]
  },
  {
    title: "Brand",
    type: "checkbox",
    name: "brand",
    options: ["Comet Busters", "MI FASHION", "Deve Herbes", "PERPAA", "ME-ON", "Menjewell", "JOHN PHILLIPS", "MANASIK"]
  },
  {
    title: "Price",
    type: "checkbox",
    name: "price",
    options: ["Rs. 19 to Rs. 500", "Rs. 500 to Rs. 1,000", "Rs. 1,000 to Rs. 2,500", "Rs. 2,500 to Rs. 5,000"]
  },
  {
    title: "Color",
    type: "checkbox",
    name: "color",
    options: ["White", "Pink", "Multi", "Brown", "Red", "Blue"]
  },
  {
    title: "Discount Range",
    type: "radio",
    name: "discount",
    options: ["10% and above", "20% and above", "30% and above", "40% and above", "50% and above", "60% and above"]
  }
];

export default function Filters() {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    filterSections.map(s => s.title)
  );

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="bg-dark-800 rounded-2xl border border-slate-700/50 overflow-hidden sticky top-24">
      {/* Header */}
      <div className="px-4 py-4 border-b border-slate-700/50 bg-dark-700/50">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-slate-100">Filters</h2>
          <button className="text-sm text-primary-light hover:text-primary 
            transition-colors duration-200">
            Clear All
          </button>
        </div>
      </div>

      {/* Filter Sections */}
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {filterSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border-b border-slate-700/30 last:border-b-0">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full px-4 py-3 flex items-center justify-between 
                text-left hover:bg-dark-700/50 transition-colors duration-200"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {section.title}
              </h3>
              <svg 
                className={`w-4 h-4 text-slate-400 transition-transform duration-300
                  ${expandedSections.includes(section.title) ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Section Options */}
            <div className={`px-4 pb-3 space-y-2 transition-all duration-300
              ${expandedSections.includes(section.title) 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0 overflow-hidden pb-0'}`}
            >
              {section.options.map((option, optionIndex) => (
                <label 
                  key={optionIndex}
                  className="flex items-center gap-3 cursor-pointer group py-1"
                >
                  <div className="relative">
                    <input 
                      type={section.type} 
                      name={section.name}
                      className="peer sr-only"
                    />
                    {section.type === 'checkbox' ? (
                      <div className="w-5 h-5 rounded-md border-2 border-slate-600 
                        peer-checked:bg-gradient-to-br peer-checked:from-primary peer-checked:to-secondary
                        peer-checked:border-transparent
                        group-hover:border-primary/50 transition-all duration-200
                        flex items-center justify-center">
                        <svg 
                          className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-600 
                        peer-checked:border-primary group-hover:border-primary/50 
                        transition-all duration-200 p-0.5">
                        <div className="w-full h-full rounded-full bg-gradient-to-br 
                          from-primary to-secondary scale-0 peer-checked:scale-100 
                          transition-transform duration-200" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 
                    transition-colors duration-200">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
