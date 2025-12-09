import { type AppConfig } from "../../types";

export function MBSContent({ app }: { app: AppConfig }) {
    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{app.name}</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-white/80">
                        MBS is a financial services application that provides banking solutions and financial
                        management tools.
                    </p>
                </div>
            </div>
        </div>
    );
}

