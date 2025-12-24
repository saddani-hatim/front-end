"use client";
import ImageCaro from "./components/HomePage/ImageBasedCarousel/ImageCaro";
import Cards from "./components/HomePage/ImageBasedCarousel/Cards";
import AdsSlider from "@/app/components/HomePage/ImageBasedCarousel/AdsSlider";
import AdsCaro from "@/app/components/HomePage/ImageBasedCarousel/AdsCaro";
import { Footer } from "./components/HomePage/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      {/* Hero Carousel Section */}
      <section className="pt-20">
        <ImageCaro />
      </section>

      {/* Medal Worthy Brands Section */}
      <section className="py-8 md:py-12">
        <AdsCaro heading={"medal worthy brands to bag"} />
      </section>

      {/* Promotional Slider */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-dark-800 to-dark-900">
        <AdsSlider />
      </section>

      {/* Shop by Category */}
      <section className="py-8 md:py-12">
        <Cards />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
