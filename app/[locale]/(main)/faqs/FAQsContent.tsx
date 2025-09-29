"use client";

import PageHead from "@/components/common/PageHead";
import FAQs from "@/components/Faqs/page";
import LoadingPage from "@/components/LoadingPage";
import { useGetData } from "@/hooks/useFetch";
import { Faqs } from "@/schemas/shared";

const FAQsContent = () => {
  const { data, isLoading } = useGetData<any>({
    endpoint: "/pages/faqs",
    queryKey: ["FAQsPage", "/pages/faqs"],
  });

  const { data: dataFaq } = useGetData<Faqs>({
    endpoint: "/faqs",
    queryKey: ["FAQs", "/faqs"],
  });

  const content = data?.status === "success" ? data?.result : null;
  const faqs = dataFaq?.status === "success" ? dataFaq?.result?.faqs : null;

  if (isLoading || !content) return <LoadingPage />;

  return (
    <div>
      <PageHead
        image={content.faqs_page_banner}
        title={content.faqs_page_title}
      />

      {faqs && <FAQs faqs={faqs} />}
    </div>
  );
};

export default FAQsContent;
