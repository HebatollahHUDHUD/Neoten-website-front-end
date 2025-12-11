import Image from "next/image";
import { About } from "@/schemas/shared";

export default function MissionVisionSection({ content }: { content: About }) {
  return (
    <section className="max-w-5xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative group overflow-hidden shadow-lg rounded-lg">
        {/* الصورة */}
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={content.about_page_our_mission_image}
            alt={content.about_page_our_mission_title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* العنوان + النص */}
          <div className="absolute bottom-0 left-0 w-full text-white text-center transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            <div className="flex flex-col justify-end items-center">
              <h3 className="font-bold text-3xl cursor-pointer">
                {content.about_page_our_mission_title}
              </h3>
              <p className="font-semibold text-lg max-w-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {content.about_page_our_mission_desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group overflow-hidden shadow-lg rounded-lg">
        {/* الصورة */}
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={content.about_page_our_vision_image}
            alt={content.about_page_our_vision_title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* العنوان + النص */}
          <div className="absolute bottom-0 left-0 w-full text-white text-center transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2">
            <div className="flex flex-col justify-end items-center">
              <h3 className="font-bold text-3xl cursor-pointer">
                {content.about_page_our_vision_title}
              </h3>
              <p className="font-semibold text-lg max-w-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {content.about_page_our_vision_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
