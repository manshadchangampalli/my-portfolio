import { useState } from 'react';
import { FigmaDesign } from './FigmaDesign';
import { FigmaProtoType } from './FigmaProtoType';
import { EcommerceWireframe } from './EcommerceWireframe';

// Generate confetti positions outside component to avoid React purity issues
const generateConfetti = () => {
    const emojis = ['✨', '🎉', '⭐', '💫'];
    return Array.from({ length: 20 }, (_, i) => {
        const seed = i * 0.618; // Golden ratio for better distribution
        return {
            id: i,
            left: ((seed * 100) % 100),
            top: (((seed * 137.5) % 100)), // Golden angle
            delay: ((seed * 3) % 3),
            duration: 3 + ((seed * 2) % 2),
            emoji: emojis[Math.floor((seed * 4) % 4)],
        };
    });
};

const confettiElements = generateConfetti();

export function ProjectHandover() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentView, setCurrentView] = useState<'overview' | 'design' | 'prototype' | 'wireframe' | 'thankyou'>('overview');
    const [showControls, setShowControls] = useState(true);

    const projectViews = [
        { id: 'overview', name: 'Overview', icon: '📊' },
        { id: 'design', name: 'Design', icon: '🎨' },
        { id: 'prototype', name: 'Prototype', icon: '🚀' },
        { id: 'wireframe', name: 'Wireframe', icon: '📐' },
        { id: 'thankyou', name: 'Success', icon: '🎉' },
    ];

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'E-commerce Project - Handover',
                text: 'Check out this amazing e-commerce project!',
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
            {/* Top Navigation Bar */}
            {showControls && (
                <div className="absolute top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-700 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">P</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-white">Project Handover</h1>
                                    <p className="text-xs text-gray-400">E-commerce Design System</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* View Selector */}
                            <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
                                {projectViews.map((view) => (
                                    <button
                                        key={view.id}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onClick={() => setCurrentView(view.id as any)}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${currentView === view.id
                                            ? 'bg-purple-600 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                            }`}
                                    >
                                        <span className="mr-2">{view.icon}</span>
                                        {view.name}
                                    </button>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <button
                                onClick={handleShare}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <polyline points="16 6 12 2 8 6" />
                                    <line x1="12" y1="2" x2="12" y2="15" />
                                </svg>
                                Share
                            </button>

                            <button
                                onClick={toggleFullscreen}
                                className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors flex items-center gap-2"
                            >
                                {isFullscreen ? (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                                        </svg>
                                        Exit Fullscreen
                                    </>
                                ) : (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                                        </svg>
                                        Fullscreen
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className={`w-full h-full ${showControls ? 'pt-20' : ''} overflow-auto`}>
                {/* Overview View */}
                {currentView === 'overview' && (
                    <div className="max-w-7xl mx-auto p-12 space-y-12">
                        {/* Hero Section */}
                        <div className="text-center space-y-6 py-16">
                            <div className="inline-block">
                                <h2 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                    E-commerce Design System
                                </h2>
                            </div>
                            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                                A complete design system featuring wireframes, high-fidelity designs, and interactive prototypes
                            </p>
                            <div className="flex items-center justify-center gap-4 pt-6">
                                <div className="px-6 py-3 bg-green-600 rounded-lg text-white font-semibold">
                                    Status: ✅ Live & Operational
                                </div>
                                <div className="px-6 py-3 bg-gray-800 rounded-lg text-gray-300 font-semibold">
                                    Version: 1.0.0
                                </div>
                            </div>
                            <div className="pt-4">
                                <button
                                    onClick={() => setCurrentView('thankyou')}
                                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl animate-pulse"
                                >
                                    🎉 View Success Page
                                </button>
                            </div>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-4 gap-6">
                            {[
                                { label: 'Design Files', value: '12', icon: '🎨' },
                                { label: 'Components', value: '45+', icon: '🧩' },
                                { label: 'Prototypes', value: '8', icon: '🚀' },
                                { label: 'Pages', value: '15', icon: '📄' },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Project Sections */}
                        <div className="grid grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    title: 'Wireframe Design',
                                    description: 'Low-fidelity wireframes showing the structure and layout',
                                    icon: '📐',
                                    color: 'from-blue-500 to-cyan-500',
                                },
                                {
                                    title: 'High-Fidelity Design',
                                    description: 'Pixel-perfect designs with complete UI components',
                                    icon: '🎨',
                                    color: 'from-purple-500 to-pink-500',
                                },
                                {
                                    title: 'Interactive Prototype',
                                    description: 'Clickable prototypes with animations and interactions',
                                    icon: '🚀',
                                    color: 'from-green-500 to-emerald-500',
                                },
                            ].map((section, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-gradient-to-br ${section.color} rounded-2xl p-8 text-white cursor-pointer hover:scale-105 transition-transform`}
                                    onClick={() => {
                                        if (idx === 0) setCurrentView('wireframe');
                                        if (idx === 1) setCurrentView('design');
                                        if (idx === 2) setCurrentView('prototype');
                                    }}
                                >
                                    <div className="text-5xl mb-4">{section.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                                    <p className="text-white/90">{section.description}</p>
                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                                        View Details
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="bg-gray-800/50 rounded-2xl p-10 border border-gray-700 mt-12">
                            <h3 className="text-3xl font-bold text-white mb-8">Key Features</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    'Responsive Design System',
                                    'Dark Mode Support',
                                    'Component Library',
                                    'Design Tokens',
                                    'Interactive Prototypes',
                                    'Accessibility Compliant',
                                    'Performance Optimized',
                                    'Documentation Included',
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-gray-800/50 rounded-2xl p-10 border border-gray-700">
                            <h3 className="text-3xl font-bold text-white mb-8">Technology Stack</h3>
                            <div className="flex flex-wrap gap-4">
                                {['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Figma', 'Vite'].map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Design View */}
                {currentView === 'design' && (
                    <div className="w-full h-full">
                        <FigmaDesign />
                    </div>
                )}

                {/* Prototype View */}
                {currentView === 'prototype' && (
                    <div className="w-full h-full">
                        <FigmaProtoType />
                    </div>
                )}

                {/* Wireframe View */}
                {currentView === 'wireframe' && (
                    <div className="w-full h-full">
                        <EcommerceWireframe />
                    </div>
                )}

                {/* Thank You / Success View */}
                {currentView === 'thankyou' && (
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
                            {/* Animated Success Icon */}
                            <div className="relative mx-auto w-32 h-32 mb-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                                <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Main Message */}
                            <div className="space-y-4">
                                <h1 className="text-7xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                                    🎉 Project Live!
                                </h1>
                                <h2 className="text-5xl font-bold text-white">
                                    Thank You!
                                </h2>
                                <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
                                    Your e-commerce project has been successfully deployed and is now live!
                                </p>
                            </div>

                            {/* Success Details */}
                            <div className="grid grid-cols-3 gap-6 mt-12">
                                {[
                                    { label: 'Deployment Status', value: 'Live', icon: '✅', color: 'from-green-500 to-emerald-500' },
                                    { label: 'Uptime', value: '100%', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
                                    { label: 'Performance', value: 'Optimized', icon: '🚀', color: 'from-purple-500 to-pink-500' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm">
                                        <div className={`text-4xl mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.icon}
                                        </div>
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
                                        <p className="text-white font-semibold text-lg">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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

                            {/* Next Steps */}
                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 mt-8 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white mb-4">What&apos;s Next?</h3>
                                <div className="space-y-4 text-left">
                                    {[
                                        'Monitor performance and user feedback',
                                        'Schedule regular maintenance updates',
                                        'Plan for future feature enhancements',
                                        'Keep documentation up to date',
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-xs font-bold">{idx + 1}</span>
                                            </div>
                                            <p className="text-gray-300">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-center gap-4 mt-12">
                                <button
                                    onClick={() => setCurrentView('overview')}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                                >
                                    View Project
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="px-8 py-4 bg-gray-700 text-white rounded-xl font-bold text-lg hover:bg-gray-600 transition-all"
                                >
                                    Share Success
                                </button>
                            </div>

                            {/* Floating Celebration Elements */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                                {confettiElements.map((confetti) => (
                                    <div
                                        key={confetti.id}
                                        className="absolute animate-float"
                                        style={{
                                            left: `${confetti.left}%`,
                                            top: `${confetti.top}%`,
                                            animationDelay: `${confetti.delay}s`,
                                            animationDuration: `${confetti.duration}s`,
                                        }}
                                    >
                                        <span className="text-2xl opacity-70">
                                            {confetti.emoji}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Floating Controls */}
            {showControls && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
                    <button
                        onClick={() => setShowControls(!showControls)}
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors shadow-lg"
                        title="Toggle Controls"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Presentation Mode Indicator */}
            {!showControls && (
                <div className="fixed top-4 right-4 z-50">
                    <button
                        onClick={() => setShowControls(true)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors shadow-lg"
                    >
                        Show Controls
                    </button>
                </div>
            )}

            {/* Progress Indicator */}
            {showControls && (
                <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-800 z-50">
                    <div
                        className={`h-full transition-all duration-300 ${currentView === 'thankyou'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                            : 'bg-gradient-to-r from-purple-500 to-pink-500'
                            }`}
                        style={{ width: currentView === 'thankyou' ? '100%' : '75%' }}
                    />
                </div>
            )}

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

