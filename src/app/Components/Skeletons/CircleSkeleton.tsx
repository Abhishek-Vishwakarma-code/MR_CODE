import React from "react";

const CircleSkeleton: React.FC = () => {
    return (
        <div className="h-6 w-6 rounded-full bg-[var(--bg-accent)] animate-pulse"></div>
    );
};

export default CircleSkeleton;
