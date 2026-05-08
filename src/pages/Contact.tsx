import { useState } from "react";
import Nav from "../components/Nav";
import { redirect, downloadFile } from "../utils/links";
import "../styles/Contact.css";

const MAIL = "madhavcv2116@gmail.com";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSend = () => {
        if (!name.trim()) return setError("name is required.");
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("valid email is required.");
        if (!message.trim()) return setError("message cannot be empty.");

        const subject = encodeURIComponent(`portfolio contact — ${name}`);
        const body = encodeURIComponent(`from: ${name} <${email}>\n\n${message}`);
        window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`;

        setError("");
        setName("");
        setEmail("");
        setMessage("");
    };

    const inputClass =
        "bg-transparent border border-gray-3 text-gray-1 placeholder:text-gray-3 text-xs p-2 outline-none focus:border-gray-2 transition-colors";

    return (
        <>
            <Nav />
            <div className="contact-page mt-16">
                <div className="border border-gray-3 flex flex-col gap-2 p-4">
                    <span className="text-gray-1">&gt; contact</span>
                    <span className="text-gray-2 text-xs leading-relaxed">
                        Reach out if you would want to collaborate or get in touch!!
                    </span>
                </div>

                <div className="grid grid-cols-2 border border-t-0 border-gray-3">
                    <div className="border-r border-gray-3 flex flex-col gap-2 p-4">
                        <span className="text-gray-1 text-xs">&gt; email</span>
                        <span className="text-gray-2 text-xs break-all">madhavcv2116@email.com</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <span className="text-gray-1 text-xs">&gt; status</span>
                        <span className="text-gray-2 text-xs">open to build great things together.</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 border border-t-0 border-gray-3">
                    <div className="border-r border-gray-3 flex flex-col gap-2 p-4 cursor-pointer" onClick={() => redirect("rd-github")}>
                        <span className="text-gray-1 text-xs">&gt; github</span>
                        <span className="text-gray-2 text-xs">madhav-fied</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 cursor-pointer" onClick={() => redirect("rd-linkedin")}>
                        <span className="text-gray-1 text-xs">&gt; linkedin</span>
                        <span className="text-gray-2 text-xs">Narasiman</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 border border-t-0 border-gray-3">
                    <div className="border-r border-gray-3 flex flex-col gap-2 p-4 cursor-pointer" onClick={() => redirect("rd-x")}>
                        <span className="text-gray-1 text-xs">&gt; x(twitter)</span>
                        <span className="text-gray-2 text-xs">placeholder</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 cursor-pointer" onClick={() => downloadFile("/Narasiman_Resume.pdf", "Narasiman_Resume.pdf")}>
                        <span className="text-gray-1 text-xs">&gt; resume</span>
                        <span className="text-gray-2 text-xs">Narasiman_Resume.pdf</span>
                    </div>
                </div>

                <div className="border border-t-0 border-gray-3 flex flex-col gap-3 p-4">
                    <span className="text-gray-1 text-xs">&gt; message</span>

                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={e => { setName(e.target.value); setError(""); }}
                        className={inputClass}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setError(""); }}
                        className={inputClass}
                    />
                    <textarea
                        placeholder="message"
                        rows={5}
                        value={message}
                        onChange={e => { setMessage(e.target.value); setError(""); }}
                        className={`${inputClass} resize-none`}
                    />

                    {error && <span className="text-xs text-gray-1"> {error}</span>}

                    <button
                        onClick={handleSend}
                        className="border border-gray-3 text-gray-1 text-xs py-2 hover:border-gray-1 hover:text-fg transition-colors"
                    >
                        send
                    </button>
                </div>

            </div>
        </>
    );
}
