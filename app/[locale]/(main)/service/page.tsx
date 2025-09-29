import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import { cookies } from "next/headers";

import ServicesContent from "./ServicesContent";

export default async function Service() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = "/pages/services";
  const endpoint2 = "/services";

  await queryClient.prefetchQuery({
    queryKey: ["ServicesPage", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["Services", endpoint2],
    queryFn: () => getData({ endpoint: endpoint2, config: { headers } }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ServicesContent />
      </HydrationBoundary>
    </div>
  );
}
