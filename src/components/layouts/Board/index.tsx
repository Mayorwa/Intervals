import React, { useEffect } from 'react'
import type {LayoutProps} from "@/types";
import CommonSidebar from "@/components/common/BoardSidebar.tsx";
import BoardHeader from "@/components/common/BoardHeader.tsx";

const BoardLayout: React.FC<LayoutProps> = ({children}) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#000000";

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);


    return (
        <>
            <main className="h-full p-2">
                <CommonSidebar/>
                <div className="lg:pl-[22rem]">
                    <BoardHeader/>
                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8 text-white">
                            {children}
                        </div>
                    </main>
                    </div>
            </main>
        </>
)
}

export default BoardLayout;