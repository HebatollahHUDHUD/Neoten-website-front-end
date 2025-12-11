"use client";

import AboutCareer from "@/components/career/AboutCareer";
import Help from "@/components/career/Help";
import WhyWork from "@/components/career/Why-Work";
import PageHead from "@/components/common/PageHead";
import PageHeader from "@/components/common/pageHeader";
import LoadingPage from "@/components/LoadingPage";
import { useGetData } from "@/hooks/useFetch";

const CareerContent = () => {
  const { data, isLoading } = useGetData<any>({
    endpoint: "/pages/career",
    queryKey: ["CareerPage", "/pages/career"],
  });

  const content = data?.status === "success" ? data?.result : null;

  if (isLoading || !content) return <LoadingPage />;

  return (
    <div>
      <PageHead
        title={content.career_page_title}
        image={content.career_page_banner}
      />

      <AboutCareer content={content} />

      <WhyWork content={content} />
      {/* <Positions /> */}
      <Help content={content} />
    </div>
  );
};

export default CareerContent;
