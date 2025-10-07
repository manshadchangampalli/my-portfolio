"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const SecondSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const panelsRef = useRef<HTMLDivElement[]>([]);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const section = sectionRef.current;
        const panels = panelsRef.current;

        if (!section || panels.length === 0) return;

        // Reset all panels
        gsap.set(panels, { opacity: 0, xPercent: 100 });
        gsap.set(panels[0], { opacity: 1, xPercent: 0 });

        // ScrollTrigger configuration
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",             // start when section hits top of viewport
                end: () => "+=" + window.innerHeight * (panels.length - 1),
                scrub: true,
                pin: true,
                anticipatePin: 1,
                markers: false,               // set true for debugging positions
            },
        });

        // Animate between panels
        panels.forEach((panel, i) => {
            const next = panels[i + 1];
            if (next) {
                tl.to(panel, { opacity: 0, xPercent: -100, duration: 1 }, "+=0.5")
                    .to(next, { opacity: 1, xPercent: 0, duration: 1 }, "<");
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    }, []);

    return (
        <div className="bg-[#585955]">
            <div
                ref={sectionRef}
                className="min-h-screen w-screen bg-[#585955] flex items-center justify-center relative overflow-hidden"
            >
                {[
                    {
                        title: "Section 1",
                        text: "Welcome to the first section. Scroll down to explore more.",
                    },
                    {
                        title: "Section 2",
                        text: "Discover amazing features as you continue scrolling through the experience.",
                    },
                    {
                        title: "Section 3",
                        text: "Every scroll reveals something new and exciting. Keep going!",
                    },
                    {
                        title: "Section 4",
                        text: "You've reached the final section. Thanks for scrolling!",
                    },
                ].map((panel, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) panelsRef.current[i] = el;
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-white p-8"
                    >
                        <h2 className="text-6xl font-bold mb-4">{panel.title}</h2>
                        <p className="text-2xl text-center max-w-2xl">{panel.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondSection;