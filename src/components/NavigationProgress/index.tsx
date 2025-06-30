interface NavigationProgressProps {
    currentIndex: number;
    totalSections: number;
    sectionNames: string[];
}

export const NavigationProgress = ({
    currentIndex,
    totalSections,
    sectionNames
}: NavigationProgressProps) => {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
            {Array.from({ length: totalSections }).map((_, index) => (
                <div
                    key={index}
                    className={`relative group cursor-pointer transition-all duration-300 ${index === currentIndex
                            ? 'scale-125'
                            : 'hover:scale-110'
                        }`}
                >
                    <div
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${index === currentIndex
                                ? 'bg-green-400 border-green-400'
                                : 'bg-transparent border-white/50 hover:border-white'
                            }`}
                    />

                    {/* Tooltip */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                            {sectionNames[index]}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};