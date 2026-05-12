// components/Footer.tsx
import Link from "next/link";

const WHATSAPP_NUMBER = "2348012345678"; // ✏️ your number here
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-16 pb-8 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Column 1 — Brand */}
        <div>
          <h3 className="text-stone-100 font-serif text-2xl mb-3">
            Legacy Timepieces
          </h3>
          <div className="w-10 h-px bg-amber-400 mb-4" />
          <p className="text-stone-400 text-sm font-sans leading-relaxed">
            Curating exceptional timepieces for the discerning collector.
            Every watch tells a story — find yours.
          </p>
        </div>

        {/* Column 2 — About */}
        <div>
          <h4 className="text-stone-100 font-sans uppercase tracking-widest text-xs mb-4">
            About
          </h4>
          <p className="text-stone-400 text-sm font-sans leading-relaxed">
            Legacy Timepieces is a watch store specialising
            in luxury and premium timepieces. We connect watch enthusiasts
            with their wanted timepieces. No stories, Just Excellence!
          </p>
        </div>

        {/* Column 3 — Quick Links */}
        <div>
          <h4 className="text-stone-100 font-sans uppercase tracking-widest text-xs mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/"
                className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-sans"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/watches"
                className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-sans"
              >
                Watches
              </Link>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-sans"
              >
                WhatsApp Us
              </a>
            </li>
            <li>
                <Link
                    href="/contact"
                    className="text-stone-400 hover:text-amber-400 transition-colors duration-300 text-sm font-sans"
                >
                    Contact
                </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-stone-600 text-xs font-sans">
          © {new Date().getFullYear()} Legacy Timepieces. All rights reserved.
        </p>
        <p className="text-stone-600 text-xs font-sans">
          Lagos, Nigeria
        </p>
      </div>

    </footer>
  );
}