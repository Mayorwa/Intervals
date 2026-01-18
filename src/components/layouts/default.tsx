import React from "react";

// components
import Nav from "@/components/common/AppHeader.tsx";
// types
import type { LayoutProps } from "@/types";

const DashboardLayout: React.FC<LayoutProps>  = ({children}) => {
    return (
        <>
            <main className="bg-white">
                <Nav />
                <div className="container flex py-5 h-full">
                    {children}
                </div>
            </main>
        </>
    );
}

export default DashboardLayout;