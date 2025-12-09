import "../../phoneCss.css";

export function WalletContent() {
    return (
        <div className="h-full flex flex-col bg-black text-white overflow-hidden">
            {/* Header */}
            <div className="px-4 pt-4 pb-2">
                <h1 className="text-3xl font-bold mb-4">Wallet</h1>
            </div>

            {/* Cards List */}
            <div className="flex-1 max-h-[calc(100vh-20px)] scrollbar-hide overflow-y-auto px-4 pb-20">
                {/* Digital ID Card */}
                <div className="mb-6">
                    <div
                        className="rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
                            minHeight: "220px",
                        }}>
                        {/* Card chip and contactless */}
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md relative">
                                    <div className="absolute inset-1 grid grid-cols-3 gap-0.5">
                                        {[...Array(9)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="bg-yellow-600/30 rounded-sm"></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-white text-2xl opacity-70">📡</div>
                            </div>
                            <div className="text-white text-2xl font-bold">VISA</div>
                        </div>

                        {/* Card number */}
                        <div className="mb-6">
                            <div className="text-white text-xl font-mono tracking-widest">4532 •••• •••• 7891</div>
                        </div>

                        {/* Card holder and expiry */}
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-white/60 text-xs mb-1">CARD HOLDER</div>
                                <div className="text-white text-sm font-semibold tracking-wide">MANSHAD C.</div>
                            </div>
                            <div className="text-right">
                                <div className="text-white/60 text-xs mb-1">EXPIRES</div>
                                <div className="text-white text-sm font-semibold">12/28</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
