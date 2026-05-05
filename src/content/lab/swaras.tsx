import { useState, useRef } from 'react';

export const meta = {
    "title": "Swaras",
    "date": "2026-05-01",
    "slug": "/lab/swaras",
};

const SWARAS = [
    { id: 'Sa', label: 'Sa', multiplier: 1 },
    { id: 'Re', label: 'Re', multiplier: 9 / 8 },
    { id: 'Ga', label: 'Ga', multiplier: 5 / 4 },
    { id: 'Ma', label: 'Ma', multiplier: 4 / 3 },
    { id: 'Pa', label: 'Pa', multiplier: 3 / 2 },
    { id: 'Dha', label: 'Dha', multiplier: 5 / 3 },
    { id: 'Ne', label: 'Ne', multiplier: 15 / 8 },
    { id: "Sa'", label: "Sa'", multiplier: 2 },
];

const STHAYIS = [
    { key: 'mandra', label: 'Mandra', freq: 120 },
    { key: 'madhya', label: 'Madhya', freq: 240 },
    { key: 'taara', label: 'Taara', freq: 480 },
];

export default function Swaras() {
    const [activeSthayi, setActiveSthayi] = useState('madhya');
    const audioCtxRef = useRef<AudioContext | null>(null);

    const playNote = (multiplier: number) => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new window.AudioContext();
        }
        const ctx = audioCtxRef.current;
        const base = STHAYIS.find(s => s.key === activeSthayi)!.freq;
        const frequency = base * multiplier;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.01);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
        oscillator.stop(ctx.currentTime + 1);
    };

    return (
        <div className="flex flex-col gap-12 pt-12">
            <div>
                <div>Swaras of Indian Classical Music</div>
                <div className="flex items-center h-32">
                    {SWARAS.map((swara, i) => (
                        <button
                            key={swara.id}
                            onClick={() => playNote(swara.multiplier)}
                            aria-label={swara.id}
                            className={`bg-bg text-xs h-20 w-14 flex flex-col justify-center items-center border border-gray-1 cursor-pointer hover:bg-fg ${i < SWARAS.length - 1 ? 'border-r-0' : ''}`}
                        >
                            <span className={`text-[0.5rem] ${activeSthayi === 'taara' ? 'visible' : 'invisible'}`}>·</span>
                            <span>{swara.label}</span>
                            <span className={`text-[0.5rem] ${activeSthayi === 'mandra' ? 'visible' : 'invisible'}`}>·</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>Octave</div>
                <div>
                    {STHAYIS.map(s => (
                        <button
                            key={s.key}
                            onClick={() => setActiveSthayi(s.key)}
                            className={`px-3 py-1 border border-gray-1 text-xs cursor-pointer ${activeSthayi === s.key ? 'bg-bg text-fg' : 'bg-fg text-bg hover:border-1'}`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
