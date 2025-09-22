import PageHeader from "@/components/common/pageHeader";
import ServiceDetails from "./servicedetails";
export default function ServicePage({ params }: { params: { id: string } }) {
  return (
    <>
      {/* الهيدر */}
      <PageHeader 
        page={params.id} 

      />

      {/* التفاصيل */}
      <ServiceDetails />
    </>
  );
}
