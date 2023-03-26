import { useEffect, useRef, useState } from "react";

const Component = () => {
    const analyser = useRef<AnalyserNode | null>(null);
    const canvas = useRef<HTMLCanvasElement | null>(null);
    const data = useRef<Uint8Array | null>(null);
    const frame = useRef<number>(0);

    const [play, set_play] = useState<boolean>(false);

    useEffect(() => {
        const audio = new Audio("/sample.mp3");
        const context = new AudioContext();
        const source = context.createMediaElementSource(audio);
        const new_analyser = context.createAnalyser();

        source.connect(new_analyser);
        new_analyser.connect(context.destination);

        new_analyser.fftSize = 512;
        new_analyser.smoothingTimeConstant = 0.5;

        data.current = new Uint8Array(new_analyser.frequencyBinCount);
        analyser.current = new_analyser;
    }, []);

    useEffect(() => {
        if (play) {
            // audio.current.play();

            frame.current = requestAnimationFrame(animate);
        } else {
            // audio.current.pause();

            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [play]);

    const animate = () => {
        frame.current = requestAnimationFrame(animate);

        let x = 0;
    };

    const handle_click = () => set_play(!play);

    return (
        <>
            <button className="border border-red-500 fixed top-10 right-10" onClick={handle_click}>
                Start
            </button>

            <canvas ref={canvas} />
        </>
    );
};

export default Component;
