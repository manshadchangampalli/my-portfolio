import { CameraControls } from "@react-three/drei";
import React, { useState, useEffect, useRef } from "react";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { experienceCardConfig } from "./experienceCard/experienceCard.config";

interface ExperienceProps {
    setIsFixed: (isFixed: boolean) => void;
}

const Experience = ({ setIsFixed }: ExperienceProps) => {
    const [activeSlug, setActiveSlug] = useState<string | null>(null);
    const [blend, setBlend] = useState(0);
    const cameraControlsRef = useRef<CameraControls>(null);

    const handleBlend = (slug: string) => {
        if (activeSlug === slug) {
            setActiveSlug(null);
            setBlend(0);
            setIsFixed(false);
        } else {
            setActiveSlug(slug);
            setBlend(1);
            setIsFixed(true);
        }
    };

    useEffect(() => {
        if (cameraControlsRef.current) {
            // Disable zoom on scroll - ACTION.NONE = 0
            cameraControlsRef.current.mouseButtons.wheel = 0;
        }
    }, []);

    useEffect(() => {
        if (cameraControlsRef.current && activeSlug !== null) {
            const config = experienceCardConfig.find((item) => item.slug === activeSlug);
            if (config) {
                if (blend === 1) {
                    cameraControlsRef.current.setLookAt(...config.lookAtPosition, true);
                } else {
                    // Default camera position when not active
                    cameraControlsRef.current.setLookAt(0, 0, 8, 0, 0, -5, true);
                }
            }
        } else if (cameraControlsRef.current && activeSlug === null) {
            cameraControlsRef.current.setLookAt(0, 0, 8, 0, 0, -5, true);
        }
    }, [blend, activeSlug]);

    return (
        <>
            {experienceCardConfig.map((config) => (
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

export default Experience;
