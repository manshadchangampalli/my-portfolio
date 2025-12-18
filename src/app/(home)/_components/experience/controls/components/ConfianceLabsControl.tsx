import { Circle, Square, Triangle, X } from "lucide-react";
import React from "react";
import { ControlButton } from "../ControlButton";

type ConfianceLabsControlProps = {
    disabled?: boolean;
};

export const ConfianceLabsControl = ({ disabled }: ConfianceLabsControlProps) => {
    const handleTriangleClick = () => {
        // TODO: implement triangle action
    };

    const handleSquareClick = () => {
        // TODO: implement square action
    };

    const handleCircleClick = () => {
        // TODO: implement circle action
    };

    const handleCloseClick = () => {
        // TODO: implement close action
    };

    return (
        <div className="fixed right-5 items-center bottom-5 w-[200px] z-[9999] flex flex-col">
            <ControlButton
                onClick={handleTriangleClick}
                disabled={disabled}
                ariaLabel="Confiance Labs control">
                <Triangle />
            </ControlButton>
            <div className="flex gap-10 justify-between">
                <ControlButton
                    onClick={handleSquareClick}
                    disabled={disabled}
                    ariaLabel="Confiance Labs square control">
                    <Square />
                </ControlButton>
                <ControlButton
                    onClick={handleCircleClick}
                    disabled={disabled}
                    ariaLabel="Confiance Labs circle control">
                    <Circle />
                </ControlButton>
            </div>
            <ControlButton
                onClick={handleCloseClick}
                disabled={disabled}
                ariaLabel="Confiance Labs close control">
                <X />
            </ControlButton>
        </div>
    );
};
