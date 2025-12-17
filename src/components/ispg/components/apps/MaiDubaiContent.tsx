import { type AppConfig } from "../../types";

export function MaiDubaiContent({ app }: { app: AppConfig }) {
    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{app.name}</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-white/80">
                        Mai Dubai is a Dubai-based bottled water company established by DEWA (Dubai Electricity and Water Authority).
                        The platform provides water delivery services, allowing customers to order water, manage their accounts,
                        and participate in loyalty programs. We developed both the web and mobile app.
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

