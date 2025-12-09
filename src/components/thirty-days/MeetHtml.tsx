const participants = [
    {
        name: "manshad changampalli",
        initial: "m",
        avatarGradient: "from-[#1a73e8] to-[#4285f4]",
        cardGradient: "from-[#1a73e8]/30 to-[#4285f4]/30"
    },
    {
        name: "John Doe",
        initial: "JD",
        avatarGradient: "from-[#667eea] to-[#764ba2]",
        cardGradient: "from-[#667eea]/30 to-[#764ba2]/30"
    },
    {
        name: "Jane Smith",
        initial: "JS",
        avatarGradient: "from-[#f093fb] to-[#f5576c]",
        cardGradient: "from-[#f093fb]/30 to-[#f5576c]/30"
    },
    {
        name: "Alex Johnson",
        initial: "AJ",
        avatarGradient: "from-[#4facfe] to-[#00f2fe]",
        cardGradient: "from-[#4facfe]/30 to-[#00f2fe]/30"
    },
];

export function MeetHtml() {
    return (
        <div className="w-full h-full bg-[#202124] relative overflow-hidden flex flex-col font-sans">
            {/* Grid Video Area */}
            <div className="flex-1 p-2 grid grid-cols-2 gap-2">
                {participants.map((participant, index) => (
                    <div key={index} className={`relative bg-gradient-to-br ${participant.cardGradient} rounded-lg overflow-hidden`}>
                        <div className="w-full h-full flex flex-col items-center justify-center p-4">
                            <div className="w-[120px] h-[120px] mb-3">
                                <div className={`w-full h-full rounded-full bg-gradient-to-br ${participant.avatarGradient} flex items-center justify-center text-white text-4xl font-medium`}>
                                    <span className="lowercase">{participant.initial}</span>
                                </div>
                            </div>
                            <div className="text-white text-sm font-normal text-center lowercase">{participant.name}</div>
                            <div className="absolute top-2 right-2 bg-black/50 rounded-full w-6 h-6 flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Control Bar */}
            <div className="h-[60px] bg-[#2d2e30] flex items-center justify-between px-5 shadow-[0_-2px_8px_rgba(0,0,0,0.2)]">
                <div className="flex items-center">
                    <div className="flex flex-col text-white text-xs">
                        <span className="font-medium mb-0.5">7:35 PM</span>
                        <span className="text-white/70 text-[11px]">mza-nbmv-svi</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#ea4335] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#ea4335] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#ea4335] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">CC</button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.5 12.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S5.17 11 6 11s1.5.67 1.5 1.5zm4.5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S9.67 11 10.5 11s1.5.67 1.5 1.5zm4.5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S14.17 11 15 11s1.5.67 1.5 1.5z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#ea4335] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.69.28-.26 0-.51-.1-.69-.28L.28 12.9c-.18-.18-.28-.43-.28-.69s.1-.51.28-.69C3.34 8.78 7.46 7 12 7s8.66 1.78 11.72 4.52c.18.18.28.43.28.69s-.1.51-.28.69l-2.65 2.65c-.18.18-.43.28-.69.28-.26 0-.51-.1-.69-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56.9v3.1C15.15 9.25 13.6 9 12 9z" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white relative">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-[#ea4335] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[10px] font-semibold">4</span>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-80 hover:scale-105 text-xs font-medium bg-[#3c4043] text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

