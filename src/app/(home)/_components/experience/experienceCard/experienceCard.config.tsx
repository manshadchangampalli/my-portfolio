/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CameraControls } from "@react-three/drei";
import { LazyCarscanModel, LazyConfianceLabsScene, LazyIspgModel, LazyThirtyDaysModel } from "@/components/lazy/LazyModels";
import { angle } from "@/utils/angle";

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
  modelPosition: {
    sm: [number, number, number];
    md: [number, number, number];
    lg: [number, number, number];
  };
  cardPosition: [number, number, number];
  rotation: {
    sm: [number, number, number];
    md: [number, number, number];
    lg: [number, number, number];
  };
  component: (props: { cameraControls: CameraControls | null; blend: number }) => React.ReactNode;
}

export interface ExperienceCardComponentProps {
  cameraControls: CameraControls | null;
  blend: number;
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
      sm: [5.1, -2, -3.5, 5, -3, -10],
      md: [-1, -2.5, -4, -1, -4, -6],
      lg: [-10, -7, -2, -10.75, -8, -5],
    },
    slug: EXPERIENCE_SLUGS.CARSCAN,
    modelPosition: {
      sm: [5, -5, -5],
      md: [0, -5, -5],
      lg: [-5, -8, -5],
    },
    cardPosition: [-4.5, 0, 0.2],
    rotation: {
      sm: [0, 0, 0],
      md: [0, 0, 0],
      lg: [0, angle(15), 0],
    },
    component: (props: ExperienceCardComponentProps) => {
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
      sm: [-16.5, 5.5, -4, -16.5, 5.5, -10],
      md: [-15, 6, -5, -15, 6, -10],
      lg: [-31, -9, -6, -31, -9, -10],
    },
    slug: EXPERIENCE_SLUGS.CONFIANCE_LABS,
    modelPosition: {
      sm: [-1.5, -1, -5],
      md: [0, -1, -5],
      lg: [-15, -15, -5],
    },
    cardPosition: [-1.5, 0, 0],
    rotation: {
      sm: [0, 0, 0],
      md: [0, 0, 0],
      lg: [0, 0, 0],
    },
    component: (props: ExperienceCardComponentProps) => (
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
      sm: [5.5, 1, -4.2, 5.5, 0.5, -4.5],
      md: [3.5, 1, -4.3, 3.5, 0.5, -4.5],
      lg: [8.5, 2, -4.6, 8.5, 0, -5.5],
    },
    slug: EXPERIENCE_SLUGS.ISPG,
    modelPosition: {
      sm: [5.5, -1, -5],
      md: [4.5, -1, -5],
      lg: [7, -1, -5],
    },
    rotation: {
      sm: [0, 0, 0],
      md: [0, 0, 0],
      lg: [0, 0, 0],
    },
    cardPosition: [1.5, 0, 0],
    component: (props: ExperienceCardComponentProps) => <LazyIspgModel {...props} />,
  },
  {
    id: "thirtydays",
    name: "Thirty Days",
    bgColor: "#5c8e93",
    lookAtPosition: {
      sm: [-5, -4, 2, -5, -4.5, -10],
      md: [-3, 4, 0, -3, 3, -4],
      lg: [-4, -1, -5, -1.2, -1.5, -10],
    },
    slug: EXPERIENCE_SLUGS.THIRTY_DAYS,
    modelPosition: {
      sm: [-5, -1, -5],
      md: [-4, 5, -5],
      lg: [-10, -1, -5],
    },
    cardPosition: [4.5, 0, 0.2],
    rotation: {
      sm: [0, 0, 0],
      md: [0, 0, 0],
      lg: [0, angle(-25), 0],
    },
    component: (props: ExperienceCardComponentProps) => <LazyThirtyDaysModel {...props} />,
  },
];
