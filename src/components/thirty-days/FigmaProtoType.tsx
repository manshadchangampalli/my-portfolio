import React from 'react';

// NOTE: Since you don't have Lucide or other icon libraries imported, 
// I'm using the SVG definitions you provided for consistency.

export function FigmaProtoType() {
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

    // Define main colors for the stunning dark theme
    const BG_CANVAS = '#0d1117'; // Deep dark background
    const BG_SURFACE = '#161b22'; // Slightly lighter surface background
    const TEXT_PRIMARY = 'text-gray-50';
    const TEXT_SECONDARY = 'text-gray-400';
    const PURPLE_GRADIENT = 'from-indigo-500 to-pink-500'; // Deeper, more impactful gradient

    return (
        <div className="w-full h-full bg-black flex overflow-hidden rounded-[10px] relative">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header (Figma UI) */}
                <div className="bg-[#1E1E1E] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${PURPLE_GRADIENT} rounded flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">F</span>
                        </div>
                        <h1 className="text-xl font-bold text-white">E-commerce Prototype</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4 inline mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Play
                        </button>
                        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Canvas Area - Stunning Dark Mode */}
                <div className={`flex-1 overflow-auto bg-[${BG_CANVAS}] p-8`}>
                    <div className="max-w-[95%] mx-auto space-y-12">
                        {/* Header Navigation */}
                        <header className={`bg-[${BG_CANVAS}] py-4 border-b border-gray-800`}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-12">
                                    <div className={`text-3xl font-extrabold bg-gradient-to-r ${PURPLE_GRADIENT} bg-clip-text text-transparent`}>
                                        ShopHub
                                    </div>
                                    <nav className="flex gap-8">
                                        <a href="#" className={`${TEXT_PRIMARY} hover:text-indigo-400 font-semibold transition-colors`}>Home</a>
                                        <a href="#" className={`${TEXT_SECONDARY} hover:text-indigo-400 font-medium transition-colors`}>Products</a>
                                        <a href="#" className={`${TEXT_SECONDARY} hover:text-indigo-400 font-medium transition-colors`}>About</a>
                                    </nav>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* Search Icon */}
                                    <div className={`w-10 h-10 bg-[${BG_SURFACE}] rounded-full flex items-center justify-center cursor-pointer ${TEXT_SECONDARY} hover:bg-gray-700 transition-colors`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.35-4.35" />
                                        </svg>
                                    </div>
                                    {/* Cart Icon */}
                                    <div className={`w-10 h-10 bg-[${BG_SURFACE}] rounded-full flex items-center justify-center cursor-pointer ${TEXT_SECONDARY} hover:bg-gray-700 relative transition-colors`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                            <line x1="3" y1="6" x2="21" y2="6" />
                                            <path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                        <span className={`absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-[${BG_CANVAS}]`}>3</span>
                                    </div>
                                    {/* User Avatar */}
                                    <div className={`w-10 h-10 bg-gradient-to-br ${PURPLE_GRADIENT} rounded-full flex items-center justify-center cursor-pointer shadow-lg`}>
                                        <span className="text-white font-semibold">JD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for products and accessories..."
                                    className={`w-full px-4 py-3 pl-12 border border-gray-700 rounded-xl focus:outline-none bg-[${BG_SURFACE}] ${TEXT_PRIMARY} placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                                />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                        </header>

                        {/* Hero Banner - Enhanced Contrast */}
                        <div className={`relative bg-gradient-to-r ${PURPLE_GRADIENT} rounded-3xl p-16 text-white overflow-hidden shadow-2xl shadow-indigo-500/30`}>
                            <div className="absolute inset-0 bg-black opacity-15"></div>
                            <div className="relative z-10 max-w-3xl">
                                <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Unlock the Future of Tech</h2>
                                <p className="text-xl mb-8 font-light text-white/90">Exclusive deals on premium electronics. Don&apos;t miss out on our limited-time collection!</p>
                                <button className={`bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 shadow-md hover:shadow-xl transition-all`}>
                                    Explore Deals
                                </button>
                            </div>
                            {/* Decorative Blurs */}
                            <div className="absolute right-0 bottom-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2 blur-lg"></div>
                            <div className="absolute right-20 top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-sm"></div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex gap-12">
                            {/* Sidebar Filters - Glassy/Dark Surface */}
                            <aside className={`w-72 bg-[${BG_SURFACE}] rounded-2xl p-6 h-fit border border-gray-700 shadow-xl`}>
                                <h3 className={`font-extrabold text-xl mb-6 ${TEXT_PRIMARY}`}>Filters</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className={`font-semibold mb-3 ${TEXT_PRIMARY}`}>Category</h4>
                                        <div className="space-y-3">
                                            {['Electronics', 'Accessories', 'Gadgets', 'Peripherals'].map((category) => (
                                                <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500 checked:bg-indigo-500 w-5 h-5" />
                                                    <span className={`text-sm ${TEXT_SECONDARY} group-hover:${TEXT_PRIMARY} transition-colors`}>{category}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold mb-3 ${TEXT_PRIMARY}`}>Price Range</h4>
                                        <div className="space-y-3">
                                            {['$0 - $100', '$100 - $300', '$300+'].map((price) => (
                                                <label key={price} className="flex items-center gap-3 cursor-pointer group">
                                                    <input type="radio" name="price" className="rounded-full bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500 checked:bg-indigo-500 w-5 h-5" />
                                                    <span className={`text-sm ${TEXT_SECONDARY} group-hover:${TEXT_PRIMARY} transition-colors`}>{price}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold mb-3 ${TEXT_PRIMARY}`}>Rating</h4>
                                        <div className="flex gap-1.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-5 h-5 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Product Grid */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className={`text-3xl font-extrabold ${TEXT_PRIMARY}`}>All Products ({products.length})</h3>
                                    <div className="flex gap-4">
                                        <button className={`px-5 py-2 border border-gray-700 rounded-xl text-sm font-medium ${TEXT_SECONDARY} bg-[${BG_SURFACE}] hover:border-indigo-500 hover:${TEXT_PRIMARY} transition-all`}>Sort by</button>
                                        <button className={`px-5 py-2 border border-gray-700 rounded-xl text-sm font-medium ${TEXT_SECONDARY} bg-[${BG_SURFACE}] hover:border-indigo-500 hover:${TEXT_PRIMARY} transition-all`}>View</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-8">
                                    {products.map((product) => (
                                        <div key={product.id} className={`bg-[${BG_SURFACE}] border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group cursor-pointer`}>
                                            <div className={`w-full h-56 bg-gradient-to-br from-indigo-900/50 to-pink-900/50 rounded-xl mb-5 flex items-center justify-center text-7xl group-hover:scale-[1.03] transition-transform shadow-inner border border-indigo-900/50`}>
                                                {product.image}
                                            </div>
                                            <h4 className={`font-bold text-xl mb-2 ${TEXT_PRIMARY}`}>{product.name}</h4>
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className={`text-sm ${TEXT_SECONDARY}`}>({product.rating})</span>
                                            </div>
                                            <div className="flex items-center justify-between mb-5">
                                                <span className={`text-3xl font-extrabold ${TEXT_PRIMARY}`}>{product.price}</span>
                                            </div>
                                            <button className={`w-full bg-gradient-to-r ${PURPLE_GRADIENT} text-white py-3.5 rounded-xl font-bold hover:from-indigo-600 hover:to-pink-600 transition-all shadow-lg shadow-indigo-500/30`}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-3 mt-12">
                                    <button className={`w-12 h-12 border border-gray-700 rounded-xl hover:bg-gray-700 flex items-center justify-center ${TEXT_SECONDARY} hover:${TEXT_PRIMARY} transition-colors`}>1</button>
                                    <button className={`w-12 h-12 bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center shadow-lg shadow-indigo-500/30`}>2</button>
                                    <button className={`w-12 h-12 border border-gray-700 rounded-xl hover:bg-gray-700 flex items-center justify-center ${TEXT_SECONDARY} hover:${TEXT_PRIMARY} transition-colors`}>3</button>
                                    <button className={`w-12 h-12 border border-gray-700 rounded-xl hover:bg-gray-700 flex items-center justify-center ${TEXT_SECONDARY} hover:${TEXT_PRIMARY} transition-colors`}>4</button>
                                </div>
                            </div>
                        </div>

                        {/* Featured Section */}
                        <section className="mt-16">
                            <h3 className={`text-3xl font-extrabold mb-8 ${TEXT_PRIMARY}`}>Exclusive Deals</h3>
                            <div className="grid grid-cols-4 gap-6">
                                {featuredProducts.map((product) => (
                                    <div key={product.id} className={`bg-[${BG_SURFACE}] border border-gray-700 rounded-xl p-5 hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow cursor-pointer`}>
                                        <div className="w-full h-36 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg mb-4 flex items-center justify-center text-5xl shadow-inner border border-blue-900/50">
                                            {product.image}
                                        </div>
                                        <h4 className={`font-semibold text-lg mb-1 ${TEXT_PRIMARY}`}>{product.name}</h4>
                                        <p className={`text-xl font-bold text-pink-500`}>{product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mt-20 border-t border-gray-800 pt-10">
                            <div className="grid grid-cols-4 gap-12 mb-10">
                                {[1, 2, 3, 4].map((col) => (
                                    <div key={col} className="space-y-4">
                                        <h5 className={`font-bold text-lg ${TEXT_PRIMARY}`}>Company</h5>
                                        <ul className="space-y-3">
                                            <li><a href="#" className={`text-gray-500 hover:text-indigo-400 text-sm transition-colors`}>About Us</a></li>
                                            <li><a href="#" className={`text-gray-500 hover:text-indigo-400 text-sm transition-colors`}>Contact</a></li>
                                            <li><a href="#" className={`text-gray-500 hover:text-indigo-400 text-sm transition-colors`}>Careers</a></li>
                                            <li><a href="#" className={`text-gray-500 hover:text-indigo-400 text-sm transition-colors`}>Blog</a></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-800 pt-8 flex items-center justify-between">
                                <p className={`text-gray-500 text-sm`}>© 2024 ShopHub. All rights reserved. Designed with ✨</p>
                                <div className="flex gap-4">
                                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                        <div key={social} className={`w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-500 transition-colors`}>
                                            <span className="text-lg">🔗</span> {/* Using a generic link emoji for social */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}