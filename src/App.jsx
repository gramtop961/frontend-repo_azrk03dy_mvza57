import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="categories" className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-600 via-amber-600 to-rose-600 p-0.5">
              <div className="rounded-2xl bg-white p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">Shop by category</h3>
                  <a href="#categories" className="text-sm font-medium text-gray-600 hover:text-gray-900">View all</a>
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { name: 'Ceramics', img: 'https://images.unsplash.com/photo-1561820905-95212b3e85ef?q=80&w=1200&auto=format&fit=crop' },
                    { name: 'Textiles', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
                    { name: 'Woodwork', img: 'https://images.unsplash.com/photo-1504148455329-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop' },
                    { name: 'Baskets', img: 'https://images.unsplash.com/photo-1593320425783-c8dfe14554d4?q=80&w=1200&auto=format&fit=crop' },
                  ].map((c) => (
                    <a key={c.name} href="#new" className="group relative overflow-hidden rounded-xl ring-1 ring-gray-200">
                      <img src={c.img} alt={c.name} className="h-28 sm:h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-white text-sm font-semibold">{c.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
