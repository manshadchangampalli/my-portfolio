export function FigmaDesign() {
    const products = [
        { id: 1, name: "Wireless Headphones", price: "$199", rating: 4.8, image: "🎧" },
        { id: 2, name: "Smart Watch Pro", price: "$349", rating: 4.9, image: "⌚" },
        { id: 3, name: "Laptop Stand", price: "$79", rating: 4.7, image: "💻" },
        { id: 4, name: "Mechanical Keyboard", price: "$129", rating: 4.6, image: "⌨️" },
        { id: 5, name: "USB-C Hub", price: "$59", rating: 4.5, image: "🔌" },
        { id: 6, name: "Monitor Stand", price: "$89", rating: 4.8, image: "🖥️" },
    ];

    const featuredProducts = [
        { id: 1, name: "Premium Mouse", price: "$99", image: "🖱️" },
        { id: 2, name: "Webcam HD", price: "$149", image: "📹" },
        { id: 3, name: "Desk Mat", price: "$39", image: "🖼️" },
        { id: 4, name: "Cable Organizer", price: "$24", image: "🔗" },
    ];

    return (
        <div className="w-full h-full bg-black flex overflow-hidden rounded-[10px] relative">
            {/* Left Sidebar - Pages & Layers */}
            <div className="w-64 bg-[#1E1E1E] border-r border-gray-800 flex flex-col">
                {/* Top Header */}
                <div className="p-3 border-b border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-xs">M</span>
                            </div>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="12" y1="3" x2="12" y2="21" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-semibold text-sm">Portfolio</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">Drafts</span>
                        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Free</span>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="p-2 border-b border-gray-800 flex items-center justify-between">
                    <div className="flex gap-1">
                        <div className="bg-[#2C2C2C] px-3 py-1.5 rounded text-white text-sm font-medium">File</div>
                        <div className="px-3 py-1.5 rounded text-gray-400 text-sm">Assets</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </div>

                {/* Pages Section */}
                <div className="p-3 border-b border-gray-800">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-white text-sm font-medium">Pages</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>
                    <div className="space-y-1">
                        <div className="px-2 py-1.5 text-white text-sm cursor-pointer hover:bg-gray-800 rounded">Page 1</div>
                        <div className="px-2 py-1.5 text-white text-sm cursor-pointer hover:bg-gray-800 rounded">skills</div>
                        <div className="px-2 py-1.5 text-white text-sm cursor-pointer bg-gray-800 rounded">experience</div>
                    </div>
                </div>

                {/* Layers Section */}
                <div className="flex-1 p-3 overflow-auto">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-white text-sm font-medium">Layers</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                    </div>
                    <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                            <span>Header</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                            <span>Hero Banner</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                            <span>Product Grid</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <div className="bg-[#1E1E1E] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-sm">F</span>
                        </div>
                        <h1 className="text-xl font-bold text-white">E-commerce Design</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-300 hover:bg-gray-700 cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-300 hover:bg-gray-700 cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 overflow-auto bg-white p-8">
                    <div className="max-w-7xl mx-auto space-y-8">
                        {/* Header Navigation */}
                        <header className="bg-white border-b border-gray-200 py-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-8">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        ShopHub
                                    </div>
                                    <nav className="flex gap-6">
                                        <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Home</a>
                                        <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Products</a>
                                        <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">About</a>
                                    </nav>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.35-4.35" />
                                        </svg>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 relative">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                            <line x1="3" y1="6" x2="21" y2="6" />
                                            <path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                        <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                                    </div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer">
                                        <span className="text-white font-semibold">JD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                        </header>

                        {/* Hero Banner */}
                        <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-2xl p-12 text-white overflow-hidden">
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-4xl font-bold mb-4">Summer Sale Collection</h2>
                                <p className="text-xl mb-6 text-white/90">Get up to 50% off on selected items. Limited time offer!</p>
                                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Shop Now
                                </button>
                            </div>
                            <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
                            <div className="absolute right-20 top-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex gap-8">
                            {/* Sidebar Filters */}
                            <aside className="w-64 bg-gray-50 rounded-xl p-6 h-fit">
                                <h3 className="font-bold text-lg mb-4">Filters</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-3">Category</h4>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded" />
                                                <span className="text-sm text-gray-700">Electronics</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded" />
                                                <span className="text-sm text-gray-700">Accessories</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded" />
                                                <span className="text-sm text-gray-700">Gadgets</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Price Range</h4>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="price" className="rounded" />
                                                <span className="text-sm text-gray-700">$0 - $100</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="price" className="rounded" />
                                                <span className="text-sm text-gray-700">$100 - $300</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Rating</h4>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Brand</h4>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded" />
                                                <span className="text-sm text-gray-700">Apple</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded" />
                                                <span className="text-sm text-gray-700">Samsung</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded" />
                                                <span className="text-sm text-gray-700">Sony</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Product Grid */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">All Products</h3>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Sort</button>
                                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Filter</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    {products.map((product) => (
                                        <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow group">
                                            <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                                                {product.image}
                                            </div>
                                            <h4 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h4>
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-500">({product.rating})</span>
                                            </div>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 mt-8">
                                    <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">1</button>
                                    <button className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center">2</button>
                                    <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">3</button>
                                    <button className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">4</button>
                                </div>
                            </div>
                        </div>

                        {/* Featured Section */}
                        <section className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {featuredProducts.map((product) => (
                                    <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mb-3 flex items-center justify-center text-4xl">
                                            {product.image}
                                        </div>
                                        <h4 className="font-semibold mb-1 text-gray-900">{product.name}</h4>
                                        <p className="text-lg font-bold text-purple-600">{product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mt-16 border-t border-gray-200 pt-8">
                            <div className="grid grid-cols-4 gap-8 mb-8">
                                {[1, 2, 3, 4].map((col) => (
                                    <div key={col} className="space-y-3">
                                        <h5 className="font-semibold text-gray-900">Company</h5>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">About Us</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Contact</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Careers</a></li>
                                            <li><a href="#" className="text-gray-600 hover:text-purple-600 text-sm">Blog</a></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                                <p className="text-gray-600 text-sm">© 2024 ShopHub. All rights reserved.</p>
                                <div className="flex gap-4">
                                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                        <div key={social} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                            <span className="text-xs">📱</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Properties Panel */}
            <div className="w-80 bg-[#1E1E1E] border-l border-gray-800 flex flex-col">
                {/* Top Bar */}
                <div className="p-3 border-b border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-xs">M</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium">Share</button>
                        <div className="text-white text-sm">45%</div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-800">
                    <div className="flex-1 px-4 py-2 bg-[#2C2C2C] text-white text-sm font-medium text-center">Design</div>
                    <div className="flex-1 px-4 py-2 text-gray-400 text-sm text-center hover:bg-gray-800 cursor-pointer">Prototype</div>
                </div>

                {/* Properties Content */}
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {/* Page Section */}
                    <div>
                        <div className="text-white text-sm font-medium mb-3">Page</div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-[#7E6565] rounded border border-gray-700"></div>
                            <input
                                type="text"
                                value="#7E6565"
                                readOnly
                                className="flex-1 bg-[#2C2C2C] border border-gray-700 rounded px-2 py-1.5 text-white text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value="100 %"
                                readOnly
                                className="flex-1 bg-[#2C2C2C] border border-gray-700 rounded px-2 py-1.5 text-white text-sm"
                            />
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                    </div>

                    {/* Variables Section */}
                    <div className="flex items-center justify-between">
                        <div className="text-white text-sm font-medium">Variables</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="4" y1="21" x2="4" y2="14" />
                            <line x1="4" y1="10" x2="4" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12" y2="3" />
                            <line x1="20" y1="21" x2="20" y2="16" />
                            <line x1="20" y1="12" x2="20" y2="3" />
                            <line x1="1" y1="14" x2="7" y2="14" />
                            <line x1="9" y1="8" x2="15" y2="8" />
                            <line x1="17" y1="16" x2="23" y2="16" />
                        </svg>
                    </div>

                    {/* Styles Section */}
                    <div className="flex items-center justify-between">
                        <div className="text-white text-sm font-medium">Styles</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>

                    {/* Export Section */}
                    <div className="flex items-center justify-between">
                        <div className="text-white text-sm font-medium">Export</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>
                </div>

                {/* Help Button */}
                <div className="p-4 border-t border-gray-800 flex justify-end">
                    <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

