"use client";

import PageHead from "@/components/common/PageHead";
import ContactForm from "@/components/contact/ContactForm";
import Contact from "@/components/contact/Contract";
import { useGetData } from "@/hooks/useFetch";

const ContactContent = () => {
  const { data } = useGetData<any>({
    endpoint: "/pages/contact",
    queryKey: ["ContactPage", "/pages/contact"],
  });

  const contact = data?.status === "success" ? data?.result : null;

  return (
    <div>
      <PageHead
        image={contact?.contact_page_banner}
        title={contact?.contact_page_title}
      />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default ContactContent;
