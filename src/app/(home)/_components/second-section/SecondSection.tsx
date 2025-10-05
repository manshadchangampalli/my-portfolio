"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const SecondSection = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const finalText = "Simplifying complexity through thoughtful engineering.";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        const element = textRef.current;

        if (!element) return;

        let iteration = 0;
        const speed = 50; // milliseconds between updates
        const revealSpeed = 5; // characters revealed per iteration

        const interval = setInterval(() => {
            if (!element) return;

            element.innerText = finalText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return finalText[index];
                    }
                    if (char === " ") {
                        return " ";
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iteration >= finalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / revealSpeed;
        }, speed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-[#b8a8a6] to-[#000000] z-0 flex items-center justify-center relative">
            <div className="w-full p-4">
                <h1
                    ref={textRef}
                    className="text-[100px] second_section_text text-white"
                >
                    Simplifying complexity through thoughtful engineering.
                </h1>
            </div>
        </div>
    );
};

export default SecondSection;