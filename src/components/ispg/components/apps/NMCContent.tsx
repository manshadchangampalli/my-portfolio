import { type AppConfig } from "../../types";

export function NMCContent({ app }: { app: AppConfig }) {
    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{app.name}</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-white/80">
                        NMC is a modern healthcare management platform that streamlines medical operations and
                        enhances patient care.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <p className="text-white/80">Strapi, Next.js, React Native, Algolia</p>
                </div>
            </div>
        </div>
    );
}

