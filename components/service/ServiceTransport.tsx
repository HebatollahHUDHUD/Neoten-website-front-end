"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Service = {
  id : number;
  title: string;
  icon: string;
  image: string;
  text: string;
};

const services: Service[] = [
  { id: 1, title: "air", icon: "/images/Rectangle 84.png", image: "/images/Rectangle 82.png" ,
    text : "fast"},
  {  id: 2,title: "ocean", icon: "/images/Rectangle 89.png", image: "/images/Rectangle 87.png" ,
    text : "cost"},
  {  id: 3,title: "land", icon: "/images/Rectangle 94.png", image: "/images/Rectangle 92.png" ,
    text : "flexible"},
  {  id: 4,title: "customs", icon: "/images/Rectangle 99.png", image: "/images/Rectangle 97.png" ,
    text : "efficient"},
  {  id: 5,title: "ware", icon: "/images/Rectangle 94.png", image: "/images/Rectangle 92.png" ,
    text : "secure"},
  {  id: 6,title: "doc", icon: "/images/Rectangle 99.png", image: "/images/Rectangle 97.png" ,
    text : "professional"},
]

function getFirstWords(text: string, count: number) {
  return text.split(" ").slice(0, count).join(" ");
}

export default function ServiceTransport() {
  const t = useTranslations();
  return (
    <section className="max-w-5xl mx-auto py-10 px-3 md:px-0">
        <p className="text-sm font-semibold text-[#00A699] text-center">
            {t("always")}
        </p>
        <h1 className="text-4xl font-bold text-center max-w-lg mx-auto">
            {t("logistics")}
        </h1>        
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-10 justify-center">
        {services.map((service, idx) => (
          <div key={idx}>
            <Link href={`/service/${service.id}`}>
            {/* الكارد */}
            <div className="relative aspect-[4/5]">
              {/* صورة الخلفية */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* المحتوى */}
              <div className="relative z-10 flex flex-col items-center justify-end h-full pb-6 text-white">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={40}
                  height={40}
                />
                
                <span className="mt-2 font-semibold">{t(service.title)}</span>
              </div>
              <div className="flex justify-center">
                <div className="relative w-20 h-1">
                  <Image
                    src="/Rectangle 111.svg"
                    alt=""
                    fill
                    quality={100}
                    priority
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            </Link>

            <p className="mt-3 text-lg font-normal text-center">
              {t(getFirstWords(service.text, 19))}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
