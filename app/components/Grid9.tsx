import { useEffect, useRef, useState } from "react";

const Component = () => {
    const audio = useRef<HTMLAudioElement>(new Audio("/low_light.mp3"));
    const analyser = useRef<AnalyserNode | null>(null);
    const canvas = useRef<HTMLCanvasElement>(null);
    const canvas_context = useRef<CanvasRenderingContext2D | null>(null);
    const data = useRef<Uint8Array | null>(null);
    const frame = useRef<number>(0);
    const max = useRef<number>(0);

    const [play, set_play] = useState<boolean>(false);

    useEffect(() => {
        // Prevent additional paints
        if (!canvas.current || canvas_context.current) return;

        canvas.current.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.current.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        canvas_context.current = canvas.current.getContext("2d");
    }, []);

    useEffect(() => {
        if (play) {
            // init
            if (!analyser.current) {
                const context = new AudioContext();
                const source = context.createMediaElementSource(audio.current);
                analyser.current = context.createAnalyser();

                source.connect(analyser.current);
                analyser.current.connect(context.destination);

                analyser.current.fftSize = 256;
                analyser.current.smoothingTimeConstant = 0.85;

                data.current = new Uint8Array(analyser.current.frequencyBinCount);
            }

            audio.current?.play();

            frame.current = requestAnimationFrame(animate);
        } else {
            audio.current?.pause();

            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [play]);

    const animate = () => {
        frame.current = requestAnimationFrame(animate);

        let x = 0;

        if (!analyser.current || !canvas.current || !canvas_context.current || !data.current) return;

        analyser.current.getByteFrequencyData(data.current);

        canvas_context.current.fillStyle = "#171717";
        canvas_context.current.fillRect(0, 0, canvas.current.width, canvas.current.height);

        canvas_context.current.beginPath();
        canvas_context.current.lineWidth = 5;
        canvas_context.current.strokeStyle = "white";
        canvas_context.current.moveTo(0, canvas.current.height);

        for (let i = 0; i < analyser.current.frequencyBinCount; i++) {
            const y = data.current[i];

            canvas_context.current.lineTo(x, y + canvas.current.width / 4);

            x += max.current / analyser.current.frequencyBinCount;

            // if (y > max.current) max.current = y;

            // x += (max.current / analyser.current.frequencyBinCount) * (canvas.current.width / max.current) * 2;
        }

        canvas_context.current.stroke();
        canvas_context.current.closePath(); // Close the current path.
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
