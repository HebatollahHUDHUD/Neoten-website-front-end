import PageHeader from "@/components/common/pageHeader";
import { useTranslations } from "next-intl";

type Policy = {
    id: number;
    title: string;
    text: string;
}

const policy : Policy[] =[
    {
        id: 1,
        title:"quality-policy",
        text:"p1"
    },
        {
        id: 2,
        title:"safety-policy",
        text:"p2"
    },
        {
        id: 3,
        title:"privacy-policy",
        text:"p3"
    },
        {
        id: 4,
        title:"delivery-policy",
        text:"p4"
    },
        {
        id: 5,
        title: "complaints-policy",
        text: "p5"
    },
    {
        id: 6,
        title:"legal-compliance",
        text: "p6"
    }
]
export default function Privacy(){
    const t = useTranslations();
    return(
        <div>
            <PageHeader page="privacy" />
            <section className="max-w-5xl mx-auto py-10 px-2 md:px-0">
                <div className="flex gap-5 pb-5">
                <h1 className="font-bold text-xl">{t("latest")}</h1>
                <h1 className="font bold text-xl text-[#0066CC]">20/01/2025</h1>
                </div>
                {policy.map((policy, idx) => (
                <div key={idx} className="space-y-3">
                    <h1 className="font-bold text-2xl">{policy.id}- {t(policy.title)}</h1>
                    <p className="font-normal text-lg pb-3 px-8">
                    {t(policy.text).split("\n").map((line, idx) => (
                    <span key={idx}>
                    • {line}
                    <br />
                    </span>
                ))}
                </p>
                </div>
                ))}
            </section>
        </div>
    );
}