import { Environment, Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { SPHERES_CONFIG, TEXT3D_CONFIG } from "../../_config/heroContent.config";
import useDevice from "@/hooks/useDevice";

export default function HeroContent() {
    const { camera, size } = useThree();
    const { isMobile } = useDevice();

    // Create refs for all spheres dynamically
    const sphereRefs = useRef<{ [key: string]: THREE.Mesh | null }>({});

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

    const handlePlaneCollision = () => {
        console.log("collision");
        // Animate all spheres to their end positions while scaling down
        SPHERES_CONFIG.forEach((sphere) => {
            const sphereRef = sphereRefs.current[sphere.id];
            if (sphereRef) {
                // Animate position
                gsap.to(sphereRef.position, {
                    x: sphere.targetPosition.x,
                    y: sphere.targetPosition.y,
                    z: sphere.targetPosition.z,
                    duration: sphere.duration,
                    ease: sphere.ease || "power2.inOut",
                });
                // Animate scale
                gsap.to(sphereRef.scale, {
                    x: sphere.targetScale || 1,
                    y: sphere.targetScale || 1,
                    z: sphere.targetScale || 1,
                    duration: sphere.duration,
                    ease: sphere.ease || "power2.inOut",
                });
            }
        });
    };

    return (
        <>
            {TEXT3D_CONFIG.map((textConfig) => {
                // Reduce complexity on mobile for better performance (keep original size)
                const curveSegments = isMobile ? 6 : (textConfig.curveSegments || 12);
                const bevelEnabled = isMobile ? false : (textConfig.bevelEnabled ?? true);
                const bevelSegments = isMobile ? 3 : (textConfig.bevelSegments || 5);

                return (
                    <RigidBody
                        key={textConfig.id}
                        type="dynamic"
                        position={[textConfig.x, -bottomPosition + textConfig.yOffset, 0]}
                        restitution={textConfig.restitution}
                        {...(textConfig.gravityScale !== undefined && { gravityScale: textConfig.gravityScale })}
                        linearDamping={textConfig.linearDamping}
                        angularDamping={textConfig.angularDamping}>
                        <Text3D
                            font="/fonts/Orbitron_Regular.json"
                            size={textConfig.size}
                            height={textConfig.height}
                            curveSegments={curveSegments}
                            bevelEnabled={bevelEnabled}
                            bevelThickness={textConfig.bevelThickness || 0.02}
                            bevelSize={textConfig.bevelSize || 0.02}
                            bevelSegments={bevelSegments}
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}>
                            {textConfig.text}
                            <meshNormalMaterial />
                        </Text3D>
                    </RigidBody>
                );
            })}
            <RigidBody
                onCollisionEnter={handlePlaneCollision}
                type="fixed"
                position={[0, bottomPosition, 0]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>
            {SPHERES_CONFIG.map((sphere) => {
                // Reduce sphere geometry segments on mobile for better performance
                const segments = isMobile ? 16 : 32;

                return (
                    <mesh
                        key={sphere.id}
                        ref={(el) => {
                            sphereRefs.current[sphere.id] = el;
                        }}
                        position={[0, bottomPosition + sphere.initialYOffset, 0]}
                        scale={sphere.initialScale || 1}>
                        <sphereGeometry args={[sphere.radius, segments, segments]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                );
            })}
            <Environment preset="sunset" />
        </>
    );
}
