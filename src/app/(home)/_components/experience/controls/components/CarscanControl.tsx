import React from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useCarscanStore } from "@/store/carscanStore";

export const CarscanControl = () => {
    const { zoomIn, zoomOut, currentZoom } = useCarscanStore();

    const handleZoomIn = () => {
        zoomIn();
    };

    const handleZoomOut = () => {
        zoomOut();
    };

    return (
        <div className="fixed right-5 bottom-5 z-[9999] flex flex-col gap-3">
            <button
                onClick={handleZoomIn}
                disabled={currentZoom <= 0}
                className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black/30"
                style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}>
                <ZoomIn className="w-6 h-6" />
            </button>
            <button
                onClick={handleZoomOut}
                disabled={currentZoom >= 5}
                className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black/30"
                style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                }}>
                <ZoomOut className="w-6 h-6" />
            </button>
        </div>
    );
};

