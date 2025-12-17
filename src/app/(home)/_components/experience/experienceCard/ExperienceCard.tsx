import { CameraControls, Environment, Html, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
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
}

const ExperienceCard = ({ config, blend, onClick, cameraControls }: ExperienceCardProps) => {
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
    }, [isHovered])

    return (
        <RoundedBox
            args={[2.5, 4, 0.05]}
            rotation={config.rotation}
            radius={0.05}
            position={config.cardPosition}
            onPointerOver={() => {
                setIsHovered(true);
            }}
            onPointerOut={() => {
                setIsHovered(false);
            }}
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
                    <div className="border p-4 w-[95%] gap-2 flex justify-center items-center cursor-pointer border-white text-white absolute bottom-2 group hover:bottom-1 hover:bg-white hover:text-black transition-all duration-300 rounded-2xl left-1/2 -translate-x-1/2">
                        <span>
                            WHAT I DID?
                        </span>
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
            </Html>
            <MeshPortalMaterial
                ref={meshPortalMaterialRef}
                resolution={512}
                blur={0}>
                {blend === 1 && (
                    <>
                        <Environment preset="apartment" />
                        <color
                            attach="background"
                            args={[config.bgColor]}
                        />
                        <group
                            position={config.modelPosition}>
                            {config.component({ cameraControls })}
                        </group>
                    </>
                )}
            </MeshPortalMaterial>
        </RoundedBox>
    );
};

export default memo(ExperienceCard);
