"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

function TotalAmount() {
  let amount = 0;
  amount = useAppSelector((state) => state.reducers.totalAmount);

  const shipping = amount > 0 ? 99 : 0;
  const discount = Math.round(amount * 0.1);
  const total = amount + shipping - discount;

  return (
    <div className="space-y-4">
      {/* Price Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Subtotal</span>
          <span className="text-slate-200 font-medium">₹{amount}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Shipping</span>
          <span className="text-slate-200 font-medium">
            {shipping > 0 ? `₹${shipping}` : 'Free'}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Discount (10%)</span>
          <span className="text-green-400 font-medium">-₹{discount}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-700" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-slate-200 font-semibold">Total</span>
        <div className="text-right">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light 
            bg-clip-text text-transparent">
            ₹{total}
          </span>
          <p className="text-xs text-slate-500 mt-1">Inclusive of all taxes</p>
        </div>
      </div>

      {/* Savings Banner */}
      {discount > 0 && (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg
          bg-green-500/10 border border-green-500/20">
          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-green-400">
            You&apos;re saving ₹{discount} on this order!
          </span>
        </div>
      )}
    </div>
  );
}

export default TotalAmount;
