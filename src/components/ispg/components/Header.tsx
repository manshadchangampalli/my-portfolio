import { Battery, Signal, Wifi } from "lucide-react";

export function Header() {
    return (
        <div className="grid grid-cols-3 py-4 px-6 h-[70px]">
            <div className="w-full h-full grid place-items-center">
                <h2 className="text-white text-lg font-bold">15:23</h2>
            </div>
            <div className="w-full h-full bg-black rounded-full"></div>
            <div className="w-full h-full flex gap-3 items-center justify-end">
                <Signal className="text-white" />
                <Wifi className="text-white" />
                <Battery className="text-white" />
            </div>
        </div>
    );
}

