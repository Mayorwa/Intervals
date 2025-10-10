import React from 'react';

interface IconProps {
    name: string;
    viewBox?: string;
    width?: string;
    height?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, viewBox = '0 0 24 24', width = '24px', height = '24px', className = '' }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} className={`icon ${className}`} >
            <use xlinkHref={`/sprite.svg#icon-${name}`} />
        </svg>
    );
};

export default Icon;
