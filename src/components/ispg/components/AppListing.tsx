import { AppType } from "../types";
import { appConfigs } from "../appConfigs";

interface AppListingProps {
    onAppClick: (app: AppType) => void;
}

export function AppListing({ onAppClick }: AppListingProps) {
    return (
        <div className="p-4 grid grid-cols-4 items-start gap-4">
            {appConfigs.map((app) => (
                <div
                    key={app.id}
                    onClick={() => onAppClick(app.id)}
                    className="flex flex-col items-center justify-center cursor-pointer gap-1"
                >
                    <div className="w-18 h-18 rounded-2xl flex items-center justify-center overflow-hidden">
                        <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm text-white text-center">{app.name}</span>
                </div>
            ))}
        </div>
    );
}

