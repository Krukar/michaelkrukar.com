import { useEffect, useRef, useState } from "react";

const Component = () => {
    const canvas_ref = useRef(null);

    const [state, set_state] = useState<{
        [key: string]: any;
    }>({});

    const draw = (context: CanvasRenderingContext2D, frame_count: number) => {
        // console.log("audio", audio);

        // analyse the audio here?
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.fillStyle = "#FF0000";

        context.beginPath();
        context.arc(50, 100, 20 * Math.sin(frame_count * 0.05) ** 2, 0, 2 * Math.PI);

        context.fill();

        if (analyser) {
            var frequency = frequencySource[particle.index];
            var frequencyAdd = frequency / 10;

            particle.y = frequencyAdd + particleDistanceTop;
        }

        if (state.analyser) {
        }
    };

    useEffect(() => {
        const canvas = canvas_ref.current;

        // @ts-ignore
        const context: CanvasRenderingContext2D = canvas.getContext("2d");

        let frame_count = 0;
        let animation_frame_id: any;

        const render = () => {
            frame_count++;

            draw(context, frame_count);

            animation_frame_id = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.cancelAnimationFrame(animation_frame_id);
        };
    }, [draw]);

    const start = () => {
        const audio = new Audio("/sample.mp3");

        audio.play();

        const audio_context = new AudioContext();

        const analyser = audio_context.createAnalyser();
        analyser.connect(audio_context.destination);
        analyser.smoothingTimeConstant = 0.75;
        analyser.fftSize = 512 * 32;

        const source = audio_context.createMediaElementSource(audio);

        source.connect(analyser);

        const frequency_source = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(frequency_source);

        set_state({
            ...state,
            frequency_source,
        });
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
