"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useGetData } from "@/hooks/useFetch";
import PageHead from "@/components/common/PageHead";

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
  const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();

  const [active, setActive] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(14);

  const { data } = useGetData<any>({
    endpoint: "/gallery",
    queryKey: ["Gallery"],
  });

  const { data: contentData } = useGetData<any>({
    endpoint: "/pages/gallery",
    queryKey: ["GalleryPage"],
  });

  const gallery = data?.status === "success" ? data?.result?.gallery_items : [];

  const categories =
    data?.status === "success" ? data?.result?.gallery_types : [];

  const content =
    contentData?.status === "success" ? contentData?.result : null;

  const filtered = useMemo(() => {
    if (active !== null) {
      return gallery.filter((item: any) => item.type_id === active);
    } else {
      return gallery;
    }
  }, [active, gallery]);

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
      <PageHead
        image={content?.gallery_page_banner}
        title={content?.gallery_page_title}
      />

      <section className="container max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => {
              setActive(null);
              setVisibleCount(14);
              setSelectedIndex(null);
            }}
            className={`px-5 py-3 w-64 font-semibold ${
              !active ? "bg-[#0066CC] text-white" : "bg-none text-black"
            }`}
          >
            {t("all")}
          </button>

          {categories.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => {
                setActive(cat.id);
                setVisibleCount(14);
                setSelectedIndex(null);
              }}
              className={`px-5 py-3 w-64 font-semibold ${
                active === cat.id
                  ? "bg-[#0066CC] text-white"
                  : "bg-none text-black"
              }`}
            >
              {t(cat.name)}
            </button>
          ))}
        </div>

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
