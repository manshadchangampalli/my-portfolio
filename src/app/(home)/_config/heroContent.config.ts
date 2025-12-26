export interface SphereConfig {
  id: string;
  radius: number;
  initialYOffset: number;
  targetPosition: { x: number; y: number; z: number };
  duration: number;
  ease?: string;
  initialScale?: number;
  targetScale?: number;
}

export interface Text3DConfig {
  id: string;
  text: string;
  x: number;
  yOffset: number;
  size: number;
  height: number;
  restitution: number;
  gravityScale?: number;
  linearDamping: number;
  angularDamping: number;
  curveSegments?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  bevelSegments?: number;
}

export const SPHERES_CONFIG: SphereConfig[] = [
  {
    id: "sphere1",
    radius: 0.02,
    initialYOffset: -0.25,
    targetPosition: { x: -2.55, y: 0.75, z: 0 },
    duration: 2,
    ease: "power2.out",
    initialScale: 2,
    targetScale: 1,
  },
  {
    id: "sphere2",
    radius: 0.01,
    initialYOffset: -0.25,
    targetPosition: { x: -1.68, y: 0.25, z: 0 },
    duration: 2,
    ease: "power2.out",
    initialScale: 2,
    targetScale: 1,
  },
  {
    id: "sphere3",
    radius: 0.025,
    initialYOffset: -0.25,
    targetPosition: { x: 1.74, y: -0.88, z: 0 },
    duration: 1.5,
    ease: "power2.out",
    initialScale: 2,
    targetScale: 1,
  },
  {
    id: "sphere4",
    radius: 0.01,
    initialYOffset: -0.5,
    targetPosition: { x: 0, y: 1, z: 0 },
    duration: 1.5,
    ease: "power2.out",
        initialScale: 2,
    targetScale: 1,
  },
  {
    id: "sphere5",
    radius: 0.01,
    initialYOffset: -0.5,
    targetPosition: { x: 2.1, y: 2, z: 0 },
    duration: 2.5,
    ease: "power2.out",
        initialScale: 2,
    targetScale: 1,
  },
];

export const TEXT3D_CONFIG: Text3DConfig[] = [
  {
    id: "text1",
    text: "THE",
    x: -1,
    yOffset: 1,
    size: 0.3,
    height: 0.1,
    restitution: 0.1,
    gravityScale: 0.5,
    linearDamping: 1,
    angularDamping: 1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 5,
  },
  {
    id: "text2",
    text: "STORY",
    x: -1.5,
    yOffset: 0,
    size: 0.5,
    height: 0.2,
    restitution: 0.25,
    linearDamping: 1,
    angularDamping: 1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 5,
  },
  {
    id: "text3",
    text: "BEGINS HERE",
    x: -2.5,
    yOffset: -2,
    size: 0.5,
    height: 0.5,
    restitution: 0.1,
    linearDamping: 0,
    angularDamping: 0,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 5,
  },
];
