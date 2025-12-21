import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { FigmaDesign } from "./FigmaDesign";

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
            <div onWheel={handleEventPropagation} className="relative w-full h-full">
                {/* Fixed Navigation Bar */}
                <div className="fixed w-30 top-0 left-1/2 -translate-x-1/2 z-50 bg-[#000000] backdrop-blur-sm px-6 py-3 rounded-b-xl shadow-lg" />
                {/* <MeetHtml /> */}
                {/* <FigJamDesign /> */}
                {/* <EcommerceWireframe /> */}
                {/* <RestaurantRoadmap /> */}
                {/* <VSCodeShowcaseLight /> */}
                <FigmaDesign />

            </div>
        </Html>
    );
}
