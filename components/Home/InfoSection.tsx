"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const infoItems = [
  {
    icon: "/images/Rectangle 121.png",
    text: "Sunday - Thursday: 08:00 - 16:00 Friday - Saturday: Closed.",
  },
  {
    icon: "/images/Rectangle 125.png",
    text: "Industrial Shipping: We offer integrated logistics.",
  },
  {
    icon: "/images/Rectangle 129.png",
    text: "International Transport: Express delivery of every goods.",
  },
   {
    icon: "/images/Rectangle 125.png",
    text: "Sunday - Thursday: 08:00 - 16:00 Friday - Saturday: Closed.",
  },
  {
    icon: "/images/Rectangle 129.png",
    text: "Industrial Shipping: We offer integrated logistics.",
  },
  {
    icon: "/images/Rectangle 121.png",
    text: "International Transport: Express delivery of every goods.",
  },
];

const InfoSection = () => {
  const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();
  const isRTL = locale === "ar";

  return (
    <section className="bg-[#C0DAF5]">
    <div className="bg-[#99CBFC] py-2"></div>
      <div className="container py-6">
        <div className={`marquee ${isRTL ? "rtl" : "ltr"}`}>
          <ul className="marquee__track flex gap-6">
            {infoItems.map((item, index) => (
              <li key={index} className="shrink-0">
                <div className="flex flex-col items-center gap-2 justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={100}
                    height={28}
                    className="h-14 object-contain"
                  />
                  <p className="font-medium text-center text-lg text-[#1D428A] mb-4 max-w-xs">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
