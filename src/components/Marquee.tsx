import "../styles/Marquee.css";

export interface MarqueeProps {
    words: Array<string>
}

export default function Marquee({ words }: MarqueeProps) {
    return (
        <div className="overflow-hidden pl-6" aria-hidden="true">
            <div className="marquee-inner gap-12 w-max whitespace-nowrap flex">
                {
                    [...words, ...words].map((w, idx) => {
                        return (
                            <span key={idx} className="inline-flex gap-12 align-center text-gray-2">
                                {w}
                                {
                                    idx != words.length - 1 && (
                                        <span className="marquee-separator text-gray-1">
                                            +
                                        </span>
                                    )
                                }
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}