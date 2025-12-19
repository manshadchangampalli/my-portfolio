/**
 * Lazy-loaded 3D model components for code splitting
 * Each model is loaded only when needed, reducing initial bundle size
 */

import dynamic from "next/dynamic";
import { CameraControls } from "@react-three/drei";
import { ModelLoadingFallback } from "@/components/LoadingStates/SceneLoadingFallback";

// Lazy load each 3D model component with proper typing
export const LazyCarscanModel = dynamic<{ cameraControls: CameraControls | null }>(
    () => import("@/components/carscan/Carscan").then((mod) => ({ default: mod.Model })),
    {
        ssr: false,
        loading: () => <ModelLoadingFallback />,
    }
);

export const LazyConfianceLabsScene = dynamic<{ cameraControls: CameraControls | null }>(
    () => import("@/components/Confiancelabs/ConfianceLabsScene").then((mod) => ({ default: mod.ConfianceLabsScene })),
    {
        ssr: false,
        loading: () => <ModelLoadingFallback />,
    }
);

export const LazyIspgModel = dynamic(() => import("@/components/ispg/IspgModel").then((mod) => ({ default: mod.IspgModel })), {
    ssr: false,
    loading: () => <ModelLoadingFallback />,
});

export const LazyThirtyDaysModel = dynamic(() => import("@/components/thirty-days/ThirtyDays").then((mod) => ({ default: mod.ThirtyDaysModel })), {
    ssr: false,
    loading: () => <ModelLoadingFallback />,
});
