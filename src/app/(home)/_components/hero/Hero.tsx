import useHero from "../../_hooks/useHero.hook";
import { Loader2 } from "lucide-react";
import "react-ios-liquid-glass/dist/index.css";

export default function HeroSection() {
  const { canvasRef, isLoading } = useHero();

  return (
    <div className="container h-[7vh] relative">
      {isLoading && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/80">
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-16 h-16 animate-spin text-white" />
          </div>
        </div>
      )}
      <div className="fixed hero__content__container top-0 gap-2 left-0 h-screen flex flex-col items-center justify-center w-screen bg-black/80">
        <h1 className="text-white text-[46px] text-center">
          Hey! <br />
          The story begins here
        </h1>
        <div className="w-[1px] h-[100px] bg-white" />
        <p className="text-white text-[24px] font-[200] text-center">Scroll to discover</p>
      </div>
      {/* <div className="bg-white hero_profile_bar w-100vw h-100vh"></div> */}
      <canvas ref={canvasRef} />
    </div>
  );
}
