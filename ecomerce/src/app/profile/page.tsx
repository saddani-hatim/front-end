"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { BsBag, BsHeart, BsGear, BsBoxSeam } from "react-icons/bs";
import Link from "next/link";
import { Footer } from "../components/HomePage/Footer/Footer";

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Street, New York, NY 10001",
    avatar: "https://images.immediate.co.uk/production/volatile/sites/3/2023/03/Jujutsu-Kaisen-Cropped-dbe733b.jpg?quality=90&resize=844,563",
    memberSince: "January 2024",
  };

  const quickLinks = [
    { icon: BsBoxSeam, label: "My Orders", href: "#", count: 5 },
    { icon: BsHeart, label: "Wishlist", href: "/wishlist", count: 0 },
    { icon: BsBag, label: "Shopping Bag", href: "/bag", count: 0 },
    { icon: BsGear, label: "Settings", href: "#", count: null },
  ];

  const recentOrders = [
    { id: "ORD-001", date: "Dec 20, 2024", status: "Delivered", total: 2499 },
    { id: "ORD-002", date: "Dec 15, 2024", status: "In Transit", total: 1299 },
    { id: "ORD-003", date: "Dec 10, 2024", status: "Delivered", total: 3999 },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <Image
                src={user.avatar}
                alt={user.name}
                width={128}
                height={128}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover
                  ring-4 ring-primary/30 shadow-glow"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 
                bg-green-500 border-2 border-dark-900 rounded-full" />
            </div>

            {/* User Info */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
                {user.name}
              </h1>
              <p className="text-slate-400 mt-1">{user.email}</p>
              <p className="text-sm text-slate-500 mt-2">
                Member since {user.memberSince}
              </p>
            </div>

            {/* Edit Button */}
            <button className="md:ml-auto px-6 py-2 rounded-xl font-medium
              border-2 border-primary text-primary-light
              hover:bg-primary hover:text-white
              transition-all duration-300">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="p-4 bg-dark-800 rounded-2xl border border-slate-700/50
                hover:border-primary/30 hover:shadow-glow transition-all duration-300
                flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20
                flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <link.icon className="w-5 h-5 text-primary-light" />
              </div>
              <span className="text-slate-200 font-medium">{link.label}</span>
              {link.count !== null && (
                <span className="text-sm text-slate-500">{link.count} items</span>
              )}
            </Link>
          ))}
        </div>

        {/* Profile Details */}
        <div className="bg-dark-800 rounded-2xl border border-slate-700/50 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-700/50 bg-dark-700/30">
            <h2 className="font-semibold text-slate-100">Personal Information</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                <AiOutlineUser className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Full Name</p>
                <p className="text-slate-200">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                <AiOutlineMail className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Address</p>
                <p className="text-slate-200">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                <AiOutlinePhone className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone Number</p>
                <p className="text-slate-200">{user.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                <AiOutlineEnvironment className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Address</p>
                <p className="text-slate-200">{user.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-dark-800 rounded-2xl border border-slate-700/50 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700/50 bg-dark-700/30 flex items-center justify-between">
            <h2 className="font-semibold text-slate-100">Recent Orders</h2>
            <Link href="#" className="text-sm text-primary-light hover:text-primary transition-colors">
              View All
            </Link>
          </div>
          <div className="divide-y divide-slate-700/50">
            {recentOrders.map((order, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-200 font-medium">{order.id}</p>
                  <p className="text-sm text-slate-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium
                    ${order.status === "Delivered" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-amber-500/20 text-amber-400"
                    }`}>
                    {order.status}
                  </span>
                  <p className="text-slate-200 font-semibold mt-1">₹{order.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
