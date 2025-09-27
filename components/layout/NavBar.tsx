"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const isHome = pathname === `/${locale}` || pathname === "/";
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useTranslations();

  return (
    <div
      className={`absolute top-0 left-0 right-0 z-50 w-full h-[45px] ${
        isHome ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row justify-end">
          {/* Search Icon */}
          <div
            className="border-x border-x-white p-3 place-items-center cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <Image
              src="/Search.svg"
              alt="Search"
              width={20}
              height={10}
              quality={100}
            />
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-4 border-x border-x-white py-3 px-5 place-items-center">
            <Link
              href="https://www.facebook.com/Newton.Logistics/"
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
            </Link>
            <Link
              href="https://www.instagram.com/newton.logistics/"
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
            </Link>
            <Link
              href="https://jo.linkedin.com/company/newton-logistics-l-t-d"
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
            </Link>
          </div>

          {/* Phone */}
          <Link
            href="tel: +962 7 9878 5992  "
            className="flex flex-row gap-3 border-x border-x-white py-3 px-5 place-items-center"
          >
            <Image
              src="/call.svg"
              alt="call"
              width={20}
              height={20}
              quality={100}
              className="object-contain"
            />
            <p className="font-normal text-sm text-white"> +962 7 9878 5992  </p>
          </Link>

          {/* Email */}
          <Link
            href="mailto:info@newtonlogistics.com"
            className="flex flex-row gap-3 border-x border-x-white py-3 px-5 place-items-center"
          >
            <Image
              src="/mail.svg"
              alt="mail"
              width={20}
              height={20}
              quality={100}
              className="object-contain"
            />
            <p className="font-normal text-sm text-white">info@newtonlogistics.com</p>
          </Link>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transform transition-transform duration-500 ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center items-start h-full pt-80">
          <input
            type="text"
            placeholder={t("search")}
            className="w-11/12 md:w-1/3 p-4 bg-white text-black focus:outline-none"
          />
        </div>

        <button
          className="absolute top-5 right-5 text-white text-xl font-bold cursor-pointer"
          onClick={() => setSearchOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default NavBar;
