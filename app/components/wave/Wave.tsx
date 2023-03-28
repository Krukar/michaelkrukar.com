import { MouseEvent, useRef, useState } from "react";

import Canvas from "@Components/wave/Canvas";

import Mute from "@Svgs/Mute";
import Volume from "@Svgs/Volume";

const Component = () => {
    const audio = useRef<HTMLAudioElement>(new Audio("https://krukar.space/low_light.mp3"));
    audio.current.crossOrigin = "anonymous";
    audio.current.loop = true;

    const analyser = useRef<AnalyserNode | null>(null);
    const data = useRef<Float32Array | null>(null);

    const [play, set_play] = useState<boolean>(false);

    const handle_click = (new_play: boolean) => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();

        // To comply with Google standards, audio context cannot be initialized until a user gesture
        if (!analyser.current) {
            const context = new AudioContext();
            const source = context.createMediaElementSource(audio.current);
            analyser.current = context.createAnalyser();

            source.connect(analyser.current);
            analyser.current.connect(context.destination);

            analyser.current.fftSize = 1024;
            analyser.current.smoothingTimeConstant = 0.95;

            data.current = new Float32Array(analyser.current.frequencyBinCount);
        }

        new_play ? audio.current.play() : audio.current.pause();

        document.body.classList.toggle("playing");

        set_play(new_play);
    };

    return (
        <div>
            <div className="fixed top-9 right-9">
                <button className="link--fade h-8 text-krukar" onClick={(e: MouseEvent<HTMLElement>) => handle_click(!play)}>
                    {play ? <Volume /> : <Mute />}
                </button>
            </div>

            {analyser.current && data.current && <Canvas analyser={analyser.current} data={data.current} play={play} />}
        </div>
    );
};

export default Component;
