"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyWork = ({ content }: { content: any }) => {
  const t = useTranslations();

  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${
          content?.career_page_why_work_with_us_banner ||
          "/images/Rectangle 21482.png"
        } )`,
      }}
    >
      <div className="absolute inset-0 bg-[#09192A]/70"></div>

      {/* المحتوى */}
      <div className="flex flex-col items-center justify-center relative z-10 px-4 py-12 ">
        <h1 className="font-bold text-white text-center text-2xl md:text-3xl mb-10">
          {content?.career_page_why_work_with_us_title || t("why-work")}
        </h1>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto">
          {content?.career_page_why_work_with_us_items?.map(
            (item: any, index: number) => (
              <li
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="h-14 w-auto object-contain"
                />
                <h2 className="font-bold text-lg md:text-xl text-white mt-4">
                  {item.title}
                </h2>
                <p className="font-normal text-base md:text-lg text-white mt-2 max-w-52">
                  {item.desc}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default WhyWork;
