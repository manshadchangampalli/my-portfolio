export interface ExperienceCardConfig {
  id: string; // Unique identifier for each card
  name: string;
  model: string;
  bgColor: string;
  lookAtPosition: [number, number, number, number, number, number]; // [cameraX, cameraY, cameraZ, targetX, targetY, targetZ]
  slug: string; // Should be unique for each card
  modelPosition: [number, number, number];
  cardPosition: [number, number, number];
}

export const experienceCardConfig: ExperienceCardConfig[] = [
  {
    id: "ispg-2",
    name: "ISPG",
    model: "/model/ispg/ispg_phone.gltf",
    bgColor: "#555f55",
    lookAtPosition: [3, 2.5, -4, 3, 0, -5.5],
    slug: "ispg-2",
    modelPosition: [0, -1, -5],
    cardPosition: [3, 0, 0],
  },
  {
    id: "ispg-1",
    name: "ISPG",
    model: "/model/ispg/ispg_phone.gltf",
    bgColor: "#ffffff",
    lookAtPosition: [0, 2.5, 0, 0, 0, -5.5],
    slug: "ispg-1",
    modelPosition: [0, -1, -5],
    cardPosition: [0, 0, 0],
  },

  {
    id: "ispg-3",
    name: "ISPG",
    model: "/model/ispg/ispg_phone.gltf",
    bgColor: "#eefeee",
    lookAtPosition: [0, 2.5, 0, 0, 0, -5.5],
    slug: "ispg-3",
    modelPosition: [-3, -1, -5],
    cardPosition: [-3, 0, 0],
  },
];
