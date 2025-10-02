"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface LenisProviderProps {
    children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        if (lenisRef.current?.lenis) {
            const lenis = lenisRef.current.lenis;

            // Sync Lenis with ScrollTrigger
            lenis.on("scroll", ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);

            return () => {
                gsap.ticker.remove(lenis.raf);
            };
        }
    }, []);

    return (
        <ReactLenis
            root
            options={{ lerp: 0.1, duration: 1.2 }}
            ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}
