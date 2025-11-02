import { Puzzle, Gamepad2, GraduationCap, Shield } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "Composable blocks",
    desc: "Assemble layout ideas quickly with modular sections and clean tokens.",
    color: "from-cyan-500 to-emerald-400",
  },
  {
    icon: Gamepad2, 
    title: "Smooth interaction",
    desc: "GPU-accelerated 3D for a fluid, tactile feel on modern devices.",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    icon: GraduationCap,
    title: "Clear guidance",
    desc: "Thoughtful defaults and patterns that scale with your product.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise ready",
    desc: "Accessible components, secure by default, and production-focused.",
    color: "from-sky-500 to-cyan-400",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Designed for modern teams</h2>
          <p className="mt-3 text-neutral-300">
            A minimal aesthetic with subtle glow accents and a dark, professional base.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-shadow">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-white bg-gradient-to-tr ${f.color} shadow` }>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
