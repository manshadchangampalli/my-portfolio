import { Html, MeshPortalMaterial, OrbitControls, RoundedBox, RoundedBoxGeometry } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";

interface ExperienceProps {
    setIsFixed: (isFixed: boolean) => void;
}

const Experience = ({ setIsFixed }: ExperienceProps) => {
    const [blend, setBlend] = useState(0);
    const handleBlend = () => {
        setBlend(blend === 0 ? 1 : 0);
        setIsFixed(blend === 0 ? true : false);
    };
    return (
        <>
            <RoundedBox
                args={[2, 3, 0.01]}
                radius={0.04}
                onClick={handleBlend}>
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
                <MeshPortalMaterial
                    blend={blend}
                    resolution={0}
                    blur={0}>
                    <color attach="background" args={['#ffffff']} />
                </MeshPortalMaterial>
            </RoundedBox>
            <OrbitControls
                makeDefault
                enableZoom={false}
            />
        </>
    );
};

export default Experience;
