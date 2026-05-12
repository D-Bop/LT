// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "2348012345678"; // ✏️ your number here

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Build the WhatsApp message from form data
    const message = `Hello Legacy Timepieces! 

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  // Check all fields are filled before allowing submit
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <motion.div
      className="w-full max-w-xl mx-auto flex flex-col gap-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-stone-400 uppercase tracking-widest text-xs font-sans">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="bg-stone-900 border border-stone-700 text-stone-100 font-sans text-sm px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors duration-300 placeholder:text-stone-600"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="text-stone-400 uppercase tracking-widest text-xs font-sans">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+234 800 000 0000"
          className="bg-stone-900 border border-stone-700 text-stone-100 font-sans text-sm px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors duration-300 placeholder:text-stone-600"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label className="text-stone-400 uppercase tracking-widest text-xs font-sans">
          Subject
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-stone-900 border border-stone-700 text-stone-100 font-sans text-sm px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors duration-300"
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Looking for a Specific Watch">Looking for a Specific Watch</option>
          <option value="Pricing Information">Pricing Information</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-stone-400 uppercase tracking-widest text-xs font-sans">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          rows={5}
          className="bg-stone-900 border border-stone-700 text-stone-100 font-sans text-sm px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors duration-300 placeholder:text-stone-600 resize-none"
        />
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className={`flex items-center justify-center gap-3 w-full py-3 uppercase tracking-widest text-sm font-sans transition-colors duration-300
          ${isFormValid
            ? "bg-green-600 hover:bg-green-500 text-white cursor-pointer"
            : "bg-stone-800 text-stone-600 cursor-not-allowed"
          }`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.533 5.854L.057 23.428a.5.5 0 00.609.61l5.692-1.494A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.872 9.872 0 01-5.031-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.869 9.869 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
        </svg>
        Send via WhatsApp
      </button>

    </motion.div>
  );
}