import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { evolutionData } from "../../_config/evolution.config";
import EvolutionTitle from "./EvolutionTitle";
import EvolutionCard from "./EvolutionCard";
import SkillsTitle from "./SkillsTitle";

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
            <EvolutionTitle />
            {evolutionData.map((item) => (
                <EvolutionCard key={item.title} item={item} />
            ))}
            <SkillsTitle />
        </div>
    );
};

export default EvolutionCards;
