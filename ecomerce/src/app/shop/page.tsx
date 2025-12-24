import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Filters from "./Filters";
import ProductList from "./ProductList";
import { Footer } from "../components/HomePage/Footer/Footer";
import dataP from "../components/data/data";

export default function page() {
  const sortOptions = [
    { label: "Bundles", value: "bundles" },
    { label: "Country of Origin", value: "origin" },
    { label: "Size", value: "size" },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header Section */}
      <div className="pt-24 pb-6 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-primary-light transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-200">Shop</span>
          </nav>

          {/* Title and Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Title */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
                All Products
              </h1>
              <p className="text-slate-400 mt-1">
                {dataP.length} items found
              </p>
            </div>

            {/* Filter Chips and Sort */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Filter Chips */}
              {sortOptions.map((option, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 
                    bg-dark-700 border border-slate-700 rounded-xl
                    text-sm text-slate-300 hover:border-primary 
                    hover:text-white transition-all duration-300"
                >
                  {option.label}
                  <AiOutlineArrowDown className="w-3 h-3" />
                </button>
              ))}

              {/* Sort Dropdown */}
              <button className="flex items-center gap-3 px-4 py-2 
                bg-gradient-to-r from-primary/20 to-secondary/20 
                border border-primary/30 rounded-xl
                text-sm text-slate-200 hover:border-primary 
                transition-all duration-300">
                <span className="text-slate-400">Sort by:</span>
                <span className="font-medium">Recommended</span>
                <AiOutlineArrowDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <Filters />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <ProductList data={dataP} />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
