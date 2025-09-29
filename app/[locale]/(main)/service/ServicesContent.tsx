"use client";

import PageHead from "@/components/common/PageHead";
import Choose from "@/components/Home/Choose-Us";
import LoadingPage from "@/components/LoadingPage";
import ServiceTransport from "@/components/service/ServiceTransport";
import { useGetData } from "@/hooks/useFetch";
import { Services, ServicesPage } from "@/schemas/shared";

const ServicesContent = () => {
  const { data, isLoading } = useGetData<ServicesPage>({
    endpoint: "/pages/services",
    queryKey: ["ServicesPage", "/pages/services"],
  });

  const { data: servicesData, isLoading: isLoading2 } = useGetData<Services>({
    endpoint: "/services",
    queryKey: ["Services", "/services"],
  });

  const content = data?.status === "success" ? data?.result : null;
  const services =
    servicesData?.status === "success" ? servicesData?.result : null;

  if (isLoading || !content || isLoading2) return <LoadingPage />;

  return (
    <div>
      <PageHead
        image={content.services_page_banner}
        title={content.services_page_title}
      />

      {!!services?.services?.length && (
        <ServiceTransport services={services?.services} />
      )}

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

export default ServicesContent;
