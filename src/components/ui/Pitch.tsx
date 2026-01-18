import React from "react";

// Types for our tactical data
interface Path {
    type: string;
    svg_d: string;
    style: { stroke: string; width: number; opacity: number };
}

interface Player {
    id: string;
    name: string;
    paths: Path[];
}

interface BallEvent {
    svg_d: string;
    style: { stroke: string; width: number; dasharray?: string };
}

interface TouchPoint {
    x: number;
    y: number;
}

interface TacticalData {
    players: Player[];
    ball_events: BallEvent[];
    touch_points: TouchPoint[];
}

const Pitch: React.FC<{ data: TacticalData }> = ({ data }) => {
    // SVG Viewbox dimensions
    const svgW = 404;
    const svgH = 678;

    return (
        <div className="relative w-full max-w-lg mx-auto text-white">
            <svg
                viewBox={`0 0 ${svgW} ${svgH}`}
                fill="#ffffff26"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* --- PITCH LINES (Your Original SVG Code) --- */}
                <g>
                    <rect x="74.5" y="21.5" width="255" height="105" stroke="currentColor" fill="none"/>
                    <rect x="144.5" y="21.5" width="115" height="35" stroke="currentColor" fill="none"/>
                    <circle cx="202.5" cy="89.5" fill="currentColor" r="0.5"/>
                    <rect x="0.5" y="-0.5" width="255" height="105" transform="matrix(1 0 0 -1 74 656)" stroke="currentColor" fill="none"/>
                    <rect x="0.5" y="-0.5" width="115" height="35" transform="matrix(1 0 0 -1 144 656)" stroke="currentColor" fill="none"/>
                    <path d="M248 551.5C242.642 544.368 235.696 538.577 227.71 534.586C219.725 530.594 210.919 528.51 201.989 528.5C193.062 528.514 184.261 530.599 176.28 534.591C168.299 538.582 161.356 544.371 156 551.5H248Z" fill="none" stroke="currentColor"/>
                    <path d="M156 126.5C161.358 133.632 168.304 139.423 176.29 143.414C184.275 147.406 193.081 149.49 202.011 149.5C210.938 149.486 219.739 147.401 227.72 143.409C235.701 139.418 242.644 133.629 248 126.5H156Z" fill="none" stroke="currentColor"/>
                    <circle cx="202.5" cy="588.5" fill="currentColor" r="0.5"/>
                    {/*center of pitch*/}
                    <path d="M0 339H404" stroke="currentColor"/>
                    <circle cx="202" cy="339" r="57.5" stroke="currentColor" fill="none"/>
                    {/*<circle cx="202" cy="339" r="2" fill="currentColor"/>*/}
                </g>
                {/*pitch & top/bottom post*/}
                <rect x="0.5" y="21.5" width="403" height="635" stroke="currentColor"/>
                <rect x="174.5" y="0.5" width="55" height="21" stroke="currentColor"/>
                <rect x="173.5" y="656.5" width="56" height="21" stroke="currentColor"/>

                {/* 1. Player Movement Paths (The "Ghost" lines) */}
                {data.players.map((player) =>
                    player.paths.map((path, idx) => (
                        <path
                            key={`${player.id}-path-${idx}`}
                            d={path.svg_d}
                            stroke={path.style.stroke}
                            strokeWidth={path.style.width}
                            strokeOpacity={path.style.opacity}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    ))
                )}

                {/* 2. Ball Movement (Passes and Shots) */}
                {data.ball_events.map((event, idx) => (
                    <path
                        key={`ball-event-${idx}`}
                        d={event.svg_d}
                        stroke={event.style.stroke}
                        strokeWidth={event.style.width}
                        strokeDasharray={event.style.dasharray}
                        fill="none"
                    />
                ))}

                {/* 3. Touch Points (Blue Circles) */}
                {data.touch_points.map((pt, idx) => (
                    <circle
                        key={`touch-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r="2"
                        fill="#e64f4f"
                        stroke="#e64f4f"
                        strokeWidth="1"
                    />
                ))}

                {/* SVG Defs for clipping */}
            </svg>
        </div>
    );
};

export default Pitch;