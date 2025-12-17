import { ChevronLeft, Folder } from "lucide-react";
import { Header } from "./Header";

interface NotesProps {
    isExpanded: boolean;
    onToggle: () => void;
}

export function Notes({ isExpanded, onToggle }: NotesProps) {
    if (isExpanded) {
        return (
            <div className="absolute w-full h-full top-0 left-0 bg-black">
                <Header />
                <div className="p-4 grid gap-3 max-h-[calc(100vh-20px)] scrollbar-hide overflow-y-auto">
                    <span
                        onClick={onToggle}
                        className="text-yellow-500 flex items-center gap-2 cursor-pointer">
                        <ChevronLeft /> Notes
                    </span>
                    <div className="p-2">
                        <h2 className="text-white text-2xl font-bold">ISPG</h2>
                        <p className="text-white text-lg font-semibold mb-2">Senior Software Engineer | Aug 2023 - Aug 2025</p>
                        <p className="text-white/80">
                            ISPG is a team of &quot;solutionists&quot; dedicated to making commerce easy and meaningful by building smart, tailored systems, with their products falling
                            under brands like Oorjit, Pedal Mobility, and Streamline. They&apos;re all about innovation that simplifies your commercial life!
                        </p>
                    </div>
                    <div className="p-2">
                        <h2 className="text-white text-2xl font-bold">what i did ?</h2>
                        <p className="text-white/80">
                            As a Senior Software Engineer, I focused on building modern web and mobile applications using ReactJS, Next.js, React Native, Redux Toolkit, React
                            Query, and Tailwind CSS. I created clean, reusable UI components, improved performance, integrated complex APIs, and implemented smooth
                            authentication flows. I collaborated with designers and backend teams to deliver fast, responsive, and user-friendly experiences across web,
                            Android, and iOS.
                        </p>
                    </div>
                    <div className="p-2">
                        <h2 className="text-white text-2xl font-bold">what i learned ?</h2>
                        <p className="text-white/80">
                            I learned Strapi, GraphQL, and improved my React Native skills. I also got better at working with APIs and understanding how mobile and web apps
                            connect.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 grid">
            <div
                onClick={onToggle}
                className="w-full bg-black rounded-2xl text-white overflow-hidden cursor-pointer">
                <div className="bg-yellow-500 w-full px-4 py-2 flex items-center gap-2">
                    <Folder />
                    <h2>Notes</h2>
                </div>
                <ul className="py-1">
                    <li className="px-4 py-2 border-b border-dotted border-white/30">ISPG</li>
                    <li className="px-4 py-2 border-b border-dotted border-white/30">What i did ?</li>
                    <li className="px-4 py-2">What i learned ?</li>
                </ul>
            </div>
        </div>
    );
}
