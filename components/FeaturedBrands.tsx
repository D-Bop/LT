// components/FeaturedBrands.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { brands } from "@/data/brands";
import BrandCard from "@/components/BrandCard";

export default function FeaturedBrands() {
  // Grab just the first 3 brands from your data file as a teaser
  const featured = brands.slice(0, 3);

  return (
    <section className="bg-stone-950 py-24 px-6">

      {/* --- Heading area --- */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Small amber label above the title — a classic luxury touch */}
        <p className="text-amber-400 uppercase tracking-widest text-sm mb-3 font-sans">
          Curated For You
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-stone-100">
          Featured Collections
        </h2>

        {/* Amber underline accent — decorative, not a real <hr> */}
        <div className="w-16 h-px bg-amber-400 mx-auto mt-4 mb-6" />

        <p className="text-stone-400 text-lg max-w-xl mx-auto font-sans">
          From bold sport to timeless dress — discover watches curated for every wrist.
        </p>
      </motion.div>

      {/* --- Brand cards grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featured.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <BrandCard brand={brand} />
          </motion.div>
        ))}
      </div>

      {/* --- CTA button --- */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/watches"
          className="inline-block border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 transition-colors duration-300 px-10 py-3 uppercase tracking-widest text-sm font-sans"
        >
          Explore All Brands
        </Link>
      </motion.div>

    </section>
  );
}