import { Search, Mic, ChevronLeft, MoreVertical, SquarePen, ChevronRight, MessageSquare } from "lucide-react";


interface MessageThread {
    id: string;
    name: string;
    initials: string;
    timestamp: string;
    message: string;
    unread?: boolean;
}

const messageThreads: MessageThread[] = [
    {
        id: "1",
        name: "Mom 🤍",
        initials: "M",
        timestamp: "10:03 PM",
        message: "Did you eat? Why haven't you called? Are you alive? 😂",
        unread: true,
    },
    {
        id: "2",
        name: "Best Friend",
        initials: "BF",
        timestamp: "7:50 PM",
        message: "Bro, I just saw the funniest meme. You're gonna die laughing 😂😂😂",
    },
    {
        id: "3",
        name: "She 🤍",
        initials: "S",
        timestamp: "7:47 PM",
        message: "Hey! What are you doing? Miss you ❤️",
        unread: true,
    },
    {
        id: "4",
        name: "Brother",
        initials: "B",
        timestamp: "2:08 PM",
        message: "Can you send me that code? I'm stuck here 😅",
    },
    {
        id: "5",
        name: "Sister",
        initials: "S",
        timestamp: "9:13 AM",
        message: "Mom is asking about you again. What should I tell her? 🤷‍♀️",
    },
    {
        id: "6",
        name: "Funny Uncle",
        initials: "FU",
        timestamp: "Yesterday",
        message: "Remember that joke I told you? Well, I forgot the punchline 😂",
    },
    {
        id: "7",
        name: "College Buddy",
        initials: "CB",
        timestamp: "Yesterday",
        message: "Dude, we need to finish that project. The deadline is tomorrow! 😱",
    },
    {
        id: "8",
        name: "Work Friend",
        initials: "WF",
        timestamp: "Saturday",
        message: "Happy weekend! Let's grab coffee if you're free ☕",
    },
    {
        id: "9",
        name: "Cousin",
        initials: "C",
        timestamp: "Friday",
        message: "Family dinner this Sunday. Don't be late this time! 😄",
    },
    {
        id: "10",
        name: "Gym Partner",
        initials: "GP",
        timestamp: "Thursday",
        message: "Where are you? We said 6 AM! You're making me look bad 💪",
    },
];

export function MessagesContent() {
    return (
        <div className="h-full flex flex-col bg-black text-white">
            {/* Navigation Bar */}
            <div className="px-4 pt-2 pb-3">
                <div className="flex items-center justify-between mb-3">
                    <button className="text-blue-500 text-base font-medium flex items-center gap-1">
                        <ChevronLeft size={18} />
                        Filters
                    </button>
                    <h1 className="text-3xl font-bold">Messages</h1>
                    <div className="flex items-center gap-4">
                        <MoreVertical size={20} className="text-blue-500" />
                        <SquarePen size={20} className="text-blue-500" />
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-800 rounded-2xl pl-10 pr-10 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Mic className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>

            {/* Message Threads List */}
            <div className="flex-1 max-h-[calc(100vh-100px)] scrollbar-hide overflow-y-auto px-4">
                {messageThreads.map((thread) => (
                    <div
                        key={thread.id}
                        className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-900/50 transition-colors"
                    >
                        {/* Blue dot for unread */}
                        {thread.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
                        )}
                        {!thread.unread && <div className="w-2 shrink-0"></div>}

                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                            <span className="text-white font-medium text-sm">{thread.initials}</span>
                        </div>

                        {/* Message Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-white font-semibold text-base truncate">{thread.name}</span>
                                <span className="text-gray-400 text-sm shrink-0 ml-2">{thread.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center shrink-0">
                                    <MessageSquare size={12} className="text-white" />
                                </div>
                                <span className="text-gray-400 text-sm truncate">{thread.message}</span>
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <ChevronRight size={18} className="text-gray-400 shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}

