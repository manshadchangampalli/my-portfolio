import { Environment, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import React, { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ExperienceCardConfig } from "./experienceCard.config";

interface ExperienceCardProps {
    config: ExperienceCardConfig;
    blend: number;
    onClick: () => void;
    activeSlug: string | null;
}

const ExperienceCard = ({ config, blend, onClick, activeSlug }: ExperienceCardProps) => {
    const meshPortalMaterialRef = useRef<ThreeElements["portalMaterialImpl"] | null>(null);

    useFrame((_state, delta: number) => {
        if (meshPortalMaterialRef.current) {
            easing.damp(meshPortalMaterialRef.current, "blend", blend, 0.5, delta);
        }
    });

    return (
        <RoundedBox
            args={[2, 3, 0.05]}
            radius={0.04}
            position={config.cardPosition}
            onClick={activeSlug === null ? onClick : undefined}>
            <MeshPortalMaterial
                ref={meshPortalMaterialRef}
                resolution={1}
                blur={0}>
                <Environment preset="apartment" />
                <color
                    attach="background"
                    args={activeSlug === null ? ['#ffffff'] : [config.bgColor]}
                />
                {blend === 1 && (
                    <group
                        onDoubleClick={blend === 1 ? onClick : undefined}
                        position={config.modelPosition}>
                        {config.component({})}
                    </group>
                )}
            </MeshPortalMaterial>
        </RoundedBox>
    );
};

export default ExperienceCard;
