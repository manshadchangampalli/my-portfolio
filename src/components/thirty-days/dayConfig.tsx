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
    shortCaption: string;
}

export const dayConfig: Record<number, DayConfig> = {
    1: { component: MeetHtml, shortCaption: "Requirements Gathering", caption: "Understanding the business idea, goals, and long-term vision of the product" },
    2: { component: MeetHtml, shortCaption: "Requirements Gathering", caption: "Breaking down requirements into clear problems to solve for users" },
    3: { component: MeetHtml, shortCaption: "Requirements Gathering", caption: "Finalizing features, priorities, and success criteria for the project" },

    4: { component: FigJamDesign, shortCaption: "Validation & Planning", caption: "Mapping user journeys and identifying key interaction points" },
    5: { component: FigJamDesign, shortCaption: "Validation & Planning", caption: "Validating flows to ensure simplicity and ease of use" },
    6: { component: FigJamDesign, shortCaption: "Validation & Planning", caption: "Confirming the overall functional direction before moving forward" },

    7: { component: RestaurantRoadmap, shortCaption: "Project Roadmap", caption: "Defining clear milestones and delivery phases for the product" },
    8: { component: RestaurantRoadmap, shortCaption: "Project Roadmap", caption: "Planning timelines and aligning expectations across all stages" },
    9: { component: RestaurantRoadmap, shortCaption: "Project Roadmap", caption: "Organizing features into logical phases for smooth execution" },
    10: { component: RestaurantRoadmap, shortCaption: "Project Roadmap", caption: "Reviewing and locking the roadmap with agreed priorities" },

    11: { component: EcommerceWireframe, shortCaption: "Wireframe Structure", caption: "Creating the initial structure of all key application screens" },
    12: { component: EcommerceWireframe, shortCaption: "Wireframe Structure", caption: "Designing navigation and layout for intuitive user movement" },
    13: { component: EcommerceWireframe, shortCaption: "Wireframe Structure", caption: "Refining screen flows to reduce friction and confusion" },
    14: { component: EcommerceWireframe, shortCaption: "Wireframe Structure", caption: "Iterating wireframes based on feedback and improvements" },
    15: { component: EcommerceWireframe, shortCaption: "Wireframe Structure", caption: "Finalizing wireframes as the foundation for visual design" },

    16: { component: FigmaDesign, shortCaption: "UI Design", caption: "Exploring visual styles that match the brand and product tone" },
    17: { component: FigmaDesign, shortCaption: "UI Design", caption: "Designing primary screens with attention to clarity and balance" },
    18: { component: FigmaDesign, shortCaption: "UI Design", caption: "Ensuring visual consistency across all screens and elements" },
    19: { component: FigmaDesign, shortCaption: "UI Design", caption: "Adding detailed states, interactions, and visual refinements" },
    20: { component: FigmaDesign, shortCaption: "UI Design", caption: "Reviewing and approving the final visual design system" },

    21: { component: FigmaProtoType, shortCaption: "Prototype & Development", caption: "Connecting screens to demonstrate the complete user journey" },
    22: { component: FigmaProtoType, shortCaption: "Prototype & Development", caption: "Validating the experience through interactive product flow" },

    23: { component: VSCodeShowcaseMonokai, shortCaption: "Development", caption: "Translating approved designs into working product features" },
    24: { component: VSCodeShowcaseMonokai, shortCaption: "Development", caption: "Building core functionality and connecting user flows" },
    25: { component: VSCodeShowcaseMonokai, shortCaption: "Development", caption: "Completing major features and refining overall experience" },

    26: { component: VSCodeShowcaseMonokai, shortCaption: "Testing & QA", caption: "Testing all flows to identify gaps and unexpected behavior" },
    27: { component: VSCodeShowcaseMonokai, shortCaption: "Testing & QA", caption: "Improving stability, performance, and overall reliability" },

    28: { component: Dashboard, shortCaption: "Analytics & Metrics", caption: "Setting up insights to understand usage and product performance" },

    29: { component: ProjectLive, shortCaption: "Live App Onboarding", caption: "Preparing the product for real users with live setup and walkthrough" },

    30: { component: ProjectHandover, shortCaption: "Final Product Showcase", caption: "Showcasing the final product and handing over complete ownership" },
};

