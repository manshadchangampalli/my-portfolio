import { MeetHtml } from "./MeetHtml";
import { FigJamDesign } from "./FigJamDesign";
import RestaurantRoadmap from "./notion";
import { EcommerceWireframe } from "./EcommerceWireframe";
import { FigmaDesign } from "./FigmaDesign";
import { FigmaProtoType } from "./FigmaProtoType";
import VSCodeShowcaseMonokai from "./vscode";
import Dashboard from "./dashboard";
import { ProjectLive } from "./ProjectLive";
import { ProjectHandover } from "./ProjectHandover";
import React from "react";

export interface DayConfig {
    component: React.ComponentType;
    caption: string;
}

export const dayConfig: Record<number, DayConfig> = {
    1: { component: MeetHtml, caption: "Requirements Gathering" },
    2: { component: MeetHtml, caption: "Requirements Gathering" },
    3: { component: MeetHtml, caption: "Requirements Gathering" },
    4: { component: FigJamDesign, caption: "Validation & Planning" },
    5: { component: FigJamDesign, caption: "Validation & Planning" },
    6: { component: FigJamDesign, caption: "Validation & Planning" },
    7: { component: RestaurantRoadmap, caption: "Project Roadmap" },
    8: { component: RestaurantRoadmap, caption: "Project Roadmap" },
    9: { component: RestaurantRoadmap, caption: "Project Roadmap" },
    10: { component: RestaurantRoadmap, caption: "Project Roadmap" },
    11: { component: EcommerceWireframe, caption: "Wireframe Structure" },
    12: { component: EcommerceWireframe, caption: "Wireframe Structure" },
    13: { component: EcommerceWireframe, caption: "Wireframe Structure" },
    14: { component: EcommerceWireframe, caption: "Wireframe Structure" },
    15: { component: EcommerceWireframe, caption: "Wireframe Structure" },
    16: { component: FigmaDesign, caption: "UI Design" },
    17: { component: FigmaDesign, caption: "UI Design" },
    18: { component: FigmaDesign, caption: "UI Design" },
    19: { component: FigmaDesign, caption: "UI Design" },
    20: { component: FigmaDesign, caption: "UI Design" },
    21: { component: FigmaProtoType, caption: "Prototype & Development" },
    22: { component: FigmaProtoType, caption: "Prototype & Development" },
    23: { component: VSCodeShowcaseMonokai, caption: "Development" },
    24: { component: VSCodeShowcaseMonokai, caption: "Development" },
    25: { component: VSCodeShowcaseMonokai, caption: "Development" },
    26: { component: VSCodeShowcaseMonokai, caption: "Testing & QA" },
    27: { component: VSCodeShowcaseMonokai, caption: "Testing & QA" },
    28: { component: Dashboard, caption: "Analytics & Metrics" },
    29: { component: ProjectLive, caption: "Live App Onboarding" },
    30: { component: ProjectHandover, caption: "Final Product Showcase" },
};

