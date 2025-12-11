import { Home } from "@/schemas/shared";
import Image from "../image";

const InfoSection = ({ content }: { content: Home }) => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-"
      style={{
        backgroundImage: `url('${content.stats_background}')`,
      }}
    >
      <div className="absolute inset-0 bg-[#C0DAF5]/80"></div>

      <div className="relative">
        <div className="bg-[#99CBFC]/80 py-2"></div>
        <div className="py-10">
          <div>
            {/*className={`marquee ${isRTL ? "rtl" : ""}`} */}
            <ul className=" flex items-center w-full justify-center gap-16 px-4 md:px-0">
              {content?.stats_items?.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col items-center gap-2 justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={28}
                      className="h-14 object-contain"
                    />

                    <div>
                      <p className="font-medium text-center text-lg text-[#1D428A] max-w-xs">
                        {item.title}
                      </p>

                      {item.subtitle && (
                        <p className="font-medium text-center text-[#1D428A] opacity-80 mt-4 max-w-xs">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#99CBFC]/80 py-2"></div>
      </div>
    </section>
  );
};

export default InfoSection;
