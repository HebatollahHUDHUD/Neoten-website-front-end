"use client";

import Image from "next/image";

const PageHead = ({ image, title }: { image: string; title: string }) => {
  return (
    <section>
      <div className="relative w-full aspect-[5/3] md:aspect-[9/4] lg:aspect-[10/3] overflow-hidden z-[1]">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          width={1600}
          height={800}
          quality={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
        />

        {/* Overlay */}
        <div className="z-[-1] p-4 w-full h-full flex bg-black/50 flex-col gap-2 items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold pt-20 md:pt-14 uppercase">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHead;
