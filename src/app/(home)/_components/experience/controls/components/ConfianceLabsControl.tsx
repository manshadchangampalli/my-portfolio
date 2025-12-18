import { Circle, Square, Triangle, X } from "lucide-react";
import React from "react";
import { ControlButton } from "../ControlButton";
import useConfianceStore from "@/store/confianceStore";

type ConfianceLabsControlProps = {
    disabled?: boolean;
};

export const ConfianceLabsControl = ({ disabled }: ConfianceLabsControlProps) => {
    const { currentCamera, setCurrentCamera } = useConfianceStore();

    const isTvSelected = currentCamera === "tv";
    const isKioskSelected = currentCamera === "kiosk";
    const isKdsSelected = currentCamera === "kds";
    const isOverviewSelected = currentCamera === "frame";

    const handleTriangleClick = () => {
        setCurrentCamera("tv");
    };

    const handleSquareClick = () => {
        setCurrentCamera("kiosk");
    };

    const handleCircleClick = () => {
        setCurrentCamera("kds");
    };

    const handleCloseClick = () => {
        setCurrentCamera("frame");
    };

    return (
        <div className="fixed right-5 items-center bottom-5 w-[200px] z-[9999] flex flex-col">
            <ControlButton
                onClick={handleTriangleClick}
                disabled={disabled || isTvSelected}
                ariaLabel="Switch to Confiance Labs TV menu"
                title="TV menu">
                <Triangle />
            </ControlButton>
            <div className="flex gap-10 justify-between">
                <ControlButton
                    onClick={handleSquareClick}
                    disabled={disabled || isKioskSelected}
                    ariaLabel="Switch to Confiance Labs kiosk"
                    title="Kiosk">
                    <Square />
                </ControlButton>
                <ControlButton
                    onClick={handleCircleClick}
                    disabled={disabled || isKdsSelected}
                    ariaLabel="Switch to Confiance Labs kitchen application"
                    title="Kitchen application">
                    <Circle />
                </ControlButton>
            </div>
            <ControlButton
                onClick={handleCloseClick}
                disabled={disabled || isOverviewSelected}
                ariaLabel="Return to Confiance Labs overview"
                title="Overview">
                <X />
            </ControlButton>
        </div>
    );
};
