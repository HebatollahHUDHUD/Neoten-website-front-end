"use client";

import PageHead from "@/components/common/PageHead";
import PageHeader from "@/components/common/pageHeader";
import ServiceDetails from "./servicedetails";
import { useGetData } from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import LoadingPage from "@/components/LoadingPage";
import { Service } from "@/schemas/shared";

const ServiceDetailsContent = () => {
  const { id } = useParams();
  const endpoint = `/services/${id}`;

  const { data, isLoading } = useGetData<Service>({
    endpoint,
    queryKey: [`Service-${id}`, endpoint],
  });

  const service = data?.status === "success" ? data?.result?.service : null;

  if (isLoading || !service) return <LoadingPage />;

  return (
    <div>
      <PageHead image={service?.banner} title={service.title} />

      <ServiceDetails service={service} />
    </div>
  );
};

export default ServiceDetailsContent;
