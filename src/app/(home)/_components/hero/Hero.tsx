import useHero from "../../_hooks/useHero.hook";
import { Loader2 } from "lucide-react";
import "react-ios-liquid-glass/dist/index.css";

export default function HeroSection() {
  const { canvasRef, isLoading } = useHero();

  return (
    <div className="hero__section h-[100vh] z-10 relative">
      {isLoading && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/80">
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-16 h-16 animate-spin text-white" />
          </div>
        </div>
      )}
      <div className="hero__content__container absolute top-0 gap-2 left-0 h-screen flex flex-col items-center justify-center w-full bg-black/80 z-20">
        <h1 className="text-white text-[46px] text-center">
          Hey! <br />
          The story begins here
        </h1>
        <div className="w-[1px] h-[100px] bg-white" />
        <p className="text-white text-[24px] font-[200] text-center">Scroll to discover</p>
      </div>
      <div className="absolute grid place-items-center z-10 left-0 top-0 w-full h-full">
        <div
          style={{ transform: "perspective(500px) translateZ(120px)" }}
          className="rounded-sm sm:rounded-2xl hero_profile_bar flex items-center shadow-lg bg-white sm:w-[80vw] w-[90vw]">
          <h1 className="text-black text-[72px] px-4">
            Hi, I’m Manshad — <br /> solving problems with code.
          </h1>
        </div>
      </div>
      <canvas
        className="absolute top-0 left-0 w-full h-full"
        ref={canvasRef}
      />
    </div>
  );
}
