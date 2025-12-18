import React from "react";
import { cn } from "@/utils/classNames";

export type ControlButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ariaLabel: string;
    className?: string;
};

export const ControlButton = ({ children, onClick, disabled, ariaLabel, className }: ControlButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black/30",
                className
            )}
            style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
            }}>
            {children}
        </button>
    );
};


