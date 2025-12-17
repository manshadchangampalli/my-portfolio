/* eslint-disable @typescript-eslint/no-explicit-any */
import { CameraControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useEffect } from "react";
import { PlaneHtml } from "./PlaneHtml";
import { angle } from "@/utils/angle";
import { useCarscanStore } from "@/store/carscanStore";

interface CarscanProps {
    cameraControls: CameraControls | null;
}

export function Model({ cameraControls, ...props }: CarscanProps) {
    const { nodes }: any = useGLTF("/model/carscan/scene.gltf");
    const { currentZoom, previousZoom } = useCarscanStore();

    const computerTexture = useTexture("/texture/carscan/computer2.webp");
    const tableTexture = useTexture("/texture/carscan/table.jpg");
    const planeTexture = useTexture("/texture/carscan/wall.jpg");

    // Configure computer texture
    useEffect(() => {
        const texture = computerTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        return () => texture.dispose();
    }, [computerTexture]);

    const computerMaterial = useMemo(() => {
        const texture = computerTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        return new THREE.MeshStandardMaterial({
            map: texture,
        });
    }, [computerTexture]);

    const tableMaterial = useMemo(() => {
        const texture = tableTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        return new THREE.MeshStandardMaterial({
            map: texture,
        });
    }, [tableTexture]);

    const planeMaterial = useMemo(() => {
        const texture = planeTexture.clone();
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        return new THREE.MeshStandardMaterial({
            map: texture,
        });
    }, [planeTexture]);

    // Calculate zoom difference and apply dolly
    useEffect(() => {
        if (cameraControls) {
            const zoomDiff = currentZoom - previousZoom;
            if (Math.abs(zoomDiff) > 0.001) {
                cameraControls.dolly(-zoomDiff, true);
            }
        }
    }, [cameraControls, currentZoom, previousZoom]);



    return (
        <group
            {...props}
            position={[0, -1, 6]}
            rotation={[angle(-15), angle(-90), angle(-0)]}
            dispose={null}>
            <mesh
                name="Plane"
                geometry={nodes.Plane.geometry}
                material={planeMaterial}
                scale={7.628}
            />
            <mesh
                name="Table_Large_Rectangular_01_Circle004"
                geometry={nodes.Table_Large_Rectangular_01_Circle004.geometry}
                material={tableMaterial}
                position={[-6.002, 0, 0]}
                scale={0.238}
            />
            <group
                name="computer"
                position={[-5.756, 1.917, -0.059]}
                rotation={[1.344, -1.435, 1.279]}
                scale={3.293}>
                <mesh
                    name="mesh51422144"
                    geometry={nodes.mesh51422144.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_1"
                    geometry={nodes.mesh51422144_1.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_2"
                    geometry={nodes.mesh51422144_2.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_3"
                    geometry={nodes.mesh51422144_3.geometry}
                    material={computerMaterial}
                />
                <mesh
                    name="mesh51422144_4"
                    geometry={nodes.mesh51422144_4.geometry}
                    material={computerMaterial}
                />
            </group>
            <mesh
                position={[-6.067446977675723, 2.8458465985749326, -0.07382322910120898]}
                rotation={[THREE.MathUtils.degToRad(-150.84102354077692), THREE.MathUtils.degToRad(88.12008907322807), THREE.MathUtils.degToRad(150.8541463136918)]}
                scale={[0.16259622052225794, 0.1345657668293877, 1.0000000000000027]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial
                    color="#ffffff"
                    side={THREE.DoubleSide}
                />
                <PlaneHtml />
            </mesh>
        </group>
    );
}

useGLTF.preload("/model/carscan/scene.gltf");
