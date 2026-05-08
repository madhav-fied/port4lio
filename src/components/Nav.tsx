import { useState } from "react"
import { Link } from "react-router"
import "../styles/Nav.css"


export default function Nav() {

    const [menuToggled, setMenuToggled] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuToggled((prevMenuToggled) => !prevMenuToggled);
    }


    return (
        <header className="nav fixed inset-x-0 top-0 h-16">
            <div className="nav-inner flex justify-between py-3 px-2">
                <Link to="/" className="logo flex gap-4 align-center p-1">
                    <span className="bg-fg text-bg">
                        NV
                    </span>
                    <span>Narasiman<span className="text-gray-2"> / Vasudevan</span></span>
                </Link>
                <nav className="nav-desktop text-gray-1">
                    <Link to="/articles/latest">articles</Link>
                    <Link to="/lab/latest">lab</Link>
                    <Link to="/gallery">pins</Link>
                    <Link to="/contact">contact</Link>
                </nav>

                <button className="nav-mobile-toggle p-1 border border-gray-3" aria-expanded={menuToggled} onClick={toggleMenu}>
                    Menu
                </button>
            </div>
            <nav className="nav-mobile flex flex-col bg-bg text-gray-1" aria-hidden={!menuToggled}>
                <Link to="/articles/latest">
                    <span className="flex justify-between border-b-1 border-b-gray-3 p-2">
                        <span className="text-gray-2 ">+</span>
                        articles
                    </span>
                </Link>
                <Link to="/lab/latest">
                    <span className="flex justify-between border-b-1 border-b-gray-3 p-2">
                        <span className="text-gray-2">+</span>
                        lab
                    </span>
                </Link>
                <Link to="/gallery">
                    <span className="flex justify-between border-b-1 border-b-gray-3 p-2">
                        <span className="text-gray-2">+</span>
                        pins
                    </span>
                </Link>
                <Link to="/contact">
                    <span className="flex justify-between border-b-1 border-b-gray-3 p-2">
                        <span className="text-gray-2">+</span>
                        contact
                    </span>
                </Link>
            </nav>
        </header>

    )
}