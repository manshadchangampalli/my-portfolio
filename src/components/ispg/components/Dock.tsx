import { AppType } from "../types";

interface DockProps {
    onAppClick: (app: AppType) => void;
}

const dockApps = [
    { id: AppType.PHONE, name: "Phone", icon: "/texture/ispg/apps/Phone.webp" },
    { id: AppType.MESSAGES, name: "Messages", icon: "/texture/ispg/apps/Messages.webp" },
    { id: AppType.FACETIME, name: "FaceTime", icon: "/texture/ispg/apps/FaceTime.webp" },
    { id: AppType.WALLET, name: "Wallet", icon: "/texture/ispg/apps/Wallet.webp" },
];

export function Dock({ onAppClick }: DockProps) {
    return (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[95%] h-[90px] bg-black/20 backdrop-blur-xl grid grid-cols-4 rounded-[45px] items-center justify-items-center px-4">
            {dockApps.map((app) => (
                <div
                    key={app.id}
                    onClick={() => onAppClick(app.id)}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
                >
                    <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
}

