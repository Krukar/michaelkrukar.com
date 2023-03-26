import { useRef } from "react";

const Component = () => {
    const canvas_ref = useRef(null);

    const handle_start = () => {
        const audio = new Audio("/sample.mp3");

        audio.play();

        const audio_context = new AudioContext();
        const source = audio_context.createMediaElementSource(audio);
        const analyser = audio_context.createAnalyser();

        const canvas: any = canvas_ref.current;

        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        canvas.width = width;
        canvas.height = height;

        const canvas_context = canvas.getContext("2d");

        source.connect(analyser);
        analyser.connect(audio_context.destination);

        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.9;

        const buffer_length = analyser.frequencyBinCount;

        const data = new Uint8Array(buffer_length);

        const bar_width = (width / buffer_length) * 2.5;

        let x = 0;

        const renderFrame = () => {
            requestAnimationFrame(renderFrame);

            x = 0;

            analyser.getByteFrequencyData(data);

            canvas_context.fillStyle = "#171717";
            canvas_context.fillRect(0, 0, width, height);

            for (let i = 0; i < buffer_length; i++) {
                const bar_height = data[i];

                var r = bar_height + 25 * (i / buffer_length);
                var g = 0;
                var b = 0;

                canvas_context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                canvas_context.fillRect(x, height / 2 - bar_height, bar_width, bar_height);

                x += bar_width + 1;
            }
        };

        renderFrame();
    };

    return (
        <>
            <button className="border border-red-500 fixed top-10 right-10" onClick={handle_start}>
                foo
            </button>

            <canvas ref={canvas_ref} />
        </>
    );
};

export default Component;
