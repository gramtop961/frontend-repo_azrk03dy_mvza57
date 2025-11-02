import { Rocket, Puzzle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 text-white shadow-[0_0_24px_rgba(34,197,94,.35)]">
            <Puzzle className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            NeoTiles
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#learn" className="hover:text-white transition-colors">Learn</a>
          <a href="#play" className="hover:text-white transition-colors">Play</a>
        </nav>
        <a
          href="#learn"
          className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-4 py-2 text-sm shadow-sm hover:bg-white/15 transition-colors border border-white/10"
        >
          <Rocket className="h-4 w-4" />
          Get Started
        </a>
      </div>
    </header>
  );
}
