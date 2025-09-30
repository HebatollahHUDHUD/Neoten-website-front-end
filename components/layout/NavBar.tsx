"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useGetData } from "@/hooks/useFetch";
import { Info } from "@/schemas/shared";

const NavBar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const isHome = pathname === `/${locale}` || pathname === "/";
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useTranslations();

  const isRTL = locale === "ar";

  const { data } = useGetData<Info>({
    endpoint: "/info",
    queryKey: ["Info", "/info"],
  });

  const info = data?.status === "success" ? data?.result : null;

  return (
    <div
      className={`absolute top-0 left-0 right-0 z-50 w-full h-[45px] ${
        isHome ? "bg-transparent" : "bg-black"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-row ${
            isRTL
              ? "justify-center md:justify-start"
              : "justify-center md:justify-end"
          }`}
        >
          {/* Search Icon */}
          {/* <div
            className={`border-x border-x-white p-3 place-items-center cursor-pointer ${
              isRTL ? "order-last" : "order-first"
            }`}
            onClick={() => setSearchOpen(true)}
          >
            <Image
              src="/Search.svg"
              alt="Search"
              width={20}
              height={10}
              quality={100}
            />
          </div> */}

          {/* Social Icons */}
          <div
            className={`flex flex-row gap-4 border-x border-x-white py-3 px-5 place-items-center ${
              isRTL ? "order-3" : "order-2"
            }`}
          >
            {info?.social_media_facebook_url && (
              <a
                href={info?.social_media_facebook_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/face.svg"
                  alt="facebook"
                  width={11}
                  height={10}
                  quality={100}
                  className="cursor-pointer"
                />
              </a>
            )}

            {info?.social_media_instagram_url && (
              <a
                href={info?.social_media_instagram_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Path 56.svg"
                  alt="instagram"
                  width={20}
                  height={10}
                  quality={100}
                  className="cursor-pointer"
                />
              </a>
            )}

            {info?.social_media_linkedin_url && (
              <a
                href={info?.social_media_linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-linkedin.svg"
                  alt="linkedin"
                  width={22}
                  height={10}
                  quality={100}
                  className="cursor-pointer"
                />
              </a>
            )}
          </div>

          {/* Phone */}
          <a
            href={"tel:+" + info?.mobile}
            className={`flex flex-row gap-3 border-x border-x-white py-3 px-5 place-items-center ${
              isRTL ? "order-2" : "order-3"
            }`}
          >
            <Image
              src="/call.svg"
              alt="call"
              width={20}
              height={20}
              quality={100}
              className="object-contain"
            />
            <p
              className="font-normal text-sm text-white hidden md:block"
              dir="ltr"
            >
              {info?.mobile}
            </p>
          </a>

          {/* Email */}
          <a
            href={"mailto:" + info?.email}
            className={`flex flex-row gap-3 border-x border-x-white py-3 px-5 place-items-center ${
              isRTL ? "order-1" : "order-4"
            }`}
          >
            <Image
              src="/mail.svg"
              alt="mail"
              width={20}
              height={20}
              quality={100}
              className="object-contain"
            />
            <p
              className="font-normal text-sm text-white hidden md:block"
              dir="ltr"
            >
              {info?.email}
            </p>
          </a>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transform transition-transform duration-500 ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="flex justify-center items-start h-full pt-80">
          <input
            type="text"
            placeholder={t("search")}
            className="w-11/12 md:w-1/3 p-4 bg-white text-black focus:outline-none"
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>

        <button
          className={`absolute top-5 text-white text-xl font-bold cursor-pointer ${
            isRTL ? "left-5" : "right-5"
          }`}
          onClick={() => setSearchOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default NavBar;
