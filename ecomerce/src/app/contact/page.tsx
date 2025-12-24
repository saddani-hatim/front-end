"use client";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { Footer } from "../components/HomePage/Footer/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: AiOutlineMail,
      title: "Email",
      value: "support@stylestore.com",
      color: "primary",
    },
    {
      icon: AiOutlinePhone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "secondary",
    },
    {
      icon: AiOutlineEnvironment,
      title: "Address",
      value: "123 Fashion Street, NY 10001",
      color: "green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-dark-800 rounded-2xl border border-slate-700/50
                  hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}/20 
                  flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <h3 className="text-slate-200 font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-dark-800 rounded-2xl border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-slate-700
                      rounded-xl text-slate-200 placeholder-slate-500
                      focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-slate-700
                      rounded-xl text-slate-200 placeholder-slate-500
                      focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-700 border border-slate-700
                    rounded-xl text-slate-200 placeholder-slate-500
                    focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-slate-700
                    rounded-xl text-slate-200 placeholder-slate-500
                    focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold
                  bg-gradient-to-r from-primary to-secondary text-white
                  shadow-glow hover:shadow-glow-lg hover:scale-[1.02]
                  transition-all duration-300"
              >
                <BsSend className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
