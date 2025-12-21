import { useState, useRef, useEffect } from "react";
import { useThirtyDaysStore } from "../../store/thirtyDaysStore";

export function ThirtyDaysButtons() {
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [activeNumber, setActiveNumber] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const setCurrentDate = useThirtyDaysStore((state) => state.setCurrentDate);

    const snapToNearest50 = (value: number): number => {
        return Math.round(value / 50) * 50;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
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

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex flex-col gap-2.5 z-[9999] select-none">
            <div className="point absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full bg-white px-2 text-xs rounded-full">Day</div>
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
                    className="flex gap-[25px] ml-[calc(50%-12.5px)] transition-transform duration-100 relative z-0 cursor-grab active:cursor-grabbing"
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
        </div>
    );
}
