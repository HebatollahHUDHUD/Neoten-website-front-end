"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
type Service = {
  id: number;
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

export default function ServiceDetails() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();
  const id = Number(params?.id);
  const service = services.find((s) => s.id === id);
  const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
  
      // بعد 3 ثواني يختفي المسج
      setTimeout(() => setSubmitted(false), 3000);
    };
  

  if (!service) {
    return <p className="text-center py-10">Service not found 🚫</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-14">
      {/* Sidebar */}
      <div className="w-full md:w-1/3">
        <div className="flex flex-col gap-2">
          {services.map((s) => {
            const isActive = s.id === id;
            return (
              <Link
  key={s.id}
  href={`/service/${s.id}`}
  className={`flex ${
      isActive
        ? "bg-[#0066CC] text-white"
        : "bg-[#E7F2F1] text-black"
    }`}
>
  {/* الأيقونة */}
  <div className="w-20 h-[60px] m-1 flex items-center justify-center bg-[#0066CC] text-white">
    <Image
      src={s.icon}
      alt={s.title}
      width={24}
      height={24}
      className="object-contain"
    />
  </div>

  {/* النص */}
  <span
    className={`flex items-center justify-start px-5 w-64 h-16 font-semibold text-xl transition ${
      isActive
        ? "text-white"
        : "text-black"
    }`}
  >
    {t(s.title)}
  </span>
</Link>

            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-2 md:px-0">
        <h2 className="text-3xl font-bold mb-4">{t("overview")}</h2>
        <p className="font-normal text-xl leading-7">{t("aa")}</p>
        <div className="space-y-6 py-2">
  {service.text.split("\n").map((paragraph, idx) => (
    <p key={idx} className="font-normal text-xl leading-7">
      {t(paragraph)}
    </p>
  ))}
        </div>
        <p className="font-normal text-xl leading-7">{t("ee")}</p>
        
        <div className="relative w-full mt-6">
          <section className="mb-14 max-w-4xl mx-auto bg-[#E7EDF4] shadow-[#00000029] rounded-2xl py-8 px-10">
            <h1 className="font-bold text-3xl text-center uppercase max-w-xs mx-auto">{t("eager")}</h1>
            <p className="font-semibold text-[#666666] text-sm text-center max-w-lg mx-auto pt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-lg font-bold text-black">
            {t("full-name")}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder={t("full-name")}
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] shadow-sm  sm:text-sm p-3"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-bold text-black">
            {t("email-address")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("email-address")}
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] shadow-sm  sm:text-sm p-3"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-lg font-bold text-black">
            {t("subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder={t("subject")}
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] sm:text-sm p-3"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-bold text-black">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder= {t("message")}
            rows={4}
            required
            className="mt-1 block w-full rounded-md bg-white text-[#CBCBCB] sm:text-sm p-3"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
        <button
          type="submit"
          className="w-44 bg-[#0066CC] text-white py-2 px-4 rounded-md hover:bg-gray-800 transition cursor-pointer items-center"
        >
          {t("submit")}
        </button>
        </div>
      </form>

      {/* رسالة نجاح */}
      {submitted && (
        <p className="text-green-600 font-medium mt-4">
          ✅ Your message has been submitted successfully!
        </p>
      )}
        </section>
        </div>
      </div>
    </div>
  );
}
