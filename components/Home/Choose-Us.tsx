import Image from "next/image";
import { useTranslations } from "next-intl";
import { Home } from "@/schemas/shared";
const featuresData = [
  { title: "what", text: "your" },
  { title: "when", text: "you" },
  { title: "wher", text: "the" },
];

const Choose = ({ content }: { content: Home }) => {
  const t = useTranslations();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 relative w-full h-[32rem] sm:h-[35rem]">
        <Image
          src={content.why_us_image}
          alt="Rectangle 137"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div
        className="col-span-1 relative w-full h-[32rem] sm:h-[35rem] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('${content.why_us_background}')` }}
      >
        <div className="absolute inset-0 bg-[#09192A] opacity-90"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
          {content.why_us_subtitle && (
            <p className="text-sm font-normal uppercase tracking-wide">
              {content.why_us_subtitle || t("lifelong")}
            </p>
          )}

          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {content.why_us_title || t("why")}
          </h2>

          {/* تكرار العناصر مع تغيير التايتل والنص فقط */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            {content.why_us_items?.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Image
                  src="/images/Path 282.png"
                  alt=""
                  width={10}
                  height={10}
                  quality={100}
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-bold text-lg">{t(feature.title)}</h3>
                  <p className="text-sm font-normal max-w-52 mx-auto">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
