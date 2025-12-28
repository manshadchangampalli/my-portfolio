import { CameraControls, Environment, Html, MeshPortalMaterial, Preload, RoundedBox, Text, Text3D } from "@react-three/drei";
import React, { useRef, memo, useEffect, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ExperienceCardConfig } from "./experienceCard.config";
import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
    config: ExperienceCardConfig;
    blend: number;
    onClick: () => void;
    cameraControls: CameraControls | null;
    position?: [number, number, number];
    args?: [number, number, number];
}

const ExperienceCard = ({ config, blend, onClick, cameraControls, position, args }: ExperienceCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const meshPortalMaterialRef = useRef<ThreeElements["portalMaterialImpl"] | null>(null);

    useFrame((_state, delta: number) => {
        if (meshPortalMaterialRef.current) {
            easing.damp(meshPortalMaterialRef.current, "blend", blend, 0.5, delta);
        }
    });

    useEffect(() => {
        if (isHovered) {
            document.body.style.cursor = "pointer";
        }
        return () => {
            document.body.style.cursor = "default";
        };
    }, [isHovered]);

    // Calculate position with z-offset to prevent overlap issues
    const cardPosition = position || config.cardPosition;
    const positionWithZ: [number, number, number] = [cardPosition[0], cardPosition[1], cardPosition[2]];

    // Use passed args or default to original size
    const boxArgs: [number, number, number] = args || [2.5, 4, 0.05];

    return (
        <RoundedBox
            args={boxArgs}
            rotation={config.rotation}
            radius={0.05}
            position={positionWithZ}
            onPointerOver={() => {
                setIsHovered(true);
            }}
            onPointerOut={() => {
                setIsHovered(false);
            }}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}>
            <Html
                position={[0, 0, 0.1]}
                center
                transform
                pointerEvents="none"
                occlude
                className="pointer-events-none select-none">
                <div className="font-orbitron lg:text-[8px] sm:text-[5px] text-[3px] font-semibold text-white uppercase text-center whitespace-nowrap">{config.name}</div>
            </Html>
            <MeshPortalMaterial
                ref={meshPortalMaterialRef}
                resolution={512}
                blur={0}>
                <Preload all />
                <Environment preset="sunset" />
                <color
                    attach="background"
                    args={[config.bgColor]}
                />
                <group position={config.modelPosition}>{config.component({ cameraControls, blend })}</group>
            </MeshPortalMaterial>
        </RoundedBox>
    );
};

export default memo(ExperienceCard);
