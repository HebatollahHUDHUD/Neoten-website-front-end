import PageHeader from "@/components/common/pageHeader";
import ServiceDetails from "./servicedetails";
import { cookies } from "next/headers";
import { createHeaders } from "@/lib/createHeaders";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getData } from "@/lib/request-server";
import ServiceDetailsContent from "./ServiceDetailsContent";

export default async function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = `/services/${params.id}`;

  queryClient.prefetchQuery({
    queryKey: [`Service-${params.id}`, endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServiceDetailsContent />
    </HydrationBoundary>
  );
}
