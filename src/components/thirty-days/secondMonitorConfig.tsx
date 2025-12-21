import { FigJamDesign } from "./FigJamDesign";
import RestaurantRoadmap from "./notion";
import { EcommerceWireframe } from "./EcommerceWireframe";
import { FigmaDesign } from "./FigmaDesign";
import { FigmaProtoType } from "./FigmaProtoType";
import VSCodeShowcaseMonokai from "./vscode";
import Dashboard from "./dashboard";
import { ProjectLive } from "./ProjectLive";
import { ProjectHandover } from "./ProjectHandover";
import { MeetHtml } from "./MeetHtml";
import React from "react";

export interface SecondMonitorConfig {
    component: React.ComponentType;
    caption: string;
}

export const secondMonitorConfig: Record<number, SecondMonitorConfig> = {
    1: { component: FigJamDesign, caption: "Planning Notes" },
    2: { component: FigJamDesign, caption: "Planning Notes" },
    3: { component: RestaurantRoadmap, caption: "Initial Roadmap" },
    4: { component: RestaurantRoadmap, caption: "Project Planning" },
    5: { component: RestaurantRoadmap, caption: "Project Planning" },
    6: { component: EcommerceWireframe, caption: "Wireframe Sketches" },
    7: { component: EcommerceWireframe, caption: "Task Breakdown" },
    8: { component: EcommerceWireframe, caption: "Task Breakdown" },
    9: { component: EcommerceWireframe, caption: "Task Breakdown" },
    10: { component: FigmaDesign, caption: "Design System" },
    11: { component: FigmaDesign, caption: "Component Library" },
    12: { component: FigmaDesign, caption: "Component Library" },
    13: { component: FigmaDesign, caption: "Component Library" },
    14: { component: FigmaDesign, caption: "Component Library" },
    15: { component: FigmaProtoType, caption: "Interactive Prototype" },
    16: { component: FigmaProtoType, caption: "Prototype Testing" },
    17: { component: FigmaProtoType, caption: "Prototype Testing" },
    18: { component: FigmaProtoType, caption: "Prototype Testing" },
    19: { component: FigmaProtoType, caption: "Prototype Testing" },
    20: { component: VSCodeShowcaseMonokai, caption: "Code Setup" },
    21: { component: VSCodeShowcaseMonokai, caption: "Development" },
    22: { component: VSCodeShowcaseMonokai, caption: "Development" },
    23: { component: VSCodeShowcaseMonokai, caption: "Testing & QA" },
    24: { component: VSCodeShowcaseMonokai, caption: "Testing & QA" },
    25: { component: VSCodeShowcaseMonokai, caption: "Testing & QA" },
    26: { component: Dashboard, caption: "Performance Reports" },
    27: { component: Dashboard, caption: "Analytics Dashboard" },
    28: { component: Dashboard, caption: "Metrics Overview" },
    29: { component: ProjectHandover, caption: "Documentation" },
    30: { component: ProjectLive, caption: "Deployment Status" },
};

