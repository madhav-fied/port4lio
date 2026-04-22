const SWARAS = {
    "s": {
        id: "Sa",
        multiplier: 1,
    },
    "r1": {
        id: "Re",
        multiplier: 9 / 8,
    },
    "g3": {
        id: "Ga",
        multiplier: 5 / 4,
    },
    "m1": {
        id: "Ma",
        multiplier: 4 / 3,
    },
    "p": {
        id: "Pa",
        multiplier: 3 / 2,
    },
    "d1": {
        id: "Dha",
        multiplier: 5 / 3,
    },
    "n3": {
        id: "Ne",
        multiplier: 15 / 8,
    },
    "S": {
        id: "Sa-",
        multiplier: 2,
    },
}

const STHAYIS = {
    "mandra": 120,
    "madhya": 240,
    "taara": 480,
}

let audioCtx = undefined;

let activeSthayi = "madhya"

const generate_sound = (multiplier, base_frequency) => {
    let frequency = base_frequency * multiplier;

    const playNote = () => {
        if (audioCtx == undefined) {
            audioCtx = new window.AudioContext();
        }
        let duration = 1
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
        oscillator.start();

        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        oscillator.stop(audioCtx.currentTime + duration);
    }

    return playNote;
}


const setClass = (element, className) => {
    element.classList.add(className);
}

const removeClass = (element, className) => {
    element.classList.remove(className);
}


Object.values(SWARAS).forEach((s) => {
    const element = document.querySelector(`.${s.id}`);
    element.addEventListener('click', () => {
        generate_sound(s.multiplier, STHAYIS[activeSthayi])()
    });
})


Object.entries(STHAYIS).forEach(([key, _]) => {
    const element = document.querySelector(`.${key}`);
    element.addEventListener('click', () => {
        removeClass(document.querySelector(`.${activeSthayi}`), 'active-sthayi');
        setClass(document.querySelector(`.${key}`), 'active-sthayi');
        document.querySelectorAll(`.${activeSthayi}-sthayi`).forEach((e) => {
            removeClass(e, 'active-sthayi')
        })
        activeSthayi = key;
        document.querySelectorAll(`.${activeSthayi}-sthayi`).forEach((e) => {
            setClass(e, 'active-sthayi')
        })
    })
})
