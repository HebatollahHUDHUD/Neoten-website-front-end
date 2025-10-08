"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "next/navigation";

type Job = {
  id: number;
  title: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Logistics Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.",
  },
  {
    id: 2,
    title: "Plant Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.",
  },
  {
    id: 3,
    title: "Logistics Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.",
  },
  {
    id: 4,
    title: "Plant Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.",
  },
  {
    id: 5,
    title: "Plant Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.",
  },
];

function getFirstWords(text: string, count: number) {
  return text.split(" ").slice(0, count).join(" ");
}

const OpenPositions = () => {
  let swiperRef: any = null;
  const { locale } = useParams<{ locale: string }>();
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
          Always Ahead
        </p>
        <h2 className="text-3xl font-bold mb-10">Open Positions</h2>

        {/* السلايدر */}
        <Swiper
          onSwiper={(swiper) => (swiperRef = swiper)}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true} // 🔥 الانفينيتي
          breakpoints={{
            1280: { slidesPerView: 4, slidesPerGroup: 4 },
            400: { slidesPerView: 3, slidesPerGroup: 3 },
            240: { slidesPerView: 2, slidesPerGroup: 2 },
          }}
        >
          {jobs.map((job) => (
            <SwiperSlide key={job.id}>
              <div className="p-6 h-full flex flex-col items-start">
                <div className="bg-[#0066CC] text-white font-bold text-3xl w-16 h-16 flex items-center justify-center">
                  {job.id.toString().padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-bold text-lg">{job.title}</h3>
                <p className="font-normal text-sm md:text-base mt-2 mb-4 text-start">
                  {getFirstWords(job.description, 19)}...
                </p>
                <Link
                  href={`/career/${job.id}`}
                  className="text-[#00A699] font-medium text-sm hover:underline mt-auto"
                >
                  APPLY NOW
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أزرار التنقل */}
        {locale === "ar" ? (
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-[#00A699] text-white cursor-pointer"
            >
              <ChevronRight />
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-[#00A699] text-white cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-[#00A699] text-white cursor-pointer"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => swiperRef?.slideNext()}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-[#00A699] text-white cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
