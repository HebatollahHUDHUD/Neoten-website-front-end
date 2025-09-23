import Image from "next/image";

const LogisticsIntroduction = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto my-8">
      
      <div className="flex flex-col col-span-1 justify-between text-center md:text-start">
        <div>
          <h1 className="font-bold text-3xl max-w-sm">Logistics, Make The World Go Places</h1>
          <p className="font-semibold text-sm py-4">
            We have a solution for every need to send or supply products in any mode of freight transport: land, sea and air.
          </p>
          <p className="font-normal text-xs max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.
          </p>
          <span className="font-normal text-xs pt-4 block max-w-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className="flex flex-row justify-between gap-5 py-5">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src="/images/Rectangle 145.png"
              alt="call"
              width={40}
              height={20}
              quality={100}
              className="object-contain"
            />
            <h1 className="font-bold text-lg text-start">Secure Packaging</h1>
            <p className="font-normal text-sm">Lorem ipsum dolor sit elit consectur sed tempor..</p>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Image
              src="/images/Rectangle 146.png"
              alt="call"
              width={40}
              height={20}
              quality={100}
              className="object-contain"
            />
            <h1 className="font-bold text-lg text-start">Delivery Unlimited</h1>
            <p className="font-normal text-sm">Lorem ipsum dolor sit elit consectur sed tempor..</p>
          </div>
        </div>
      </div>

      <div className="relative col-span-1 flex justify-center items-center">

        <div className="w-full aspect-[3/3] relative">
          <Image
            src="/images/Rectangle 144.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute -bottom-10 md:bottom-0 right-8 md:-right-40">
          <Image
            src="/images/Rectangle 147.png"
            alt=""
            width={350}
            height={20}
            className="object-contain"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default LogisticsIntroduction;
