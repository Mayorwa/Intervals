import React from "react";
import Pitch from "@/components/ui/Pitch.tsx";

const BoardIndex: React.FC = () => {
    const goalData = {
        "metadata": {
            "match": "Argentina v Serbia and Montenegro 2006",
            "description": "2-0 goal in 6-0 win (Cambiasso)",
            "viewBox": "0 0 404 678"
        },
        "players": [
            {
                "id": "22e23",
                "name": "Saviola",
                "paths": [
                    {
                        "type": "movement_with_ball",
                        "svg_d": "M93.0000 171.0002C367.5003 103.5003 106.9997 149.5002 231.4993 361.9996C355.9993 574.4996 46.5000 254.0016 93.0000 383.5016C130.2000 487.1016 107.4998 325.1686 126.4997 259.5016L36.4997 200.0005L64.9997 321.0016",
                        "style": { "stroke": "#ffffff", "width": 8, "opacity": 0.2 }
                    }
                ]
            },
        ],
        "ball_events": [
            {
                "type": "midfield_guide_up",
                "svg_d": "M222.0000 16.0002L93.0000 171.0002C367.5003 103.5003 106.9997 149.5002 231.4993 361.9996C355.9993 574.4996 46.5000 254.0016 93.0000 383.5016C130.2000 487.1016 107.4998 325.1686 126.4997 259.5016L36.4997 200.0005L64.9997 321.0016",
                "style": { "stroke": "#cb3939", "width": 1 }
            },

        ],
        "touch_points": [
            { "x": 222, "y": 16.0002,  "label": "Goal" },
            { "x": 93.0000, "y": 171.000,  "label": "Move" },
            { "x": 126.4997, "y": 259.5016,  "label": "Move" },
            { "x": 36.4997, "y": 200.000,  "label": "Move" },
            { "x": 64.9997, "y": 321.0016,  "label": "Move" }
        ]
    };
    return (
        <>
            <div className="flex w-full justify-between container">
                <div>
                    <h3 className="text-6xl">Liverpool</h3>
                    <div>V Manchester City</div>
                </div>

                <div className="">
                    <p>player movement</p>
                </div>
            </div>
            <div className="container w-[34rem]"><Pitch data={goalData} /></div>
        </>
    )
}

export default BoardIndex