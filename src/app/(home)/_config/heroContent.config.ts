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

export interface Text3DConfig {
  id: string;
  text: string;
  x: {
    lg: number;
    md: number;
    sm: number;
  };
  yOffset: number;
  size: {
    lg: number;
    md: number;
    sm: number;
  };
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

export const TEXT3D_CONFIG: Text3DConfig[] = [
  {
    id: "text1",
    text: "THE",
    x: {
      lg: -1,
      md: -0.75,
      sm: -0.25,
    },
    yOffset: 1,
    size: {
      lg: 0.3,
      md: 0.2,
      sm: 0.08,
    },
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
    x: {
      lg: -1.75,
      md: -1,
      sm: -0.5,
    },
    yOffset: 0,
    size: {
      lg: 0.5,
      md: 0.4,
      sm: 0.12,
    },
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
    x: {
      lg: -2.5,
      md: -2,
      sm: -0.75,
    },
    yOffset: -2,
    size: {
      lg: 0.5,
      md: 0.4,
      sm: 0.15,
    },
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
