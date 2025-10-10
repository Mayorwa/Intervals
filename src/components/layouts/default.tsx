import React from "react";

// components
import Nav from "@/components/Nav.tsx";
// types
type LayoutProps = { children: React.ReactElement }

const DashboardLayout: React.FC<LayoutProps>  = ({children}) => {
    return (
        <>
            <Nav />
            <div className="container flex py-5 h-full">
                {children}
            </div>
        </>
    );
}

export default DashboardLayout;