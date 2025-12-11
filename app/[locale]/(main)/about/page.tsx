import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import { cookies } from "next/headers";
import AboutContent from "./AboutContent";

export default async function FAQsPage() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = "/pages/about";

  await queryClient.prefetchQuery({
    queryKey: ["AboutPage", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AboutContent />
      </HydrationBoundary>
    </div>
  );
}
