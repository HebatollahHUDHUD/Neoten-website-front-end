"use client";

import Image from "next/image";
import { useState } from "react";
type YearData = {
  year: number;
  image: string;
  text: string;
};

const timeline: YearData[] = [
  {
    year: 2022,
    image: "/images/c52543965fe339b6f641b840684b1694.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make …",
  },
  {
    year: 2023,
    image: "/images/c52543965fe339b6f641b840684b1694.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make …",
  },
  {
    year: 2024,
    image: "/images/c52543965fe339b6f641b840684b1694.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make …",
  },
  {
    year: 2025,
    image: "/images/c52543965fe339b6f641b840684b1694.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make …",
  },
];

export default function History() {
    const [selectedYear, setSelectedYear] = useState<number>(timeline[0].year);

  const activeData = timeline.find((item) => item.year === selectedYear)!;
  return (
    <section className="w-full my-20">
      {/* Header */}
      <div className="bg-[#0066CC] max-w-4xl mx-auto text-white p-10 flex flex-col items-center justify-between">
        <div>
            <p className=" font-normal text-xs text-center pb-2 ">
              CONNECTING PEOPLE
          </p>
          <h1 className="text-4xl font-bold text-center">
            Our History
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[650px]">
        <Image
          src={activeData.image}
          alt={activeData.text}
          fill
          quality={100}
          className="object-cover"
          priority
        />

        {/* نص فوق الصورة */}
        <div className="absolute bottom-6 right-6 bg-[#00A699] text-white p-10 max-w-md rounded-lg">
          <h1 className="text-2xl font-bold mb-3">{activeData.year} -  WE THINK BEYOND THE BORDERS</h1>
          <p className="text-sm font-normal max-w-[350px]">{activeData.text}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0066CC] text-white  max-w-4xl mx-auto">
        {timeline.map((item) => (
          <button
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className={`text-white py-10 transition cursor-pointer ${
              selectedYear === item.year
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
