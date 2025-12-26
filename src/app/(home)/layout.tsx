"use client";
import Hero from "./_components/hero/Hero";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-black w-full">
            <div className="w-full h-screen">
                <Hero />
            </div>
        </div>
    );
}
