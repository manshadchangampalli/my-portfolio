import { Loader2 } from "lucide-react";

interface ExperienceLoadingSkeletonProps {
    loadingProgress?: number;
}

export default function ExperienceLoadingSkeleton({ loadingProgress = 0 }: ExperienceLoadingSkeletonProps) {
    return (
        <div className="w-full bg-black h-[min(90vh,700px)] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-8">
                <Loader2 className="w-16 h-16 animate-spin text-white" />
                
                {/* Progress Bar */}
                <div className="w-80 max-w-[90vw]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">Loading 3D Experience</span>
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

