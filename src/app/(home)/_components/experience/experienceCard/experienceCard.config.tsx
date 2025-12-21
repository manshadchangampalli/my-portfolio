/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CameraControls } from "@react-three/drei";
import { LazyCarscanModel, LazyConfianceLabsScene, LazyIspgModel, LazyThirtyDaysModel } from "@/components/lazy/LazyModels";

export interface ExperienceCardConfig {
  id: string; // Unique identifier for each card
  name: string;
  bgColor: string;
  lookAtPosition: {
    sm: [number, number, number, number, number, number];
    md: [number, number, number, number, number, number];
    lg: [number, number, number, number, number, number];
  }; // [cameraX, cameraY, cameraZ, targetX, targetY, targetZ]
  slug: string; // Should be unique for each card
  modelPosition: [number, number, number];
  cardPosition: [number, number, number];
  rotation: [number, number, number];
  component: (props: { cameraControls: CameraControls | null }) => React.ReactNode;
}

export const EXPERIENCE_SLUGS = {
  CARSCAN: "carscan",
  CONFIANCE_LABS: "confiancelabs",
  ISPG: "ispg",
  THIRTY_DAYS: "thirtydays",
} as const;

export const experienceCardConfig: ExperienceCardConfig[] = [
  {
    id: "carscan",
    name: "CarScan",
    bgColor: "#5c2532",
    lookAtPosition: {
      sm: [0.1, 2, -3.5, 0, 1, -10],
      md: [-0.9, 1, -4, -0.9, 0.5, -6],
      lg: [-4.5, -0.5, -4.5, -4.5, -1, -6.2],
    },
    slug: EXPERIENCE_SLUGS.CARSCAN,
    modelPosition: [0, -1, -5],
    cardPosition: [-4.5, 0, 0],
    rotation: [0, 0, 0],
    component: (props: { cameraControls: CameraControls | null }) => {
      return (
        <LazyCarscanModel
          {...props}
          cameraControls={props?.cameraControls ?? null}
        />
      );
    },
  },
  {
    id: "confiancelabs",
    name: "Confiance Labs",
    bgColor: "#264b4c",
    lookAtPosition: {
      sm: [0, 0.85, 4, 0, 0.85, -2],
      md: [0, 1, -4, 0, 0.5, -6],
      lg: [-15, 5.5, -4, -15, 5.5, -10],
    },
    slug: EXPERIENCE_SLUGS.CONFIANCE_LABS,
    modelPosition: [0, -1, -5],
    cardPosition: [-1.5, 0, 0],
    rotation: [0, 0, 0],
    component: (props: { cameraControls: CameraControls | null }) => (
      <LazyConfianceLabsScene
        {...props}
        cameraControls={props?.cameraControls ?? null}
      />
    ),
  },
  {
    id: "ispg",
    name: "ISPG",
    bgColor: "#0060d1",
    lookAtPosition: {
      sm: [0, 1, -3.5, 0, 0.5, -4],
      md: [-1, 1, -3.5, -1, 0.5, -4],
      lg: [1.5, 2.2, -4.5, 1.5, 0, -5.5],
    },
    slug: EXPERIENCE_SLUGS.ISPG,
    modelPosition: [0, -1, -5],
    rotation: [0, 0, 0],
    cardPosition: [1.5, 0, 0],
    component: (props: any) => <LazyIspgModel {...props} />,
  },
  {
    id: "thirtydays",
    name: "Thirty Days",
    bgColor: "#5c8e93",
    lookAtPosition: {
      sm: [0, -4, 2, 0, -4.5, -10],
      md: [1, -2, 0, 1, -2.5, -4],
      lg: [4.5, -1, -1.5, 4.5, -1.5, -4],
    },
    slug: EXPERIENCE_SLUGS.THIRTY_DAYS,
    modelPosition: [0, -1, -5],
    cardPosition: [4.5, 0, 0],
    rotation: [0, 0, 0],
    component: (props: any) => <LazyThirtyDaysModel {...props} />,
  },
];
