import { Phone, Video, Info, Search, Mic, Star, Clock, User, Grid3x3, Voicemail } from "lucide-react";
import { useState } from "react";

interface CallEntry {
    id: string;
    name: string;
    initials: string;
    details: string;
    callType: "audio" | "video";
    service: string;
    time: string;
    count?: number;
    emojis?: string;
    missed?: boolean;
}

const recentCalls: CallEntry[] = [
    {
        id: "1",
        name: "hire me",
        initials: "HM",
        details: "WhatsApp Audio",
        callType: "audio",
        service: "WhatsApp Audio",
        time: "7:50 PM",
    },
    {
        id: "2",
        name: "Microsoft HR (3)",
        initials: "MH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "7:30 PM",
        missed: true,
        count: 3,
    },
    {
        id: "3",
        name: "Google HR (5)",
        initials: "GH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "7:28 PM",
        missed: true,
        count: 5,
    },
    {
        id: "4",
        name: "Apple HR (2)",
        initials: "AH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "5:52 PM",
        missed: true,
        count: 2,
    },
    {
        id: "5",
        name: "Amazon HR (4)",
        initials: "AH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "5:46 PM",
        missed: true,
        count: 4,
    },
    {
        id: "6",
        name: "Meta HR (3)",
        initials: "MH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "4:43 PM",
        missed: true,
        count: 3,
    },
    {
        id: "7",
        name: "Netflix HR (2)",
        initials: "NH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "4:42 PM",
        missed: true,
        count: 2,
    },
    {
        id: "8",
        name: "Tesla HR (6)",
        initials: "TH",
        details: "Phone",
        callType: "audio",
        service: "Phone",
        time: "4:20 PM",
        missed: true,
        count: 6,
    },
    {
        id: "9",
        name: "mom🤍",
        initials: "M",
        details: "botim Audio",
        callType: "audio",
        service: "botim Audio",
        time: "3:30 PM",
    },
    {
        id: "10",
        name: "she 🤍",
        initials: "S",
        details: "botim Video",
        callType: "video",
        service: "botim Video",
        time: "2:28 PM",
    },
];

export function PhoneContent() {
    const [activeTab, setActiveTab] = useState<"All" | "Missed">("All");

    return (
        <div className="h-full flex flex-col bg-black text-white">
            {/* Header Section */}
            <div className="px-4 pt-2 pb-4">
                <div className="flex items-center justify-center mb-2 relative">
                    <div className="flex gap-1 bg-gray-800 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab("All")}
                            className={`px-4 py-1 rounded text-sm font-medium transition-colors ${activeTab === "All" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
                            All
                        </button>
                        <button
                            onClick={() => setActiveTab("Missed")}
                            className={`px-4 py-1 rounded text-sm font-medium transition-colors ${activeTab === "Missed" ? "bg-gray-700 text-white" : "text-gray-400"}`}>
                            Missed
                        </button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mb-3">Recents</h1>
                <div className="relative">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-800 rounded-2xl pl-10 pr-10 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Mic
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />
                </div>
            </div>

            {/* Call History List */}
            <div className="flex-1 max-h-[calc(100vh-20px)] scrollbar-hide overflow-y-auto px-4">
                {recentCalls.map((call) => (
                    <div
                        key={call.id}
                        onClick={() => {
                            window.location.href = "tel:+971558924422";
                        }}
                        className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-900/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                            <span className="text-white font-medium text-sm">{call.initials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-1">
                                <span className={`font-medium text-base truncate ${call.missed ? "text-red-500" : "text-white"}`}>
                                    {call.name}
                                    {call.emojis && <span className="ml-1">{call.emojis}</span>}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                {call.callType === "audio" ? <Phone size={12} /> : <Video size={12} />}
                                <span className="truncate">{call.service}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                            <span className="text-gray-400 text-sm">{call.time}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                <Info
                                    size={10}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation Bar */}
            <div className="border-t absolute bottom-0 left-0 right-0 border-gray-800 bg-black px-4 py-4">
                <div className="flex items-center justify-around">
                    <button className="flex flex-col items-center gap-1 py-2">
                        <Star
                            size={20}
                            className="text-gray-400"
                        />
                        <span className="text-xs text-gray-400">Favourites</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 py-2">
                        <Clock
                            size={20}
                            className="text-blue-500"
                        />
                        <span className="text-xs text-blue-500">Recents</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 py-2">
                        <User
                            size={20}
                            className="text-gray-400"
                        />
                        <span className="text-xs text-gray-400">Contacts</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 py-2">
                        <Grid3x3
                            size={20}
                            className="text-gray-400"
                        />
                        <span className="text-xs text-gray-400">Keypad</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 py-2 relative">
                        <Voicemail
                            size={20}
                            className="text-gray-400"
                        />
                        <span className="text-xs text-gray-400">Voicemail</span>
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-medium">32</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
