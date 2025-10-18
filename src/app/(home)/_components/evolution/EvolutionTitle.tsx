import React from "react";

const EvolutionTitle: React.FC = () => {
    return (
        <div className="h-[100svh] px-2 uppercase sticky-card bg-black flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/common/grid.png')] before:bg-cover before:bg-center before:opacity-20 before:-z-10">
            <div className="grid max-h-fit">
                <p className="font-great-vibes text-white leading-[1] -ml-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[34px] font-[300] px-2 sm:px-4">My</p>
                <h1 className="text-outline-white font-poller-one text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[7rem] leading-[1]">Evolution</h1>
            </div>
        </div>
    );
};

export default EvolutionTitle;
