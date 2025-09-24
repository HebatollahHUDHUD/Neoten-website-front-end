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
  { src: "/images/9db19e35043dcd307de90151bd70c3ab.png", category: "Train Flight" },
  { src: "/images/75dbceb6492570970b369858fb688187.png", category: "Air Flight" },
  { src: "/images/91a172a5c40e10fd802869d45646c02f.png", category: "Ship Flight" },
  { src: "/images/99b3066d3d364243ac0bfb4f7c565c5d.png", category: "Truck Flight" },
  { src: "/images/199c1b49af7bc78f0f47fbcf15d972e5.png", category: "Air Flight" },
  { src: "/images/7aadf5111b0142ee80c97695e4f3965c.png", category: "Truck Flight" },
  { src: "/images/75dbceb6492570970b369858fb688187.png", category: "Air Flight" },
  { src: "/images/91a172a5c40e10fd802869d45646c02f.png", category: "Ship Flight" },
  { src: "/images/99b3066d3d364243ac0bfb4f7c565c5d.png", category: "Truck Flight" },
  { src: "/images/199c1b49af7bc78f0f47fbcf15d972e5.png", category: "Air Flight" },
  { src: "/images/7aadf5111b0142ee80c97695e4f3965c.png", category: "Truck Flight" },
  { src: "/images/7aadf5111b0142ee80c97695e4f3965c.png", category: "Truck Flight" },
  { src: "/images/75dbceb6492570970b369858fb688187.png", category: "Air Flight" },
  { src: "/images/91a172a5c40e10fd802869d45646c02f.png", category: "Ship Flight" }, 
  { src: "/images/199c1b49af7bc78f0f47fbcf15d972e5.png", category: "Air Flight" },
];

// التوزيعة المحفوظة
const layout = [
  "col-span-3", "col-span-1",           // row 1
  "col-span-1", "col-span-1", "col-span-2", // row 2
  "col-span-2", "col-span-1", "col-span-1", // row 3
  "col-span-1", "col-span-1", "col-span-2", // row 4
  "col-span-2", "col-span-1", "col-span-1", // row 5
];

const categories = ["All", "Air Flight", "Truck Flight", "Ship Flight", "Train Flight"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(14);

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  const visibleItems = filtered.slice(0, visibleCount);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev! > 0 ? prev! - 1 : visibleItems.length - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev! < visibleItems.length - 1 ? prev! + 1 : 0
      );
    }
  };

  return (
    <div>
      <PageHeader page="gallery" />
      <section className="container max-w-6xl mx-auto px-4 py-10">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setVisibleCount(14);
                setSelectedIndex(null);
              }}
              className={`px-5 py-3 w-48 font-semibold ${
                active === cat ? "bg-[#0066CC] text-white" : "bg-none text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-4">
          {visibleItems.map((item, index) => {
            const span = layout[index % layout.length];
            return (
              <div
                key={index}
                className={`relative h-96 overflow-hidden cursor-pointer ${span}`}
                onClick={() => setSelectedIndex(index)}
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
            );
          })}
        </div>

      {visibleCount < filtered.length && visibleCount % 14 === 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 14)}
            className="text-5xl text-[#0066CC]  animate-bounce hover:scale-110 transition-transform "
          >
            ↓
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
          {/* أزرار التنقل */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-4xl cursor-pointer"
          >
            ❮
          </button>

          {/* الصورة */}
          <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
            <Image
              src={visibleItems[selectedIndex].src}
              alt="Selected"
              fill
              className="object-contain"
            />
          </div>

          {/* زر الإغلاق تحت الصورة */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="mt-6 px-4 py-2 bg-white text-[#0066CC] font-semibold rounded shadow cursor-pointer"
          >
            ✖ 
          </button>

          {/* زر التالي */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-4xl cursor-pointer"
          >
            ❯
          </button>
        </div>
      )}

      </section>
    </div>
  );
}
