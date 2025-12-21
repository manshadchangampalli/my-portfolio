import { useState, useRef, useEffect } from "react";
import { useThirtyDaysStore } from "../../store/thirtyDaysStore";
import { dayConfig } from "./dayConfig";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { cn } from "@/utils/classNames";

export function ThirtyDaysButtons() {
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [activeNumber, setActiveNumber] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const setCurrentDate = useThirtyDaysStore((state) => state.setCurrentDate);

    const snapToNearest50 = (value: number): number => {
        return Math.round(value / 50) * 50;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsPlaying(false); // Stop auto-play when user starts dragging
        setStartX(e.clientX - offset);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.touches[0].clientX - offset);
    };

    const updateActiveNumber = (newOffset: number) => {
        const active = Math.floor(Math.abs(newOffset) / 50 + 1);
        setActiveNumber(active);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        if (startX - e.clientX >= 0 && startX - e.clientX <= 1450) {
            const newOffset = e.clientX - startX;
            setOffset(newOffset);
            updateActiveNumber(newOffset);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        if (startX - e.touches[0].clientX >= 0 && startX - e.touches[0].clientX <= 1450) {
            const newOffset = e.touches[0].clientX - startX;
            setOffset(newOffset);
            updateActiveNumber(newOffset);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Snap to nearest multiple of 50 on mouse up
        setOffset((prevOffset) => {
            const snapped = snapToNearest50(prevOffset);
            const active = Math.floor(Math.abs(snapped) / 50 + 1);
            updateActiveNumber(snapped);
            setCurrentDate(active);
            return snapped;
        });
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        // Snap to nearest multiple of 50 on touch end
        setOffset((prevOffset) => {
            const snapped = snapToNearest50(prevOffset);
            const active = Math.floor(Math.abs(snapped) / 50 + 1);
            updateActiveNumber(snapped);
            setCurrentDate(active);
            return snapped;
        });
    };

    const handlePrevious = () => {
        if (activeNumber > 1 && !isPlaying) {
            setIsPlaying(false); // Stop auto-play when user manually navigates
            const newActive = activeNumber - 1;
            const newOffset = -(newActive - 1) * 50;
            setOffset(newOffset);
            setActiveNumber(newActive);
            setCurrentDate(newActive);
        }
    };

    const navigateToNext = () => {
        setActiveNumber((prev) => {
            if (prev < 30) {
                const newActive = prev + 1;
                const newOffset = -(newActive - 1) * 50;
                setOffset(newOffset);
                setCurrentDate(newActive);

                if (newActive >= 30) {
                    setIsPlaying(false);
                }
                return newActive;
            }
            return prev;
        });
    };

    const handleNext = () => {
        setIsPlaying(false); // Stop auto-play when user manually navigates
        navigateToNext();
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            // Don't start if already at day 30
            if (activeNumber < 30) {
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        if (isDragging) {
            const handleGlobalMouseMove = (e: MouseEvent) => {
                if (startX - e.clientX >= 0 && startX - e.clientX <= 1450) {
                    const newOffset = e.clientX - startX;
                    setOffset(newOffset);
                    updateActiveNumber(newOffset);
                }
            };

            const handleGlobalMouseUp = () => {
                setIsDragging(false);
                // Snap to nearest multiple of 50 on mouse up
                setOffset((prevOffset) => {
                    const snapped = snapToNearest50(prevOffset);
                    const active = Math.floor(Math.abs(snapped) / 50 + 1);
                    updateActiveNumber(snapped);
                    setCurrentDate(active);
                    return snapped;
                });
            };

            const handleGlobalTouchMove = (e: TouchEvent) => {
                e.preventDefault();
                if (startX - e.touches[0].clientX >= 0 && startX - e.touches[0].clientX <= 1450) {
                    const newOffset = e.touches[0].clientX - startX;
                    setOffset(newOffset);
                    updateActiveNumber(newOffset);
                }
            };

            const handleGlobalTouchEnd = () => {
                setIsDragging(false);
                // Snap to nearest multiple of 50 on touch end
                setOffset((prevOffset) => {
                    const snapped = snapToNearest50(prevOffset);
                    const active = Math.floor(Math.abs(snapped) / 50 + 1);
                    updateActiveNumber(snapped);
                    setCurrentDate(active);
                    return snapped;
                });
            };

            window.addEventListener("mousemove", handleGlobalMouseMove);
            window.addEventListener("mouseup", handleGlobalMouseUp);
            window.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
            window.addEventListener("touchend", handleGlobalTouchEnd);

            return () => {
                window.removeEventListener("mousemove", handleGlobalMouseMove);
                window.removeEventListener("mouseup", handleGlobalMouseUp);
                window.removeEventListener("touchmove", handleGlobalTouchMove);
                window.removeEventListener("touchend", handleGlobalTouchEnd);
            };
        }
    }, [isDragging, startX, setCurrentDate, snapToNearest50]);

    // Auto-play interval
    useEffect(() => {
        if (isPlaying && activeNumber < 30) {
            intervalRef.current = setInterval(() => {
                navigateToNext();
            }, 2000); // Change day every 3 seconds

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            };
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (activeNumber >= 30) {
                setIsPlaying(false);
            }
        }
    }, [isPlaying, activeNumber, setCurrentDate]);

    const caption = dayConfig[activeNumber].caption;

    return (
        <>
            <div className="fixed bottom-[100px] bg-black/50 backdrop-blur-sm text-white left-1/2 p-4 rounded-lg -translate-x-1/2 flex flex-col gap-2.5 z-[9999] select-none">
                {caption}
            </div>
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex flex-col gap-2.5 z-[9999] select-none">
                <div className="point absolute left-1/2 grid place-items-center -translate-x-1/2 top-0 -translate-y-full bg-white p-2 rounded-2xl">
                    <button
                        onClick={handlePlayPause}
                        disabled={activeNumber === 30}
                        className="text-black cursor-pointer hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 "
                        aria-label={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    {/* Left Arrow Button */}
                    <button
                        onClick={handlePrevious}
                        disabled={activeNumber === 1 || isPlaying}
                        className="text-white cursor-pointer hover:scale-150 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 p-1"
                        aria-label="Previous day">
                        <ChevronLeft size={20} />
                    </button>

                    <div
                        className="max-w-[300px] overflow-hidden flex gap-[50px] p-2.5 rounded-lg relative"
                        style={{
                            background: "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.2) 100%)",
                        }}>
                        {/* Left blur overlay */}
                        <div className="absolute left-0 top-0 bottom-0 w-10 bg-linear-to-r from-black/60 to-transparent pointer-events-none z-1" />

                        {/* Right blur overlay */}
                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-linear-to-l from-black/60  to-transparent pointer-events-none z-1" />

                        <div
                            ref={containerRef}
                            className={cn(
                                "flex gap-[25px] ml-[calc(50%-12.5px)] transition-transform  relative z-0 cursor-grab active:cursor-grabbing",
                                isPlaying ? "duration-1000" : "duration-100"
                            )}
                            style={{
                                transform: `translateX(${offset}px)`,
                            }}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onMouseUp={handleMouseUp}>
                            {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
                                <div
                                    key={number}
                                    className={`min-w-fit text-black w-[25px] font-semibold aspect-square bg-white text-xs rounded-full flex items-center justify-center select-none transition-all duration-500 ${number === activeNumber ? "opacity-100 scale-120" : "opacity-50 scale-90"
                                        }`}>
                                    {number}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={handleNext}
                        disabled={activeNumber === 30 || isPlaying}
                        className="text-white cursor-pointer hover:scale-150 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 p-1"
                        aria-label="Next day">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </>
    );
}
