import Nav from "../components/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { articles } from "../content/articles";
import { Outlet } from "react-router";

export default function Articles() {

    const [menuOpen, setMenuOpen] = useState<boolean>(true);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <>
            <Nav />
            <div className="mt-16 border border-gray-3 flex justify-between items-center h-10">
                <FontAwesomeIcon icon={faBars} size="sm" onClick={toggleMenu} />
                <span className="text-gray-1 text-sm">
                    /Articles
                </span>
            </div>
            <div className="relative">
                <Sidebar sidebarOpen={menuOpen} items={articles} />
                <Outlet />
            </div>
        </>
    )
}