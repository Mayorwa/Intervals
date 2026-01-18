import React from "react";
import Icon from "@/components/ui/Icon.tsx";
import AvatarImg from "@/assets/img/avatar.png";

const BoardHeader: React.FC = () => {
    const navItems = [
        {
            name: "Notifications",
            icon: "notification",
        },
        {
            name: "Settings",
            icon: "setting",
        }
    ];
    return (
        <>
            <div className="sticky top-0 z-40 flex shrink-0 items-center justify-end gap-x-2.5 px-2 shadow-xs sm:px-6 lg:px-4 dark:border-white/10 dark:bg-gray-900">
                {
                    navItems.map((item, i) => (
                        <div key={i} className="p-3 bg-white text-black dark:bg-black dark:text-white">
                            <Icon name={item.icon} />
                        </div>
                    ))
                }

                <div className="p-1 bg-white text-black dark:bg-black dark:text-white flex items-center">
                    <img src={AvatarImg} className="w-9 h-9" alt="Thomas Van Deck"/>
                    <span className="mx-3">Thomas Van Deck</span>
                    <Icon name="caret-down"/>
                </div>
            </div>
        </>
    )
}

export default BoardHeader;