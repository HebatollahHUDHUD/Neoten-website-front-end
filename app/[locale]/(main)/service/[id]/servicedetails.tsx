"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Service, Services } from "@/schemas/shared";
import { useGetData } from "@/hooks/useFetch";
import ContactForm from "@/components/contact/ContactForm";

export default function ServiceDetails({
  service,
}: {
  service: Service["service"];
}) {
  const t = useTranslations();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // بعد 3 ثواني يختفي المسج
    setTimeout(() => setSubmitted(false), 3000);
  };

  const { data } = useGetData<Services>({
    endpoint: "/services",
    queryKey: ["ServicesPage", "/services"],
  });

  const services = data?.status === "success" ? data?.result?.services : null;

  return (
    <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-14">
      {/* Sidebar */}
      <div className="w-full md:w-1/3">
        <div className="flex flex-col gap-2">
          {services?.map((s) => (
            <Link
              key={s.id}
              href={`/service/${s.id}`}
              className={`flex ${
                s.id === service.id
                  ? "bg-[#0066CC] text-white"
                  : "bg-[#E7F2F1] text-black"
              }`}
            >
              <div className="w-20 h-[60px] m-1 flex items-center justify-center bg-[#0066CC] text-white">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              <span
                className={`flex items-center justify-start px-5 w-64 h-16 font-semibold text-xl transition ${
                  s.id === service.id ? "text-white" : "text-black"
                }`}
              >
                {t(s.title)}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-2 md:px-0">
        <h2 className="text-3xl font-bold mb-4">{t("overview")}</h2>
        <p className="font-normal text-xl leading-7">{t("aa")}</p>
        <div className="space-y-6 py-2">
          <p className="font-normal text-xl leading-7">{service.content}</p>
        </div>

        <p className="font-normal text-xl leading-7">{t("ee")}</p>

        <ContactForm inService />
      </div>
    </div>
  );
}
