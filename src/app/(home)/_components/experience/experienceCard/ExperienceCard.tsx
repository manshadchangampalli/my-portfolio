import { Environment, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import React, { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ExperienceCardConfig } from "./experienceCard.config";
import { IspgModel } from "@/components/ispg/IspgModel";
import { ThirtyDaysModel } from "@/components/thirty-days/ThirtyDays";

interface ExperienceCardProps {
    config: ExperienceCardConfig;
    blend: number;
    onClick: () => void;
}

const ExperienceCard = ({ config, blend, onClick }: ExperienceCardProps) => {
    const meshPortalMaterialRef = useRef<ThreeElements["portalMaterialImpl"] | null>(null);

    useFrame((_state, delta: number) => {
        if (meshPortalMaterialRef.current) {
            easing.damp(meshPortalMaterialRef.current, "blend", blend, 0.3, delta);
        }
    });

    // Dynamic model loader based on slug
    const renderModel = () => {
        if (config.slug.startsWith("ispg")) {
            return <IspgModel />;
        }
        return null;
    };

    return (
        <RoundedBox
            args={[2, 3, 0.05]}
            radius={0.04}
            position={config.cardPosition}
            onClick={onClick}>
            <MeshPortalMaterial
                ref={meshPortalMaterialRef}
                resolution={1}
                blur={0}>
                <Environment preset="apartment" />
                <color
                    attach="background"
                    args={[config.bgColor]}
                />
                {blend === 1 && (
                    <mesh
                        onDoubleClick={onClick}
                        position={config.modelPosition}>
                        {renderModel()}
                    </mesh>
                )}
            </MeshPortalMaterial>
        </RoundedBox>
    );
};

export default ExperienceCard;
