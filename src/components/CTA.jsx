import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="learn" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,white,transparent_40%)]" />
          <div className="relative p-10 sm:p-12 flex flex-col md:flex-row items-center md:items-end gap-8">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Start your creative session</h3>
              <p className="mt-2 text-white/90 max-w-2xl">
                Launch the 3D scene and discover how playful blocks can teach logic, design and problem solving.
              </p>
            </div>
            <a
              href="#play"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-md transition-all"
            >
              <Rocket className="h-5 w-5" />
              Launch Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
