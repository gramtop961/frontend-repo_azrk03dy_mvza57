import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-amber-50 to-rose-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              New arrivals are here
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Handcrafted treasures made with love
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-prose">
              Discover unique, artisan-made goods crafted by independent makers around the world. Every purchase supports small workshops and preserves traditional techniques.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#new" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-black">
                Shop new arrivals
              </a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-gray-800 text-sm font-semibold bg-white hover:bg-gray-50">
                Browse categories
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Fair trade</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Small-batch</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500" /> Eco-friendly</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/70 p-4 shadow-lg ring-1 ring-gray-200">
              <div className="grid grid-cols-2 gap-4 h-full">
                <img src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&w=1200&auto=format&fit=crop" alt="Pottery" className="rounded-2xl object-cover h-full w-full" />
                <div className="grid grid-rows-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1542044801-30d3e45ae49a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZXh0aWxlc3xlbnwwfDB8fHwxNzYyMDg4ODc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Textiles" className="rounded-2xl object-cover h-full w-full" />
                  <img src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=1200&auto=format&fit=crop" alt="Wood crafts" className="rounded-2xl object-cover h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
