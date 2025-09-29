import { About } from "@/schemas/shared";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurValues({ content }: { content: About }) {
  const t = useTranslations();

  return (
    <section className="flex flex-col justify-center my-12">
      <h1 className="font-bold text-4xl text-center mb-8">
        {content.about_page_our_values_title || t("our-values")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center max-w-6xl mx-auto px-4">
        {content.about_page_our_values_items.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col bordder shadow-[#00000029] shadow-xl w-full h-80 justify-center items-center text-center p-6"
          >
            {/* الصورة - ارتفاع ثابت */}
            <div className="rounded-full bg-[#E7F2F1] p-5 flex items-center justify-center mb-2 h-24 w-24">
              <Image
                src="/Path 285.svg"
                alt="value icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* العنوان - محاذاة ثابتة */}
            <h1 className="font-bold text-xl  min-h-[60px] flex items-center justify-center w-full">
              {value.title}
            </h1>

            {/* النص - محاذاة ثابتة */}
            <p className="font-medium text-base leading-relaxed min-h-[120px] flex items-start justify-center w-full">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
