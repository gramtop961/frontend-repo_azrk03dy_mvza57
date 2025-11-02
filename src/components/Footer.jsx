export default function Footer() {
  return (
    <footer id="about" className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">About HandiCraft</h4>
            <p className="mt-3 text-sm text-gray-600">
              We connect conscious shoppers with independent artisans. Every piece tells a story and supports fair wages and sustainable practices.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Customer Care</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Shipping & returns</a></li>
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Discover</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#categories" className="hover:text-gray-900">Shop by category</a></li>
              <li><a href="#bestsellers" className="hover:text-gray-900">Bestsellers</a></li>
              <li><a href="#new" className="hover:text-gray-900">New arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Get stories from makers and early access to new collections.</p>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@example.com" className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} HandiCraft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Terms</a>
            <a href="#" className="hover:text-gray-800">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
