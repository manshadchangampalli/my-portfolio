import { Html } from "@react-three/drei";
import { angle } from "../../../utils";

export function SecondMonitorHtml() {
    const handleEventPropagation = (e: React.WheelEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    return (
        <Html
            transform
            occlude
            position={[0, 0, 0.0001]}
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
                {/* <FigmaDesign /> */}
            </div>
        </Html>
    );
}
