import CEOMessage from "@/components/about/CEOMessage";
import Employees from "@/components/about/Emplyees";
import History from "@/components/about/History";
import LogisticsIntroduction from "@/components/about/LogisticsIntroduction";
import MissionVisionSection from "@/components/about/Mission&VisionSection";
import OurValues from "@/components/about/OurValues";
import StatsSection from "@/components/about/StatsSection";
import PageHeader from "@/components/common/pageHeader";
import InfoSection from "@/components/Home/InfoSection";

export default function About (){
    return(
        <div>
            <PageHeader page="about" />
            <InfoSection />
            <LogisticsIntroduction />
            <StatsSection />
            <MissionVisionSection />
            <OurValues />
            <History />
            <CEOMessage />
            {/* <Employees /> */}
        </div>
    );
}