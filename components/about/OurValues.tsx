import { useTranslations } from "next-intl";
import Image from "next/image";

type Value = {
  image: string;
  title: string;
  text: string;
};

const values: Value[] = [
  {
    image: "/Path 285.svg",
    title:"integrity",
    text: "we-uphold",
  },
  {
    image: "/Path 285.svg",
    title:"excellence",
    text: "we-pursue",
  },
  {
    image: "/Path 285.svg",
    title:"client-centricity",
    text: "we-place",
  },
  {
    image: "/Path 285.svg",
    title:"innovation",
    text: "we-leverage",
  },
  {
    image: "/Path 285.svg",
    title:"reliability",
    text: "we-provide",
  },
  {
    image: "/Path 285.svg",
    title:"sustainability",
    text: "we-promote",
  },
  {
    image: "/Path 285.svg",
    title:"collaboration",
    text: "we-foster",
  },
  {
    image: "/Path 285.svg",
    title: "efficiency",
    text: "we-optimize",
  },
];

export default function OurValues() {
  const t = useTranslations();

  return (
    <section className="flex flex-col justify-center my-12">
      <h1 className="font-bold text-4xl text-center mb-8">{t("our-values")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center max-w-6xl mx-auto px-4">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col bordder shadow-[#00000029] shadow-xl w-full h-80 justify-center items-center text-center p-6"
          >
            {/* الصورة - ارتفاع ثابت */}
            <div className="rounded-full bg-[#E7F2F1] p-5 flex items-center justify-center mb-2 h-24 w-24">
              <Image
                src={value.image}
                alt="value icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            
            {/* العنوان - محاذاة ثابتة */}
            <h1 className="font-bold text-xl  min-h-[60px] flex items-center justify-center w-full">
              {t(value.title)}
            </h1>
            
            {/* النص - محاذاة ثابتة */}
            <p className="font-medium text-base leading-relaxed min-h-[120px] flex items-start justify-center w-full">
              {t(value.text)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}