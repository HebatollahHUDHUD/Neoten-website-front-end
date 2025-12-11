"use client";

import Choose from "@/components/Home/Choose-Us";
import InfoSection from "@/components/Home/InfoSection";
import Slider from "@/components/Home/SliderSection";
import TransportServices from "@/components/Home/TransportServices";
import { useGetData } from "@/hooks/useFetch";
import LoadingPage from "../LoadingPage";
import { Home } from "@/schemas/shared";

const HomeContent = () => {
  const { data, isLoading } = useGetData<Home>({
    endpoint: "/pages/home",
    queryKey: ["Home", "/pages/home"],
  });

  const content = data?.status === "success" ? data?.result : null;

  if (isLoading || !content) return <LoadingPage />;

  return (
    <div>
      <Slider slides={content.slides} />
      <InfoSection content={content} />
      <TransportServices content={content} />
      <Choose
        why_us_background={content.why_us_background}
        why_us_image={content.why_us_image}
        why_us_title={content.why_us_title}
        why_us_subtitle={content.why_us_subtitle}
        why_us_items={content.why_us_items}
      />
      {/* <Testimonials /> */}
    </div>
  );
};

export default HomeContent;
