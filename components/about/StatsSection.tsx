const stats = [
  { number: 165, label: "Countries Covered" },
  { number: 165, label: "Packages Received" },
  { number: 165, label: "Happy Customers" },
  { number: 165, label: "National Offices" },
];
export default function StatsSection () {
    return(
        <section className="mt-20 mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0066CC] text-white py-10 w-full gap-5 md:gap-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-2xl md:text-3xl font-bold">{stat.number}</p>
            <p className="text-sm md:text-base font-normal">{stat.label}</p>
          </div>
        ))}
      </div>
        </section>
    );
}
