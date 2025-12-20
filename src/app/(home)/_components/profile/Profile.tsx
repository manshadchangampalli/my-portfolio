import React from 'react'

const Profile = () => {
    return (
        <div className="w-full py-24 flex items-center justify-center bg-black px-4 sm:px-24 md:px-8 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center ">
                    <h2 className="font-poller-one text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight">
                        Manshad Changampalli
                    </h2>
                    <h3 className=" text-white/90 text-lg sm:text-xl md:text-2xl lg:text-4xl font-light">
                        Senior Software Engineer
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mt-6 sm:mt-8">
                        Results-driven Front-End Developer with 5+ years of turning coffee into code.
                        Building SPAs and responsive apps with React, Next.js, and React Native (TypeScript enthusiast).
                        Mobile-first by default, clean code by choice, and LeetCode by... well, let&apos;s call it a hobby.
                        When I&apos;m not optimizing performance, I&apos;m probably thinking about system design. 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
