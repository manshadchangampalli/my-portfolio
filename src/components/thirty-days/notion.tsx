import { ChevronRight, Search } from 'lucide-react';

const RestaurantRoadmap = () => {

    const stages = [
        {
            name: 'Planning',
            count: 2,
            color: 'bg-yellow-900/50 border-yellow-700',
            projects: [
                {
                    icon: '🍽️',
                    title: 'Menu Management System',
                    priority: 'High',
                    lever: 'Lever 1: Core Platform',
                    owner: 'Sarah Chen'
                },
                {
                    icon: '📱',
                    title: 'Mobile App Design',
                    priority: 'High',
                    lever: 'Lever 1: Core Platform',
                    owner: 'Sarah Chen'
                }
            ]
        },
        {
            name: 'Needs Design',
            count: 1,
            color: 'bg-orange-900/50 border-orange-700',
            projects: [
                {
                    icon: '💳',
                    title: 'Payment Integration',
                    priority: 'High',
                    lever: 'Lever 2: Payments & Checkout',
                    owner: 'Mike Johnson'
                }
            ]
        },
        {
            name: 'In Design',
            count: 2,
            color: 'bg-blue-900/50 border-blue-700',
            projects: [
                {
                    icon: '🛒',
                    title: 'Shopping Cart Flow',
                    priority: 'Med',
                    lever: 'Lever 2: Payments & Checkout',
                    owner: 'Emma Davis'
                },
                {
                    icon: '🔔',
                    title: 'Order Notifications',
                    priority: 'Med',
                    lever: 'Lever 3: Customer Experience',
                    owner: 'Emma Davis'
                }
            ]
        },
        {
            name: 'In Development',
            count: 1,
            color: 'bg-purple-900/50 border-purple-700',
            projects: [
                {
                    icon: '🚚',
                    title: 'Delivery Tracking',
                    priority: 'High',
                    lever: 'Lever 3: Customer Experience',
                    owner: 'Alex Rodriguez'
                }
            ]
        },
        {
            name: 'Testing',
            count: 1,
            color: 'bg-teal-900/50 border-teal-700',
            projects: [
                {
                    icon: '⭐',
                    title: 'Reviews & Ratings',
                    priority: 'Low',
                    lever: 'Lever 4: Engagement',
                    owner: 'Lisa Park'
                }
            ]
        },
        {
            name: 'Launched',
            count: 2,
            color: 'bg-green-900/50 border-green-700',
            projects: [
                {
                    icon: '👤',
                    title: 'User Authentication',
                    priority: 'High',
                    lever: 'Lever 1: Core Platform',
                    owner: 'James Wilson'
                },
                {
                    icon: '🔍',
                    title: 'Restaurant Search',
                    priority: 'High',
                    lever: 'Lever 4: Engagement',
                    owner: 'James Wilson'
                }
            ]
        }
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High': return 'bg-red-900/30 text-red-300';
            case 'Med': return 'bg-yellow-900/30 text-yellow-300';
            case 'Low': return 'bg-blue-900/30 text-blue-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 px-8 pt-16">
            <div className="">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        🍕 Restaurant E-Commerce Product Roadmap
                    </h1>
                    <div className="space-y-2 text-gray-400 text-sm">
                        <p>💡 <strong>Tip →</strong> Use this product roadmap to track the progress of your restaurant platform.</p>
                        <p>Projects are grouped into stages and organized into Quarterly Goals.</p>
                        <p>Click the <ChevronRight className="inline w-4 h-4" /> to reveal the projects within stages.</p>
                        <p>↓ Click on the views below to explore different ways of visualizing your roadmap.</p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                    <div className="flex gap-6">
                        <button className="flex items-center gap-2 text-gray-300 hover:text-white pb-2 border-b-2 border-blue-500">
                            ⚙️ Projects by stage
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300">
                            👥 Team Roasters
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300">
                            📊 Projects Board
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300">
                            📅 Project Timelines
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-blue-400 hover:text-blue-300 text-sm">Filter</button>
                        <button className="text-gray-400 hover:text-gray-300 text-sm">Sort</button>
                        <button className="text-gray-400 hover:text-gray-300">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Kanban Board */}
                <div className="flex gap-4 overflow-x-auto pb-4">
                    {stages.map((stage, idx) => (
                        <div key={idx} className="flex-shrink-0 w-72">
                            {/* Stage Header */}
                            <div className={`${stage.color} border rounded-lg p-3 mb-3`}>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-sm truncate">{stage.name}</h3>
                                    <span className="bg-gray-800/50 px-2 py-1 rounded text-xs">{stage.count}</span>
                                </div>
                            </div>

                            {/* Project Cards */}
                            <div className="space-y-3">
                                {stage.projects.map((project, pIdx) => (
                                    <div
                                        key={pIdx}
                                        className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-2xl">{project.icon}</span>
                                            <h4 className="font-medium text-sm flex-1">{project.title}</h4>
                                        </div>

                                        <div className={`${getPriorityColor(project.priority)} px-2 py-1 rounded text-xs inline-block mb-3`}>
                                            {project.priority}
                                        </div>

                                        <div className="text-xs text-gray-500 mb-2">
                                            📋 {project.lever}
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                                {project.owner.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span>{project.owner}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantRoadmap;