"use client"

import Noise from "@/components/animations/Noise/Noise";
import { SectionChildrenProps } from "@/components/FullPageScroll/types";
import { useTranslation } from "@/hooks/useTranslation";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";


export const Contact = ({ }: SectionChildrenProps) => {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen w-screen bg-black flex flex-col items-center justify-center text-white px-6">

            <Noise
                patternSize={250}
                patternScaleX={1}
                patternScaleY={1}
                patternRefreshInterval={2}
                patternAlpha={12}
            />

            <div className="max-w-xl w-full text-center space-y-6 z-20">
                <h2 className="text-3xl md:text-4xl font-bold text-green-400">{t('contact.title')}</h2>

                <p className="text-gray-400">{t('contact.description')}</p>

                <div className="flex items-center justify-center gap-6 text-2xl">
                    <Link
                        href="https://github.com/lopesmarcello"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors cursor-pointer"
                        aria-label="GitHub"
                    >
                        <Github />
                    </Link>

                    <Link
                        href="https://linkedin.com/in/mlopes30"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors cursor-pointer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin />
                    </Link>

                    <Link
                        href="mailto:marcellolopesdev@gmail.com"
                        className="hover:text-green-400 transition-colors cursor-pointer"
                        aria-label="Email"
                    >
                        <Mail />
                    </Link>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                    📍 {t('contact.location')}
                </p>
            </div>
        </section>
    );
};
