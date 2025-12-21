import { CameraControls, Html, useProgress } from "@react-three/drei";
import React, { useEffect, useRef, useCallback, memo, useState } from "react";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { experienceCardConfig } from "./experienceCard/experienceCard.config";
import { useExperienceCardsStore } from "@/store/experienceCards.store";
import { useBreakpoints } from "@/hooks/useBreakpoints";

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
    const { isMd, isLg } = useBreakpoints();

    const getCardConfig = useCallback(() => {
        const cards = experienceCardConfig;
        let positions: [number, number, number][];
        let args: [number, number, number];

        if (isLg) {
            positions = cards.map((card) => card.cardPosition);
            args = [2.5, 4, 0.05];
        } else if (isMd) {
            positions = [
                [-1, 1.5, 0.01],
                [1, 1.5, 0.02],
                [-1, -1.2, 0.03],
                [1, -1.2, 0.04],
            ];
            args = [1.5, 2.5, 0.05];
        } else {
            positions = [
                [0, 2.6, 0.01],
                [0, 0.85, 0.02],
                [0, -0.9, 0.03],
                [0, -2.7, 0.04],
            ];
            args = [1, 1.5, 0.05];
        }

        return { positions, args };
    }, [isLg, isMd]);

    const handleBlend = useCallback(
        (slug: string) => {
            toggleActiveSlug(slug);
        },
        [toggleActiveSlug]
    );

    const handleCameraControlsRef = useCallback((controls: CameraControls | null) => {
        cameraControlsRef.current = controls;
        setCameraControls(controls);
    }, []);

    const cameraPositionChange = useCallback(() => {
        console.log({ isLg, isMd });
        if (cameraControlsRef.current) {
            const config = experienceCardConfig.find((item) => item.slug === activeSlug);
            if (config) {
                const lookAtPosition = isLg ? config.lookAtPosition.lg : isMd ? config.lookAtPosition.md : config.lookAtPosition.sm;
                cameraControlsRef.current.setLookAt(...lookAtPosition, true);
                return;
            }
            cameraControlsRef.current.setLookAt(0, 0, 8, 0, 0, -5, true);
        }
    }, [activeSlug, cameraControlsRef, isLg, isMd]);

    useEffect(() => {
        cameraPositionChange();
    }, [activeSlug, cameraPositionChange]);

    useEffect(() => {
        setIsFixed(activeSlug !== null);
    }, [activeSlug, setIsFixed]);

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

    const { positions: cardPositions, args: boxArgs } = getCardConfig();

    return (
        <>
            <Html fullscreen>
                <h1 className="font-poller-one text-white text-3xl sm:text-4xl md:text-5xl md:mt-10 lg:mt-0 lg:text-6xl uppercase leading-tight text-center">
                    My Evolution
                </h1>
            </Html>
            {experienceCardConfig?.map((config, index) => {
                const position = cardPositions[index] as [number, number, number];
                return (
                    <ExperienceCard
                        key={config.id}
                        config={config}
                        blend={activeSlug === config.slug ? blend : 0}
                        onClick={() => handleBlend(config.slug)}
                        cameraControls={cameraControls}
                        position={position}
                        args={boxArgs}
                    />
                );
            })}
            <CameraControls
                ref={handleCameraControlsRef}
                makeDefault
                enabled={false}
            />
        </>
    );
};

export default memo(Experience);
