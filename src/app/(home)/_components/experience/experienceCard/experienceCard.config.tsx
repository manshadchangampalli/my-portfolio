/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IspgModel } from "@/components/ispg/IspgModel";
import { Model as CarscanModel } from "@/components/carscan/Carscan";
import { ConfianceLabsScene } from "@/components/Confiancelabs/ConfianceLabsScene";
import { ThirtyDaysModel } from "@/components/thirty-days/ThirtyDays";

export interface ExperienceCardConfig {
  id: string; // Unique identifier for each card
  name: string;
  bgColor: string;
  lookAtPosition: [number, number, number, number, number, number]; // [cameraX, cameraY, cameraZ, targetX, targetY, targetZ]
  slug: string; // Should be unique for each card
  modelPosition: [number, number, number];
  cardPosition: [number, number, number];
  component: (props: any) => React.ReactNode;
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
    lookAtPosition: [-4.5, -0.5, -4.5, -4.5, -1, -6.2],
    slug: EXPERIENCE_SLUGS.CARSCAN,
    modelPosition: [0, -1, -5],
    cardPosition: [-4.5, 0, 0],
    component: (props: any) => <CarscanModel {...props} />,
  },
  {
    id: "confiancelabs",
    name: "Confiance Labs",
    bgColor: "#264b4c",
    lookAtPosition: [-15, 5.5, -4, -15, 5.5, -10],
    slug: EXPERIENCE_SLUGS.CONFIANCE_LABS,
    modelPosition: [0, -1, -5],
    cardPosition: [-1.5, 0, 0],
    component: (props: any) => <ConfianceLabsScene {...props} />,
  },
  {
    id: "ispg",
    name: "ISPG",
    bgColor: "#0060d1",
    lookAtPosition: [0, 2.5, 0, 0, 0, -5.5],
    slug: EXPERIENCE_SLUGS.ISPG,
    modelPosition: [0, -1, -5],
    cardPosition: [1.5, 0, 0],
    component: (props: any) => <IspgModel {...props} />,
  },
  {
    id: "thirtydays",
    name: "Thirty Days",
    bgColor: "#5c8e93",
    lookAtPosition: [4.5, -1.5, -0, 4.5, -1.5, -4],
    slug: EXPERIENCE_SLUGS.THIRTY_DAYS,
    modelPosition: [0, -1, -5],
    cardPosition: [4.5, 0, 0],
    component: (props: any) => <ThirtyDaysModel {...props} />,
  },
];
