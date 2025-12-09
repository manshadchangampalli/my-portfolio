import { type AppConfig } from "../../types";

export function UltimateMotorsContent({ app }: { app: AppConfig }) {
    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{app.name}</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-white/80">
                        Ultimate Motors is a comprehensive automotive platform designed to provide users with an
                        exceptional car buying and selling experience. We developed both the web and mobile app together.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <p className="text-white/80">Next.js, React Native</p>
                </div>
            </div>
        </div>
    );
}

