"use client"
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface BrandCardProps {
  brand: {
    id: string;
    name: string;
    tagline: string;
    image: string;
    products: Product[];
  };
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <Link href={`/watches/${brand.id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-sm cursor-pointer group h-80"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${brand.image}')` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-stone-900/50 group-hover:bg-stone-900/30 transition-all duration-500" />

        {/* Bottom Text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-1">
            {brand.tagline}
          </p>
          <h3 className="text-amber-50 text-xl font-serif">
            {brand.name}
          </h3>
        </div>

      </motion.div>
    </Link>
  );
}

export default BrandCard;