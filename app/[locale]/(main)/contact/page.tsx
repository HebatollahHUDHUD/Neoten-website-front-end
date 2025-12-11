import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import { cookies } from "next/headers";
import ContactContent from "./ContactContent";

export default async function ContactPage() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = "/pages/contact";

  await queryClient.prefetchQuery({
    queryKey: ["ContactPage", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactContent />
    </HydrationBoundary>
  );
}
