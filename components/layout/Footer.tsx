"use client";
import { useGetData } from "@/hooks/useFetch";
import { Info } from "@/schemas/shared";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const Footer = () => {
  const t = useTranslations();
  const { locale } = useParams<{ locale: string }>();

  const { data } = useGetData<Info>({
    endpoint: "/info",
    queryKey: ["Info", "/info"],
  });

  const info = data?.status === "success" ? data?.result : null;

  return (
    <footer className="bg-[#1B4065] text-white py-5">
      <div className="md:max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-14 lg:gap-52 py-5 order-2 md:order-1">
          {/* Phone */}
          <a
            href={"tel:+" + info?.mobile}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="bg-[#00A699] rounded-full w-16 h-16 flex justify-center items-center">
              <Image
                src="/call.svg"
                alt="call"
                width={20}
                height={20}
                quality={100}
                className="object-contain"
              />
            </div>
            <p className="font-normal text-sm hidden md:block " dir="ltr">
              {info?.mobile}
            </p>
          </a>

          {/* Email */}
          <a
            href={"mailto:" + info?.email}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="bg-[#00A699] rounded-full w-16 h-16 flex justify-center items-center">
              <Image
                src="/mail.svg"
                alt="mail"
                width={28}
                height={20}
                quality={100}
                className="object-contain"
              />
            </div>
            <p className="font-normal text-sm hidden md:block" dir="ltr">
              {info?.email}
            </p>
          </a>

          {/* Location */}
          <a
            href={info?.address_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="bg-[#00A699] rounded-full w-16 h-16 flex justify-center items-center">
              <Image
                src="/location.svg"
                alt="location"
                width={20}
                height={20}
                quality={100}
                className="object-contain"
              />
            </div>
            <p className="font-normal text-sm hidden md:block">
              {info?.address}
            </p>
          </a>
        </div>
        <div className="border-y-2 border-[#ADD5FF99] py-7 w-full order-1 md:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 max-w-5xl mx-auto gap-6 lg:gap-10">
            <div className="flex flex-col justify-start items-center md:items-start gap-5 col-span-1 sm:col-span-2 md:col-span-2">
              <Image
                src="/LogoFooter.svg"
                alt="Logo"
                width={30}
                height={10}
                quality={100}
                className="object-cover w-28"
              />
              <p className="font-normal text-sm max-w-[350px]  text-center md:text-start">
                {info?.footer_content}
              </p>
              <div className="flex flex-row justify-start gap-5">
                {info?.social_media_facebook_url && (
                  <a
                    href={info?.social_media_facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#193d60] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                  >
                    <Image
                      src="/face.svg"
                      alt={"facebook"}
                      width={20}
                      height={20}
                      quality={100}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                )}

                {info?.social_media_instagram_url && (
                  <a
                    href={info?.social_media_instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#193d60] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                  >
                    <Image
                      src="/in.svg"
                      alt={"instagram"}
                      width={20}
                      height={20}
                      quality={100}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                )}

                {info?.social_media_linkedin_url && (
                  <a
                    href={info?.social_media_linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#193d60] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                  >
                    <Image
                      src="/icons8-linkedin.svg"
                      alt={"linkedin"}
                      width={20}
                      height={20}
                      quality={100}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                )}
              </div>
            </div>

            {/* Site Map */}
            <div className="flex flex-col justify-start items-center md:items-start gap-5 col-span-1">
              <p className="font-medium text-lg text-[#00A699]">
                {t("site-map")}
              </p>
              <ul className="flex flex-col gap-2">
                {["service", "gallery", "faqs", "career"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item}`}
                      className={`font-normal text-sm hover:border-[#ADD5FF99] transition-all ${
                        locale === "ar"
                          ? "border-r-0 hover:border-r-2 pr-0 hover:pr-3"
                          : "border-l-0 hover:border-l-2 pl-0 hover:pl-3"
                      }`}
                    >
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col justify-start items-center md:items-start gap-5 col-span-1">
              <p className="font-medium text-lg text-[#00A699]">
                {t("company")}
              </p>
              <ul className="flex flex-col gap-2">
                {["about", "terms", "privacy"].map((item) => {
                  return (
                    <li key={item}>
                      <Link
                        href={`/${item}`}
                        className={`font-normal text-sm hover:border-[#ADD5FF99] transition-all ${
                          locale === "ar"
                            ? "border-r-0 hover:border-r-2 pr-0 hover:pr-3"
                            : "border-l-0 hover:border-l-2 pl-0 hover:pl-3"
                        }`}
                      >
                        {t(item)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col justify-start items-center md:items-start gap-5 col-span-1 sm:col-span-2 md:col-span-1">
              <p className="font-medium text-lg text-[#00A699]">
                {t("newsletter")}
              </p>
              <div className="relative w-full xl:w-72">
                <input
                  type="email"
                  placeholder={t("enter-email-address")}
                  className={`border-0 bg-white text-[#666666] w-full h-9 p-3 ${
                    locale === "ar"
                      ? "pl-3 pr-5 text-right"
                      : "pl-5 pr-3 text-left"
                  } rounded-md`}
                />
                <button
                  className={`absolute top-0 h-full bg-[#00A699] px-4 font-semibold text-xs cursor-pointer ${
                    locale === "ar"
                      ? "left-0 rounded-e-md"
                      : "right-0 rounded-e-md"
                  }`}
                >
                  {t("submit")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="order-3">
          <p className="pt-5 font-normal text-sm text-center px-4 md:px-0">
            © 2025 Newton. All Rights Reserved. Powered by HUDHUD IT
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
