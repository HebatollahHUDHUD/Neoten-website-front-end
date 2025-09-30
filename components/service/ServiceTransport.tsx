import { Services, ServicesPage } from "@/schemas/shared";

import Link from "next/link";
import Image from "../image";

export default function ServiceTransport({
  services,
  content,
}: {
  services: Services["services"];
  content: ServicesPage;
}) {
  return (
    <section className="max-w-5xl mx-auto py-10 px-3 md:px-0">
      <p className="text-sm font-semibold text-[#00A699] text-center">
        {content.services_page_subtitle}
      </p>
      <h1 className="text-4xl font-bold text-center max-w-lg mx-auto">
        {content.services_page_desc}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-10 justify-center">
        {services.map((service, idx) => (
          <div key={idx}>
            <Link href={`/service/${service.id}`}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={service.banner}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 flex flex-col items-center justify-end h-full pb-6 text-white">
                  <Image
                    src={service.image}
                    alt={`${service.title} icon`}
                    width={40}
                    height={40}
                  />

                  <span className="mt-2 font-semibold">{service.title}</span>
                </div>

                <div className="flex justify-center">
                  <div className="relative w-20 h-1">
                    <Image
                      src="/Rectangle 111.svg"
                      alt=""
                      fill
                      quality={100}
                      priority
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* <p className="mt-3 text-lg font-normal text-center">
              {t(getFirstWords(service.text, 19))}...
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
