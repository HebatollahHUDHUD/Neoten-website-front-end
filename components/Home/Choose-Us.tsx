import Image from "next/image";

const Choose = () => {
    return (
         <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 relative w-full aspect-[4/3]">
            <Image
            src="/images/Rectangle 137.png"
            alt="Rectangle 137"
            fill
            className="object-cover"
            quality={100}
            priority
            />
        </div>
        <div className="col-span-1 relative w-full aspect-[4/3]">
            <Image
            src="/images/Rectangle 132.png"
            alt="Rectangle 137"
            fill
            className="object-cover"
            quality={100}
            priority
            />
            <div className="absolute inset-0 bg-[#09192A] opacity-90"></div>
         <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
        <p className="text-sm font-normal uppercase tracking-wide">
            Lifelong of Trust
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Why You Should Choose Us
        </h2>

      <div className="grid grid-cols-2 gap-y-6 gap-x-8">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="flex items-start gap-3">
            {/* أيقونة */}
            <Image
                src="/images/Path 282.png"
                alt=""
                width={10}
                height={10}
                quality={100}
              className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1"
            />
            {/* النص */}
            <div>
              <h3 className="font-bold text-lg">Fastest Shipping</h3>
              <p className="text-sm font-normal max-w-52 mx-auto">
                Lorem ipsum dolor sit elit consectur sed tempor.
              </p>
            </div>
          </div>
        ))}
      </div>
        </div>
        </div>
        </section>
    );
};

export default Choose;