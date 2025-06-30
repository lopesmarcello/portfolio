'use client';

import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<
    React.PropsWithChildren<{}>,
    ErrorBoundaryState
> {
    constructor(props: React.PropsWithChildren<{}>) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen bg-black flex items-center justify-center text-white">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                        <p className="text-gray-400 mb-4">
                            We're sorry, but something unexpected happened.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-300 transition"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}