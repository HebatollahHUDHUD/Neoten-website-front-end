"use client";

import { Home } from "@/schemas/shared";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function TransportServices({ content }: { content: Home }) {
  const t = useTranslations();
  return (
    <section className="w-full my-20">
      {/* Header */}
      <div className="bg-[#0066CC] max-w-5xl mx-auto text-white p-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold max-w-2xl">
          {content?.home_page_services_title || t("we")}
        </h2>
        <p className="font-normal text-xs md:text-sm max-w-lg mt-3 md:mt-0 md:ps-10">
          {content?.home_page_services_subtitle || t("at")}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {content?.services?.map((service, idx) => (
          <div key={idx} className="relative aspect-[4/5]">
            <Link href={`/service/${service.id}`}>
              {/* خلفية */}
              <Image
                src={service.banner}
                alt={service.title}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* المحتوى */}
              <div className="relative z-10 flex flex-col items-center justify-end h-full pb-6 text-white">
                <Image
                  src={service.image}
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
            </Link>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 bg-[#0066CC] text-white py-10 max-w-6xl mx-auto">
        {content?.stats_2_items?.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
            <p className="text-sm md:text-base font-normal">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
