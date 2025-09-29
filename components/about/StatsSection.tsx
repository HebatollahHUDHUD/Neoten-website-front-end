import { Home } from "@/schemas/shared";

export default function StatsSection({
  stats,
}: {
  stats: Home["stats_2_items"];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 bg-[#0066CC] text-white py-10 max-w-6xl mx-auto">
      {stats?.map((stat, idx) => (
        <div key={idx} className="text-center">
          <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
          <p className="text-sm md:text-base font-normal">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
