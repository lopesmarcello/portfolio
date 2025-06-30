'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import React from 'react'
import { FullPageScrollProps } from './types'
import { NavigationProgress } from '../NavigationProgress'


export default function FullPageScroll({
    sections,
    animationDuration = 0.8,
}: FullPageScrollProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const isScrolling = useRef(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const touchStartY = useRef(0)
    const touchStartTime = useRef(0)
    const lastTouchY = useRef(0)


    const goToIndex = (index: number) => {
        if (isScrolling.current || index === currentIndex) return;
        if (index >= 0 && index < sections.length) {
            setCurrentIndex(index)
            isScrolling.current = true
        }
    }

    // Mouse Wheel
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling.current) return
            if (e.deltaY > 50) goToIndex(currentIndex + 1)
            else if (e.deltaY < -50) goToIndex(currentIndex - 1)

        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        return () => window.removeEventListener('wheel', handleWheel)
    }, [currentIndex, sections.length])

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling.current) return
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                goToIndex(currentIndex + 1)
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                goToIndex(currentIndex - 1)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentIndex, sections.length])

    // Touch Navigation
    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY
            lastTouchY.current = e.touches[0].clientY
            touchStartTime.current = Date.now()
        }

        const handleTouchMove = (e: TouchEvent) => {
            const currentY = e.touches[0].clientY
            const deltaY = touchStartY.current - currentY

            // Prevent pull-to-refresh when at top and trying to scroll up
            if (currentIndex === 0 && deltaY < 0) {
                e.preventDefault()
            }

            // Prevent overscroll at bottom
            if (currentIndex === sections.length - 1 && deltaY > 0) {
                e.preventDefault()
            }

            lastTouchY.current = currentY
        }

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndY = e.changedTouches[0].clientY
            const deltaY = touchStartY.current - touchEndY
            const touchDuration = Date.now() - touchStartTime.current

            // Calculate velocity for more responsive detection
            const velocity = Math.abs(deltaY) / touchDuration

            // More sensitive thresholds
            const minDistance = 30  // Reduced from 50
            const minVelocity = 0.3  // px/ms

            // Trigger navigation if either distance or velocity threshold is met
            if (Math.abs(deltaY) > minDistance || velocity > minVelocity) {
                if (deltaY > 0) {
                    goToIndex(currentIndex + 1) // Swipe up
                } else {
                    goToIndex(currentIndex - 1) // Swipe down
                }
            }
        }

        // Add passive: false to enable preventDefault
        window.addEventListener('touchstart', handleTouchStart, { passive: true })
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('touchend', handleTouchEnd, { passive: true })

        return () => {
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [currentIndex, sections.length])

    // Disable body scroll and prevent pull-to-refresh
    useEffect(() => {
        const body = document.body
        const html = document.documentElement

        // Disable scroll
        body.style.overflow = 'hidden'
        html.style.overflow = 'hidden'

        // Prevent pull-to-refresh on supported browsers
        body.style.overscrollBehavior = 'none'
        html.style.overscrollBehavior = 'none'

        // Prevent touch manipulation
        body.style.touchAction = 'none'

        return () => {
            body.style.overflow = ''
            html.style.overflow = ''
            body.style.overscrollBehavior = ''
            html.style.overscrollBehavior = ''
            body.style.touchAction = ''
        }
    }, [])

    // Scroll cooldown
    useEffect(() => {
        const timeout = setTimeout(() => {
            isScrolling.current = false
        }, animationDuration * 1000 + 100)

        return () => clearTimeout(timeout)
    }, [currentIndex, animationDuration])


    // Announce section changes to screen readers
    useEffect(() => {
        const currentSection = sections[currentIndex];
        if (currentSection) {
            // Update document title for screen readers
            document.title = `${currentSection.id.charAt(0).toUpperCase() + currentSection.id.slice(1)} - Marcello Lopes`;

            // Announce to screen readers
            const announcement = document.getElementById('sr-announcement');
            if (announcement) {
                announcement.textContent = `Navigated to ${currentSection.id} section`;
            }
        }
    }, [currentIndex, sections]);

    const sectionNames = sections.map(section =>
        section.id.charAt(0).toUpperCase() + section.id.slice(1)
    );

    return (
        <div
            ref={containerRef}
            className="h-screen w-screen overflow-hidden relative"
        >
            <NavigationProgress
                currentIndex={currentIndex}
                totalSections={sections.length}
                sectionNames={sectionNames}
            />

            {/* Screen reader announcements */}
            <div
                id="sr-announcement"
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
            />

            <motion.div
                className="flex flex-col"
                initial={{ y: 0 }}
                animate={{ y: -currentIndex * 100 + 'vh' }}
                transition={{ duration: animationDuration, ease: 'easeInOut' }}
            >
                {sections.map((section) => (
                    <div
                        key={section.id}
                        id={section.id}
                        className="h-screen w-screen flex-shrink-0"
                    >
                        {React.Children.map(section.content, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child, { goToIndex });
                            }
                            return child;
                        })}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
