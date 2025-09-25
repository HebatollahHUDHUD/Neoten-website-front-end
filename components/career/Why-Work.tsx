"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";



const infoItems = [
  {
    icon: "/images/Rectangle 21501.png",
    title: "global",
    text: "work-with",
  },
  {
    icon: "/images/Rectangle 21500.png",
    title: "career-growth",
    text: "training",
  },
  {
    icon: "/images/Rectangle 21499.png",
    title: "innovative-culture",
    text: "be-part",
  },
    {
    icon: "/images/Rectangle 21499.png",
    title: "team-spirit",
    text: "a-supportive",
  },
];

const WhyWork = () => {
  const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();

  return (
    <section className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Rectangle 21482.png')" }}
      >
      <div className="absolute inset-0 bg-[#09192A]/70"></div>

      {/* المحتوى */}
      <div className="flex flex-col items-center justify-center relative z-10 px-4 py-12 ">
        <h1 className="font-bold text-white text-center text-2xl md:text-3xl mb-10">
          {t("why-work")}
        </h1>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto">
          {infoItems.map((item, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.icon}
                alt=""
                width={100}
                height={100}
                className="h-14 w-auto object-contain"
              />
              <h2 className="font-bold text-lg md:text-xl text-white mt-4">
                {t(item.title)}
              </h2>
              <p className="font-normal text-xs text-white mt-2 max-w-52">
                {t(item.text)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyWork;
