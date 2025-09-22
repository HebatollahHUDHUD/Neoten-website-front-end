"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201234567890" // ضع رقمك هنا مع كود الدولة
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg animate-bounce hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
