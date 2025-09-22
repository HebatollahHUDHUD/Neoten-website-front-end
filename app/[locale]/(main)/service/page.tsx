import PageHeader from "@/components/common/pageHeader";
import ServiceTransport from "@/components/service/ServiceTransport";
import Choose from "@/components/Home/Choose-Us";
import Testimonials from "@/components/Home/Testimonials";
export default function Service () {
    return (
        <div>
            <PageHeader page="services"/>
            <ServiceTransport />
            <Choose />
            <Testimonials />
        </div>
    );
}