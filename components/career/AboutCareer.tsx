import { useTranslations } from "next-intl";
import Image from "next/image";
export default function AboutCareer({ content }: { content: any }) {
  const t = useTranslations();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto my-14">
      <div className="flex flex-col col-span-1 justify-center items-center md:items-star text-center md:text-start">
        <div className="space-y-2">
          <p className="font-semibold text-sm text-[rgb(0,166,153)]">
            {content?.career_page_tile2 || t("always")}
          </p>
          <h1 className="font-bold text-3xl md:max-w-xs">
            {content?.career_page_subtitle || t("together")}
          </h1>
          <p className="font-normal text-sm md:text-base py-4">
            {content?.career_page_desc || t("at-newton")}
          </p>
          <span className="font-normal text-sm md:text-base  block"></span>
        </div>
      </div>

      <div className="relative col-span-1 flex justify-center items-center">
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={content?.career_page_image}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
