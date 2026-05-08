import { useState } from "react";

export interface PhotoProps {
    src: string;
    alt: string;
    tags: Array<string>;
}

export interface GalleryGridProps {
    photos: Array<PhotoProps>;
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
    const [active, setActive] = useState("all");
    const [popup, setPopup] = useState<string | null>(null);

    const tags = ["all", ...Array.from(new Set(photos.flatMap(p => p.tags)))];
    const filtered = active === "all" ? photos : photos.filter(p => p.tags.includes(active));

    return (
        <div className="px-4 py-6 mx mx-auto mt-16 md:w-[800px]">
            <div className="flex gap-2 mb-6 flex-wrap">
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setActive(tag)}
                        className={`px-3 py-1 border text-sm cursor-pointer ${active === tag ? "bg-fg text-bg" : ""}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {filtered.map(p => (
                    <img
                        key={p.src}
                        src={p.src}
                        alt={p.alt}
                        onClick={() => setPopup(p.src)}
                        className="w-full aspect-square object-cover rounded cursor-pointer hover:opacity-30 transition-opacity"
                    />
                ))}
            </div>

            {popup && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setPopup(null)}
                >
                    <img
                        src={popup}
                        alt=""
                        className="max-w-full max-h-full object-contain rounded"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
