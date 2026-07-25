import { Users, UserPlus, Award, Building } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: UserPlus, value: "25+", label: "Medical Staff" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Building, value: "12+", label: "Departments" },
];

export default function StatsBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-200">Our Impact</span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Making a Difference Every Day</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center pt-4 md:pt-0">
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8 text-cyan-200" />
                  <span className="text-3xl font-extrabold">{stat.value}</span>
                </div>
                <p className="text-xs text-blue-100 font-medium mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}