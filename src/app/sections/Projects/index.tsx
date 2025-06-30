"use client";

import Silk from "@/components/backgrounds/Silk/Silk";
import { SectionChildrenProps } from "@/components/FullPageScroll/types";
import { ProjectCard } from "@/components/ProjectCard";
import { GithubRepo } from "@/types/github";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type ProjectProps = {
    repos: GithubRepo[];
} & SectionChildrenProps;



export const Projects = ({ repos }: ProjectProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        breakpoints: {
            '(max-width: 768px)': { dragFree: false }
        }
    });

    // Embla state tracking
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    // Group repos into columns of 2 for desktop, 1 for mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const chunkArray = <T,>(arr: T[], size: number): T[][] => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    // Group repos: 2 per column on desktop, 1 per column on mobile
    const columns = chunkArray(repos, isMobile ? 1 : 2);

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white flex flex-col justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />


            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6">
                {/* Mobile: Show current card indicator */}
                {isMobile && scrollSnaps.length > 1 && (
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{selectedIndex + 1}</span>
                            <span>of</span>
                            <span>{scrollSnaps.length}</span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                className={`p-2 rounded-full border ${canScrollPrev
                                    ? 'border-green-400 text-green-400 hover:bg-green-400/10'
                                    : 'border-gray-600 text-gray-600'
                                    } transition-colors`}
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                className={`p-2 rounded-full border ${canScrollNext
                                    ? 'border-green-400 text-green-400 hover:bg-green-400/10'
                                    : 'border-gray-600 text-gray-600'
                                    } transition-colors`}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}

                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex gap-4 md:gap-6">
                        {columns.map((column, columnIndex) => (
                            <div
                                key={columnIndex}
                                className={`flex-shrink-0 ${isMobile
                                    ? 'w-[calc(100vw-3rem)]'
                                    : 'w-[280px] md:w-[320px]'
                                    }`}
                            >
                                {/* Column container with 2 rows */}
                                <div className="flex flex-col gap-4 h-full">
                                    {column.map((repo, repoIndex) => (
                                        <div
                                            key={repo.id}
                                            className={`${isMobile
                                                ? 'h-auto'
                                                : 'flex-1 min-h-[200px] max-h-[280px]'
                                                }`}
                                        >
                                            <ProjectCard
                                                title={repo.name}
                                                description={repo.description ?? undefined}
                                                language={repo.language ?? undefined}
                                                link={repo.html_url}
                                                cardIndex={columnIndex * 2 + repoIndex}
                                            />
                                        </div>
                                    ))}

                                    {/* Fill empty space if odd number of repos in last column */}
                                    {!isMobile && column.length === 1 && (
                                        <div className="flex-1 min-h-[200px]" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isMobile && scrollSnaps.length > 1 && (
                    <div className="flex justify-center mt-6 gap-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${index === selectedIndex
                                    ? 'bg-green-400'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};
