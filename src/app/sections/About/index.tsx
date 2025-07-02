"use client";

import Noise from "@/components/animations/Noise/Noise";
import { SectionChildrenProps } from "@/components/FullPageScroll/types";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import { navigateTo } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export const About = ({ goToIndex }: SectionChildrenProps) => {
  const { t } = useTranslation();
  const items = [
    { content: "Typescript" },
    { content: "React" },
    { content: "Frontend Development" },
    { content: "React Native" },
    { content: "Modern Web Applications" },
    { content: "High Performance" },
    { content: "UI/UX Principles" },
    { content: "Next.JS" },
  ];

  return (
    <section
      id="about"
      className="relative h-screen w-screen bg-black text-white  md:px-16 flex items-center justify-center"
    >
      <InfiniteScroll
        items={items}
        isTilted={true}
        tiltDirection='left'
        autoplay={true}
        autoplaySpeed={0.4}
        autoplayDirection="down"
        pauseOnHover={false}
      />


      {/* Blur and Overlay */}
      <div className="absolute inset-0 bg-black/80  z-10" />

      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={50}
      />

      <div className="absolute md:block max-w-4xl w-full z-20 px-6">

        <motion.p
          className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {t('about.description').toString()}
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <button
            onClick={() => navigateTo("Projects", goToIndex)}
            className="text-green-400 hover:underline text-base font-medium cursor-pointer"
          >
            {t('about.button').toString()}
          </button>
        </motion.div>
      </div>

    </section>
  );
};
