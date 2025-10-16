"use client";

import { cn } from "@/utils/classNames";
import LiquidGlass from "react-ios-liquid-glass";
import "react-ios-liquid-glass/dist/index.css";
import useDevice from "@/hooks/useDevice";

export default function HeroProfile() {
    const { isMobile } = useDevice();
    return (
        <div className="fixed grid items-top p-10 justify-end z-20 left-0 top-0 w-full min-h-screen">
            <div
                style={{ transform: "perspective(1000px)" }}
                className="rounded-sm sm:rounded-2xl hero_profile_bar text-white flex items-center  w-[60vw] h-[160px]">
                <LiquidGlass
                    className={cn("hero_profile_bar_liquid flex items-center bg-black/10", isMobile && 'bg-white text-black ')}
                    padding="0px"
                    borderRadius="0px"
                    width="100%"
                    height="100%"
                    blur="2px">
                    <h1 className="text-4xl uppercase  px-8 py-8 font-poller-one leading-tight">
                        Hi, I&apos;m Manshad — <br /> solving problems with code.
                    </h1>
                </LiquidGlass>
            </div>
        </div>
    );
}
