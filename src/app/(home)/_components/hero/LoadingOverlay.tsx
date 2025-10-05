import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
    isLoading: boolean;
}

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
    if (!isLoading) return null;

    return (
        <div className="fixed top-0 z-[9999] left-0 min-h-screen w-screen bg-black">
            <div className="flex w-full items-center justify-center h-screen">
                <Loader2 className="w-16 h-16 animate-spin text-white" />
            </div>
        </div>
    );
}
