"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LocaleChanger from "../LocalChanger";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  // check if home page
  const isHome = pathname === `/${locale}` || pathname === "/";

  const nav = [
    { label: t("home"), href: "/" },
    { label: t("services"), href: "/service" },
    { label: t("career"), href: "/career" },
    { label: t("faqs"), href: "/faqs" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll === 0) {
      // أعلى الصفحة
      setShow(true);
      setScrolled(false);
    } else if (currentScroll > lastScroll) {
      // نزول = يخفي
      setShow(false);
    } else {
      // طلوع = يظهر
      setShow(true);
      setScrolled(true);
    }

    setLastScroll(currentScroll);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScroll]);


  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-transform duration-300 w-full shadow py-5 border-y border-white md:
        ${show ? "translate-y-0 " : "-translate-y-full"}
    ${
      isHome
        ? scrolled
          ? "bg-white text-black top-0"
          : "bg-transparent text-white top-[45px]"
        :
        scrolled ?
        "bg-white text-black top-0"
        :
        "bg-white text-black top-[45px]"
    }
        `}
    
    >
      <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all px-2 md:px-0 ${isHome ? scrolled ? "h-10" :"h-16" : "h-10"}`}>
        {/* Logo */}
        {isHome ? 
        scrolled
        ?
        <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Group 13.svg"
              alt=" Newton"
              width={120}
              height={100}
              quality={100}
              className="object-contain"
            />
        </Link>        
        :
        <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt=" Newton"
              width={150}
              height={100}
              quality={100}
              priority
              className="object-cover"
            />
        </Link>
        :
        <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Group 13.svg"
              alt=" Newton"
              width={120}
              height={100}
              quality={100}
              className="object-contain"
            />
        </Link>
        }

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-16 font-normal">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-normal text-lg hover:border-b-2  hover:uppercase transition duration-300 ease-in-out inline-flex items-center ${isHome ? "hover:border-b-white" : "hover:border-b-black"}`}
            >
              {item.label}
            </Link>
          ))}

          <LocaleChanger />
        </nav>

        {/* Mobile menu button */}
        <button
          className={`xl:hidden p-3 rounded-md cursor-pointer ${isHome ? scrolled ? "text-black": "text-white":"text-black"}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-50   ${
          open ? "visible" : "invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute inset-0 bg-black/40  transition-opacity ${
            open ? "opacity-100 " : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-black/70  shadow-xl p-5 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <Image
              src="/images/Logo.png"
              alt=" Newton"
              width={120}
              height={100}
              quality={100}
              className="object-contain"
            />
            <button
              className="p-2 rounded-md text-white cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-4 ">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-normal text-lg text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Language */}
            <LocaleChanger />
          </div>
        </div>
      </div>
    </header>
  );
}
