import { Html } from "@react-three/drei";
import { useMemo } from "react";
import { angle } from "@/utils/angle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { useThirtyDaysStore } from "../../store/thirtyDaysStore";
import { secondMonitorConfig } from "./secondMonitorConfig";

export function SecondMonitorHtml() {
    const { isMd, isLg } = useBreakpoints();
    const currentDate = useThirtyDaysStore((state) => state.currentDate);
    const config = secondMonitorConfig[currentDate] || secondMonitorConfig[1];

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
                {config.type === "text" && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-12 text-white">
                        <div className="max-w-3xl text-center space-y-8">
                            <h2 className="text-7xl font-medium mb-6" style={{ color: "#00c7ff" }}>
                                {config.text}
                            </h2>
                            <p className="text-4xl font-light leading-relaxed opacity-90">{config.description}</p>
                        </div>
                    </div>
                )}
                {config.type === "iframe" && config.url && (
                    <iframe
                        src={config.url}
                        className="w-full h-full border-0"
                        title="Thirty Days Website"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
                {config.type === "gif" && config.gifUrl && (
                    <div className="w-full h-full flex items-center justify-center">
                        <img src={config.gifUrl} alt="Final product showcase" className="max-w-full max-h-full object-contain" />
                    </div>
                )}
            </div>
        </Html>
    );
}
