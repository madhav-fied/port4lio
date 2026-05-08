import Polaroid from "../components/Polaroid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-regular-svg-icons";
import Marquee from "../components/Marquee";
import { redirect } from "../utils/links";
import "../styles/Home.css";

export default function Home() {

    const MARQUEE_WORDS = [
        , "Python", "Langchain", "Javascript", "FastAPI",
        "Nginx", "React", "Langgraph", "Socket.IO", "Blender",
        "K8S", "GH Actions", "PostgreSQL", "NextJS", "MCP"
    ]

    return (
        <div className="home-page flex flex-col h-screen">
            <div className="mt-16 grid grid-cols-[3fr_1fr] gap-0 border border-1 border-gray-3 ">
                <Polaroid src="/me.jpg" text="Myself @ 2026 Jan" />
                <div className="designation [text-orientation:upright] [writing-mode:vertical-lr] h-80 text-2xl font-extrabold text-center">
                    <span className="text-gray-2">SOFTWARE. <span className="text-fg">.ENGINEER</span></span>
                </div>
            </div>
            <div className="grid grid-cols-4 h-28 contact-row">
                <div className="border border-gray-3 flex flex-col justify-between cursor-pointer py-5 px-2" onClick={() => redirect("rd-github")}>
                    <span className="text-gray-1 text-xs grid-block-header">
                        &gt; github
                    </span>
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                    </div>
                </div>
                <div className="border border-gray-3 flex flex-col justify-evenly">
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faCamera} size="2x" className="text-gray-2" fade />
                    </div>
                </div>
                <div className="border border-gray-3 flex flex-col justify-between py-5 px-2 cursor-pointer" onClick={() => redirect("rd-x")}>
                    <span className="text-gray-1 text-xs grid-block-header">
                        &gt; X.com
                    </span>
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </div>
                </div>
                <div className="border border-gray-3 flex flex-col justify-between py-5 px-2 cursor-pointer" onClick={() => redirect("rd-linkedin")}>
                    <span className="text-gray-1 text-xs grid-block-header">
                        &gt; linkedin
                    </span>
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 border-1 h-40 md:h-50 border-gray-3 p-3 md:p-5">
                <span className="text-gray-1 grid-block-header">&gt; whoami</span>
                <span className="desc-whoami text-gray-2 text-xs text-left ml-8">
                    Started with D.E.Shaw, worked on GenAI systems where code met capital.
                    Now building something of my own.
                    Learning 3D systems and blender because interfaces won't stay flat.
                    I use AI when it helps. Think without it when it matters.
                    Exploring where rigor meets curiosity.
                </span>
            </div>
            <div className="grow">
                <div className="grid grid-cols-[2fr_1fr] h-full">
                    <div className="border-1 border-gray-3 flex flex-col items-center justify-evenly py-2">
                        <div className="text-sm md:text-lg text-gray-1 w-[90%]">
                            &gt; Projects
                        </div>
                        <div className="flex flex-col gap-3 md:gap-6 justify-center text-xs md:text-sm w-[80%] text-gray-2">
                            <div className="border border-transparent border-b-gray-3 hover:text-fg cursor-pointer">
                                <span>
                                    Multiplayer Blackjack
                                </span>
                            </div>
                            <div className="border border-transparent border-b-gray-3 hover:text-fg cursor-pointer">
                                <span>
                                    Clib - Datastructures in C
                                </span>
                            </div>
                            <div className="border border-transparent border-b-gray-3 hover:text-fg cursor-pointer">
                                <span>
                                    Quick links
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="border-1 border-gray-3 flex flex-col px-3 md:p-8 justify-evenly text-gray-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs md:text-sm text-gray-1">
                                &gt; Building
                            </span>
                            <span className="text-[8px] md:text-xs">
                                3D marketplaces
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs md:text-sm text-gray-1">
                                &gt; Learning
                            </span>
                            <span className="text-[8px] md:text-xs">
                                Blender
                            </span>
                            <span className="text-[8px] md:text-xs">
                                Carnatic theory
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs md:text-sm text-gray-1">
                                &gt; Playing
                            </span>
                            <span className="text-[8px] md:text-xs">
                                Hollow Knight
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="marquee-outer border border-gray-3 h-14 flex items-center mt-auto">
                <Marquee words={MARQUEE_WORDS} />
            </div>


        </div >
    )
}