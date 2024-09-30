import { useEffect, useRef, useState } from 'react';

import Canvas from '@Components/Canvas';

type State = {
    analyser: AnalyserNode;
    data: Float32Array;
} | null;

const Component = ({ play }: { play: boolean }) => {
    const audio = useRef<HTMLAudioElement>(new Audio('/low_light.mp3'));

    audio.current.crossOrigin = 'anonymous';
    audio.current.loop = true;

    const [state, set_state] = useState<State>(null);

    useEffect(() => {
        // init only after use gesttture per Google warning
        if (play && !state) {
            const context = new AudioContext();
            const source = context.createMediaElementSource(audio.current);
            const analyser = context.createAnalyser();

            source.connect(analyser);

            analyser.connect(context.destination);
            analyser.fftSize = 1024;
            analyser.smoothingTimeConstant = 0.95;

            const data = new Float32Array(analyser.frequencyBinCount);

            set_state({
                analyser,
                data,
            });
        }

        play ? audio.current.play() : audio.current.pause();
    }, [play, state]);

    if (!state) return null;

    return <Canvas analyser={state.analyser} data={state.data} play={play} />;
};

export default Component;
