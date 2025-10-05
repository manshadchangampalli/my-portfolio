export default function HeroContent() {
    return (
        <div className="hero__content__container fixed top-0 gap-2 left-0 min-h-screen h-[100dvh] flex flex-col items-center justify-center w-full bg-black/80 z-10">
            <h1 className="text-white text-2xl sm:text-4xl md:text-[46px] text-center px-4">
                Hey! <br />
                The story begins here
            </h1>
            <div className="w-[1px] h-[60px] sm:h-[100px] bg-white" />
            <p className="text-white text-sm sm:text-lg md:text-[24px] font-[200] text-center px-4">Scroll to discover</p>
        </div>
    );
}
