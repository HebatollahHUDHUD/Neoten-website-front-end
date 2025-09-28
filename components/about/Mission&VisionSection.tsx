import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MissionVisionSection() {
  const items = [
    {
      src: "/images/afcd3b0e805ea26140ce7ac71a1c4399.png",
      title: "our-vision",
      description:"vt"
        },
    {
      src: "/images/67309bc8d71546ddf726605d3cd74e79.png",
      title: "our-mission",
      description:"mt"
        },
  ];
  const t = useTranslations();
  return (
    <section className="max-w-5xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden shadow-lg rounded-lg"
        >
          {/* الصورة */}
          <div className="w-full aspect-[4/3] relative">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* العنوان + النص */}
            <div className="absolute bottom-0 left-0 w-full text-white text-center transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            <div className="flex flex-col justify-end items-center">
            <h3 className="font-bold text-3xl">{t(item.title)}</h3>
            <p className="font-semibold text-lg max-w-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t(item.description)}
            </p>
            </div>
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}
