import "../styles/Polaroid.css"

export interface PolaroidProps {
    src: string
    text: string
}

export default function Polaroid({ src, text }: PolaroidProps) {
    return (
        <div className="pl-outer-body w-full h-80 bg-fg">
            <div className="pl-inner-frame border border-2 size-[80%] border-bg relative top-[8%] left-[10%]">
                <img src={src} alt={text} className="h-full w-full"></img>
            </div>
            <div className="pl-caption text-center font-mono relative top-[12%]">
                <span className="text-bg">{text}</span>
            </div>
        </div>
    )
}