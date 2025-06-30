"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

type ProjectCardProps = {
    title: string;
    description?: string;
    language?: string;
    link: string;
    cardIndex?: number;
};

export const ProjectCard = ({
    title,
    description = "Sem descrição disponível.",
    language = "TypeScript",
    link,
    cardIndex = 0,
}: ProjectCardProps) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between w-full h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 text-white hover:border-green-400 transition-all duration-300 hover:shadow-md hover:shadow-green-500/10"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: cardIndex * 0.05 }}
        >
            <div>
                <h3 className="text-base font-semibold tracking-tight group-hover:text-green-400 transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                <span className="italic">{language}</span>
                <Github size={16} className="group-hover:text-green-400 transition-colors" />
            </div>
        </motion.a>
    );
};
