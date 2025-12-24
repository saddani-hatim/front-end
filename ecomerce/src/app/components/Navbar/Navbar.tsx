"use client";

import LogoAndMenuItems from "./LogoAndMenuItems";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 
        bg-dark-900/80 backdrop-blur-xl 
        border-b border-slate-700/50
        px-4 md:px-8 py-3
        flex justify-between items-center
        transition-all duration-300"
    >
      {/* Logo and Menu */}
      <LogoAndMenuItems/>

      {/* Search Bar and Actions */}
      <SearchBar/>
    </nav>
  );
}
