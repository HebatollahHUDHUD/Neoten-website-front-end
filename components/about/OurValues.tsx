import Image from "next/image";

type Value = {
  image: string;
  title: string;
  text: string;
};

const values: Value[] = [
  {
    image: "/Path 285.svg",
    title:"Integrity",
    text: "We uphold the highest ethical standards and deliver on our commitments.",
  },
  {
    image: "/Path 285.svg",
    title:"Excellence",
    text: "We pursue continuous improvement and set benchmarks in service quality.",
  },
  {
    image: "/Path 285.svg",
    title:"Client-Centricity",
    text: "We place our clients’ success at the center of our strategies and operations.",
  },
  {
    image: "/Path 285.svg",
    title:"Innovation",
    text: "We leverage technology and forward-thinking approaches to anticipate and solve challenges.",
  },
  {
    image: "/Path 285.svg",
    title:"Reliability",
    text: "We provide consistent, dependable, and scalable logistics solutions.",
  },
  {
    image: "/Path 285.svg",
    title:"Sustainability",
    text: "We promote responsible practices that reduce environmental impact and create long-term value.",
  },
  {
    image: "/Path 285.svg",
    title:"Collaboration",
    text: "We foster strong partnerships through teamwork, respect, and shared goals.",
  },
];

export default function OurValues() {
  return (
    <section className="flex flex-col justify-center my-12">
      <h1 className="font-bold text-4xl text-center mb-8">Our Values</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center max-w-5xl mx-auto">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col bordder shadow-[#00000029] shadow-xl w-full h-72 justify-center items-center text-center p-4"
          >
            <div className="rounded-full bg-[#E7F2F1] p-4 flex items-center justify-center mb-4">
              <Image
                src={value.image}
                alt="value icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="font-bold text-lg">{value.title}</h1>
            <p className="font-medium text-lg  max-w-52 mx-auto pt-2">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
