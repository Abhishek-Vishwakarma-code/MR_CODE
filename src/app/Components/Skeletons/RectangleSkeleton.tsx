import React from 'react';

const RectangleSkeleton: React.FC = () => {
    return (
        <div className="h-6 w-16 rounded-lg bg-[var(--bg-accent)] animate-pulse"></div>
    );
};

export default RectangleSkeleton;