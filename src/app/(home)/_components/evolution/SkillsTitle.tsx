import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SkillsTitle: React.FC = () => {
    const skillsContainer = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!skillsContainer.current || !triggerRef.current) return;

        const containerWidth = skillsContainer.current.offsetWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = containerWidth - viewportWidth;
        console.log("🚀 ~ SkillsTitle ~ containerWidth:", { containerWidth, viewportWidth, scrollDistance })

        gsap.to(skillsContainer.current, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: `+=${scrollDistance}px`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                refreshPriority: -1,
                // onUpdate: (self) => {
                //     console.log('ScrollTrigger progress:', self.progress);
                // },
            },
        });

        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
    }, []);

    return (
        <div ref={triggerRef} className="skills-title-section w-screen h-[100svh] overflow-hidden bg-black">
            <div
                ref={skillsContainer}
                className="skills-container sticky-card flex w-[200vw] bg-black">
                <div className="h-[100svh] w-screen px-2 bg-black flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/common/grid.png')] before:bg-cover before:bg-center before:opacity-20 before:z-10">
                    <div className="grid max-h-fit">
                        <p className="font-great-vibes text-white leading-[1] -ml-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[34px] font-[300] px-2 sm:px-4">
                            Core
                        </p>
                        <h1 className="text-outline-white uppercase font-poller-one text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[7rem] leading-[1]">
                            TECHNOLOGIES
                        </h1>
                    </div>
                </div>
                <div className="h-[100svh] w-screen px-2 bg-black flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/common/grid.png')] before:bg-cover before:bg-center before:opacity-20 before:z-10">
                    <div className="grid max-h-fit">
                        <p className="font-great-vibes text-white leading-[1] -ml-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[34px] font-[300] px-2 sm:px-4">
                            Advanced
                        </p>
                        <h1 className="text-outline-white uppercase font-poller-one text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[7rem] leading-[1]">
                            SKILLS
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsTitle;