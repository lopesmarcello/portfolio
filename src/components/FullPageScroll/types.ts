export interface FullPageScrollProps {
    sections: { id: string; content: React.ReactNode }[]
    animationDuration?: number // in seconds 
}

export interface SectionChildrenProps {
    goToIndex?: (index: number) => void
    [key: string]: unknown
}
