import React from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useCarscanStore } from "@/store/carscanStore";
import { ControlButton } from "../ControlButton";

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
            <ControlButton
                onClick={handleZoomIn}
                disabled={currentZoom <= 0}
                ariaLabel="Zoom in">
                <ZoomIn className="w-6 h-6" />
            </ControlButton>
            <ControlButton
                onClick={handleZoomOut}
                disabled={currentZoom >= 5}
                ariaLabel="Zoom out">
                <ZoomOut className="w-6 h-6" />
            </ControlButton>
        </div>
    );
};
