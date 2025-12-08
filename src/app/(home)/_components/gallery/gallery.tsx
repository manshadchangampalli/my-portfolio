"use client";

import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChromaticAberration, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import "./config/gridShaderMaterial";
import { BlendFunction } from "postprocessing";
import { SKILLS } from "./config/images";

interface AtlasTextures {
    imageAtlas: THREE.CanvasTexture;
    textAtlas: THREE.CanvasTexture;
}

type PointerOrTouchEvent = PointerEvent | TouchEvent;

interface DragStart {
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
}

const Gallery = () => {
    const [isDraggingState, setIsDraggingState] = useState(false);
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport, size, gl } = useThree();
    const [mousePos, setMousePos] = useState(new THREE.Vector2(-1, -1));

    const textures = useTexture(SKILLS.map((p) => p.url));
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Check if all images are actually loaded
    useEffect(() => {
        if (!textures || textures.length === 0) return;

        const checkLoaded = () => {
            const allLoaded = textures.every((texture) => {
                if (!texture || !texture.image) return false;
                const img = texture.image;
                if (img instanceof HTMLImageElement) {
                    return img.complete && img.width > 0 && img.height > 0;
                }
                return true;
            });
            setImagesLoaded(allLoaded);
        };

        // Check immediately
        checkLoaded();

        // Also check after a short delay in case images are still loading
        const timeout = setTimeout(checkLoaded, 100);
        return () => clearTimeout(timeout);
    }, [textures]);

    const atlasResult = useMemo<AtlasTextures | null>(() => {
        // IMPORTANT: Only create atlas when images are actually loaded
        if (!imagesLoaded || !textures || textures.length === 0 || textures.length !== SKILLS.length) {
            return null;
        }

        const atlasSize = Math.ceil(Math.sqrt(SKILLS.length));
        const textureSize = 512;

        // Image Atlas
        const imageCanvas = document.createElement("canvas");
        imageCanvas.width = atlasSize * textureSize;
        imageCanvas.height = atlasSize * textureSize;
        const imageCtx = imageCanvas.getContext("2d");
        if (!imageCtx) return null;

        // Fill with black background
        imageCtx.fillStyle = "#000000";
        imageCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height);

        textures.forEach((texture, i) => {
            const col = i % atlasSize;
            const row = Math.floor(i / atlasSize);
            const x = col * textureSize;
            const y = row * textureSize;

            let img: CanvasImageSource | null = null;

            if (texture && texture.image) {
                const image = texture.image;
                if (image instanceof HTMLImageElement) {
                    if (image.width > 0 && image.height > 0 && image.complete) {
                        img = image;
                    }
                } else {
                    img = image as CanvasImageSource;
                }
            }

            if (img) {
                try {
                    // Save canvas state and clip to cell boundaries to prevent overflow
                    imageCtx.save();
                    imageCtx.beginPath();
                    imageCtx.rect(x, y, textureSize, textureSize);
                    imageCtx.clip();

                    // Object-cover behavior: scale image to cover cell while maintaining aspect ratio
                    let imgWidth = textureSize;
                    let imgHeight = textureSize;

                    if (img instanceof HTMLImageElement) {
                        imgWidth = img.naturalWidth || img.width || textureSize;
                        imgHeight = img.naturalHeight || img.height || textureSize;
                    } else if (img instanceof HTMLVideoElement) {
                        imgWidth = img.videoWidth || textureSize;
                        imgHeight = img.videoHeight || textureSize;
                    } else if (img instanceof HTMLCanvasElement) {
                        imgWidth = img.width || textureSize;
                        imgHeight = img.height || textureSize;
                    }

                    const imgAspect = imgWidth / imgHeight;
                    const cellAspect = 1.0; // Cell is square

                    let drawWidth = textureSize;
                    let drawHeight = textureSize;
                    let drawX = x;
                    let drawY = y;

                    if (imgAspect > cellAspect) {
                        // Image is wider - fit to height, crop width
                        drawHeight = textureSize;
                        drawWidth = textureSize * imgAspect;
                        drawX = x - (drawWidth - textureSize) / 2;
                    } else {
                        // Image is taller - fit to width, crop height
                        drawWidth = textureSize;
                        drawHeight = textureSize / imgAspect;
                        drawY = y - (drawHeight - textureSize) / 2;
                    }

                    // Draw image to fill the entire cell with object-cover behavior
                    // The clip region ensures it doesn't overflow into adjacent cells
                    imageCtx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

                    // Restore canvas state
                    imageCtx.restore();
                } catch (e) {
                    console.warn(`Failed to draw texture ${i}:`, e);
                    // Fill with a visible color if drawing fails
                    imageCtx.fillStyle = "#333333";
                    imageCtx.fillRect(x, y, textureSize, textureSize);
                }
            } else {
                // Fill with a placeholder color if image is missing
                console.warn(`Missing image for texture ${i}`);
                imageCtx.fillStyle = "#222222";
                imageCtx.fillRect(x, y, textureSize, textureSize);
            }
        });

        // Text Atlas - transparent background for text only
        const textCanvas = document.createElement("canvas");
        textCanvas.width = atlasSize * textureSize;
        textCanvas.height = atlasSize * textureSize;
        const textCtx = textCanvas.getContext("2d");
        if (!textCtx) return null;
        // Don't fill with black - keep transparent so text appears without background
        // textCtx.fillStyle = "#000";
        // textCtx.fillRect(0, 0, textCanvas.width, textCanvas.height);

        SKILLS.forEach((skill, i) => {
            const col = i % atlasSize;
            const row = Math.floor(i / atlasSize);
            const x = col * textureSize;
            const y = row * textureSize;

            // Don't clear with black - keep transparent background
            // textCtx.fillStyle = "#000000";
            // textCtx.fillRect(x, y, textureSize, textureSize);

            // Draw text only in the bottom portion of the cell (10% for smaller text)
            // No background - just transparent text
            const textAreaHeight = textureSize * 0.1; // 10% of cell height for text
            const textAreaY = y + textureSize - textAreaHeight; // Bottom portion

            // Don't fill background - keep it transparent
            // The text will be drawn directly on transparent background

            // Enable text rendering hints for better quality
            textCtx.textAlign = "center";
            textCtx.textBaseline = "middle";

            // Enable better text rendering
            textCtx.imageSmoothingEnabled = true;
            textCtx.imageSmoothingQuality = "high";

            // Use a smaller font size for better readability
            const fontSize = Math.min(textAreaHeight * 0.6, 20); // 60% of text area height, max 28px
            textCtx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`;

            // Draw text with better contrast and visibility
            textCtx.fillStyle = "#ffffff";

            // Add stronger text shadow for better visibility against images
            textCtx.shadowColor = "#000000";
            textCtx.shadowBlur = 10;
            textCtx.shadowOffsetX = 2;
            textCtx.shadowOffsetY = 2;

            // Draw text centered in the text area
            const textCenterX = x + textureSize / 2;
            const textCenterY = textAreaY + textAreaHeight / 2;
            textCtx.fillText(skill.name, textCenterX, textCenterY);

            // Reset shadow
            textCtx.shadowBlur = 0;
            textCtx.shadowOffsetX = 0;
            textCtx.shadowOffsetY = 0;
        });

        const imageAtlasTexture = new THREE.CanvasTexture(imageCanvas);
        imageAtlasTexture.needsUpdate = true;
        // Set proper texture parameters
        imageAtlasTexture.flipY = false;
        imageAtlasTexture.generateMipmaps = false;
        imageAtlasTexture.minFilter = THREE.LinearFilter;
        imageAtlasTexture.magFilter = THREE.LinearFilter;
        imageAtlasTexture.wrapS = THREE.ClampToEdgeWrapping;
        imageAtlasTexture.wrapT = THREE.ClampToEdgeWrapping;

        const textAtlasTexture = new THREE.CanvasTexture(textCanvas);
        textAtlasTexture.needsUpdate = true;
        textAtlasTexture.flipY = false;
        textAtlasTexture.generateMipmaps = false;
        textAtlasTexture.minFilter = THREE.LinearFilter;
        textAtlasTexture.magFilter = THREE.LinearFilter;
        textAtlasTexture.wrapS = THREE.ClampToEdgeWrapping;
        textAtlasTexture.wrapT = THREE.ClampToEdgeWrapping;

        console.log(`Atlas created successfully with ${SKILLS.length} images`);

        return { imageAtlas: imageAtlasTexture, textAtlas: textAtlasTexture };
    }, [textures, imagesLoaded]);

    const imageAtlas = atlasResult?.imageAtlas ?? null;
    const textAtlas = atlasResult?.textAtlas ?? null;

    const scrollOffset = useRef(new THREE.Vector2(0, 0));
    const velocity = useRef(new THREE.Vector2(0, 0));
    const isDragging = useRef<boolean>(false);
    const dragStart = useRef<DragStart>({ x: 0, y: 0, offsetX: 0, offsetY: 0 });
    const targetZoom = useRef(1.0);
    const currentZoom = useRef(1.0);

    // Helper function to extract client coordinates from pointer or touch events
    const getClientCoordinates = (e: PointerOrTouchEvent): { x: number; y: number } => {
        if ("touches" in e && e.touches.length > 0) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        if ("clientX" in e) {
            return { x: e.clientX, y: e.clientY };
        }
        return { x: 0, y: 0 };
    };

    useEffect(() => {
        const canvas = gl.domElement;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos(new THREE.Vector2(e.clientX, e.clientY));
        };

        const handleMouseLeave = () => {
            setMousePos(new THREE.Vector2(-1, -1));
        };

        const handlePointerDown = (e: PointerOrTouchEvent) => {
            e.preventDefault();
            isDragging.current = true;
            targetZoom.current = 1.3;
            canvas.style.cursor = "grabbing";
            setIsDraggingState(true);

            const { x: clientX, y: clientY } = getClientCoordinates(e);

            dragStart.current = {
                x: clientX,
                y: clientY,
                offsetX: scrollOffset.current.x,
                offsetY: scrollOffset.current.y,
            };
        };

        const handlePointerMove = (e: PointerOrTouchEvent) => {
            if (!isDragging.current) {
                canvas.style.cursor = "grab";
                return;
            }

            const { x: clientX, y: clientY } = getClientCoordinates(e);

            const dx = (clientX - dragStart.current.x) * 0.003;
            const dy = (clientY - dragStart.current.y) * 0.003;
            scrollOffset.current.x = dragStart.current.offsetX - dx;
            scrollOffset.current.y = dragStart.current.offsetY + dy;
        };

        const handlePointerUp = () => {
            isDragging.current = false;
            targetZoom.current = 1.0;
            canvas.style.cursor = "grab";
            setIsDraggingState(false);
        };

        canvas.style.cursor = "grab";
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointermove", handlePointerMove);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointerleave", handlePointerUp);
        canvas.addEventListener("touchstart", handlePointerDown);
        canvas.addEventListener("touchmove", handlePointerMove);
        canvas.addEventListener("touchend", handlePointerUp);

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointermove", handlePointerMove);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointerleave", handlePointerUp);
            canvas.removeEventListener("touchstart", handlePointerDown);
            canvas.removeEventListener("touchmove", handlePointerMove);
            canvas.removeEventListener("touchend", handlePointerUp);
        };
    }, [gl, setIsDraggingState]);

    useFrame((state) => {
        // Ensure mesh is ready before updating uniforms
        if (meshRef.current) {
            // When not dragging, apply inertial scrolling (velocity) to the offset
            if (!isDragging.current) {
                scrollOffset.current.x += velocity.current.x; // move horizontally by velocity
                scrollOffset.current.y += velocity.current.y; // move vertically by velocity
                velocity.current.multiplyScalar(0.92); // damping to slow momentum over time
            }

            // Smoothly interpolate zoom towards targetZoom for visual feedback while dragging
            currentZoom.current += (targetZoom.current - currentZoom.current) * 0.1;
            const material = meshRef.current.material;
            if (material && "uniforms" in material) {
                const shaderMaterial = material as THREE.ShaderMaterial;
                // Update shader uniforms every frame
                shaderMaterial.uniforms.uOffset.value.copy(scrollOffset.current); // world offset for tiling
                shaderMaterial.uniforms.uResolution.value.set(size.width, size.height); // screen resolution
                shaderMaterial.uniforms.uMousePos.value.copy(mousePos); // pointer position in pixels
                shaderMaterial.uniforms.uTextureCount.value = SKILLS.length; // how many textures in atlas
                shaderMaterial.uniforms.uZoom.value = currentZoom.current; // current zoom level
                shaderMaterial.uniforms.uCellSize.value = 0.8; // size of each gallery cell in world units
                // Check if atlas is ready - if not, show loading
                const isActuallyLoading = !imageAtlas || !textAtlas || !imagesLoaded;
                shaderMaterial.uniforms.uIsLoading.value = isActuallyLoading ? 1.0 : 0.0; // loading state
                shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime; // time for animation

                // Always set textures (even if null, shader will handle it)
                shaderMaterial.uniforms.uImageAtlas.value = imageAtlas; // baked image atlas texture
                shaderMaterial.uniforms.uTextAtlas.value = textAtlas; // baked text atlas texture
            }
        }
    });

    return (
        <>
            <mesh ref={meshRef}>
                <planeGeometry args={[viewport.width, viewport.height]} />
                <gridShaderMaterial />
            </mesh>
            <EffectComposer>
                <Vignette
                    blendFunction={BlendFunction.OVERLAY}
                    offset={isDraggingState ? 0.4 : 0.8}
                    darkness={isDraggingState ? 0.8 : 0.4}
                />
                <ChromaticAberration
                    blendFunction={BlendFunction.NORMAL}
                    offset={isDraggingState ? [0.005, 0.001] : [0, 0]}
                />
            </EffectComposer>
        </>
    );
};

export default Gallery;
