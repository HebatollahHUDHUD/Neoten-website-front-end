"use client";

import PageHead from "@/components/common/PageHead";
import { useGetData } from "@/hooks/useFetch";
import { useTranslations } from "next-intl";

export default function Terms() {
  const t = useTranslations();

  const { data } = useGetData<any>({
    endpoint: "/pages/privacy-policy",
    queryKey: ["PrivacyPolicy", "/privacy-policy"],
  });

  const terms = data?.status === "success" ? data?.result : null;
  return (
    <div>
      <PageHead
        title={terms?.privacy_policy_page_title}
        image={terms?.privacy_policy_page_banner}
      />
      <section className="max-w-5xl mx-auto py-10 px-2 md:px-0">
        <div className="flex gap-5 pb-5">
          <h1 className="font-bold text-xl">{t("latest")}</h1>
          <h1 className="font bold text-xl text-[#0066CC]">
            {terms?.last_updated}
          </h1>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: terms?.privacy_policy_page_content || "",
          }}
        />
      </section>
    </div>
  );
}
