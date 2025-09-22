import Image from "next/image";
const Employees = () => {
  return (
    <div className="max-w-4xl mx-auto"  id="team">
      <div className="max-w-7xl mx-auto py-16">
        <div>
            <p className="text-[#00A699] font-semibold text-center  pt-6 ">
              CONNECTING PEOPLE
          </p>
          <h1 className="text-4xl font-bold text-center mb-10">
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div
              className="flex flex-col gap-3 items-center mb-5 md:items-start"
            >
              <Image
                src="/images/Rectangle 1693.png"
                alt="employees"
                width={500}
                height={500}
                quality={100}
                className="w-full aspect-[4/4] object-cover"
              />
              <h1 className="font-bold text-lg">
                Full Name
              </h1>
              <p className="font-normal text-sm max-w-56 text-start ">
                Position
              </p>
            </div>
            <div
              className="flex flex-col gap-3 items-center mb-5 md:items-start"
            >
              <Image
                src="/images/Rectangle 1697.png"
                alt="employees"
                width={500}
                height={500}
                quality={100}
                className="w-full aspect-[4/4] object-cover"
              />
              <h1 className="font-bold text-lg">
                Full Name
              </h1>
              <p className="font-normal text-sm max-w-56 text-start ">
                Position
              </p>
            </div>
            <div
              className="flex flex-col gap-3 items-center mb-5 md:items-start"
            >
              <Image
                src="/images/Rectangle 1695.png"
                alt="employees"
                width={500}
                height={500}
                quality={100}
                className="w-full aspect-[4/4] object-cover"
              />
              <h1 className="font-bold text-lg">
                Full Name
              </h1>
              <p className="font-normal text-sm max-w-56 text-start ">
                Position
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Employees;
