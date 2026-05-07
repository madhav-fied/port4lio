import Polaroid from "../components/Polaroid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-regular-svg-icons";
import Marquee from "../components/Marquee";
import { redirect } from "../utils/links";

export default function Home() {

    const MARQUEE_WORDS = [
        , "Python", "Langchain", "Javascript", "FastAPI",
        "Nginx", "React", "Langgraph", "Socket.IO", "Blender",
        "K8S", "GH Actions", "PostgreSQL", "NextJS", "MCP"
    ]

    return (
        <>
            <div className="mt-16 grid grid-cols-[3fr_1fr] gap-0 border border-1 border-gray-3 ">
                <Polaroid src="/me.jpg" text="Myself @ 2026 Jan" />
                <div className="[text-orientation:upright] [writing-mode:vertical-lr] h-80 text-2xl font-extrabold text-center">
                    <span className="text-gray-2">SOFTWARE. <span className="text-fg">.ENGINEER</span></span>
                </div>
            </div>
            <div className="grid grid-cols-1 border-1 h-40 border-gray-3">
                <span className="text-gray-1">&gt; whoami</span>
                <span className="text-gray-2 text-xs text-left ml-8">
                    Started with D.E.Shaw, worked on GenAI systems where code met capital.
                    Now building something of my own.
                    Learning 3D systems and blender because interfaces won't stay flat.
                    I use AI when it helps. Think without it when it matters.
                    Exploring where rigor meets curiosity.
                </span>
            </div>
            <div className="grid grid-cols-4 h-18">
                <div className="border border-gray-3 flex flex-col justify-evenly cursor-pointer" onClick={() => redirect("rd-github")}>
                    <span className="text-gray-1 text-xs">
                        &gt; github
                    </span>
                    <span className="text-gray-2 text-xs">
                        madhav-fied
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
                <div className="border border-gray-3 flex flex-col justify-between py-2 cursor-pointer" onClick={() => redirect("rd-x")}>
                    <span className="text-gray-1 text-xs">
                        &gt; x(twitter)
                    </span>
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </div>
                </div>
                <div className="border border-gray-3 flex flex-col justify-between py-2 cursor-pointer" onClick={() => redirect("rd-linkedin")}>
                    <span className="text-gray-1 text-xs">
                        &gt; linkedin
                    </span>
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </div>
                </div>
            </div>
            <div className="border border-transparent border-b-gray-3 h-12 flex flex-col justify-center">
                <Marquee words={MARQUEE_WORDS} />
            </div>
        </>
    )
}