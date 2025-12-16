import { Environment, Html, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import React, { useRef, memo } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ExperienceCardConfig } from "./experienceCard.config";
import { ArrowUpRight } from "lucide-react";

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
                pointerEvents="auto"
                style={{ width: "250px", height: "390px", pointerEvents: "auto" }}>
                <div
                    className="absolute top-0 w-[250px] h-[390px] left-0 rounded-[20px] border border-white bg-black/50 flex justify-center items-center"
                    style={{ pointerEvents: "none" }}>
                    <h1 className="text-white text-2xl font-bold">{config.name}</h1>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            onClick();
                        }}
                        className="border p-4 w-[95%] gap-2 flex justify-center items-center cursor-pointer border-white text-white absolute bottom-2 group hover:bottom-1 hover:bg-white hover:text-black transition-all duration-300 rounded-2xl left-1/2 -translate-x-1/2"
                        style={{ pointerEvents: "auto" }}>
                        <span>
                            WHAT I DID?
                        </span>
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
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
                            args={[config.bgColor]}
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
