 
// app/watches/[brand]/page.tsx
import { brands } from "@/data/brands";
import { notFound } from "next/navigation";
import WatchCard from "@/components/WatchCard";

interface Props {
  params: Promise<{ brand: string }>;
}

export default async function BrandPage({ params }: Props) {
  const { brand } = await params;
  const brandData = brands.find((b) => b.id === brand);

  if (!brandData) notFound();

  return (
    <main className="bg-stone-950 min-h-screen pt-24 pb-16">

      {/* Brand header */}
      <div className="text-center px-6 mb-16">
        <p className="text-amber-400 uppercase tracking-widest text-sm mb-3 font-sans">
          Collection
        </p>
        <h1 className="text-5xl font-serif text-stone-100 mb-4">
          {brandData.name}
        </h1>
        <div className="w-16 h-px bg-amber-400 mx-auto mb-6" />
        <p className="text-stone-400 text-lg font-sans">
          {brandData.tagline}
        </p>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brandData.products.map((watch) => (
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </div>

    </main>
  );
}