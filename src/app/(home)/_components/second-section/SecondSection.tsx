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



        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    }, []);

    return (
        <div className="bg-[#585955] section_two">
            <div
                ref={sectionRef}
                className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden"
            >

            </div>
        </div>
    );
};

export default SecondSection;