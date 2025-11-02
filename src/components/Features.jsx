import { Puzzle, Gamepad2, GraduationCap, Shield } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "Modular creativity",
    desc: "Snap together playful blocks to prototype ideas and learn spatial thinking.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: Gamepad2,
    title: "Made for play",
    desc: "A smooth, interactive 3D canvas that rewards curiosity and experimentation.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: GraduationCap,
    title: "Teach and learn",
    desc: "Great for classrooms and workshops—turn abstract concepts into tactile lessons.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Safe by design",
    desc: "Friendly visuals, accessible controls and privacy-conscious defaults.",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why you'll love it</h2>
          <p className="mt-3 text-slate-600">
            Designed for education, gaming and creative exploration with a bright, friendly style.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr ${f.color} text-white shadow` }>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
