import React from "react";
import { ArrowLeft } from "lucide-react";
import { useExperienceCardsStore } from "@/store/experienceCards.store";
import { EXPERIENCE_SLUGS } from "../experienceCard/experienceCard.config";
import { useCarscanStore } from "@/store/carscanStore";
import { CarscanControl } from "./components/CarscanControl";
import { IspgControl } from "./components/IspgControl";
import { ConfianceLabsControl } from "./components/ConfianceLabsControl";
import { ThirtyDaysControl } from "./components/ThirtyDaysControl";

export const ExperienceControls = () => {
    const { activeSlug, setActiveSlug, scrollPosition } = useExperienceCardsStore();
    const { setCurrentZoom, setPreviousZoom } = useCarscanStore();

    const handleBack = () => {
        setActiveSlug(null);
        setCurrentZoom(0);
        setPreviousZoom(0);
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 100);
    };

    const renderControlComponent = () => {
        switch (activeSlug) {
            case EXPERIENCE_SLUGS.CARSCAN:
                return <CarscanControl />;
            case EXPERIENCE_SLUGS.ISPG:
                return <IspgControl />;
            case EXPERIENCE_SLUGS.CONFIANCE_LABS:
                return <ConfianceLabsControl />;
            case EXPERIENCE_SLUGS.THIRTY_DAYS:
                return <ThirtyDaysControl />;
            default:
                return null;
        }
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
            {renderControlComponent()}
        </>
    );
};
