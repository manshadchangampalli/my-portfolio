import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useThirtyDaysStore } from "../../store/thirtyDaysStore";
import { dayConfig } from "./dayConfig";

export function FirstMonitorHtml() {
    const currentDate = useThirtyDaysStore((state) => state.currentDate);
    const config = dayConfig[currentDate] || dayConfig[1];
    const Component = config.component;
    const caption = config.caption;
    const { isMd, isLg } = useBreakpoints();

    const getPosition = useMemo((): [number, number, number] => {
        if (isLg) {
            return [-4.4, -0.16, -0.95];
        } else if (isMd) {
            return [-0.98, 1.146, -0.39];
        } else {
            return [0, 2.67, -0.435];
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
                width: "1884px",
                height: "1150px",
                pointerEvents: "auto",
                overflow: "auto",
                backgroundColor: "black",
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
