import { Rocket, Puzzle, Gamepad2, GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-lg">
            <Puzzle className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">BlockPlus</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#learn" className="hover:text-slate-900 transition-colors">Learn</a>
          <a href="#play" className="hover:text-slate-900 transition-colors">Play</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:shadow transition-shadow">
          <Rocket className="h-4 w-4" />
          Get Started
        </button>
      </div>
    </header>
  );
}
