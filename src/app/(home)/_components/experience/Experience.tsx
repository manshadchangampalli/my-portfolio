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
    const [isLg, setIsLg] = useState<boolean>(false);
    const [isMd, setIsMd] = useState<boolean>(false);

    // Track Tailwind breakpoints using media queries
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Tailwind breakpoints: md: 768px, lg: 1024px
        const mdQuery = window.matchMedia('(min-width: 768px)');
        const lgQuery = window.matchMedia('(min-width: 1024px)');

        const updateBreakpoints = () => {
            setIsMd(mdQuery.matches);
            setIsLg(lgQuery.matches);
        };

        // Initial check
        updateBreakpoints();

        // Listen for changes
        mdQuery.addEventListener('change', updateBreakpoints);
        lgQuery.addEventListener('change', updateBreakpoints);

        return () => {
            mdQuery.removeEventListener('change', updateBreakpoints);
            lgQuery.removeEventListener('change', updateBreakpoints);
        };
    }, []);

    // Calculate card positions based on Tailwind breakpoints
    const getCardPositions = useCallback(() => {
        const cards = experienceCardConfig;

        // lg breakpoint (>= 1024px): horizontal layout (original positions)
        if (isLg) {
            return cards.map((card) => card.cardPosition);
        }

        // md breakpoint (>= 768px): 2 cards per row
        if (isMd) {
            return [
                [-1, 1.5, 0],   // CarScan - top left
                [1, 1.5, 0],    // Confiance Labs - top right
                [-1, -1.2, 0],  // ISPG - bottom left
                [1, -1.2, 0],   // Thirty Days - bottom right
            ];
        }

        // Default (< 768px): 1 card per row (vertical)
        return [
            [0, 2.3, 0],   // CarScan
            [0, 0.7, 0],   // Confiance Labs
            [0, -0.9, 0],  // ISPG
            [0, -2.5, 0],  // Thirty Days
        ];
    }, [isLg, isMd]);

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

    const cardPositions = getCardPositions();

    return (
        <>
            <Html fullscreen>
                <h1 className="font-poller-one text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-center">Evolution</h1>
            </Html>
            {experienceCardConfig?.map((config, index) => (
                <ExperienceCard
                    key={config.id}
                    config={config}
                    blend={activeSlug === config.slug ? blend : 0}
                    onClick={() => handleBlend(config.slug)}
                    cameraControls={cameraControls}
                    position={cardPositions[index] as [number, number, number]}
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
