"use client";

import dynamic from "next/dynamic";
import "react-ios-liquid-glass/dist/index.css";

const Hero = dynamic(() => import("./_components/hero/Hero"));

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Hero />
      <div className="h-screen bg-gray-100 flex items-center justify-center relative">
        <h2 className="text-4xl font-bold text-gray-800"></h2>
      </div>
      <div className="h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-blue-800"></h2>
      </div>
      <div className="h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-green-800">Even more content</h2>
      </div>
    </main>
  );
}
