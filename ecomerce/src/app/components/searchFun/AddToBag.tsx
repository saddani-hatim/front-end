import React, { useState } from "react";
import { BsBag, BsFillBagCheckFill } from "react-icons/bs";

export default function AddToBagButton() {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm
        transition-all duration-300 transform hover:scale-105
        ${isAdded 
          ? "bg-green-500/20 text-green-400 border border-green-500/30" 
          : "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
        }`}
    >
      {isAdded ? (
        <>
          <BsFillBagCheckFill className="w-4 h-4" />
          <span>Added</span>
        </>
      ) : (
        <>
          <BsBag className="w-4 h-4" />
          <span>Add to Bag</span>
        </>
      )}
    </button>
  );
}
