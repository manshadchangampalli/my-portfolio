export default function HeroProfile() {
    return (
        <div className="fixed grid place-items-center z-20 left-0 top-0 w-full min-h-screen">
            <div
                style={{ transform: "perspective(1000px) translateZ(800px)" }}
                className="rounded-sm sm:rounded-2xl hero_profile_bar flex items-center shadow-lg bg-white sm:w-[80vw] w-[90vw] min-h-[200px] sm:min-h-[300px]">
                <h1 className="text-black text-xl sm:text-4xl md:text-[72px] px-4 py-8 leading-tight">
                    Hi, I&apos;m Manshad — <br /> solving problems with code.
                </h1>
            </div>
        </div>
    );
}
