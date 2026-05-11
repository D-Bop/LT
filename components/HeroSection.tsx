"use client"
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
    {
        image: "/hero/hero-1.jpg",
        brand: "Tissot",
        tagline: "Innovators by tradition"
    },
    {
        image: "/hero/hero-2.jpg",
        brand: "Audemars Piguet",
        tagline: "You Must First Master Them"
    },
    {
        image: "/hero/hero-3.jpg",
        brand: "G-SHOCK",
        tagline: "Built for Those Who Move Different"
    },
    {
        image: "/hero/hero-4.jpg",
        brand: "Cartier",
        tagline: "Never Imitate, Always Innovate"
    },
    {
        image: "/hero/hero-5.jpg",
        brand: "Rolex",
        tagline: "Every Rolex tells a story"
    },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const currentSlide = slides[currentIndex];
    return  <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-stone-900">
        {/* Background Images — crossfade effect */}
      <AnimatePresence>
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${currentSlide.image}')` }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-stone-900/55" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-2xl mx-auto flex flex-col items-center gap-6">

        {/* Brand name */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide.brand}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm tracking-[0.4em] uppercase"
          >
            {currentSlide.brand}
          </motion.p>
        </AnimatePresence>

        {/* Main heading — stays static, feels like an anchor */}
        <h1 className="text-amber-50 text-5xl md:text-7xl font-serif leading-tight">
          Time, Crafted <br /> to Perfection
        </h1>

        {/* Tagline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide.tagline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-stone-300 text-base md:text-lg max-w-md"
          >
            {currentSlide.tagline}
          </motion.p>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/watches"
            className="mt-4 px-8 py-3 border border-amber-400 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-400 hover:text-stone-900 transition-all duration-300"
          >
            Explore Collection
          </Link>
        </motion.div>

      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentIndex
                ? "bg-amber-400 w-8"
                : "bg-stone-400 w-4 hover:bg-amber-200"
            }`}
          />
        ))}
      </div>
    </section>
}

export default HeroSection;