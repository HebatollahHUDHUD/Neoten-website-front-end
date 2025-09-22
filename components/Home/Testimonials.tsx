import Image from "next/image";

type CardItem = {
  icon: string;
  title: string;
  image: string;
  name: string;
  job: string;
};

const data: CardItem[] = [
  {
    icon: "/images/Path 174.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/Rectangle 106.png",
    name: "Full Name",
    job: "Position",
  },
  {
    icon: "/images/Path 174.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/Rectangle 106.png",
    name: "Full Name",
    job: "Position",
  },
  {
    icon: "/images/Path 174.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/images/Rectangle 106.png",
    name: "Full Name",
    job: "Position",
  },
];
const Testimonials = () => {
    return(
        <section className="py-16">
            <p className="font-semibold text-[#00A699] text-sm text-center uppercase">CONNECTING PEOPLE</p>
            <h1 className="font-bold text-3xl text-center uppercase pt-2">What Our Customer Says</h1>
            <main className="flex justify-center pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 w-full max-w-6xl">
        {data.map((item , index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6"
          >
            {/* الأيقونة */}
            <div className="w-10 h-10 relative mb-3">
                <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* النص (عنوان) */}
            <h1 className="text-sm font-normal mb-4 text-center">
              {item.title}
            </h1>
            <div className="mb-7">
                <Image
                src="/Rectangle 111.svg"
                alt=""
                width={60}
                height={5}
                quality={100}
                priority
                className="object-cover rounded-md"
                />
            </div>
            {/* الصورة */}
            <div className="w-24 h-24 relative mb-3">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* الاسم */}
            <h4 className="text-md font-bold text-gray-900">{item.name}</h4>

            {/* الوظيفة */}
            <p className="text-sm text-gray-600">{item.job}</p>
          </div>
        ))}
      </div>
    </main>
        </section>
    );
}
export default Testimonials;