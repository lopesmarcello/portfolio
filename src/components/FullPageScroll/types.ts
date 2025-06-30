export interface Section {
    id: string
    content: React.ReactElement<{ goToIndex?: (index: number) => void }>;
}

export interface FullPageScrollProps {
    sections: Section[]
    animationDuration?: number // in seconds 
}

export interface SectionChildrenProps {
    goToIndex?: (index: number) => void
}