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
                <p className="font-great-vibes text-white leading-[1] -ml-4 text-sm sm:text-lg md:text-[34px] font-[300] px-4">{item.monthYear}</p>
                <h2 className="text-white font-poller-one text-[120px] font-bold mb-2">{item.title}</h2>
            </div>
            <p className="text-white absolute top-10 right-10 opacity-60 text-2xl font-semibold">{item.designation}</p>
        </div>
    );
};

export default EvolutionCard;
