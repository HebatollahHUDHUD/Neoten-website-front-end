import Image from "next/image";
import { useTranslations } from "next-intl";
import { useGetData } from "@/hooks/useFetch";
import { Info } from "@/schemas/shared";
const Contact = ({ contact }: { contact: any }) => {
  const t = useTranslations();
  const { data } = useGetData<Info>({
    endpoint: "/info",
    queryKey: ["Info", "/info"],
  });

  const info = data?.status === "success" ? data?.result : null;

  if (!info) return null;

  return (
    <section className="my-14">
      <p className="font-semibold text-[#00A699] text-sm text-center uppercase">
        {contact?.contact_page_subtitle}
      </p>

      <h1 className="font-bold text-3xl text-center uppercase pt-2">
        {contact?.contact_page_desc}
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-14 lg:gap-10 pt-7 pb-14 order-2 md:order-1">
        <a
          href={`tel:+${info.mobile}`}
          className="flex flex-col gap-2 place-items-center"
        >
          <div className="flex flex-col gap-2 items-center justify-center border-white shadow-[#00000029] shadow-lg bg-white w-[280px] h-60">
            <div className="bg-[#E7F2F1] rounded-full w-20 h-20 place-items-center place-content-center">
              <Image
                src="/Path 291.svg"
                alt="call"
                width={28}
                height={20}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center pt-5">
              <p className="font-medium text-lg">{t("phone-number")}</p>
              <p className="font-normal text-sm" dir="ltr">
                {info.mobile}
              </p>
            </div>
          </div>
        </a>

        <a
          href={"mailto:" + info.email}
          className="flex flex-col gap-2 place-items-center"
        >
          <div className="flex flex-col gap-2 items-center justify-center border-white shadow-[#00000029] shadow-lg bg-white w-[280px] h-60">
            <div className="bg-[#E7F2F1] rounded-full w-20 h-20 place-items-center place-content-center">
              <Image
                src="/Path 292.svg"
                alt="call"
                width={28}
                height={20}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center pt-5">
              <p className="font-medium text-lg">{t("email-address")}</p>
              <p className="font-normal text-sm" dir="ltr">
                {info.email}
              </p>
            </div>
          </div>
        </a>

        <a
          href={info?.address_url}
          className="flex flex-col gap-2 place-items-center"
          target="_blank"
        >
          <div className="flex flex-col gap-2 items-center justify-center border-white shadow-[#00000029] shadow-lg bg-white w-[280px] h-60">
            <div className="bg-[#E7F2F1] rounded-full w-20 h-20 place-items-center place-content-center">
              <Image
                src="/Path 290.svg"
                alt="call"
                width={28}
                height={20}
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center pt-5">
              <p className="font-medium text-lg">{t("location")}</p>
              <p className="font-normal text-sm">{info.address}</p>
            </div>
          </div>
        </a>
      </div>

      <div
        className="max-w-3xl mx-auto h-[450px] px-2 md:px-0 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
        dangerouslySetInnerHTML={{
          __html: info?.map_url,
        }}
      />
    </section>
  );
};
export default Contact;
