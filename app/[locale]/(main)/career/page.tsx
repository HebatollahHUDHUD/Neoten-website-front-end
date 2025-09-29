import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import CareerContent from "./CareerContent";

export default async function Career() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = "/pages/career";

  await queryClient.prefetchQuery({
    queryKey: ["CareerPage", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CareerContent />
    </HydrationBoundary>
  );
}
