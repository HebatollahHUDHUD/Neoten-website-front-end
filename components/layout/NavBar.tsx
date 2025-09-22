'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
const NavBar = () => {
const pathname = usePathname();
  const locale = useLocale();
const isHome = pathname === `/${locale}` || pathname === "/";
const [searchOpen, setSearchOpen] = useState(false);

    return(
    <div className={`absolute top-0 left-0 right-0 z-50 w-full ${isHome ? "bg-transparent" : "bg-black"}`}>
  <div className="max-w-7xl mx-auto">
     <div className="flex flex-row justify-end">
       <div 
            className="border-x border-x-white p-3 place-items-center cursor-pointer"
            onClick={() => setSearchOpen(true)}
          >
            <Image src="/Search.svg" alt="Search" width={20} height={10} quality={100} />
          </div>
          <div className="flex flex-row gap-4 border-x border-x-white py-3 px-5 place-items-center">
             <Image src="/you.svg" alt="Serach" width={20} height={10} quality={100} className="cursor-pointer" />
              <Image src="/in.svg" alt="Serach" width={20} height={10} quality={100} className="cursor-pointer" />
               <Image src="/Path 56.svg" alt="Serach" width={20} height={10} quality={100} className="cursor-pointer" /> 
               </div>
                <div className="flex flex-row gap-3 border-x border-x-white py-3 px-5 place-items-center">
                   <Image src="/call.svg" alt="call" width={20} height={20} quality={100} className="object-contain" />
                    <p className="font-normal text-sm text-white">0790000000</p>
                     </div>
                      <div className="flex flex-row gap-3 border-x border-x-white py-3 px-5 place-items-center">
                         <Image src="/mail.svg" alt="call" width={20} height={20} quality={100} className="object-contain" />
                          <p className="font-normal text-sm text-white">Info@newton.com</p>
                           </div>
                            </div>
                             </div>
                             <div 
        className={`fixed inset-0 bg-black/70 z-50 transform transition-transform duration-500 ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center items-start h-full pt-80">
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-11/12 md:w-1/3 p-4  bg-white text-black focus:outline-none"
          />
        </div>

        {/* زر إغلاق */}
        <button 
          className="absolute top-5 right-5 text-white text-xl font-bold"
          onClick={() => setSearchOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>

    );
}
export default NavBar;