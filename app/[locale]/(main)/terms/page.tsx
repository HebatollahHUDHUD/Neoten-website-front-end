import PageHeader from "@/components/common/pageHeader";
import { useTranslations } from "next-intl";

type Terms = {
    id: number;
    title: string;
    text: string;
}

const terms : Terms[] =[
    {
        id: 1,
        title:"definitions",
        text:"tr1"
    },
        {
        id: 2,
        title:"use-of-website",
        text:"tr2"
    },
        {
        id: 3,
        title:"services-and-fees",
        text:"tr3"
    },
        {
        id: 4,
        title:"liability",
        text:"tr4"
    },
        {
        id: 5,
        title:"governing-law",
        text: `tr5`
    },
    {
        id: 6,
        title:"amendments",
        text: "tr6"
    }
]

export default function Terms(){
    const t = useTranslations();
    return(
        <div>
            <PageHeader page="terms" />
            <section className="max-w-5xl mx-auto py-10 px-2 md:px-0">
                <div className="flex gap-5 pb-5">
                <h1 className="font-bold text-xl">{t("latest")}</h1>
                <h1 className="font bold text-xl text-[#0066CC]">20/01/2025</h1>
                </div>
                {terms.map((term, idx) => (
                <div key={idx} className="space-y-3">
                    <h1 className="font-bold text-2xl">{term.id}- {t(term.title)}</h1>
                    <p className="font-normal text-lg pb-3 px-8">
                    {t(term.text).split("\n").map((line, idx) => (
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