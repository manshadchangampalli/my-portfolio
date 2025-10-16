import React from "react";
import { cn } from "@/utils/classNames";

const SkillsTitle: React.FC = () => {
    return (
        <div
            key="skills"
            className={cn("sticky-card flex w-full flex-col items-center justify-center", "transform-gpu", "bg-white")}
            style={{
                height: "calc(var(--vh, 1vh) * 100)",
                minHeight: "-webkit-fill-available",
            }}>
            <h2 className="text-black text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-black text-lg text-center px-8">I started learning web development in 2020. I learned HTML, CSS, and JavaScript.</p>
        </div>
    );
};

export default SkillsTitle;
