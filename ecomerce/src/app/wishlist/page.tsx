"use client";
import React from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeFromWishlist, addToBag, addPrice } from "@/redux/features/manageBag";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBag, BsTrash } from "react-icons/bs";
import Link from "next/link";
import { Footer } from "../components/HomePage/Footer/Footer";
import { ReduxProvider } from "@/redux/provider";

function WishlistContent() {
  const wishlistItems = useAppSelector((state) => state.reducers.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (item: any) => {
    dispatch(removeFromWishlist(item));
  };

  const handleAddToBag = (item: any) => {
    dispatch(addToBag(item));
    dispatch(addPrice(item.price));
    dispatch(removeFromWishlist(item));
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header Section */}
      <div className="pt-24 pb-6 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Wishlist</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary
              flex items-center justify-center shadow-glow-pink">
              <AiFillHeart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
                My Wishlist
              </h1>
              <p className="text-slate-400 mt-1">
                {wishlistItems.length} items saved for later
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {wishlistItems.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-dark-800 flex items-center justify-center mb-6">
              <AiOutlineHeart className="w-12 h-12 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">Your wishlist is empty</h3>
            <p className="text-slate-500 mb-6 max-w-md">
              Save items you love by clicking the heart icon on any product
            </p>
            <Link
              href="/shop"
              className="px-8 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-primary to-secondary
                text-white shadow-glow hover:shadow-glow-lg hover:scale-105
                transition-all duration-300"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          /* Wishlist Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {wishlistItems.map((item: any, index: number) => (
              <div
                key={index}
                className="group relative bg-dark-800 rounded-2xl overflow-hidden
                  border border-slate-700/50 transition-all duration-300
                  hover:border-secondary/30 hover:shadow-card-hover"
              >
                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(item)}
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl
                    bg-dark-900/80 backdrop-blur-sm border border-slate-700/50
                    flex items-center justify-center transition-all duration-300
                    hover:border-red-500/50 hover:bg-red-500/20 group/btn"
                >
                  <BsTrash className="w-4 h-4 text-slate-400 group-hover/btn:text-red-400" />
                </button>

                {/* Wishlisted Heart */}
                <div className="absolute top-3 left-3 z-10">
                  <AiFillHeart className="w-6 h-6 text-secondary" />
                </div>

                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-dark-700">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 
                      group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-100 truncate">{item.name}</h3>
                  <p className="text-sm text-slate-400 mt-1 truncate">{item.category}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-slate-100">₹{item.price}</span>
                    
                    <button
                      onClick={() => handleAddToBag(item)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm
                        bg-gradient-to-r from-primary to-secondary text-white
                        shadow-glow hover:shadow-glow-lg hover:scale-105
                        transition-all duration-300"
                    >
                      <BsBag className="w-4 h-4" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Continue Shopping Link */}
        {wishlistItems.length > 0 && (
          <div className="flex justify-center mt-12">
            <Link
              href="/shop"
              className="px-8 py-3 rounded-xl font-semibold
                border-2 border-primary text-primary-light
                hover:bg-primary hover:text-white
                transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default function WishlistPage() {
  return (
    <ReduxProvider>
      <WishlistContent />
    </ReduxProvider>
  );
}
