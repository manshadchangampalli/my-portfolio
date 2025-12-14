export function FigJamDesign() {
    return (
        <div className="w-full h-full bg-black p-8 overflow-auto rounded-[10px] relative">
            {/* FigJam Logo */}
            <div className="mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F</span>
                </div>
                <h1 className="text-3xl font-bold text-white">FigJam</h1>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-20">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* User Personas */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">User Personas</h2>
                        <div className="flex gap-4">
                            <div className="bg-yellow-900/30 border border-yellow-700/50 p-5 rounded-lg">
                                <div className="w-16 h-16 bg-yellow-600 rounded-full mb-2"></div>
                                <p className="font-semibold text-base text-white">Rassa</p>
                                <p className="text-sm text-gray-300">Paulina-Peris</p>
                                <p className="text-sm text-gray-300">Lindley Nori K</p>
                            </div>
                            <div className="bg-blue-900/30 border border-blue-700/50 p-5 rounded-lg">
                                <div className="w-16 h-16 bg-blue-600 rounded-full mb-2"></div>
                                <p className="font-semibold text-base text-white">Sarah</p>
                                <p className="text-sm text-gray-300">Family Ordering</p>
                                <p className="text-sm text-gray-300">Long wait-times</p>
                                <p className="text-sm text-gray-300">Confusing menus</p>
                            </div>
                        </div>
                    </div>

                    {/* Problem Statement */}
                    <div className="bg-yellow-900/30 border border-yellow-700/50 p-5 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-white">Problem Statement</h3>
                        <p className="text-sm text-gray-300">
                            Customers struggle to order food quickly because the existing systems are slow, confusing, and don&apos;t show real-time availability.
                        </p>
                    </div>

                    {/* Assumptions */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">Assumption</h2>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="bg-yellow-900/30 border border-yellow-700/50 p-3 rounded text-xs text-center text-white">User assumption</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-xs text-center text-white">Business assumption</div>
                            <div className="bg-blue-900/30 border border-blue-700/50 p-3 rounded text-xs text-center text-white">User assumption</div>
                            <div className="bg-gray-800 border-2 border-gray-600 p-3 rounded text-xs text-center text-white">Case points</div>
                            <div className="bg-yellow-900/30 border border-yellow-700/50 p-3 rounded text-xs text-center text-white">Custom assumption</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-xs text-center text-white">Technical assumption</div>
                            <div className="bg-yellow-900/30 border border-yellow-700/50 p-3 rounded text-xs text-center text-white">Follows & exemptions</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-xs text-center text-white">Payment success page</div>
                        </div>
                    </div>

                    {/* User Flow */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">User Flow</h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Home</div>
                                <span className="text-lg text-white">→</span>
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Menu</div>
                                <span className="text-lg text-white">→</span>
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Item Details</div>
                                <span className="text-lg text-white">→</span>
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Customize</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Cart</div>
                                <span className="text-lg text-white">→</span>
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Login/Signup</div>
                                <span className="text-lg text-white">→</span>
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Address</div>
                                <span className="text-lg text-white">→</span>
                                <div className="bg-blue-900/30 border border-blue-700/50 px-5 py-2 rounded text-sm font-medium text-white">Payments</div>
                            </div>
                        </div>
                    </div>

                    {/* Competitor Analysis */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">Competitor Analysis</h2>
                        <div className="border-2 border-gray-700 rounded-lg overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th className="p-3 text-left font-semibold text-white">Competitor</th>
                                        <th className="p-3 text-left font-semibold text-white">Talabat</th>
                                        <th className="p-3 text-left font-semibold text-white">Zomato</th>
                                        <th className="p-3 text-left font-semibold text-white">Deliveroo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 font-semibold text-white">Validation</td>
                                        <td className="p-3 text-gray-300">Large menus</td>
                                        <td className="p-3 text-gray-300">Urgent delivery</td>
                                        <td className="p-3 text-gray-300">Fast out delivery</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Customer Journey Map */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">Customer Journey Map</h2>
                        <div className="flex items-start gap-2 mb-5">
                            <div className="bg-yellow-900/30 border border-yellow-700/50 px-5 py-2 rounded text-sm font-medium text-white">Discover</div>
                            <span className="text-lg text-white">→</span>
                            <div className="bg-yellow-900/30 border border-yellow-700/50 px-5 py-2 rounded text-sm font-medium text-white">Browse Menu</div>
                            <span className="text-lg text-white">→</span>
                            <div className="bg-yellow-900/30 border border-yellow-700/50 px-5 py-2 rounded text-sm font-medium text-white">Customize</div>
                            <span className="text-lg text-white">→</span>
                            <div className="bg-yellow-900/30 border border-yellow-700/50 px-5 py-2 rounded text-sm font-medium text-white">Add to Cart</div>
                            <span className="text-lg text-white">→</span>
                            <div className="bg-yellow-900/30 border border-yellow-700/50 px-5 py-2 rounded text-sm font-medium text-white">Delivery</div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 text-xs">
                            <div className="space-y-1">
                                <div className="bg-yellow-900/30 border border-yellow-700/50 p-2 rounded text-white">See bars</div>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Pre-order</div>
                            </div>
                            <div className="space-y-1">
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Suggestions</div>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Less options</div>
                            </div>
                            <div className="space-y-1">
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Select address</div>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Re-order</div>
                            </div>
                            <div className="space-y-1">
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Item viewer</div>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-white">Address</div>
                            </div>
                            <div className="space-y-1">
                                <div className="bg-yellow-900/30 border border-yellow-700/50 p-2 rounded text-white">Track order</div>
                            </div>
                        </div>
                    </div>

                    {/* Pain Points */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">Pain Points</h2>
                        <div className="space-y-2">
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-sm text-white">Menu has too many items, hard to find food</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-sm text-white">No photo of dishes + confusion</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-sm text-white">Long checkout process</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-sm text-white">No real-time updates</div>
                            <div className="bg-pink-900/30 border border-pink-700/50 p-3 rounded text-sm text-white">Special instructions ignored</div>
                        </div>
                    </div>

                    {/* User Flow Diagram - Competitor Analysis */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">User Flow Diagram</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base text-white">Talabat</h4>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-xs text-white">Confusing UI</div>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-xs text-white">Slow response</div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base text-white">Zomato</h4>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-xs text-white">Great UI, High charges</div>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-xs text-white">No real-time tracking</div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base text-white">Deliveroo</h4>
                                <div className="bg-pink-900/30 border border-pink-700/50 p-2 rounded text-xs text-white">No loyalty program</div>
                            </div>
                        </div>
                    </div>

                    {/* Validation Sprint */}
                    <div>
                        <h2 className="text-xl font-bold mb-5 text-white">Validation Sprint</h2>
                        <div className="border-2 border-gray-700 rounded-lg overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th className="p-3 text-left font-semibold text-white">Assumption</th>
                                        <th className="p-3 text-left font-semibold text-white">What tested</th>
                                        <th className="p-3 text-left font-semibold text-white">What learned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 text-gray-300">Users want simple checkout</td>
                                        <td className="p-3 text-gray-300">Interviewing</td>
                                        <td className="p-3 text-gray-300">Payment must 1 Click</td>
                                    </tr>
                                    <tr className="bg-gray-900/50">
                                        <td className="p-3 text-gray-300">Users browse long menus</td>
                                        <td className="p-3 text-gray-300">Running prototype</td>
                                        <td className="p-3 text-gray-300">Rating category</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-gray-300">Users want fast delivery</td>
                                        <td className="p-3 text-gray-300">Surveys</td>
                                        <td className="p-3 text-gray-300">Urgent delivery insights</td>
                                    </tr>
                                    <tr className="bg-gray-900/50">
                                        <td className="p-3 text-gray-300">Users want fast delivery</td>
                                        <td className="p-3 text-gray-300">Surveys</td>
                                        <td className="p-3 text-gray-300">Highest priority</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toolbar - Bottom Center */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-200">
                {/* Cursor (Selected - Purple) */}
                <button className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="white">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Hand */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path d="M18 11v-1a2 2 0 0 0-2-2h-1M9 10V9a2 2 0 0 0-2-2H6M14 10V8a2 2 0 0 0-2-2h-1M10 14v-1a2 2 0 0 0-2-2H7M18 18v-5a2 2 0 0 0-2-2h-2" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-600"></div>

                {/* Marker/Pen */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                        <path d="M2 2l7.586 7.586" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Sticky Notes */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#ff6b9d">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-4v-4H7V9h4V5h4v4h4v4z" />
                    </svg>
                </button>

                {/* Square */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                        />
                    </svg>
                </button>

                {/* Curved Arrow and Circle */}
                <div className="">
                    <button className="w-7 h-7 rounded hover:bg-gray-100 flex items-center justify-center">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                    </button>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Text Tool */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <span className="text-lg font-bold">T</span>
                </button>

                {/* Frame */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                        />
                        <rect
                            x="7"
                            y="7"
                            width="10"
                            height="10"
                        />
                    </svg>
                </button>

                {/* Grid */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <rect
                            x="3"
                            y="3"
                            width="7"
                            height="7"
                        />
                        <rect
                            x="14"
                            y="3"
                            width="7"
                            height="7"
                        />
                        <rect
                            x="3"
                            y="14"
                            width="7"
                            height="7"
                        />
                        <rect
                            x="14"
                            y="14"
                            width="7"
                            height="7"
                        />
                    </svg>
                </button>

                {/* Person with Pin */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <circle
                            cx="12"
                            cy="8"
                            r="3"
                        />
                        <path d="M12 14v6" />
                        <path d="M8 20h8" />
                        <path d="M12 20v-2" />
                    </svg>
                </button>

                {/* Speech Bubble */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-300"></div>

                {/* Grouped Shapes */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <circle
                            cx="9"
                            cy="9"
                            r="2"
                        />
                        <rect
                            x="5"
                            y="5"
                            width="4"
                            height="4"
                            rx="1"
                        />
                        <path d="M19 5h-2v2h2V5z" />
                        <path d="M19 19h-2v2h2v-2z" />
                    </svg>
                </button>

                {/* Plus in Circle */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-900">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                        />
                        <path d="M12 8v8M8 12h8" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
