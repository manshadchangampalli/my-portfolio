import { Html } from "@react-three/drei";
import { angle } from "../../../utils";
import { Header } from "./components/Header";
import { Dock } from "./components/Dock";
import { Notes } from "./components/Notes";
import { AppListing } from "./components/AppListing";
import { AppDetail } from "./components/AppDetail";
import { AppType } from "./types";
import { appConfigs } from "./appConfigs";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const getAppName = (appType: AppType): string => {
    if (appType === AppType.NOTES) return "Notes";
    const app = appConfigs.find((a) => a.id === appType);
    return app?.name || appType;
};

export function PhoneHtml() {
    const [activeApp, setActiveApp] = useState<AppType>(AppType.NONE);
    const handleAppClick = (app: AppType) => {
        if (activeApp === app) {
            setActiveApp(AppType.NONE);
        } else {
            setActiveApp(app);
        }
    };



    const handleEventPropagation = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    return (
        <Html
            transform
            occlude
            position={[0, 0, -0.0001]}
            rotation={[0, angle(180), angle(180)]}
            distanceFactor={1}
            pointerEvents="auto"
            scale={0.372}
            style={{
                width: "390px",
                height: "844px",
                pointerEvents: "auto",
            }}>
            <div
                onWheel={handleEventPropagation}
                onPointerDown={handleEventPropagation}
                onPointerMove={handleEventPropagation}
                onPointerUp={handleEventPropagation}
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url(/texture/ispg/bg.png)] relative overflow-hidden rounded-[60px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                {activeApp === AppType.NONE ? (
                    <div className="absolute w-full h-full top-0 left-0 backdrop-blur-3xl">
                        <Header />
                        <Notes
                            isExpanded={false}
                            onToggle={() => handleAppClick(AppType.NOTES)}
                        />
                        <AppListing onAppClick={handleAppClick} />
                        <Dock onAppClick={handleAppClick} />
                    </div>
                ) : activeApp === AppType.NOTES ? (
                    <Notes
                        isExpanded={true}
                        onToggle={() => handleAppClick(AppType.NONE)}
                    />
                ) : (
                    (() => {
                        const appConfig = appConfigs.find((config) => config.id === activeApp);
                        if (appConfig) {
                            return <AppDetail app={appConfig} onBack={() => handleAppClick(AppType.NONE)} />;
                        }
                        return (
                            <div className="absolute w-full h-full top-0 left-0 bg-black">
                                <Header />
                                <div className="p-4">
                                    <button
                                        onClick={() => handleAppClick(AppType.NONE)}
                                        className="text-yellow-500 flex items-center gap-2 mb-4 cursor-pointer"
                                    >
                                        <ChevronLeft /> Back
                                    </button>
                                    <div className="text-white text-center">
                                        <h2 className="text-2xl font-bold">{getAppName(activeApp)}</h2>
                                        <p className="text-white/80 mt-2">App content for {getAppName(activeApp)}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })()
                )}
            </div>
        </Html>
    );
}
