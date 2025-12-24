"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Profile() {
  const menuItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "My Profile",
      href: "/profile",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Edit Profile",
      href: "#",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      label: "My Orders",
      href: "#",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
      label: "Help & Support",
      href: "/contact",
    },
  ];

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <div className="relative cursor-pointer group">
          <Avatar
            variant="circular"
            alt="User Profile"
            className="cursor-pointer w-8 h-8 md:w-9 md:h-9 
              ring-2 ring-transparent group-hover:ring-primary 
              transition-all duration-300"
            src="https://images.immediate.co.uk/production/volatile/sites/3/2023/03/Jujutsu-Kaisen-Cropped-dbe733b.jpg?quality=90&resize=844,563"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 
            bg-green-500 border-2 border-dark-900 rounded-full" />
        </div>
      </MenuHandler>
      
      <MenuList className="mt-2 p-2 bg-dark-800 border border-slate-700 rounded-xl shadow-card min-w-[200px] z-[100]">
        {/* User Info Header */}
        <div className="px-3 py-2 mb-2 border-b border-slate-700">
          <Typography variant="small" className="font-semibold text-slate-200">
            Welcome Back!
          </Typography>
          <Typography variant="small" className="text-slate-500 text-xs">
            user@example.com
          </Typography>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <MenuItem 
              className="flex items-center gap-3 px-3 py-2.5 
                text-slate-300 hover:text-white hover:bg-dark-700 
                rounded-lg transition-all duration-200"
            >
              <span className="text-primary-light">{item.icon}</span>
              <Typography variant="small" className="font-medium">
                {item.label}
              </Typography>
            </MenuItem>
          </Link>
        ))}

        {/* Divider */}
        <hr className="my-2 border-slate-700" />

        {/* Sign Out */}
        <MenuItem className="flex items-center gap-3 px-3 py-2.5 
          text-red-400 hover:text-red-300 hover:bg-red-500/10 
          rounded-lg transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
          </svg>
          <Typography variant="small" className="font-medium">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
