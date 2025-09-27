import Choose from "@/components/Home/Choose-Us";
import InfoSection from "@/components/Home/InfoSection";
import Slider from "@/components/Home/SliderSection";
import Testimonials from "@/components/Home/Testimonials";
import TransportServices from "@/components/Home/TransportServices";

export default function Home() {
  return (
    <div>
    <Slider />
    <InfoSection />
    <TransportServices />
    <Choose />
    {/* <Testimonials /> */}
    </div>
  );
}
