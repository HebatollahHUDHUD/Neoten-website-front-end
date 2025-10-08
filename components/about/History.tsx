"use client";

import { About } from "@/schemas/shared";
import Image from "next/image";
import { useState } from "react";

export default function History({ content }: { content: About }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

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
      <div className="flex  bg-[#0066CC] text-white  max-w-4xl mx-auto overflow-x-auto hide-scrollbar">
        {content.about_page_our_history_items.map((item, idx) => (
          <button
            key={item.year}
            onClick={() => setActiveIdx(idx)}
            className={`shrink-0 md:min-w-[200px] text-white py-10 px-8 transition cursor-pointer ${
              activeIdx === idx
                ? "bg-[#00A699] text-3xl font-bold"
                : "bg-[#0066CC] hover:bg-[#00A699] font-semibold text-lg"
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>
    </section>
  );
}
