"use client";

import LoadingPage from "@/components/LoadingPage";
import { useGetData } from "@/hooks/useFetch";
import CEOMessage from "@/components/about/CEOMessage";
import Employees from "@/components/about/Emplyees";
import History from "@/components/about/History";
import LogisticsIntroduction from "@/components/about/LogisticsIntroduction";
import MissionVisionSection from "@/components/about/Mission&VisionSection";
import OurValues from "@/components/about/OurValues";
import StatsSection from "@/components/about/StatsSection";
import PageHeader from "@/components/common/pageHeader";
import InfoSection from "@/components/Home/InfoSection";
import { About } from "@/schemas/shared";
import PageHead from "@/components/common/PageHead";

const AboutContent = () => {
  const { data, isLoading } = useGetData<About>({
    endpoint: "/pages/about",
    queryKey: ["AboutPage", "/pages/about"],
  });

  const content = data?.status === "success" ? data?.result : null;

  if (isLoading || !content) return <LoadingPage />;

  return (
    <div>
      <PageHead
        image={content.about_page_banner}
        title={content.about_page_title}
      />
      {/* <InfoSection /> */}

      <LogisticsIntroduction content={content} />

      <div className="mt-20">
        <StatsSection stats={content.stats_2_items} />
      </div>

      <MissionVisionSection content={content} />

      <OurValues content={content} />

      <History content={content} />

      <CEOMessage content={content} />
      {/* <Employees /> */}
    </div>
  );
};

export default AboutContent;
