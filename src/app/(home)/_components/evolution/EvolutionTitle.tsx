import React from "react";

const EvolutionTitle: React.FC = () => {
    return (
        <div className="h-[100svh] px-2 uppercase sticky-card bg-black flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/common/grid.png')] before:bg-cover before:bg-center before:opacity-20 before:-z-10">
            <div className="grid max-h-fit">
                <p className="font-great-vibes text-white leading-[1] -ml-4 text-sm sm:text-lg md:text-[34px] font-[300] px-4">My</p>
                <h1 className="text-outline-white font-poller-one text-[2rem] leading-[1] sm:text-[3rem] md:text-[5rem] lg:text-[7rem]">Evolution</h1>
            </div>
        </div>
    );
};

export default EvolutionTitle;
