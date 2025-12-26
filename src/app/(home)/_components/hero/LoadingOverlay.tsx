import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
    isLoading: boolean;
    loadingProgress?: number;
}

export default function LoadingOverlay({ isLoading, loadingProgress = 0 }: LoadingOverlayProps) {
    if (!isLoading) return null;

    return (
        <div className="fixed top-0 z-[9999] left-0 w-full h-dvh bg-black" style={{ right: 0, bottom: 0 }}>
            
        </div>
    );
}
