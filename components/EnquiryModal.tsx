"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WHATSAPP_NUMBER = "2347036820374";

interface Watch {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface EnquiryModalProps {
  watch: Watch | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ watch, isOpen, onClose }: EnquiryModalProps) {

  if (!watch) return null;

  const message = `Hello! I'm interested in purchasing this watch from Legacy Timepieces.

*Watch:* ${watch.name}
*Description:* ${watch.description}

Please let me know availability and how to proceed. Thank you!`;

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-stone-900 border border-stone-700 w-full max-w-md relative">

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-100 transition-colors text-xl z-10"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Watch image */}
              <div className="relative w-full h-64">
                <Image
                  src={watch.image}
                  alt={watch.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-900 to-transparent" />
              </div>

              {/* Content area */}
              <div className="px-6 pb-6 pt-2">
                <h3 className="text-stone-100 font-serif text-2xl mb-1">{watch.name}</h3>

                {/* Message preview box */}
                <div className="bg-stone-800 border border-stone-600 p-4 mb-6">
                  <p className="text-stone-400 uppercase tracking-widest text-xs mb-2 font-sans">
                    Message Preview
                  </p>
                  <p className="text-stone-300 text-sm font-sans leading-relaxed whitespace-pre-line">
                    {message}
                  </p>
                </div>

                {/* WhatsApp button */}
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white transition-colors duration-300 py-3 uppercase tracking-widest text-sm font-sans"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.533 5.854L.057 23.428a.5.5 0 00.609.61l5.692-1.494A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.872 9.872 0 01-5.031-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.869 9.869 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
                  </svg>
                  Open WhatsApp
                </a>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}