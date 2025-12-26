import { Environment, Text3D } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function HeroContent() {
    const { camera, size } = useThree();

    // Calculate bottom position based on camera's view frustum
    // This ensures consistent positioning across all devices
    const bottomPosition = useMemo(() => {
        const perspectiveCamera = camera as THREE.PerspectiveCamera;
        const fov = perspectiveCamera.fov * (Math.PI / 180);
        const distance = Math.abs(perspectiveCamera.position.z);
        const height = 2 * Math.tan(fov / 2) * distance;
        const bottomY = -height / 2;
        return bottomY + 0.25;
    }, [camera, size]);

    return (
        <>
            <RigidBody
                type="dynamic"
                position={[-1.5, -bottomPosition - 1, 0]}
                restitution={0.6}
                linearDamping={0.5}
                angularDamping={0.5}>
                <Text3D
                    font="/fonts/Orbitron_Regular.json"
                    size={0.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled={true}
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelSegments={5}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}>
                    HELLO
                    <meshNormalMaterial />
                </Text3D>
            </RigidBody>
            <RigidBody
                type="dynamic"
                position={[-1.5, -bottomPosition, 0]}
                restitution={0.6}
                linearDamping={0.5}
                angularDamping={0.5}>
                <Text3D
                    font="/fonts/Orbitron_Regular.json"
                    size={0.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled={true}
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelSegments={5}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}>
                    HELLO
                    <meshNormalMaterial />
                </Text3D>
            </RigidBody>
            <RigidBody
                type="fixed"
                position={[0, bottomPosition, 0]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>
            <Environment preset="sunset" />
        </>
    );
}
