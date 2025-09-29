"use client";
import { About } from "@/schemas/shared";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
const LogisticsIntroduction = ({ content }: { content: About }) => {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto my-8">
      <div className="flex flex-col col-span-1 md:max-w-sm justify-between text-center md:text-start">
        <div>
          <h1 className="font-bold text-3xl">
            {content.about_page_main_section_title || t("logistics,")}
          </h1>
          <p className="font-semibold text-sm py-4">
            {content.about_page_main_section_subtitle || t("t1")}
          </p>

          <p className="font-normal text-xs whitespace-pre-line">
            {content.about_page_main_section_desc || t("t2")}
          </p>
        </div>
      </div>

      <div className="relative col-span-1 flex justify-center items-center">
        <div className="w-full aspect-[3/3] relative">
          <Image
            src={content.about_page_main_section_image}
            alt={content.about_page_main_section_title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className={`absolute -bottom-10 md:-bottom-16 
    ${
      locale === "ar"
        ? "left-8 lg:-left-20 xl:-left-40"
        : "right-8 lg:-right-20 xl:-right-40"
    }
  `}
        >
          <Image
            src="/images/Rectangle 147.png"
            alt="white box"
            width={350}
            height={200}
            className="object-contain"
            priority
          />

          {/* اللوجو داخل البوكس */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/Group 4461.svg"
              alt="logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsIntroduction;
