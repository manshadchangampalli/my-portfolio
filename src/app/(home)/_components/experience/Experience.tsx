import { CameraControls, Html, useProgress } from "@react-three/drei";
import React, { useEffect, useRef, useCallback, memo, useState } from "react";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { experienceCardConfig } from "./experienceCard/experienceCard.config";
import { useExperienceCardsStore } from "@/store/experienceCards.store";

interface ExperienceProps {
    setIsFixed: (isFixed: boolean) => void;
    setIsLoading?: (isLoading: boolean) => void;
    setLoadingProgress?: (progress: number) => void;
}

const Experience = ({ setIsFixed, setIsLoading, setLoadingProgress }: ExperienceProps) => {
    const { activeSlug, blend, toggleActiveSlug } = useExperienceCardsStore();
    const cameraControlsRef = useRef<CameraControls>(null);
    const [cameraControls, setCameraControls] = useState<CameraControls | null>(null);
    const { progress, active } = useProgress();

    const handleBlend = useCallback((slug: string) => {
        toggleActiveSlug(slug);
    }, [toggleActiveSlug]);

    const handleCameraControlsRef = useCallback((controls: CameraControls | null) => {
        cameraControlsRef.current = controls;
        setCameraControls(controls);
    }, []);


    const cameraPositionChange = useCallback(() => {
        if (cameraControlsRef.current) {
            const config = experienceCardConfig.find((item) => item.slug === activeSlug);
            if (config) {
                cameraControlsRef.current.setLookAt(...config?.lookAtPosition, true);
                return;
            }
            cameraControlsRef.current.setLookAt(0, 0, 8, 0, 0, -5, true);
        }
    }, [activeSlug, cameraControlsRef]);

    useEffect(() => {
        cameraPositionChange();
    }, [activeSlug, cameraPositionChange]);

    useEffect(() => {
        setIsFixed(activeSlug !== null);
    }, [activeSlug, setIsFixed]);

    // Track loading progress and notify parent
    useEffect(() => {
        if (setIsLoading) {
            setIsLoading(active);
        }
    }, [active, setIsLoading]);

    useEffect(() => {
        if (setLoadingProgress) {
            setLoadingProgress(Math.round(progress));
        }
    }, [progress, setLoadingProgress]);

    return (
        <>
            <Html fullscreen>
                <h1 className="text-white text-center text-[56px] font-poller-one font-bold">Experience</h1>
            </Html>
            {experienceCardConfig?.map((config) => (
                <ExperienceCard
                    key={config.id}
                    config={config}
                    blend={activeSlug === config.slug ? blend : 0}
                    onClick={() => handleBlend(config.slug)}
                    cameraControls={cameraControls}
                />
            ))}
            <CameraControls
                ref={handleCameraControlsRef}
                makeDefault
                enabled={false}
            />
        </>
    );
};

export default memo(Experience);
