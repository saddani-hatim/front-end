import React from "react";
import { nanoid } from "nanoid";
import AddToBagButton from "./AddToBag";
import { useDispatch } from "react-redux";
import { addToBag, addPrice } from "@/redux/features/manageBag";
import { BsBag } from "react-icons/bs";

export default function SearchList(data: any) {
  const dispatch = useDispatch();

  const addItem = (item: any) => {
    dispatch(addPrice(item.price));
    dispatch(addToBag(item));
  };

  const items = Object.entries(data.data);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <p className="text-slate-400">No products found</p>
      </div>
    );
  }

  return (
    <div className="max-h-72 overflow-y-auto">
      {items.map(([key, item]: any) => (
        <div 
          key={key}
          className="flex items-center gap-3 p-3 hover:bg-dark-700 
            transition-colors cursor-pointer border-b border-slate-700/30 last:border-b-0"
        >
          {/* Product Image */}
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-600 flex-shrink-0">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-200 truncate">
              {item.name}
            </p>
            <p className="text-sm text-primary-light font-medium">
              ₹{item.price}
            </p>
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(item);
            }}
            className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary
              text-white hover:shadow-glow hover:scale-105
              transition-all duration-200"
          >
            <BsBag className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
