import { Heart } from 'lucide-react'
import { useMemo, useState } from 'react'

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Hand-thrown Ceramic Vase',
    price: 68,
    image:
      'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop',
    tags: ['ceramics', 'home'],
  },
  {
    id: 'p2',
    name: 'Woven Cotton Wall Hanging',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    tags: ['textiles', 'decor'],
  },
  {
    id: 'p3',
    name: 'Carved Teak Serving Board',
    price: 42,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    tags: ['wood', 'kitchen'],
  },
  {
    id: 'p4',
    name: 'Hand-painted Terracotta Planter',
    price: 36,
    image:
      'https://images.unsplash.com/photo-1591786341400-43d4c1456a4d?q=80&w=1200&auto=format&fit=crop',
    tags: ['garden', 'ceramics'],
  },
  {
    id: 'p5',
    name: 'Block-printed Linen Napkins (Set of 4)',
    price: 48,
    image:
      'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1200&auto=format&fit=crop',
    tags: ['textiles', 'kitchen'],
  },
  {
    id: 'p6',
    name: 'Handwoven Rattan Basket',
    price: 55,
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop',
    tags: ['storage', 'home'],
  },
]

export default function ProductGrid() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('all')

  const tags = useMemo(() => {
    const t = new Set(['all'])
    PRODUCTS.forEach((p) => p.tags.forEach((tag) => t.add(tag)))
    return Array.from(t)
  }, [])

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      const matchesTag = activeTag === 'all' || p.tags.includes(activeTag)
      return matchesQuery && matchesTag
    })
  }, [query, activeTag])

  return (
    <section id="new" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              New arrivals
            </h2>
            <p className="mt-1 text-gray-600">Fresh from our makers this week.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-64 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${
                    activeTag === tag
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <button
                  aria-label="Favorite"
                  className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur hover:bg-white"
                  onClick={() => alert('Added to favorites!')}
                >
                  <Heart className="h-4 w-4 text-rose-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-bold">${p.price}</p>
                  <button
                    className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
                    onClick={() => alert('Added to cart!')}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
