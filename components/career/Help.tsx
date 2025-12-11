import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Help({ content }: { content: any }) {
  const t = useTranslations();
  return (
    <section className="bg-[#00A699] h-36 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start max-w-6xl mx-auto w-full px-4">
        <div className="flex flex-col text-white">
          <h1 className="font-bold text-lg uppercase">
            {content?.need_help_title || t("need")}
          </h1>
          <p className="font-normal text-base md:text-lg">
            {content?.need_help_subtitle || t("assistance")}
          </p>
        </div>
        <Link href="/contact">
          <button className="mt-3 md:mt-0 bg-[#0066CC] text-white  font-semibold px-4 py-2 rounded hover:bg-[#328de8] transition cursor-pointer">
            {t("contact-us")}
          </button>
        </Link>
      </div>
    </section>
  );
}
