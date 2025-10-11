"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

const SecondSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const panelsRef = useRef<HTMLDivElement | null>(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const section = sectionRef.current;
        const panels = panelsRef.current;

        // ScrollTrigger configuration
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top", // start when section hits top of viewport
                end: () => "+=" + window.innerHeight,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                markers: false, // set true for debugging positions
            },
        });
        tl.to(panels, {
            opacity: 1,
            xPercent: 0,
            ease: "none",
            duration: 1,
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
                className="min-h-screen w-screen  relative overflow-hidden">
                <header className="absolute px-6 py-4 items-start flex w-full justify-between h-20">
                    <h1 className="text-[48px] font-bold">EXPERIENCES</h1>
                    <span className="text-[18px] font-light">AUG 2022 - AUG 2023</span>
                </header>
                <main ref={panelsRef} className="flex flex-col opacity-0 items-center pt-10 justify-center w-full h-screen">
                    <Image
                        src="/images/experiences/confiancelabs.png"
                        alt="experience-1"
                        width={250}
                        height={250}
                    />
                    <p className="text-center max-w-[70vw] text-[24px] font-[300]">
                        As a freelance developer, I transformed client visions into high-performing digital experiences, delivering scalable web and mobile solutions with
                        precision, creativity, and modern technology.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default SecondSection;
