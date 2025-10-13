"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { About } from "@/schemas/shared";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft } from "lucide-react";
import { NavigationOptions } from "swiper/types";

export default function History({ content }: { content: About }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const activeData = content.about_page_our_history_items[activeIdx];

  return (
    <section className="w-full my-20">
      {/* Header */}
      <div className="bg-[#0066CC] max-w-4xl mx-auto text-white p-10 flex flex-col items-center justify-between">
        <div>
          <p className=" font-normal text-sm md:text-base text-center pb-2 ">
            {content.about_page_our_history_subtitle}
          </p>

          <h1 className="text-4xl font-bold text-center">
            {content.about_page_our_history_title}
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[650px]">
        <Image
          src={activeData.image}
          alt={activeData.title}
          fill
          quality={100}
          className="object-cover"
          priority
        />

        {/* نص فوق الصورة */}
        <div className="absolute bottom-6 right-6 bg-[#00A699] text-white p-10 max-w-md rounded-lg">
          <h1 className="text-2xl font-bold mb-3">{activeData.title}</h1>
          <p className="text-sm font-normal max-w-[350px]">{activeData.desc}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0066CC] text-white max-w-4xl mx-auto relative">
        <button
          ref={prevRef}
          className="cursor-pointer absolute top-1/2 -translate-y-1/2 -start-12 bg-gray-100 hover:bg-[#00A699] text-gray-400 hover:text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft className="rtl:rotate-180" />
        </button>

        <button
          ref={nextRef}
          className="cursor-pointer absolute top-1/2 -translate-y-1/2 -end-12 bg-gray-100 hover:bg-[#00A699] text-gray-400 hover:text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft className="rotate-180 rtl:rotate-0" />
        </button>

        {/* === Swiper === */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          className="gallery-swiper"
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          freeMode
        >
          {content.about_page_our_history_items.map((item, idx) => (
            <SwiperSlide key={item.year} className="!shrink !h-auto">
              <button
                onClick={() => setActiveIdx(idx)}
                className={`md:min-w-[200px] h-full text-white py-10 px-8 transition cursor-pointer ${
                  activeIdx === idx
                    ? "bg-[#00A699] text-3xl font-bold"
                    : "bg-[#0066CC] hover:bg-[#00A699] font-semibold text-lg"
                }`}
              >
                {item.year}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
