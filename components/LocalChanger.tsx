"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useTransition , useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import cookies from "js-cookie";
import { COOKIE_NAME } from "@/constant";

const LocaleChanger = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
    const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [scrolled, setScrolled] = useState(false);
    // check if home page
    const isHome = pathname === `/${locale}` || pathname === "/";
  // next target
  const nextLang = locale === "ar" ? "en" : "ar";
  const nextLabel = nextLang === "en" ? "En" : "Ar";

  const handleChange = () => {
    startTransition(() => {
      const qs = searchParams.toString();
      router.push(pathname + (qs ? `?${qs}` : ""), { locale: nextLang });
      cookies.set(COOKIE_NAME, nextLang);

      router.refresh();
    });
  };

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
    <button
      type="button"
      onClick={handleChange}
      disabled={isPending}
      className={`inline-flex items-center gap-1 text-smdisabled:opacity-50 cursor-pointer ${isHome ? scrolled ? "text-black": "text-white" : "text-black"}`}
    >
      {isHome ? 
      scrolled ?
        <Image
        src="/globe.svg"
        alt="World"
        width={20}
        height={20}
        className="rounded-sm"
      />
      :
      <Image
        src="/world-2-svgrepo-com.svg"
        alt="World"
        width={20}
        height={20}
        className="rounded-sm"
      />
      :
      <Image
        src="/globe.svg"
        alt="World"
        width={20}
        height={20}
        className="rounded-sm"
      />
      }
      
      <span>{nextLabel}</span>
      <FaCaretDown size={14} className={`opacity-70 ${isHome ? scrolled ? "text-black" : "text-white" : "text-black"}`}/>
    </button>

  );
};

export default LocaleChanger;

//  <button
//    type="button"
//    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
//  >
//    <Image
//      src="/lang1.svg"
//      alt="English"
//      width={20}
//      height={20}
//      className="rounded-sm"
//    />
//    <FiChevronDown size={14} className="opacity-70" />
//  </button>;
