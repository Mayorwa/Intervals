import React from "react";
import Pitch from "@/components/ui/Pitch.tsx";
import { placeholderGoalData } from "@/data/placeholder-goal-data";

const BoardIndex: React.FC = () => {
    // Use the accurate goal data from the data file
    const goalData = placeholderGoalData;

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