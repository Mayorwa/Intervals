import React from "react";
import Pitch from "@/components/ui/Pitch.tsx";
import { argentinaSerbia2006 } from "@/data/argentina-serbia-2006";

const BoardIndex: React.FC = () => {
    // Use the accurate goal data from the data file
    const goalData = argentinaSerbia2006;

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