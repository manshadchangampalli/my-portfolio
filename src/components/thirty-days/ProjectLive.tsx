export function ProjectLive() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden flex items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                {/* Animated Success Icon */}
                <div className="relative mx-auto w-32 h-32 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <svg
                            className="w-16 h-16 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                    <h1 className="text-7xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                        🎉 Project Live!
                    </h1>
                    <h2 className="text-5xl font-bold text-white">Thank You!</h2>
                    <p className="text-2xl text-gray-300 max-w-2xl mx-auto">Your e-commerce project has been successfully deployed and is now live!</p>
                </div>

                {/* Success Details */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                    {[
                        { label: "Deployment Status", value: "Live", icon: "✅", color: "from-green-500 to-emerald-500" },
                        { label: "Uptime", value: "100%", icon: "⚡", color: "from-blue-500 to-cyan-500" },
                        { label: "Performance", value: "Optimized", icon: "🚀", color: "from-purple-500 to-pink-500" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                            <div className={`text-4xl mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>{stat.icon}</div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Celebration Elements */}
                <div className="flex items-center justify-center gap-4 mt-12 text-4xl animate-bounce">
                    <span>🎊</span>
                    <span>✨</span>
                    <span>🎈</span>
                    <span>🎁</span>
                    <span>🎊</span>
                </div>

                {/* Project Info */}
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 mt-12 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-6">Project Successfully Handed Over</h3>
                    <div className="grid grid-cols-2 gap-6 text-left">
                        <div>
                            <p className="text-gray-400 text-sm mb-2">Project Name</p>
                            <p className="text-white font-semibold text-lg">E-commerce Design System</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-2">Launch Date</p>
                            <p className="text-white font-semibold text-lg">{new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-2">Version</p>
                            <p className="text-white font-semibold text-lg">v1.0.0 - Production</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-2">Status</p>
                            <p className="text-green-400 font-semibold text-lg">✅ Live & Operational</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles for Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 1;
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
