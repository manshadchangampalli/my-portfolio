import { CameraControls, Html, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
import React, { useState, useEffect, useRef } from "react";
import { RootState, ThreeElements, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { IspgModel } from "@/components/ispg/IspgModel";

interface ExperienceProps {
    setIsFixed: (isFixed: boolean) => void;
}

const Experience = ({ setIsFixed }: ExperienceProps) => {
    const meshPortalMaterialRef = useRef<ThreeElements["portalMaterialImpl"] | null>(null);
    const [blend, setBlend] = useState(0);
    const cameraControlsRef = useRef<CameraControls>(null);

    const handleBlend = () => {
        setBlend(blend === 0 ? 1 : 0);
        setIsFixed(blend === 0 ? true : false);
    };

    useEffect(() => {
        if (cameraControlsRef.current) {
            // Disable zoom on scroll - ACTION.NONE = 0
            cameraControlsRef.current.mouseButtons.wheel = 0;
        }
    }, []);

    useEffect(() => {
        if (cameraControlsRef.current) {
            if (blend === 1) {
                cameraControlsRef.current.setLookAt(0, 2.5, -4, 0, 0, -5.5, true);
            } else {
                cameraControlsRef.current.setLookAt(0, 0, 8, 0, 0, -5, true);
            }
        }
    }, [blend]);

    useFrame((_state: RootState, delta: number) => {
        if (meshPortalMaterialRef.current) {
            easing.damp(meshPortalMaterialRef.current, "blend", blend, 0.3, delta);
        }
    });

    return (
        <>
            <RoundedBox
                args={[2, 3, 0.05]}
                radius={0.04}
                onClick={handleBlend}>
                {false && (
                    <Html
                        position={[0, 0, 0.05]}
                        transform
                        occlude="blending"
                        distanceFactor={1}
                        pointerEvents="none"
                        style={{
                            width: "820px",
                            height: "1200px",
                            pointerEvents: "none",
                        }}>
                        <div
                            style={{ borderRadius: "50px", border: "solid 5px white" }}
                            className="w-full h-full bg-black overflow-hidden">
                            <h1>Hello</h1>
                        </div>
                    </Html>
                )}
                <MeshPortalMaterial
                    ref={meshPortalMaterialRef}
                    resolution={1}
                    blur={0}>
                    <color
                        attach="background"
                        args={["#373737"]}
                    />
                    <mesh
                        onClick={handleBlend}
                        position={[0, -1, -5]}>
                        <IspgModel />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
            <CameraControls
                ref={cameraControlsRef}
                makeDefault
                maxZoom={1}
                minZoom={1}
            />
        </>
    );
};

export default Experience;
