import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="learn" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-950">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(16,185,129,0.25),transparent_60%)]" />
          <div className="relative p-10 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Launch your next modern experience</h3>
              <p className="mt-2 text-neutral-300">
                Combine a sleek dark theme with interactive 3D to elevate your product story.
              </p>
            </div>
            <a
              href="#play"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-neutral-900 px-5 py-3 font-medium shadow hover:bg-emerald-400 transition-all"
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
