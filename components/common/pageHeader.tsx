"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
const staticPages: Record<
  string,
  { title: string; image: string }
> = {
  about: {
    title: "about-us",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  faqs: {
    title: "faqs",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  services: {
    title: "services",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  career: {
    title: "career",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  contact: {
    title: "contact-us",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  gallery: {
    title: "gallery",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
    terms: {
    title: "terms",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
    privacy: {
    title: "privacy",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },

  "1": { title: "air-flight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
  "2": { title: "truck-flight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
  "3": { title: "ship-flight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
  "4": { title: "train-freight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
};

const PageHeader = ({ page }: { page: keyof typeof staticPages }) => {
  const current = staticPages[page];
  const t = useTranslations();
  return (
    <section>
      <div className="relative w-full aspect-[5/3] md:aspect-[9/4] lg:aspect-[10/3] overflow-hidden z-[1]">
        {/* Background Image */}
        <Image
          src={current.image}
          alt={current.title}
          width={1600}
          height={800}
          quality={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
        />

        {/* Overlay */}
        <div className="z-[-1] p-4 w-full h-full flex bg-black/50 flex-col gap-2 items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-6xl text-white font-bold pt-20 md:pt-5 uppercase">{t(current.title)}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
