// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const WHATSAPP_NUMBER = "2347036820374"; 

export default function ContactForm() {
  const [subject, setSubject] = useState("General Enquiry");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    const fullMessage = `*Subject:* ${subject}

${message}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.div
      className="w-full max-w-xl mx-auto overflow-hidden border border-stone-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Chat header — looks like a WhatsApp contact bar */}
      <div className="bg-stone-800 px-5 py-4 flex items-center gap-4 border-b border-stone-700">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
          <span className="text-stone-950 font-serif font-bold text-sm">LT</span>
        </div>
        <div>
          <p className="text-stone-100 font-sans text-sm font-semibold">Legacy Timepieces</p>
          <p className="text-green-400 text-xs font-sans">Online</p>
        </div>
        {/* WhatsApp icon on the right */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-green-500 ml-auto">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.533 5.854L.057 23.428a.5.5 0 00.609.61l5.692-1.494A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.872 9.872 0 01-5.031-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.869 9.869 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
        </svg>
      </div>

      {/* Chat body */}
      <div className="bg-stone-950 px-5 py-6 flex flex-col gap-4 min-h-64">

        {/* Received message bubble — from Legacy Timepieces */}
        <div className="flex items-end gap-3 max-w-xs">
          <div className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mb-1">
            <span className="text-stone-950 font-serif font-bold text-xs">LT</span>
          </div>
          <div className="bg-stone-800 px-4 py-3 rounded-tr-2xl rounded-br-2xl rounded-tl-sm">
            <p className="text-stone-200 text-sm font-sans leading-relaxed">
              Hello! 👋 What timepiece can we help you with today?
            </p>
            <p className="text-stone-500 text-xs font-sans mt-1">Legacy Timepieces</p>
          </div>
        </div>

        {/* Subject selector — styled as a quick-reply chip row */}
        <div className="flex flex-wrap gap-2 ml-10">
          {["General Enquiry", "Looking for a Watch", "Pricing Information", "Other"].map((option) => (
            <button
              key={option}
              onClick={() => setSubject(option)}
              className={`text-xs font-sans px-3 py-1.5 border rounded-full transition-colors duration-200
                ${subject === option
                  ? "border-amber-400 text-amber-400 bg-amber-400/10"
                  : "border-stone-600 text-stone-400 hover:border-stone-400"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

      </div>

      {/* Chat input bar */}
      <div className="bg-stone-900 border-t border-stone-700 px-4 py-3 flex items-center gap-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows={2}
          className="flex-1 bg-stone-800 border border-stone-700 text-stone-100 text-sm font-sans px-4 py-2 rounded-2xl resize-none focus:outline-none focus:border-amber-400 transition-colors duration-300 placeholder:text-stone-600"
        />

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
            ${message.trim()
              ? "bg-green-600 hover:bg-green-500 text-white"
              : "bg-stone-700 text-stone-500 cursor-not-allowed"
            }`}
        >
        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
        </button>
      </div>

    </motion.div>
  );
}