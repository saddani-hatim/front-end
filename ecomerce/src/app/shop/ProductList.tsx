"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsBag, BsFillBagCheckFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { addPrice, addToBag, addToWishlist, removeFromWishlist } from "../../redux/features/manageBag";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { ReduxProvider } from "@/redux/provider";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = ({ p: product }: { p: any }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  // Check if product is in bag or wishlist
  const bagItems = useAppSelector((state) => state.reducers.bag);
  const wishlistItems = useAppSelector((state) => state.reducers.wishlist);
  
  const isInBag = bagItems.some((item: any) => item.name === product.name);
  const isInWishlist = wishlistItems.some((item: any) => item.name === product.name);

  const handleAddToBag = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isInBag) {
      dispatch(addToBag(product));
      dispatch(addPrice(product.price));
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div 
      className="group relative bg-dark-800 rounded-2xl overflow-hidden
        border border-slate-700/50 transition-all duration-300
        hover:border-primary/30 hover:shadow-card-hover hover:shadow-primary/10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wishlist Button */}
      <button 
        onClick={handleWishlist}
        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-xl
          backdrop-blur-sm border transition-all duration-300
          flex items-center justify-center
          ${isInWishlist 
            ? 'bg-secondary/20 border-secondary/50' 
            : 'bg-dark-900/80 border-slate-700/50 hover:border-secondary/50 hover:bg-dark-800'
          }`}
      >
        {isInWishlist ? (
          <BsHeartFill className="w-4 h-4 text-secondary animate-pulse" />
        ) : (
          <BsHeart className="w-4 h-4 text-slate-400 group-hover:text-secondary transition-colors" />
        )}
      </button>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-dark-700">
        <Image
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Hover Overlay with Add to Bag */}
        <div className={`absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent
          flex items-end justify-center pb-6 transition-opacity duration-300
          ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleAddToBag}
            disabled={isInBag}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium
              transition-all duration-300 transform
              ${isInBag 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-lg hover:scale-105'
              }`}
          >
            {isInBag ? (
              <>
                <BsFillBagCheckFill className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <BsBag className="w-4 h-4" />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand & Name */}
        <h3 className="font-semibold text-slate-100 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-slate-400 mt-1 truncate">
          {product.category}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg 
            bg-green-500/20 text-green-400">
            <AiFillStar className="w-3 h-3" />
            <span className="text-xs font-semibold">{product.rating}</span>
          </div>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-xs text-slate-500">120 reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-slate-100">
            ₹{product.price}
          </span>
          <span className="text-sm text-slate-500 line-through">
            ₹{Math.round(product.price * 1.4)}
          </span>
          <span className="text-xs font-semibold text-secondary">
            40% OFF
          </span>
        </div>
      </div>

      {/* Quick View Badge - Shows on Hover */}
      <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg
        bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium
        transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        Quick View
      </div>
    </div>
  );
};

function ProductListContent({ data }: { data: any[] }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((product: any, index: number) => (
          <Product p={product} key={index} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 rounded-xl font-semibold
          border-2 border-primary text-primary-light
          hover:bg-primary hover:text-white
          transition-all duration-300">
          Load More Products
        </button>
      </div>
    </>
  );
}

export default function ProductList({ data }: { data: any[] }) {
  return (
    <ReduxProvider>
      <ProductListContent data={data} />
    </ReduxProvider>
  );
}
