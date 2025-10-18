export default function HeroContent() {
    return (
        <div className="hero__content__container a fixed top-0 gap-2 left-0 min-h-screen h-[100dvh] flex flex-col justify-center w-full bg-white/80 backdrop-blur-lg z-10 bg-[url('/images/common/grid.png')] bg-cover">
            <h1 className="font-poller-one leading-[1] uppercase text-black text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[128px] max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] px-2 sm:px-4">The story begins here</h1>
            <p className="font-great-vibes text-black text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[34px] font-[300] px-2 sm:px-4">Scroll to discover</p>
        </div>
    );
}
