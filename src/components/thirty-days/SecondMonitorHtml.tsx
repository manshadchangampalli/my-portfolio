import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useThirtyDaysStore } from "../../store/thirtyDaysStore";
import { secondMonitorConfig } from "./secondMonitorConfig";

export function SecondMonitorHtml() {
    const currentDate = useThirtyDaysStore((state) => state.currentDate);
    const config = secondMonitorConfig[currentDate] || secondMonitorConfig[1];
    const Component = config.component;
    const caption = config.caption;
    const { isMd, isLg } = useBreakpoints();

    const getPosition = useMemo((): [number, number, number] => {
        if (isLg) {
            return [-4.39, 0.35, 0.94];
        } else if (isMd) {
            return [-0.966, 1.215, -0.1851];
        } else {
            return [0.01, 2.54, -0.9168];
        }
    }, [isMd, isLg]);

    const handleEventPropagation = (e: React.WheelEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    return (
        <Html
            transform
            occlude
            position={getPosition}
            rotation={[angle(180), angle(180), 0]}
            distanceFactor={0.5}
            pointerEvents="auto"
            scale={1}
            style={{
                width: "1090px",
                height: "710px",
                pointerEvents: "auto",
                overflow: "auto",
            }}>
            <div onWheel={handleEventPropagation} className="relative w-full h-full">
                <Component />
                {/* Caption overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    {caption}
                </div>
            </div>
        </Html>
    );
}
