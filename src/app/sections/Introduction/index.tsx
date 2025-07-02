"use client";

import Dither from "@/components/backgrounds/Dither/Dither";
import Silk from "@/components/backgrounds/Silk/Silk";
import { SectionChildrenProps } from "@/components/FullPageScroll/types";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useDeviceCapabilities } from "@/hooks/useDeviceCapabilities";
import { useTranslation } from "@/hooks/useTranslation";
import { navigateTo, } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";


export const Introduction = ({ goToIndex }: SectionChildrenProps) => {
  const { canHandleHeavyAnimations } = useDeviceCapabilities();
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Conditional Background */}
      <div className="absolute inset-0 z-0">
        {canHandleHeavyAnimations ? (
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={false}
            colorNum={6}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        ) : (
          // Lightweight fallback
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        )}
      </div>

      {/* Blur and Overlay*/}
      <div className="absolute inset-0 bg-black/80  z-10" />

      {/* Name and Role */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Marcello Lopes
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-green-400 font-semibold mt-2 tracking-wide">
          {t('introduction.role').toString()}
        </h2>
      </motion.div>

      {/* Responsive Navigation */}
      <motion.div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-6 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <LanguageSwitcher />
        <nav className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs sm:text-sm md:text-base font-medium">
          <button
            onClick={() => navigateTo("About", goToIndex)}
            className="hover:text-green-400 transition text-right md:text-left"
          >
            {t('introduction.about').toString()}
          </button>
          <button
            onClick={() => navigateTo("Projects", goToIndex)}
            className="hover:text-green-400 transition text-right md:text-left"
          >
            {t('introduction.projects').toString()}
          </button>
        </nav>

        {/* Mobile-friendly Socials */}
        <div className="flex gap-3">
          <a
            href="https://github.com/lopesmarcello"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/mlopes30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Linkedin size={16} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </motion.div>

      {/* Navigational Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-green-400 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        onClick={() => navigateTo("About", goToIndex)} // Navigate to About section
      >
        <ChevronDown className="animate-bounce" size={32} strokeWidth={1.5} />
      </motion.div>
    </div>
  );
};
