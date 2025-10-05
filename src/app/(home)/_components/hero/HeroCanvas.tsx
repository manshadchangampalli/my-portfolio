import { RefObject } from "react";

interface HeroCanvasProps {
    canvasRef: RefObject<HTMLCanvasElement | null>;
}

export default function HeroCanvas({ canvasRef }: HeroCanvasProps) {
    return (
        <canvas
            className="absolute hero__canvas top-0 left-0 w-full h-[100dvh]!"
            ref={canvasRef}
        />
    );
}
