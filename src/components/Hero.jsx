import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid + gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              Futuristic 3D interface
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Minimal, glowing, and corporate-ready
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-prose">
              Explore an interactive 3D surface designed for modern product sites. Clean typography, soft glows, and a dark canvas set a refined tone.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#play" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-neutral-900 text-sm font-semibold shadow hover:bg-emerald-400">
                Try the experience
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-white text-sm font-semibold bg-white/0 hover:bg-white/5">
                See features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Interactive</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Minimal</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400" /> Corporate</div>
            </div>
          </div>

          {/* Spline canvas */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[560px] rounded-3xl border border-white/10 bg-white/5 shadow-inner overflow-hidden">
            <Spline
              scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle top gradient so content reads on dark scenes */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
