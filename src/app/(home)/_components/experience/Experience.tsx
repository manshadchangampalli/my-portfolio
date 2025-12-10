import { Html, MeshPortalMaterial, OrbitControls, RoundedBox } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ExperienceProps {
    setIsFixed: (isFixed: boolean) => void;
}

const Experience = ({ setIsFixed }: ExperienceProps) => {
    const { scene, gl } = useThree();
    const [blend, setBlend] = useState(0);

    useEffect(() => {
        scene.background = new THREE.Color('#000000');
        gl.setClearColor('#000000', 1);
    }, [scene, gl]);

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
                    <color attach="background" args={['#000000']} />
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
