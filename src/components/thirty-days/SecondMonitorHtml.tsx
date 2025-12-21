import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";

export function SecondMonitorHtml() {
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
            <div
                onWheel={handleEventPropagation}
                className="relative w-full h-full"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(25, 65, 75, 1) 0%, rgba(15, 40, 50, 1) 40%, rgba(8, 20, 30, 1) 70%, rgba(3, 10, 18, 1) 100%)",
                }}>
            </div>
        </Html>
    );
}
