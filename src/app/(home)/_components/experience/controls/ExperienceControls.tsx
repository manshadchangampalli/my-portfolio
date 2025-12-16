import React from "react";
import { ArrowLeft, ZoomIn, ZoomOut } from "lucide-react";
import { useExperienceCardsStore } from "@/store/experienceCards.store";
import { EXPERIENCE_SLUGS } from "../experienceCard/experienceCard.config";
import { useCarscanStore } from "@/store/carscanStore";

export const ExperienceControls = () => {
    const { activeSlug, setActiveSlug } = useExperienceCardsStore();
    const { setScrollValue, scrollValue } = useCarscanStore();
    const handleBack = () => {
        setActiveSlug(null);
    };

    const handleZoomIn = () => {
        setScrollValue(Number((scrollValue + 1)?.toFixed(1)));
    };

    const handleZoomOut = () => {
        setScrollValue(Number((scrollValue - 1)?.toFixed(1)));
    };

    return (
        <>
            {activeSlug && (
                <button
                    onClick={handleBack}
                    className="fixed left-5 top-5 z-[9999] flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-white cursor-pointer"
                    style={{
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}>
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Back</span>
                </button>
            )}

            {activeSlug === EXPERIENCE_SLUGS.CARSCAN && (
                <div className="fixed right-5 bottom-5 z-[9999] flex flex-col gap-3">
                    <button
                        onClick={handleZoomIn}
                        className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-white cursor-pointer"
                        style={{
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                        }}>
                        <ZoomIn className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-white cursor-pointer"
                        style={{
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                        }}>
                        <ZoomOut className="w-6 h-6" />
                    </button>
                </div>
            )}
        </>
    );
};
