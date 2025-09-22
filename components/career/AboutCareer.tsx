import Image from "next/image";
export default function AboutCareer(){
    return(
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto my-14">
              
              <div className="flex flex-col col-span-1 justify-center items-start text-center md:text-start">
                <div className="space-y-2 ">
                    <p className="font-semibold text-sm text-[#00A699]">ALWAYS AHEAD</p>
                  <h1 className="font-bold text-3xl max-w-xs">Together We Grow Stronger</h1>
                  <p className="font-normal text-xs py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit. 
                  </p>
                  <span className="font-normal text-xs  block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat duis aute irure dolor in reprehenderit.
                  </span>
                </div>
        
              </div>
        
              <div className="relative col-span-1 flex justify-center items-center">
        
                <div className="w-full aspect-[4/3] relative">
                  <Image
                    src="/images/Rectangle 21481.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
        
                
              </div>
        
            </section>
    );
}