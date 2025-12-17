/**
 * Description placeholder
 *
 * @export
 * @returns {*} 
 */
export function EcommerceWireframe() {
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
                            <span>Frame 4</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                            <span>Frame 3</span>
                        </div>
                        <div className="ml-6 space-y-1">
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>30Days.ai</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>Scroll The Days</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>You know how ?</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>we make you product in just 30d</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>Frontend Developer</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>2025 Aug - Present</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>image 7</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>image 6</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>image 5</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                            </svg>
                            <span>Frame 2</span>
                        </div>
                        <div className="ml-6 space-y-1">
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>A dynamic menu management system</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <span>Real-Time Time-Based Menu Manage</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1.5 text-white hover:bg-gray-800 rounded cursor-pointer">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                </svg>
                                <span>Rectangle 26</span>
                            </div>
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
                        <h1 className="text-xl font-bold text-white">E-commerce Wireframe</h1>
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
                <div className="flex-1 overflow-auto bg-black p-8">
                    <div className="space-y-6">
                        {/* Header Navigation */}
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-8 bg-gray-800 rounded"></div>
                                    <div className="flex gap-2">
                                        <div className="w-16 h-6 bg-gray-800 rounded"></div>
                                        <div className="w-16 h-6 bg-gray-800 rounded"></div>
                                        <div className="w-16 h-6 bg-gray-800 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                                    <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                                    <div className="w-20 h-8 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                            <div className="w-full h-10 bg-gray-800 rounded"></div>
                        </div>

                        {/* Hero Banner */}
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-4">
                            <div className="w-full h-48 bg-gray-900 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-64 h-8 bg-gray-800 rounded mx-auto mb-2"></div>
                                    <div className="w-48 h-6 bg-gray-800 rounded mx-auto mb-4"></div>
                                    <div className="w-32 h-10 bg-gray-700 rounded mx-auto"></div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex gap-6">
                            {/* Sidebar Filters */}
                            <div className="w-64 border-2 border-dashed border-gray-700 rounded-lg p-4">
                                <div className="space-y-4">
                                    <div>
                                        <div className="w-32 h-6 bg-gray-800 rounded mb-3"></div>
                                        <div className="space-y-2">
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-24 h-6 bg-gray-800 rounded mb-3"></div>
                                        <div className="space-y-2">
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-28 h-6 bg-gray-800 rounded mb-3"></div>
                                        <div className="w-full h-20 bg-gray-800 rounded"></div>
                                    </div>
                                    <div>
                                        <div className="w-20 h-6 bg-gray-800 rounded mb-3"></div>
                                        <div className="space-y-2">
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                            <div className="w-full h-4 bg-gray-800 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="flex-1 border-2 border-dashed border-gray-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-40 h-6 bg-gray-800 rounded"></div>
                                    <div className="flex gap-2">
                                        <div className="w-20 h-8 bg-gray-800 rounded"></div>
                                        <div className="w-20 h-8 bg-gray-800 rounded"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="border-2 border-dashed border-gray-700 rounded-lg p-3">
                                            <div className="w-full h-40 bg-gray-900 rounded mb-3"></div>
                                            <div className="w-3/4 h-4 bg-gray-800 rounded mb-2"></div>
                                            <div className="w-1/2 h-4 bg-gray-800 rounded mb-2"></div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-16 h-4 bg-gray-800 rounded"></div>
                                                <div className="w-12 h-4 bg-gray-800 rounded"></div>
                                            </div>
                                            <div className="w-full h-8 bg-gray-700 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-2 mt-6">
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Section */}
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-4">
                            <div className="w-48 h-6 bg-gray-800 rounded mb-4"></div>
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="border-2 border-dashed border-gray-700 rounded-lg p-3">
                                        <div className="w-full h-32 bg-gray-900 rounded mb-2"></div>
                                        <div className="w-2/3 h-4 bg-gray-800 rounded mb-1"></div>
                                        <div className="w-1/2 h-3 bg-gray-800 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6">
                            <div className="grid grid-cols-4 gap-6 mb-6">
                                {[1, 2, 3, 4].map((col) => (
                                    <div key={col} className="space-y-2">
                                        <div className="w-24 h-5 bg-gray-800 rounded mb-3"></div>
                                        <div className="w-full h-3 bg-gray-800 rounded"></div>
                                        <div className="w-full h-3 bg-gray-800 rounded"></div>
                                        <div className="w-full h-3 bg-gray-800 rounded"></div>
                                        <div className="w-full h-3 bg-gray-800 rounded"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                <div className="w-32 h-4 bg-gray-800 rounded"></div>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                        </div>
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

            {/* Figma Toolbar - Bottom Center */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-700">
                {/* Cursor (Selected - Purple) */}
                <button className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-600"></div>

                {/* Frame */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <rect x="7" y="7" width="10" height="10" />
                    </svg>
                </button>

                {/* Rectangle */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                </button>

                {/* Ellipse */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </button>

                {/* Line */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-600"></div>

                {/* Text Tool */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <span className="text-lg font-bold">T</span>
                </button>

                {/* Pen Tool */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                        <path d="M2 2l7.586 7.586" />
                    </svg>
                </button>
                <div className="w-px h-6 bg-gray-600"></div>

                {/* Hand Tool */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 11v-1a2 2 0 0 0-2-2h-1M9 10V9a2 2 0 0 0-2-2H6M14 10V8a2 2 0 0 0-2-2h-1M10 14v-1a2 2 0 0 0-2-2H7M18 18v-5a2 2 0 0 0-2-2h-2" />
                    </svg>
                </button>

                {/* Comment */}
                <button className="w-9 h-9 rounded-lg hover:bg-gray-800 flex items-center justify-center text-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
