import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Filters from "../../shop/Filters";
import ProductList from "../../shop/ProductList";
import { Footer } from "../../components/HomePage/Footer/Footer";
import dataP from "../../components/data/data";

// Category configuration
const categoryConfig: { [key: string]: { title: string; description: string; banner: string } } = {
  men: {
    title: "Men's Collection",
    description: "Discover the latest trends in men's fashion - from casual wear to formal attire",
    banner: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1200&q=80",
  },
  women: {
    title: "Women's Collection",
    description: "Explore elegant and trendy fashion for every occasion",
    banner: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
  },
  kids: {
    title: "Kids' Collection",
    description: "Fun, comfortable, and stylish clothing for your little ones",
    banner: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80",
  },
  "home-living": {
    title: "Home & Living",
    description: "Transform your space with our curated home decor collection",
    banner: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  },
  beauty: {
    title: "Beauty & Personal Care",
    description: "Premium beauty products for your self-care routine",
    banner: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80",
  },
  studio: {
    title: "Studio Collection",
    description: "Exclusive designer pieces and premium styles",
    banner: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
  },
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryConfig[params.slug] || {
    title: "All Products",
    description: "Browse our complete collection",
    banner: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Banner */}
      <div className="relative pt-16 md:pt-20">
        <div 
          className="h-48 md:h-72 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${category.banner})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
                <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h1>
              <p className="text-slate-300 text-sm md:text-lg max-w-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb & Filters Bar */}
      <div className="bg-dark-800 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-primary-light transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-200 capitalize">{params.slug.replace('-', ' & ')}</span>
          </nav>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-slate-400">
              <span className="text-slate-200 font-semibold">{dataP.length}</span> products found
            </p>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 
                bg-dark-700 border border-slate-700 rounded-xl
                text-sm text-slate-300 hover:border-primary 
                hover:text-white transition-all duration-300">
                Sort by
                <AiOutlineArrowDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <Filters />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <ProductList data={dataP} />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Generate static params for all categories
export function generateStaticParams() {
  return [
    { slug: 'men' },
    { slug: 'women' },
    { slug: 'kids' },
    { slug: 'home-living' },
    { slug: 'beauty' },
    { slug: 'studio' },
  ];
}
