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
      <Choose content={content} />
      {/* <Testimonials /> */}
    </div>
  );
};

export default HomeContent;
