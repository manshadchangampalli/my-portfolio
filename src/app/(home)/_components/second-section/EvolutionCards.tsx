import { cn } from "@/utils/classNames";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const EvolutionCards = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const stickyCards = container.current?.querySelectorAll(".sticky-card");
            if (stickyCards) {
                stickyCards.forEach((card, index) => {
                    if (index < stickyCards.length - 1) {
                        ScrollTrigger.create({
                            trigger: card,
                            start: "top top",
                            endTrigger: stickyCards[stickyCards.length - 1],
                            end: "top top",
                            scrub: 1,
                            pin: true,
                            pinSpacing: false, // CRITICAL: false to prevent spacing issues on iOS
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                            refreshPriority: -1,
                        });
                    }

                    if (index > 0 && index < stickyCards.length - 1) {
                        ScrollTrigger.create({
                            trigger: stickyCards[index + 1],
                            start: "top bottom",
                            end: "top top",
                            onUpdate: (self) => {
                                const progress = self.progress;
                                const scale = 1 - progress * 0.25;
                                const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                                const afterOpacity = progress;

                                gsap.set(card, {
                                    scale: scale,
                                    rotation: rotation,
                                    "--after-opacity": afterOpacity,
                                });
                            },
                        });
                    }
                });
            }
        },
        { scope: container, dependencies: [] }
    );

    return (
        <div
            ref={container}
            style={{ WebkitOverflowScrolling: "touch" }}>
            <div className="h-[100svh] sticky-card bg-black flex items-center justify-center">
                <h1 className="text-white text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem]">My Evolution</h1>
            </div>
            {evolutionData.map((item) => (
                <div
                    key={item.title}
                    className={cn(`sticky-card flex w-full flex-col items-center justify-center`, `transform-gpu`, item.backgroundColor)}
                    style={{
                        height: "calc(var(--vh, 1vh) * 100)",
                        minHeight: "-webkit-fill-available",
                    }}>
                    <h2 className="text-white text-4xl font-bold mb-4">{item.title}</h2>
                    <p className="text-white text-lg text-center px-8">{item.description}</p>
                </div>
            ))}
            <div
                key={`skills`}
                className={cn(`sticky-card flex w-full flex-col items-center justify-center`, `transform-gpu`, "bg-white")}
                style={{
                    height: "calc(var(--vh, 1vh) * 100)",
                    minHeight: "-webkit-fill-available",
                }}>
                <h2 className="text-black text-4xl font-bold mb-4">My Skills</h2>
                <p className="text-black text-lg text-center px-8">I started learning web development in 2020. I learned HTML, CSS, and JavaScript.</p>
            </div>
        </div>
    );
};

export default EvolutionCards;

const evolutionData = [
    {
        title: "Texki",
        description: "I started learning web development in 2020. I learned HTML, CSS, and JavaScript.",
        backgroundColor: "bg-[#ff0000]",
    },
    {
        title: "Configancelabs",
        description: "I started learning web development in 2020. I learned HTML, CSS, and JavaScript.",
        backgroundColor: "bg-[#0000ff]",
    },
    {
        title: "ISPG",
        description: "I started learning web development in 2020. I learned HTML, CSS, and JavaScript.",
        backgroundColor: "bg-[#00ff00]",
    },
];
