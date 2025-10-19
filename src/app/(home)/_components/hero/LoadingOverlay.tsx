import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
    isLoading: boolean;
    loadingProgress?: number;
}

export default function LoadingOverlay({ isLoading, loadingProgress = 0 }: LoadingOverlayProps) {
    if (!isLoading) return null;

    return (
        <div className="fixed top-0 z-[9999] left-0 w-full h-dvh bg-black" style={{ right: 0, bottom: 0 }}>
            <div className="flex flex-col w-full items-center justify-center h-dvh gap-8">
                <Loader2 className="w-16 h-16 animate-spin text-white" />

                {/* Progress Bar */}
                <div className="w-80 max-w-[90vw]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">Loading Assets</span>
                        <span className="text-white text-sm font-medium">{loadingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
