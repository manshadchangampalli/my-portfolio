'use client'

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/hero/Hero"));


export default function Home() {
  return (
    <main className="bg-white w-full">
      <Hero />
      <div className="bg-gradient-to-b from-black to-gray-800 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Scroll Animation Complete!</h2>
          <p className="text-lg">The hero section should now work smoothly on all devices.</p>
        </div>
      </div>
    </main>
  );
}
