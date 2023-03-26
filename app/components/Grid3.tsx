// @ts-nocheck
import { useEffect, useRef, useState } from "react";

const Component = () => {
    const canvas_ref = useRef(null);

    const [state, set_state] = useState<{
        [key: string]: any;
    }>({});

    useEffect(() => {
        const canvas = canvas_ref.current;
    }, []);

    const draw = (canvas) => {
        drawVisual = requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        canvasCtx.fillStyle = "rgb(0, 0, 0)";
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        const barWidth = (WIDTH / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            canvasCtx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
            canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

            x += barWidth + 1;
        }
    };

    const start = () => {
        const audio = new Audio("/sample.mp3");

        audio.play();

        const audio_context = new AudioContext();

        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);
        const dataArray = new Uint8Array(bufferLength);

        draw();
    };

    return (
        <>
            <button className="border border-red-500 fixed top-10 right-10" onClick={start}>
                foo
            </button>

            <canvas ref={canvas_ref} />
        </>
    );
};

export default Component;
