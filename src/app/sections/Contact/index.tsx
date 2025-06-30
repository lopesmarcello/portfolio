"use client"

import Noise from "@/components/animations/Noise/Noise";
import { SectionChildrenProps } from "@/components/FullPageScroll/types";
import { Github, Linkedin, Mail } from "lucide-react";


export const Contact = (props: SectionChildrenProps) => {
    return (
        <section className="relative h-screen w-screen bg-black flex flex-col items-center justify-center text-white px-6">

            <Noise
                patternSize={250}
                patternScaleX={1}
                patternScaleY={1}
                patternRefreshInterval={2}
                patternAlpha={12}
            />

            <div className="max-w-xl w-full text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-400">Get in touch!</h2>

                <p className="text-gray-400">Always open to new ideas, collabs and projects.</p>

                <div className="flex items-center justify-center gap-6 text-2xl">
                    <a
                        href="https://github.com/lopesmarcello"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github />
                    </a>

                    <a
                        href="https://linkedin.com/in/mlopes30"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href="mailto:marcellolopesdev@gmail.com"
                        className="hover:text-green-400 transition-colors"
                        aria-label="Email"
                    >
                        <Mail />
                    </a>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    📍 Located in São Paulo, Brazil
                </p>
            </div>
        </section>
    );
};
