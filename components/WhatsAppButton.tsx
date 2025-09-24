"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "next/navigation";
export default function WhatsAppButton() {
  const { locale } = useParams<{ locale: string }>(); 
  return (
    <a
      href="https://wa.me/962798785992" 
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-20 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg animate-bounce hover:scale-110 transition-transform 
        ${locale === "ar" ? "left-6" : "right-6"}
        `}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
