// components/WatchCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// The shape of data this card expects
interface Watch {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface WatchCardProps {
  watch: Watch;
}

export default function WatchCard({ watch }: WatchCardProps) {
  return (
    <motion.div
      className="bg-stone-900 border border-stone-700 overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Watch image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={watch.image}
          alt={watch.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="text-stone-100 font-serif text-xl mb-1">{watch.name}</h3>
        <p className="text-stone-400 text-sm font-sans mb-3">{watch.description}</p>
        <p className="text-amber-400 text-sm font-sans mb-5">{watch.price}</p>

        {/* Placeholder button — we'll wire this to WhatsApp shortly */}
        <button
          className="w-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-950 transition-colors duration-300 py-2 uppercase tracking-widest text-sm font-sans"
        >
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
}