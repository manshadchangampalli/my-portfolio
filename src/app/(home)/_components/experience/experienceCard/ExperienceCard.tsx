import { Environment, Html, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import React, { useRef, memo } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ExperienceCardConfig } from "./experienceCard.config";

interface ExperienceCardProps {
    config: ExperienceCardConfig;
    blend: number;
    onClick: () => void;
}

const ExperienceCard = ({ config, blend, onClick }: ExperienceCardProps) => {
    const meshPortalMaterialRef = useRef<ThreeElements["portalMaterialImpl"] | null>(null);

    useFrame((_state, delta: number) => {
        if (meshPortalMaterialRef.current) {
            easing.damp(meshPortalMaterialRef.current, "blend", blend, 0.5, delta);
        }
    });

    return (
        <RoundedBox
            args={[2.5, 4, 0.05]}
            rotation={config.rotation}
            radius={0.05}
            position={config.cardPosition}
            onClick={onClick}>
            <Html
                center
                position={[0, 0, 0.026]}
                rotation={[0, 0, 0]}
                scale={1}
                pointerEvents="none"
                style={{ width: "250px", height: "390px", pointerEvents: "none" }}>
                <div
                    className="absolute top-0 w-[250px] h-[390px] left-0 rounded-[20px] border border-white bg-black/50 flex justify-center items-center pointer-events-none">
                    <h1 className="text-white text-2xl font-bold">{config.name}</h1>
                </div>
            </Html>
            <MeshPortalMaterial
                ref={meshPortalMaterialRef}
                resolution={1}
                blur={0}>
                {blend === 1 && (
                    <>
                        <Environment preset="apartment" />
                        <color
                            attach="background"
                            args={["#000000"]}
                        />
                        <group
                            onClick={onClick}
                            position={config.modelPosition}>
                            {config.component({})}
                        </group>
                    </>
                )}
            </MeshPortalMaterial>
        </RoundedBox>
    );
};

export default memo(ExperienceCard);
