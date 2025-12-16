import { Html } from "@react-three/drei";
import { angle } from "@/utils/angle";
import { useThirtyDaysStore } from "../../store/thirtyDaysStore";
import { dayConfig } from "./dayConfig";

export function FirstMonitorHtml() {
    const currentDate = useThirtyDaysStore((state) => state.currentDate);
    const config = dayConfig[currentDate] || dayConfig[1];
    const Component = config.component;
    const caption = config.caption;

    const handleEventPropagation = (e: React.WheelEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    return (
        <Html
            transform
            occlude
            position={[-4.4, -0.16, -0.95]}
            rotation={[angle(180), angle(180), 0]}
            distanceFactor={0.5}
            pointerEvents="auto"
            scale={1}
            style={{
                width: "1884px",
                height: "1131px",
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
