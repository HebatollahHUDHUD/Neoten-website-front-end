"use client";
import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/common/pageHeader";

type GalleryItem = {
  src: string;
  category: "Air Flight" | "Truck Flight" | "Ship Flight" | "Train Flight";
};

const items: GalleryItem[] = [
  { src: "/images/2e9fe81f046b0f884268fe91cf358565.png", category: "Ship Flight" },
  { src: "/images/4cb1873701c26282d1e6cc79190313f2.png", category: "Air Flight" },
  { src: "/images/7aadf5111b0142ee80c97695e4f3965c.png", category: "Truck Flight" },
  { src: "/images/9db19e35043dcd307de90151bd70c3ab.png", category: "Train Flight" },
  { src: "/images/75dbceb6492570970b369858fb688187.png", category: "Air Flight" },
  { src: "/images/91a172a5c40e10fd802869d45646c02f.png", category: "Ship Flight" },
  { src: "/images/99b3066d3d364243ac0bfb4f7c565c5d.png", category: "Truck Flight" },
  { src: "/images/199c1b49af7bc78f0f47fbcf15d972e5.png", category: "Air Flight" },
  { src: "/images/0300bd9add091be3af18a7d2ed7d3773.png", category: "Ship Flight" },
  { src: "/images/454d6720a0881b7033656923ace7e096.png", category: "Train Flight" },
  { src: "/images/3766c03dddc53e5469ea0ab4b244b6ad.png", category: "Air Flight" },
  { src: "/images/156967c78df3bb50cc3ae7083b63c6e5.png", category: "Truck Flight" },
  { src: "/images/a683559fe165b651fbced787b929cd42.png", category: "Air Flight" },
  { src: "/images/c52543965fe339b6f641b840684b1694.png", category: "Ship Flight" },
];


const categories = ["All", "Air Flight", "Truck Flight", "Ship Flight", "Train Flight"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
        <PageHeader page="gallery" />
    <section className="container max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 w-52 font-semibold ${
              active === cat
                ? "bg-blue-600 text-white"
                : "bg-none text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid صور */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-64 overflow-hidden  cursor-pointer"
            onClick={() => setSelected(item.src)}
          >
            <Image
              src={item.src}
              alt={item.category}
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={selected}
              alt="Selected"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setSelected(null)}
            className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            ✖ Close
          </button>
        </div>
      )}
    </section>
    </div>
  );
}
