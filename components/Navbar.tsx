"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-900 text-amber-50 px-6 py-4">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-serif text-2xl tracking-widest text-amber-400">
          LT
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
          <li><Link href="/watches" className="hover:text-amber-400 transition-colors">Watches</Link></li>
          <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-amber-400"></span>
          <span className="w-6 h-0.5 bg-amber-400"></span>
          <span className="w-6 h-0.5 bg-amber-400"></span>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-2 pb-4 text-sm tracking-widest uppercase">
          <li><Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">Home</Link></li>
          <li><Link href="/watches" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">Watches</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition-colors">Contact</Link></li>
        </ul>
      )}

    </nav>
  );
}