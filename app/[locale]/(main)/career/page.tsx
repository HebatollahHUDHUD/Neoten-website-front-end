import AboutCareer from "@/components/career/AboutCareer";
import Help from "@/components/career/Help";
import Positions from "@/components/career/Position";
import WhyWork from "@/components/career/Why-Work";
import PageHeader from "@/components/common/pageHeader";

export default function Career (){
    return(
        <div>
            <PageHeader page="career" />
            <AboutCareer />
            <WhyWork />
            {/* <Positions /> */}
            <Help />
        </div>
    );
}