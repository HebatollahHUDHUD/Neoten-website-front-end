"use client";

import Image from "next/image";

const staticPages: Record<
  string,
  { title: string; image: string }
> = {
  about: {
    title: "About Us",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  faqs: {
    title: "FAQs",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  services: {
    title: "Services",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  career: {
    title: "Career",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  contact: {
    title: "Contact US",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
  gallery: {
    title: "Gallery",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
    terms: {
    title: "TERMS OF USE",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },
    privacy: {
    title: "PRIVACY POLICY",
    image: "/images/5c6d76b502d389f5b8feb6209d326f06.png",
  },

  "1": { title: "Air Flight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
  "2": { title: "Truck Flight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
  "3": { title: "Ship Flight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
  "4": { title: "Train Freight", image: "/images/4cb1873701c26282d1e6cc79190313f2.png" },
};

const PageHeader = ({ page }: { page: keyof typeof staticPages }) => {
  const current = staticPages[page];

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
          <h1 className="text-3xl md:text-6xl text-white font-bold pt-20 md:pt-5 uppercase">{current.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
