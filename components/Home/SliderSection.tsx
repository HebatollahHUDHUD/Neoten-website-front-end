"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
const slides = [
  {
    src: "/images/Rectangle 69.png",
    title: "POWER BEYOND CARGO",
    desc: "LOGISTICS. INNOVATION. TECHNOLOGY.",
  },
 {
    src: "/images/99b3066d3d364243ac0bfb4f7c565c5d.png",
    title: "POWER BEYOND CARGO",
    desc: "LOGISTICS. INNOVATION. TECHNOLOGY.",
  },
  {
    src: "/images/Rectangle 69.png",
    title: "POWER BEYOND CARGO",
    desc: "LOGISTICS. INNOVATION. TECHNOLOGY.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { locale } = useParams<{ locale: string }>(); 
  const t = useTranslations();

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

    useEffect(() => {
    const interval = setInterval(() => {
      locale === "ar"
        ? prevSlide() 
        : nextSlide(); 
    }, 3000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <div className="relative w-full h-screen overflow-hidden"
    dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
          {/* Text content container */}
<div className="absolute inset-0 flex flex-col justify-center items-center text-center md:text-start text-white">
  {/* النصوص */}
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-sm md:text-lg font-semibold mb-4 tracking-[0.5em] uppercase">
      {slide.title}
    </h1>
    <p className="font-bold text-4xl md:text-6xl mb-6">{slide.desc}</p>
  </div>

  <div className={`absolute mt-64 flex items-center w-64 ${locale === "ar" ? "right-0" : "left-0"}`}>
    <div className="flex-1 border-t border-gray-400"></div>
    <button className="relative w-16 h-16 bg-[#00A699] rounded-full hover:bg-[#008578] transition cursor-pointer">
    <p className={`absolute  bottom-5 font-normal text-white ${locale === "ar" ? "right-5" :"left-5"}`}>
        {t("explore")}
    </p>
    </button>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={locale === "ar" ? nextSlide: prevSlide}
        className="absolute top-1/2 left-0 md:left-6 -translate-y-1/2 p-3 cursor-pointer transition"
      >
        <Image
              src="/Group 18.svg"
              alt=""
              width={50}
              height={10}
              quality={100}
              />
      </button>
      <button
        onClick={locale === "ar" ? prevSlide : nextSlide}
        className="absolute top-1/2 right-0 md:right-6 -translate-y-1/2 p-3 cursor-pointer transition"
      >
         <Image
              src="/Group 17.svg"
              alt=""
              width={50}
              height={10}
              quality={100}
              />
      </button>

      {/* Counter */}
      <div className={`absolute bottom-6  bg-transparent flex items-end gap-2 ${locale === "ar" ? "left-6" : "right-6"}`}>
  <span className="text-white text-5xl font-bold leading-none">
    0{current + 1}
  </span>
  <span className="text-gray-400 text-lg leading-none">
    / 0{slides.length}
  </span>
</div>

    </div>
  );
}
