import React from "react";
import IntervalLogo from "@/assets/img/logo.svg";
import TeamLogo from "@/assets/img/companyLogo.svg";
import Icon from "@/components/ui/Icon.tsx";

const BoardSidebar: React.FC = () => {
    return (
        <>
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[22rem] lg:flex-col my-2">
                <div className="relative flex grow flex-col gap-y-5 bg-white p-5 dark:bg-black">
                    <div className="flex justify-between shrink-0 items-center">
                        <img src={IntervalLogo} className="w-10" alt="Stadium"/>
                        <div className="shadow-sm px-3 py-1 border border-solid border-gray-200 rounded-2xl">
                            <div className="flex items-center">
                                <img src={TeamLogo} className="w-4" alt="Stadium"/>
                                <span className="ml-2">Arsenal FC</span>
                                <Icon name="chevron-sort" className="ml-5" width="13px" height="13px"/>
                            </div>
                        </div>
                    </div>
                    <nav className="flex flex-1 flex-col my-20">
                        <div>
                            <h1 className="text-5xl">Studio Overview</h1>
                            <div className="grid grid-cols-2 gap-4 mt-10">
                                <div className="bg-gray-50 p-2">
                                    <span className="text-md">Stream</span>
                                    <div className="p-5">

                                    </div>
                                </div>
                                <div className="bg-gray-50 p-2">
                                    <span className="text-md">Squad</span>
                                    <div className="p-5"></div>
                                </div>
                                <div className="bg-gray-50 p-2">
                                    <span className="text-md">Tactics</span>
                                    <div className="p-5"></div>
                                </div>
                                <div className="bg-gray-50 p-2">
                                    <span className="text-md">Analysis</span>
                                    <div className="p-5"></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default BoardSidebar;