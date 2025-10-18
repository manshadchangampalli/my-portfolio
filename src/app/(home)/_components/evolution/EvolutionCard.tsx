import React from "react";
import { EvolutionItem } from "../../_config/evolution.config";
import { cn } from "@/utils/classNames";

interface EvolutionCardProps {
    item: EvolutionItem;
}

const bgClass = `before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/common/grid.png')] before:bg-cover before:bg-center before:opacity-10 before:-z-10`;

const EvolutionCard: React.FC<EvolutionCardProps> = ({ item }) => {
    return (
        <div
            className={cn("sticky-card flex w-full flex-col items-center justify-center transform-gpu", bgClass)}
            style={{
                height: "calc(var(--vh, 1vh) * 100)",
                minHeight: "-webkit-fill-available",
                backgroundColor: item.backgroundColor,
            }}>
            <div className="grid leading-[1] -mb-2 max-h-fit">
                <p className="font-great-vibes text-white leading-[1] -ml-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[34px] font-[300] px-2 sm:px-4">{item.monthYear}</p>
                <h2 className="text-white font-poller-one text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[120px] font-bold mb-2">{item.title}</h2>
            </div>
            <p className="text-white absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 opacity-60 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{item.designation}</p>
        </div>
    );
};

export default EvolutionCard;
