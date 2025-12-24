"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { removeFromBag, removePrice } from "@/redux/features/manageBag";
import { AiFillDelete } from "react-icons/ai";
import { BsBag, BsPlus, BsDash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Image from "next/image";

interface Item {
  imageUrl: string;
  name: string;
  price: number;
}

function BagItems() {
  const items = useAppSelector((state) => state.reducers.bag);
  const dispatch = useDispatch();

  const removePriceAndBag = (item: Item) => {
    if (Object.keys(item).length === 0) {
      return;
    }
    dispatch(removeFromBag(item));
    dispatch(removePrice(item.price));
  };

  const itemsArray = Object.entries(items).filter(([key, value]: any) => value && typeof value === 'object');

  if (itemsArray.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-20 h-20 rounded-full bg-dark-700 flex items-center justify-center mb-4">
          <BsBag className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-lg font-semibold text-slate-300 mb-2">Your bag is empty</h3>
        <p className="text-slate-500 text-sm">Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {itemsArray.map(([key, item]: any) => (
        <div 
          key={key}
          className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-xl
            border border-slate-700/30 hover:border-slate-600/50 transition-colors"
        >
          {/* Product Image */}
          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-dark-600 flex-shrink-0">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-200 truncate">{item.name}</h3>
            <p className="text-sm text-slate-400 mt-1">Size: M</p>
            
            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-2 bg-dark-600 rounded-lg">
                <button className="p-2 hover:bg-dark-500 rounded-l-lg transition-colors">
                  <BsDash className="w-4 h-4 text-slate-400" />
                </button>
                <span className="px-2 text-sm font-medium text-slate-200">1</span>
                <button className="p-2 hover:bg-dark-500 rounded-r-lg transition-colors">
                  <BsPlus className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Price & Remove */}
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span className="text-lg font-bold text-slate-100">₹{item.price}</span>
            <button
              onClick={() => removePriceAndBag(item)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg
                text-red-400 hover:bg-red-500/10 hover:text-red-300
                transition-all duration-200"
            >
              <AiFillDelete className="w-4 h-4" />
              <span className="text-xs font-medium">Remove</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BagItems;
