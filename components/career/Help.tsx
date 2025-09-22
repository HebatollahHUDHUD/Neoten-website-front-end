import Link from "next/link";

export default function Help() {
  return (
    <section className="bg-[#00A699] h-36 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start max-w-6xl mx-auto w-full px-4">
        <div className="flex flex-col text-white">
          <h1 className="font-bold text-lg uppercase">NEED MORE HELP?</h1>
          <p className="font-normal text-xs">
            Lorem ipsum dolor sit elit consectur sed tempor..
          </p>
        </div>
        <Link href="/contact">
          <button className="mt-3 md:mt-0 bg-[#0066CC] text-white  font-semibold px-4 py-2 rounded hover:bg-[#328de8] transition cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
