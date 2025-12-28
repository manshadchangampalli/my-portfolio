import { Environment, Text3D } from "@react-three/drei";
import { CollisionEnterPayload, RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { SPHERES_CONFIG, TEXT3D_CONFIG } from "../../_config/heroContent.config";
import { audioManager } from "@/utils/audioManager";
import { useBreakpoints } from "@/hooks/useBreakpoints";

export default function HeroContent({ setRemoveBlackOverlay }: { setRemoveBlackOverlay: () => void }) {
    const { camera, size } = useThree();

    // Create refs for all spheres dynamically
    const sphereRefs = useRef<{ [key: string]: THREE.Mesh | null }>({});
    const { isLg, isMd } = useBreakpoints();
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
        setTimeout(() => {
            setRemoveBlackOverlay();
        }, 1000);
        // Animate all spheres to their end positions while scaling down and fading out
        SPHERES_CONFIG.forEach((sphere) => {
            const sphereRef = sphereRefs.current[sphere.id];
            if (sphereRef) {
                const material = sphereRef.material as THREE.MeshStandardMaterial;
                if (!material) return;

                const ease = sphere.ease || "power2.inOut";

                // Create a timeline to run all animations in parallel
                const tl = gsap.timeline();

                // Add all animations to start at the same time (position 0)
                tl.to(
                    sphereRef.position,
                    {
                        x: sphere.targetPosition.x,
                        y: sphere.targetPosition.y,
                        z: sphere.targetPosition.z,
                        duration: sphere.duration,
                        ease: ease,
                    },
                    0
                ) // Start at time 0
                    .to(
                        sphereRef.scale,
                        {
                            x: sphere.targetScale || 1,
                            y: sphere.targetScale || 1,
                            z: sphere.targetScale || 1,
                            duration: sphere.duration,
                            ease: ease,
                        },
                        0
                    ) // Start at time 0 (parallel)
                    .to(
                        material,
                        {
                            opacity: 0,
                            duration: sphere.duration + 1,
                            ease: ease,
                        },
                        0
                    ); // Start at time 0 (parallel)
            }
        });
    };

    const handleTextCollision = (e: CollisionEnterPayload) => {
        const vel = e.target.rigidBody?.linvel();
        if (vel) {
            const speed = Math.sqrt(vel.x ** 2 + vel.y ** 2 + vel.z ** 2);
            const volume = Math.min(speed / 5, 1);
            audioManager.play("/sounds/collision-sound.mp3", volume);
        }
    };

    const getTextSize = useCallback(
        (sizes: { lg: number; md: number; sm: number }) => {
            return isLg ? sizes.lg : isMd ? sizes.md : sizes.sm;
        },
        [isLg, isMd]
    );

    const getTextX = useCallback(
        (x: { lg: number; md: number; sm: number }) => {
            return isLg ? x.lg : isMd ? x.md : x.sm;
        },
        [isLg, isMd]
    );

    const getTextHeight = useCallback(
        (heights: { lg: number; md: number; sm: number }) => {
            return isLg ? heights.lg : isMd ? heights.md : heights.sm;
        },
        [isLg, isMd]
    );

    return (
        <>
            {TEXT3D_CONFIG.map((textConfig, index) => (
                <RigidBody
                    key={textConfig.id}
                    type="dynamic"
                    position={[getTextX(textConfig.x), -bottomPosition + textConfig.yOffset, 0]}
                    restitution={textConfig.restitution}
                    {...(textConfig.gravityScale !== undefined && { gravityScale: textConfig.gravityScale })}
                    linearDamping={textConfig.linearDamping}
                    onCollisionEnter={handleTextCollision}
                    angularDamping={textConfig.angularDamping}>
                    <Text3D
                        font="/fonts/Orbitron_Regular.json"
                        size={getTextSize(textConfig.size)}
                        height={getTextHeight(textConfig.height)}
                        curveSegments={textConfig.curveSegments || 12}
                        bevelEnabled={textConfig.bevelEnabled ?? true}
                        bevelThickness={textConfig.bevelThickness || 0.02}
                        bevelSize={textConfig.bevelSize || 0.02}
                        bevelSegments={textConfig.bevelSegments || 5}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}>
                        {textConfig.text}
                        <meshNormalMaterial />
                    </Text3D>
                </RigidBody>
            ))}
            <RigidBody
                onCollisionEnter={handlePlaneCollision}
                type="fixed"
                position={[0, bottomPosition, 0]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </RigidBody>
            {SPHERES_CONFIG.map((sphere) => (
                <mesh
                    key={sphere.id}
                    ref={(el) => {
                        sphereRefs.current[sphere.id] = el;
                    }}
                    position={[0, bottomPosition + sphere.initialYOffset, 0]}
                    scale={sphere.initialScale || 1}>
                    <sphereGeometry args={[sphere.radius, 32, 32]} />
                    <meshStandardMaterial
                        color="white"
                        transparent
                        opacity={1}
                    />
                </mesh>
            ))}
            <Environment preset="sunset" />
        </>
    );
}
