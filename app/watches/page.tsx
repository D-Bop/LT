import BrandCard from "@/components/BrandCard";
import { brands } from "@/data/brands";
import { main } from "framer-motion/client";

const WatchesPage = () => {
    return (
        <main className="min-h-screen bg-stone-950 px-6 py-16">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-4">
                Our Collection
                </p>
                <h1 className="text-amber-50 text-4xl md:text-6xl font-serif">
                Shop by Brand
                </h1>
                <p className="text-stone-400 mt-4 max-w-md mx-auto">
                Each brand tells a story. Find yours.
                </p>
            </div>

            {/* Brand Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brands.map((brand) => (
                <BrandCard
                    key={brand.id}
                    id={brand.id}
                    name={brand.name}
                    tagline={brand.tagline}
                    image={brand.image}
                />
                ))}
            </div>
        </main>
    )
}

export default WatchesPage;