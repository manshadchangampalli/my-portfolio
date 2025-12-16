import { CameraControls, Html, Text } from "@react-three/drei";
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { experienceCardConfig } from "./experienceCard/experienceCard.config";

interface ExperienceProps {
    setIsFixed: (isFixed: boolean) => void;
}

const Experience = ({ setIsFixed }: ExperienceProps) => {
    const [activeSlug, setActiveSlug] = useState<string | null>(null);
    const [blend, setBlend] = useState(0);
    const cameraControlsRef = useRef<CameraControls>(null);

    const handleBlend = useCallback((slug: string) => {
        if (activeSlug === slug) {
            setActiveSlug(null);
            setBlend(0);
            setIsFixed(false);
        } else {
            setActiveSlug(slug);
            setBlend(1);
            setIsFixed(true);
        }
    }, [activeSlug, setIsFixed]);

    useEffect(() => {
        if (cameraControlsRef.current) {
            // Disable zoom on scroll - ACTION.NONE = 0
            // cameraControlsRef.current.mouseButtons.wheel = 0;
        }
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
                />
            ))}
            <CameraControls
                ref={cameraControlsRef}
                makeDefault
                enabled={false}
            />
        </>
    );
};

export default memo(Experience);
