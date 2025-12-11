import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createHeaders } from "@/lib/createHeaders";
import { getData } from "@/lib/request-server";
import { cookies } from "next/headers";

import TermsContent from "./TermsContent";

export default async function Terms() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const queryClient = new QueryClient();

  const endpoint = "/pages/privacy-policy";

  await queryClient.prefetchQuery({
    queryKey: ["PrivacyPolicy", endpoint],
    queryFn: () => getData({ endpoint, config: { headers } }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TermsContent />
      </HydrationBoundary>
    </div>
  );
}
