import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import { cookies } from "next/headers";
import HomeContent from "@/components/Home/HomeContent";

export default async function Home() {
  const endpoint = "/pages/home";
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["Home", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeContent />
      </HydrationBoundary>
    </div>
  );
}
