export default function HeroContent() {
    return (
        <div className="hero__content__container fixed top-0 gap-2 left-0 min-h-screen h-[100dvh] flex flex-col items-center justify-center w-full bg-white/80 backdrop-blur-lg z-10">
            <h1 className="text-black text-2xl sm:text-4xl md:text-[64px] text-center px-4">
                Hey! <br />
                The story begins here
            </h1>
            <div className="w-[2px] h-[60px] sm:h-[100px] bg-black" />
            <p className="text-black text-sm sm:text-lg md:text-[24px] font-[300] text-center px-4">Scroll to discover</p>
        </div>
    );
}
