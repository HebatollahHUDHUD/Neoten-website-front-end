"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
const LogisticsIntroduction = () => {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto my-8">
      
      <div className="flex flex-col col-span-1 justify-between text-center md:text-start">
        <div>
          <h1 className="font-bold text-3xl max-w-sm">Logistics, Make The World Go Places</h1>
          <p className="font-semibold text-sm py-4">
            {t("t1")}
          </p>
          <p className="font-normal text-xs max-w-sm">
            {t("t2")}
          </p>
          <span className="font-normal text-xs pt-4 block max-w-sm">
            {t("t3")}
          </span>
        </div>

        {/* <div className="flex flex-row justify-between gap-5 py-5">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src="/images/Rectangle 145.png"
              alt="call"
              width={40}
              height={20}
              quality={100}
              className="object-contain"
            />
            <h1 className="font-bold text-lg text-start">Secure Packaging</h1>
            <p className="font-normal text-sm">Lorem ipsum dolor sit elit consectur sed tempor..</p>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src="/images/Rectangle 146.png"
              alt="call"
              width={40}
              height={20}
              quality={100}
              className="object-contain"
            />
            <h1 className="font-bold text-lg text-start">Delivery Unlimited</h1>
            <p className="font-normal text-sm">Lorem ipsum dolor sit elit consectur sed tempor..</p>
          </div>
        </div> */}
      </div>

      <div className="relative col-span-1 flex justify-center items-center">

        <div className="w-full aspect-[3/3] relative">
          <Image
            src="/images/Rectangle 144.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

 <div className={`absolute -bottom-10 md:-bottom-16 
    ${locale === "ar" ? "left-8 lg:-left-20 xl:-left-40" : "right-8 lg:-right-20 xl:-right-40"}
  `}>
          <Image
            src="/images/Rectangle 147.png"
            alt="white box"
            width={350}
            height={200}
            className="object-contain"
            priority
          />

          {/* اللوجو داخل البوكس */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/Group 4461.svg" 
              alt="logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

      </div>

    </section>
  );
};

export default LogisticsIntroduction;
