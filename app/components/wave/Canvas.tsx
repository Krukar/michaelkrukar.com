import { useEffect, useRef } from "react";

const Component = ({ audio, play }: { audio: HTMLAudioElement; play: boolean }) => {
    // TODO: Clean this up: What can go in the state?
    const analyser = useRef<AnalyserNode | null>(null);
    const canvas = useRef<HTMLCanvasElement>(null);
    const canvas_context = useRef<CanvasRenderingContext2D | null>(null);
    const data = useRef<Float32Array | null>(null);
    const frame = useRef<number>(0);

    useEffect(() => {
        // Prevent additional paints
        if (!canvas.current || canvas_context.current) return;

        canvas.current.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.current.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        canvas_context.current = canvas.current.getContext("2d");

        window.addEventListener("resize", handle_resize);

        return () => window.removeEventListener("resize", handle_resize);
    }, []);

    useEffect(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();

        if (play) {
            // init
            if (!analyser.current) {
                const context = new AudioContext();
                const source = context.createMediaElementSource(audio);
                analyser.current = context.createAnalyser();

                source.connect(analyser.current);
                analyser.current.connect(context.destination);

                analyser.current.fftSize = 1024;
                analyser.current.smoothingTimeConstant = 0.95;

                data.current = new Float32Array(analyser.current.frequencyBinCount);

                audio.loop = true;
            }

            audio.play();

            frame.current = requestAnimationFrame(animate);
        } else {
            audio.pause();

            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [play]);

    const animate = () => {
        frame.current = requestAnimationFrame(animate);

        let x = 0;

        if (!analyser.current || !canvas.current || !canvas_context.current || !data.current) return;

        analyser.current.getFloatFrequencyData(data.current);

        canvas_context.current.fillStyle = "#171717";
        canvas_context.current.fillRect(0, 0, canvas.current.width, canvas.current.height);

        canvas_context.current.beginPath();
        canvas_context.current.lineWidth = 0.75;
        canvas_context.current.lineCap = "round";
        canvas_context.current.strokeStyle = "#EA002A";
        canvas_context.current.moveTo(0, 0);

        for (let i = 0; i < analyser.current.frequencyBinCount; i++) {
            const y = -data.current[i] * 4;

            x += canvas.current.width / analyser.current.frequencyBinCount;

            canvas_context.current.lineTo(x, y);
        }

        canvas_context.current.stroke();
        canvas_context.current.closePath();
    };

    const handle_resize = () => {
        if (!canvas.current) return;

        canvas.current.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.current.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };

    return <canvas ref={canvas} />;
};

export default Component;
