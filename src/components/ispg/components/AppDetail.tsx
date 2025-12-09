import { useState, useEffect } from "react";
import { Header } from "./Header";
import { type AppConfig } from "../types";
import "../phoneCss.css";

interface AppDetailProps {
    app: AppConfig;
    onBack: () => void;
}

export function AppDetail({ app, onBack }: AppDetailProps) {
    const [showSplash, setShowSplash] = useState(!!app.splashScreen);
    const ContentComponent = app.content;

    useEffect(() => {
        if (app.splashScreen) {
            const duration = app.splashScreen.duration || 2000;
            const timer = setTimeout(() => {
                setShowSplash(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [app.splashScreen]);

    if (showSplash && app.splashScreen) {
        return (
            <div
                className="absolute w-full h-full top-0 left-0 flex flex-col"
                style={{ backgroundColor: app.themeColor }}
            >
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <h1 className="splash-skeleton-text">{app.name}</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="absolute w-full h-full top-0 left-0" style={{ backgroundColor: app.themeColor }}>
            <Header />
            <div className="p-4">
                <button
                    onClick={onBack}
                    className="text-white flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80"
                >
                    <span>←</span> Back
                </button>
                <ContentComponent app={app} />
            </div>
        </div>
    );
}

