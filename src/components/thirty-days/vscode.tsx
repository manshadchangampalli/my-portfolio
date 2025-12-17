import React from 'react';
import {
    Files, Search, GitBranch, Bug, Package,
    ChevronRight, ChevronDown, X,
    Circle, Wifi, Bell, Settings, User
} from 'lucide-react';

const VSCodeShowcaseMonokai = () => {
    return (
        // Base: Monokai Dark Background
        <div className="h-full w-full bg-[#272822] text-gray-300 flex flex-col font-mono text-sm">

            {/* Title Bar */}
            <div className="bg-[#3e3e3e] h-9 flex items-center justify-between px-2 border-b border-[#1e1e1e]">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 ml-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>
                    {/* Title text dark grey/white */}
                    <span className="text-xs text-gray-400 ml-4">Restaurant App - Visual Studio Code</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                    <Bell className="w-4 h-4" />
                    <Settings className="w-4 h-4" />
                    <User className="w-4 h-4" />
                </div>
            </div>

            {/* Menu Bar */}
            <div className="bg-[#3e3e3e] h-9 flex items-center px-2 text-xs border-b border-[#1e1e1e]">
                <div className="flex gap-4 ml-2">
                    <span className="text-gray-300">File</span>
                    <span className="text-gray-400">Edit</span>
                    <span className="text-gray-400">Selection</span>
                    <span className="text-gray-400">View</span>
                    <span className="text-gray-400">Go</span>
                    <span className="text-gray-400">Run</span>
                    <span className="text-gray-400">Terminal</span>
                    <span className="text-gray-400">Help</span>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Activity Bar - Monokai Color */}
                <div className="bg-[#3e3e3e] w-12 flex flex-col items-center py-4 gap-6 border-r border-[#1e1e1e]">
                    {/* Active icon white/light */}
                    <Files className="w-6 h-6 text-white" />
                    <Search className="w-6 h-6 text-gray-500" />
                    <GitBranch className="w-6 h-6 text-gray-500" />
                    <Bug className="w-6 h-6 text-gray-500" />
                    <Package className="w-6 h-6 text-gray-500" />
                </div>

                {/* Sidebar - Monokai Background */}
                <div className="bg-[#383838] w-[10%] h-full flex flex-col border-r border-[#1e1e1e]">
                    <div className="p-3 text-xs uppercase text-gray-500 font-semibold">Explorer</div>

                    <div className="flex-1 overflow-auto">
                        {/* Project Tree */}
                        <div className="mb-4">
                            <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                                <span className="text-xs font-semibold text-gray-300">RESTAURANT-APP</span>
                            </div>

                            <div className="ml-4 mt-1 space-y-0.5">
                                <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                    <span className="text-xs text-gray-400">📁 src</span>
                                </div>

                                <div className="ml-4 space-y-0.5">
                                    <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                        <span className="text-xs text-gray-400">📁 components</span>
                                    </div>

                                    <div className="ml-4 space-y-0.5">
                                        <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                            <span className="text-xs ml-4 text-gray-400">⚛️ Menu.tsx</span>
                                        </div>
                                        {/* Active File Background - Monokai */}
                                        <div className="flex items-center gap-1 bg-[#49483e] px-2 py-1 rounded">
                                            <span className="text-xs ml-4 text-white">⚛️ Cart.tsx</span>
                                        </div>
                                        <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                            <span className="text-xs ml-4 text-gray-400">⚛️ Header.tsx</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                        <ChevronRight className="w-4 h-4 text-gray-500" />
                                        <span className="text-xs text-gray-400">📁 pages</span>
                                    </div>

                                    <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                        <ChevronRight className="w-4 h-4 text-gray-500" />
                                        <span className="text-xs text-gray-400">📁 utils</span>
                                    </div>

                                    <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                        <span className="text-xs ml-4 text-gray-400">⚛️ App.tsx</span>
                                    </div>

                                    <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                        <span className="text-xs ml-4 text-gray-400">📄 index.css</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                    <span className="text-xs text-gray-400">📁 public</span>
                                </div>

                                <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                    <span className="text-xs ml-4 text-gray-400">📄 package.json</span>
                                </div>

                                <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                    <span className="text-xs ml-4 text-gray-400">📄 tsconfig.json</span>
                                </div>

                                <div className="flex items-center gap-1 hover:bg-[#49483e] px-2 py-1 rounded cursor-pointer">
                                    <span className="text-xs ml-4 text-gray-400">📄 README.md</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col">
                    {/* Tabs - Monokai Inactive/Active */}
                    <div className="bg-[#3e3e3e] h-9 flex items-center border-b border-[#1e1e1e]">
                        <div className="flex">
                            {/* Active Tab: Editor Background */}
                            <div className="bg-[#272822] px-4 h-full flex items-center gap-2 border-r border-[#1e1e1e]">
                                <span className="text-xs text-gray-300">Cart.tsx</span>
                                <X className="w-3 h-3 text-gray-500" />
                            </div>
                            {/* Inactive Tab: Activity Bar/Sidebar Color */}
                            <div className="px-4 h-full flex items-center gap-2 bg-[#383838]">
                                <span className="text-xs text-gray-500">Menu.tsx</span>
                                <Circle className="w-2 h-2 fill-yellow-500 text-yellow-500" /> {/* Changed color for visibility */}
                            </div>
                        </div>
                    </div>

                    {/* Editor Content - Monokai Syntax Highlighting */}
                    <div className="flex-1 overflow-auto bg-[#272822] p-4">
                        <div className="font-mono text-sm space-y-1">
                            {/* Line numbers darker gray */}
                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">1</span>
                                {/* Keywords (import, from, return) - Pink/Purple */}
                                <span className="text-[#f92672]">import</span>
                                <span className="text-gray-300"> React </span>
                                <span className="text-[#f92672]">from</span>
                                {/* Strings ('react') - Yellow/Orange */}
                                <span className="text-[#e6db74]"> &apos;react&apos;</span>
                                <span className="text-gray-300">;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">2</span>
                                <span className="text-[#f92672]">import</span>
                                <span className="text-gray-300"> {'{ ShoppingCart, Plus, Minus }'} </span>
                                <span className="text-[#f92672]">from</span>
                                <span className="text-[#e6db74]"> &apos;lucide-react&apos;</span>
                                <span className="text-gray-300">;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">3</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">4</span>
                                {/* Keywords (interface, const) - Light Blue/Teal */}
                                <span className="text-[#66d9ef]">interface</span>
                                {/* Type/Class Name (CartItem, React, FC) - Green/Teal */}
                                <span className="text-[#a6e22e]"> CartItem </span>
                                <span className="text-gray-300">{'{'}</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">5</span>
                                {/* Property/Variable Name (id, name, items) - Light Yellow */}
                                <span className="text-[#fd971f] ml-6">id</span>
                                <span className="text-gray-300">: </span>
                                {/* Type primitives (number, string) - Light Blue/Teal */}
                                <span className="text-[#66d9ef]">number</span>
                                <span className="text-gray-300">;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">6</span>
                                <span className="text-[#fd971f] ml-6">name</span>
                                <span className="text-gray-300">: </span>
                                <span className="text-[#66d9ef]">string</span>
                                <span className="text-gray-300">;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">7</span>
                                <span className="text-[#fd971f] ml-6">price</span>
                                <span className="text-gray-300">: </span>
                                <span className="text-[#66d9ef]">number</span>
                                <span className="text-gray-300">;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">8</span>
                                <span className="text-[#fd971f] ml-6">quantity</span>
                                <span className="text-gray-300">: </span>
                                <span className="text-[#66d9ef]">number</span>
                                <span className="text-gray-300">;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">9</span>
                                <span className="text-gray-300">{'}'}</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">10</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">11</span>
                                <span className="text-[#66d9ef]">const</span>
                                {/* Function Name (Cart, useState, map) - Yellow */}
                                <span className="text-[#e6db74]"> Cart</span>
                                <span className="text-gray-300">: </span>
                                <span className="text-[#a6e22e]">React</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-[#a6e22e]">FC</span>
                                <span className="text-gray-300"> = () </span>
                                <span className="text-[#f92672]">=&gt;</span>
                                <span className="text-gray-300"> {'{'}</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">12</span>
                                <span className="text-[#66d9ef] ml-6">const</span>
                                <span className="text-gray-300"> [</span>
                                <span className="text-[#fd971f]">items</span>
                                <span className="text-gray-300">, </span>
                                <span className="text-[#fd971f]">setItems</span>
                                <span className="text-gray-300">] = </span>
                                <span className="text-[#a6e22e]">React</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-[#e6db74]">useState</span>
                                <span className="text-gray-300">&lt;</span>
                                <span className="text-[#a6e22e]">CartItem</span>
                                <span className="text-gray-300">[]&gt;([]);</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">13</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">14</span>
                                <span className="text-[#f92672] ml-6">return</span>
                                <span className="text-gray-300"> (</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">15</span>
                                <span className="text-gray-300 ml-12">&lt;</span>
                                {/* HTML Tags (div, h2) - Pink/Red */}
                                <span className="text-[#f92672]">div</span>
                                {/* JSX/HTML Attributes (className, key) - Green */}
                                <span className="text-[#a6e22e]"> className</span>
                                <span className="text-gray-300">=</span>
                                {/* Attribute values - Yellow */}
                                <span className="text-[#e6db74]">&quot;cart-container&quot;</span>
                                <span className="text-gray-300">&gt;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">16</span>
                                <span className="text-gray-300 ml-16">&lt;</span>
                                <span className="text-[#f92672]">h2</span>
                                <span className="text-gray-300">&gt;Shopping Cart&lt;/</span>
                                <span className="text-[#f92672]">h2</span>
                                <span className="text-gray-300">&gt;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">17</span>
                                <span className="text-gray-300 ml-16">{'{'}</span>
                                <span className="text-[#fd971f]">items</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-[#e6db74]">map</span>
                                <span className="text-gray-300">(</span>
                                <span className="text-[#fd971f]">item</span>
                                <span className="text-gray-300"> </span>
                                <span className="text-[#f92672]">=&gt;</span>
                                <span className="text-gray-300"> (</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">18</span>
                                <span className="text-gray-300 ml-20">&lt;</span>
                                <span className="text-[#f92672]">div</span>
                                <span className="text-[#a6e22e]"> key</span>
                                <span className="text-gray-300">={'{'}</span>
                                <span className="text-[#fd971f]">item</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-[#fd971f]">id</span>
                                <span className="text-gray-300">{'}'}&gt;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">19</span>
                                <span className="text-gray-300 ml-24">{'{'}</span>
                                <span className="text-[#fd971f]">item</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-[#fd971f]">name</span>
                                <span className="text-gray-300">{'}'}</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">20</span>
                                <span className="text-gray-300 ml-20">&lt;/</span>
                                <span className="text-[#f92672]">div</span>
                                <span className="text-gray-300">&gt;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">21</span>
                                <span className="text-gray-300 ml-16">))</span>
                                <span className="text-gray-300">{'}'}</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">22</span>
                                <span className="text-gray-300 ml-12">&lt;/</span>
                                <span className="text-[#f92672]">div</span>
                                <span className="text-gray-300">&gt;</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">23</span>
                                <span className="text-gray-300 ml-6">);</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">24</span>
                                <span className="text-gray-300">{'}'}</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">25</span>
                            </div>

                            <div className="flex">
                                <span className="w-12 text-right text-gray-600 mr-4 select-none">26</span>
                                <span className="text-[#f92672]">export default</span>
                                <span className="text-gray-300"> Cart;</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Bar - Monokai */}
                    {/* Status bar uses a darker, more muted color */}
                    <div className="bg-[#49483e] h-6 flex items-center justify-between px-4 text-xs text-white">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <GitBranch className="w-3 h-3" />
                                <span>main</span>
                            </div>
                            <span>0 ✗ 0 ⚠</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Ln 18, Col 25</span>
                            <span>Spaces: 2</span>
                            <span>UTF-8</span>
                            <span>TypeScript React</span>
                            <Wifi className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VSCodeShowcaseMonokai;