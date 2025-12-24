"use client";
import React, { useState } from "react";
import SearchList from "../searchFun/SeachList";
import Profile from "./Profile";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import dataP from "../data/data";
import { useAppSelector } from "@/redux/store";
import { ReduxProvider } from "@/redux/provider";

function SearchBarContent() {
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Get counts from Redux
  const bagCount = useAppSelector((state) => state.reducers.bagCount);
  const wishlistCount = useAppSelector((state) => state.reducers.wishlistCount);

  // Filter products by name and brand
  const filteredProducts = dataP.filter((product) => {
    let a = product.name.toUpperCase().includes(query);
    return a;
  });
  const filteredProductsBrand = dataP.filter((product) => {
    let a = product.brand.toUpperCase().includes(query);
    return a;
  });
  const sortedProduct = { ...filteredProducts, ...filteredProductsBrand };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSearchKeyPress = (event: any) => {
    if (event.key === "Enter") {
      togglePopup();
    }
  };

  return (
    <div className="flex items-center gap-2 md:gap-6">
      {/* Search Bar */}
      <div className="relative hidden md:flex items-center">
        <div className={`flex items-center bg-dark-700 rounded-xl overflow-hidden
          border transition-all duration-300
          ${isFocused ? 'border-primary shadow-glow' : 'border-transparent hover:border-slate-600'}`}>
          <div className="pl-4 text-slate-400">
            <AiOutlineSearch className="w-5 h-5" />
          </div>
          <input
            className="px-4 py-2.5 bg-transparent text-slate-200 placeholder-slate-500
              focus:outline-none w-64 lg:w-80 text-sm"
            type="text"
            placeholder="Search products, brands..."
            value={query}
            onChange={(event) => setQuery(event.target.value.toUpperCase())}
            onKeyDown={handleSearchKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        
        {/* Search Results Popup */}
        {showPopup && (
          <div className="absolute top-full mt-2 left-0 right-0 
            bg-dark-800 border border-slate-700 rounded-xl 
            shadow-card overflow-hidden z-[100] max-h-80 overflow-y-auto">
            <SearchList data={sortedProduct} />
          </div>
        )}
      </div>

      {/* Mobile Search Button */}
      <button className="md:hidden p-2 text-slate-400 hover:text-primary 
        hover:bg-dark-700 rounded-xl transition-all duration-300">
        <AiOutlineSearch className="w-5 h-5" />
      </button>

      {/* Action Icons */}
      <div className="flex items-center gap-1 md:gap-3">
        {/* Profile */}
        <div className="p-2 hover:bg-dark-700 rounded-xl transition-all duration-300 relative z-[60]">
          <Profile />
        </div>

        {/* Wishlist */}
        <Link href="/wishlist" className="flex flex-col items-center p-2 
          text-slate-400 hover:text-secondary hover:bg-dark-700 
          rounded-xl transition-all duration-300 group">
          <div className="relative">
            <AiOutlineHeart className="w-5 h-5 md:w-6 md:h-6 
              group-hover:scale-110 transition-transform duration-300" />
            <span className={`absolute -top-1 -right-1 w-4 h-4 
              bg-secondary text-white text-xs font-bold 
              rounded-full flex items-center justify-center
              ${wishlistCount > 0 ? 'animate-pulse' : ''}`}>
              {wishlistCount}
            </span>
          </div>
          <span className="hidden md:block text-xs mt-1 font-medium">Wishlist</span>
        </Link>

        {/* Bag/Cart */}
        <Link href="/bag" className="flex flex-col items-center p-2 
          text-slate-400 hover:text-primary hover:bg-dark-700 
          rounded-xl transition-all duration-300 group">
          <div className="relative">
            <BsBag className="w-5 h-5 md:w-6 md:h-6 
              group-hover:scale-110 transition-transform duration-300" />
            <span className={`absolute -top-1 -right-1 w-4 h-4 
              bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold 
              rounded-full flex items-center justify-center
              ${bagCount > 0 ? 'animate-pulse-glow' : ''}`}>
              {bagCount}
            </span>
          </div>
          <span className="hidden md:block text-xs mt-1 font-medium">Bag</span>
        </Link>
      </div>
    </div>
  );
}

// Wrap with ReduxProvider
function SearchBar() {
  return (
    <ReduxProvider>
      <SearchBarContent />
    </ReduxProvider>
  );
}

export default SearchBar;
