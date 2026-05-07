import Nav from "../components/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import { labItems } from "../content/lab";

export default function Lab() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <div className="flex flex-col h-dvh overflow-hidden relative">
            <Nav />
            <div className="mt-16 shrink-0 border border-gray-3 flex justify-between items-center h-10 px-2">
                <FontAwesomeIcon icon={faBars} size="sm" onClick={toggleMenu} />
                <span className="text-gray-1 text-sm">
                    /Lab
                </span>
            </div>
            <div className="relative flex-1">
                <Sidebar sidebarOpen={menuOpen} items={labItems} toggleSidebarOpen={toggleMenu} />
                <Outlet />
            </div>
        </div>
    )
}