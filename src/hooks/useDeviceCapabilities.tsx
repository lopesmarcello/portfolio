"use client"

import { useState, useEffect } from 'react';

// Extend Navigator interface for connection property
interface NavigatorWithConnection extends Navigator {
    connection?: {
        effectiveType: string;
        downlink: number;
    };
}

export const useDeviceCapabilities = () => {
    const [capabilities, setCapabilities] = useState({
        canHandleHeavyAnimations: true,
        isMobile: false,
        hasGoodConnection: true,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const checkCapabilities = () => {
            // Check if mobile
            const isMobile = window.innerWidth < 768 ||
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Check connection quality
            const connection = (navigator as NavigatorWithConnection).connection;
            const hasGoodConnection = !connection ||
                connection.effectiveType === '4g' ||
                connection.downlink > 2

            // Check hardware acceleration
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            const hasWebGL = !!gl;

            setCapabilities({
                canHandleHeavyAnimations: hasWebGL && hasGoodConnection && !isMobile,
                isMobile,
                hasGoodConnection,
            });
        };

        checkCapabilities();
        window.addEventListener('resize', checkCapabilities);
        return () => window.removeEventListener('resize', checkCapabilities);
    }, []);

    return capabilities;
};