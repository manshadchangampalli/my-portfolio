import { type AppConfig } from "../../types";

export function AberContent({ app }: { app: AppConfig }) {
    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{app.name}</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-white/80">
                        Aber is a modern e-commerce platform designed to provide seamless shopping experiences. We developed both the web and mobile app.
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

