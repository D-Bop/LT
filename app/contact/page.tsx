// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-stone-950 min-h-screen pt-24 pb-16 px-6">

      {/* Page header */}
      <div className="text-center mb-16">
        <p className="text-amber-400 uppercase tracking-widest text-sm mb-3 font-sans">
          Get In Touch
        </p>
        <h1 className="text-5xl font-serif text-stone-100 mb-4">
          Contact Us
        </h1>
        <div className="w-16 h-px bg-amber-400 mx-auto mb-6" />
        <p className="text-stone-400 text-lg font-sans max-w-xl mx-auto">
          Looking for a specific timepiece or have a question? Fill in the form
          below and we'll get back to you on WhatsApp.
        </p>
      </div>

      {/* Form */}
      <ContactForm />

    </main>
  );
}