import { useEffect, useRef, useState } from "react";

const Component = () => {
    const canvas_ref = useRef(null);

    const handle_click = () => {
        // Audio
        const audio = new Audio("/sample.mp3");

        const audio_context = new AudioContext();
        const source = audio_context.createMediaElementSource(audio);
        const analyser = audio_context.createAnalyser();

        const data = new Uint8Array(analyser.frequencyBinCount);

        // Canvas
        const canvas: any = canvas_ref.current;
        canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        const canvas_context = canvas.getContext("2d");

        requestAnimationFrame(() => animate(analyser, canvas_context, data));
    };

    const animate = (analyser: any, canvas_context: any, data: any) => {
        let x = 0;

        analyser.getByteFrequencyData(data);

        // animate(analyser, canvas_context, data);
    };

    // const renderFrame = (analyser: any) => {
    //     const e = requestAnimationFrame(renderFrame);

    //     let x = 0;

    //     analyser.getByteFrequencyData(data);

    //     canvas_context.fillStyle = "#171717";
    //     canvas_context.fillRect(0, 0, width, height);

    //     for (let i = 0; i < buffer_length; i++) {
    //         const bar_height = data[i];

    //         var r = bar_height + 25 * (i / buffer_length);
    //         var g = 0;
    //         var b = 0;

    //         canvas_context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    //         canvas_context.fillRect(x, height / 2 - bar_height, bar_width, bar_height);

    //         x += bar_width + 1;
    //     }
    // };

    return (
        <>
            <button className="border border-red-500 fixed top-10 right-10" onClick={handle_click}>
                foo
            </button>

            <canvas ref={canvas_ref} />
        </>
    );
};

export default Component;
