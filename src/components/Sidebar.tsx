import { Link } from "react-router";

interface SidebarItem {
    title: string;
    date: string;
    slug: string;
}

export interface SidebarProps {
    sidebarOpen: boolean;
    items: Array<SidebarItem>;
    toggleSidebarOpen: () => void
}

export default function Sidebar({ sidebarOpen, items, toggleSidebarOpen }: SidebarProps) {
    return (
        <>
            <aside className={`
                z-25 h-full w-[45dvw] 
                border border-transparent border-r-gray-3 
                flex flex-col text-gray-1 px-3 pt-3 gap-2 
                transition-transform duration-50 ease-in-out absolute bg-bg ` +
                (sidebarOpen ? "translate-x-0" : "-translate-x-full")}
            >
                {
                    items.map((item, idx) => {
                        return (
                            <Link key={idx} to={item.slug} onClick={toggleSidebarOpen}>{item.title}</Link>
                        )
                    })
                }
            </aside>
        </>
    )
}