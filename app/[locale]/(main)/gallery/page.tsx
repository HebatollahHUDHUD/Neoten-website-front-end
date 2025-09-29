"use client";
import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/common/pageHeader";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useGetData } from "@/hooks/useFetch";

// التوزيعة المحفوظة
const layout = [
  "col-span-3",
  "col-span-1", // row 1
  "col-span-1",
  "col-span-1",
  "col-span-2", // row 2
  "col-span-2",
  "col-span-1",
  "col-span-1", // row 3
  "col-span-1",
  "col-span-1",
  "col-span-2", // row 4
  "col-span-2",
  "col-span-1",
  "col-span-1", // row 5
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(14);
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();

  const { data } = useGetData<any>({
    endpoint: "/gallery",
    queryKey: ["Gallery"],
  });

  const gallery = data?.status === "success" ? data?.result?.gallery_items : [];
  const categories =
    data?.status === "success" ? data?.result?.gallery_types : [];

  const filtered = gallery;

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filtered.length - 1));
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! < filtered.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <div>
      <PageHeader page="gallery" />

      <section className="container max-w-6xl mx-auto px-4 py-10">
        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setVisibleCount(14);
                setSelectedIndex(null);
              }}
              className={`px-5 py-3 w-64 font-semibold ${
                active === cat
                  ? "bg-[#0066CC] text-white"
                  : "bg-none text-black"
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </div> */}

        {/* Grid */}
        <div className="grid grid-cols-4 gap-4">
          {filtered?.map((item: any, index: number) => {
            const span = layout[index % layout.length];

            return (
              <div
                key={index}
                className={`relative h-96 overflow-hidden cursor-pointer ${span}`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={item.file}
                  alt={item.title}
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
            <button
              onClick={locale === "ar" ? handleNext : handlePrev}
              className="absolute left-6 text-white text-4xl cursor-pointer"
            >
              {locale === "ar" ? "❯" : "❮"}
            </button>

            {/* الصورة */}
            <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center">
              <Image
                src={filtered[selectedIndex].file}
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
              onClick={locale === "ar" ? handlePrev : handleNext}
              className="absolute right-6 text-white text-4xl cursor-pointer"
            >
              {locale === "ar" ? "❮" : "❯"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
