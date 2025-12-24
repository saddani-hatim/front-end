import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  const footerLinks = {
    onlineShopping: {
      title: "Online Shopping",
      links: ["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Cards"]
    },
    usefulLinks: {
      title: "Useful Links",
      links: ["Blog", "Careers", "Site Map", "Corporate Info", "Whitehat"]
    },
    customerPolicies: {
      title: "Customer Policies",
      links: ["Contact Us", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Privacy Policy"]
    },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaPinterestP, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-dark-800 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary 
                flex items-center justify-center text-white font-bold text-xl shadow-glow">
                S
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-light to-secondary-light 
                bg-clip-text text-transparent">
                StyleStore
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Discover the latest fashion trends and premium styles. Your one-stop destination for all things fashion.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-dark-700 border border-slate-700
                    flex items-center justify-center text-slate-400
                    hover:bg-gradient-to-br hover:from-primary hover:to-secondary
                    hover:text-white hover:border-transparent hover:shadow-glow
                    transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href="#" 
                      className="text-sm text-slate-400 hover:text-primary-light 
                        transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2024 StyleStore. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-slate-400 hover:text-primary-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-primary-light transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-primary-light transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Badge */}
      <div className="bg-dark-900 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-slate-400">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">100% Original</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
              </svg>
              <span className="text-sm">Easy Returns</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-sm">Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
