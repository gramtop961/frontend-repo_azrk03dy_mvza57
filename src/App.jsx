import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  )
}

export default App
