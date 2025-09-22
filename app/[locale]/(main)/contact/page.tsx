import PageHeader from "@/components/common/pageHeader";
import ContactForm from "@/components/contact/ContactForm";
import Contact from "@/components/contact/Contract";
export default function ContactPage() {
  return (
    <div>
      <PageHeader page="contact"/>
        <Contact />
        <ContactForm />
    </div>
  );
}
