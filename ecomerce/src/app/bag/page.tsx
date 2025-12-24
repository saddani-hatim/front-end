"use client";
import React from "react";
import BagItems from "../components/bag/BagItems";
import TotalAmount from "../components/bag/TotalAmount";
import Link from "next/link";
import { BsBag, BsArrowLeft } from "react-icons/bs";

export default function page() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header Section */}
      <div className="pt-24 pb-6 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Shopping Bag</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary
              flex items-center justify-center shadow-glow">
              <BsBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
                Your Shopping Bag
              </h1>
              <p className="text-slate-400 mt-1">
                Review your items and proceed to checkout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-2xl border border-slate-700/50 overflow-hidden">
              {/* Section Header */}
              <div className="px-6 py-4 border-b border-slate-700/50 bg-dark-700/30">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-100">Cart Items</h2>
                  <span className="text-sm text-slate-400">0 items</span>
                </div>
              </div>

              {/* Items Container */}
              <div className="p-6">
                <BagItems />
              </div>
            </div>

            {/* Continue Shopping */}
            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 mt-6 text-primary-light 
                hover:text-primary transition-colors duration-200"
            >
              <BsArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-dark-800 rounded-2xl border border-slate-700/50 overflow-hidden sticky top-24">
              {/* Section Header */}
              <div className="px-6 py-4 border-b border-slate-700/50 bg-dark-700/30">
                <h2 className="font-semibold text-slate-100">Order Summary</h2>
              </div>

              {/* Summary Content */}
              <div className="p-6">
                <TotalAmount />
              </div>

              {/* Promo Code */}
              <div className="px-6 pb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-4 py-3 bg-dark-700 border border-slate-700
                      rounded-xl text-slate-200 placeholder-slate-500
                      focus:outline-none focus:border-primary transition-colors"
                  />
                  <button className="px-4 py-3 bg-dark-700 border border-slate-700
                    rounded-xl text-primary-light font-medium
                    hover:bg-primary hover:text-white hover:border-primary
                    transition-all duration-300">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="px-6 pb-6">
                <button className="w-full py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-primary to-secondary
                  shadow-glow hover:shadow-glow-lg hover:scale-[1.02]
                  transition-all duration-300">
                  Proceed to Checkout
                </button>
              </div>

              {/* Trust Badges */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-700/50">
                <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                    </svg>
                    Easy Returns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}