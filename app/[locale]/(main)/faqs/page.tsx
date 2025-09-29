import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import { cookies } from "next/headers";

import FAQsContent from "./FAQsContent";

export default async function FAQsPage() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = "/pages/faqs";
  const endpoint2 = "/faqs";

  await queryClient.prefetchQuery({
    queryKey: ["FAQsPage", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["FAQs", endpoint2],
    queryFn: () => getData({ endpoint: endpoint2, config: { headers } }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FAQsContent />
      </HydrationBoundary>
    </div>
  );
}
