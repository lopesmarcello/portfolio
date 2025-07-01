export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-400">Loading portfolio...</p>
            </div>
        </div>
    );
}