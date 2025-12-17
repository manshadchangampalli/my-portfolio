import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight, Activity, ShoppingCart, Eye, Clock, Menu, Bell, Search, Settings, ChevronDown, LayoutDashboard, Package, FileText, MessageSquare, LogOut } from 'lucide-react';

const Dashboard = () => {
    const [timeRange, setTimeRange] = useState('7d');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Dummy data
    const stats = [
        { label: 'Total Revenue', value: '$45,231', change: '+20.1%', trend: 'up', icon: DollarSign, color: 'bg-emerald-500/10 text-emerald-500', border: 'border-emerald-500/20' },
        { label: 'Active Users', value: '2,845', change: '+15.3%', trend: 'up', icon: Users, color: 'bg-blue-500/10 text-blue-500', border: 'border-blue-500/20' },
        { label: 'Total Orders', value: '1,234', change: '-5.2%', trend: 'down', icon: ShoppingCart, color: 'bg-purple-500/10 text-purple-500', border: 'border-purple-500/20' },
        { label: 'Page Views', value: '89,542', change: '+12.5%', trend: 'up', icon: Eye, color: 'bg-orange-500/10 text-orange-500', border: 'border-orange-500/20' },
    ];

    const revenueData = [
        { month: 'Jan', revenue: 4200, orders: 145 },
        { month: 'Feb', revenue: 3800, orders: 132 },
        { month: 'Mar', revenue: 5100, orders: 178 },
        { month: 'Apr', revenue: 4600, orders: 156 },
        { month: 'May', revenue: 6200, orders: 203 },
        { month: 'Jun', revenue: 5800, orders: 189 },
    ];

    const topProducts = [
        { name: 'Premium Subscription', sales: 432, revenue: '$12,960', trend: 'up' },
        { name: 'Basic Plan', sales: 321, revenue: '$6,420', trend: 'up' },
        { name: 'Enterprise License', sales: 89, revenue: '$17,800', trend: 'down' },
        { name: 'Add-on Package', sales: 245, revenue: '$4,900', trend: 'up' },
    ];

    const recentActivity = [
        { action: 'New user registration', user: 'john@example.com', time: '2 min ago', type: 'user' },
        { action: 'Order #1234 completed', user: 'sarah@example.com', time: '15 min ago', type: 'order' },
        { action: 'Payment received', user: '$599', time: '1 hour ago', type: 'payment' },
        { action: 'New review posted', user: 'mike@example.com', time: '2 hours ago', type: 'review' },
    ];

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: Package, label: 'Products', active: false },
        { icon: ShoppingCart, label: 'Orders', active: false },
        { icon: Users, label: 'Customers', active: false },
        { icon: FileText, label: 'Reports', active: false },
        { icon: MessageSquare, label: 'Messages', badge: '3', active: false },
        { icon: Settings, label: 'Settings', active: false },
    ];

    const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

    return (
        <div className="min-h-screen bg-gray-950 flex">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col`}>
                <div className="p-6 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        {sidebarOpen && <span className="text-xl font-bold text-white">AdminPro</span>}
                    </div>
                </div>

                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {sidebarOpen && (
                                            <>
                                                <span className="flex-1">{item.label}</span>
                                                {item.badge && (
                                                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        {sidebarOpen && <span>Logout</span>}
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                <Menu className="w-5 h-5 text-gray-400" />
                            </button>
                            <div className="relative">
                                <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
                                <Bell className="w-5 h-5 text-gray-400" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                            <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
                                <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-white">Admin User</p>
                                    <p className="text-xs text-gray-500">admin@company.com</p>
                                </div>
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-auto p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                            <p className="text-gray-400">Monitor your business metrics and performance</p>
                        </div>

                        {/* Time Range Selector */}
                        <div className="mb-6 flex gap-2">
                            {['24h', '7d', '30d', '90d'].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => setTimeRange(range)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${timeRange === range
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                        }`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className={`bg-gray-900 border ${stat.border} rounded-xl p-6 hover:border-opacity-50 transition-all`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`${stat.color} p-3 rounded-lg`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                                                }`}>
                                                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                                {stat.change}
                                            </div>
                                        </div>
                                        <h3 className="text-gray-500 text-sm mb-1">{stat.label}</h3>
                                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            {/* Revenue Chart */}
                            <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">Revenue Overview</h2>
                                        <p className="text-sm text-gray-500">Monthly revenue performance</p>
                                    </div>
                                    <BarChart3 className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="h-64 flex items-end justify-between gap-4">
                                    {revenueData.map((item, idx) => (
                                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                                            <div className="w-full bg-gray-800 rounded-t-lg relative" style={{ height: '100%' }}>
                                                <div
                                                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg absolute bottom-0 transition-all group-hover:from-blue-500 group-hover:to-blue-300"
                                                    style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-500 font-medium">{item.month}</span>
                                            <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${item.revenue}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Top Products */}
                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">Top Products</h2>
                                        <p className="text-sm text-gray-500">Best performers</p>
                                    </div>
                                    <TrendingUp className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="space-y-4">
                                    {topProducts.map((product, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-white mb-1">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.sales} sales</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-white">{product.revenue}</p>
                                                <p className={`text-xs ${product.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                                                    {product.trend === 'up' ? '↑' : '↓'}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Recent Activity */}
                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">Recent Activity</h2>
                                        <p className="text-sm text-gray-500">Latest system events</p>
                                    </div>
                                    <Activity className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="space-y-4">
                                    {recentActivity.map((activity, idx) => (
                                        <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-800 last:border-0">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                            <div className="flex-1">
                                                <p className="text-sm text-white mb-1">{activity.action}</p>
                                                <p className="text-xs text-gray-500 mb-1">{activity.user}</p>
                                                <div className="flex items-center gap-1 text-xs text-gray-600">
                                                    <Clock className="w-3 h-3" />
                                                    {activity.time}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Performance Metrics */}
                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">Performance Metrics</h2>
                                        <p className="text-sm text-gray-500">Key indicators</p>
                                    </div>
                                    <BarChart3 className="w-5 h-5 text-gray-600" />
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400">Conversion Rate</span>
                                            <span className="text-sm font-bold text-white">3.24%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{ width: '65%' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400">Average Order Value</span>
                                            <span className="text-sm font-bold text-white">$127.50</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{ width: '78%' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400">Customer Satisfaction</span>
                                            <span className="text-sm font-bold text-white">4.8/5.0</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{ width: '96%' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-400">Response Time</span>
                                            <span className="text-sm font-bold text-white">1.2s</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full" style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;